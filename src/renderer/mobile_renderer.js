import "@babel/polyfill";
import { Renderer } from "./renderer";
import * as common from "../common/common";
import * as graphic from "./graphic";
import { getGlobalMacros, getMacros } from "../parser/parser";

var SR_RENDER_PARAM = {
    origin: { x: 0, y: 0 },
    y_title_offset: 2,
    y_author_offset: 20,
    y_first_page_offset: 30,
    y_offset: 10,
    x_offset: 10,
    y_footer_offset: 10,
    min_measure_width: 100,
    row_height: 28, // Basic height of the measure when no rs, mu and ml area is drawn
    row_margin: 4, // Margin between next y_base and lower edge of Measure Lower Area
    rs_area_height: 24, // Rhythm Slashes Area // 
    rm_area_height: 15, // Reharsal Mark Area
    mu_area_height: 15, // Measure Upper Area ( Repeat signs area )
    ml_row_height: 10, // Measure Lower Area ( Lyrics etc.. )
    below_mu_area_margin: 2, // Margin between MU and chord
    above_rs_area_margin: 0, // Margin between chord and rythm slash
    below_rs_area_margin: 10, // Margin below chord and rhthm slash
    above_ml_area_margin: 0, // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
    header_body_margin: 2, // Margin between header and body (x-direction)
    max_scaling: 1.2,
    paper_width: (96 * 210) / 25.4, // 96dpi * A4_width[mm] / 25.4[mm/inche]
    paper_height: (96 * 297) / 25.4, // 96dpi * A4_height[mm] / 25.4[mm/inche]
    ncol: 1, // Number of columns of score inside the paper
    nrow: 1, // Number of rows of score inside the paper
    repeat_mark_font: {
        "font-family": "Times New Roman",
        "font-style": "italic",
        "font-weight": "bold"
    },
    reharsal_mark_font_size: 12,
    title_font_size: 14,
    sub_title_font_size: 14,
    base_font_size: 28,
    canvas_provider: null,
    balken_width: 3,
    note_bar_length: 24/4*3.5, // 3.5 times of interval is the conventional length
    note_flag_interval: 5,
};

// Simple renderer offsets


export class MobileRenderer extends Renderer {
    constructor(canvas, param) {
        super();

        this.canvas = canvas;

        this.param = SR_RENDER_PARAM; // Default parameters
        // Overwrite
        for (let key in param) {
            this.param[key] = param[key];
        }

        this.track = null;

        this.context = {
            paper: null,
            region_id: 0
        };
    }

    render(track, async_mode, progress_cb) {
        this.track = track;

        // Always works as asynchronously
        // Preload images, which is done asynchronously
        var urls = [
            "assets/img/segno.svg",
            "assets/img/coda.svg",
            "assets/img/flat.svg",
            "assets/img/sharp.svg",
            "assets/img/natural.svg",
            "assets/img/rest1.svg",
            "assets/img/rest2.svg",
            "assets/img/rest4.svg",
            "assets/img/rest8.svg",
            "assets/img/w1note.svg",
            "assets/img/w2note.svg",
            "assets/img/bnote.svg",
            "assets/img/flag_f.svg",
            "assets/img/flag_i.svg",
            
        ];
        var param = this.param;
        return graphic.PreloadImages(urls).then( () => {
            return this.render_impl(track, param);
        });
    }

    render_footer(canvaslist, songname){
        var score_width = this.param.paper_width / this.param.ncol;
        var score_height = this.param.paper_height / this.param.nrow;
        canvaslist.forEach((canvas,pageidx)=>{
            // Page number footer
            let footerstr =
                songname + " - " + (pageidx + 1) + " of " + canvaslist.length;
            //alert(footerstr);
            graphic.CanvasText(
                canvas,
                this.param.origin.x + score_width / 2,
                this.param.origin.y + score_height - this.param.y_footer_offset,
                footerstr,
                12,
                "ct"
            );
        });
    }

    async render_impl(track, param) {
        var origin = param.origin; //{x:0,y:0};

        var y_title_offset = origin.y + param.y_title_offset;
        var y_author_offset = origin.y + param.y_author_offset;
        var x_offset = origin.x + param.x_offset;
        var score_width = param.paper_width / param.ncol;
        var score_height = param.paper_height / param.nrow;
        var width = param.paper_width / param.ncol - param.x_offset * 2;

        var y_base = origin.y + param.y_first_page_offset;

        var songname = "";

        var global_macros = getGlobalMacros(track);

        let canvas = this.canvas;
        if (canvas == null) {
            canvas = await this.param.canvas_provider();
        }
        graphic.SetupHiDPICanvas(
            canvas,
            this.param.paper_width,
            this.param.paper_height
        );

        // Title
        var ri = graphic.CanvasText(
            canvas,
            x_offset + width / 2,
            y_title_offset,
            global_macros.title,
            param.title_font_size,
            "ct"
        );
        songname = global_macros.title;

        // Sub Title
        if (global_macros.sub_title != "")
            graphic.CanvasText(
                canvas,
                x_offset + width / 2,
                y_title_offset + ri.height,
                global_macros.sub_title,
                param.sub_title_font_size,
                "ct"
            );

        // Artist
        graphic.CanvasText(
            canvas,
            x_offset + width,
            y_author_offset,
            global_macros.artist,
            param.sub_title_font_size,
            "rt"
        );
        songname += "/" + global_macros.artist;

        // Music context
        var music_context = {
            accidental_info: {},
            key_info: {},
            time_info: {},
            tie_info: {
                rs_prev_coord: null,
                rs_prev_meas: null,
                rs_prev_has_tie: false,
                rs_prev_tie_paper: null,
                prev_has_tie: false
            },
            pos_in_a_measure: 0
        };

        var y_stacks = [{ type: "titles", height: param.y_first_page_offset }];
        for (var i = 0; i < track.reharsal_groups.length; ++i) {
            var rg_macros = getMacros(global_macros, track.reharsal_groups[i]);
            let rg = track.reharsal_groups[i];
            for (var bi = 0; bi < rg.blocks.length; ++bi) {
                var block_measures = rg.blocks[bi];
                var row_max_height = 0;
                var meas_row = [];
                var pm = null;
                var row_id_in_block = 0;
                for (var ml = 0; ml < block_measures.length; ++ml) {
                    var m = block_measures[ml];
                    if (m.raw_new_line) {
                        y_stacks.push({
                            type: "meas",
                            height: row_max_height,
                            cont: meas_row,
                            nm: m,
                            pm: pm,
                            rg: track.reharsal_groups[i],
                            macros: rg_macros,
                            block_id: bi,
                            row_id_in_block: row_id_in_block
                        });
                        row_max_height = 0;
                        meas_row = [];
                        pm = ml > 0 ? block_measures[ml - 1] : null;
                        row_id_in_block += 1;
                    }
                    meas_row.push(m);
                }
                if (meas_row.length > 0)
                    y_stacks.push({
                        type: "meas",
                        height: row_max_height,
                        cont: meas_row,
                        nm: null,
                        pm: pm,
                        rg: track.reharsal_groups[i],
                        macros: rg_macros,
                        block_id: bi,
                        row_id_in_block: row_id_in_block
                    });
            }
        }

        var yse = y_stacks;
        let canvaslist = [canvas];

        for (var pei = 0; pei < yse.length; ++pei) {
            // Loop each y_stacks
            // eslint-disable-next-line no-empty
            if (yse[pei].type == "titles") {

            } else if (yse[pei].type == "meas") {
                var row_elements_list = yse[pei].cont;
                let r = this.render_measure_row_simplified(
                    x_offset,
                    canvas,
                    yse[pei].macros,
                    row_elements_list,
                    yse[pei].rg,
                    yse[pei].pm,
                    yse[pei].nm,
                    y_base,
                    param,
                    true,
                    yse[pei].block_id == 0 && yse[pei].row_id_in_block == 0,
                    yse[pei].macros.reharsal_mark_position == "Inner",
                    this.param.canvas_provider != null
                        ? score_height - param.y_offset
                        : null,
                    music_context
                );
                if (!r) {
                    canvas = await this.param.canvas_provider();
                    canvaslist.push(canvas);
                    graphic.SetupHiDPICanvas(
                        canvas,
                        this.param.paper_width,
                        this.param.paper_height
                    );
                    y_base = origin.y + this.param.y_offset;
                    // try again next page
                    pei = pei - 1;
                } else {
                    y_base = r.y_base;
                }
            }
        }

        this.render_footer(canvaslist, songname);

        return { y: y_base };
    }

