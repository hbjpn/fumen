import "@babel/polyfill";
import * as common from "../common/common";
import * as graphic from "./graphic";

export class Renderer {
    constructor() {}
    render() {
        console.log("Run renderer");
	}

	get_boundary_sign(e) {
        if (e === null) return "n";
        else if (e instanceof common.MeasureBoundaryMark) {
            if (e.nline == 1) return "s";
            else if (e.nline == 2) return "d";
        } else if (e instanceof common.LoopBeginMark) {
            return "b";
        } else if (e instanceof common.LoopEndMark) {
            return "e";
        } else if (e instanceof common.LoopBothMark) {
            return "B";
        } else if (e instanceof common.MeasureBoundaryFinMark) {
            return "f";
        } else if (e instanceof common.MeasureBoundaryDblSimile) {
            return "r";
        }
        throw "Invalid boundary object";
    }

    boundary_type_without_line_break(b0, b1) {
        // b0 and b1 must be either following characters
        // s : Single, d : Double, b: Loop Begin, e: Loop End, B: Loop Both, r: Double Simile, n:null
        var profile = {
            ss: "s",
            sd: "d",
            sb: "b",
            sn: "s",
            ds: "d",
            dd: "d",
            db: "b",
            dn: "d",
            es: "e",
            ed: "e",
            ee: "e",
            eb: "B",
            en: "e",
            bb: "b",
            BB: "B",
            fn: "f",
            rr: "r",
            ns: "s",
            nd: "d",
            nb: "b"
        };
        var key = this.get_boundary_sign(b0) + this.get_boundary_sign(b1);
        if (key in profile) {
            return profile[key];
        }
        throw "Invalid boundary pair : " + key;
    }

    boundary_type_with_line_break(b0, b1, side) {
        // b0 and b1 must be either following characters
        // s : Single, d : Double, b: Loop Begin, e: Loop End, B: Loop Both, r: Double Simile, n:null
        // side must be either 'end' or 'begin'
        var profile = {
            ss: "ss",
            sd: "sd",
            sb: "sb",
            ds: "ds",
            dd: "dd",
            db: "db",
            es: "es",
            ed: "ed",
            ee: "es",
            eb: "eb",
            bb: "sb",
            BB: "eb",
            rr: "rr"
        };
        var key = this.get_boundary_sign(b0) + this.get_boundary_sign(b1);
        if (key in profile) {
            return profile[key][side == "begin" ? 1 : 0];
        }
        throw "Invalid boundary pair : " + key;
    }

    classifyElements(measure) {
        var m = measure;
        var header_elements = new Array();
        var body_elements = new Array();
        var footer_elements = new Array();
        var measure_wide_elements = new Array();

        // For simile marks
        var simile_body_idx = new Array();
        var simile_measure_wide_idx = new Array();
        var simile_objs = new Array();

        for (var ei = 0; ei < m.elements.length; ++ei) {
            var e = m.elements[ei];
            if (ei == 0) {
                // First element must be boundary
                header_elements.push(e);
            } else if (ei == m.elements.length - 1) {
                // Last element must be boundary
                footer_elements.push(e);
            } else {
                if (e instanceof common.Chord) {
                    body_elements.push(e);
                } else if (e instanceof common.Rest) {
                    body_elements.push(e);
                } else if (e instanceof common.LoopIndicator) {
                    measure_wide_elements.push(e);
                } else if (e instanceof common.LongRestIndicator) {
                    measure_wide_elements.push(e);
                } else if (e instanceof common.Simile) {
                    // Simile is body elements when at least one another body element(including another simile) exsits, otherwise measure wide elements.
                    // Judge after screeining.
                    simile_body_idx.push(body_elements.length);
                    simile_measure_wide_idx.push(measure_wide_elements.length);
                    simile_objs.push(e);
                } else if (e instanceof common.Time) {
                    // Time mark is treated as header element irrespective of its positionat the second element is treated as header part
                    header_elements.push(e);
                } else if (e instanceof common.DaCapo) {
                    footer_elements.push(e);
                } else if (e instanceof common.DalSegno) {
                    footer_elements.push(e);
                } else if (e instanceof common.Segno) {
                    header_elements.push(e);
                } else if (e instanceof common.Coda) {
                    header_elements.push(e);
                } else if (e instanceof common.ToCoda) {
                    footer_elements.push(e);
                } else if (e instanceof common.Fine) {
                    footer_elements.push(e);
                } else if (e instanceof common.Comment) {
                    header_elements.push(e);
                } else if (e instanceof common.Lyric) {
                    header_elements.push(e);
                } else{
					throw "Unkown component found";
				}
            }
        }

        if (body_elements.length > 0 || simile_objs.length >= 2) {
            // simile makrs are all body elements
            for (var i = 0; i < simile_body_idx.length; ++i) {
                body_elements.splice(simile_body_idx[i] + i, 0, simile_objs[i]);
            }
        } else if (simile_objs.length >= 1) {
            // simile mark is measure wide element
            if (simile_objs.length != 1) {
                throw "Error on classifying simile marks";
            }
            measure_wide_elements.splice(simile_body_idx[0], 0, simile_objs[0]);
        }

        return {
            header: header_elements,
            body: body_elements,
            footer: footer_elements,
            measure_wide: measure_wide_elements
        };
    }
	
