import "@babel/polyfill";
import * as common from "../common/common";
import * as graphic from "./graphic";

export class Renderer {
    constructor() {
        this.hitManager = new common.HitManager();
    }
    render() {
        console.log("Run renderer");
    }
    getElementsByPosition(paper, coord){
        return this.hitManager.get(paper, coord);
    }

	getBoundarySign(e) {
        if (e === null) return "n";
        return e.typestr;
    }

    boundaryTypeWithoutLineBreak(b0, b1) {
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
        var key = this.getBoundarySign(b0) + this.getBoundarySign(b1);
        if (key in profile) {
            return profile[key];
        }
        throw "Invalid boundary pair : " + key;
    }

    boundaryTypeWithLineBreak(b0, b1, side) {
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
        var key = this.getBoundarySign(b0) + this.getBoundarySign(b1);
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

        let musical_elements = m.childNodes;

        for (var ei = 0; ei < musical_elements.length; ++ei) {
            var e = musical_elements[ei];
            if (ei == 0) {
                // First element must be boundary
                header_elements.push(e);
            } else if (ei == musical_elements.length - 1) {
                // Last element must be boundary
                footer_elements.push(e);
            } else {
                if (e instanceof common.Chord) {
                    body_elements.push(e);
                } else if (e instanceof common.Rest) {
                    body_elements.push(e);
                } else if (e instanceof common.LoopIndicator) {
                    measure_wide_elements.push(e);
                } else if (e instanceof common.LongRest) {
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
                } else if (e instanceof common.Syncopation){
                    // Intentionally ignore this
                } else{
					throw "Unkown component found";
				}
            }
        }

        // Special treatment for simile
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

        // Special treatment for whole rest
        // Whole rest is a measure rest and not nessesaryly means whole note 
        if(body_elements.length == 1 && 
           body_elements[0] instanceof common.Rest &&
           body_elements[0].note_group_list[0].lengthIndicator.base == 1)
        {
            let wr = body_elements[0];
            body_elements.splice(0, 1);
            measure_wide_elements.push(wr);
        }


        return {
            header: header_elements,
            body: body_elements,
            footer: footer_elements,
            measure_wide: measure_wide_elements
        };
    }
	
