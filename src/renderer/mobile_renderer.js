import "@babel/polyfill";
import { Renderer } from "./renderer";
import * as common from "../common/common";
import * as graphic from "./graphic";
import {getGlobalMacros, getMacros} from "../parser/parser";

var SR_RENDER_PARAM = {
    origin: { x: 0, y: 0 },
    y_title_offset: 1,
    y_author_offset: 20,
    y_first_page_offset: 30,
    y_offset: 10,
    x_offset: 10,
    min_measure_width: 100,
    row_height: 24, // Basic height of the measure when no rs, mu and ml area is drawn
    row_margin: 2, // Margin between next y_base and lower edge of Measure Lower Area
    rs_area_height: 24, // Rhythm Slashes Area // ! Currently this should be same as row_height
    rm_area_height: 15, // Reharsal Mark Area
    mu_area_height: 15, // Measure Upper Area ( Repeat signs area )
    ml_row_height: 10, // Measure Lower Area ( Lyrics etc.. )
    below_mu_area_margin: 0, // Margin between MU and chord
    above_rs_area_margin: 0, // Margin between chord and rythm slash
    above_ml_area_margin: 0, // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
    header_body_margin: 0, // Margin between header and body (x-direction)
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
    base_font_size: 30
};

// Simple renderer offsets

var G_imgmap = {};

function PreloadImages(imageurls) {
    var promises = [];
    for (var i = 0; i < imageurls.length; ++i) {
        var p = new Promise(function(resolve, reject) {
            var url = imageurls[i];
            var img = new Image();
            img.src = url;
            img.onload = function() {
                resolve({ img: img, url: url });
            };
        });
        promises.push(p);
    }
    return Promise.all(promises);
}

export class MobileRenderer extends Renderer {
    constructor(canvas, param) {
        super();

        this.canvas = canvas;

        this.param = SR_RENDER_PARAM; // Default parameters
        // Overwrite
        this.param.ncol = "ncol" in param ? param.ncol : this.param.ncol;
        this.param.nrow = "nrow" in param ? param.nrow : this.param.ncol;
        this.param.paper_width =
            "paper_width" in param ? param.paper_width : this.param.paper_width;
        this.param.paper_height =
            "paper_height" in param
                ? param.paper_height
                : this.param.paper_height;
        this.param.origin =
            "origin" in param ? param.origin : this.param.origin;

        // SetupHiDPICanvas(canvas, canvas.width, canvas.height);

        //canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        this.param.pixel_ratio = this.GetPixelRatio(canvas);
        //this.param.text_y_offset = JudgeTextYPosOffset(canvas, "", "Arial", this.param.base_font_size);

        this.track = null;

        this.context = {
            paper: null,
            region_id: 0
        };
    }

    render(track, async_mode, progress_cb) {
        this.track = track;

        // Simplifed renderer
        // Rewrite parameters based on global_scale parameter

        // Always works as asynchronously
        // Preload images, which is done asynchronously
        var urls = [
            "assets/img/segno.svg",
            "assets/img/coda.svg",
            "assets/img/flat.svg",
            "assets/img/sharp.svg",
            "assets/img/rest1.svg",
            "assets/img/rest2.svg",
            "assets/img/rest4.svg",
            "assets/img/rest8.svg"
        ];
        var param = this.param;
        var canvas = this.canvas;
        return PreloadImages(urls).then(function(result) {
            // make map with url
            for (var ii = 0; ii < result.length; ++ii) {
                G_imgmap[result[ii].url] = result[ii].img;
            }
            // Returns last y position
            return this.render_impl(canvas, track, param);
        });
    }