	chord_elem_classify(chord, transpose, half_type) {
        var bases = chord.getChordStrBase(transpose, half_type);
        var elems = chord.mid_elem_objs;

        // if bases are null, elems are null, then it is just a duration information
        if (bases[0] == null && bases[1] == null && elems === undefined) {
            //x += (C7_width * x_global_scale * body_scaling + chord_space * body_scaling);
            return { bases: bases };
        }

        var _3rdelem = [];
        var _5thelem = [];
        var _6791113suselem = [];
        var _alteredelem = []; // #11, #9, b9, #13, b13,

        if (elems) {
            var _6exists = false,
                _9exists = false;
            for (var i = 0; i < elems.length; ++i) {
                var e = elems[i];
                switch (e.type) {
                    case "M":
                        if (e.param !== undefined) _6791113suselem.push(e);
                        else _3rdelem.push(e);
                        break;
                    case "m":
                        _3rdelem.push(e);
                        break;
                    case "add":
                        _6791113suselem.push(e);
                        break;
                    case "sus":
                        _6791113suselem.push(e);
                        break;
                    case "dig":
                        _6791113suselem.push(e);
                        _6exists |= e.param == "6";
                        _9exists |= e.param == "9";
                        break;
                    case "b":
                    case "#":
                        if (e.param == "5") _5thelem.push(e);
                        else _alteredelem.push(e);
                        break;
                    case "dim":
                        _6791113suselem.push(e);
                        break;
                    case "alt":
                        _alteredelem.push(e);
                        break;
                }
            }
        }

        return {
            bases: bases,
            _3rdelem: _3rdelem,
            _5thelem: _5thelem,
            _6791113suselem: _6791113suselem,
            _alteredelem: _alteredelem,
            _6_and_9_exists: _6exists && _9exists
		};
    }
    