    screening_y_areas(row_elements_list, y_base, param, staff, 
        first_block_first_row,
        inner_reharsal_mark){

        var ycomps = ["rm", "mu","body","rs","ml","irm","end"];
        var yprof = {
            rm:    {detected:false, height: param.rm_area_height, margin:[0, 0]}, // Rhearsal mark if any
            mu:    {detected:false, height: param.mu_area_height, margin:[0, param.below_mu_area_margin]},
            body:  {detected:true,  height: param.row_height,     margin:[0, 0]},
            rs:    {detected:false, height: param.rs_area_height, margin:[param.above_rs_area_margin, param.below_rs_area_margin]},
            ml:    {detected:false, height: param.ml_row_height,  margin:[param.above_ml_area_margin, 0]},
            irm:   {detected:true,  height: param.row_margin,     margin:[0, 0]}, // Virtual row represeinting fixed inter-row margin
            end:   {detected:true,  height: 0,                    margin:[0, 0]} // Vitrual row representing start of end of row = start of next row
        };

        var lyric_rows = 0;

        //var draw_5line = false;
        if (staff == "ON") {
            yprof.rs.detected = true; 
        }

        // Screening of y-axis areas
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            var m = row_elements_list[ml];
            for (let ei = 0; ei < m.elements.length; ++ei) {
                var e = m.elements[ei];
                if (
                    e instanceof common.Coda ||
                    e instanceof common.Segno ||
                    e instanceof common.Comment ||
                    e instanceof common.LoopIndicator ||
                    e instanceof common.ToCoda ||
                    e instanceof common.DalSegno
                ) {
                    yprof.mu.detected = true;
                } else if (e instanceof common.MeasureBoundary) {
                    yprof.ml.detected =
                    yprof.ml.detected ||
                        (e.times != null && (e.ntimes || e.times != 2));
                } else if (e instanceof common.Chord) {
                    var bases = e.getChordStrBase(0, "flat");
                    yprof.ml.detected = yprof.ml.detected || bases[1] != null;
                    yprof.rs.detected |= e.note_group_list !== null;
                } else if (e instanceof common.Lyric) {
                    yprof.ml.detected = true;
                    lyric_rows = Math.max(
                        e.lyric.split("/").length,
                        lyric_rows
                    );
                }
            }
        }
        if (staff == "OFF") {
            yprof.rs.detected = false;
        }

        if(first_block_first_row){
            if(inner_reharsal_mark){
                yprof.mu.detected = true; // In MU area
            }else{
                yprof.rm.detected = true; // dedecated rehardsal mark region
            }
        }

        // Calculate yposition  for each area
        for(let i = 0; i < ycomps.length; ++i){
            let name = ycomps[i];
            yprof[name].y = (i==0 ? y_base : yprof[ycomps[i-1]].y + yprof[ycomps[i-1]].whole_height) + yprof[name].margin[0];
            if(!yprof[name].detected){
                yprof[name].whole_height = 0;
            }else{
                if(name == "ml"){
                    yprof[name].whole_height = Math.max(1, lyric_rows) * yprof[name].height; // multiplied by lyric ros
                }else{
                    yprof[name].whole_height = yprof[name].height + yprof[name].margin[0] + yprof[name].margin[1];
                }
            }
        }
       