	chordElemClassify(chord, transpose, half_type, key) {
        var bases = chord.getChordStrBase(transpose, half_type, key);
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
                _minus5exists = false,
                _minor_exists = false;
            for (var i = 0; i < elems.length; ++i) {
                var e = elems[i];
                switch (e.type) {
                    case "M":
                        //if (e.param !== undefined) _6791113suselem.push(e);
                        //else _3rdelem.push(e);
                        _3rdelem.push(e);
                        break;
                    case "triad":
                        if(e.value == "+"){
                            _5thelem.push(e);
                        }else{
                            _3rdelem.push(e);
                        }
                        if(e.value == "m")
                            _minor_exists = true;
                        break;
                    /*case "add":
                        _6791113suselem.push(e);
                        break;*/
                    case "sus":
                        _6791113suselem.push(e);
                        break;
                    case "dig":
                        _6791113suselem.push(e);
                        _6exists |= e.value == "6";
                        _9exists |= e.value == "9";
                        _7exists |= e.value == "7";
                        break;
                    case "tension":{
                        //case "b":
                        //case "#":
                        if (e.value != "omit" && e.param == "5") _5thelem.push(e);
                        else if(e.value == "add") _6791113suselem.push(e);
                        else _alteredelem.push(e);
                        _minus5exists |= (e.value=="b" && e.param=="5");
                        break;
                    }
                        

                    /*case "dim":
                        _6791113suselem.push(e);
                        break;
                    case "alt":
                        _alteredelem.push(e);
                        break;*/
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
            _halfdim_exists: _minor_exists && _7exists && _minus5exists
		};
    }

    getThreshDuration(li){
        let renpu = li.renpu;
        let base  = li.base;
        let base_length = 0;
        if(!renpu){
            base_length = common.WHOLE_NOTE_LENGTH/4;
        }else if(renpu == 2){
            base_length = common.WHOLE_NOTE_LENGTH/base/2*3; // shall be integer
        }else if(renpu == 3){
            base_length = common.WHOLE_NOTE_LENGTH/base*2; // shall be integer
        }else if(renpu <= 7){
            base_length = common.WHOLE_NOTE_LENGTH/base*4; // shall be integer
        }else if(renpu <= 15){
            base_length = common.WHOLE_NOTE_LENGTH/base*8; // shall be integer
        }
        return base_length;
    }
    
    renderRsArea(
        x,          // This represents screen position and scaling is not considered
        draw_scale, // scaling applied fro this elements. 
        elems,
        paper,
        rs_y_base,
        row_height,
        meas_start_x,
        music_context,
        meas,
        param,
        room_for_rs_per_element, // room per element in RS are for set of elemes. This is on-screen coordinates. Already considred scaling impact.
        balken,
        is_last_body_elem_group_in_a_measure
    ) { 
        // elements in a measure
        for (var ei = 0; ei < elems.length; ++ei) {
            var e = elems[ei];
            // no duration information
            if (e.note_group_list === null) {
                throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
            }

            let balken_element = e.renderprop.balken_element; // this is corresponds to single flex element

            // Rule of balken grouping:
            // tuplet is prioritized
            //   : if xplet is detected, the contiguous elements(either slash, note, rest) with the same(or integer multiple) 
            //     length are grouped until the sum of length reaches the base length( i.e. 4_3 -> 2, 4_5 -> 1)
            //     note that xplet notation rule is :
            //       - triplet : base length is 2 times of time value : e.g. 8_3 8_3 8_3 = 4
            //       - 5, 6, 7 : base length is 4 times of time value : e.g. 4_5,...,4_5 = 1
            //       - 9 ~ 15  : base length is 8 times of time value : e.g. 8_9,....,8_9 = 1
            //       - duplet  : base length is 1.5 times of time value : 2_2 2_2 = 2., 8_2 8_2 -> 8.
            // fallback to the default grouping policy:
            //   - Rest is singleton
            //   - If the contiguous notes/slashes 's length becomes larger than 4th note, balken are separated.

            // Flush current groups if needed
            if(music_context.first_li){

                let threshDuration = this.getThreshDuration(music_context.first_li);

                let flushCond = 
                (
                    music_context.in_tuplet == false && balken_element.lengthIndicator &&
                    (
                        ( balken_element.chord_length >= common.WHOLE_NOTE_LENGTH / 4 ) ||
                        ( balken_element.lengthIndicator.renpu != null) 
                    ) 
                ) ||
                (
                    music_context.in_tuplet == true && balken_element.lengthIndicator &&
                    (
                        ( balken_element.lengthIndicator.renpu == null) ||
                        ( music_context.first_li.renpu != balken_element.lengthIndicator.renpu ) ||
                        ( music_context.cumal_block_duration + balken_element.chord_length > threshDuration)
                    )
                ) ||
                ( 
                    balken_element.type == "simile"
                );
                // Note : Space does not make flushCond = true.
    
                // Flush current groups
                if (flushCond) {
                    var dbret = this.drawRsAreaElements(
                        draw_scale,
                        paper,
                        balken,
                        rs_y_base,
                        row_height,
                        meas_start_x,
                        music_context,
                        meas,
                        param
                    );
                    balken.groups = [];
                    x = dbret.x;

                    music_context.first_li = balken_element.lengthIndicator; // update the head li. Could be null.
                    music_context.cumal_block_duration = 0; 


                    if(music_context.in_tuplet == false && balken_element.lengthIndicator.renpu != null)
                        music_context.in_tuplet = true;
                    else if(music_context.in_tuplet == true && balken_element.lengthIndicator.renpu == null)
                        music_context.in_tuplet = false;
                }
            }else{
                music_context.first_li = balken_element.lengthIndicator; // can be null for e.g. space or simile
                music_context.in_tuplet = (
                    balken_element.lengthIndicator && 
                    balken_element.lengthIndicator.renpu != null) || false;  // Element w/o length indicator has null LI.
            }
            
            music_context.pos_in_a_measure += balken_element.chord_length;
            music_context.cumal_block_duration += balken_element.chord_length;

            // This needed because we need to draw bars or balken etc... for some group of elements.
            // Such bars or balken are drawn only when required elements are all collected.
            balken.groups.push({balken_element:balken_element,e:e,
                org_x:x,org_draw_scale:draw_scale,org_room_for_rs_per_element:room_for_rs_per_element});

            let threshDuration = music_context.first_li ? this.getThreshDuration(music_context.first_li) : 0;

            let flushCond = 
            (
                music_context.in_tuplet == false && music_context.first_li && // first_li is checked to eliminate the case only space/simile is in flushed.
                (
                    ( music_context.pos_in_a_measure % (common.WHOLE_NOTE_LENGTH / 4) == 0 ) ||
                    ( balken_element.chord_length >= common.WHOLE_NOTE_LENGTH / 4 )
                ) 
            ) ||
            (
                music_context.in_tuplet == true && music_context.first_li &&
                (
                    ( music_context.cumal_block_duration == threshDuration )
                )
            );

            if ( 
                flushCond || 
                (ei == elems.length - 1 && is_last_body_elem_group_in_a_measure) // the last element in a measure
            ) {
                let dbret = this.drawRsAreaElements(
                    draw_scale,
                    paper,
                    balken,
                    rs_y_base,
                    row_height,
                    meas_start_x,
                    music_context,
                    meas,
                    param
                );
                x = dbret.x;
                balken.groups = [];
                music_context.first_li = null; // update the head li
                music_context.cumal_block_duration = 0; 
                music_context.in_tuplet = false;
            }
        }

        return { x: x };
    }

    generateBalkenElement(e, x, row_height, music_context)
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
        else if(e instanceof common.Chord){
            if(e.is_with_rest) type = "rest";
            else if(e.note_group_list[0].note_profiles === null) type = "slash";
            else type = "notes";
        }

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

    drawRsAreaWithoutFlagBalken(draw, paper, param, e, balken_element, x, rs_y_base, row_height){

        let bounding_box = new graphic.BoundingBox();

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
                ret = this.renderSlash(
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
                ret = this.renderSlash(
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
                // notes_coord.x : 
                //   0 : Left side of note including accidentals
                //   1 : Left side of note
                //   2 : Right side of note
                //   3 : Right side of note including dots
                balken_element.notes_coord.x
                    .push([x, x, x + ret.bounding_box.w, x + ret.bounding_box.w]);
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
                    r = graphic.canvasImage(paper, graphic.G_imgmap["uniE0A2"], //w1note
                        note_x_center, y, null, _5lines_intv, "lm", draw);
                    
                } else if (d == "2") {

                    r = graphic.canvasImage(paper, graphic.G_imgmap["uniE0A3"], //w2note
                    note_x_center, y, null, _5lines_intv, "lm", draw);
                } else {

                    r = graphic.canvasImage(paper, graphic.G_imgmap["uniE0A4"], // bnote
                    note_x_center, y, null, _5lines_intv, "lm", draw);
                }

                if(!r){
                    throw "SOMETHING WRONG WITH PARSING";
                }

                let note_right_side = note_x_center + r.bb.width();

                bounding_box.add_BB(r.bb);

                // dots
                let dots_bounding_box = new graphic.BoundingBox();
                dots_bounding_box.add(note_right_side, y);
                for (let i = 0; i < numdot; ++i) {
                    let dy =
                        pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;
    
                    r = graphic.canvasCircle(paper, note_x_center + 12 + i * 5, y + dy, 1, draw);
                    
                    bounding_box.add_BB(r.bb);
                    dots_bounding_box.add_BB(r.bb);
                }

                if(draw){
                    // notes_coord.x : 
                    //   0 : Left side of note including accidentals
                    //   1 : Left side of note
                    //   2 : Right side of note
                    //   3 : Right side of note including dots
                    balken_element.notes_coord.x
                        .push([x, note_x_center, note_right_side, note_right_side + dots_bounding_box.get().w]);
                }
                
                // draw sharp, flat and natrual
                // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
                if (sharp_flats[ci] !== null) {

                    let svgname = { 11: "uni266D", 1: "uni266F", 0: "uni266E" };
                    let svg_dy = { 11: -0.5, 1: 0, 0: 0 };
                    let url = svgname[sharp_flats[ci]];
                    let dy = svg_dy[sharp_flats[ci]];
                    r = graphic.canvasImage(paper, graphic.G_imgmap[url],
                        x, y + _5lines_intv*dy, null, _5lines_intv*2.5, "lm", draw);
                    
                    bounding_box.add_BB(r.bb);
                }

                // Draw additional horizontal lines
                for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
                    if (p5i % 2 != 0) continue;
                    var a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3


                    graphic.canvasLine(paper,
                        note_x_center - 3,
                        rs_y_base + a5y,
                        note_x_center + 12,
                        rs_y_base + a5y,
                        {width:1}, draw);
                }
                for (let p5i = pos_on_5lines[ci]; p5i >= 10; --p5i) {
                    if (p5i % 2 != 0) continue;
                    let a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3

                    graphic.canvasLine(paper,
                        note_x_center - 3,
                        rs_y_base + a5y,
                        note_x_center + 12,
                        rs_y_base + a5y,
                        {width:1}, draw);
                }
            }
        }else if (balken_element.type == "rest") {
            // e is Rest or Chord(with with_rest flag on)

            // This calls the child class's renderRest ... maybe good to refactor
            let r = this.renderRest(
                e,
                paper,
                draw,
                x,
                rs_y_base,
                "l",
                row_height,
                row_height,
                param
            );

            bounding_box.add_BB(r.bb);

            if(draw){
                // notes_coord.x : 
                //   0 : Left side of note including accidentals
                //   1 : Left side of note
                //   2 : Right side of note
                //   3 : Right side of note including dots
                balken_element.notes_coord.x
                    .push([x, x, x + r.bb.width(), x + r.bb.width()]);
            }
        }else if(balken_element.type == "space"){

            // Do not use expand here in case only one space is grouped in balken group
            bounding_box.add(x, rs_y_base, 0.5*param.base_font_size, row_height);

        }else if(balken_element.type == "simile"){
            alert("Impleetaion not ready for siile in RS area");
        }