    render_rs_area(
        x,
        elems,
        paper,
        rs_y_base,
        _5lines_intv,
        meas_start_x,
        meas_end_x,
        draw,
        chord_space,
        body_scaling,
        x_global_scale,
        music_context,
        meas,
        param
    ) {
        // chords is list of chords for each chord object has .renderprop.x property
        // All elements shall have length indicators
        var balken_width = "3px";

        let balken = {
            groups: []
        };

        var drawn = false;
        var group = null; //paper.set();

        // elements in a measure
        for (var ei = 0; ei < elems.length; ++ei) {
            var e = elems[ei];
            // no duration information
            if (e.nglist === null) {
                throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
            }

            //var x = e.renderprop.x;
            var barlen = 15;
            var flagintv = 5;
            var chord_length = 10000000;

            var rhythm_only = e.nglist[0].nr === null;
            var group_y = [];
            var pos_on_5lines = []; // For notes only. bottom line is 0, second bottom line is 2, ... top line is 8
            var has_tie = false;
            var sharp_flats = [];

            drawn = true;
            // Currently only one ng is assumed
            for (var ngi = 0; ngi < e.nglist.length; ++ngi) {
                var ng = e.nglist[ngi];
                var nr = ng.nr;
                var d = ng.lengthIndicator.base; //ng.length_s.match(/[0-9]+/)[0];
                var numdot = ng.lengthIndicator.numdot; //ng.length_s.substr(d.length);
                chord_length = Math.min(
                    ng.lengthIndicator.length,
                    chord_length
                ); // Take the note group of min-length. TODO for cater for multi-group notes
                has_tie = ng.lengthIndicator.has_tie; //ng.has_tie;
                if (nr === null) {
                    // slash or rest
                    group_y.push(parseInt(rs_y_base + _5lines_intv * 2)); // center
                    pos_on_5lines.push(4); // Not used, but put center line for now.
                } else {
                    // notes
                    for (var nri = 0; nri < nr.length; ++nri) {
                        var dy = _5lines_intv / 2; // 1/2 of interval of 5 lines
                        var NLIST = {
                            C: 0,
                            D: 1,
                            E: 2,
                            F: 3,
                            G: 4,
                            A: 5,
                            B: 6
                        };
                        var pos_idx =
                            NLIST[nr[nri].note.name] +
                            7 * (nr[nri].note.octave - 3); // C3 is 0
                        var yoffset = pos_idx * dy; // C3 offset = 0
                        var ypos = rs_y_base + dy * 10 - yoffset; // rs_y_base corresopnds to the center of rs region and is corresponding to A3 when the notes are drawn with "top".
                        var pos_on_5line = Math.round(yoffset / dy) - 2;
                        group_y.push(ypos);
                        pos_on_5lines.push(pos_on_5line);
                        if (
                            music_context.accidental_info[pos_idx] ==
                            nr[nri].note.accidental
                        )
                            sharp_flats.push(null);
                        // no need of accidental. null is no mark. 0 is natural.
                        else sharp_flats.push(nr[nri].note.accidental); // 0 is natural. null is no mark.
                        music_context.accidental_info[pos_idx] =
                            nr[nri].note.accidental;
                    }
                }
            }

            // TODO : To cater for multi-group notes rendering

            // Flush current groups
            if (
                (chord_length >= common.WHOLE_NOTE_LENGTH / 4 || e instanceof common.Rest) &&
                balken.groups.length > 0
            ) {
                var dbret = this.draw_notes(
                    draw, 
                    x,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    _5lines_intv,
                    meas_start_x,
                    meas_end_x,
                    body_scaling,
                    x_global_scale,
                    barlen,
                    flagintv,
                    balken_width,
                    music_context,
                    meas,
                    param
                );
                balken.groups = [];
                x = dbret.x;
            }
            music_context.pos_in_a_measure += chord_length;
            balken.groups.push({
                e: e,
                type:
                    e instanceof common.Rest
                        ? "rest"
                        : rhythm_only
                        ? "slash"
                        : "notes",
                numdot: numdot,
                coord: [x, group_y],
                onka: d,
                has_tie: has_tie,
                pos_on_5lines: pos_on_5lines, // for notes only
                lengthIndicator: e.nglist[0].lengthIndicator,
                sharp_flats: sharp_flats, // for notes only
                renderprop: {} // for internal use
            });
            if (
                e instanceof common.Rest ||
                chord_length >= common.WHOLE_NOTE_LENGTH / 4 ||
                music_context.pos_in_a_measure % (common.WHOLE_NOTE_LENGTH / 4) == 0 ||
                ei == elems.length - 1
            ) {
                let dbret = this.draw_notes(
                    draw, 
                    x,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    _5lines_intv,
                    meas_start_x,
                    meas_end_x,
                    body_scaling,
                    x_global_scale,
                    barlen,
                    flagintv,
                    balken_width,
                    music_context,
                    meas,
                    param
                );
                x = dbret.x;
                balken.groups = [];
            }
        }

        return { x: x };
    }

    draw_notes(
        draw, 
        x,
        paper,
        group,
        balken,
        rs_y_base,
        _5lines_intv,
        meas_start_x,
        meas_end_x,
        body_scaling,
        x_global_scale,
        barlen,
        flagintv,
        balken_width,
        music_context,
        meas,
        param
    ) {
        // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes

        let balken_group_size = 10;
        let width = balken_group_size * balken.groups.length;
        if(!draw){
            return {x:x + width};
        }

        var deltax_acc = 10;

        // 1. determine the flag direction here
        var center_y = 0.0;
        var min_y = 10000000;
        var max_y = 0;
        var gbi_at_min_y = null;
        var gbi_at_max_y = null;
        var cnt_y = 0;

        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            var c = balken.groups[gbi].coord;

            for (var ci = 0; ci < c[1].length; ++ci) {
                center_y += c[1][ci];
                if (min_y > c[1][ci]) {
                    min_y = c[1][ci];
                    gbi_at_min_y = gbi;
                }
                if (max_y < c[1][ci]) {
                    max_y = c[1][ci];
                    gbi_at_max_y = gbi;
                }
                cnt_y += 1;
            }
        }
        center_y = Math.floor(center_y / cnt_y);
        var upper_flag = center_y > rs_y_base + _5lines_intv * 2;

