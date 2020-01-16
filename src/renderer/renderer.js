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
        row_height,
        meas_start_x,
        meas_end_x,
        draw,
        chord_space,
        body_scaling,
        x_global_scale,
        music_context,
        meas,
        param,
        room_for_rs_per_element,
        balken,
        is_last_body_elem_group_in_a_measure
    ) {
        // chords is list of chords for each chord object has .renderprop.x property
        // All elements shall have length indicators
        // var balken_width = "3px";

        //let balken = {
        //    groups: []
        //};
        
        var group = null; //paper.set();

        // elements in a measure
        for (var ei = 0; ei < elems.length; ++ei) {
            var e = elems[ei];
            // no duration information
            if (e.note_group_list === null) {
                throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
            }

            //var x = e.renderprop.x;
            // var barlen = 25;
            //var flagintv = 5;

            let balken_element = e.renderprop.balken_element;

            // Flush current groups
            if (
                (balken_element.chord_length >= common.WHOLE_NOTE_LENGTH / 4 
                    || e instanceof common.Rest) &&
                balken.groups.length > 0
            ) {
                var dbret = this.draw_rs_area_balkens(
                    //draw, 
                    //x,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    row_height,
                    meas_start_x,
                    meas_end_x,
                    body_scaling,
                    x_global_scale,
                    music_context,
                    meas,
                    param,
                    room_for_rs_per_element
                );
                balken.groups = [];
                x = dbret.x;
            }
            
            music_context.pos_in_a_measure += balken_element.chord_length;

            balken.groups.push({balken_element:balken_element,e:e,
                org_x:x,org_room_for_rs_per_element:room_for_rs_per_element});

            if (
                e instanceof common.Rest ||
                balken_element.chord_length >= common.WHOLE_NOTE_LENGTH / 4 ||
                music_context.pos_in_a_measure % (common.WHOLE_NOTE_LENGTH / 4) == 0 ||
                (ei == elems.length - 1 && is_last_body_elem_group_in_a_measure)
            ) {
                let dbret = this.draw_rs_area_balkens(
                    //draw, 
                    //x,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    row_height,
                    meas_start_x,
                    meas_end_x,
                    body_scaling,
                    x_global_scale,
                    music_context,
                    meas,
                    param,
                    room_for_rs_per_element
                );
                x = dbret.x;
                balken.groups = [];
            }
        }

        return { x: x };
    }

    generate_balken_element(e, x, rs_y_base, row_height, music_context)
    {
       // no duration information
        if (e.note_group_list === null) {
            throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
        }

        let _5lines_intv = row_height / 4;

        var chord_length = 10000000;

        var rhythm_only = e.note_group_list[0].note_profiles === null;
        var group_y = [];
        var pos_on_5lines = []; // For notes only. bottom line is 0, second bottom line is 2, ... top line is 8
        var has_tie = false;
        var sharp_flats = [];

        // Currently only one note_group at a time is assumed
        for (var ngi = 0; ngi < e.note_group_list.length; ++ngi) {
            var ng = e.note_group_list[ngi];
            var note_profiles = ng.note_profiles;
            var d = ng.lengthIndicator.base; //ng.length_s.match(/[0-9]+/)[0];
            var numdot = ng.lengthIndicator.numdot; //ng.length_s.substr(d.length);
            chord_length = Math.min(
                ng.lengthIndicator.length,
                chord_length
            ); // Take the note group of min-length. TODO for cater for multi-group notes
            has_tie = ng.lengthIndicator.has_tie; //ng.has_tie;
            if (note_profiles === null) {
                // slash or rest
                group_y.push(parseInt(rs_y_base + _5lines_intv * 2)); // center
                pos_on_5lines.push(4); // Not used, but put center line for now.
            } else {
                // notes
                for (var nri = 0; nri < note_profiles.length; ++nri) {
                    let dy = _5lines_intv / 2; // 1/2 of interval of 5 lines
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
                        NLIST[note_profiles[nri].note.name] +
                        7 * (note_profiles[nri].note.octave - 3); // C3 is 0
                    var yoffset = pos_idx * dy; // C3 offset = 0
                    var ypos = rs_y_base + dy * 10 - yoffset; // rs_y_base corresopnds to the center of rs region and is corresponding to A3 when the notes are drawn with "top".
                    var pos_on_5line = Math.round(yoffset / dy) - 2;
                    group_y.push(ypos);
                    pos_on_5lines.push(pos_on_5line);
                    if (
                        music_context.accidental_info[pos_idx] ==
                        note_profiles[nri].note.accidental
                    )
                        sharp_flats.push(null);
                    // no need of accidental. null is no mark. 0 is natural.
                    else sharp_flats.push(note_profiles[nri].note.accidental); // 0 is natural. null is no mark.
                    music_context.accidental_info[pos_idx] =
                        note_profiles[nri].note.accidental;
                }
            }
        }

        let balken_element = {
            type:
                e instanceof common.Rest
                    ? "rest"
                    : rhythm_only
                    ? "slash"
                    : "notes",
            numdot: numdot,
            chord_length: chord_length,
            coord: [x, group_y],
            onka: d,
            has_tie: has_tie,
            pos_on_5lines: pos_on_5lines, // for notes only
            lengthIndicator: e.note_group_list[0].lengthIndicator,
            sharp_flats: sharp_flats, // for notes only
            renderprop: {} // for internal use
        };

        return balken_element;
    }

    draw_rs_area_without_flag_balken(draw, paper, e, balken_element, x, rs_y_base, row_height){

        let bounding_box = new common.BoundingBox();

        let _5lines_intv = row_height / 4;
        var deltax_acc = 10;  

        var ys = balken_element.coord[1];
        var d = balken_element.onka;
        var pos_on_5lines = balken_element.pos_on_5lines;
        var sharp_flats = balken_element.sharp_flats;
        var numdot = balken_element.numdot;

        var bo_group = null; //paper.set();

        var note_x_center = x;

        if (balken_element.type == "slash") {
            if (d == "0" || d == "1") {
                let ret = this.render_slash(
                    paper,
                    bo_group,
                    note_x_center,
                    ys[0],
                    d,
                    numdot,
                    _5lines_intv,
                    draw
                );
                bounding_box.add_rect(ret.bounding_box);
            } else {
                let ret = this.render_slash(
                    paper,
                    bo_group,
                    note_x_center,
                    ys[0],
                    d,
                    numdot,
                    _5lines_intv,
                    draw
                );
                bounding_box.add_rect(ret.bounding_box);
            }
        } else if(balken_element.type == "notes") {

            var accidental_exists = balken_element.sharp_flats.some(
                function(sf) {
                    return sf !== null;
                }
            );
            var as = accidental_exists ? deltax_acc : 0;
            note_x_center = x + as;

            for (let ci = 0; ci < ys.length; ++ci) {
                var y = ys[ci];

                let r = null;
                // eslint-disable-next-line no-empty
                if (d == "0") {
                } else if (d == "1") {
                    r = graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/w1note.svg"],
                        note_x_center, y, null, _5lines_intv, "lm", draw);
                    
                } else if (d == "2") {

                    r = graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/w2note.svg"],
                    note_x_center, y, null, _5lines_intv, "lm", draw);
                } else {

                    r = graphic.CanvasImage(paper, graphic.G_imgmap["assets/img/bnote.svg"],
                    note_x_center, y, null, _5lines_intv, "lm", draw);
                }

                if(r) bounding_box.add_rect(r.bounding_box);
                //bo_group.push(text);

                // draw sharp, flat and natrual
                // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
                if (sharp_flats[ci] !== null) {

                    let svgname = { 11: "flat.svg", 1: "sharp.svg", 0: "natural.svg" };
                    let url = "assets/img/"+svgname[sharp_flats[ci]];
                    r = graphic.CanvasImage(paper, graphic.G_imgmap[url],
                        x, y, null, _5lines_intv*2.5, "lm", draw);
                    
                    bounding_box.add_rect(r.bounding_box);
                }

                // dots
                for (let i = 0; i < numdot; ++i) {
                    let dy =
                        pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;
    
                    r = graphic.CanvasCircle(paper, note_x_center + 12 + i * 5, y + dy, 1, draw);
                        bounding_box.add_rect(r.bounding_box);
                }

                // Draw additional horizontal lines
                for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
                    if (p5i % 2 != 0) continue;
                    var a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3


                    graphic.CanvasLine(paper,
                        note_x_center - 3,
                        rs_y_base + a5y,
                        note_x_center + 12,
                        rs_y_base + a5y,
                        {width:1}, draw);
                }
                for (let p5i = pos_on_5lines[ci]; p5i >= 10; --p5i) {
                    if (p5i % 2 != 0) continue;
                    let a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3

                    graphic.CanvasLine(paper,
                        note_x_center - 3,
                        rs_y_base + a5y,
                        note_x_center + 12,
                        rs_y_base + a5y,
                        {width:1}, draw);
                }
            }
        }else if (balken_element.type == "rest") {

            let r = this.render_rest_plain(
                e,
                paper,
                draw,
                x,
                rs_y_base,
                0,
                row_height,
                this.param
            );

            bounding_box.add_rect(r.bounding_box);

        }else if(balken_element.type == "simile"){
            alert("Impleetaion not ready for siile in RS area");
        }

        return {bounding_box:bounding_box.get()};
    }

    draw_rs_area_balkens(
        //draw, 
        //x,
        paper,
        group,
        balken,
        rs_y_base,
        row_height,
        meas_start_x,
        meas_end_x,
        body_scaling,
        x_global_scale,
        music_context,
        meas,
        param,
        room_for_rs_per_element,
    ) {
        // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes

        // Not called with draw=false
        let draw = true;

        let _5lines_intv = row_height / 4;

        // 1. determine the flag direction here
        var center_y = 0.0;
        var min_y = 10000000;
        var max_y = 0;
        var gbi_at_min_y = null;
        var gbi_at_max_y = null;
        var cnt_y = 0;

        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            var c = balken.groups[gbi].balken_element.coord;

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

        let x = balken.groups[0].org_x;

        // 2. Draw notes and slashes without bars, flags and balkens
        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            //var x = balken.groups[gbi].coord[0];
            let e = balken.groups[gbi].e;
            let balken_element = balken.groups[gbi].balken_element;
            var ys = balken_element.coord[1];
            var d = balken_element.onka;

            var note_x_center = x;

            let wo_flags = this.draw_rs_area_without_flag_balken(draw, paper, e,
                balken_element, x, rs_y_base, row_height);

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
                        graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points), false,
                            {"clip-rect":[pss[0]+sdx, (pss[1][ci] - 50), 
                                (psm.renderprop.meas_end_x - (pss[0] + sdx) + 5), 100]});
                        */

                        graphic.CanvasbBzierCurve(paper, brace_points, false, false, 
                            {"clip-rect":[pss[0]+sdx, (pss[1][ci] - 50), 
                                (psm.renderprop.meas_end_x - (pss[0] + sdx) + 5), 100]});

                        brace_points = [
                            [meas_start_x - 20, y + dy],
                            [meas_start_x - 20, y - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];

                        /*
                        graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points), false,
                            {"clip-rect":[meas_start_x - 5, (y - 50), 
                                (x - (meas_start_x - 5)), 100]});
                        */

                        graphic.CanvasbBzierCurve(paper, brace_points, false, false,
                            {"clip-rect":[meas_start_x - 5, (y - 50), 
                                (x - (meas_start_x - 5)), 100]});
                    } else {
                        let brace_points = [
                            [pss[0] + sdx, pss[1][ci] + dy],
                            [pss[0] + sdx, pss[1][ci] - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];


                        /*graphic.CanvasPath(paper, graphic.svgArcBezie(brace_points), false);*/

                        graphic.CanvasbBzierCurve(paper, brace_points, false, false);
                    }
                }
            }

            music_context.tie_info.rs_prev_has_tie = balken.groups[gbi].balken_element.has_tie;
            music_context.tie_info.rs_prev_tie_paper = paper;
            music_context.tie_info.rs_prev_coord = [
                x,
                balken_element.coord[1]
            ];
            music_context.tie_info.rs_prev_meas = meas;

            e.renderprop.x = x;
            balken_element.renderprop.x = x;
            balken_element.renderprop.note_x_center = note_x_center;

            // Here is the only update of x

            x += wo_flags.bounding_box.w + balken.groups[gbi].org_room_for_rs_per_element; // TODO : FIXME to cater for actual width of components
        }

        // 3. Determine the flag intercept and slope
        var x_at_min_y = balken.groups[gbi_at_min_y].balken_element.renderprop.note_x_center;
        var x_at_max_y = balken.groups[gbi_at_max_y].balken_element.renderprop.note_x_center;
        var ps_y = balken.groups[0].balken_element.coord[1];
        var ps_bar_x = balken.groups[0].balken_element.renderprop.note_x_center;
        var pe_y = balken.groups[balken.groups.length - 1].balken_element.coord[1];
        var pe_bar_x =
            balken.groups[balken.groups.length - 1].balken_element.renderprop.note_x_center;

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
            (upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) -
            slope * (upper_flag ? x_at_min_y : x_at_max_y);

        // if flag is upper, then the balken is shifted +deltax, then intercept is updated.
        var deltax = upper_flag ? 8 : 0;
        intercept = intercept - slope * deltax;

        // 4. Draw bars, flags
        var bar_flag_group = null; //paper.set();
        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
            let note_x_center = balken.groups[gbi].balken_element.renderprop.note_x_center;

            if (balken.groups[gbi].balken_element.type == "slash") {
                let numdot = balken.groups[gbi].balken_element.numdot;
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {

                    
                        graphic.CanvasLine(paper,
                            note_x_center,
                            ys[0] + 3,
                            note_x_center,
                            slope * note_x_center + intercept,
                            {width:1});
                }
                //bar_flag_group.push(o);
            } else if (balken.groups[gbi].balken_element.type == "notes") {
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {
                    let ys = balken.groups[gbi].balken_element.coord[1];
                    var y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.


                    graphic.CanvasLine(paper,
                        note_x_center + deltax,
                        y0,
                        note_x_center + deltax,
                        slope * (note_x_center + deltax) + intercept,
                        {width:1});
                }
            // eslint-disable-next-line no-empty
            } else if (balken.groups[gbi].balken_element.type == "rest") {
            }
        }
        //group.push(bar_flag_group);

        // 5. Draw balkens

        if (balken.groups.length >= 2) {
            // Draw flag for balken
            // Common balken
            if (balken.groups[0].balken_element.onka >= 8) {


                graphic.CanvasLine(paper,
                    ps_bar_x + deltax,
                    slope * (ps_bar_x + deltax) + intercept,
                    pe_bar_x + deltax,
                    slope * (pe_bar_x + deltax) + intercept,
                    {width:param.balken_width});
            }

            // Balken for each onka level
            var gg = this.to_same_value_group(balken.groups, function(o) {
                return o.balken_element.onka;
            });
            for (var g = 0; g < gg.length; ++g) {
                var same_sds = gg[g];
                var sd = same_sds[0].onka;
                var numflag = common.myLog2(parseInt(sd)) - 2;

                if (same_sds.length == 1) {
                    var pssx = same_sds[0].balken_element.renderprop.note_x_center;

                    // Determine which direction to draw flag. Determined from which neighboring
                    // rhythm is more natural to coupling with.
                    // Currently, simple strategy is adopted for now.
                    var dir = 1;
                    if (g == gg.length - 1) dir = -1;
                    var neighbor_x =
                        gg[g + dir][gg[g + dir].length - 1].balken_element.renderprop.x;
                    var blen = Math.abs(neighbor_x - pssx) * 0.3;

                    for (var fi = 1; fi < numflag; ++fi) {
                        // fi=0 is alread drawn by common balken
                        //o = paper.path(svgLine(pss[0], rs_y_base+barlen-fi*flagintv, pss[0] + dir * blen, rs_y_base+barlen-fi*flagintv)).attr({'stroke-width':balken_width});

                        graphic.CanvasLine(paper,
                            pssx + deltax,
                            slope * (pssx + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            pssx + deltax + dir * blen,
                            slope * (pssx + deltax + dir * blen) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            {width:param.balken_width});
                    }
                } else if (same_sds.length >= 2) {
                    let pssx = same_sds[0].balken_element.renderprop.note_x_center;
                    var psex =
                        same_sds[same_sds.length - 1].balken_element.renderprop.note_x_center;
                    for (
                        let fi = 1;
                        fi < numflag;
                        ++fi // fi=0 is alread drawn by common balken
                    ) {

                        graphic.CanvasLine(paper,
                            pssx + deltax,
                            slope * (pssx + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            psex + deltax,
                            slope * (psex + deltax) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            {width:param.balken_width});
                    }
                    if (same_sds[0].balken_element.lengthIndicator.renpu) {
                        var ro = 12;
                        var center_x = (pssx + deltax + (psex + deltax)) / 2.0;

                        let text = graphic.CanvasText(paper,
                            center_x,
                            slope * center_x +
                                intercept +
                                (upper_flag ? -ro : ro),
                            same_sds[0].balken_element.lengthIndicator.renpu + "",
                            12,
                            "cc");

                        if (same_sds[0].balken_element.onka < 8) {
                            var rno = 10;
                            var rnh = 4;

                            // var path1 = graphic.svgPath(
                            var points1 =
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
                                ]; //,
                            //    false
                            //);
                            //var path2 = graphic.svgPath(
                            var points2 = 
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
                                ]; //,
                            //    false
                            //);
                            //graphic.CanvasPath(paper, path1);
                            //graphic.CanvasPath(paper, path2);
                            graphic.CanvasPolygon(paper, points1, false, false);
                            graphic.CanvasPolygon(paper, points2, false, false);

                        }
                    }
                }
            }
        } else if (
            balken.groups.length == 1 &&
            balken.groups[0].balken_element.type != "rest"
        ) {
            // Normal drawing of flags
            let note_x_center = balken.groups[0].balken_element.renderprop.note_x_center;
            let d = balken.groups[0].balken_element.onka;
            let numflag = common.myLog2(parseInt(d)) - 2;
            for (let fi = 0; fi < numflag; ++fi) {


                let url = "assets/img/"+(upper_flag ? "flag_f.svg" : "flag_i.svg");
                graphic.CanvasImage(paper, graphic.G_imgmap[url],
                    note_x_center + deltax,
                    slope * (note_x_center + deltax) +
                        intercept +
                        (upper_flag ? 1 + fi * 6 : -1 - fi * 6),
                    null, null, "l"+(upper_flag?"t":"b"));
                
                // Additional vertical line


                // eslint-disable-next-line no-constant-condition
                if(false){
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
        }

        return { x: x };
    }

    render_slash(paper, group, x, y, d, numdot, _5lines_intv, draw=true) {
        var rsgw = 8;
        var rsgh = _5lines_intv * 2;
        var rsh = 4;

        if(draw){
            /*var path = graphic.svgPath(
                [
                    [x, y + rsgh / 2 - rsh],
                    [x + rsgw, y - rsgh / 2],
                    [x + rsgw, y - rsgh / 2 + rsh],
                    [x, y + rsgh / 2]
                ],
                true
            );*/
            var points = [
                [x, y + rsgh / 2 - rsh],
                [x + rsgw, y - rsgh / 2],
                [x + rsgw, y - rsgh / 2 + rsh],
                [x, y + rsgh / 2]
            ];

            //var obj = null;
            if (d == "1" || d == "2") {
                //obj = paper.path(path).attr({ "stroke-width": "1px" });
                //graphic.CanvasPath(paper, path, false, {"lineWidth":1});
                graphic.CanvasPolygon(paper, points, true, false);
            } else {
                // '0' and other
                //obj = paper.path(path).attr({ fill: "#000000" });
                //graphic.CanvasPath(paper, path, true, {"lineWidth":1, "fillStyle":"#000"});
                graphic.CanvasPolygon(paper, points, true, true);
            }
            //group.push(obj);
            for (var i = 0; i < numdot; ++i) {
                /*group.push(
                    paper
                        .circle(x + rsgw + 5    + i * 5, y - _5lines_intv / 2, 1)
                        .attr({ fill: "black" })
                );*/
                graphic.CanvasCircle(paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
            }
        }

        return { bar_reduction: rsgh / 2 - rsh, bounding_box:{x:x, y:y, w: rsgw + 5 + numdot * 5, h:rsgh}};
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