        return yprof;
    }

    screening_x_areas(
        x,
        paper,
        macros,
        row_elements_list,
        prev_measure,
        next_measure,
        param,
        yprof,
        music_context
    ){
        var transpose = macros.transpose;
        var half_type = macros.half_type;

        var total_width = param.paper_width - 2 * param.x_offset;

        music_context.pos_in_a_measure = 0; // reset

        // Determine the width of each measure
        var fixed_width = 0;
        var num_flexible_rooms = 0;
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];
            var elements = this.classifyElements(m);
            elements.header.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
                    var ne = pm ? pm.elements[pm.elements.length - 1] : null;
                    let r = this.draw_boundary_simplified(
                        "begin",
                        ne,
                        e,
                        m.raw_new_line,
                        paper,
                        x,
                        0,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        param,
                        false
                    );
                    fixed_width += r.width;
                    e.renderprop = { w: r.width };
                } else if (e instanceof common.Time) {
                    fixed_width += 10;
                    e.renderprop = { w: 10 };
                }
            });

            fixed_width += param.header_body_margin;

            /*
            if (elements.body.length == 0) {
                fixed_width += 1 * param.base_font_size;
                num_flexible_rooms++;
            } else {
                elements.body.forEach(e => {
                    if (e instanceof common.Chord) {
                        var cr = this.render_chord_simplified(
                            false,
                            e,
                            transpose,
                            half_type,
                            paper,
                            x,
                            0,
                            param,
                            0
                        );
                        e.renderprop = { w: cr.width };
                        fixed_width += e.renderprop.w;
                        num_flexible_rooms++;
                    } else if (e instanceof common.Rest) {
                        e.renderprop = { w: 1 * param.base_font_size };
                        fixed_width += e.renderprop.w;
                        num_flexible_rooms++;
                    } else if (e instanceof common.Simile) {
                        e.renderprop = { w: 2 * param.base_font_size };
                        fixed_width += e.renderprop.w;
                        num_flexible_rooms++;
                    }
                });
            }*/


            var rberet = this.render_body_elements(
                false, x, elements, 
                param, music_context, 
                0, yprof, 
                paper, 0, 
                0 /*meas_start_x*/, 100 /*meas_end_x*/, // TODO ?
                m,
                1,
                transpose,
                half_type,
                0,
                0
            );
            fixed_width += rberet.fixed_width;
            num_flexible_rooms += rberet.num_flexible_rooms;

            // Draw footer
            elements.footer.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var nm =
                        ml == row_elements_list.length - 1
                            ? next_measure
                            : row_elements_list[ml + 1];
                    var ne = nm ? nm.elements[0] : null;
                    let r = this.draw_boundary_simplified(
                        "end",
                        e,
                        ne,
                        nm ? nm.raw_new_line : false,
                        paper,
                        x,
                        0,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        param,
                        false
                    );

                    e.renderprop = { w: r.width };
                    fixed_width += r.width;
                    // eslint-disable-next-line no-empty
                } else if (e instanceof common.DaCapo) {
                    // eslint-disable-next-line no-empty
                } else if (e instanceof common.DalSegno) {
                    // eslint-disable-next-line no-empty
                } else if (e instanceof common.ToCoda) {
                    // eslint-disable-next-line no-empty
                } else if (e instanceof common.Fine) {
                }
            });
        }

        // Now determine scaling of each measure to fit within width
        let free_width = total_width - fixed_width;
        let room_per_elem = free_width / num_flexible_rooms;

        return {room_per_elem:room_per_elem};
    }

    render_body_elements(
        draw, x, elements, 
        param, music_context, 
        room_per_elem, yprof, 
        paper, _5lines_intv, 
        meas_start_x, meas_end_x,
        m,
        x_global_scale,
        transpose,
        half_type,
        C7_width,
        y_body_or_rs_base,
        balken
    ){
        let fixed_width = 0;
        let num_flexible_rooms = 0;

        if (elements.body.length == 0) {
            if(draw)
                x += (1 * param.base_font_size + room_per_elem);
            else{
                fixed_width += (1 * param.base_font_size);
                num_flexible_rooms++;
            }
        }

        let body_grouping_info = m.renderprop.body_grouping_info;

        // DEBUG
        if(draw){
            console.log(m.renderprop.body_grouping_info);
        }

        body_grouping_info.groupedBodyElems.forEach( (element_group, gbei) => {
            // Draw Rythm Slashes, first
             if (yprof.rs.detected && body_grouping_info.all_has_length) {

       
                var e0 = element_group.elems[0];
                let cr = null;
                if (e0 instanceof common.Chord) {
                    cr = this.render_chord_simplified(
                        draw, 
                        e0,
                        transpose,
                        half_type,
                        paper,
                        x,
                        yprof.body.y,
                        param,
                        C7_width
                    );

                    if (draw && e0.exceptinal_comment !== null) {
                        graphic.CanvasText(
                            paper,
                            x,
                            yprof.body.y,
                            e0.exceptinal_comment.comment,
                            param.base_font_size / 2,
                            "lb"
                        );
                    }
                    if (draw && e0.lyric !== null) {
                        var llist = e0.lyric.lyric.split("/");
                        for (var li = 0; li < llist.length; ++li) {
                            graphic.CanvasText(
                                paper,
                                x,
                                yprof.ml.y + li * param.ml_row_height,
                                llist[li],
                                param.base_font_size / 3,
                                "lt"
                            );
                        }
                    }

                } else { // Rest or Simile
                    // Rest is drawn in render_rs_area function in RS area
                    cr = {width:0};
                    
                }

                

                /*
                let scaling_for_rs = 1;
                if(draw){
                    scaling_for_rs = (element_group.renderprop.w + room_per_elem)/element_group.renderprop.rs_area_width;
                }

                var g = this.render_rs_area(
                    x,
                    element_group.elems,
                    paper,
                    yprof.rs.y,
                    yprof.rs.height,
                    meas_start_x,
                    meas_end_x,
                    draw,
                    0,
                    scaling_for_rs,
                    x_global_scale,
                    music_context,
                    m,
                    param
                );

                //if (g.group) rs_area_svg_groups.push(g.group);

                var rs_area_width = g.x - x;

                if(draw){
                    let first_symbol_width = ( element_group.renderprop.w + room_per_elem);
                    x += Math.max(rs_area_width, first_symbol_width);
                }else{
                    element_group.renderprop.w = Math.max(rs_area_width, cr.width);
                    element_group.renderprop.rs_area_width = rs_area_width;
                    fixed_width += element_group.renderprop.w;
                    num_flexible_rooms++;
                }
                */

                let rs_area_bounding_box = new common.BoundingBox();
                let rs_x = x;

                let room_for_rs_per_elem = 0;
                if(draw){
                    let room_for_fist_elem =0;
                    if(element_group.renderprop.based_on_rs_elem){
                        room_for_rs_per_elem = room_per_elem;
                        room_for_fist_elem = room_per_elem * element_group.elems.length;
                    }else{
                        let room_for_rs = (element_group.renderprop.w + room_per_elem) 
                            - element_group.renderprop.rs_area_width; 
                        room_for_rs_per_elem = room_for_rs / element_group.elems.length;
                        room_for_fist_elem = room_per_elem;
                    }

                    let g = this.render_rs_area(
                        x,
                        element_group.elems,
                        paper,
                        yprof.rs.y,
                        yprof.rs.height,
                        meas_start_x,
                        meas_end_x,
                        draw,
                        0,
                        1.0,
                        x_global_scale,
                        music_context,
                        m,
                        param,
                        room_for_rs_per_elem,
                        balken,
                        (gbei == body_grouping_info.groupedBodyElems.length-1)
                    );
                    var rs_area_width = g.x - x;
                    let first_symbol_width = ( element_group.renderprop.w + room_for_fist_elem);
                    x += Math.max(rs_area_width, first_symbol_width);
                }else{
                    // Only try to esimate using non-flag-balken drawer
                    element_group.elems.forEach(e=>{
                        let balken_element = this.generate_balken_element(
                            e, rs_x, yprof.rs.y, yprof.rs.height, music_context);
                        let r = this.draw_rs_area_without_flag_balken(
                            draw, paper, e, balken_element, rs_x, yprof.rs.y, yprof.rs.height);
                        e.renderprop.balken_element = balken_element;
                        rs_area_bounding_box.add_rect(r.bounding_box);
                        rs_x += r.bounding_box.w + room_for_rs_per_elem;
                    });
                    let rs_area_width = rs_area_bounding_box.get().w;
                    element_group.renderprop.w = Math.max(rs_area_width, cr.width);
                    element_group.renderprop.rs_area_width = rs_area_width;
                    element_group.renderprop.based_on_rs_elem = (rs_area_width > cr.width);
                    fixed_width += element_group.renderprop.w;
                    num_flexible_rooms += (element_group.renderprop.based_on_rs_elem ? element_group.elems.length : 1);
                }

            } else{
                element_group.elems.forEach(e=>{
                    if (e instanceof common.Chord) {
                        let cr = this.render_chord_simplified(
                            draw,
                            e,
                            transpose,
                            half_type,
                            paper,
                            x,
                            yprof.body.y,
                            param,
                            C7_width
                        );

                        if (draw && e.exceptinal_comment !== null) {
                            graphic.CanvasText(
                                paper,
                                x,
                                yprof.body.y,
                                e.exceptinal_comment.comment,
                                param.base_font_size / 2,
                                "lb"
                            );
                        }
                        if (draw && e.lyric !== null) {
                            var llist = e.lyric.lyric.split("/");
                            for (var li = 0; li < llist.length; ++li) {
                                graphic.CanvasText(
                                    paper,
                                    x,
                                    yprof.ml.y + li * param.ml_row_height,
                                    llist[li],
                                    param.base_font_size / 3,
                                    "lt"
                                );
                            }
                        }

                        if(draw)
                            x += ( e.renderprop.w + room_per_elem);
                        else{
                            e.renderprop.w = cr.width;
                            fixed_width += e.renderprop.w;
                            num_flexible_rooms++;
                        }

                    } else if (e instanceof common.Rest) {
                        let cr = this.render_rest_plain(
                            e,
                            paper,
                            draw,
                            x,
                            y_body_or_rs_base,
                            C7_width,
                            yprof.rs.detected ? param.rs_area_height : param.row_height,
                            param
                        );
                        if(draw)
                            x += (e.renderprop.w +room_per_elem); 
                        else{
                            e.renderprop.w = cr.bounding_box.w;
                            fixed_width += e.renderprop.w;
                            num_flexible_rooms++;
                        }
                    } else if (e instanceof common.Simile) {
                        let cr = this.render_simile_mark_plain(
                            draw,
                            paper,
                            x,
                            y_body_or_rs_base,
                            param.rs_area_height,
                            e.numslash,
                            false,
                            "l"
                        );
                        if(draw)
                            x += (e.renderprop.w +room_per_elem); 
                        else{
                            e.renderprop.w = cr.width;
                            fixed_width += e.renderprop.w;
                            num_flexible_rooms++;
                        }
                    } else if (e instanceof common.Space) {
                        if(draw)
                            x += (e.renderprop.w +room_per_elem); 
                        else{
                            e.renderprop.w = 1 * param.base_font_size;
                            fixed_width += e.renderprop.w;
                            num_flexible_rooms++;
                        }
                    }
                });
            }
        });

        return {x:x, fixed_width:fixed_width, num_flexible_rooms:num_flexible_rooms};
    }
    
    grouping_body_elemnts_enh(body_elements, music_context){
        // First, guess chord duration here.
        // In current version, each chord in the measure is assumed to have the same duration.
        // TODO : Improve based on number of spaces or duration indication mark.
        let all_has_length = true;
        let chord_name_str = null;
        let sum_length = 0;
        let rest_or_long_rests_detected = false;

        body_elements.forEach(function(e) {
            all_has_length &= e.note_group_list !== null;
            if (all_has_length)
                sum_length += e.note_group_list[0].lengthIndicator.length;
            rest_or_long_rests_detected |= e instanceof common.Rest;
        });

        // Reset music context
        // TODO : consider key infomration
        // TODO : consider tie
        // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
        music_context.accidental_info = new Array(128).fill(0);

        var tmpl = { elems: [], groupedChordsLen: 0, renderprop:{} };
        var groupedBodyElems = [];

        if (body_elements.length > 0) groupedBodyElems.push(common.deepcopy(tmpl));
        var gbei = 0;

        // Grouping the chord and notes among which the x-axis rooms are shared
        // grouping is just done whether same chord is sahred.
        // If this measure starts with Rest/Simle, then following Rests and chord without chord 
        // name are regarded as in the same group.
        // IF this measure starts with Chord with no name, then folowing Rests/Similre and Chords 
        // with no names are grouped in the same group.
        body_elements.forEach((e, ei)  => {
            let this_chord_str = "";
            if(e instanceof common.Chord){
                this_chord_str = e.chord_name_str;
            }else{
                this_chord_str = ""; // Rests, Simile(in body) etc are regarded as empty chord
            }
            if(chord_name_str === null) chord_name_str = this_chord_str;
            
            if (groupedBodyElems[gbei].elems.length == 0) {
                // Keep in the same group
            } else if (
                all_has_length &&
                (this_chord_str == chord_name_str ||
                 this_chord_str == "" && chord_name_str != "")
            ) {
                // Keep in the same group
            } else {
                // flush
                groupedBodyElems.push(common.deepcopy(tmpl));
                ++gbei;
                chord_name_str = this_chord_str;
            }

            groupedBodyElems[gbei].elems.push(e);
        });

        return {groupedBodyElems: groupedBodyElems, all_has_length:all_has_length};
    }


    render_measure_row_simplified(
        x,
        paper,
        macros,
        row_elements_list,
        reharsal_group,
        prev_measure,
        next_measure,
        y_base,
        param,
        draw,
        first_block_first_row,
        inner_reharsal_mark,
        ylimit,
        music_context
    ) {
        var x_global_scale = macros.x_global_scale;
        var transpose = macros.transpose;
        var half_type = macros.half_type;
        var staff = macros.staff;
        var theme = macros.theme;

        /* Reference reserved width for empty measures or chord symbol without base names*/
        var C7_width = 20;

        if (staff == "ON") {
            // rs_area_detected = true; // Fix me : Not supported in simplified renderer
        }
        // interval of 5 lines
        var _5lines_intv = param.rs_area_height / (5 - 1);

        var yprof = this.screening_y_areas(row_elements_list, y_base, param, staff, 
            first_block_first_row, inner_reharsal_mark);

        var y_next_base = yprof.end.y;

        var y_body_or_rs_base = yprof.rs.detected ? yprof.rs.y : yprof.body.y;

        // if ylimit is specified, and drawing region surpass that limit, do not render
        if (ylimit !== null && y_next_base > ylimit) {
            return null;
        }

        // Screening music contexts and determine grouping in body elements
        // For each measure in this row
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];

            let elements = this.classifyElements(m); // Too much call of calssify elements.

            // Grouping body elements which share the same balken
            let geret = this.grouping_body_elemnts_enh(elements.body, music_context);

            m.renderprop.body_grouping_info = geret;
        }

        // Screening x elements and determine the rendering policy for x-axis.
        let dammy_music_context = common.deepcopy(music_context); // Maybe not required ?
        var sxaret = this.screening_x_areas(
            x,
            paper,
            macros,
            row_elements_list,
            prev_measure,
            next_measure,
            param,
            yprof,
            dammy_music_context
        );

        var room_per_elem = sxaret.room_per_elem;

        // Reharsal mark if any
        if(first_block_first_row && !inner_reharsal_mark){
            let r = graphic.CanvasTextWithBox(
                paper,
                param.x_offset,
                yprof.rm.y,
                reharsal_group.name,
                param.reharsal_mark_font_size,
                2, 
                graphic.GetCharProfile(param.reharsal_mark_font_size).height
            );
        }

        // For each measure in this row
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];

            let elements = this.classifyElements(m);

            var mh_offset = 0;

            var meas_base_x = x;

            // reset pos inside a measure
            music_context.pos_in_a_measure = 0;

            // balken context inside a measure
            let balken = {
                groups: []
            };

            // Inner reharsal mark in MU area
            if(first_block_first_row && inner_reharsal_mark && ml==0){

                let r = graphic.CanvasTextWithBox(
                    paper,
                    param.x_offset,
                    yprof.mu.y,
                    reharsal_group.name,
                    param.reharsal_mark_font_size,
                    2, 
                    graphic.GetCharProfile(param.reharsal_mark_font_size).height
                );

                mh_offset += (r.width+2);
            }

            for (var ei = 0; ei < elements.header.length; ++ei) {
                let e = elements.header[ei];
                if (e instanceof common.Coda) {
                    let r = this.draw_coda_plain(
                        paper,
                        meas_base_x + mh_offset,
                        yprof.mu.y,
                        "lt",
                        e,
                        param.base_font_size
                    );
                    mh_offset += r.width;
                } else if (e instanceof common.Segno) {
                    let r = this.draw_segno_plain(
                        paper,
                        meas_base_x + mh_offset,
                        yprof.mu.y,
                        e,
                        param.base_font_size
                    );
                    mh_offset += r.width;
                } else if (e instanceof common.Comment) {
                    // If this comment is associated with a chord with exceptional comment, not rendered here.
                    if (!e.chorddep) {
                        let r = graphic.CanvasText(
                            paper,
                            meas_base_x + mh_offset,
                            yprof.body.y,
                            e.comment,
                            param.base_font_size / 2,
                            "lb"
                        );
                        mh_offset += r.width;
                    }
                } else if (e instanceof common.Lyric) {
                    if (draw) {
                        // If this comment is associated with a chord with exceptional comment, not rendered here.
                        if (!e.chorddep) {
                            // Currently lyrics are only rendered for chord dependency case
                        }
                    }
                }
            } // Header loop

            let meas_start_x = x;
            let meas_start_x_actual_boundary = x;

            // Draw header
            var header_rs_area_width = 0;
            var header_body_area_width = 0;
            // Clef, Key, Begin Boundary, Time(1st one) are included in this area
            elements.header.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
                    var ne = pm ? pm.elements[pm.elements.length - 1] : null;
                    let r = this.draw_boundary_simplified(
                        "begin",
                        ne,
                        e,
                        m.raw_new_line,
                        paper,
                        x,
                        y_body_or_rs_base,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        param,
                        true
                    );
                    m.renderprop.y = y_body_or_rs_base;
                    m.renderprop.sx = x;
                    m.renderprop.paper = paper;
                    x += e.renderprop.w;
                    meas_start_x_actual_boundary = r.actual_boundary;
                } else if (e instanceof common.Time) {
                    let height = yprof.rs.detected ?param.rs_area_height : param.row_height;
                    graphic.CanvasText(
                        paper,
                        x + e.renderprop.w / 2,
                        y_body_or_rs_base + height / 2,
                        e.numer,
                        param.base_font_size / 2,
                        "cb",
                        e.renderprop.w
                    );
                    graphic.CanvasText(
                        paper,
                        x + e.renderprop.w / 2,
                        y_body_or_rs_base + height / 2,
                        e.denom,
                        param.base_font_size / 2,
                        "ct",
                        e.renderprop.w
                    );
                    var ly = yprof.body.y + height / 2;
                    if (draw && !yprof.rs.detected)
                        graphic.CanvasLine(
                            paper,
                            x,
                            ly,
                            x + e.renderprop.w,
                            ly
                        );
                    x += e.renderprop.w;
                }
            });

            x += param.header_body_margin;

            // Draw body
            let rberet = this.render_body_elements(
                true, x, elements, 
                param, music_context, 
                room_per_elem, yprof, 
                paper, _5lines_intv, 
                meas_start_x, meas_end_x,
                m,
                x_global_scale,
                transpose,
                half_type,
                C7_width,
                y_body_or_rs_base,
                balken);
            
            x = rberet.x;

            // Draw footer
            var footer_base = x;
            for (let ei = 0; ei < elements.footer.length; ++ei) {
                let e = elements.footer[ei];
                if (e instanceof common.MeasureBoundary) {
                    var nm =
                        ml == row_elements_list.length - 1
                            ? next_measure
                            : row_elements_list[ml + 1];
                    var ne = nm ? nm.elements[0] : null;
                    let r = this.draw_boundary_simplified(
                        "end",
                        e,
                        ne,
                        nm ? nm.raw_new_line : false,
                        paper,
                        x,
                        y_body_or_rs_base,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        param,
                        true
                    );

                    m.renderprop.ex = x;
                    x += e.renderprop.w;
                } else if (e instanceof common.DaCapo) {
                    graphic.CanvasText(
                        paper,
                        x,
                        y_body_or_rs_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb"
                    );
                    if (yprof.rs.detected) x += 15 * 4;
                    //text = raphaelText(paper, x, y_body_or_rs_base - 8 /* + row_height + 8*/, e.toString(), 15, lr+"c").attr(param.repeat_mark_font);
                    //if(rs_area_detected) x += text.getBBox().width;
                    //rs_area_svg_groups.push(text);
                } else if (e instanceof common.DalSegno) {
                    graphic.CanvasText(
                        paper,
                        x,
                        y_body_or_rs_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb"
                    );
                    //if (yprof.rs.detected) x += 15 * 4;
                    //text = raphaelText(paper, x, y_body_or_rs_base - 8 /* + row_height + 8*/, e.toString(), 15, lr+"c").attr(param.repeat_mark_font);
                    //if(rs_area_detected) x += text.getBBox().width;
                    //rs_area_svg_groups.push(text);
                } else if (e instanceof common.ToCoda) {
                    if (yprof.rs.detected) {
                        /*
                        var text = raphaelText(
                            paper,
                            x,
                            y_body_or_rs_base,
                            "To",
                            param.base_font_size / 2,
                            "lb"
                        ).attr(param.repeat_mark_font);
                        x += text.getBBox().width + 5;
                        rs_area_svg_groups.push(text);
                        var coda = draw_coda(
                            paper,
                            x,
                            y_body_or_rs_base,
                            "lb",
                            e
                        );
                        x += coda.getBBox().width;
						rs_area_svg_groups.push(coda);
						*/
                    } else {
                        let r = this.draw_coda_plain(
                            paper,
                            x,
                            y_body_or_rs_base,
                            "rb",
                            e,
                            param.base_font_size
                        );
                        //paper.getContext("2d").drawImage(graphic.G_imgmap["assets/img/coda.svg"], x - 15, y_body_or_rs_base - 15, 15, 15);
                        graphic.CanvasText(
                            paper,
                            x - r.width,
                            y_body_or_rs_base,
                            "To",
                            param.base_font_size / 2,
                            "rb"
                        );
                    }
                } else if (e instanceof common.Fine) {
                    graphic.CanvasText(
                        paper,
                        x,
                        y_body_or_rs_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb"
                    );
                    if (yprof.rs.detected) x += 15 * 4;
                } else {
                    throw "Unkown instance of footer elements";
                }
            }

            var meas_end_x = x;

            // Draw Upper and Lower Signs
            for (let ei = 0; ei < elements.measure_wide.length; ++ei) {
                let e = elements.measure_wide[ei];
                if (e instanceof common.LoopIndicator) {
                    var oy = 10;
                    var ly = yprof.body.y - 2 - oy;
                    var sx = meas_start_x_actual_boundary;
                    var fx = meas_start_x + (meas_end_x - meas_start_x) * 0.7;
                    graphic.CanvasLine(paper, sx, ly, sx, ly + oy);
                    graphic.CanvasLine(paper, sx, ly, fx, ly);
                    var s = e.indicators.join(",");
                    graphic.CanvasText(
                        paper,
                        sx + 2,
                        ly,
                        s,
                        param.base_font_size / 3,
                        "lt"
                    );
                } else if (e instanceof common.LongRestIndicator) {
                    let height = yprof.rs.detected ? param.rs_area_height : param.row_height;
                    let sx =
                        meas_start_x +
                        m.header_width -
                        param.header_body_margin; // More beautiful for long rest if header body margin is omitted
                    let fx = meas_end_x - m.footer_width;
                    var rh = height;
                    var r_lrmargin = 0.05;
                    var min_lrmargin = 5;
                    var max_lrmargin = 10;
                    var yshift = 0; // height / 6;
                    var vlmargin = 0.2;

                    let lrmargin = Math.max(
                        min_lrmargin,
                        Math.min(max_lrmargin, (sx + fx) * r_lrmargin)
                    );

                    var lx = sx + lrmargin;
                    var rx = fx - lrmargin;

                    if (draw)
                        graphic.CanvasLine(
                            paper,
                            lx,
                            y_body_or_rs_base + height / 2 + yshift,
                            rx,
                            y_body_or_rs_base + height / 2 + yshift,
                            { width: height/5 }
                        );
                    if (draw)
                        graphic.CanvasLine(
                            paper,
                            lx,
                            y_body_or_rs_base + rh * vlmargin + yshift,
                            lx,
                            y_body_or_rs_base + rh - rh * vlmargin + yshift,
                            { width: "1" }
                        );
                    if (draw)
                        graphic.CanvasLine(
                            paper,
                            rx,
                            y_body_or_rs_base + rh * vlmargin + yshift,
                            rx,
                            y_body_or_rs_base + rh - rh * vlmargin + yshift,
                            { width: "1" }
                        );
                    if (draw) {
                        graphic.CanvasText(
                            paper,
                            (sx + fx) / 2,
                            y_body_or_rs_base,
                            e.longrestlen,
                            param.base_font_size / 2,
                            "ct",
                            undefined,
                            !draw
                        );
                    }

                    //rest_or_long_rests_detected |= true;
                } else if (e instanceof common.Simile) {
                    // Simile mark in measure wide element if there is no other body elements in this measure
                    let sx =
                        meas_start_x +
                        m.header_width -
                        param.header_body_margin; // More beautiful for long rest if header body margin is omitted
                    let fx = meas_end_x - m.footer_width;
                    this.render_simile_mark_plain(
                        draw,
                        paper,
                        (sx + fx) / 2,
                        y_body_or_rs_base,
                        param.rs_area_height,
                        e.numslash,
                        false,
                        "c"
                    );
                } else {
                    throw "Unkown measure wide instance detected";
                }
            }

            m.renderprop.meas_end_x = meas_end_x;
            m.renderprop.meas_start_x = meas_start_x;
        } // measure loop

        // 0. Draw 5 lines
        if(draw && yprof.rs.detected){
            let start_x = row_elements_list[row_elements_list.length-1].renderprop.meas_end_x;
            let end_x   = row_elements_list[0].renderprop.meas_start_x;
            for (let i = 0; i < 5; ++i) {
                let intv = _5lines_intv;
                let dy = 0;
                graphic.CanvasLine(paper, 
                    start_x, yprof.rs.y + i*intv+dy,
                    end_x,   yprof.rs.y + i*intv+dy,
                    {width:1});
            }      
        }

        // return {y_base:y_base + param.row_height + param.row_margin};
        return { y_base: y_next_base };
    }

    draw_segno_plain(paper, x, y, segno, B) {
        var lx = x;
        paper
            .getContext("2d")
            .drawImage(graphic.G_imgmap["assets/img/segno.svg"], lx, y, B / 3, B / 2);
        lx += B / 3;
        if (segno.number !== null) {
            let r = graphic.CanvasText(
                paper,
                lx,
                y + 15,
                segno.number,
                B / 2,
                "lb"
            );
            lx += r.width;
        }
        if (segno.opt !== null) {
            let r = graphic.CanvasText(
                paper,
                lx,
                y + 15,
                "(" + segno.opt + ")",
                B / 2,
                "lb"
            );
            lx += r.width;
        }

        return { width: lx - x };
    }

    draw_coda_plain(paper, x, y, align, coda, B) {
        var width = 0;
        var ys = 0;
        if (align[1] == "b") {
            ys = -B / 2;
        } else if (align[1] == "m") {
            ys = -B / 2 / 2;
        }
        var img_y = y + ys;

        if (align[0] == "r") {
            if (coda.number !== null) {
                let r = graphic.CanvasText(
                    paper,
                    x,
                    img_y + B / 2,
                    coda.number,
                    B / 2,
                    "rb"
                );
                width += r.width;
            }
            paper
                .getContext("2d")
                .drawImage(
                    graphic.G_imgmap["assets/img/coda.svg"],
                    x - width - B / 2,
                    img_y,
                    B / 2,
                    B / 2
                );
            width += B / 2;
        } else if (align[0] == "l") {
            paper
                .getContext("2d")
                .drawImage(
                    graphic.G_imgmap["assets/img/coda.svg"],
                    x,
                    img_y,
                    B / 2,
                    B / 2
                );
            width += B / 2;
            if (coda.number !== null) {
                let r = graphic.CanvasText(
                    paper,
                    x + width,
                    img_y + B / 2,
                    coda.number,
                    B / 2,
                    "lb"
                );
                width += r.width;
            }
        } else {
            throw "NOT SUPPORTED";
        }
        return { width: width };
    }

    render_chord_as_string_plain(chord, paper, x, y_body_base, param, draw) {
        let r = graphic.CanvasText(
            paper,
            x,
            y_body_base + param.row_height / 2,
            chord.chord_str,
            param.base_font_size * 0.6,
            "lm",
            undefined,
            !draw
        );

        return { width: r.width };
    }

    render_rest_plain(
        e,
        paper,
        draw,
        x,
        y_body_or_rs_base,
        C7_width,
        row_height,
        param
    ) {
        let _5i = row_height / 4; 
        var yoffsets = {
            1: -_5i,
            2: (-_5i / 6) * 4,
            4: -_5i * 1.5,
            8: -_5i,
            16: 0,
            32: 0,
            64: _5i
        };
        var heights = {
            1: (_5i / 6) * 4,
            2: (_5i / 6) * 4,
            4: _5i * 3,
            8: _5i * 2.5,
            16: _5i * 2.5,
            32: _5i * 2.5,
            64: _5i * 2.5
        };
        var dot_xoffsets = {
            1: 16,
            2: 16,
            4: 10,
            8: 12,
            16: 14,
            32: 16,
            64: 18
        };
        var rd = e.note_group_list[0].lengthIndicator.base;
        var numdot = e.note_group_list[0].lengthIndicator.numdot;
        var oy = yoffsets[rd];
        var fs = 14;
        var ctx = paper.getContext("2d");
        // eslint-disable-next-line no-constant-condition
        if (false) {
            for (var i = 0; i < 5; ++i) {
                graphic.CanvasLine(
                    paper,
                    x,
                    y_body_or_rs_base + i * _5i,
                    x + 20,
                    y_body_or_rs_base + i * _5i,
                    { width: 1 }
                );
            }
        }

        if(draw){
            var img = graphic.G_imgmap["assets/img/rest" + (rd <= 4 ? rd : 8) + ".svg"];
            var s = img.height / heights[rd];
            if (rd <= 4) {
                ctx.drawImage(
                    img,
                    x,
                    y_body_or_rs_base + row_height / 2 + oy,
                    img.width / s,
                    img.height / s
                );
            } else {
                var nKasane = common.myLog2(rd) - 2;
                var rdx = 2;
                var rdy = -_5i;
                for (var k = 0; k < nKasane; ++k) {
                    ctx.drawImage(
                        img,
                        x + k * rdx,
                        y_body_or_rs_base + row_height / 2 + k * rdy + oy,
                        img.width / s,
                        img.height / s
                    );
                }
            }
            // dots
            for (var di = 0; di < numdot; ++di) {
                graphic.CanvasCircle(
                    paper,
                    x + dot_xoffsets[rd] + di * 5,
                    y_body_or_rs_base + row_height / 2 - _5i / 2,
                    1
                );
            }
        }

        return { bounding_box:{x:x,y:y_body_or_rs_base, w:10, h:row_height }}; // TODO : Impelment correctly
    }

    render_simile_mark_plain(
        draw,
        paper,
        x,
        y_body_base,
        row_height,
        numslash,
        put_boundary,
        align
    ) {
        var h = 4;
        var H = 12;
        var i = 4;
        var cm = 2;
        var cr = 1.2;
        var _5lines_intv = row_height / 4;
        var width = (h + i) * (numslash - 1) + h + H;

        if (align == "c") x -= width / 2;
        else if (align == "r") x -= width;

        var x0 = x;
        if (draw)
            graphic.CanvasCircle(
                paper,
                x + cm,
                y_body_base + _5lines_intv * 1.5,
                cr
            );
        for (let r = 0; r < numslash; ++r) {
            var y = y_body_base;
            x += (h + i) * r;
            if (draw) {
                /*var path = graphic.svgPath(
                    [
                        [x, y + _5lines_intv * 3],
                        [x + h, y + _5lines_intv * 3],
                        [x + h + H, y + _5lines_intv * 1],
                        [x + H, y + _5lines_intv]
                    ],
                    true
                );
                var path2d = new Path2D(path);
                var obj = paper.getContext("2d").fill(path2d); //path(path).attr({'fill':'#000000'});
                */
                var points = [
                   [x, y + _5lines_intv * 3],
                   [x + h, y + _5lines_intv * 3],
                    [x + h + H, y + _5lines_intv * 1],
                    [x + H, y + _5lines_intv]
                ];
                graphic.CanvasPolygon(paper, points, true, true);     
            }
        }
        if (draw)
            graphic.CanvasCircle(
                paper,
                x + h + H - cm,
                y_body_base + (row_height / 4) * 2.5,
                cr
            );
        if (put_boundary) {
            if (draw)
                graphic.CanvasLine(
                    paper,
                    x0 + width / 2,
                    y_body_base,
                    x0 + width / 2,
                    y_body_base + row_height,
                    { width: 1 }
                );
        }
        return {width: width};
    }

    render_chord_simplified(
        draw,
        chord,
        transpose,
        half_type,
        canvas,
        x,
        y_body_base,
        param,
        C7_width
    ) {
        if (!chord.is_valid_chord) {
            return this.render_chord_as_string_plain(
                chord,
                canvas,
                x,
                y_body_base,
                param,
                draw
            );
        }

        var ce = this.chord_elem_classify(chord, transpose, half_type);
        var bases = ce.bases;
        var elems = ce.mid_elem_objs;

        var y = y_body_base;
        var B = param.base_font_size;

        // if bases are null, elems are null, then it is just a duration information
        if (bases[0] == null && bases[1] == null && elems === undefined) {
            return { width: B };
        }

        var _3rdelem = ce._3rdelem;
        var _5thelem = ce._5thelem;
        var _6791113suselem = ce._6791113suselem;
        var _alteredelem = ce._alteredelem; // #11, #9, b9, #13, b13,

        var upper_width = 0;
        var lower_width = 0;
        var tensions_width = 0;
        var onbass_width = 0;

        var rootCharHeight = graphic.GetCharProfile(B).height;

        var root = bases[0];
        var onbass = bases[1];

        var coeff1 = 0.5;

        if (root) {
            graphic.CanvasText(
                canvas,
                x,
                y + param.row_height/2,
                root[0],
                B,
                "lm",
                B * coeff1,
                !draw
            );
            upper_width = B * coeff1;
            lower_width = B * coeff1;
            if (root.length == 2) {
                if (root[1] == "b") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/flat.svg"],
                                x + upper_width,
                                y + param.row_height/2 - rootCharHeight/2,
                                B * 0.2,
                                rootCharHeight / 2.0
                            );
                    upper_width += B * 0.2;
                } else {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/sharp.svg"],
                                x + upper_width,
                                y + param.row_height/2 - rootCharHeight/2,
                                B * 0.2,
                                rootCharHeight / 2.0
                            );
                    upper_width += B * 0.2;
                }
            }
        } else {
            // No root but only bass
        }

        if (onbass != null) {
            let r = graphic.CanvasText(
                canvas,
                x,
                y + param.row_height/2 + rootCharHeight/2,
                "/" + onbass[0],
                B * 0.45,
                "lt",
                B * 0.5,
                !draw
            );
            onbass_width += r.width;
            if (onbass.length == 2) {
                if (onbass[1] == "b") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/flat.svg"],
                                x + onbass_width,
                                y + param.row_height/2 + rootCharHeight/2,
                                B * 0.2,
                                r.height
                            );
                    onbass_width += B * 0.2;
                } else {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/sharp.svg"],
                                x + onbass_width,
                                y + param.row_height/2 + rootCharHeight/2,
                                B * 0.2,
                                r.height
                            );
                    onbass_width += B * 0.2;
                }
            }
        }

        _3rdelem.forEach(e => {
            if (e.type == "M" && _6791113suselem.length > 0) {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    String.fromCharCode(0x0394),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            } else if (e.type == "m") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    String.fromCharCode(0x2013),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            } else {
                // Unkown type
            }
        });
        _6791113suselem.forEach(e => {
            if (e.type == "dig") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    e.param,
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            } else if (e.type == "sus" || e.type == "add") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    e.type + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.8,
                    !draw
                );
                lower_width += r.width;
            } else if (e.type == "dim") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    String.fromCharCode(0x004f) + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            } else if (e.type == "M") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2,
                    String.fromCharCode(0x0394) + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            }
        });
        _5thelem.forEach(e => {
            if (e.type == "b") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y + param.row_height/2 - rootCharHeight/2,
                    "-5",
                    B * 0.5,
                    "lt",
                    B * 0.5,
                    !draw
                );
                upper_width += r.width;
            } else if (e.type == "#") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y + param.row_height/2 - rootCharHeight/2,
                    "+5",
                    B * 0.5,
                    "lt",
                    B * 0.5,
                    !draw
                );
                upper_width += r.width;
            }
        });

        if (_alteredelem.length > 0) {
            var tensions_pos = Math.max(upper_width, lower_width, onbass_width);
            let r = graphic.CanvasText(
                canvas,
                x + tensions_pos,
                y + param.row_height/2 - rootCharHeight/2,
                "(",
                B * 0.5,
                "lt",
                B * 0.5,
                !draw
            );
            tensions_width += r.width;
            var h = graphic.GetCharProfile(B * 0.5).height;
            _alteredelem.forEach((e, index) => {
                if (e.type == "b") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/flat.svg"],
                                x + tensions_pos + tensions_width,
                                y + param.row_height/2 - rootCharHeight/2,
                                B * 0.2,
                                h
                            );
                    tensions_width += B * 0.2;
                } else if (e.type == "#") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                graphic.G_imgmap["assets/img/sharp.svg"],
                                x + tensions_pos + tensions_width,
                                y + param.row_height/2 - rootCharHeight/2,
                                B * 0.2,
                                h
                            );
                    tensions_width += B * 0.2;
                }
                let r = graphic.CanvasText(
                    canvas,
                    x + tensions_pos + tensions_width,
                    y + param.row_height/2 - rootCharHeight/2,
                    e.param,
                    B * 0.5,
                    "lt",
                    B * 0.5,
                    !draw
                );
                tensions_width += r.width;
                if (index != _alteredelem.length - 1) {
                    let r = graphic.CanvasText(
                        canvas,
                        x + tensions_pos + tensions_width,
                        y + param.row_height/2 - rootCharHeight/2,
                        ", ",
                        B * 0.5,
                        "lt",
                        B * 0.5,
                        !draw
                    );
                    tensions_width += r.width;
                }
            });
            r = graphic.CanvasText(
                canvas,
                x + tensions_pos + tensions_width,
                y + param.row_height/2 - rootCharHeight/2,
                ")",
                B * 0.5,
                "lt",
                B * 0.5,
                !draw
            );
            tensions_width += r.width;
        }

        var width =
            Math.max(upper_width, lower_width, onbass_width) + tensions_width;

        // Quantize with 0.25*B unit : Not so beneficial ?
        // width = Math.ceil(width / (B/4.0)) * (B/4.0);

        return { width: width };
    }

    /**
     * Draw boundary
     * @param side : 'begin' or 'end' of boundary for current measure
     * @param ec : Boundary element of current measure( <side> side )
     * @param en : Boundary element of neighbor measure.
     *             <en> must be 'begin' boundary of the next measure when <side> is 'end'
     *             <en> must be 'end' boundary of the previous measure when <side> is 'begin'
     *             <en> can be null if there is no next measure when <side> is 'end'.
     *             <en> can be null if there is no previous measure when <side> is 'begin'.
     * @param hasNewLine : Whether there is "new line" at the place of the target boundary.
     * @param paper : Paper object
     * @param x : Current x position
     * @param darw : Whether to draw or just estimating sizes
     *
     * @return dictionary with following keys and values
     *             x : updated x position.
     */
    draw_boundary_simplified(
        side,
        e0,
        e1,
        hasNewLine,
        canvas,
        x,
        y_body_base,
        row_height,
        param,
        draw
    ) {

        var draw_type = null; // "s, d, lb, le, lb, f"

        var w = 0; // width of boundary
        let actual_boundary = 0; // Actual boundary when having more than 1 pixel width. 

        if (side == "end") {
            var thisIsLastMeasureInLine = e1 === null || hasNewLine;

            // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
            if (!thisIsLastMeasureInLine) return { width: 0, actual_boundary : 0 };
        }

        if (hasNewLine === null || hasNewLine == false) {
            draw_type = this.boundary_type_without_line_break(e0, e1);
        } else {
            draw_type = this.boundary_type_with_line_break(e0, e1, side);
        }

        //console.log([draw_type, side]);
        let xshift = null;

        switch (draw_type) {
            case "s":
            case "d":
                // begin and end
                var nline = draw_type == "s" ? 1 : 2;
                var barintv = 3;
                w = 1 + (nline - 1) * barintv;
                for (var li = 0; li < nline; ++li) {
                    if (draw)
                        graphic.CanvasLine(
                            canvas,
                            x + li * barintv,
                            y_body_base,
                            x + li * barintv,
                            y_body_base + row_height
                        );
                }
                actual_boundary = x + (nline-1) * barintv;
                break;
            case "b":
                // begin only
                w = 8;
                actual_boundary = x;
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x,
                        y_body_base,
                        x,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + 3,
                        y_body_base,
                        x + 3,
                        y_body_base + row_height
                    );
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + 7,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + 7,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                break;
            case "e":
                // begin and end
                w = 8;
                actual_boundary = x + w;
                xshift = side == "end" ? 0 : 0;
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + xshift,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + xshift,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + xshift + 4,
                        y_body_base,
                        x + xshift + 4,
                        y_body_base + row_height
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + xshift + 7,
                        y_body_base,
                        x + xshift + 7,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    let stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw)
                        graphic.CanvasText(
                            canvas,
                            x + xshift + w,
                            y_body_base + row_height,
                            "(" + stimes + " times)",
                            param.base_font_size / 2,
                            "rt"
                        );
                }
                break;
            case "B":
                // begin only
                w = 15;
                actual_boundary = x + w/2;
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + 4,
                        y_body_base,
                        x + 4,
                        y_body_base + row_height
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + 7,
                        y_body_base,
                        x + 7,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + 10,
                        y_body_base,
                        x + 10,
                        y_body_base + row_height
                    );

                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    let stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw)
                        graphic.CanvasText(
                            canvas,
                            x + 8,
                            y_body_base + row_height,
                            "(" + stimes + " times)",
                            param.base_font_size / 2,
                            "rt"
                        );
                }
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + 14,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                if (draw)
                    graphic.CanvasCircle(
                        canvas,
                        x + 14,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                break;
            case "f":
                // begin and end (normally, end)
                w = 5;
                xshift = side == "end" ? 0 : 0;
                actual_boundary = x + w;
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + xshift,
                        y_body_base,
                        x + xshift,
                        y_body_base + row_height
                    );
                if (draw)
                    graphic.CanvasLine(
                        canvas,
                        x + xshift + 3,
                        y_body_base,
                        x + xshift + 3,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                break;
            case "r":
                var width = this.render_simile_mark_plain(
                    draw,
                    canvas,
                    x,
                    y_body_base,
                    row_height,
                    2,
                    true,
                    "l"
                );
                x += width;
                w = width;
                actual_boundary = x + w/2;
                break;
            default:
                throw "Internal error";
        }
        return { width: w, actual_boundary: actual_boundary };
    }


}