        // 2. Draw notes and slashes without bars, flags and balkens
        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            //var x = balken.groups[gbi].coord[0];
            var ys = balken.groups[gbi].coord[1];
            var d = balken.groups[gbi].onka;
            var pos_on_5lines = balken.groups[gbi].pos_on_5lines;
            var sharp_flats = balken.groups[gbi].sharp_flats;
            var numdot = balken.groups[gbi].numdot;

            var bo_group = null; //paper.set();

            var note_x_center = x;

            if (balken.groups[gbi].type == "slash") {
                if (d == "0" || d == "1") {
                    this.raphaelSlash(
                        paper,
                        bo_group,
                        note_x_center,
                        ys[0],
                        d,
                        numdot,
                        _5lines_intv
                    );
                } else {
                    this.raphaelSlash(
                        paper,
                        bo_group,
                        note_x_center,
                        ys[0],
                        d,
                        numdot,
                        _5lines_intv
                    );
                }
            } else if (balken.groups[gbi].type == "notes") {
                var accidental_exists = balken.groups[gbi].sharp_flats.some(
                    function(sf) {
                        return sf !== null;
                    }
                );
                var as = accidental_exists ? deltax_acc : 0;
                note_x_center = x + as;

                for (let ci = 0; ci < ys.length; ++ci) {
                    var y = ys[ci];

                    // eslint-disable-next-line no-empty
                    if (d == "0") {
                    } else if (d == "1") {
                        /*text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue700",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );*/
                        graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/w1note.svg"],
                            note_x_center, y, null, _5lines_intv, "lm");
                    } else if (d == "2") {
                        /*text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue701",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );*/
                        graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/w2note.svg"],
                        note_x_center, y, null, _5lines_intv, "lm");
                    } else {
                        /*text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue702",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );*/
                        graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/bnote.svg"],
                        note_x_center, y, null, _5lines_intv, "lm");
                    }
                    //bo_group.push(text);

                    // draw sharp, flat and natrual
                    // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
                    if (sharp_flats[ci] !== null) {
                        /*var SFN_YSHIFTS = { 11: -3, 1: 0, 0: 0 };
                        var SHARP_FLAT_CODE = { 11: "b", 1: "#", 0: "\ue900" };
                        text = raphaelText(
                            paper,
                            x,
                            y + SFN_YSHIFTS[sharp_flats[ci]],
                            SHARP_FLAT_CODE[sharp_flats[ci]],
                            14,
                            "lc",
                            "smart_music_symbol"
                        );
                        bo_group.push(text);
                        */
                        let svgname = { 11: "flat.svg", 1: "sharp.svg", 0: "natural.svg" };
                        let url = "assets/img/"+svgname[sharp_flats[ci]];
                        graphic.CanvasImage(paper, graphic.G_imgmap[url],
                            x, y, null, _5lines_intv*1.5, "lm");
                        
                    }

                    // dots
                    for (var i = 0; i < numdot; ++i) {
                        var dy =
                            pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;
                        /*bo_group.push(
                            paper
                                .circle(note_x_center + 12 + i * 5, y + dy, 1)
                                .attr({ fill: "black" })
                        );*/
                        graphic.CanvasCircle(paper, note_x_center + 12 + i * 5, y + dy, 1);
                    }

                    // Draw additional horizontal lines
                    for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
                        if (p5i % 2 != 0) continue;
                        var a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3
                        /*var o = paper
                            .path(
                                svgLine(
                                    note_x_center - 3,
                                    rs_y_base + a5y,
                                    note_x_center + 12,
                                    rs_y_base + a5y
                                )
                            )
                            .attr({ "stroke-width": "1px" });
                        bo_group.push(o);*/

                        graphic.CanvasLine(paper,
                            note_x_center - 3,
                            rs_y_base + a5y,
                            note_x_center + 12,
                            rs_y_base + a5y,
                            {width:1});
                    }
                    for (let p5i = pos_on_5lines[ci]; p5i >= 10; --p5i) {
                        if (p5i % 2 != 0) continue;
                        let a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3
                        /*let o = paper
                            .path(
                                svgLine(
                                    note_x_center - 3,
                                    rs_y_base + a5y,
                                    note_x_center + 12,
                                    rs_y_base + a5y
                                )
                            )
                            .attr({ "stroke-width": "1px" });
                        bo_group.push(o);*/

                        graphic.CanvasLine(paper,
                            note_x_center - 3,
                            rs_y_base + a5y,
                            note_x_center + 12,
                            rs_y_base + a5y,
                            {width:1});
                    }
                }
            } else if (balken.groups[gbi].type == "rest") {
                /*var rr = render_rest(
                    balken.groups[gbi].e,
                    paper,
                    true,
                    x,
                    rs_y_base,
                    0,
                    _5lines_intv,
                    param
                );
                bo_group.push(rr.group);*/

                this.render_rest_plain(
                    balken.groups[gbi].e,
                    paper,
                    true,
                    x,
                    rs_y_base,
                    0,
                    _5lines_intv,
                    this.param
                );
            }

            if (music_context.tie_info.rs_prev_has_tie) {
                // Draw tie line
                var pss = music_context.tie_info.rs_prev_coord;
                var psm = music_context.tie_info.rs_prev_meas;

                // Check the consistency.
                if (pss[1].length != ys.length) {
                    throw "INVALID TIE NOTATION";
                }

                let dy = 0;
                let sdx = 0;
                let round = 0;

                if (balken.groups[gbi].type == "slash") {
                    // slash only has down flag
                    dy = -10;
                    sdx = 12;
                    round = 6;
                } else {
                    // notes
                    if (upper_flag) {
                        dy = 3;
                        sdx = 12;
                        round = -6;
                    } else {
                        dy = -3;
                        sdx = 12;
                        round = 6;
                    }
                }

                for (let ci = 0; ci < ys.length; ++ci) {
                    let y = ys[ci];
                    if (y != pss[1][ci]) {
                        // Crossing measure row. Previous RS mark could be on another page.
                        // Make sure to create curve on the paper on which previous RS is drawn.
                        var brace_points = [
                            [pss[0] + sdx, pss[1][ci] + dy],
                            [pss[0] + sdx, pss[1][ci] - round + dy],
                            [
                                psm.renderprop.meas_end_x + 20,
                                pss[1][ci] - round + dy
                            ],
                            [psm.renderprop.meas_end_x + 20, pss[1][ci] + dy]
                        ];
                        /*
                        clip =
                            pss[0] +
                            sdx +
                            "," +
                            (pss[1][ci] - 50) +
                            "," +
                            (psm.renderprop.meas_end_x - (pss[0] + sdx) + 5) +
                            ",100";
                        console.log("brace:" + brace_points);
                        console.log("clip:" + clip);

                        var bl = music_context.tie_info.rs_prev_tie_paper
                            .path(svgArcBezie(brace_points))
                            .attr("stroke-width", "2px")
                            .attr({ "clip-rect": clip });
                        music_context.tie_info.rs_prev_tie_paper.set().push(bl);
                        */
                        graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points),
                            {"clip-rect":[pss[0]+sdx, (pss[1][ci] - 50), 
                                (psm.renderprop.meas_end_x - (pss[0] + sdx) + 5), 100]});

                        brace_points = [
                            [meas_start_x - 20, y + dy],
                            [meas_start_x - 20, y - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];
                        /*
                        clip =
                            meas_start_x -
                            5 +
                            "," +
                            (y - 50) +
                            "," +
                            (x - (meas_start_x - 5)) +
                            ",100";
                        //console.log("clip:"+clip);
                        bl = paper
                            .path(svgArcBezie(brace_points))
                            .attr("stroke-width", "2px")
                            .attr({ "clip-rect": clip });
                        group.push(bl);
                        */
                        graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points),
                            {"clip-rect":[meas_start_x - 5, (y - 50), 
                                (x - (meas_start_x - 5)), 100]});

                    } else {
                        let brace_points = [
                            [pss[0] + sdx, pss[1][ci] + dy],
                            [pss[0] + sdx, pss[1][ci] - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];
                        /*let bl = paper
                            .path(svgArcBezie(brace_points))
                            .attr("stroke-width", "2px");
                        group.push(bl);*/

                        graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points));
                    }
                }
            }

            music_context.tie_info.rs_prev_has_tie = balken.groups[gbi].has_tie;
            music_context.tie_info.rs_prev_tie_paper = paper;
            music_context.tie_info.rs_prev_coord = [
                x,
                balken.groups[gbi].coord[1]
            ];
            music_context.tie_info.rs_prev_meas = meas;

            balken.groups[gbi].e.renderprop.x = x;
            balken.groups[gbi].renderprop.x = x;
            balken.groups[gbi].renderprop.note_x_center = note_x_center;

            // Here is the only update of x
            /*
            x +=
                (bo_group.getBBox().width + 10) * body_scaling * x_global_scale; // TODO : 10 should be refined

            group.push(bo_group);*/
            x += balken_group_size * body_scaling; // TODO : FIXME to cater for actual width of components
        }

        // 3. Determine the flag intercept and slope
        var x_at_min_y = balken.groups[gbi_at_min_y].renderprop.note_x_center;
        var x_at_max_y = balken.groups[gbi_at_max_y].renderprop.note_x_center;
        var ps_y = balken.groups[0].coord[1];
        var ps_bar_x = balken.groups[0].renderprop.note_x_center;
        var pe_y = balken.groups[balken.groups.length - 1].coord[1];
        var pe_bar_x =
            balken.groups[balken.groups.length - 1].renderprop.note_x_center;

        let slope = 0;
        if (balken.groups.length >= 2) {
            var delta_y = upper_flag
                ? Math.min.apply(null, pe_y) - Math.min.apply(null, ps_y)
                : Math.max.apply(null, pe_y) - Math.max.apply(null, ps_y);
            slope = delta_y / (pe_bar_x - ps_bar_x);
        } else {
            slope = 1.0; // any value is OK
        }

        var intercept =
            (upper_flag ? min_y - barlen : max_y + barlen) -
            slope * (upper_flag ? x_at_min_y : x_at_max_y);

        // if flag is upper, then the balken is shifted +deltax, then intercept is updated.
        var deltax = upper_flag ? 8 : 0;
        intercept = intercept - slope * deltax;

        // 4. Draw bars, flags
        var bar_flag_group = null; //paper.set();
        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
            let note_x_center = balken.groups[gbi].renderprop.note_x_center;

            if (balken.groups[gbi].type == "slash") {
                let numdot = balken.groups[gbi].numdot;
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {
                    /*let o = paper
                        .path(
                            svgLine(
                                note_x_center,
                                ys[0] + 3 ,
                                note_x_center,
                                slope * note_x_center + intercept
                            )
                        )
                        .attr({ "stroke-width": "1px" });*/
                    
                        graphic.CanvasLine(paper,
                            note_x_center,
                            ys[0] + 3 /*rsr.bar_reduction*/,
                            note_x_center,
                            slope * note_x_center + intercept,
                            {width:1});
                }
                //bar_flag_group.push(o);
            } else if (balken.groups[gbi].type == "notes") {
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {
                    let ys = balken.groups[gbi].coord[1];
                    var y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.
                    /*let o = paper
                        .path(
                            svgLine(
                                note_x_center + deltax,
                                y0,
                                note_x_center + deltax,
                                slope * (note_x_center + deltax) + intercept
                            )
                        )
                        .attr({ "stroke-width": "1px" });
                    bar_flag_group.push(o);*/

                    graphic.CanvasLine(paper,
                        note_x_center + deltax,
                        y0,
                        note_x_center + deltax,
                        slope * (note_x_center + deltax) + intercept,
                        {width:1});
                }
            // eslint-disable-next-line no-empty
            } else if (balken.groups[gbi].type == "rest") {
            }
        }
        //group.push(bar_flag_group);

        // 5. Draw balkens

        if (balken.groups.length >= 2) {
            // Draw flag for balken
            // Common balken
            if (balken.groups[0].onka >= 8) {
                /*let o = paper
                    .path(
                        svgLine(
                            ps_bar_x + deltax,
                            slope * (ps_bar_x + deltax) + intercept,
                            pe_bar_x + deltax,
                            slope * (pe_bar_x + deltax) + intercept
                        )
                    )
                    .attr({ "stroke-width": balken_width });
                group.push(o);*/

                graphic.CanvasLine(paper,
                    ps_bar_x + deltax,
                    slope * (ps_bar_x + deltax) + intercept,
                    pe_bar_x + deltax,
                    slope * (pe_bar_x + deltax) + intercept,
                    {width:balken_width});
            }

            // Balken for each onka level
            var gg = this.to_same_value_group(balken.groups, function(o) {
                return o.onka;
            });
            for (var g = 0; g < gg.length; ++g) {
                var same_sds = gg[g];
                var sd = same_sds[0].onka;
                var numflag = common.myLog2(parseInt(sd)) - 2;

                if (same_sds.length == 1) {
                    var pssx = same_sds[0].renderprop.note_x_center;

                    // Determine which direction to draw flag. Determined from which neighboring
                    // rhythm is more natural to coupling with.
                    // Currently, simple strategy is adopted for now.
                    var dir = 1;
                    if (g == gg.length - 1) dir = -1;
                    var neighbor_x =
                        gg[g + dir][gg[g + dir].length - 1].renderprop.x;
                    var blen = Math.abs(neighbor_x - pssx) * 0.3;

                    for (var fi = 1; fi < numflag; ++fi) {
                        // fi=0 is alread drawn by common balken
                        //o = paper.path(svgLine(pss[0], rs_y_base+barlen-fi*flagintv, pss[0] + dir * blen, rs_y_base+barlen-fi*flagintv)).attr({'stroke-width':balken_width});
                        /*o = paper
                            .path(
                                svgLine(
                                    pssx + deltax,
                                    slope * (pssx + deltax) +
                                        intercept +
                                        (upper_flag ? +1 : -1) * fi * flagintv,
                                    pssx + deltax + dir * blen,
                                    slope * (pssx + deltax + dir * blen) +
                                        intercept +
                                        (upper_flag ? +1 : -1) * fi * flagintv
                                )
                            )
                            .attr({ "stroke-width": balken_width });
                        group.push(o);*/
                        graphic.CanvasLine(paper,
                            pssx + deltax,
                            slope * (pssx + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * flagintv,
                            pssx + deltax + dir * blen,
                            slope * (pssx + deltax + dir * blen) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * flagintv,
                            {width:balken_width});
                    }
                } else if (same_sds.length >= 2) {
                    let pssx = same_sds[0].renderprop.note_x_center;
                    var psex =
                        same_sds[same_sds.length - 1].renderprop.note_x_center;
                    for (
                        let fi = 1;
                        fi < numflag;
                        ++fi // fi=0 is alread drawn by common balken
                    ) {
                        /*let o = paper
                            .path(
                                svgLine(
                                    pssx + deltax,
                                    slope * (pssx + deltax) +
                                        intercept +
                                        (upper_flag ? +1 : -1) * fi * flagintv,
                                    psex + deltax,
                                    slope * (psex + deltax) +
                                        intercept +
                                        (upper_flag ? +1 : -1) * fi * flagintv
                                )
                            )
                            .attr({ "stroke-width": balken_width });
                        group.push(o);*/
                        graphic.CanvasLine(paper,
                            pssx + deltax,
                            slope * (pssx + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * flagintv,
                            psex + deltax,
                            slope * (psex + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * flagintv,
                            {width:balken_width});
                    }
                    if (same_sds[0].lengthIndicator.renpu) {
                        var ro = 12;
                        var center_x = (pssx + deltax + (psex + deltax)) / 2.0;
                        /*var text = raphaelText(
                            paper,
                            center_x,
                            slope * center_x +
                                intercept +
                                (upper_flag ? -ro : ro),
                            same_sds[0].lengthIndicator.renpu + "",
                            12,
                            "cc",
                            "realbook_music_symbol"
                        );
                        group.push(text);*/
                        let text = graphic.CanvasText(paper,
                            center_x,
                            slope * center_x +
                                intercept +
                                (upper_flag ? -ro : ro),
                            same_sds[0].lengthIndicator.renpu + "",
                            12,
                            "cc");

                        if (same_sds[0].onka < 8) {
                            var rno = 10;
                            var rnh = 4;
                            /*var clip =
                                text.getBBox().x +
                                "," +
                                text.getBBox().y +
                                "," +
                                text.getBBox().width +
                                "," +
                                text.getBBox().height;*/
                            var path1 = graphic.svgPath(
                                [
                                    [
                                        pssx + deltax,
                                        slope * (pssx + deltax) +
                                            intercept +
                                            (upper_flag ? -rnh : rnh)
                                    ],
                                    [
                                        pssx + deltax,
                                        slope * (pssx + deltax) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        center_x - 7,
                                        slope * (center_x - 7) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ]
                                ],
                                false
                            );
                            var path2 = graphic.svgPath(
                                [
                                    [
                                        center_x + 7,
                                        slope * (center_x + 7) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        psex + deltax,
                                        slope * (psex + deltax) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        psex + deltax,
                                        slope * (psex + deltax) +
                                            intercept +
                                            (upper_flag ? -rnh : rnh)
                                    ]
                                ],
                                false
                            );
                            graphic.CanvasPath(paper, path1);
                            graphic.CanvasPath(paper, path2);
                            /*
                            var o1 = paper
                                .path(path1)
                                .attr({ "stroke-width": "1px" });
                            group.push(o1);
                            var o2 = paper
                                .path(path2)
                                .attr({ "stroke-width": "1px" });
                            group.push(o2);
                            */
                        }
                    }
                }
            }
        } else if (
            balken.groups.length == 1 &&
            balken.groups[0].type != "rest"
        ) {
            // Normal drawing of flags
            let note_x_center = balken.groups[0].renderprop.note_x_center;
            let d = balken.groups[0].onka;
            let numflag = common.myLog2(parseInt(d)) - 2;
            for (let fi = 0; fi < numflag; ++fi) {
                /*let text = raphaelText(
                    paper,
                    note_x_center + deltax,
                    slope * (note_x_center + deltax) +
                        intercept +
                        (upper_flag ? 1 + fi * 6 : -1 - fi * 6),
                    upper_flag ? "\ue710" : "\ue711",
                    16,
                    "lc",
                    "smart_music_symbol"
                );
                group.push(text);*/

                let url = "assets/img/"+(upper_flag ? "flag_f.svg" : "flag_i.svg");
                graphic.CanvasImage(paper, graphic.G_imgmap[url],
                    note_x_center + deltax,
                    slope * (note_x_center + deltax) +
                        intercept +
                        (upper_flag ? 1 + fi * 6 : -1 - fi * 6),
                    null, null, "lm");
                
                // Additional vertical line
                /*var line = paper
                    .path(
                        svgLine(
                            note_x_center + deltax,
                            slope * (note_x_center + deltax) + intercept,
                            note_x_center + deltax,
                            slope * (note_x_center + deltax) +
                                intercept +
                                (upper_flag ? -8 : 8)
                        )
                    )
                    .attr({ "stroke-width": "1px" });
                group.push(line);*/

                graphic.CanvasLine(paper,
                    note_x_center + deltax,
                    slope * (note_x_center + deltax) + intercept,
                    note_x_center + deltax,
                    slope * (note_x_center + deltax) +
                        intercept +
                        (upper_flag ? -8 : 8),
                    {width:1});
            }
        }

        return { x: x };
    }

    raphaelSlash(paper, group, x, y, d, numdot, _5lines_intv) {
        var rsgw = 8;
        var rsgh = _5lines_intv * 2;
        var rsh = 4;
        var path = graphic.svgPath(
            [
                [x, y + rsgh / 2 - rsh],
                [x + rsgw, y - rsgh / 2],
                [x + rsgw, y - rsgh / 2 + rsh],
                [x, y + rsgh / 2]
            ],
            true
        );
        //var obj = null;
        if (d == "1" || d == "2") {
            //obj = paper.path(path).attr({ "stroke-width": "1px" });
            graphic.CanvasPath(paper, path, {"lineWidth":1});
        } else {
            // '0' and other
            //obj = paper.path(path).attr({ fill: "#000000" });
            graphic.CanvasPath(paper, path, {"lineWidth":1, "fillStyle":"#000"});
        }
        //group.push(obj);
        for (var i = 0; i < numdot; ++i) {
            /*group.push(
                paper
                    .circle(x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1)
                    .attr({ fill: "black" })
            );*/
            graphic.CanvasCircle(paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
        }
        return { bar_reduction: rsgh / 2 - rsh };
    }


    /*
     * Group objs to the ones which has same values with 'field' ( Neighbor )
     */
    to_same_value_group(objs, comp) {
        var ret = [];
        var tmp = [];
        var cur_v = null;
        for (var i = 0; i < objs.length; ++i) {
            if (cur_v != null && cur_v != comp(objs[i])) {
                ret.push(tmp);
                tmp = [];
            }
            cur_v = comp(objs[i]);
            tmp.push(objs[i]);
        }
        ret.push(tmp);
        return ret;
    }
}
