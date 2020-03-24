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
        }else{
            return key[side == "begin" ? 1 : 0];
        }
        //throw "Invalid boundary pair : " + key;
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
                } else if (e instanceof common.Space) {
                    body_elements.push(e);
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
                _9exists = false,
                _7exists = false,
                _minus5exists = false;
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
                        _7exists |= e.param == "7";
                        break;
                    case "b":
                    case "#":
                        if (e.param == "5") _5thelem.push(e);
                        else _alteredelem.push(e);
                        _minus5exists |= (e.type=="b" && e.param=="5");
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
            _6_and_9_exists: _6exists && _9exists,
            _halfdim_exists: _7exists && _minus5exists
		};
    }
    
    render_rs_area(
        x,
        draw_scale, // note this is used for remember the draw_scale applied for tie rendering. other x axis coordinates given by already scaled.
        elems,
        paper,
        rs_y_base,
        row_height,
        meas_start_x,
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
                    draw_scale,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    row_height,
                    meas_start_x,
                    body_scaling,
                    x_global_scale,
                    music_context,
                    meas,
                    param
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
                    draw_scale,
                    paper,
                    group,
                    balken,
                    rs_y_base,
                    row_height,
                    meas_start_x,
                    body_scaling,
                    x_global_scale,
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

    generate_balken_element(e, x, row_height, music_context)
    {
       // no duration information
        if (e.note_group_list === null) {
            throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
        }

        let _5lines_intv = row_height / 4;

        var chord_length = 10000000;

        var pos_on_5lines = []; // For notes only. bottom line is 0, second bottom line is 2, ... top line is 8
        var has_tie = false;
        var sharp_flats = [];

        // Currently only one note_group at a time is assumed
        if(e instanceof common.Chord || e instanceof common.Rest){
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
                        var pos_on_5line = Math.round(yoffset / dy) - 2;
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
        }else if(e instanceof common.Space){
            chord_length = 0; // Does not affect any music context
        }else if(e instanceof common.Simile){
            chord_length = 10000000; // TODO: Think about the treatment of Simile in RS region
        }

        let type = null;
        if(e instanceof common.Rest) type = "rest";
        else if(e instanceof common.Space) type = "space";
        else if(e instanceof common.Simile) type = "simile";
        else if(e.note_group_list[0].note_profiles === null) type = "slash";
        else type = "notes";

        let lengthIndicator = null;
        if(e instanceof common.Chord) lengthIndicator = e.note_group_list[0].lengthIndicator;
        else if(e instanceof common.Rest) lengthIndicator = e.note_group_list[0].lengthIndicator;

        let balken_element = {
            type: type,
            numdot: numdot,
            chord_length: chord_length,
            notes_coord: {x:[], y:null}, // x, y coordinates are filled out later in stage 2. x and y are array correspoding to each notes.
            note_value: d,
            has_tie: has_tie,
            pos_on_5lines: pos_on_5lines, // for notes only
            lengthIndicator: lengthIndicator,
            sharp_flats: sharp_flats, // for notes only
            renderprop: {} // for internal use
        };

        return balken_element;
    }

    draw_rs_area_without_flag_balken(draw, paper, param, e, balken_element, x, rs_y_base, row_height){

        let bounding_box = new common.BoundingBox();

        let _5lines_intv = row_height / 4;
        var deltax_acc = 10;  

        var ys = balken_element.notes_coord.y;

        // Stage 1 (draw=false), no y position information available then null, in that case put dammy value
        if(!ys && balken_element.type == "slash"){
            ys = [0];
        }else if(!ys && balken_element.type == "notes"){
            ys = new Array(e.note_group_list[0].note_profiles.length).fill(0);
        }

        var d = balken_element.note_value;
        var pos_on_5lines = balken_element.pos_on_5lines;
        var sharp_flats = balken_element.sharp_flats;
        var numdot = balken_element.numdot;

        var bo_group = null; //paper.set();

        if (balken_element.type == "slash") {
            let ret = null;

            if (d == "0" || d == "1") {
                ret = this.render_slash(
                    paper,
                    bo_group,
                    x,
                    ys[0],
                    d,
                    numdot,
                    _5lines_intv,
                    draw
                );
            } else {
                ret = this.render_slash(
                    paper,
                    bo_group,
                    x,
                    ys[0],
                    d,
                    numdot,
                    _5lines_intv,
                    draw
                );

            }
            bounding_box.add_rect(ret.bounding_box);
            balken_element.renderprop.note_x_center = x;
            if(draw){
                balken_element.notes_coord.x
                    .push([x, x, x + ret.bounding_box.w]);
            }
        } else if(balken_element.type == "notes") {

            var xs = [];

            var accidental_exists = balken_element.sharp_flats.some(
                function(sf) {
                    return sf !== null;
                }
            );
            var as = accidental_exists ? deltax_acc : 0;
            let note_x_center = x + as;

            balken_element.renderprop.note_x_center = note_x_center;

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

                if(!r){
                    throw "SOMETHING WRONG WITH PARSING";
                }

                bounding_box.add_rect(r.bounding_box);
                if(draw){
                    balken_element.notes_coord.x
                        .push([x, note_x_center, note_x_center + r.bounding_box.w]);
                }
                
                // draw sharp, flat and natrual
                // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
                if (sharp_flats[ci] !== null) {

                    let svgname = { 11: "flat.svg", 1: "sharp.svg", 0: "natural.svg" };
                    let svg_dy = { 11: -0.5, 1: 0, 0: 0 };
                    let url = "assets/img/"+svgname[sharp_flats[ci]];
                    let dy = svg_dy[sharp_flats[ci]];
                    r = graphic.CanvasImage(paper, graphic.G_imgmap[url],
                        x, y + _5lines_intv*dy, null, _5lines_intv*2.5, "lm", draw);
                    
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
                row_height,
                param
            );

            bounding_box.add_rect(r.bounding_box);

            if(draw){
                balken_element.notes_coord.x
                    .push([x, x, x + r.bounding_box.w]);
            }
        }else if(balken_element.type == "space"){

            // Do not use expand here in case only one space is grouped in balken group
            bounding_box.add(x, rs_y_base, 0.5*param.base_font_size, 0);

        }else if(balken_element.type == "simile"){
            alert("Impleetaion not ready for siile in RS area");
        }

        return {bounding_box:bounding_box.get()};
    }

    draw_rs_area_balkens(
        //draw, 
        //x,
        draw_scale,
        paper,
        group,
        balken,
        rs_y_base,
        row_height,
        meas_start_x,
        body_scaling,
        x_global_scale,
        music_context,
        meas,
        param,
    ) {
        // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes

        // Not called with draw=false
        let draw = true;

        let _5lines_intv = row_height / 4;

        // 0. make notes_coord for y axis

        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            //let ys = balken.groups[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
            let e = balken.groups[gbi].e;
            let group_y = [];
            if(e instanceof common.Space || e instanceof common.Simile){
                group_y.push(rs_y_base); // just dammy
            }else{
                for (var ngi = 0; ngi < e.note_group_list.length; ++ngi) {
                    var ng = e.note_group_list[ngi];
                    var note_profiles = ng.note_profiles;
                    if (note_profiles === null) {
                        // slash or rest
                        group_y.push(parseInt(rs_y_base + _5lines_intv * 2)); // center
                        //pos_on_5lines.push(4); // Not used, but put center line for now.
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
                            //var pos_on_5line = Math.round(yoffset / dy) - 2;
                            group_y.push(ypos);
                            //pos_on_5lines.push(pos_on_5line);
                        }
                    }
                }
            }
            balken.groups[gbi].balken_element.notes_coord.y = group_y;
        }

        // 1. determine the flag direction here
        var center_y = 0.0;
        var min_y = 10000000;
        var max_y = 0;
        var gbi_at_min_y = null;
        var gbi_at_max_y = null;
        var cnt_y = 0;

        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            let e = balken.groups[gbi].e;

            if(e instanceof common.Chord || e instanceof common.Rest){

                let ys = balken.groups[gbi].balken_element.notes_coord.y;

                for (var ci = 0; ci < ys.length; ++ci) {
                    center_y += ys[ci];
                    if (min_y > ys[ci]) {
                        min_y = ys[ci];
                        gbi_at_min_y = gbi;
                    }
                    if (max_y < ys[ci]) {
                        max_y = ys[ci];
                        gbi_at_max_y = gbi;
                    }
                    cnt_y += 1;
                }
            }else{
                // Does not affecct flag direction
            }
        }
        center_y = Math.floor(center_y / cnt_y);
        var upper_flag = center_y > rs_y_base + _5lines_intv * 2;

        let x = balken.groups[0].org_x;

        // 2. Draw notes and slashes without bars, flags and balkens
        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            //var x = balken.groups[gbi].notes_coord[0];
            let e = balken.groups[gbi].e;
            let balken_element = balken.groups[gbi].balken_element;
            let ys = balken_element.notes_coord.y;

            var d = balken_element.note_value;

            let wo_flags = this.draw_rs_area_without_flag_balken(draw, paper, param, e,
                balken_element, x, rs_y_base, row_height);

            let xs = balken_element.notes_coord.x;

            if( e instanceof common.Chord){
                if (music_context.tie_info.rs_prev_has_tie) {
                    // Draw tie line
                    var prev_coord = music_context.tie_info.rs_prev_coord;
                    var psm = music_context.tie_info.rs_prev_meas;

                    // Check the consistency.
                    if (prev_coord.y.length != ys.length) {
                        throw "INVALID TIE NOTATION";
                    }

                    let dy = 0;
                    let sdx = 0;
                    let edx = 0;
                    let round = 0;

                    if (balken.groups[gbi].balken_element.type == "slash") {
                        // slash only has down flag
                        dy = -3;
                        sdx = 3;
                        edx = 0;
                        round = 6;
                    } else {
                        // notes
                        if (upper_flag) {
                            dy = 3;
                            sdx = 3;
                            edx = -3;
                            round = -6;
                        } else {
                            dy = -3;
                            sdx = 3;
                            edx = -3;
                            round = 6;
                        }
                    }

                    for (let ci = 0; ci < ys.length; ++ci) {
                        let y = ys[ci];
                        let prev_draw_scale = music_context.tie_info.rs_prev_draw_scale;

                        if (y != prev_coord.y[ci]) {

                            // Crossing measure row. Previous RS mark could be on another page.
                            // Make sure to create curve on the paper on which previous RS is drawn.
                            var brace_points = [
                                [prev_coord.x[ci][2] * prev_draw_scale + sdx, prev_coord.y[ci] + dy],
                                [prev_coord.x[ci][2] * prev_draw_scale + sdx, prev_coord.y[ci] - round + dy],
                                [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] - round + dy],
                                [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] + dy]
                            ];

                            let clip_rect = [
                                prev_coord.x[ci][2] * prev_draw_scale +sdx, 
                                (prev_coord.y[ci] - 50), 
                                (psm.renderprop.meas_end_x - (prev_coord.x[ci][2] * prev_draw_scale + sdx)  + 5),
                                100];

                            console.group("Tie");
                            console.log(brace_points);
                            console.log(clip_rect);
                            console.groupEnd();
                            
                            // In case the previous paper is in the same paper, "draw_scale" is currently applied,
                            // then temporaryly deactivate scaling.
                            // In case of differnt paper, such paper shall already be reverted back to scaling=1, 
                            // no need to do anything.
                            if(paper == music_context.tie_info.rs_prev_tie_paper)
                                music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(1.0/draw_scale, 1.0);

                            graphic.CanvasbBzierCurve(music_context.tie_info.rs_prev_tie_paper,
                                brace_points, false, false, 
                                {"clip-rect":clip_rect});

                            if(paper == music_context.tie_info.rs_prev_tie_paper)
                                music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(draw_scale, 1.0);

                            brace_points = [
                                [meas_start_x - 20, y + dy],
                                [meas_start_x - 20, y - round + dy],
                                [xs[ci][0] * draw_scale + edx, y - round + dy],
                                [xs[ci][0] * draw_scale + edx, y + dy]
                            ];

                            clip_rect = [meas_start_x - 5, (y - 50), 
                                (x * draw_scale - (meas_start_x - 5)), 100];

                            paper.getContext("2d").scale(1.0/draw_scale, 1.0);
                            
                            graphic.CanvasbBzierCurve(paper, brace_points, false, false,
                                {"clip-rect":clip_rect});

                            paper.getContext("2d").scale(draw_scale, 1.0);

                        } else {
                            let brace_points = [
                                [prev_coord.x[ci][2] * prev_draw_scale + sdx, prev_coord.y[ci] + dy],
                                [prev_coord.x[ci][2] * prev_draw_scale + sdx, prev_coord.y[ci] - round + dy],
                                [xs[ci][0] * draw_scale + edx, y - round + dy],
                                [xs[ci][0] * draw_scale + edx, y + dy]
                            ];

                            paper.getContext("2d").scale(1.0/draw_scale, 1.0);
                            
                            graphic.CanvasbBzierCurve(paper, brace_points, false, false);
                            
                            paper.getContext("2d").scale(draw_scale, 1.0);
                        }
                    }
                }

                music_context.tie_info.rs_prev_has_tie = balken.groups[gbi].balken_element.has_tie;
                music_context.tie_info.rs_prev_tie_paper = paper;
                music_context.tie_info.rs_prev_coord = balken_element.notes_coord;
                music_context.tie_info.rs_prev_draw_scale = draw_scale;
                music_context.tie_info.rs_prev_meas = meas;
            }

            e.renderprop.x = x;
            balken_element.renderprop.x = x;

            // Here is the only update of x

            x += wo_flags.bounding_box.w + balken.groups[gbi].org_room_for_rs_per_element; // TODO : FIXME to cater for actual width of components
        }

        // 3. Determine the flag intercept and slope
        
        // From here other than slash and notes are not reuiqred.
        if(gbi_at_max_y === null && gbi_at_min_y === null){
            // In case no chord or rest, no y information defined.
            return {x:x};
        } 

        var x_at_min_y = balken.groups[gbi_at_min_y].balken_element.notes_coord.x[0][upper_flag?2:1];
        var x_at_max_y = balken.groups[gbi_at_max_y].balken_element.notes_coord.x[0][upper_flag?2:1];
        var ps_y = balken.groups[0].balken_element.notes_coord.y;
        var ps_bar_x = balken.groups[0].balken_element.notes_coord.x[0][upper_flag?2:1];
        var pe_y = balken.groups[balken.groups.length - 1].balken_element.notes_coord.y;
        var pe_bar_x =
            balken.groups[balken.groups.length - 1].balken_element.notes_coord.x[0][upper_flag?2:1];

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

        // 4. Draw bars, flags
        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {

            let ys = balken.groups[gbi].balken_element.notes_coord.y;
            let xs = balken.groups[gbi].balken_element.notes_coord.x;

            if (balken.groups[gbi].balken_element.type == "slash") {
                let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {
                    graphic.CanvasLine(paper,
                        bar_x,
                        ys[0] + 3,
                        bar_x,
                        slope * bar_x + intercept,
                        {width:1});
                }
                //bar_flag_group.push(o);
            } else if (balken.groups[gbi].balken_element.type == "notes") {
                // eslint-disable-next-line no-empty
                if (d == "0" || d == "1") {
                } else {
                    let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                    var y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.


                    graphic.CanvasLine(paper,
                        bar_x,
                        y0,
                        bar_x,
                        slope * bar_x + intercept,
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
            if (balken.groups[0].balken_element.note_value >= 8) {


                graphic.CanvasLine(paper,
                    ps_bar_x,
                    slope * ps_bar_x + intercept,
                    pe_bar_x,
                    slope * pe_bar_x + intercept,
                    {width:param.balken_width});
            }

            // Balken for each note_value level
            var gg = this.to_same_value_group(balken.groups, function(o) {
                return o.balken_element.note_value;
            });
            for (var g = 0; g < gg.length; ++g) {
                var same_sds = gg[g];
                var sd = same_sds[0].balken_element.note_value;
                var numflag = common.myLog2(parseInt(sd)) - 2;

                if (same_sds.length == 1) {
                    var pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag?2:1];

                    // Determine which direction to draw flag. Determined from which neighboring
                    // rhythm is more natural to coupling with.
                    // Currently, simple strategy is adopted for now.
                    var dir = 1;
                    if (g == gg.length - 1) dir = -1;
                    var neighbor_x =
                        gg[g + dir][gg[g + dir].length - 1].balken_element.notes_coord.x[0][upper_flag?2:1];
                    var blen = Math.abs(neighbor_x - pssx) * 0.3;

                    for (var fi = 1; fi < numflag; ++fi) {
                        // fi=0 is alread drawn by common balken
                        //o = paper.path(svgLine(pss[0], rs_y_base+barlen-fi*flagintv, pss[0] + dir * blen, rs_y_base+barlen-fi*flagintv)).attr({'stroke-width':balken_width});

                        graphic.CanvasLine(paper,
                            pssx,
                            slope * pssx +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            pssx + dir * blen,
                            slope * (pssx + dir * blen) +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            {width:param.balken_width});
                    }
                } else if (same_sds.length >= 2) {
                    let pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag?2:1];
                    var psex =
                        same_sds[same_sds.length - 1].balken_element.notes_coord.x[0][upper_flag?2:1];
                    for (
                        let fi = 1;
                        fi < numflag;
                        ++fi // fi=0 is alread drawn by common balken
                    ) {

                        graphic.CanvasLine(paper,
                            pssx,
                            slope * pssx +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            psex,
                            slope * psex +
                                intercept +
                                (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                            {width:param.balken_width});
                    }
                    if (same_sds[0].balken_element.lengthIndicator.renpu) {
                        var ro = 12;
                        var center_x = (pssx + psex) / 2.0;

                        let text = graphic.CanvasText(paper,
                            center_x,
                            slope * center_x +
                                intercept +
                                (upper_flag ? -ro : ro),
                            same_sds[0].balken_element.lengthIndicator.renpu + "",
                            12,
                            "cm");

                        if (same_sds[0].balken_element.note_value < 8) {
                            var rno = 10;
                            var rnh = 4;

                            var points1 =
                                [
                                    [
                                        pssx,
                                        slope * pssx +
                                            intercept +
                                            (upper_flag ? -rnh : rnh)
                                    ],
                                    [
                                        pssx,
                                        slope * pssx +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        center_x - 7,
                                        slope * (center_x - 7) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ]
                                ]; 
                            
                            var points2 = 
                                [
                                    [
                                        center_x + 7,
                                        slope * (center_x + 7) +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        psex,
                                        slope * psex +
                                            intercept +
                                            (upper_flag ? -rno : rno)
                                    ],
                                    [
                                        psex,
                                        slope * psex +
                                            intercept +
                                            (upper_flag ? -rnh : rnh)
                                    ]
                                ]; 

                            graphic.CanvasPolygon(paper, points1, false, false);
                            graphic.CanvasPolygon(paper, points2, false, false);

                        }
                    }
                }
            }
        } else if (
            balken.groups.length == 1 &&
            ( balken.groups[0].balken_element.type == "slash" || balken.groups[0].balken_element.type == "notes")
        ) {
            // Normal drawing of flags
            let bar_x = balken.groups[0].balken_element.notes_coord.x[0][upper_flag?2:1];
            let d = balken.groups[0].balken_element.note_value;
            let numflag = common.myLog2(parseInt(d)) - 2;
            for (let fi = 0; fi < numflag; ++fi) {


                let url = "assets/img/"+(upper_flag ? "flag_f.svg" : "flag_i.svg");
                graphic.CanvasImage(paper, graphic.G_imgmap[url],
                    bar_x,
                    slope * bar_x +
                        intercept +
                        (upper_flag ? 1 + fi * 6 : -1 - fi * 6),
                    null, null, "l"+(upper_flag?"t":"b"));
                
                // Additional vertical line


                // eslint-disable-next-line no-constant-condition
                if(false){
                    graphic.CanvasLine(paper,
                        bar_x,
                        slope * bar_x + intercept,
                        bar_x,
                        slope * bar_x +
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

            var points = [
                [x, y + rsgh / 2 - rsh],
                [x + rsgw, y - rsgh / 2],
                [x + rsgw, y - rsgh / 2 + rsh],
                [x, y + rsgh / 2]
            ];

            //var obj = null;
            if (d == "1" || d == "2") {
                graphic.CanvasPolygon(paper, points, true, false);
            } else {
                // '0' and other
                graphic.CanvasPolygon(paper, points, true, true);
            }
            //group.push(obj);
            for (var i = 0; i < numdot; ++i) {
                graphic.CanvasCircle(paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
            }
        }

        return { bar_reduction: rsgh / 2 - rsh, bounding_box:{x:x, y:y, w: rsgw + (numdot > 0 ? 5 + numdot * 5 : 0), h:rsgh}};
    }


    /*
     * Group objs to the ones which has same values with 'field' ( Neighbor ). Skip the null or undefined value.
     */
    to_same_value_group(objs, comp) {
        var ret = [];
        var tmp = [];
        var cur_v = null;
        for (var i = 0; i < objs.length; ++i) {
            if(comp(objs[i])==null) continue; // null or undefined is skipped.
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
