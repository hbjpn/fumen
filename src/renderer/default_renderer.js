import "@babel/polyfill";
import { Renderer } from "./renderer";

var CHORD_RENDER_THEME = {
    Realbook: {
        _base_font_size: 18,
        _base_font_family: "realbook_music_symbol",
        _base_font_profile: {},
        _on_bass_font_size: 18,
        _on_bass_global_dy: 0,
        _on_bass_font_profile: {},
        _3rd_global_dy: 2,
        _3rd_font_profile: {
            M: function(p) {
                return [[10, 3, "M"]];
            },
            m: function(p) {
                return [[10, 3, "m"]];
            }
        },
        _6791113_global_dy: 2,
        _6791113_font_profile: {
            dim: function(p) {
                return [[11, 2, "d"]];
            },
            sus: function(p) {
                return [
                    [8, 3, "s"],
                    [13, 4, p ? p : ""]
                ];
            },
            M: function(p) {
                return [
                    [10, 3, "M"],
                    [13, 4, p ? p : ""]
                ];
            },
            m: function(p) {
                return [[10, 3, "m"]];
            },
            add: function(p) {
                return [
                    [10, 3, "a"],
                    [13, 4, p ? p : ""]
                ];
            },
            dig: function(p) {
                if (!p) p = "";
                else if (p == "11") p = "\x25";
                else if (p == "13") p = "\x26";
                return [[13, 4, p]];
            }
        },
        _5th_global_dy: -8,
        _5th_font_profile: {
            "#": function(p) {
                return [
                    [13, 0, "+"],
                    [13, 0, p]
                ];
            },
            b: function(p) {
                return [
                    [13, 0, "-"],
                    [13, 0, p]
                ];
            },
            dig: function(p) {
                return [[13, 0, p]];
            }
        },
        _altered_global_dy: -8,
        _multi_altered_margin: 0,
        _altered_font_profile: {
            "#": function(p) {
                return [
                    [13, 0, "#"],
                    [13, 0, p]
                ];
            },
            b: function(p) {
                return [
                    [13, 0, "b"],
                    [13, 0, p]
                ];
            },
            alt: function(p) {
                return [[13, 0, "alt"]];
            }
        }
    },
    Arial: {
        _base_font_size: 20,
        _base_font_family: "Arial",
        _base_font_profile: {
            "#": function(p) {
                return [[14, 0, "#", "smart_music_symbol"]];
            },
            b: function(p) {
                return [[14, 0, "b", "smart_music_symbol"]];
            }
        },
        _on_bass_font_size: 15,
        _on_bass_global_dy: 1,
        _on_bass_font_profile: {
            "#": function(p) {
                return [[13, 0, "#", "smart_music_symbol"]];
            },
            b: function(p) {
                return [[13, 0, "b", "smart_music_symbol"]];
            }
        },
        _3rd_global_dy: 1,
        _3rd_font_profile: {
            M: function(p) {
                return [[16, 0, "M"]];
            },
            m: function(p) {
                return [[16, 0, "m"]];
            }
        },
        _6791113_global_dy: 1,
        _6791113_font_profile: {
            dim: function(p) {
                return [[16, 0, "dim"]];
            },
            sus: function(p) {
                return [
                    [16, 0, "sus"],
                    [15, 1, p ? p : ""]
                ];
            },
            M: function(p) {
                return [
                    [16, 0, "M"],
                    [15, 1, p ? p : ""]
                ];
            },
            m: function(p) {
                return [[16, 0, "m"]];
            },
            add: function(p) {
                return [
                    [16, 0, "add"],
                    [15, 1, p ? p : ""]
                ];
            },
            dig: function(p) {
                if (!p) p = "";
                //else if(p=="11") p = "\x25";
                //else if(p=="13") p = "\x26";
                return [[15, 1, p]];
            }
        },
        _5th_global_dy: -8,
        _5th_font_profile: {
            "#": function(p) {
                return [
                    [13, 0, "+"],
                    [13, 0, p]
                ];
            },
            b: function(p) {
                return [
                    [13, 0, "-"],
                    [13, 0, p]
                ];
            },
            dig: function(p) {
                return [[13, 0, p]];
            }
        },
        _altered_global_dy: -8,
        _multi_altered_margin: -4,
        _altered_font_profile: {
            "#": function(p) {
                return [
                    [13, 0, "#", "smart_music_symbol"],
                    [13, 0, p]
                ];
            },
            b: function(p) {
                return [
                    [13, 0, "b", "smart_music_symbol"],
                    [13, 0, p]
                ];
            },
            alt: function(p) {
                return [[13, 0, "alt"]];
            }
        }
    }
};

var RENDER_PARAM = {
    y_title_offset: 50,
    y_author_offset: 90,
    y_first_page_offset: 120,
    y_offset: 70,
    x_offset: 70,
    min_measure_width: 100,
    row_height: 24, // Basic height of the measure when no rs, mu and ml area is drawn
    row_margin: 10, // Margin between next y_base and lower edge of Measure Lower Area
    rs_area_height: 24, // Rhythm Slashes Area // ! Currently this should be same as row_height
    rm_area_height: 30, // Reharsal Mark Area
    mu_area_height: 20, // Measure Upper Area ( Repeat signs area )
    ml_row_height: 10, // Measure Lower Area ( Lyrics etc.. )
    below_mu_area_margin: 0, // Margin between MU and chord
    above_rs_area_margin: 5, // Margin between chord and rythm slash
    above_ml_area_margin: 8, // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
    header_body_margin: 10, // Margin between header and body (x-direction)
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
    title_font_size: 24,
    sub_title_font_size: 14,
    reharsal_mark_font_size: 20
};

var ChordRenderBuffer = {};

export class DefaultRenderer extends Renderer {
    constructor(canvas, param) {
        super();

        this.canvas = canvas;

        this.param = RENDER_PARAM; // Default parameters
        // Overwrite
        this.param.ncol = "ncol" in param ? param.ncol : this.param.ncol;
        this.param.nrow = "nrow" in param ? param.nrow : this.param.ncol;
        this.param.paper_width =
            "paper_width" in param ? param.paper_width : this.param.paper_width;
        this.param.paper_height =
            "paper_height" in param
                ? param.paper_height
                : this.param.paper_height;

        this.track = null;

        this.context = {
            paper: null,
            region_id: 0
        };
    }