        // Apply minimum room for RS area elements
        bounding_box.expand(0, param.rs_elem_min_room, 0, 0); // Apply minimum room

        return {bounding_box:bounding_box};
    }

    balkenGrouping(balken){
        // Classify the elements for preparation of drawing : balkenGrouping()
        //Type a : Sole Rest or Space (Single element)
        //Type b : Sole Chord with Note value longer than or equal to 4th-note. (Note : 4_3, 4_5 etc ... would also classifeid here.)
        //Type c : Sole Chord(Isolated Chord) with Note value shorter than 4th-note. 
        //Type d : >= 2 contiguous Chord with note value shorter than 4th-note. Space can be inserted between the chords.
        let balkenGroups = [];
        for (let gbi = 0; gbi < balken.groups.length; ++gbi) {
            //let ys = balken.groups[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
            let g = balken.groups[gbi];
            if(g.e instanceof common.Rest || g.e instanceof common.Space || (g.e instanceof common.Chord && g.e.is_with_rest) ){
                balkenGroups.push({type:"a", elem:[g]});
            }else if(g.e instanceof common.Chord && g.balken_element.note_value <= 4){
                balkenGroups.push({type:"b", elem:[g]});
            }else{
                // 8-th and shorter Chord
                let tmp = [g];
                let t_gbi = gbi + 1;
                // Collect contiguous Chord(not with rest) of less than 8th duration and Space.  Space is included intentionally for the case space is inserted between chords with balken.
                while(t_gbi < balken.groups.length){
                    if((balken.groups[t_gbi].e instanceof common.Space) ||
                       (balken.groups[t_gbi].e instanceof common.Chord && (!balken.groups[t_gbi].e.is_with_rest) && balken.groups[t_gbi].balken_element.note_value >= 8))
                    {
                        tmp.push(balken.groups[t_gbi]);
                        ++t_gbi;
                    }else{
                        break;
                    }
                }
                if(tmp.filter(t=>t.e instanceof common.Chord).length == 1){
                    tmp.forEach(t=>{
                        if(t.e instanceof common.Chord)
                            balkenGroups.push({type:"c", elem:[t]});
                        else if(t.e instanceof common.Space)
                            balkenGroups.push({type:"a", elem:[t]});
                    });
//                   balkenGroups.push({type:"c", elem:tmp});
                }else{
                    balkenGroups.push({type:"d", elem:tmp});
                }
                gbi = t_gbi - 1; // as outer for will increment gbi, minus 1 here.
            }
        }
        return balkenGroups;
    }

    drawRsAreaElements(
        draw_scale, // This is the draw scale of latest element, coudl be differnt from draw scale of old eleents in registred bolken groups
        paper,
        balken,
        rs_y_base,
        row_height,
        meas_start_x,
        music_context,
        meas,
        param,
    ) {
        let bounding_box = new graphic.BoundingBox();

        // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes
        let _5lines_intv = row_height / 4;

        let x = balken.groups[0].org_x; // on screen position, no scaling applied

        // Balken Grouping
        let balkenGroups = this.balkenGrouping(balken);

        // Draw Balken for each group
        for(let i = 0; i < balkenGroups.length; ++i){
            let balkenGroup = balkenGroups[i];
            // a : sole Rest
            // b : sole Chord/Note of 4th note and longer
            // c : sole CHord/Note with shorter than 4th note but is judged as sole note
            // d : more than 1 contiguous chords with shorter than 4th notes. Balken will be drawn. Mixing of Space lement is possible unless number of chord >= 2.
            if(balkenGroup.type == "a" || balkenGroup.type == "b" || balkenGroup.type == "c"){
                x = this.drawBalkenABC(
                    balkenGroup, x, rs_y_base, _5lines_intv, bounding_box, param, paper, 
                    row_height, music_context, meas_start_x, meas, draw_scale);
            }else if(balkenGroup.type == "d"){
                // This is what we need to call draw balken
                x = this.drawBalkenD(
                    balkenGroup, x, rs_y_base, _5lines_intv, param, bounding_box, paper, 
                    music_context, row_height, meas_start_x, meas, draw_scale);
            }
        }
        
        // Draw tuplet signs if needed
        this.drawTuplet(balken, balkenGroups, bounding_box, paper, true, param);

        return { x: x, bb: bounding_box };

        // Draw tuplet marks
    }

    setNoteYCoords(balkenGroup, rs_y_base, _5lines_intv){

        for (let gbi = 0; gbi < balkenGroup.length; ++gbi) {
            //let ys = balkenGroup[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
            let e = balkenGroup[gbi].e;
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
            balkenGroup[gbi].balken_element.notes_coord.y = group_y;
        }

    }

    determineFlagDirections(balkenGroup, rs_y_base, _5lines_intv){
        var center_y = 0.0;
        var min_y = 10000000;
        var max_y = 0;
        var gbi_at_min_y = null;
        var gbi_at_max_y = null;
        var cnt_y = 0;

        for (let gbi = 0; gbi < balkenGroup.length; ++gbi) {
            let e = balkenGroup[gbi].e;

            if(e instanceof common.Chord){ //} || e instanceof common.Rest){

                let ys = balkenGroup[gbi].balken_element.notes_coord.y;

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
        let upper_flag = center_y > rs_y_base + _5lines_intv * 2;
        return {upper_flag, gbi_at_min_y, gbi_at_max_y, min_y, max_y};
    }

    drawWithoutBalkensWrap(
        balkenGroup, paper, param, rs_y_base, row_height, bounding_box,
        music_context, x, upper_flag, meas_start_x, meas, draw_scale)
    {
        for (let gbi = 0; gbi < balkenGroup.length; ++gbi) {
            let this_elem_draw_scale = balkenGroup[gbi].org_draw_scale;

            let e = balkenGroup[gbi].e;
            let balken_element = balkenGroup[gbi].balken_element;
            let ys = balken_element.notes_coord.y;

            var d = balken_element.note_value;

            paper.getContext("2d").scale(this_elem_draw_scale, 1);
            // Here all the output and set value by following funtion will be that with scaling apply.
            // To use the values which the following functions generates, apply "* this_elem_draw_scale".
            let wo_flags = this.drawRsAreaWithoutFlagBalken(true, paper, param, e,
                balken_element, x/this_elem_draw_scale, rs_y_base, row_height);
            paper.getContext("2d").scale(1.0/this_elem_draw_scale, 1);

            // ----
            // Convert output to on-screen coordinates
            // -----
            wo_flags.bounding_box.scale(this_elem_draw_scale, 1.0);
            for(let ncc = 0; ncc < balken_element.notes_coord.x.length; ++ncc){
                balken_element.notes_coord.x[ncc] = balken_element.notes_coord.x[ncc].map(x => x*this_elem_draw_scale);
            }
            this.hitManager.add(paper, wo_flags.bounding_box, e);
            bounding_box.add(wo_flags.bounding_box); // global RS are bounding box


            let xs = balken_element.notes_coord.x;

            if( e instanceof common.Chord && (!e.is_with_rest)){
                if (music_context.tie_info.rs_prev_has_tie) {
                    // NOTE : Tie is always drawn with on-screen coordinates, no scaling apply

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

                    if (balkenGroup[gbi].balken_element.type == "slash") {
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
                        //let prev_draw_scale = music_context.tie_info.rs_prev_draw_scale;

                        if ((y != prev_coord.y[ci]) || 
                             music_context.tie_info.rs_prev_tie_paper != paper) {

                            // Crossing measure row. Previous RS mark could be on another page.
                            // Make sure to create curve on the paper on which previous RS is drawn.
                            var brace_points = [
                                [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] + dy],
                                [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] - round + dy],
                                [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] - round + dy],
                                [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] + dy]
                            ];

                            let clip_rect = [
                                prev_coord.x[ci][3] +sdx, 
                                (prev_coord.y[ci] - 50), 
                                (psm.renderprop.meas_end_x - (prev_coord.x[ci][3] + sdx)  + 5),
                                100];

                            // eslint-disable-next-line no-constant-condition
                            if(false){
                                console.group("Tie");
                                console.log(brace_points);
                                console.log(clip_rect);
                                console.groupEnd();
                            }
                            
                            // In case the previous paper is in the same paper, "draw_scale" is currently applied,
                            // then temporaryly deactivate scaling.
                            // In case of differnt paper, such paper shall already be reverted back to scaling=1, 
                            // no need to do anything.
                            // Update : 2020 09 03 : No need to apply scaing as all the coordinates are normalized
                            //                       to on-screen coordinates
                            //if(paper == music_context.tie_info.rs_prev_tie_paper)
                            //    music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(1.0/draw_scale, 1.0);

                            graphic.canvasbBzierCurve(music_context.tie_info.rs_prev_tie_paper,
                                brace_points, false, false, 
                                {"clip-rect":clip_rect});

                            brace_points = [
                                [meas_start_x - 20, y + dy],
                                [meas_start_x - 20, y - round + dy],
                                [xs[ci][0] + edx, y - round + dy],
                                [xs[ci][0] + edx, y + dy]
                            ];

                            clip_rect = [meas_start_x - 5, (y - 50), 
                                (x - (meas_start_x - 5)), 100];

                            //paper.getContext("2d").scale(1.0/draw_scale, 1.0);
                            
                            graphic.canvasbBzierCurve(paper, brace_points, false, false,
                                {"clip-rect":clip_rect});

                            //paper.getContext("2d").scale(draw_scale, 1.0);

                        } else {
                            let brace_points = [
                                [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] + dy],
                                [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] - round + dy],
                                [xs[ci][0] + edx, y - round + dy],
                                [xs[ci][0] + edx, y + dy]
                            ];

                            //paper.getContext("2d").scale(1.0/draw_scale, 1.0);
                            
                            graphic.canvasbBzierCurve(paper, brace_points, false, false);
                            
                            //paper.getContext("2d").scale(draw_scale, 1.0);
                        }
                    }
                }

                music_context.tie_info.rs_prev_has_tie = balkenGroup[gbi].balken_element.has_tie;
                music_context.tie_info.rs_prev_tie_paper = paper;
                music_context.tie_info.rs_prev_coord = balken_element.notes_coord;
                music_context.tie_info.rs_prev_draw_scale = draw_scale;
                music_context.tie_info.rs_prev_meas = meas;
            }

            e.renderprop.x = x; 
            balken_element.renderprop.x = x;

            // Here is the only update of x
            //   * org_room_for_rs_per_element is with on-screen coordinates. In case scaling apply, this value is already set to 0.
            x += wo_flags.bounding_box.width() + balkenGroup[gbi].org_room_for_rs_per_element; // TODO : FIXME to cater for actual width of components
        }

        return x;
    }

    drawTuplet(balken, balkenGroups, bounding_box, paper, draw, param){
                // Draw tuplet(renpu) marker.
        // Tuplet marker drawing is possible even if no balken drawn. e.g. 
        let first_chord_rest_idx = balken.groups.findIndex(g=> (g.e instanceof common.Chord || g.e instanceof common.Rest));

        if(first_chord_rest_idx < 0) return;

        let last_chord_rest_idx  = common.findLastIndex(balken.groups, g=>(g.e instanceof common.Chord || g.e instanceof common.Rest));

        let tuplet = balken.groups[first_chord_rest_idx].balken_element.lengthIndicator.renpu; // TODO : Space should be eliminated

        if(!tuplet) return; // No tuplet.

        let pssx = balken.groups[first_chord_rest_idx].balken_element.notes_coord.x[0][1];
        let psex = balken.groups[last_chord_rest_idx].balken_element.notes_coord.x[0][2];
        let ro = 10;
        let center_x = (pssx + psex) / 2.0;
        let inherit_balken = balkenGroups.length==1 && balkenGroups[0].type=="d";

        let slope = 0.0;
        let intercept = 0.0;

        let upper_position = true; // By default put it in the upper position.

        if(inherit_balken){
            slope = balkenGroups[0].balken_draw_info.slope;
            intercept = balkenGroups[0].balken_draw_info.intercept;
            upper_position = balkenGroups[0].balken_draw_info.upper_flag;
        }else{
            // Draw tuplet mark irrespective of slope for balken
            let chords = balkenGroups.filter(bg=>bg.type!="a");
            slope = 0.0; // horizontal line for now
            let really_min_y = Math.min.apply(null, chords.map(bg=>bg.balken_draw_info.min_y));
            let really_max_y = Math.max.apply(null, chords.map(bg=>bg.balken_draw_info.max_y));
            let num_upper_flag = chords.filter(bg=>bg.balken_draw_info.upper_flag==true).length;
            upper_position = num_upper_flag > (chords.length - num_upper_flag);
            
            // Pla
            intercept =
                (upper_position ? really_min_y - param.note_bar_length : really_max_y + param.note_bar_length);
        }

        let r = graphic.canvasText(paper,
            center_x,
            slope * center_x +
                intercept +
                (upper_position ? -ro : ro),
            tuplet + "",
            12,
            "cm", undefined, !draw);
        bounding_box.add_BB(r.bb);


        // eslint-disable-next-line no-constant-condition
        if (!inherit_balken){ //same_sds[0].balken_element.note_value < 8) {
            var rno = 10;
            var rnh = 4;

            var points1 =
                [
                    [
                        pssx,
                        slope * pssx +
                            intercept +
                            (upper_position ? -rnh : rnh)
                    ],
                    [
                        pssx,
                        slope * pssx +
                            intercept +
                            (upper_position ? -rno : rno)
                    ],
                    [
                        center_x - 7,
                        slope * (center_x - 7) +
                            intercept +
                            (upper_position ? -rno : rno)
                    ]
                ]; 
            
            var points2 = 
                [
                    [
                        center_x + 7,
                        slope * (center_x + 7) +
                            intercept +
                            (upper_position ? -rno : rno)
                    ],
                    [
                        psex,
                        slope * psex +
                            intercept +
                            (upper_position ? -rno : rno)
                    ],
                    [
                        psex,
                        slope * psex +
                            intercept +
                            (upper_position ? -rnh : rnh)
                    ]
                ]; 

            let r = graphic.canvasPolygon(paper, points1, false, false, null, draw);
            bounding_box.add_BB(r.bb);
            r = graphic.canvasPolygon(paper, points2, false, false, null, draw);
            bounding_box.add_BB(r.bb);
        }
    }

    drawBalkenABC(balkenGroup, x, rs_y_base, _5lines_intv, bounding_box, param, paper, row_height, music_context, meas_start_x, meas, draw_scale){
        let elements = balkenGroup.elem;

        if(elements.length != 1){
            throw "Invalid context in draw_balken_abc";
        }

        // 0. make notes_coord for y axis
        this.setNoteYCoords(elements, rs_y_base, _5lines_intv);

        // 1. determine the flag direction here
        let dfret = this.determineFlagDirections(elements, rs_y_base, _5lines_intv);

        let upper_flag = dfret.upper_flag;

        balkenGroup.balken_draw_info = Object.assign({}, dfret);

        //let x = balkenGroup[0].org_x; // on screen position, no scaling applied

        // 2. Draw notes and slashes without bars, flags and balkens
        x = this.drawWithoutBalkensWrap(
            elements, paper, param, rs_y_base, row_height, bounding_box,
            music_context, x, upper_flag, meas_start_x, meas, draw_scale);

        if( (!(elements[0].e instanceof common.Chord)) || 
            (  elements[0].e instanceof common.Chord && elements[0].e.is_with_rest )) {
            return x; //{ x: x, bb: bounding_box };
        }

        // 4. Draw vertical bars
        for (let gbi = 0; gbi < elements.length; ++gbi) {
            // Currnetly, not apply scaling for vertical line and line width 1 always set to 1

            let ys = elements[gbi].balken_element.notes_coord.y;
            let xs = elements[gbi].balken_element.notes_coord.x;
            let d = elements[gbi].balken_element.note_value;

            //var intercept =
            //(upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) -
            //slope * (upper_flag ? x_at_min_y : x_at_max_y);

            if (elements[gbi].balken_element.type == "slash") {
                let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                // eslint-disable-next-line no-empty
                if (d <= 1) {
                } else {
                    let r = graphic.canvasLine(paper,
                        bar_x,
                        ys[0] + 3,
                        bar_x,
                        ys[0] + (upper_flag ? -param.note_bar_length : param.note_bar_length),
                        {width:1}, true);
                    bounding_box.add_BB(r.bb);
                }
                //bar_flag_group.push(o);
            } else if (elements[gbi].balken_element.type == "notes") {
                // eslint-disable-next-line no-empty
                if (d <= 1) {
                } else {
                    let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                    let y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    let y1 = upper_flag
                        ? Math.min.apply(null, ys) - param.note_bar_length
                        : Math.max.apply(null, ys) + param.note_bar_length;
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.


                    let r = graphic.canvasLine(paper,
                        bar_x,
                        y0,
                        bar_x,
                        y1,
                        {width:1}, true);
                    bounding_box.add_BB(r.bb);

                }
            // eslint-disable-next-line no-empty
            } else if (elements[gbi].balken_element.type == "rest") {
            }
        }
        //group.push(bar_flag_group);

        // 5. Draw flags

        // This is sigle flag/balken, then scaling apply. This is the only case we apply the scaling
        let this_elem_draw_scale = elements[0].org_draw_scale;

        // Normal drawing of flags
        let bar_x = elements[0].balken_element.notes_coord.x[0][upper_flag?2:1];
        let d = elements[0].balken_element.note_value;
        let numflag = common.myLog2(parseInt(d)) - 2;

        // 8 and 16 the has same length of vertical bars
        // 32 and uppper will have longer bars of which delta is corresponding to (Num flags - 2)
        if(numflag >= 1){
            let x_adj = -0.5; // subpixel adjustment
            let barlen_delta = Math.max(0, (numflag-2) * 5); // "5" is magic number adjusted for this paticular font
            let flag_w = _5lines_intv * 1.1; // Normalize by width. Unfortunately, it is not easy to normalize with height as the rule is not clear. "1.1" is magic number.
            let url = "flag_"+(upper_flag?"f":"i")+numflag; // for now numflags <= 4

            let ys = elements[0].balken_element.notes_coord.y;
            let xs = elements[0].balken_element.notes_coord.x;

            let y0 = upper_flag
                ? Math.max.apply(null, ys)
                : Math.min.apply(null, ys);
            let y1 = upper_flag
                ? Math.min.apply(null, ys) - param.note_bar_length - barlen_delta
                : Math.max.apply(null, ys) + param.note_bar_length + barlen_delta;

            paper.getContext("2d").scale(this_elem_draw_scale, 1.0);
            let r = graphic.canvasImage(paper, graphic.G_imgmap[url],
                (bar_x + x_adj)/this_elem_draw_scale,
                y1,
                flag_w,  // No need to apply "/this_elem_draw_scale" otherwise no compression apply :).
                null, "l"+(upper_flag?"t":"b"), true);
            bounding_box.add_BB(r.bb.scale(this_elem_draw_scale, 1.0)); // add based on on-screen coordinates
            paper.getContext("2d").scale(1.0/this_elem_draw_scale, 1.0);

        }

        return x; //{ x: x, bb: bounding_box };
    }

    drawBalkenD(balkenGroup, x, rs_y_base, _5lines_intv, param, bounding_box, paper, music_context, row_height, meas_start_x, meas, draw_scale){
        
        let elements = balkenGroup.elem;

        if(!elements.every((g)=>( g.e instanceof common.Chord || g.e instanceof common.Space)) ){
            throw "Invalid context in draw_balken_d";
        }

        // 0. make notes_coord for y axis
        this.setNoteYCoords(elements, rs_y_base, _5lines_intv);

        // 1. determine the flag direction here
        let dfret = this.determineFlagDirections(elements, rs_y_base, _5lines_intv);
        let upper_flag = dfret.upper_flag;
        let gbi_at_min_y = dfret.gbi_at_min_y;
        let gbi_at_max_y = dfret.gbi_at_max_y;
        let min_y = dfret.min_y;
        let max_y = dfret.max_y;

        balkenGroup.balken_draw_info = Object.assign({}, dfret);

        //let x = balkenGroup[0].org_x; // on screen position, no scaling applied

        // 2. Draw notes and slashes without bars, flags and balkens
        x = this.drawWithoutBalkensWrap(
            elements, paper, param, rs_y_base, row_height, bounding_box,
            music_context, x, upper_flag, meas_start_x, meas, draw_scale);

        // 3. Determine the flag intercept and slope
        // Slope and intercepts are calucated for the first and last Chord element. Space is skipped.
        //let first_chord_idx = balkenGroup.findIndex(g=>g.e instanceof common.Chord);
        //let last_chord_idx  = common.findLastIndex(balkenGroup, g=>g.e instanceof common.Chord);
        //let bridge_balken = first_chord_idx >= 0 && (first_chord_idx != last_chord_idx);
        let first_chord_idx = 0;
        let last_chord_idx = elements.length - 1;

        var x_at_min_y = elements[gbi_at_min_y].balken_element.notes_coord.x[0][upper_flag?2:1];
        var x_at_max_y = elements[gbi_at_max_y].balken_element.notes_coord.x[0][upper_flag?2:1];

        let slope = 0;

        var ps_y = elements[first_chord_idx].balken_element.notes_coord.y;
        var ps_bar_x = elements[first_chord_idx].balken_element.notes_coord.x[0][upper_flag?2:1];
        
        var pe_y = elements[last_chord_idx].balken_element.notes_coord.y;
        var pe_bar_x =
            elements[last_chord_idx].balken_element.notes_coord.x[0][upper_flag?2:1];
        
        var delta_y = upper_flag
            ? Math.min.apply(null, pe_y) - Math.min.apply(null, ps_y)
            : Math.max.apply(null, pe_y) - Math.max.apply(null, ps_y);
        slope = delta_y / (pe_bar_x - ps_bar_x);

        var intercept =
            (upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) -
            slope * (upper_flag ? x_at_min_y : x_at_max_y);

        balkenGroup.balken_draw_info.slope = slope;
        balkenGroup.balken_draw_info.intercept = intercept;

        // 4. Draw vertical bars
        for (var gbi = 0; gbi < elements.length; ++gbi) {
            // Currnetly, not apply scaling for vertical line and line width 1 always set to 1

            let ys = elements[gbi].balken_element.notes_coord.y;
            let xs = elements[gbi].balken_element.notes_coord.x;
            let d = elements[gbi].balken_element.note_value;

            if (elements[gbi].balken_element.type == "slash") {
                let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                // eslint-disable-next-line no-empty
                if (d <= 1) {
                } else {
                    let r = graphic.canvasLine(paper,
                        bar_x,
                        ys[0] + (upper_flag ? -3 : +3),
                        bar_x,
                        slope * bar_x + intercept,
                        {width:1}, true);
                    bounding_box.add_BB(r.bb);
                }
                //bar_flag_group.push(o);
            } else if (elements[gbi].balken_element.type == "notes") {
                // eslint-disable-next-line no-empty
                if (d <= 1) {
                } else {
                    let bar_x = upper_flag ? xs[0][2] : xs[0][1];
                    var y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.


                    let r = graphic.canvasLine(paper,
                        bar_x,
                        y0,
                        bar_x,
                        slope * bar_x + intercept,
                        {width:1}, true);
                    bounding_box.add_BB(r.bb);

                }
            // eslint-disable-next-line no-empty
            } else if (elements[gbi].balken_element.type == "rest") {
            }
        }
        //group.push(bar_flag_group);

        // 5. Draw balkens

        // Inter-element balkens, no scaling apply (even for single balken)

        // Draw flag for balken
        // Common balken
        if (elements[first_chord_idx].balken_element.note_value >= 8) {
            let r = graphic.canvasLine(paper,
                ps_bar_x,
                slope * ps_bar_x + intercept,
                pe_bar_x,
                slope * pe_bar_x + intercept,
                {width:param.balken_width}, true);
            bounding_box.add_BB(r.bb);
        }

        // Balken for each note_value level
        var gg = this.toSameValueGroup(elements, function(o) {
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
                    
                    let r = graphic.canvasLine(paper,
                        pssx,
                        slope * pssx +
                            intercept +
                            (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                        pssx + dir * blen,
                        slope * (pssx + dir * blen) +
                            intercept +
                            (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                        {width:param.balken_width}, true);
                    bounding_box.add_BB(r.bb);
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

                    let r = graphic.canvasLine(paper,
                        pssx,
                        slope * pssx +
                            intercept +
                            (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                        psex,
                        slope * psex +
                            intercept +
                            (upper_flag ? +1 : -1) * fi * param.note_flag_interval,
                        {width:param.balken_width}, true);
                    bounding_box.add_BB(r.bb);

                }
            }
        }

        return x; //{ x: x, bb: bounding_box };
    }

    renderSlash(paper, group, x, y, d, numdot, _5lines_intv, draw=true) {
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
                graphic.canvasPolygon(paper, points, true, false);
            } else {
                // '0' and other
                graphic.canvasPolygon(paper, points, true, true);
            }
            //group.push(obj);
            for (var i = 0; i < numdot; ++i) {
                graphic.canvasCircle(paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
            }
        }

        return { bar_reduction: rsgh / 2 - rsh, bounding_box:{x:x, y:y - rsgh/2, w: rsgw + (numdot > 0 ? 5 + numdot * 5 : 0), h:rsgh}};
    }


    /*
     * Group objs to the ones which has same values with 'field' ( Neighbor ). Skip the null or undefined value.
     */
    toSameValueGroup(objs, comp) {
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