    render_impl(canvas, track, param) {
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

        // We do not use Raphael in simplifed renderer
        var paper = canvas;

        // Title
        var ri = graphic.CanvasText(
            paper,
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
                paper,
                x_offset + width / 2,
                y_title_offset + ri.height,
                global_macros.sub_title,
                param.sub_title_font_size,
                "ct"
            );

        // Artist
        graphic.CanvasText(
            paper,
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
            //console.group("Macro for " + track.reharsal_groups[i].name);
            //console.log(rg_macros);
            //console.groupEnd();
            if (global_macros.reharsal_mark_position != "Inner")
                y_stacks.push({
                    type: "reharsal",
                    height: param.rm_area_height,
                    cont: track.reharsal_groups[i],
                    macros: rg_macros
                });
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

        // Single page for pagelist
        var pageslist = [y_stacks];

        for (var pageidx = 0; pageidx < pageslist.length; ++pageidx) {
            var yse = pageslist[pageidx];
            for (var pei = 0; pei < yse.length; ++pei) {
                // Loop each y_stacks
                // eslint-disable-next-line no-empty
                if (yse[pei].type == "titles") {
                } else if (
                    yse[pei].type == "reharsal" &&
                    yse[pei].macros.reharsal_mark_position != "Inner"
                ) {
                    let rg = yse[pei].cont;

                    graphic.CanvasTextWithBox(
                        paper,
                        x_offset,
                        y_base,
                        rg.name,
                        param.reharsal_mark_font_size
                    );

                    y_base += param.rm_area_height; // Reharsal mark area height
                } else if (yse[pei].type == "meas") {
                    var row_elements_list = yse[pei].cont;
                    let r = this.render_measure_row_simplified(
                        x_offset,
                        paper,
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
                        music_context
                    );
                    y_base = r.y_base;
                }
            }
            // Page number footer
            let footerstr =
                songname + " - " + (pageidx + 1) + " of " + pageslist.length;
            //alert(footerstr);
            graphic.CanvasText(
                paper,
                origin.x + score_width / 2,
                origin.y + score_height - 60,
                footerstr,
                12,
                "ct"
            );
        } // reharsal group loop

        return { y: y_base };
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
        music_context
    ) {
        var x_global_scale = macros.x_global_scale;
        var transpose = macros.transpose;
        var half_type = macros.half_type;
        var staff = macros.staff;
        var theme = macros.theme;

        /* Reference reserved width for empty measures or chord symbol without base names*/
        var C7_width = 20;

        var rs_area_detected = false; // Rhthm Slash Area : Fix me : Not supported in simplified renderer
        var mu_area_detected = false; // Measure Upper Area ( Above the chord symbol )
        var ml_area_detected = false; // Measure Lower Area ( Blow the chord & rhythm slash area)
        var lyric_rows = 0;

        //var draw_5line = false;
        if (staff == "ON") {
            // rs_area_detected = true; // Fix me : Not supported in simplified renderer
        }
        // interval of 5 lines
        var _5lines_intv = param.rs_area_height / (5 - 1);

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
                    mu_area_detected = true;
                } else if (e instanceof common.MeasureBoundary) {
                    ml_area_detected =
                        ml_area_detected ||
                        (e.times != null && (e.ntimes || e.times != 2));
                } else if (e instanceof common.Chord) {
                    //rs_area_detected |= (e.nglist !== null);
                    var bases = e.getChordStrBase(0, "flat");
                    ml_area_detected = ml_area_detected || bases[1] != null;
                } else if (e instanceof common.Lyric) {
                    ml_area_detected = true;
                    lyric_rows = Math.max(
                        e.lyric.split("/").length,
                        lyric_rows
                    );
                }
            }
        }
        if (staff == "OFF") {
            rs_area_detected = false;
        }

        var y_mu_area_base = y_base; // top of mu area(segno, coda, etc..)
        var y_body_base =
            y_base +
            (mu_area_detected
                ? param.mu_area_height + param.below_mu_area_margin
                : 0); // top of chord area

        var y_rs_area_base =
            y_body_base +
            +param.row_height +
            (rs_area_detected
                ? param.above_rs_area_margin * macros.r_above_rs_area_margin
                : 0); // top of rs area, note that this is same as y_body_base if rs are a is not drawn. Currenly rs height shoudl be equal to row height

        var y_ml_area_base =
            y_rs_area_base +
            (rs_area_detected ? param.rs_area_height : 0) +
            (ml_area_detected ? param.above_ml_area_margin : 0);

        var y_next_base =
            y_ml_area_base +
            (ml_area_detected
                ? Math.max(1, lyric_rows) * param.ml_row_height
                : 0) +
            param.row_margin * macros.r_row_margin;

        var y_body_or_rs_base = rs_area_detected ? y_rs_area_base : y_body_base;

        var measure_height = y_next_base - y_base;
        var measure_heights = [];

        var first_meas_start_x = x;
        var last_meas_end_x = x;

        var body_area_svg_groups = [];
        var rs_area_svg_groups = [];

        var total_width = param.paper_width - 2 * param.x_offset;

        // Determine the width of each measure
        var fixed_width = 0;
        var flexible_width = 0;
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];
            var elements = this.classifyElements(m);
            elements.header.forEach(function(e) {
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
            if (elements.body.length == 0) {
                flexible_width += 1 * param.base_font_size;
            } else {
                elements.body.forEach(function(e) {
                    if (e instanceof common.Chord) {
                        var cr = this.render_chord_simplified(
                            false,
                            e,
                            transpose,
                            half_type,
                            paper,
                            x,
                            y_body_base,
                            param,
                            C7_width
                        );
                        e.renderprop = { w: cr.width };
                        flexible_width += e.renderprop.w;
                    } else if (e instanceof common.Rest) {
                        e.renderprop = { w: 1 * param.base_font_size };
                        flexible_width += e.renderprop.w;
                    } else if (e instanceof common.Simile) {
                        e.renderprop = { w: 2 * param.base_font_size };
                        flexible_width += e.renderprop.w;
                    }
                });
            }
            // Draw footer
            elements.footer.forEach(function(e) {
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

        var free_width = total_width - fixed_width;
        var scaling = free_width / flexible_width;

        // For each measure in this row
        for (var ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];

            let elements = this.classifyElements(m);

            var mh_offset = 0;

            var meas_base_x = x;

            for (var ei = 0; ei < elements.header.length; ++ei) {
                let e = elements.header[ei];
                if (e instanceof common.Coda) {
                    let r = this.draw_coda_plain(
                        paper,
                        meas_base_x + mh_offset,
                        y_mu_area_base,
                        "lt",
                        e,
                        param.base_font_size
                    );
                    mh_offset += r.width;
                } else if (e instanceof common.Segno) {
                    let r = this.draw_segno_plain(
                        paper,
                        meas_base_x + mh_offset,
                        y_mu_area_base,
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
                            y_body_base,
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

            var meas_start_x = x;

            // Draw header
            var header_rs_area_width = 0;
            var header_body_area_width = 0;
            // Clef, Key, Begin Boundary, Time(1st one) are included in this area
            elements.header.forEach(function(e) {
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
                        param,
                        true
                    );
                    m.renderprop.y = y_body_or_rs_base;
                    m.renderprop.sx = x;
                    m.renderprop.paper = paper;
                    x += e.renderprop.w;

                    // Header 1. Reharsal mark in row
                    if (
                        inner_reharsal_mark &&
                        rs_area_detected &&
                        first_block_first_row &&
                        ml == 0
                    ) {
                        var g = graphic.CanvasTextWithBox(
                            paper,
                            meas_base_x,
                            y_body_base,
                            reharsal_group.name,
                            param.reharsal_mark_font_size
                        );
                        header_body_area_width += g.getBBox().width;
                    }
                } else if (e instanceof common.Time) {
                    graphic.CanvasText(
                        paper,
                        x + e.renderprop.w / 2,
                        y_body_or_rs_base,
                        e.numer,
                        param.base_font_size / 2,
                        "ct",
                        e.renderprop.w
                    );
                    graphic.CanvasText(
                        paper,
                        x + e.renderprop.w / 2,
                        y_body_or_rs_base + param.row_height / 2,
                        e.denom,
                        param.base_font_size / 2,
                        "ct",
                        e.renderprop.w
                    );
                    var ly = y_body_base + param.row_height / 2;
                    if (draw && !rs_area_detected)
                        graphic.CanvasLine(paper, x, ly, x + e.renderprop.w, ly);
                    x += e.renderprop.w;
                }
            });
            if (elements.body.length == 0) {
                x += 1 * param.base_font_size * scaling;
            } else {
                elements.body.forEach(function(e) {
                    if (e instanceof common.Chord) {
                        var cr = this.render_chord_simplified(
                            true,
                            e,
                            transpose,
                            half_type,
                            paper,
                            x,
                            y_body_base,
                            param,
                            C7_width
                        );
                        x += e.renderprop.w * scaling;

                        if (e.exceptinal_comment !== null) {
                            graphic.CanvasText(
                                paper,
                                x,
                                y_body_base,
                                e.exceptinal_comment.comment,
                                param.base_font_size / 2,
                                "lb"
                            );
                        }
                        if (e.lyric !== null) {
                            var llist = e.lyric.lyric.split("/");
                            for (var li = 0; li < llist.length; ++li) {
                                graphic.CanvasText(
                                    paper,
                                    x,
                                    y_ml_area_base + li * param.ml_row_height,
                                    llist[li],
                                    param.base_font_size / 3,
                                    "lt"
                                );
                            }
                        }
                    } else if (e instanceof common.Rest) {
                        this.render_rest_plain(
                            e,
                            paper,
                            true,
                            x,
                            y_body_or_rs_base,
                            C7_width,
                            _5lines_intv,
                            param
                        );
                        x += e.renderprop.w * scaling;
                    } else if (e instanceof common.Simile) {
                        this.render_simile_mark_plain(
                            true,
                            paper,
                            x,
                            y_body_or_rs_base,
                            param.rs_area_height,
                            e.numslash,
                            false,
                            "l"
                        );
                        x += e.renderprop.w * scaling;
                    } else if (e instanceof common.Space) {
                        x += e.renderprop.w * scaling;
                    }
                });
            }

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
                    if (rs_area_detected) x += 15 * 4;
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
                    if (rs_area_detected) x += 15 * 4;
                    //text = raphaelText(paper, x, y_body_or_rs_base - 8 /* + row_height + 8*/, e.toString(), 15, lr+"c").attr(param.repeat_mark_font);
                    //if(rs_area_detected) x += text.getBBox().width;
                    //rs_area_svg_groups.push(text);
                } else if (e instanceof common.ToCoda) {
                    if (rs_area_detected) {
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
                        //paper.getContext("2d").drawImage(G_imgmap["assets/img/coda.svg"], x - 15, y_body_or_rs_base - 15, 15, 15);
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
                    if (rs_area_detected) x += 15 * 4;
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
                    var ly = y_body_base - 2 - oy;
                    var sx = meas_start_x;
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
                    let sx =
                        meas_start_x +
                        m.header_width -
                        param.header_body_margin; // More beautiful for long rest if header body margin is omitted
                    let fx = meas_end_x - m.footer_width;
                    var rh = param.row_height;
                    var r_lrmargin = 0.05;
                    var min_lrmargin = 5;
                    var max_lrmargin = 10;
                    var yshift = param.row_height / 6;
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
                            y_body_or_rs_base + param.row_height / 2 + yshift,
                            rx,
                            y_body_or_rs_base + param.row_height / 2 + yshift,
                            { width: "7" }
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
        } // measure loop

        // return {y_base:y_base + param.row_height + param.row_margin};
        return { y_base: y_next_base };
    }


    draw_segno_plain(paper, x, y, segno, B) {
        var lx = x;
        paper
            .getContext("2d")
            .drawImage(G_imgmap["assets/img/segno.svg"], lx, y, B / 3, B / 2);
        lx += B / 3;
        if (segno.number !== null) {
            let r = graphic.CanvasText(paper, lx, y + 15, segno.number, B / 2, "lb");
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
                    G_imgmap["assets/img/coda.svg"],
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
                    G_imgmap["assets/img/coda.svg"],
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
        _5i,
        param
    ) {
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
        var rd = e.nglist[0].lengthIndicator.base;
        var numdot = e.nglist[0].lengthIndicator.numdot;
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

        var img = G_imgmap["assets/img/rest" + (rd <= 4 ? rd : 8) + ".svg"];
        var s = img.height / heights[rd];
        if (rd <= 4) {
            ctx.drawImage(
                img,
                x,
                y_body_or_rs_base + param.row_height / 2 + oy,
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
                    y_body_or_rs_base + param.row_height / 2 + k * rdy + oy,
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
                y_body_or_rs_base + param.row_height / 2 - _5i / 2,
                1
            );
        }

        return { width: 10 };
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
            graphic.CanvasCircle(paper, x + cm, y_body_base + _5lines_intv * 1.5, cr);
        for (let r = 0; r < numslash; ++r) {
            var y = y_body_base;
            x += (h + i) * r;
            if (draw) {
                var path = graphic.svgPath(
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
        return width;
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

        var rootCharHeight = this.GetCharProfile(B).height;

        var root = bases[0];
        var onbass = bases[1];

        var coeff1 = 0.5;

        if (root) {
            graphic.CanvasText(canvas, x, y, root[0], B, "lt", B * coeff1, !draw);
            upper_width = B * coeff1;
            lower_width = B * coeff1;
            if (root.length == 2) {
                if (root[1] == "b") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                G_imgmap["assets/img/flat.svg"],
                                x + upper_width,
                                y,
                                B * 0.2,
                                rootCharHeight / 2.0
                            );
                    upper_width += B * 0.2;
                } else {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                G_imgmap["assets/img/sharp.svg"],
                                x + upper_width,
                                y,
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
                y + rootCharHeight,
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
                                G_imgmap["assets/img/flat.svg"],
                                x + onbass_width,
                                y + rootCharHeight,
                                B * 0.2,
                                r.height
                            );
                    onbass_width += B * 0.2;
                } else {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                G_imgmap["assets/img/sharp.svg"],
                                x + onbass_width,
                                y + rootCharHeight,
                                B * 0.2,
                                r.height
                            );
                    onbass_width += B * 0.2;
                }
            }
        }

        _3rdelem.forEach(function(e) {
            if (e.type == "M" && _6791113suselem.length > 0) {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + rootCharHeight,
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
                    y + rootCharHeight,
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
        _6791113suselem.forEach(function(e) {
            if (e.type == "dig") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + rootCharHeight,
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
                    y + rootCharHeight,
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
                    y + rootCharHeight,
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
                    y + rootCharHeight,
                    String.fromCharCode(0x0394) + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
            }
        });
        _5thelem.forEach(function(e) {
            if (e.type == "b") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y,
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
                    y,
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
                y,
                "(",
                B * 0.5,
                "lt",
                B * 0.5,
                !draw
            );
            tensions_width += r.width;
            var h = graphic.GetCharProfile(B * 0.5).height;
            _alteredelem.forEach(function(e, index) {
                if (e.type == "b") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                G_imgmap["assets/img/flat.svg"],
                                x + tensions_pos + tensions_width,
                                y,
                                B * 0.2,
                                h
                            );
                    tensions_width += B * 0.2;
                } else if (e.type == "#") {
                    if (draw)
                        canvas
                            .getContext("2d")
                            .drawImage(
                                G_imgmap["assets/img/sharp.svg"],
                                x + tensions_pos + tensions_width,
                                y,
                                B * 0.2,
                                h
                            );
                    tensions_width += B * 0.2;
                }
                let r = graphic.CanvasText(
                    canvas,
                    x + tensions_pos + tensions_width,
                    y,
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
                        y,
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
                y,
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
        param,
        draw
    ) {
        var row_height = param.row_height;

        var draw_type = null; // "s, d, lb, le, lb, f"

        var w = 0; // width of boundary

        var bx = x; // Actual boundary of measure. Depends on final drawn boundary type.

        if (side == "end") {
            var thisIsLastMeasureInLine = e1 === null || hasNewLine;

            // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
            if (!thisIsLastMeasureInLine) return { width: 0 };
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
                break;
            case "b":
                // begin only
                w = 8;
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
                bx = x;
                break;
            case "B":
                // begin only
                w = 15;
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
                break;
            default:
                throw "Internal error";
        }
        return { width: w };
    }


}