    render(track, async_mode, progress_cb) {
        this.track = track;

        if (this.rtype == "default") {
            if (async_mode) {
                Task.enqueueFunctionCall(
                    render_impl,
                    [
                        this.canvas,
                        track,
                        true,
                        this.param,
                        async_mode,
                        progress_cb,
                        this.context
                    ],
                    "render"
                );
                Task.enqueueFunctionCall(
                    identify_scaling,
                    [track, this.param],
                    "render"
                );
                var task = Task.enqueueFunctionCall(
                    render_impl,
                    [
                        this.canvas,
                        track,
                        false,
                        this.param,
                        async_mode,
                        progress_cb,
                        this.context
                    ],
                    "render"
                );
                return task;
            } else {
                render_impl(
                    this.canvas,
                    track,
                    true,
                    this.param,
                    async_mode,
                    progress_cb,
                    this.context
                );
                // Esiate scaling factor
                identify_scaling(track, this.param);
                render_impl(
                    this.canvas,
                    track,
                    false,
                    this.param,
                    async_mode,
                    progress_cb,
                    this.context
                );
            }
        } else if (this.rtype == "simplified") {
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
                return render_impl_simplified(canvas, track, param);
            });
        }
    }

    findElement(measure, cond) {
        var m = measure;
        for (var ei = 0; ei < m.elements.length; ++ei) {
            var e = m.elements[ei];
            if (cond(e)) {
                return e;
            }
        }
        return null;
    }

    maxtor(array, indexer, functor) {
        var cnt = 0;
        var i = null;
        var maxv = null;
        while ((i = indexer(cnt++)) !== null && i < array.length) {
            var r = functor !== undefined ? functor(array[i]) : array[i];
            maxv = maxv === null ? r : Math.max(r, maxv);
        }
        return maxv;
    }

    // This function is called right after screening is done.
    identify_scaling(track, param) {
        console.log("Identify scaling called");
        var width = param.paper_width / param.ncol - param.x_offset * 2;

        var debug_see_raw_render = false;

        for (var i = 0; i < track.reharsal_groups.length; ++i) {
            var rg = track.reharsal_groups[i];

            for (var bi = 0; bi < rg.blocks.length; ++bi) {
                var block_measures = rg.blocks[bi];

                var currentSumWidth = 0;

                var rows = new Array();
                var row_measures = new Array();

                var vertical_align = true;
                var force_even_measures_per_line = true;
                if (vertical_align) {
                    // Estimate optimized TR line-break point
                    // Decide where to insert line-break
                    var maxC = 0;
                    for (var ml = 0; ml < block_measures.length; ++ml) {
                        maxC = ml + 1;
                        var m = block_measures[ml];
                        currentSumWidth +=
                            m.header_width + m.body_width + m.footer_width;
                        //console.log(m.header_width + "/" + m.body_width + "/" + m.footer_width + ":" + currentSumWidth + " vs " + width);
                        if (currentSumWidth > width) {
                            maxC--;
                            break;
                        }
                    }

                    //console.log("maxC = " + maxC);
                    var N = block_measures.length;
                    var C = maxC;
                    var meas_max_widths = new Array();
                    var Q_w_for_C = 0;
                    for (; C > 0; --C) {
                        for (var c = 0; c < C; ++c) {
                            var max_w_for_c = maxtor(
                                block_measures,
                                function(r) {
                                    return r * C + c;
                                },
                                function(m) {
                                    return (
                                        m.header_width +
                                        m.body_width +
                                        m.footer_width
                                    );
                                }
                            );
                            Q_w_for_C += max_w_for_c;
                            meas_max_widths.push(max_w_for_c);
                        }
                        // Semi-optimized selection : argmax{C} Q_w_for_C is optimzed but, here we choose maximum C where Q_w_for_C <= P_w
                        if (Q_w_for_C <= width) {
                            // Even measures should be used, skip odd measures case except for C=1 or 1 line case
                            if (force_even_measures_per_line) {
                                if (C % 2 == 0 || C == 1 || C == N) break;
                            } else break;
                        }
                        Q_w_for_C = 0;
                        meas_max_widths = new Array();
                    }
                    // Now, C is number of columns per row
                    // Q_w_for_C is width of the row when number of column is C, that is, sum of the maximum width measure of each columns.
                    // meas_max_widths is width of the measure with maximum width in each column. Sum of meas_max_widths equals to Q_w_for_C.

                    // Additional scaling to variable of width of columns
                    var limitvariation = true;

                    if (debug_see_raw_render) limitvariation = false;

                    if (limitvariation) {
                        var sdratio = 0.75; // ratio of standard deviation. sigma_target/sigma. 0 means all the column bcomes the same width(average width).
                        var avg = 0.0;
                        for (var c = 0; c < C; ++c) avg += meas_max_widths[c];
                        avg /= C;
                        Q_w_for_C = 0;
                        for (var c = 0; c < C; ++c) {
                            meas_max_widths[c] =
                                meas_max_widths[c] -
                                (meas_max_widths[c] - avg) * (1 - sdratio);
                            Q_w_for_C += meas_max_widths[c];
                        }
                    }

                    // Calculate new body width and scaling
                    var reharsal_wide_scaling = width / Q_w_for_C;
                    for (var ml = 0; ml < block_measures.length; ++ml) {
                        var m = block_measures[ml];
                        var row = Math.floor(ml / C);
                        var col = ml - row * C;
                        var new_body_width =
                            meas_max_widths[col] * reharsal_wide_scaling -
                            (m.header_width + m.footer_width);
                        m.new_line = col == 0 && row > 0;
                        m.body_scaling = new_body_width / m.body_width;

                        // Limit scaling to 1.00 for the case of single row to avoid the too much extension of the measure
                        // Physiological effect that 4 >= columns should occupy whole width.
                        if (block_measures.length == C && C <= 3) {
                            m.body_scaling = Math.min(1.5, m.body_scaling);
                        }

                        // Debug code to see the rendering without scaling
                        if (debug_see_raw_render) m.body_scaling = 1.0;
                    }
                } else {
                    // Decide where to insert line-break
                    for (var ml = 0; ml < block_measures.length; ++ml) {
                        var m = block_measures[ml];

                        row_measures.push(m);
                        currentSumWidth +=
                            m.header_width + m.body_width + m.footer_width;

                        if (currentSumWidth > width) {
                            rows.push(row_measures);
                            row_measures = new Array();
                            currentSumWidth = 0;
                        }
                    }
                    if (row_measures.length > 0) rows.push(row_measures);

                    // Decide scaling factor for each measure.
                    // Align measure boundary as much as possible.
                    for (var ri = 0; ri < rows.length; ++ri) {
                        var sumWidth = 0;
                        var sumFixedWidth = 0;

                        for (var ml = 0; ml < rows[ri].length; ++ml) {
                            var m = rows[ri][ml];
                            if (ri > 0 && ml == 0) m.new_line = true;
                            sumWidth +=
                                m.header_width + m.body_width + m.footer_width;
                            sumFixedWidth += m.header_width + m.footer_width;
                        }

                        var newSumBodyWidth = width - sumFixedWidth;
                        if (newSumBodyWidth <= 0)
                            throw "Error on scaling factor decision";

                        var scaling =
                            newSumBodyWidth / (sumWidth - sumFixedWidth);
                        for (var ml = 0; ml < rows[ri].length; ++ml) {
                            var m = rows[ri][ml];
                            m.body_scaling = Math.min(
                                param.max_scaling,
                                scaling
                            );
                        }
                    }
                }
            }
        }
    }

    clear() {
        for (var i = 0; i < pages.length; ++i) {
            pages[i].clear();
        }
        $(this.canvas)
            .children()
            .remove();
        pages = new Array();
    }

    makeNewPaper(canvas, param, context) {
        context.region_id++;
        if (
            context.paper == null ||
            context.region_id >= param.ncol * param.nrow
        ) {
            var page_id = pages.length;
            $(canvas).append("<div id='page" + page_id + "'></div>"); // paper_div is jQuery object
            var paper_div = $(canvas).children("#page" + page_id)[0];
            paper = Raphael(paper_div, param.paper_width, param.paper_height);
            pages.push(paper);
            paper.canvas.style.backgroundColor = "#FFFFFF";
            context.paper = paper;
            context.region_id = 0;
        }

        // origins
        var row = Math.floor(context.region_id / param.ncol);
        var col = context.region_id - param.ncol * row;
        var origin = {
            x: (param.paper_width / param.ncol) * col,
            y: (param.paper_height / param.nrow) * row
        };

        // Logo:)
        raphaelText(
            paper,
            origin.x + param.paper_width / param.ncol / 2,
            origin.y + param.paper_height / param.nrow - 40,
            "Generated by fumen ver 0.1",
            12,
            "ct"
        );

        // Clear buffers
        ChordRenderBuffer = {};

        return { paper: context.paper, origin: origin };
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
    draw_boundary(
        side,
        e0,
        e1,
        hasNewLine,
        paper,
        x,
        y_body_base,
        param,
        draw
    ) {
        var row_height = param.row_height;

        var group = paper.set();

        var draw_type = null; // "s, d, lb, le, lb, f"

        var bx = x; // Actual boundary of measure. Depends on final drawn boundary type.

        if (side == "end") {
            var thisIsLastMeasureInLine = e1 === null || hasNewLine;

            // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
            if (!thisIsLastMeasureInLine) return { group: null, x: x, bx: bx };
        }

        if (hasNewLine === null || hasNewLine == false) {
            draw_type = boundary_type_without_line_break(e0, e1);
        } else {
            draw_type = boundary_type_with_line_break(e0, e1, side);
        }
        switch (draw_type) {
            case "s":
            case "d":
                var nline = draw_type == "s" ? 1 : 2;
                for (var li = 0; li < nline; ++li) {
                    if (draw)
                        group.push(
                            paper
                                .path(
                                    svgLine(
                                        x,
                                        y_body_base,
                                        x,
                                        y_body_base + row_height
                                    )
                                )
                                .attr({ "stroke-width": "1" })
                        );
                    if (nline >= 2 && li < nline - 1) x += 3;
                }
                bx = x;
                break;
            case "b":
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "2" })
                    );
                x += 3;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "1" })
                    );
                x += 4;
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 1.5, 1)
                            .attr({ fill: "black" })
                    );
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 2.5, 1)
                            .attr({ fill: "black" })
                    );
                break;
            case "e":
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 1.5, 1)
                            .attr({ fill: "black" })
                    );
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 2.5, 1)
                            .attr({ fill: "black" })
                    );
                x += 4;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "1" })
                    );
                x += 3;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "2" })
                    );
                //x += 20;
                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw)
                        group.push(
                            raphaelText(
                                paper,
                                x,
                                y_body_base + row_height + 8,
                                "(" + stimes + " times)",
                                13,
                                "rc"
                            )
                        );
                }
                bx = x;
                break;
            case "B":
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 1.5, 1)
                            .attr({ fill: "black" })
                    );
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 2.5, 1)
                            .attr({ fill: "black" })
                    );
                x += 4;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "1" })
                    );
                x += 3;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "2" })
                    );
                bx = x;
                x += 3;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "1" })
                    );

                //x += 20;
                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw)
                        group.push(
                            raphaelText(
                                paper,
                                x,
                                y_body_base + row_height + 8,
                                "(" + stimes + " times)",
                                13,
                                "rc"
                            )
                        );
                }
                x += 4;
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 1.5, 1)
                            .attr({ fill: "black" })
                    );
                if (draw)
                    group.push(
                        paper
                            .circle(x, y_body_base + (row_height / 4) * 2.5, 1)
                            .attr({ fill: "black" })
                    );
                break;
            case "f":
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "1" })
                    );
                x += 3;
                if (draw)
                    group.push(
                        paper
                            .path(
                                svgLine(
                                    x,
                                    y_body_base,
                                    x,
                                    y_body_base + row_height
                                )
                            )
                            .attr({ "stroke-width": "2" })
                    );
                break;
            case "r":
                var width = render_simile_mark(
                    draw,
                    paper,
                    group,
                    x,
                    y_body_base,
                    row_height,
                    2,
                    true,
                    "l"
                );
                x += width;
                break;
            default:
                throw "Internal error";
        }
        return { group: group, x: x, bx: bx };
    }

    render_chord_as_string(
        chord,
        transpose,
        half_type,
        paper,
        x,
        y_body_base,
        param,
        draw
    ) {
        var row_height = param.row_height;

        var group = paper.set();

        var text = raphaelText(
            paper,
            x,
            y_body_base + row_height / 2,
            chord.chord_str,
            16,
            "lc",
            null
        );

        var text_width = text.getBBox().width;
        //x += text.getBBox().width * x_global_scale * body_scaling;
        //x += (chord_space*body_scaling);
        if (!draw) text.remove();

        group.push(text);

        return { group: group, width: text_width };
    }


    render_chord(
        chord,
        transpose,
        half_type,
        paper,
        x,
        y_body_base,
        param,
        draw,
        C7_width,
        theme
    ) {
        var row_height = param.row_height;

        //chord.renderprop.x = x;

        if (!chord.is_valid_chord) {
            return render_chord_as_string(
                chord,
                transpose,
                half_type,
                paper,
                x,
                y_body_base,
                param,
                draw
            );
        }

        var ref_p = [x, y_body_base];

        if (draw && chord.chord_name_str in ChordRenderBuffer) {
            var cl = ChordRenderBuffer[chord.chord_name_str];
            var group = cl[0].clone();
            group.attr({ opacity: 1.0 }); // Buffered symbol is transparent.
            var ref_p_0 = cl[1];
            group.transform(
                "T " + (ref_p[0] - ref_p_0[0]) + " " + (ref_p[1] - ref_p_0[1])
            );
            //x += group.getBBox().width * x_global_scale * body_scaling;
            //x += (chord_space*body_scaling);
            //if(!isFinite(x)){
            //	console.error("Illegal calculation of x detected");
            //}
            return { group: group, width: group.getBBox().width };
        }

        var elems = chord.mid_elem_objs;

        var ce = chord_elem_classify(chord, transpose, half_type);
        var bases = ce.bases;

        var group = paper.set();

        // if bases are null, elems are null, then it is just a duration information
        if (bases[0] == null && bases[1] == null && elems === undefined) {
            //x += (C7_width * x_global_scale * body_scaling + chord_space * body_scaling);
            return { group: group, width: C7_width };
        }

        var _3rdelem = ce._3rdelem;
        var _5thelem = ce._5thelem;
        var _6791113suselem = ce._6791113suselem;
        var _alteredelem = ce._alteredelem; // #11, #9, b9, #13, b13,

        // Exception for 69 chord
        if (ce._6_and_9_exists) {
            // 6th will be moved to 5th left upper position
            for (var i = 0; i < _6791113suselem.length; ++i) {
                if (
                    _6791113suselem[i].type == "dig" &&
                    _6791113suselem[i].param == "6"
                ) {
                    _5thelem.push(_6791113suselem[i]);
                    _6791113suselem.splice(i, 1);
                    break;
                }
            }
        }

        var text = null;
        var xl = x;

        var fp = CHORD_RENDER_THEME[theme];
        var fontfamily = fp["_base_font_family"];

        if (bases[0]) {
            var base_width = 0;
            for (var bi = 0; bi < bases[0].length; ++bi) {
                //text = raphaelText(paper, xl, y_body_base + row_height/2, bases[0][0], fp["_base_font_size"], "lc", fontfamily);
                //var base_width = text.getBBox().width;
                //group.push(text);
                //if(bases[0].length==2){
                var fp2 =
                    bases[0][bi] in fp["_base_font_profile"]
                        ? fp["_base_font_profile"][bases[0][bi]]()
                        : null;
                var _b2_font_family = fp2 && fp2[0][3] ? fp2[0][3] : fontfamily;
                var _b2_font_size = fp2 ? fp2[0][0] : fp["_base_font_size"];
                var _b2_char = fp2 ? fp2[0][2] : bases[0][bi];
                var _b2_yoffset = fp2 ? fp2[0][1] : 0;
                text = raphaelText(
                    paper,
                    xl + base_width,
                    y_body_base + row_height / 2 + _b2_yoffset,
                    _b2_char,
                    _b2_font_size,
                    "lc",
                    _b2_font_family
                );
                base_width += text.getBBox().width;
                group.push(text);
            }
            xl += base_width;
        }

        var wb3 = 0;
        if (_3rdelem.length > 0) {
            var rp = fp["_3rd_font_profile"][_3rdelem[0].type](
                _3rdelem[0].param
            );
            var tx = 0;
            for (var i = 0; i < rp.length; ++i) {
                text = raphaelText(
                    paper,
                    xl + tx,
                    y_body_base +
                        row_height / 2 +
                        rp[i][1] +
                        fp["_3rd_global_dy"],
                    rp[i][2],
                    rp[i][0],
                    "lc",
                    fontfamily
                );
                group.push(text);
                tx += text.getBBox().width;
            }
            wb3 = tx;
        }
        var wbupper = 0;

        if (_5thelem.length > 0) {
            var rp = fp["_5th_font_profile"][_5thelem[0].type](
                _5thelem[0].param
            );
            var tx = 0;
            for (var i = 0; i < rp.length; ++i) {
                text = raphaelText(
                    paper,
                    xl + tx,
                    y_body_base +
                        row_height / 2 +
                        rp[i][1] +
                        fp["_5th_global_dy"],
                    rp[i][2],
                    rp[i][0],
                    "lc",
                    fontfamily
                );
                group.push(text);
                tx += text.getBBox().width;
            }
            wbupper = tx;
        }

        var wblower = wb3;
        if (_6791113suselem.length > 0) {
            var tx = 0;
            for (var n = 0; n < _6791113suselem.length; ++n) {
                var rp = fp["_6791113_font_profile"][_6791113suselem[n].type](
                    _6791113suselem[n].param
                );
                for (var i = 0; i < rp.length; ++i) {
                    if (rp[i][2] == "") continue;
                    text = raphaelText(
                        paper,
                        xl + wb3 + tx,
                        y_body_base +
                            row_height / 2 +
                            rp[i][1] +
                            fp["_6791113_global_dy"],
                        rp[i][2],
                        rp[i][0],
                        "lc",
                        fontfamily
                    );
                    tx += text.getBBox().width;
                    group.push(text);
                }
            }
            wblower += tx;
        }

        xl += Math.max(wbupper, wblower);
        var aw = 0;
        var ah = 0; // Offset of y
        var a_min_y = 10000;
        var a_max_y = -10000;
        var brace_margin = 5;
        var multi_altered_margin = fp["_multi_altered_margin"];
        for (var i = 0; i < _alteredelem.length; ++i) {
            var e = _alteredelem[i];
            var rp = fp["_altered_font_profile"][e.type](e.param);
            var tw = 0,
                th = 0;
            for (var k = 0; k < rp.length; ++k) {
                text = raphaelText(
                    paper,
                    xl + brace_margin + tw,
                    y_body_base +
                        row_height / 2 +
                        ah +
                        rp[k][1] +
                        fp["_altered_global_dy"],
                    rp[k][2],
                    rp[k][0],
                    "lc",
                    rp[k][3] ? rp[k][3] : fontfamily
                );
                group.push(text);
                tw += text.getBBox().width;
                th = Math.max(th, text.getBBox().height);
                //a_min_y = Math.min(a_min_y, y_body_base + row_height/2 + ah + rp[k][1] + fp["_altered_global_dy"]);
                a_min_y = Math.min(a_min_y, text.getBBox().y);
                a_max_y = Math.max(
                    a_max_y,
                    text.getBBox().y + text.getBBox().height
                );
            }
            ah += th + multi_altered_margin;
            aw = Math.max(aw, tw);
        }
        if (_alteredelem.length > 0) {
            var brace_points_l = [
                [xl + brace_margin, a_min_y],
                [xl, a_min_y],
                [xl, a_max_y],
                [xl + brace_margin, a_max_y]
            ];
            var bl = paper
                .path(svgArcBezie(brace_points_l))
                .attr("stroke-width", "1px");

            var brace_points_r = [
                [xl + brace_margin + aw, a_min_y],
                [xl + brace_margin + aw + 5, a_min_y],
                [xl + brace_margin + aw + 5, a_max_y],
                [xl + brace_margin + aw, a_max_y]
            ];
            var br = paper
                .path(svgArcBezie(brace_points_r))
                .attr("stroke-width", "1px");

            group.push(bl);
            group.push(br);

            aw += brace_margin * 2;
        }

        xl += aw;
        if (bases[1]) {
            var bassstr = "/" + bases[1];
            var on_bass_width = 0;
            for (var obi = 0; obi < bassstr.length; ++obi) {
                var fp2 =
                    bassstr[obi] in fp["_on_bass_font_profile"]
                        ? fp["_on_bass_font_profile"][bassstr[obi]]()
                        : null;
                var _b2_font_family = fp2 && fp2[0][3] ? fp2[0][3] : fontfamily;
                var _b2_font_size = fp2 ? fp2[0][0] : fp["_on_bass_font_size"];
                var _b2_char = fp2 ? fp2[0][2] : bassstr[obi];
                var _b2_yoffset = fp2 ? fp2[0][1] : 0;
                text = raphaelText(
                    paper,
                    xl + on_bass_width,
                    y_body_base +
                        row_height / 2 +
                        fp["_on_bass_global_dy"] +
                        _b2_yoffset,
                    _b2_char,
                    _b2_font_size,
                    "lc",
                    _b2_font_family
                );
                on_bass_width += text.getBBox().width;
                group.push(text);
            }
            xl += on_bass_width;
        }

        //x += group.getBBox().width * x_global_scale * body_scaling;
        //x += (chord_space*body_scaling);
        var chord_width = group.getBBox().width;
        if (!draw) text.remove();

        if (draw) {
            var cloned = group.clone();
            cloned.attr({ opacity: 0.0 }); // Buffered symbol must not be shown on the score.
            ChordRenderBuffer[chord.chord_name_str] = [cloned, ref_p];
        }
        if (!isFinite(x)) {
            console.error("Illegal calculation of x detected");
        }
        return { group: group, width: chord_width };
    }

    render_slash(paper, group, x, y, d, numdot, _5lines_intv) {
        var rsgw = 8;
        var rsgh = _5lines_intv * 2;
        var rsh = 4;
        var path = svgPath(
            [
                [x, y + rsgh / 2 - rsh],
                [x + rsgw, y - rsgh / 2],
                [x + rsgw, y - rsgh / 2 + rsh],
                [x, y + rsgh / 2]
            ],
            true
        );
        var obj = null;
        //var group = paper.set();
        if (d == "1" || d == "2") {
            obj = paper.path(path).attr({ "stroke-width": "1px" });
        } else {
            // '0' and other
            obj = paper.path(path).attr({ fill: "#000000" });
        }
        group.push(obj);
        for (var i = 0; i < numdot; ++i) {
            group.push(
                paper
                    .circle(x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1)
                    .attr({ fill: "black" })
            );
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

    render_empty_rythm_slash(
        paper,
        x_body_base,
        rs_y_base,
        _5lines_intv,
        body_width,
        numslash,
        body_scaling
    ) {
        var group = paper.set();
        for (var r = 0; r < numslash; ++r) {
            var x = x_body_base + (body_width / 4.0) * r;
            raphaelSlash(
                paper,
                group,
                x,
                rs_y_base + _5lines_intv * 2,
                "0",
                0,
                _5lines_intv
            );
        }
        return { group: group };
    }

    render_simile_mark(
        draw,
        paper,
        group,
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
            group.push(
                paper
                    .circle(x + cm, y_body_base + _5lines_intv * 1.5, cr)
                    .attr({ fill: "black" })
            );
        for (var r = 0; r < numslash; ++r) {
            var y = y_body_base;
            x += (h + i) * r;
            if (draw) {
                var path = svgPath(
                    [
                        [x, y + _5lines_intv * 3],
                        [x + h, y + _5lines_intv * 3],
                        [x + h + H, y + _5lines_intv * 1],
                        [x + H, y + _5lines_intv]
                    ],
                    true
                );
                var obj = paper.path(path).attr({ fill: "#000000" });
                group.push(obj);
            }
        }
        if (draw)
            group.push(
                paper
                    .circle(
                        x + h + H - cm,
                        y_body_base + (row_height / 4) * 2.5,
                        cr
                    )
                    .attr({ fill: "black" })
            );
        if (put_boundary) {
            if (draw)
                group.push(
                    paper
                        .path(
                            svgLine(
                                x0 + width / 2,
                                y_body_base,
                                x0 + width / 2,
                                y_body_base + row_height
                            )
                        )
                        .attr({ "stroke-width": "1" })
                );
        }
        return width;
    }

    draw_notes(
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

        var deltax_acc = 10;

        // 1. determine the flag direction here
        var center_y = 0.0;
        var min_y = 10000000;
        var max_y = 0;
        var gbi_at_min_y = null;
        var gbi_at_max_y = null;
        var cnt_y = 0;

        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
            var c = balken.groups[gbi].notes_coord;

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
        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
            //var x = balken.groups[gbi].notes_coord[0];
            var ys = balken.groups[gbi].notes_coord[1];
            var d = balken.groups[gbi].note_value;
            var pos_on_5lines = balken.groups[gbi].pos_on_5lines;
            var sharp_flats = balken.groups[gbi].sharp_flats;
            var numdot = balken.groups[gbi].numdot;

            var bo_group = paper.set();

            var note_x_center = x;

            if (balken.groups[gbi].type == "slash") {
                if (d == "0" || d == "1") {
                    raphaelSlash(
                        paper,
                        bo_group,
                        note_x_center,
                        ys[0],
                        d,
                        numdot,
                        _5lines_intv
                    );
                } else {
                    raphaelSlash(
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

                for (var ci = 0; ci < ys.length; ++ci) {
                    var y = ys[ci];

                    if (d == "0") {
                    } else if (d == "1") {
                        text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue700",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );
                    } else if (d == "2") {
                        text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue701",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );
                    } else {
                        text = raphaelText(
                            paper,
                            note_x_center,
                            y,
                            "\ue702",
                            7,
                            "lc",
                            "smart_music_symbol"
                        );
                    }
                    bo_group.push(text);

                    // draw sharp, flat and natrual
                    // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
                    if (sharp_flats[ci] !== null) {
                        var SFN_YSHIFTS = { 11: -3, 1: 0, 0: 0 };
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
                    }

                    // dots
                    for (var i = 0; i < numdot; ++i) {
                        var dy =
                            pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;
                        bo_group.push(
                            paper
                                .circle(note_x_center + 12 + i * 5, y + dy, 1)
                                .attr({ fill: "black" })
                        );
                    }

                    // Draw additional horizontal lines
                    for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
                        if (p5i % 2 != 0) continue;
                        var a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3
                        var o = paper
                            .path(
                                svgLine(
                                    note_x_center - 3,
                                    rs_y_base + a5y,
                                    note_x_center + 12,
                                    rs_y_base + a5y
                                )
                            )
                            .attr({ "stroke-width": "1px" });
                        bo_group.push(o);
                    }
                    for (var p5i = pos_on_5lines[ci]; p5i >= 10; --p5i) {
                        if (p5i % 2 != 0) continue;
                        var a5y = (_5lines_intv / 2) * (8 - p5i); // rs_y_base corresponds to pos#3
                        var o = paper
                            .path(
                                svgLine(
                                    note_x_center - 3,
                                    rs_y_base + a5y,
                                    note_x_center + 12,
                                    rs_y_base + a5y
                                )
                            )
                            .attr({ "stroke-width": "1px" });
                        bo_group.push(o);
                    }
                }
            } else if (balken.groups[gbi].type == "rest") {
                var rr = render_rest(
                    balken.groups[gbi].e,
                    paper,
                    true,
                    x,
                    rs_y_base,
                    0,
                    _5lines_intv,
                    param
                );
                bo_group.push(rr.group);
            }

            if (music_context.tie_info.rs_prev_has_tie) {
                // Draw tie line
                var pss = music_context.tie_info.rs_prev_coord;
                var psm = music_context.tie_info.rs_prev_meas;

                // Check the consistency.
                if (pss[1].length != ys.length) {
                    throw "INVALID TIE NOTATION";
                }

                if (balken.groups[gbi].type == "slash") {
                    // slash only has down flag
                    var dy = -10;
                    var sdx = 12;
                    var round = 6;
                } else {
                    // notes
                    if (upper_flag) {
                        var dy = 3;
                        var sdx = 12;
                        var round = -6;
                    } else {
                        var dy = -3;
                        var sdx = 12;
                        var round = 6;
                    }
                }

                for (var ci = 0; ci < ys.length; ++ci) {
                    var y = ys[ci];
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

                        brace_points = [
                            [meas_start_x - 20, y + dy],
                            [meas_start_x - 20, y - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];
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
                    } else {
                        var brace_points = [
                            [pss[0] + sdx, pss[1][ci] + dy],
                            [pss[0] + sdx, pss[1][ci] - round + dy],
                            [x, y - round + dy],
                            [x, y + dy]
                        ];
                        var bl = paper
                            .path(svgArcBezie(brace_points))
                            .attr("stroke-width", "2px");
                        group.push(bl);
                    }
                }
            }

            music_context.tie_info.rs_prev_has_tie = balken.groups[gbi].has_tie;
            music_context.tie_info.rs_prev_tie_paper = paper;
            music_context.tie_info.rs_prev_coord = [
                x,
                balken.groups[gbi].notes_coord[1]
            ];
            music_context.tie_info.rs_prev_meas = meas;

            balken.groups[gbi].e.renderprop.x = x;
            balken.groups[gbi].renderprop.x = x;
            balken.groups[gbi].renderprop.note_x_center = note_x_center;

            // Here is the only update of x
            x +=
                (bo_group.getBBox().width + 10) * body_scaling * x_global_scale; // TODO : 10 should be refined

            group.push(bo_group);
        }

        // 3. Determine the flag intercept and slope
        var x_at_min_y = balken.groups[gbi_at_min_y].renderprop.note_x_center;
        var x_at_max_y = balken.groups[gbi_at_max_y].renderprop.note_x_center;
        var ps_y = balken.groups[0].notes_coord[1];
        var ps_bar_x = balken.groups[0].renderprop.note_x_center;
        var pe_y = balken.groups[balken.groups.length - 1].notes_coord[1];
        var pe_bar_x =
            balken.groups[balken.groups.length - 1].renderprop.note_x_center;

        if (balken.groups.length >= 2) {
            var delta_y = upper_flag
                ? Math.min.apply(null, pe_y) - Math.min.apply(null, ps_y)
                : Math.max.apply(null, pe_y) - Math.max.apply(null, ps_y);
            var slope = delta_y / (pe_bar_x - ps_bar_x);
        } else {
            var slope = 1.0; // any value is OK
        }

        var intercept =
            (upper_flag ? min_y - barlen : max_y + barlen) -
            slope * (upper_flag ? x_at_min_y : x_at_max_y);

        // if flag is upper, then the balken is shifted +deltax, then intercept is updated.
        var deltax = upper_flag ? 8 : 0;
        intercept = intercept - slope * deltax;

        // 4. Draw bars, flags
        var bar_flag_group = paper.set();
        for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
            var note_x_center = balken.groups[gbi].renderprop.note_x_center;

            if (balken.groups[gbi].type == "slash") {
                var numdot = balken.groups[gbi].numdot;
                if (d == "0" || d == "1") {
                } else {
                    var o = paper
                        .path(
                            svgLine(
                                note_x_center,
                                ys[0] + 3 /*rsr.bar_reduction*/,
                                note_x_center,
                                slope * note_x_center + intercept
                            )
                        )
                        .attr({ "stroke-width": "1px" });
                }
                bar_flag_group.push(o);
            } else if (balken.groups[gbi].type == "notes") {
                if (d == "0" || d == "1") {
                } else {
                    var ys = balken.groups[gbi].notes_coord[1];
                    var y0 = upper_flag
                        ? Math.max.apply(null, ys)
                        : Math.min.apply(null, ys);
                    // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.
                    var o = paper
                        .path(
                            svgLine(
                                note_x_center + deltax,
                                y0,
                                note_x_center + deltax,
                                slope * (note_x_center + deltax) + intercept
                            )
                        )
                        .attr({ "stroke-width": "1px" });
                    bar_flag_group.push(o);
                }
            } else if (balken.groups[gbi].type == "rest") {
            }
        }
        group.push(bar_flag_group);

        // 5. Draw balkens

        if (balken.groups.length >= 2) {
            // Draw flag for balken
            // Common balken
            if (balken.groups[0].note_value >= 8) {
                var o = paper
                    .path(
                        svgLine(
                            ps_bar_x + deltax,
                            slope * (ps_bar_x + deltax) + intercept,
                            pe_bar_x + deltax,
                            slope * (pe_bar_x + deltax) + intercept
                        )
                    )
                    .attr({ "stroke-width": balken_width });
                group.push(o);
            }

            // Balken for each note_value level
            var gg = to_same_value_group(balken.groups, function(o) {
                return o.note_value;
            });
            for (var g = 0; g < gg.length; ++g) {
                var same_sds = gg[g];
                var sd = same_sds[0].note_value;
                var numflag = myLog2(parseInt(sd)) - 2;

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
                        o = paper
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
                        group.push(o);
                    }
                } else if (same_sds.length >= 2) {
                    var pssx = same_sds[0].renderprop.note_x_center;
                    var psex =
                        same_sds[same_sds.length - 1].renderprop.note_x_center;
                    for (
                        var fi = 1;
                        fi < numflag;
                        ++fi // fi=0 is alread drawn by common balken
                    ) {
                        var o = paper
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
                        group.push(o);
                    }
                    if (same_sds[0].lengthIndicator.renpu) {
                        var ro = 12;
                        var center_x = (pssx + deltax + (psex + deltax)) / 2.0;
                        var text = raphaelText(
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
                        group.push(text);

                        if (same_sds[0].note_value < 8) {
                            var rno = 10;
                            var rnh = 4;
                            var clip =
                                text.getBBox().x +
                                "," +
                                text.getBBox().y +
                                "," +
                                text.getBBox().width +
                                "," +
                                text.getBBox().height;
                            var path1 = svgPath(
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
                            var path2 = svgPath(
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
                            var o1 = paper
                                .path(path1)
                                .attr({ "stroke-width": "1px" });
                            group.push(o1);
                            var o2 = paper
                                .path(path2)
                                .attr({ "stroke-width": "1px" });
                            group.push(o2);
                        }
                    }
                }
            }
        } else if (
            balken.groups.length == 1 &&
            balken.groups[0].type != "rest"
        ) {
            // Normal drawing of flags
            var note_x_center = balken.groups[0].renderprop.note_x_center;
            var d = balken.groups[0].note_value;
            var numflag = myLog2(parseInt(d)) - 2;
            for (var fi = 0; fi < numflag; ++fi) {
                var text = raphaelText(
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
                group.push(text);
                // Additional vertical line
                var line = paper
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
                group.push(line);
            }
        }

        return { x: x };
    }

    getAppropriateVerticalPos(nglist, key, context) {
        // TODO : implmentation
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

        balken = {
            groups: []
        };

        var drawn = false;
        var group = paper.set();

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
                (chord_length >= WHOLE_NOTE_LENGTH / 4 || e instanceof Rest) &&
                balken.groups.length > 0
            ) {
                var dbret = draw_notes(
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
                    e instanceof Rest
                        ? "rest"
                        : rhythm_only
                        ? "slash"
                        : "notes",
                numdot: numdot,
                notes_coord: [x, group_y],
                note_value: d,
                has_tie: has_tie,
                pos_on_5lines: pos_on_5lines, // for notes only
                lengthIndicator: e.nglist[0].lengthIndicator,
                sharp_flats: sharp_flats, // for notes only
                renderprop: {} // for internal use
            });
            if (
                e instanceof Rest ||
                chord_length >= WHOLE_NOTE_LENGTH / 4 ||
                music_context.pos_in_a_measure % (WHOLE_NOTE_LENGTH / 4) == 0 ||
                ei == elems.length - 1
            ) {
                var dbret = draw_notes(
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

        return { group: drawn ? group : null, x: x };
    }

    new_row_yinfo() {
        var rowyinfo = {
            maxheaerheight: 0,
            maxbodyheight: 0,
            maxfooterheight: 0,
            maxheight: 0
        };
        return rowyinfo;
    }

    render_rest(
        e,
        paper,
        draw,
        x,
        y_body_or_rs_base,
        C7_width,
        _5lines_intv,
        param
    ) {
        var cmap = {
            1: "\ue600",
            2: "\ue601",
            4: "\ue602",
            8: "\ue603",
            16: "\ue603",
            32: "\ue603"
        };
        var yoffsets = { 1: 1, 2: -2, 4: 0, 8: 0, 16: 7, 32: 7, 64: 14 };
        var dot_xoffsets = {
            1: 16,
            2: 16,
            4: 10,
            8: 12,
            16: 14,
            32: 16,
            64: 18
        };
        //var rd = parseInt(e.length_s);
        //var rrm = e.length_s.match(/([0-9]+)(\.*)/);
        var rd = e.nglist[0].lengthIndicator.base; //parseInt(rrm[1]);
        var numdot = e.nglist[0].lengthIndicator.numdot; //rm[2].length;
        var rg = paper.set();
        var oy = yoffsets[rd];
        var fs = 14;
        if (rd <= 4) {
            var text = raphaelText(
                paper,
                x,
                y_body_or_rs_base + param.row_height / 2 + oy,
                cmap[rd],
                fs,
                "lc",
                "realbook_music_symbol"
            );
            rg.push(text);
        } else {
            var nKasane = myLog2(rd) - 2;
            var rdx = 2;
            var rdy = -7;
            for (var k = 0; k < nKasane; ++k) {
                var text = raphaelText(
                    paper,
                    x + k * rdx,
                    y_body_or_rs_base + param.row_height / 2 + k * rdy + oy,
                    "\ue603",
                    fs,
                    "lc",
                    "realbook_music_symbol"
                );
                rg.push(text);
            }
        }
        // dots
        for (var di = 0; di < numdot; ++di) {
            rg.push(
                paper
                    .circle(
                        x + dot_xoffsets[rd] + di * 5,
                        y_body_or_rs_base +
                            param.row_height / 2 -
                            _5lines_intv / 2,
                        1
                    )
                    .attr({ fill: "black" })
            );
        }

        if (!draw) rg.remove();

        return { group: rg, width: C7_width };
    }

    render_measure_row(
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
        var text = raphaelText(
            paper,
            0,
            0,
            "C7",
            16,
            "lc",
            "realbook_music_symbol"
        );
        var C7_width = text.getBBox().width;
        text.remove();

        var rs_area_detected = false; // Rhthm Slash Area
        var mu_area_detected = false; // Measure Upper Area ( Above the chord symbol )
        var ml_area_detected = false; // Measure Lower Area ( Blow the chord & rhythm slash area)
        var lyric_rows = 0;

        //var draw_5line = false;
        if (staff == "ON") {
            rs_area_detected = true;
        }
        // interval of 5 lines
        var _5lines_intv = param.rs_area_height / (5 - 1);

        // Screening of y-axis areas
        for (var ml = 0; ml < row_elements_list.length; ++ml) {
            var m = row_elements_list[ml];
            for (var ei = 0; ei < m.elements.length; ++ei) {
                var e = m.elements[ei];
                if (
                    e instanceof Coda ||
                    e instanceof Segno ||
                    e instanceof Comment ||
                    e instanceof LoopIndicator ||
                    e instanceof ToCoda
                ) {
                    mu_area_detected = true;
                } else if (e instanceof Chord) {
                    rs_area_detected |= e.nglist !== null;
                } else if (e instanceof Lyric) {
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
            (ml_area_detected ? lyric_rows * param.ml_row_height : 0) +
            param.row_margin * macros.r_row_margin;

        var y_body_or_rs_base = rs_area_detected ? y_rs_area_base : y_body_base;

        // Debug of y-base lines
        if (false && draw) {
            var lines = [
                y_base,
                y_mu_area_base,
                y_body_base,
                y_rs_area_base,
                y_ml_area_base,
                y_next_base
            ];
            var colors = ["black", "red", "blue", "green", "orange", "pink"];
            for (var ii = 0; ii < lines.length; ++ii)
                paper
                    .path(
                        svgLine(0 + ii * 30, lines[ii], 20 + ii * 30, lines[ii])
                    )
                    .attr({ "stroke-width": "1", stroke: colors[ii] });
        }

        var measure_height = y_next_base - y_base;
        var measure_heights = [];

        var first_meas_start_x = x;
        var last_meas_end_x = x;

        var body_area_svg_groups = [];
        var rs_area_svg_groups = [];

        // For each measure in this row
        for (var ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            var m = row_elements_list[ml];

            var meas_base_x = x; // Start of this measure including boundary
            var meas_start_x = x; // Start of this measure excluding boundary
            var meas_end_x = x; // End of this measure
            var mh_offset = 0; // Offset x in mh region

            var elements = classifyElements(m);

            // Draw sub header field ( Repeat signs )
            var m_mu_area_detected = false;
            var m_ml_area_detected = false;
            var rest_or_long_rests_detected = false;

            for (var ei = 0; ei < elements.header.length; ++ei) {
                var e = elements.header[ei];
                if (e instanceof Coda) {
                    m_mu_area_detected = true;
                    if (draw) {
                        var g = draw_coda(
                            paper,
                            meas_base_x + mh_offset,
                            y_mu_area_base,
                            "lt",
                            e
                        );
                        mh_offset += g.getBBox().width;
                    }
                } else if (e instanceof Segno) {
                    m_mu_area_detected = true;
                    if (draw) {
                        var g = draw_segno(
                            paper,
                            meas_base_x + mh_offset,
                            y_mu_area_base,
                            e
                        );
                        mh_offset += g.getBBox().width;
                    }
                } else if (e instanceof Comment) {
                    m_mu_area_detected = true;
                    if (draw) {
                        // If this comment is associated with a chord with exceptional comment, not rendered here.
                        if (!e.chorddep) {
                            var g = raphaelText(
                                paper,
                                meas_base_x + mh_offset,
                                y_body_base,
                                e.comment,
                                15,
                                "lb"
                            );
                            mh_offset += g.getBBox().width;
                        }
                    }
                } else if (e instanceof Lyric) {
                    m_ml_area_detected = true;
                    if (draw) {
                        // If this comment is associated with a chord with exceptional comment, not rendered here.
                        if (!e.chorddep) {
                            // Currently lyrics are only rendered for chord dependency case
                        }
                    }
                }
            } // Header loop

            // Draw header
            var header_rs_area_width = 0;
            var header_body_area_width = 0;
            // Clef, Key, Begin Boundary, Time(1st one) are included in this area
            for (var ei = 0; ei < elements.header.length; ++ei) {
                var e = elements.header[ei];
                if (e instanceof MeasureBoundary) {
                    var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
                    var ne = pm ? pm.elements[pm.elements.length - 1] : null;
                    var r = draw_boundary(
                        "begin",
                        ne,
                        e,
                        m.new_line,
                        paper,
                        x,
                        y_body_or_rs_base,
                        param,
                        draw
                    );
                    m.renderprop.y = y_body_or_rs_base;
                    m.renderprop.sx = x;
                    m.renderprop.paper = paper;
                    x = r.x;
                    meas_start_x = r.bx;

                    if (r.group) rs_area_svg_groups.push(r.group);

                    // Header 1. Reharsal mark in row
                    if (
                        inner_reharsal_mark &&
                        rs_area_detected &&
                        first_block_first_row &&
                        ml == 0
                    ) {
                        var g = raphaelTextWithBox(
                            paper,
                            meas_base_x,
                            y_body_base,
                            reharsal_group.name,
                            param.reharsal_mark_font_size
                        );
                        header_body_area_width += g.getBBox().width;
                    }
                } else if (e instanceof Time) {
                    x += 4;
                    var hlw = 0;
                    var lx = x;
                    var timeGroup = paper.set();
                    var textn = raphaelText(
                        paper,
                        lx,
                        y_body_or_rs_base,
                        e.numer,
                        12,
                        "lt",
                        "realbook_music_symbol"
                    );
                    hlw = textn.getBBox().width;
                    var textd = raphaelText(
                        paper,
                        lx,
                        y_body_or_rs_base + param.row_height / 2,
                        e.denom,
                        12,
                        "lt",
                        "realbook_music_symbol"
                    );
                    hlw = Math.max(hlw, textd.getBBox().width);
                    textn.attr({
                        x: textn.attr("x") + (hlw - textn.getBBox().width) / 2
                    });
                    textd.attr({
                        x: textd.attr("x") + (hlw - textd.getBBox().width) / 2
                    });
                    timeGroup.push(textn, textd);
                    var ly = y_body_base + param.row_height / 2;
                    if (draw && !rs_area_detected)
                        timeGroup.push(
                            paper
                                .path(svgLine(lx, ly, lx + hlw, ly))
                                .attr({ "stroke-width": "1" })
                        );
                    //console.log("hlw = " + hlw);
                    rs_area_svg_groups.push(timeGroup);
                    x += hlw;
                }
            }

            header_rs_area_width = x - meas_base_x;

            if (header_body_area_width > header_rs_area_width)
                x += header_body_area_width - header_rs_area_width;

            // Margin between header and body
            x += param.header_body_margin;

            m.header_width = x - meas_base_x;

            // Draw body
            var body_base = x;

            // First, guess chord duration here.
            // In current version, each chord in the measure is assumed to have the same duration.
            // TODO : Improve based on number of spaces or duration indication mark.
            var all_has_length = true;
            var sum_length = 0.0;

            var chord_name_str = null;

            var chord_space_list = []; // for chord and rest

            var base_space = 20;

            elements.body.forEach(function(e) {
                all_has_length &= e.nglist !== null;
                if (all_has_length)
                    sum_length += e.nglist[0].lengthIndicator.length;
                rest_or_long_rests_detected |= e instanceof Rest;
            });

            // Reset music context
            // TODO : consider key infomration
            // TODO : consider tie
            // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
            music_context.accidental_info = new Array(128).fill(0);

            var tmpl = { elems: [], groupedChordsLen: 0 };
            var groupedBodyElems = [];

            if (elements.body.length > 0) groupedBodyElems.push(deepcopy(tmpl));
            var gbei = 0;

            // Grouping the chord and notes among which the same balken is shared.
            elements.body.forEach(function(e, ei) {
                // TODO : More strict judge
                // Currently, Rest and Chords are in the different groups.
                // However to cater for, for instance triplets including rests,
                // they needs to be in the same group.
                if (groupedBodyElems[gbei].elems.length == 0) {
                    // Keei pin the same group
                } else if (
                    all_has_length &&
                    e instanceof Chord &&
                    groupedBodyElems[gbei].elems[0] instanceof Chord && // Rest and chords will not be in the same group
                    (music_context.tie_info.prev_has_tie ||
                        e.chord_name_str == "" ||
                        (e.is_valid_chord &&
                            chord_name_str &&
                            chord_name_str == e.chord_name_str))
                ) {
                    // Keep in the same group
                } else {
                    // flush
                    groupedBodyElems.push(deepcopy(tmpl));
                    ++gbei;
                }

                groupedBodyElems[gbei].elems.push(e);

                music_context.tie_info.prev_has_tie = e.nglist
                    ? e.nglist[0].lengthIndicator.has_tie
                    : false;

                if (e instanceof Chord) chord_name_str = e.chord_name_str;
            });

            // reset pos inside a measure
            music_context.pos_in_a_measure = 0;

            groupedBodyElems.forEach(function(body_elems, gbei) {
                // Draw Rythm Slashes, first
                if (rs_area_detected && all_has_length) {
                    var g = render_rs_area(
                        x,
                        body_elems.elems,
                        paper,
                        y_rs_area_base,
                        _5lines_intv,
                        meas_start_x,
                        meas_end_x,
                        draw,
                        0,
                        m.body_scaling,
                        x_global_scale,
                        music_context,
                        m,
                        param
                    );

                    if (g.group) rs_area_svg_groups.push(g.group);

                    var rs_area_width = g.x - x;

                    var e0 = body_elems.elems[0];
                    var chord_symbol_width = 0;
                    if (e0 instanceof Chord) {
                        var cr = render_chord(
                            e0,
                            transpose,
                            half_type,
                            paper,
                            e0.renderprop.x,
                            y_body_base,
                            param,
                            draw,
                            C7_width,
                            theme
                        );
                        chord_symbol_width =
                            (cr.width + base_space) *
                            x_global_scale *
                            m.body_scaling; // + chord_space * m.body_scaling;
                    } else if (e0 instanceof Rest) {
                        // Rest is drawn in render_rs_area function in RS area
                    }

                    x += Math.max(rs_area_width, chord_symbol_width);
                } else {
                    if (body_elems.elems.length != 1)
                        throw "SOMETHING WRONG WITH CHORD GROUPING";

                    var e0 = body_elems.elems[0];
                    var chord_symbol_width = 0;
                    if (e0 instanceof Chord) {
                        var cr = render_chord(
                            e0,
                            transpose,
                            half_type,
                            paper,
                            x,
                            y_body_base,
                            param,
                            draw,
                            C7_width,
                            theme
                        );
                        chord_symbol_width =
                            (cr.width + base_space) *
                            x_global_scale *
                            m.body_scaling; // + chord_space * m.body_scaling;
                    } else if (e0 instanceof Rest) {
                        var rr = render_rest(
                            e0,
                            paper,
                            draw,
                            x,
                            y_body_or_rs_base,
                            0,
                            _5lines_intv,
                            param
                        );
                        chord_symbol_width =
                            (rr.width + base_space) *
                            x_global_scale *
                            m.body_scaling; // + chord_space * m.body_scaling;

                        if (draw) rs_area_svg_groups.push(rr.group);
                    } else if (e0 instanceof Simile) {
                        // Simile makr shall be always in the sigle group solely. Simile mark in body element if one or more body elements exist.
                        var sgroup = paper.set();
                        var swidth = render_simile_mark(
                            draw,
                            paper,
                            sgroup,
                            x,
                            y_body_or_rs_base,
                            param.rs_area_height,
                            e0.numslash,
                            false,
                            "l"
                        );
                        if (draw) rs_area_svg_groups.push(sgroup);
                        chord_symbol_width =
                            (swidth + base_space) *
                            x_global_scale *
                            m.body_scaling;
                    }
                    e0.renderprop.x = x;
                    x += chord_symbol_width;
                }

                body_elems.elems.forEach(function(e, ei) {
                    if (e instanceof Chord) {
                        if (e.exceptinal_comment !== null) {
                            if (draw)
                                var g = raphaelText(
                                    paper,
                                    e.renderprop.x,
                                    y_body_base,
                                    e.exceptinal_comment.comment,
                                    15,
                                    "lb"
                                );
                        }
                        if (e.lyric !== null) {
                            if (draw) {
                                var llist = e.lyric.lyric.split("/");
                                for (var li = 0; li < llist.length; ++li) {
                                    var g = raphaelText(
                                        paper,
                                        e.renderprop.x,
                                        y_ml_area_base +
                                            li * param.ml_row_height,
                                        llist[li],
                                        10,
                                        "lt"
                                    );
                                }
                            }
                        }
                    } else if (e instanceof Rest) {
                        if (ei == 0) return; // skip as already drawn

                        var rr = render_rest(
                            e0,
                            paper,
                            draw,
                            e.renderprop.x,
                            y_body_or_rs_base,
                            C7_width,
                            _5lines_intv,
                            param
                        );
                        if (!draw) rr.group.remove();
                        else rs_area_svg_groups.push(rr.group);
                    } else if (e instanceof Simile) {
                        // Do nothing as already drawn
                    } else {
                        throw "Unkown instance of body elements";
                    }
                });
            });

            if (elements.body.length == 0) {
                // If no elements in body area, minimum width is reservied assuming 1 CM7 chord is located.
                x += C7_width * x_global_scale * m.body_scaling;
                x += base_space * x_global_scale * m.body_scaling;
            }

            //console.log({x:x, body_base:body_base, scaling:m.body_scaling});
            m.body_width = x - body_base;

            // Draw footer
            var footer_base = x;
            for (var ei = 0; ei < elements.footer.length; ++ei) {
                // Basically, end boundary is not drawn for this measure because next measure
                // will draw it.
                // End boundary should be drawn only when this measure is the last
                // measure in current row.
                var lr = rs_area_detected ? "l" : "r";

                var e = elements.footer[ei];
                if (e instanceof MeasureBoundary) {
                    var nm =
                        ml == row_elements_list.length - 1
                            ? next_measure
                            : row_elements_list[ml + 1];
                    var ne = nm ? nm.elements[0] : null;
                    var r = draw_boundary(
                        "end",
                        e,
                        ne,
                        nm ? nm.new_line : false,
                        paper,
                        x,
                        y_body_or_rs_base,
                        param,
                        draw
                    );
                    m.renderprop.ex = x;
                    x = r.x;
                    if (r.group) rs_area_svg_groups.push(r.group);
                } else if (e instanceof DaCapo) {
                    text = raphaelText(
                        paper,
                        x,
                        y_body_or_rs_base - 8 /* + row_height + 8*/,
                        e.toString(),
                        15,
                        lr + "c"
                    ).attr(param.repeat_mark_font);
                    if (rs_area_detected) x += text.getBBox().width;
                    rs_area_svg_groups.push(text);
                } else if (e instanceof DalSegno) {
                    text = raphaelText(
                        paper,
                        x,
                        y_body_or_rs_base - 8 /* + row_height + 8*/,
                        e.toString(),
                        15,
                        lr + "c"
                    ).attr(param.repeat_mark_font);
                    if (rs_area_detected) x += text.getBBox().width;
                    rs_area_svg_groups.push(text);
                } else if (e instanceof ToCoda) {
                    if (rs_area_detected) {
                        var text = raphaelText(
                            paper,
                            x,
                            y_body_or_rs_base,
                            "To",
                            15,
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
                    } else {
                        var coda = draw_coda(
                            paper,
                            x,
                            y_body_or_rs_base,
                            "rb",
                            e
                        );
                        text = raphaelText(
                            paper,
                            x - coda.getBBox().width - 5,
                            y_body_or_rs_base,
                            "To",
                            15,
                            "rb"
                        ).attr(param.repeat_mark_font);
                        rs_area_svg_groups.push(coda);
                        rs_area_svg_groups.push(text);
                    }
                } else if (e instanceof Fine) {
                    text = raphaelText(
                        paper,
                        x,
                        y_body_or_rs_base - 8 /* + row_height + 8*/,
                        e.toString(),
                        15,
                        lr + "c"
                    ).attr(param.repeat_mark_font);
                    if (rs_area_detected) x += text.getBBox().width;
                    rs_area_svg_groups.push(text);
                } else {
                    throw "Unkown instance of footer elements";
                }
            }

            m.footer_width = x - footer_base;
            meas_end_x = x;
            last_meas_end_x = meas_end_x;

            // Draw Upper and Lower Signs
            for (var ei = 0; ei < elements.measure_wide.length; ++ei) {
                var e = elements.measure_wide[ei];
                if (e instanceof LoopIndicator) {
                    var oy = 10;
                    var ly = y_body_base - 2 - oy;
                    var sx = meas_start_x;
                    var fx = meas_end_x;
                    if (draw)
                        paper
                            .path(svgLine(sx, ly, sx, ly + oy))
                            .attr({ "stroke-width": "1" });
                    if (draw)
                        paper
                            .path(svgLine(sx, ly, fx, ly))
                            .attr({ "stroke-width": "1" });
                    var s = e.indicators.join(",");
                    if (draw) raphaelText(paper, sx + 2, ly, s, 10, "lt");
                } else if (e instanceof LongRestIndicator) {
                    var sx =
                        meas_start_x +
                        m.header_width -
                        param.header_body_margin; // More beautiful for long rest if header body margin is omitted
                    var fx = meas_end_x - m.footer_width;
                    var rh = param.row_height;
                    var r_lrmargin = 0.05;
                    var min_lrmargin = 5;
                    var max_lrmargin = 20;
                    var vlmargin = 0.2;

                    lrmargin = Math.max(
                        min_lrmargin,
                        Math.min(max_lrmargin, (sx + fx) * r_lrmargin)
                    );

                    var lx = sx + lrmargin;
                    var rx = fx - lrmargin;

                    var lriGroup = paper.set();

                    if (draw)
                        lriGroup.push(
                            paper
                                .path(
                                    svgLine(
                                        lx,
                                        y_body_or_rs_base +
                                            param.row_height / 2,
                                        rx,
                                        y_body_or_rs_base + param.row_height / 2
                                    )
                                )
                                .attr({ "stroke-width": "7" })
                        );
                    if (draw)
                        lriGroup.push(
                            paper
                                .path(
                                    svgLine(
                                        lx,
                                        y_body_or_rs_base + rh * vlmargin,
                                        lx,
                                        y_body_or_rs_base + rh - rh * vlmargin
                                    )
                                )
                                .attr({ "stroke-width": "1" })
                        );
                    if (draw)
                        lriGroup.push(
                            paper
                                .path(
                                    svgLine(
                                        rx,
                                        y_body_or_rs_base + rh * vlmargin,
                                        rx,
                                        y_body_or_rs_base + rh - rh * vlmargin
                                    )
                                )
                                .attr({ "stroke-width": "1" })
                        );
                    if (draw)
                        lriGroup.push(
                            raphaelText(
                                paper,
                                (sx + fx) / 2,
                                y_body_or_rs_base,
                                e.longrestlen,
                                14,
                                "cm",
                                "realbook_music_symbol"
                            )
                        );

                    if (draw) rs_area_svg_groups.push(lriGroup);

                    rest_or_long_rests_detected |= true;
                } else if (e instanceof Simile) {
                    // Simile mark in measure wide element if there is no other body elements in this measure
                    var sx =
                        meas_start_x +
                        m.header_width -
                        param.header_body_margin; // More beautiful for long rest if header body margin is omitted
                    var fx = meas_end_x - m.footer_width;
                    var sgroup = paper.set();
                    var swidth = render_simile_mark(
                        draw,
                        paper,
                        sgroup,
                        (sx + fx) / 2,
                        y_body_or_rs_base,
                        param.rs_area_height,
                        e.numslash,
                        false,
                        "c"
                    );
                    if (draw) rs_area_svg_groups.push(sgroup);
                } else {
                    throw "Unkown measure wide instance detected";
                }
            }

            m.renderprop.meas_height = measure_height;
            measure_heights.push(measure_height);

            m.renderprop.meas_start_x = meas_start_x;
            m.renderprop.meas_end_x = meas_end_x;
        } // measure loop

        // Draw 5 lines
        if (rs_area_detected) {
            for (var i = 0; i < 5; ++i) {
                var intv = _5lines_intv;
                var dy = 0;
                if (draw) {
                    var _5l = paper
                        .path(
                            svgLine([
                                [
                                    first_meas_start_x,
                                    y_rs_area_base + i * intv + dy
                                ],
                                [
                                    last_meas_end_x,
                                    y_rs_area_base + i * intv + dy
                                ]
                            ])
                        )
                        .attr({ "stroke-width": "1px" });
                    rs_area_svg_groups.push(_5l);
                }
            }
        }

        // check vertical overlaps
        if (false) {
            var rs_min_y = 100000;
            var rs_max_y = 0;
            rs_area_svg_groups.forEach(function(g) {
                rs_min_y = Math.min(g.getBBox().y, rs_min_y);
                rs_max_y = Math.max(g.getBBox().y2, rs_max_y);
            });
            if (rs_min_y < y_rs_area_base) {
                rs_area_svg_groups.forEach(function(g) {
                    g.transform("t" + 0 + "," + (y_rs_area_base - rs_min_y));
                });
            }
        }

        // max.apply with 0 length array will generate -inf value, then check if measure_heights has at least one element
        if (measure_heights.length > 0)
            y_base += Math.max.apply(null, measure_heights);

        return { y_base: y_base };
    }

    makeDammyPaper() {
        $("body").append("<div id='invisible_view2'></div>");
        $("#invisible_view2").css({
            opacity: 0.2,
            position: "absolute",
            top: 0,
            left: 0
        });
        paper = Raphael($("#invisible_view2")[0], 1, 1);
        return paper;
    }

    removeDammyPaper() {
        $("#invisible_view2").remove();
    }

    Initialize() {
        // Pre-load web-fonts because BBox of the fonts can not be correctly retrieved
        // for the first-rendered fonts. This may be a browser bug ?
        var paper = makeDammyPaper();
        var FONT_FAMILIES = ["realbook_music_symbol", "Arial"]; // List all the fonts used
        for (var i = 0; i < FONT_FAMILIES.length; ++i) {
            var text = raphaelText(
                paper,
                100,
                100,
                "ABCDEFG#b123456789dsMm",
                16,
                "lt",
                FONT_FAMILIES[i]
            );
        }
        raphaelText(
            paper,
            100,
            120,
            "b#\ue700\ue701\ue702\ue710\ue711\ue900\ue800\ue801",
            16,
            "lt",
            "smart_music_symbol"
        );
        removeDammyPaper();
    }

    render_impl(
        canvas,
        track,
        just_to_estimate_size,
        param,
        async_mode,
        progress_cb,
        context
    ) {
        var draw = !just_to_estimate_size;

        console.log("render_impl called with " + draw);

        var paper = null;
        var origin = { x: 0, y: 0 };
        if (draw) {
            var mnret = makeNewPaper(canvas, param, context);
            paper = mnret.paper;
            origin = mnret.origin;
        } else {
            // Dammy paper object
            paper = makeDammyPaper();
        }

        var y_title_offset = param.y_title_offset;
        var x_offset = origin.x + param.x_offset;
        var score_width = param.paper_width / param.ncol;
        var score_height = param.paper_height / param.nrow;
        var width = param.paper_width / param.ncol - param.x_offset * 2;

        var y_base = param.y_first_page_offset;

        var songname = "";

        var global_macros = getGlobalMacros(track);

        // Title
        if (draw)
            raphaelText(
                paper,
                x_offset + width / 2,
                y_title_offset,
                global_macros.title,
                param.title_font_size,
                "ct"
            );
        songname = global_macros.title;

        // Sub Title
        if (draw && global_macros.sub_title != "")
            raphaelText(
                paper,
                x_offset + width / 2,
                y_title_offset + 28,
                global_macros.sub_title,
                param.sub_title_font_size,
                "ct"
            );

        // Artist
        if (draw)
            raphaelText(
                paper,
                x_offset + width,
                param.y_author_offset,
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

        /* Paging */
        console.log("render_impl called with " + draw + " : Making pagination");

        var pageslist = [];
        if (draw) {
            var y_stacks = [
                { type: "titles", height: param.y_first_page_offset }
            ];
            for (var i = 0; i < track.reharsal_groups.length; ++i) {
                var rg_macros = getMacros(
                    global_macros,
                    track.reharsal_groups[i]
                );
                console.group("Macro for " + track.reharsal_groups[i].name);
                console.log(rg_macros);
                console.groupEnd();
                if (global_macros.reharsal_mark_position != "Inner")
                    y_stacks.push({
                        type: "reharsal",
                        height: param.rm_area_height,
                        cont: track.reharsal_groups[i],
                        macros: rg_macros
                    });
                var rg = track.reharsal_groups[i];
                for (var bi = 0; bi < rg.blocks.length; ++bi) {
                    var block_measures = rg.blocks[bi];
                    var row_max_height = 0;
                    var meas_row = [];
                    var pm = null;
                    var row_id_in_block = 0;
                    for (var ml = 0; ml < block_measures.length; ++ml) {
                        var m = block_measures[ml];
                        if (m.new_line) {
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
                        row_max_height = Math.max(
                            row_max_height,
                            m.renderprop.meas_height
                        );
                    }
                    if (row_max_height > 0)
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

            var sum_y = 0;
            var page_cont = [];
            var avoid_separated_rm = true;
            for (var i = 0; i < y_stacks.length; ++i) {
                if (
                    sum_y + y_stacks[i].height <=
                    score_height - param.y_offset
                ) {
                    sum_y += y_stacks[i].height;
                    page_cont.push(y_stacks[i]);
                } else {
                    if (
                        avoid_separated_rm &&
                        page_cont.length >= 1 &&
                        page_cont[page_cont.length - 1].type == "reharsal" &&
                        y_stacks[i].type == "meas"
                    ) {
                        var prev_ys = page_cont.pop();
                        pageslist.push(page_cont);
                        page_cont = [prev_ys];
                        sum_y = y_stacks[i].height;
                    } else {
                        pageslist.push(page_cont);
                        page_cont = [];
                        sum_y = 0;
                    }

                    page_cont.push(y_stacks[i]);
                    sum_y += y_stacks[i].height;
                }
            }
            if (page_cont.length > 0) pageslist.push(page_cont);

            //console.log("////////");
            //console.log(pageslist);
        } else {
            // Screening stage : all the contents are put in the single page
            var y_stacks = [{ type: "titles", height: param.y_offset }];
            for (var i = 0; i < track.reharsal_groups.length; ++i) {
                var rg_macros = getMacros(
                    global_macros,
                    track.reharsal_groups[i]
                );
                y_stacks.push({
                    type: "reharsal",
                    height: param.rm_area_height,
                    cont: track.reharsal_groups[i],
                    macros: rg_macros
                });
                var rg = track.reharsal_groups[i];
                for (var bi = 0; bi < rg.blocks.length; ++bi) {
                    y_stacks.push({
                        type: "meas",
                        height: 0,
                        cont: rg.blocks[bi],
                        nm: null,
                        pm: null,
                        rg: track.reharsal_groups[i],
                        macros: rg_macros,
                        block_id: bi,
                        row_id_in_block: 0
                    });
                }
            }
            pageslist.push(y_stacks);
        }

        /* Paging */
        console.log(
            "render_impl called with " + draw + " : Invoke async loop execution"
        );

        if (async_mode) {
            Task.Foreach(
                pageslist,
                function(pageidx, len, page, ctx1) {
                    Task.Foreach(
                        page,
                        function(pei, yselen, yse, ctx2) {
                            if (progress_cb) {
                                progress_cb(
                                    (ctx2.draw ? "" : "Pre-") +
                                        "Rendering block " +
                                        pei +
                                        " in page " +
                                        (pageidx + 1) +
                                        " of " +
                                        songname
                                );
                            }

                            if (yse.type == "titles") {
                            } else if (
                                yse.type == "reharsal" &&
                                yse.macros.reharsal_mark_position != "Inner"
                            ) {
                                var rg = yse.cont;

                                if (ctx2.draw) {
                                    var g = raphaelTextWithBox(
                                        ctx2.paper,
                                        ctx2.x_offset,
                                        ctx2.y_base,
                                        rg.name,
                                        ctx2.param.reharsal_mark_font_size
                                    );
                                }

                                ctx2.y_base += ctx2.param.rm_area_height; // Reharsal mark area height
                            } else if (yse.type == "meas") {
                                var row_elements_list = yse.cont;
                                var r = render_measure_row(
                                    ctx2.x_offset,
                                    ctx2.paper,
                                    yse.macros,
                                    row_elements_list,
                                    yse.rg,
                                    yse.pm,
                                    yse.nm,
                                    ctx2.y_base,
                                    ctx2.param,
                                    ctx2.draw,
                                    yse.block_id == 0 &&
                                        yse.row_id_in_block == 0,
                                    yse.macros.reharsal_mark_position ==
                                        "Inner",
                                    music_context
                                );
                                ctx2.y_base = r.y_base;
                            }
                        },
                        ctx1,
                        "renderpageelemloop"
                    );

                    var lasttask = Task.enqueueFunctionCall(
                        function() {
                            // Page number footer
                            footerstr =
                                songname +
                                " - " +
                                (pageidx + 1) +
                                " of " +
                                pageslist.length;
                            //alert(footerstr);
                            raphaelText(
                                ctx1.paper,
                                ctx1.origin.x + score_width / 2,
                                ctx1.origin.y + score_height - 60,
                                footerstr,
                                12,
                                "ct"
                            );

                            // Make new page
                            if (ctx1.draw && pageidx != pageslist.length - 1) {
                                var mnret = makeNewPaper(
                                    canvas,
                                    ctx1.param,
                                    context
                                );
                                ctx1.paper = mnret.paper;
                                ctx1.y_base =
                                    mnret.origin.y + ctx1.param.y_offset;
                                ctx1.origin = mnret.origin;
                                ctx1.x_offset = mnret.origin.x + param.x_offset;
                            }
                        },
                        [],
                        "renderpageelemloop"
                    );

                    return lasttask;
                },
                {
                    param: param,
                    draw: draw,
                    paper: paper,
                    y_base: y_base,
                    origin: origin,
                    x_offset: x_offset
                },
                "renderpageloop"
            );

            var task = Task.enqueueFunctionCall(
                function() {
                    if (!draw) {
                        removeDammyPaper();
                    }
                },
                [],
                "renderpageloop"
            );

            return task;
        } else {
            for (var pageidx = 0; pageidx < pageslist.length; ++pageidx) {
                var yse = pageslist[pageidx];
                for (var pei = 0; pei < yse.length; ++pei) {
                    // Loop each y_stacks
                    if (yse[pei].type == "titles") {
                    } else if (
                        yse[pei].type == "reharsal" &&
                        yse[pei].macros.reharsal_mark_position != "Inner"
                    ) {
                        var rg = yse[pei].cont;

                        if (draw) {
                            var g = raphaelTextWithBox(
                                paper,
                                x_offset,
                                y_base,
                                rg.name,
                                param.reharsal_mark_font_size
                            );
                        }

                        y_base += param.rm_area_height; // Reharsal mark area height
                    } else if (yse[pei].type == "meas") {
                        var row_elements_list = yse[pei].cont;
                        var r = render_measure_row(
                            x_offset,
                            paper,
                            yse[pei].macros,
                            row_elements_list,
                            yse[pei].rg,
                            yse[pei].pm,
                            yse[pei].nm,
                            y_base,
                            param,
                            draw,
                            yse[pei].block_id == 0 &&
                                yse[pei].row_id_in_block == 0,
                            yse[pei].macros.reharsal_mark_position == "Inner",
                            music_context
                        );
                        y_base = r.y_base;
                    }
                }
                // Page number footer
                footerstr =
                    songname +
                    " - " +
                    (pageidx + 1) +
                    " of " +
                    pageslist.length;
                //alert(footerstr);
                raphaelText(
                    paper,
                    origin.x + score_width / 2,
                    origin.y + score_height - 60,
                    footerstr,
                    12,
                    "ct"
                );

                if (draw && pageidx != pageslist.length - 1) {
                    var mnret = makeNewPaper(canvas, param, context);
                    paper = mnret.paper;
                    origin = mnret.origin;
                    y_base = origin.y + param.y_offset;
                    x_offset = origin.x + param.x_offset;
                }
            } // reharsal group loop

            if (!draw) {
                removeDammyPaper();
            }
        } // end async switch
    }

    draw_segno(paper, x, y, segno) {
        var lx = x;
        var group = paper.set();
        group.push(
            raphaelText(paper, x, y, "\ue801", 18, "lt", "smart_music_symbol")
        );
        lx = x + group.getBBox().width;
        if (segno.number !== null) {
            group.push(
                raphaelText(
                    paper,
                    lx,
                    y + group.getBBox().height,
                    segno.number,
                    18,
                    "lb"
                )
            );
            lx = x + group.getBBox().width;
        }
        if (segno.opt !== null) {
            group.push(
                raphaelText(
                    paper,
                    lx,
                    y + group.getBBox().height,
                    "(" + segno.opt + ")",
                    16,
                    "lb"
                )
            );
            lx = x + group.getBBox().width;
        }

        return group;
    }

    draw_coda(paper, x, y, align, coda) {
        // aligh=(l|c|r)(b|m|t)
        var group = paper.set();
        if (align[0] == "r") {
            if (coda.number !== null)
                group.push(raphaelText(paper, x, y, coda.number, 18, align));
            group.push(
                raphaelText(
                    paper,
                    x - (coda.number !== null ? group.getBBox().width : 0),
                    y,
                    "\ue800",
                    18,
                    align,
                    "smart_music_symbol"
                )
            );
        } else if (align[0] == "l") {
            group.push(
                raphaelText(
                    paper,
                    x,
                    y,
                    "\ue800",
                    18,
                    align,
                    "smart_music_symbol"
                )
            );
            if (coda.number !== null)
                group.push(
                    raphaelText(
                        paper,
                        x + group.getBBox().width,
                        y,
                        coda.number,
                        18,
                        align
                    )
                );
        } else {
            throw "NOT SUPPORTED";
        }
        return group;
    }
}
