/**
 * @module Fumen
 */


import "@babel/polyfill";
import { Renderer } from "./renderer";
import * as common from "../common/common";
import * as graphic from "./graphic";
import * as presets from "./presets";

/**
 * @typedef RenderParam
 * @global
 * @description An Object to specify prameters for rendering engine
 * @property {Number} [paper_width=375] Width of the paper
 * @property {Number} [paper_height=667] Height of the paper. If 0 is specified, the paper height is fit to its contents.
 * @property {float} [text_size=1.0] Text size as a ratio to default size. 0.9 means 10% smaller than default size.
 * @property {int} [base_font_size] Font size of the chord symbols.
 * @property {int} [title_font_size] Title font size
 * @property {int} [artist_font_size] Artist font size
 * @property {int} [x_offset] Margin of the left and right side of the paper.
 * @property {int} [x_offset_left=null] Margin of the right side of the paper. x_offset applies when null is specified.
 * @property {int} [x_offset_right=null] Margin of the left side of the paper. x_offset applies when null is specified.
 * @property {int} [y_offset] Margin of the top and bottom side of the paper.
 * @property {int} [y_offset_top=null] Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply.
 * @property {int} [y_offset_bottom=null] Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply
 * @property {int} [y_header_margin] Margin of the top y when header is shown (normally, firstpage)
 * @property {int} [y_title_offset] Top offset for title
 * @property {int} [y_subtitle_offset] Top offset for sub-title
 * @property {int} [y_artist_offset] Top offset for artist row
 * @property {int} [y_footer_offset] Bottom offset for footer
 */
var SR_RENDER_PARAM = {
    // Paper setting
    paper_width     : 375, // iPhone 8 etc, the top share as of 2020
    paper_height    : 667, // iPhone 8 etc, , the top share as of 2020
    text_size       : 1.0, // total canvas size will be [paper_width * text_size, paper_height*text_size]. NOTE that even the canvas size is scaled with text_size, any coordinate unit/size infomation inside the renderer stays the same and no need to be conscious about text_size value.
    pixel_ratio     : 2, // integer. null : use system default, this is not configurable in source as it is memoried in global variable.
    ncol            : 1, // Number of columns of score inside the paper
    nrow            : 1, // Number of rows of score inside the paper

    // Papaer Margins
    y_title_offset      : 5,
    y_subtitle_offset   : 19,
    y_artist_offset     : 19,
    y_header_margin     : 2, // Margin between header and first row
    y_offset            : 10,  // Without header
    x_offset            : 10,
    y_offset_top        : null,  // Without header. Use y_offset as a deafult.
    y_offset_bottom     : null,  // Without footer. Use y_offset as a deafult.
    x_offset_left       : null,  // Use x_offset as a default when null is specified.
    x_offset_right      : null,  // Use x_offset as a default when null is specified.
    y_footer_offset     : 15,

    // Font size settings
    reharsal_mark_font_size : 12,
    title_font_size         : 14,
    subtitle_font_size      : 12,
    artist_font_size        : 14, // 
    base_font_size          : 28, // Chord symbol font size
    
    // Font configs. Please refer to CSS font configs for the meaning of each variable. http://www.htmq.com/style/font.shtml .
    // Font size config is done separately above. Gives as array with priority order.  
    repeat_mark_font: [{
        "font-family": "'Times New Roman'", // make sure to include quation for font name.
        //"font-style": "italic",
        "font-weight": "bold"
    }],
    title_font: [{
        "font-weight": "bold"
    }],

    // Row Settings 
    /// Vertical settings
    row_height          : 28, // Basic height of the measure when no rs, mu and ml area is drawn
    base_body_height    : 28, // Height in body area (not applicable for RS area) used for simile and rest rendering. Recommended to keep this value irrespective of row_height.
    row_margin          : 4, // Margin between next y_base and lower edge of Measure Lower Area
    rs_area_height      : 24, // Rhythm Slashes Area // 
    rm_area_height      : 15, // Rehearsal Mark Area
    mu_area_height      : 15, // Measure Upper Area ( Repeat signs area )
    ml_row_height       : 10, // Measure Lower Area ( Lyrics etc.. )

    rm_margin_top       : 0, // Margin between MU and chord
    rm_margin_bottom    : 0, // Margin between MU and chord
    mu_margin_top       : 0, // Margin between MU and chord
    mu_margin_bottom    : 2, // Margin between MU and chord
    margin_top          : 0, // Margin between MU and chord
    margin_bottom       : 0, // Margin between MU and chord
    rs_margin_top       : 0, // Margin between chord and rythm slash
    rs_margin_bottom    : 10, // Margin below chord and rhthm slash
    ml_margin_top       : 0, // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
    ml_margin_bottom    : 0, // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea

    repeat_mark_y_margin: 2, // RS are upper/bootom and Repeat Marks( DalSegno, DaCapo, Fine, xX ) y margin in case RS are is shown.
    xtimes_mark_y_margin: 2, // Margin between body/RS are and "(x times)" mark.

    // Horizontal settings
    header_body_margin  : 2, // Margin between header and body (x-direction)
    body_footer_margin  : 2, // Margin between body and footer (x-direction)

    // Chord settings
    on_bass_style           : "right", // right|below
    on_bass_below_y_offset  : 0,
    
    // Rhythm Shalsh / Notes rendering settings
    balken_width            : 3,
    note_bar_length         : 24/4*3.5, // 3.5 times of interval is the conventional length
    note_flag_interval      : 5,
    rs_elem_min_room        : 5, // Minimum room after RS area elements in x-direction

    // Rendering optimization settings
    optimize_type                   : 4, // 0 : Constant room for each flexible element. 1: Uniform ratio (propotional to each fixed width of flexible element), 2: Evenly division of measures(force), 3: Evenly division of measures as much as possible
    opt2_room_dist                  : 1, // Room per elem assignment type for type 2. 0 : constant room, 1 : uniform ratio. Applicable for type2 and type4. 
    vertical_align                  : 1, // 1: Enable, 0: Disable
    vertical_align_intensity        : 0.9, // Vertical align intensity 0:No align, 1:Always align
    inner_vertical_align            : 1, // 1: Enable, 0: Disable
    inner_vertical_align_intensity  : 0.5, // Vertical align intensity 0:No align, 0.5 : align if no compression, 1:Always align
    master_elem_selection           : "default", // "chord" | "rs"
    scale_if_overlap                : 1, // 1 or 0
    background_color                : "white", // null will be transparent
    row_gen_mode                    : "default", // "dfault" | "constant_meas"
    row_gen_n_meas                  : 4
};

/**
 * Callback function when new canvas is requested by renderer.
 * @global
 * @callback canvasProvider
 * @return {(HTMLElement|Promise<HTMLElement>)} HTML canvas element
 */

export class DefaultRenderer extends Renderer {

    /**
     * Default Renderer class for HTML canvas element
     * @param {(HTMLElement|canvasProvider)} canvas - HTML canvas element to draw the image. Or, callback function which returns HTML canvas element.
     * @param {RenderParam} param - Parameter for the rednering
     */
    constructor(canvas, param) {
        super();

        if(typeof(canvas)=="function"){
            this.canvas_provider = canvas;
            this.canvas = null;
        }else{
            this.canvas = canvas;
            if(canvas.id === undefined){ canvas.id = common.guid; }
            this.canvas_provider = null;    
        }

        this.memCanvas = null; // Canvas on memory used for screening

        this.init_param = common.deepcopy(SR_RENDER_PARAM); // Default parameters

        // Overwrite with preset if specified
        if("preset" in param){
            let preset = param.preset;
            for (let key in presets[preset]) {
                this.init_param[key] = common.deepcopy(presets[preset][key]);
            }
        }
        // Overwrite
        for (let key in param) {
            this.init_param[key] = common.deepcopy(param[key]);
        }
        
        // Determine offset values in case some are omitted
        this.init_param.y_offset_top    =  this.init_param.y_offset_top    || this.init_param.y_offset;
        this.init_param.y_offset_bottom =  this.init_param.y_offset_bottom || this.init_param.y_offset;
        this.init_param.x_offset_left   =  this.init_param.x_offset_left   || this.init_param.x_offset;
        this.init_param.x_offset_right  =  this.init_param.x_offset_right  || this.init_param.x_offset;
        
        this.track = null;

        this.context = {
            pageidx: 0,
            current_canvas: null
        };
    }

    /**
     * Render the track
     * @param {Track} track - Track object passed from Parser.parse function 
     */
    render(track) {
        this.track = track;

        return graphic.PreloadJsonFont()
        .then(()=>{
            return this.render_impl(track);
        });
    }

    field_sum(arr,field){
        return arr.reduce( (acc,e)=>{ let obj={}; obj[field]=acc[field]+e[field]; return obj;} )[field];
    }

    optimize_type0(row_elements_list, x_width_info, total_width){

        let num_flexible_rooms = this.field_sum(x_width_info,"meas_num_flexible_rooms");
        let fixed_width = this.field_sum(x_width_info,"meas_fixed_width");
            
        let room_per_elem_constant = (total_width - fixed_width) / num_flexible_rooms; // Constant room for all room
            
        row_elements_list.forEach((e,mi)=>{
            let room_per_elem = room_per_elem_constant;
            e.renderprop.room_per_elem =
                new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
            e.renderprop.total_room = room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
        });
    }

    room_for_equal_ratio_divison(x_width_info, total_width, 
        num_meas, num_meas_to_consider){
        
        let num_flexible_rooms = this.field_sum(x_width_info,"meas_num_flexible_rooms");
        let fixed_width = this.field_sum(x_width_info,"meas_fixed_width");
        let fixed_width_flexbile_only = this.field_sum(x_width_info,"body_fixed_width");
        let fixed_width_others = fixed_width - fixed_width_flexbile_only;

        let room_per_elem_even_ratio_meas = [];
        let room_per_meas_even_ratio_meas = []; // room per measure for each meas in case even division of width for each measure
        // Used for optimize type = 1 
        let room_per_elem_uniform_ratio = (total_width - fixed_width_others) / fixed_width_flexbile_only;
        //console.log("S for type1 = " + room_per_elem_uniform_ratio);
        
        for(let mi=0; mi < num_meas; ++mi){
            let fixed_width_flexbile_only_details = common.deepcopy(x_width_info[mi]["body_fixed_width_details"]);

            let room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
            let room_per_meas = 0;
            for(let ii=0; ii< x_width_info[mi].meas_num_flexible_rooms; ++ii){
                room_per_elem[ii] = 
                    (room_per_elem_uniform_ratio-1) * fixed_width_flexbile_only_details[ii];
                room_per_meas += room_per_elem[ii];
            }
            room_per_elem_even_ratio_meas.push(room_per_elem);
            room_per_meas_even_ratio_meas.push(room_per_meas);
        }

        return {
            "S": room_per_elem_uniform_ratio,
            "room_per_elem":room_per_elem_even_ratio_meas, 
            "room_per_meas":room_per_meas_even_ratio_meas};
    }

    optimize_type1(row_elements_list, x_width_info, total_width,
        num_meas, num_meas_to_consider, reduced_meas_valid){
        
        let room_equal_ratio = this.room_for_equal_ratio_divison(x_width_info, total_width, 
            num_meas, num_meas_to_consider);
        
        row_elements_list.forEach((e,mi)=>{
            e.renderprop.room_per_elem = room_equal_ratio.room_per_elem[mi];
            e.renderprop.total_room = room_equal_ratio.room_per_meas[mi]; //room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
        });
    }

    room_per_meas_for_equal_divison(x_width_info, total_width, 
        num_meas, num_meas_to_consider){
        let room_per_meas_even_meas = []; // room per measure for each meas in case even division of width for each measure
        for(let mi=0; mi < num_meas; ++mi){
            room_per_meas_even_meas.push(
                total_width/num_meas_to_consider - 
                x_width_info[mi].meas_fixed_width);
        }
        return room_per_meas_even_meas;
    }

    optimize_type2(row_elements_list, x_width_info, total_width, 
        num_meas, num_meas_to_consider, reduced_meas_valid, room_per_elem_dist){

        // Equal division
        let room_per_meas_even_meas = this.room_per_meas_for_equal_divison(
            x_width_info, total_width,
            num_meas, num_meas_to_consider);

        row_elements_list.forEach((e,mi)=>{
            if(room_per_elem_dist == 0){
                // type 2_0
                let room_per_elem = room_per_meas_even_meas[mi] / x_width_info[mi].meas_num_flexible_rooms;
                e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
            }else if(room_per_elem_dist == 1){
                // type 2_1
                e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
                let Sk = (room_per_meas_even_meas[mi] / x_width_info[mi].body_fixed_width) + 1.0;
                for(let ife = 0; ife < x_width_info[mi].meas_num_flexible_rooms; ++ife){
                    e.renderprop.room_per_elem[ife] = (Sk-1.0) * x_width_info[mi].body_fixed_width_details[ife];
                }
            }
            e.renderprop.total_room = room_per_meas_even_meas[mi];
            x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
        });
            
        if(reduced_meas_valid && row_elements_list[0].align == "right")
            row_elements_list[0].renderprop.left_margin = total_width / 
                num_meas_to_consider * (num_meas_to_consider - num_meas);
    }

    optimize_type3(row_elements_list, x_width_info, total_width, 
        num_meas, num_meas_to_consider, reduced_meas_valid){
        // https://docs.google.com/document/d/1oPmUvAF6-KTsQrEovYJgMZSDqlztp4pL-XVs8uee7A4/edit?usp=sharing
        // Here alpha=1 case is filtered at the first IF statement, then we only consider the case
        // where room when optimize_type = 0 is positive.
        let num_flexible_rooms = this.field_sum(x_width_info,"meas_num_flexible_rooms");
        let fixed_width = this.field_sum(x_width_info,"meas_fixed_width");
        
        let room_per_meas_even_meas = this.room_per_meas_for_equal_divison(
            x_width_info, total_width,
            num_meas, num_meas_to_consider);
        
        let room_per_elem_constant = (total_width - fixed_width) / num_flexible_rooms; // Constant room for all room
        
        let alpha = null;

        if(room_per_elem_constant < 0){
            // No room in total.
            alpha = 1.0; // Type 0
        }else{
            alpha = 0.0;
            for(let mi=0; mi < num_meas; ++mi){
                if(room_per_meas_even_meas[mi] < 0){
                    let R0 = room_per_elem_constant * x_width_info[mi].meas_num_flexible_rooms;
                    let R2 = room_per_meas_even_meas[mi];
                    let alpha_dash = R2/(R2 - R0); // should be a positive value less than 1
                    alpha = Math.max(alpha, alpha_dash);
                }
            }
        }

        let row_total_width = 0;
        row_elements_list.forEach((e,mi)=>{
            let R0 = room_per_elem_constant * x_width_info[mi].meas_num_flexible_rooms;
            let R2 = room_per_meas_even_meas[mi];
            let room_per_elem = ( alpha * R0 + (1 - alpha) * R2 ) / x_width_info[mi].meas_num_flexible_rooms;
            e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
            e.renderprop.total_room = room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;

            row_total_width += x_width_info[mi].measure_width; 
        });
        if(reduced_meas_valid && row_elements_list[0].align == "right")
            row_elements_list[0].renderprop.left_margin = total_width - row_total_width;
        console.log("alpha = " + alpha);
    }

    optimize_type4(row_elements_list, x_width_info, total_width, 
        num_meas, num_meas_to_consider, reduced_meas_valid, opt2_room_dist){
        // https://docs.google.com/document/d/1oPmUvAF6-KTsQrEovYJgMZSDqlztp4pL-XVs8uee7A4/edit?usp=sharing
        // Here alpha=1 case is filtered at the first IF statement, then we only consider the case
        // where room when optimize_type = 0 is positive.

        let room_per_meas_even_meas = this.room_per_meas_for_equal_divison(
            x_width_info, total_width, 
            num_meas, num_meas_to_consider);
        
        let room_equal_ratio = this.room_for_equal_ratio_divison(
            x_width_info, total_width, 
            num_meas, num_meas_to_consider);

        let alpha = null;

        if(room_equal_ratio.S < 1){
            // No room in total.
            alpha = 1.0; // Type 1
        }else{
            alpha = 0.0;
            for(let mi=0; mi < num_meas; ++mi){
                if(room_per_meas_even_meas[mi] < 0){
                    let R1 = room_equal_ratio.room_per_meas[mi];
                    let R2 = room_per_meas_even_meas[mi];
                    let alpha_dash = R2/(R2 - R1); // should be a positive value less than 1
                    alpha = Math.max(alpha, alpha_dash);
                }
            }
        }

        let row_total_width = 0;
        row_elements_list.forEach((e,mi)=>{
            let R1 = room_equal_ratio.room_per_meas[mi];
            let R2 = room_per_meas_even_meas[mi];
            let room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
            let room_per_meas = 0;
            for(let ii=0; ii< x_width_info[mi].meas_num_flexible_rooms; ++ii){
                let f_ratio = x_width_info[mi].body_fixed_width_details[ii] / x_width_info[mi].body_fixed_width;
                if(opt2_room_dist == 0){
                    room_per_elem[ii] = ( alpha * R1 * f_ratio + (1 - alpha) * R2 / x_width_info[mi].meas_num_flexible_rooms );
                }else if(opt2_room_dist == 1){
                    room_per_elem[ii] = ( alpha * R1 * f_ratio + (1 - alpha) * R2 * f_ratio );
                }
                room_per_meas += room_per_elem[ii];
            }
            e.renderprop.room_per_elem = room_per_elem;
            e.renderprop.total_room = room_per_meas;
            x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;

            row_total_width += x_width_info[mi].measure_width; 
        });
        if(reduced_meas_valid && row_elements_list[0].align == "right")
            row_elements_list[0].renderprop.left_margin = total_width - row_total_width;
    }

    determine_rooms(param, reharsal_x_width_info, total_width){
        // Optimize width of each measure
        let row = 0;

        while (row < reharsal_x_width_info.length){
            let row_elements_list = reharsal_x_width_info[row][0];

            let x_width_info = reharsal_x_width_info[row][1]; // For number of measures

            let num_meas = row_elements_list.length;

            let num_meas_to_consider = num_meas;  // for type #2 and #3

            // In case right or left align is specified
            let reduced_meas_valid = false;
            if(row_elements_list[0].align != "expand" && row > 0){
                // find the last measure for which expand is applied, or fallback to #0.
                let rowdash;
                for(rowdash=row-1; rowdash>=0; --rowdash){
                    if(reharsal_x_width_info[rowdash][0][0].align == "expand") break;
                }
                if(rowdash<0) rowdash=0; // Fallback to #0 even it has right|left align
                reduced_meas_valid = (reharsal_x_width_info[rowdash][0].length > num_meas);
            
                if(reduced_meas_valid){
                    num_meas_to_consider = reharsal_x_width_info[rowdash][0].length;
                }
            }

            if( param.optimize_type == 0){
                this.optimize_type0(row_elements_list, x_width_info, total_width);
                row++;
            }else if( param.optimize_type == 1){
                this.optimize_type1(row_elements_list, x_width_info, total_width,
                    num_meas, num_meas_to_consider, reduced_meas_valid);
                row++;
            }else if(param.optimize_type == 2){
                // Equal division
                this.optimize_type2(row_elements_list, x_width_info, total_width, 
                    num_meas, num_meas_to_consider, reduced_meas_valid, param.opt2_room_dist);
                row++;          
            }else if(param.optimize_type == 3){
                // Combination of 2_0 and 0(fallback option when negative total room)
                this.optimize_type3(row_elements_list, x_width_info, total_width, 
                    num_meas, num_meas_to_consider, reduced_meas_valid);
                row++; 
            }else if(param.optimize_type == 4){
                // Combination of 2_0|2_1 and 1(fallback option when negative total room)
                this.optimize_type4(row_elements_list, x_width_info, total_width, 
                    num_meas, num_meas_to_consider, reduced_meas_valid, param.opt2_room_dist);
                row++; 
            }else{
                throw ("Invalid optimize type");
            }
        }
        
        if(param.vertical_align){
            let row = 0;
            
            while (row < reharsal_x_width_info.length){
                let num_meas = reharsal_x_width_info[row][0].length;

                // Group the rows with :
                //     1. the same number of measures from #row
                //     2. Having right align mark and having less than 1st row
                let same_nmeas_row_group = [];
                let rowdash;
                for(rowdash = row; rowdash < reharsal_x_width_info.length; ++rowdash){
                    if(reharsal_x_width_info[rowdash][0].length == num_meas){
                        same_nmeas_row_group.push(reharsal_x_width_info[rowdash]);
                    }else if(rowdash > 0 && 
                             (reharsal_x_width_info[rowdash][0][0].align != "expand") && 
                             reharsal_x_width_info[rowdash][0].length < num_meas){
                        same_nmeas_row_group.push(reharsal_x_width_info[rowdash]);
                    }else{
                        break; // only group the continuous rows with same number of measures
                    }
                }

                // Withing the group above, search for the groups for which alternation extension condition is met

                // Take maximum of each column, and check if total width wider than paper width
                // Make virtual combined row having : 
                //    Fixed width = max( fixed width of all rows in correspoding column )
                let max_measure_widths = new Array(num_meas).fill(0); 

                // In case the row with less measures than other rows exists,
                // mapping of measure index is not a simple 1:1 relation.
                // This function is to map the global measure index to local measure index
                let getMeasRefIndex = function(globalmi, row_elements_list, base_num_meas){
                    let mi_ref = globalmi;
                    if(row_elements_list.length < base_num_meas){
                        if(row_elements_list[0].align == "right"){
                            if(globalmi >= (base_num_meas - row_elements_list.length) )
                                mi_ref = globalmi - (base_num_meas - row_elements_list.length);
                            else
                                mi_ref = null; // Not corresponding meas exist
                        }else if(row_elements_list[0].align == "left"){
                            if(globalmi < row_elements_list.length)
                                mi_ref = globalmi;
                            else
                                mi_ref = null; // Not corresponding meas exist
                        }
                    }else if(row_elements_list.length > base_num_meas){
                        throw "Vertical align process error"; // Should be bug
                    }
                    return mi_ref;
                };

                // TODO : More clean code ...
                for(rowdash=0; rowdash<same_nmeas_row_group.length; ++rowdash){
                    let dammy_max_measure_widths = new Array(num_meas).fill(0);

                    let x_width_info = same_nmeas_row_group[rowdash][1];
                    let row_elements_list = same_nmeas_row_group[rowdash][0];
                    for(let mi=0; mi < num_meas; ++mi){
                        let mi_ref = getMeasRefIndex(mi, row_elements_list, num_meas);
                        if(mi_ref == null){
                            // corresponding measure does not exist : inherit current max value
                            dammy_max_measure_widths[mi] = max_measure_widths[mi];
                            continue;
                        }
                        dammy_max_measure_widths[mi] = Math.max(x_width_info[mi_ref].measure_width, max_measure_widths[mi]);
                    }

                    let dammy_total_max_measure_width = dammy_max_measure_widths.reduce((acc,e)=>acc+e); // This is always >= total_width except reduced measure with left/right align is under analysis.
                    
                    // Nomralize so that total width does not surpass total_width.
                    // In case only reduced measure row is under analysis and dammy_total_max_measure_width is less than total_width,
                    // do nothiing.  
                    for(let mi=0; mi < num_meas; ++mi)
                        dammy_max_measure_widths[mi] = dammy_max_measure_widths[mi] / 
                            dammy_total_max_measure_width * 
                            Math.min(total_width, dammy_total_max_measure_width);

                    // If there is at least one measure which does not meet alternate threshold, then do not include rowdash
                    let all_meets_thread = true;
                    if(rowdash == 0){
                        // First row is always fixed.
                    }else{
                        // For the case of 2 and more rows. Judge if combined rows meets the criteria.
                        for(let rowdash2 = 0; rowdash2 <= rowdash; ++rowdash2){
                            for(let mi=0; mi < num_meas; ++mi){
                                let mi_ref = getMeasRefIndex(mi, same_nmeas_row_group[rowdash2][0], num_meas);
                                if(mi_ref == null) continue;
                                // Calculate alter ratio for this measure
                                let alter_ratio = same_nmeas_row_group[rowdash2][1][mi_ref].measure_width / 
                                    dammy_max_measure_widths[mi];
                                //if(Math.abs(1.0 - alter_ratio) > alter_thresh){
                                if(alter_ratio < (1-param.vertical_align_intensity)){ // only check how much the width is narrowed. Expanding case is not checked.
                                    all_meets_thread = false;
                                    break;
                                }
                            }
                            if(all_meets_thread == false)
                                break;
                        }
                    }

                    if(all_meets_thread){
                        max_measure_widths = dammy_max_measure_widths;
                    } else{
                        break;
                    }
                }

                // Here rowdash means number of actually grouped rows
                let act_num_grouped_rows = rowdash;

                //console.log("max_fixed_widths :");
                //console.log(max_measure_widths);
               
                //let max_measure_widths = new Array(num_meas).fill(0);
                // room per froom with maximum fixed with only

                // Then, at last, calculate the rooms for each row and measure
                for(rowdash=0; rowdash<act_num_grouped_rows; ++rowdash){
                    let x_width_info = same_nmeas_row_group[rowdash][1];
                    let row_elements_list = same_nmeas_row_group[rowdash][0];
                    for(let mi=0; mi < num_meas; ++mi){
                        let mi_ref = getMeasRefIndex(mi, row_elements_list, num_meas);
                        if(mi_ref == null) continue;
                        let m = row_elements_list[mi_ref];
                        let intra_meas_room_dist = 1;
                        if(intra_meas_room_dist==0){
                            // Type 0 : This is no good appropach as all waste the decision in previous stage
                            let room_per_elem = (max_measure_widths[mi] - x_width_info[mi_ref].meas_fixed_width) /
                                x_width_info[mi_ref].meas_num_flexible_rooms; 
                            
                            m.renderprop.room_per_elem = new Array(x_width_info[mi_ref].meas_num_flexible_rooms).fill(room_per_elem);
                        }else if(intra_meas_room_dist==1){
                            // Type 1 : Proportional to fixed width
                            let delta_total_room = (max_measure_widths[mi] - x_width_info[mi_ref].measure_width);

                            m.renderprop.room_per_elem = m.renderprop.room_per_elem.map((r,ii)=>{
                                let f_ratio = x_width_info[mi_ref].body_fixed_width_details[ii] / x_width_info[mi_ref].body_fixed_width;
                                return r + delta_total_room * f_ratio;
                            });
                        }else if(intra_meas_room_dist==2){
                            // Constant offset approach
                            let delta = (max_measure_widths[mi] - x_width_info[mi_ref].measure_width) /
                                x_width_info[mi_ref].meas_num_flexible_rooms;

                            m.renderprop.room_per_elem = m.renderprop.room_per_elem.map(r=>r+delta);
                            
                        }
                        m.renderprop.total_room = (max_measure_widths[mi] - x_width_info[mi_ref].meas_fixed_width);
                        m.renderprop.measure_width = max_measure_widths[mi];
                        m.renderprop.meas_fixed_width = x_width_info[mi_ref].meas_fixed_width; // Actually this is already set
                        m.renderprop.body_fixed_width = x_width_info[mi_ref].body_fixed_width;
                        m.renderprop.meas_num_flexible_rooms = x_width_info[mi_ref].meas_num_flexible_rooms;
                    }
                }
                // Set left margin in case it is needed.
                for(rowdash=0; rowdash<act_num_grouped_rows; ++rowdash){
                    let row_elements_list = same_nmeas_row_group[rowdash][0];
                    let row_total_width = 0;
                    for(let mi=0; mi < row_elements_list.length; ++mi){
                        row_total_width += max_measure_widths[mi + (max_measure_widths.length-row_elements_list.length)];
                    }
                    let m = row_elements_list[0];
                    if(m.align == "right"){
                        m.renderprop.left_margin =  total_width - row_total_width;
                    }
                }

                row += act_num_grouped_rows;
                if(act_num_grouped_rows <= 0){
                    throw "Something wrong with the code";
                }
            }
        }

        if(param.inner_vertical_align){
            // Further align inside the measure
            let row = 0;
            while (row < reharsal_x_width_info.length){
                let row_elements_list = reharsal_x_width_info[row][0];
                let x_width_info = reharsal_x_width_info[row][1]; // For number of measures
                row_elements_list.forEach((m,mi)=>{
                    let ex = x_width_info[mi].all_fixed_width_details;
                    let W = m.renderprop.measure_width; // Total measure width
                    let L = m.renderprop.meas_num_flexible_rooms; // Num flex elements
                    let flex_n = 0;
                    let local_x = 0;
                    let flex_x_cand  = new Array(L);
                    let room_force = new Array(L);
                    let flex_ref_x = new Array(L);
                    ex.forEach((exi, i)=>{
                        if(exi.type == "fixed"){
                            local_x += exi.f;
                        }else{
                            flex_ref_x[flex_n] = W / L * flex_n; // Reference position
                            if(flex_n == 0){
                                flex_x_cand[flex_n] = Math.max(local_x, flex_ref_x[flex_n]);
                            }else{
                                flex_x_cand[flex_n] = flex_ref_x[flex_n];
                                room_force[flex_n-1] = flex_x_cand[flex_n] - local_x;
                            }
                            local_x = flex_x_cand[flex_n] + exi.f;
                            ++flex_n;
                        }
                    });
                    room_force[L-1] = W - local_x;
                    // validation
                    // eslint-disable-next-line no-constant-condition
                    if(false){
                        console.log("Inner vertical vlaidation : ");
                        console.log("Total measure width : " + (ex.map(e=>e.f).reduce((p,v)=>p+v)+room_force.reduce((p,v)=>p+v) )+ " vs " + W);
                        console.log("Total fixed width : " + ex.map(e=>e.f).reduce((p,v)=>p+v) + " vs " + m.renderprop.meas_fixed_width);
                        console.log("Body fixed width : " + ex.filter(e=>e.type=="flex").map(e=>e.f).reduce((p,v)=>p+v) + " vs " + m.renderprop.body_fixed_width);
                        console.log("Total room : " + room_force.reduce((p,v)=>p+v) + " vs " + m.renderprop.total_room);
                    }

                    let org_room = m.renderprop.room_per_elem;


                    // Serach maximum compressed element after forncing
                    let Tc_min = 1000000;
                    let Tc_max = -1000000;
                    let Tc_org_min = 1000000;
                    let Tc_org_max = -1000000;
                    for(let l = 0; l < L; ++l){
                        let f = x_width_info[mi].body_fixed_width_details[l];
                        let c = ( room_force[l] + f ) / f;
                        Tc_min = Math.min(c, Tc_min);
                        Tc_max = Math.max(c, Tc_max);
                        let corg = ( org_room[l] + f ) / f;
                        Tc_org_min = Math.min(corg, Tc_org_min);
                        Tc_org_max = Math.max(corg, Tc_org_max);
                        
                    }

                    //let Tc = 1.0 - param.inner_vertical_align_intensity; 
                    let HALF_INT_COMP = 1.0; // S
                    let ZERO_INT_COMP = Math.max(Tc_max, Tc_org_max); // L
                    //let Tc = HALF_INT_COMP * ( 1/param.inner_vertical_align_intensity - 1);
                    let denom = (ZERO_INT_COMP - 2 * HALF_INT_COMP);
                    let c = HALF_INT_COMP / denom;
                    let b = -HALF_INT_COMP * ZERO_INT_COMP / denom;
                    let a = ZERO_INT_COMP * HALF_INT_COMP * (ZERO_INT_COMP - HALF_INT_COMP) / denom / denom;
                    let Tc = a/(Number(param.inner_vertical_align_intensity)+c)+b;

                    // Determining optimum alpha
                    let max_widened = -10000000;
                    let min_narrowed = 1000000;
                    for(let l = 0; l < L; ++l){
                        let f = x_width_info[mi].body_fixed_width_details[l];
                        let rorg = org_room[l];
                        let rforce = room_force[l];
                        let diff = rforce - rorg;
                        diff = Math.abs(diff) < 0.1 ? Math.sign(diff)*0.001 : diff; // To avoid 0 division
                        let alpha_d = ((Tc - 1.0) * f - rorg) / diff;
                        //console.log("Inner vertical alignment : " + diff.toFixed(2) + "/" +alpha_d.toFixed(2));
                        // To cater for 
                        if(diff >= 0){
                            // widended
                            max_widened = Math.max(max_widened, alpha_d);
                        }else{
                            // narrowened
                            min_narrowed = Math.min(min_narrowed, alpha_d);
                        }
                    }

                    //console.log("Max widended alpha = " + max_widened + ", Min narrowened alpha = " + min_narrowed);

                    let alpha = 1.0;
                    if(max_widened > min_narrowed){
                        // Cannot not meet requirement for all elements, end up with alpha = 0.0 : Do nothing
                        alpha = 0.0;
                        //console.log("Inner vertical alignment : not all meets requirement : alpha = " + alpha.toFixed(2));
                    }else{
                        alpha = Math.max(0, Math.min(min_narrowed, 1));
                        //console.log("Inner vertical alignment : all meets requirement : alpha = " + alpha.toFixed(2));
                    }

                    for(let l = 0; l < L; ++l){
                        m.renderprop.room_per_elem[l] = alpha * room_force[l] + (1 - alpha) * org_room[l];

                        let c = (x_width_info[mi].body_fixed_width_details[l] + m.renderprop.room_per_elem[l]) /
                            x_width_info[mi].body_fixed_width_details[l];
                        //console.log("c["+l+"]="+c.toFixed(2));
                    }
                });
                ++row;
            }
        }
    }

    merge_param(param, additional_param, takemax=false){
        for(const [param_key, param_value] of Object.entries(additional_param)){
            if(param_key.includes("margin") && takemax){
                param[param_key] = Math.max(param[param_key], param_value);
            }else{
                param[param_key] = param_value;
            }
        }
    }

    drawheader(canvas, param, stage, x, width, track){
        let max_header_height = 0;

        // Title
        if(track.getVariable("TITLE")){
            let ri = graphic.CanvasText(
                canvas,
                x + width / 2,
                param.y_title_offset,
                track.getVariable("TITLE"),
                param.title_font_size,
                "ct",
                null, stage==1, {font:param.title_font}
            );

            max_header_height = Math.max(max_header_height, param.y_title_offset + ri.height);

            this.hitManager.add(canvas, ri.bb, track.getVariableObject("TITLE"));
        }

        // Sub Title
        if (track.getVariable("SUB_TITLE")){
            let ri = graphic.CanvasText(
                canvas,
                x + width / 2,
                param.y_subtitle_offset,
                track.getVariable("SUB_TITLE"),
                param.subtitle_font_size,
                "ct",
                null, stage==1
            );

            max_header_height = Math.max(max_header_height, param.y_subtitle_offset + ri.height);

            this.hitManager.add(canvas, ri.bb, track.getVariableObject("SUB_TITLE"));
        }

        // Artist
        if(track.getVariable("ARTIST")){
            let ri = graphic.CanvasText(
                canvas,
                x + width,
                param.y_artist_offset,
                track.getVariable("ARTIST"),
                param.artist_font_size,
                "rt",
                null, stage==1
            );

            max_header_height = Math.max(max_header_height, param.y_artist_offset + ri.height);

            this.hitManager.add(canvas, ri.bb, track.getVariableObject("ARTIST"));
        }

        return max_header_height;
    }

    async render_impl(track) {

        let param =  common.deepcopy(this.init_param);

        // firstly, merge global PARAM.
        if(track.getVariable("PARAM")){
            this.merge_param(param, track.getVariable("PARAM"), false); // Merge to defaul param
        }

        let page_width = param.paper_width / param.text_size / param.ncol;
        var page_content_width = page_width - ( param.x_offset_left + param.x_offset_right );

        var show_footer = track.getVariable("SHOW_FOOTER") == "YES";

        // Music context
        var music_context = {
            accidental_info: {},
            key_info: {},
            time_info: {},
            tie_info: {
                rs_prev_coord: null,
                rs_prev_draw_scale: 1.0,
                rs_prev_meas: null,
                rs_prev_has_tie: false,
                rs_prev_tie_paper: null,
                prev_has_tie: false
            },
            pos_in_a_measure: 0,

            cumal_block_duration: 0, // Culmative duration of this blaken block.
            first_li: null, // length indicator of the first element amongcurrently stored elements. This shall be non-null other than first state
            in_tuplet: false // tuplet mode or not
        };

        let meas_row_list = [];
        // Firstly, just split with new lines
        let accum_block_id = 0;
        let meas_row = [];
        let meas_row_rg_ids = [];
        let meas_row_block_ids = [];

        let reharsal_groups = track.childNodes.filter(e=>e instanceof common.RehearsalGroup);

        if(param.row_gen_mode == "default"){
            for (let i = 0; i < reharsal_groups.length; ++i) {
                let rg = reharsal_groups[i];
                let blocks = rg.childNodes.filter(e=>e instanceof common.Block);
                for (var bi = 0; bi < blocks.length; ++bi) {
                    var block_measures = blocks[bi].childNodes.filter(e=>e instanceof common.Measure);
                    for (var ml = 0; ml < block_measures.length; ++ml) {
                        var m = block_measures[ml];
                        if(m.raw_new_line){
                            meas_row_list.push({
                                meas_row: meas_row,
                                meas_row_rg_ids: meas_row_rg_ids,
                                meas_row_block_ids: meas_row_block_ids
                            });
                            meas_row = [];
                            meas_row_rg_ids = [];
                            meas_row_block_ids = [];
                        }
                        meas_row.push(m);
                        meas_row_rg_ids.push(i);
                        meas_row_block_ids.push(accum_block_id);
                    }
                    if(meas_row.length > 0){
                        meas_row_list.push({
                            meas_row: meas_row,
                            meas_row_rg_ids: meas_row_rg_ids,
                            meas_row_block_ids: meas_row_block_ids
                        }); 
                        meas_row = [];
                        meas_row_rg_ids = [];
                        meas_row_block_ids = [];
                    }
                    accum_block_id++;
                    
                }
            }
            // If there is inline rehearsal group, then combine the last row of the 
            // last rehearsal group  and first row of the rehearsal group
            // tmp variable : shallow copy of meas_row_list
            let meas_row_list_inv = meas_row_list.slice().reverse();
            for (let i = 0; i < reharsal_groups.length; ++i) {
                let rg = reharsal_groups[i];
                if(rg.inline){
                    let dst_idx = meas_row_list_inv.findIndex(e=>{return e.meas_row_rg_ids.includes(i-1);});
                    dst_idx = meas_row_list.length - 1 - dst_idx; // Convert to index for non-inversed array
                    let src_idx = meas_row_list.findIndex(e=>{return e.meas_row_rg_ids.includes(i);});
                    let dst = meas_row_list[dst_idx];
                    let src = meas_row_list[src_idx];
                    dst.meas_row = dst.meas_row.concat(src.meas_row);
                    dst.meas_row_rg_ids = dst.meas_row_rg_ids.concat(src.meas_row_rg_ids);
                    dst.meas_row_block_ids = dst.meas_row_block_ids.concat(src.meas_row_block_ids);
                    meas_row_list.splice(src_idx, 1); // Delete the first row
                    meas_row_list_inv = meas_row_list.slice().reverse();
                }
            }
        }else if(param.row_gen_mode == "constant_n_meas"){
            for (let i = 0; i < reharsal_groups.length; ++i) {
                let rg = reharsal_groups[i];
                let blocks = rg.childNodes.filter(e=>e instanceof common.Block);
                for (let bi = 0; bi < blocks.length; ++bi) {
                    let block_measures = blocks[bi].childNodes.filter(e=>e instanceof common.Measure);
                    for (let ml = 0; ml < block_measures.length; ++ml) {
                        let m = block_measures[ml];
                        meas_row.push(m);
                        meas_row_rg_ids.push(i);
                        meas_row_block_ids.push(accum_block_id);
                        if(meas_row.length == param.row_gen_n_meas){
                            meas_row_list.push({
                                meas_row: meas_row,
                                meas_row_rg_ids: meas_row_rg_ids,
                                meas_row_block_ids: meas_row_block_ids
                            });
                            meas_row = [];
                            meas_row_rg_ids = [];
                            meas_row_block_ids = [];
                        }
                    }
                }
            }
            if(meas_row.length > 0){
                meas_row_list.push({
                    meas_row: meas_row,
                    meas_row_rg_ids: meas_row_rg_ids,
                    meas_row_block_ids: meas_row_block_ids
                }); 
                meas_row = [];
                meas_row_rg_ids = [];
                meas_row_block_ids = [];
            }
        }

        // Make y-strack elements, and mark the rehearsal mark position
        var y_stacks = [];

        let next_reharsal_group_index = 0;
        meas_row_list.forEach((e,i)=>{
            // eslint-disable-next-line no-constant-condition
            while(true){
                let meas_index = e.meas_row_rg_ids.findIndex(e=>e==next_reharsal_group_index);
                if(meas_index < 0) break;
                e.meas_row[meas_index].renderprop.rg_from_here = reharsal_groups[next_reharsal_group_index];
                ++next_reharsal_group_index;
            }

            let prev_measures = i > 0 ? meas_row_list[i-1].meas_row : null;
            let prev_measure = prev_measures ? prev_measures[prev_measures.legnth-1] : null;

            let next_measures = i < meas_row_list.length-1 ? meas_row_list[i+1].meas_row : null;
            let next_measure = next_measures ? next_measures[0] : null;

            // Determine params to be applied for this. 
            // As of now, 
            var param_for_row = common.deepcopy(param); 
            let param_for_row_alt = false;
            e.meas_row.forEach(m=>{
                let mparam = m.getVariable("PARAM");
                if(mparam){
                    if(!param_for_row_alt){
                        this.merge_param(param_for_row, common.deepcopy(mparam), false); // Overwrite 
                        param_for_row_alt = true;
                    }else{
                        this.merge_param(param_for_row, common.deepcopy(mparam), true); // Update 
                    }
                    
                }
            });
                        
            y_stacks.push({
                type: "meas",
                height: 0,
                cont: e.meas_row,
                rg_ids : e.meas_row_rg_ids,
                block_ids : e.meas_row_block_ids,
                nm: next_measure,
                pm: prev_measure,
                param: param_for_row,
            });
        });

        // ---------------------
        // Stage 1 : Screening
        // ---------------------
        if (!this.memCanvas) {
            // Canvas on memory for screening
            // TODO : Canvas height 400 is enough ?
            this.memCanvas = document.createElement("canvas");
            graphic.SetupHiDPICanvas(
                this.memCanvas,
                param.paper_width / param.text_size,
                400 / param.text_size, /// 400 is dammy
                param.pixel_ratio,
                param.text_size
            );
        }

        let yse = y_stacks;

        let y_base_screening = 0;

        let headerHeight = this.drawheader(this.memCanvas, param, 1, 0, 100, track); // x position, width is dammy, as only height information is important.
        if(headerHeight > 0){
            y_base_screening += headerHeight;
            y_base_screening += headerHeight > 0 ? param.y_header_margin : 0;
        }else{
            y_base_screening += param.y_offset_top;
        }

        let dammy_music_context = common.deepcopy(music_context); // Maybe not required ?

       let current_accum_block_id = 0;
       let reharsal_x_width_info = [];

       for (let pei = 0; pei < yse.length; ++pei) {
            // Loop each y_stacks

            if (yse[pei].type == "titles") continue;

            //let x = yse[pei].param.x_offset_left;

            if(!yse[pei].block_ids.includes(current_accum_block_id)){
               // Per block optimization
               this.determine_rooms(yse[pei].param, reharsal_x_width_info, page_content_width);
               
               current_accum_block_id = yse[pei].block_ids[0]; // First block ID is the reference block id
               reharsal_x_width_info = [];
           }
           
           var row_elements_list = yse[pei].cont;
   
           // Screening music contexts and determine grouping in body elements
           // For each measure in this row
           for (let ml = 0; ml < row_elements_list.length; ++ml) {
               // measure object
               let m = row_elements_list[ml];
   
               let elements = this.classifyElements(m); // Too much call of calssify elements.
   
               // Grouping body elements which share the same balken
               let geret = this.grouping_body_elemnts_enh(elements.body);
   
               m.renderprop.body_grouping_info = geret;
           }

           // y-screening is done in stage 2 as well : TODO : Make it once
           // Do it in the dammy position y = 0;
           var yprof = this.screening_y_areas(
               row_elements_list, 0, yse[pei].param, 
               yse[pei].cont[0].getVariable("SHOW_STAFF"), 
               yse[pei].cont[0].getVariable("REHARSAL_MARK_POSITION")=="Inner");
            
            // yprof.end.y means the row total height
            y_base_screening += yprof.end.y;

           // Screening x elements and determine the rendering policy for x-axis.
           var x_width_info = this.screening_x_areas(
               track,
               0, // dammy x position as it is not a matter
               this.memCanvas,
               row_elements_list,
               yse[pei].pm,
               yse[pei].nm,
               yprof,
               yse[pei].param,
               dammy_music_context
           );
           reharsal_x_width_info.push([row_elements_list, x_width_info]);

           if(pei == yse.length - 1){
               // Per block optimization
               this.determine_rooms(yse[pei].param, reharsal_x_width_info, page_content_width);
           }
       }
       y_base_screening += param.y_offset_bottom; // Here y_base_screening means the height of the total score if single page applied.
       if(show_footer) y_base_screening += param.y_footer_offset;

       // Release memCanvas
       graphic.ReleaseCanvas(this.memCanvas);
       this.memCanvas = null;
       
        // ----------------------
        // Stage 2 : Rendering
        // ----------------------

        this.hitManager.setGlobalScale(param.text_size, param.text_size);

        let page_height = param.paper_height > 0 ? 
            param.paper_height / param.text_size / param.nrow :
            y_base_screening;

        let pageOffset = (pageidx)=>{
            let r = Math.floor( pageidx / param.ncol ) % param.nrow;
            let c = pageidx % param.ncol;
            //let page_width  = param.paper_width / param.text_size / param.ncol;
            //let page_height = param.paper_height / param.text_size / param.nrow;
            return {x: page_width * c, y: page_height * r};
        };

        let page_origin = param.paper_height > 0 ? pageOffset(this.context.pageidx) : {x:0, y:0};

        if(this.context.pageidx % (param.ncol * param.nrow) == 0){
            let canvas = this.canvas;
            if (canvas == null) {
                canvas = await this.canvas_provider();
            }
            graphic.SetupHiDPICanvas(
                canvas,
                param.paper_width / param.text_size,
                (param.paper_height > 0 ? param.paper_height/param.text_size : y_base_screening),
                param.pixel_ratio,
                param.text_size
            );

            if(param.background_color)
                graphic.CanvasRect(canvas, 0, 0, 
                    param.paper_width / param.text_size, 
                    (param.paper_height > 0 ? param.paper_height/param.text_size : y_base_screening), 
                    param.background_color);
            
            this.context.current_canvas = canvas;
        }

        var y_base = page_origin.y;

        let max_header_height = this.drawheader(this.context.current_canvas, param, 2, page_origin.x + param.x_offset_left, page_content_width, track);
        if(max_header_height > 0){
            y_stacks.push({ type: "titles", height: (max_header_height + param.y_header_margin) });
            y_base += (max_header_height + param.y_header_margin);
        }else{
            y_base += param.y_offset_top;
        }

        let headerH = y_base - page_origin.y;
        this.hitManager.add(this.context.current_canvas, 
            new graphic.BoundingBox(0, page_origin.y - Math.max(0, 2-headerH),
            page_width, Math.max(2, headerH)),
            new common.GenericRow("HEADER", null));

        let pages = [this.context.current_canvas];

        for (let pei = 0; pei < yse.length; ++pei) {
            // Loop each y_stacks
            // eslint-disable-next-line no-empty
            if (yse[pei].type == "titles") {

            } else if (yse[pei].type == "meas") {
                let row_elements_list = yse[pei].cont;
                
                let ylimit = this.canvas_provider != null
                    ? page_origin.y + page_height - yse[pei].param.y_offset_bottom - (show_footer ? yse[pei].param.y_footer_offset : 0)
                    : null;
                
                let r = this.render_measure_row_simplified(
                    track,
                    page_origin.x + param.x_offset_left,
                    this.context.current_canvas,
                    row_elements_list,
                    yse[pei].pm,
                    yse[pei].nm,
                    y_base,
                    yse[pei].param,
                    yse[pei].cont[0].getVariable("REHARSAL_MARK_POSITION")=="Inner",
                    ylimit,
                    music_context
                );
                if (!r) {
                    // Paper height is too low and even single row is not fit in
                    if(y_base == page_origin.y + yse[pei].param.y_offset_top){
                        throw "Paper height is too short to fit in single row";
                    }

                    // increment the page
                    ++this.context.pageidx;
                    page_origin = pageOffset(this.context.pageidx);
                    y_base = page_origin.y + yse[pei].param.y_offset_top;

                    if(this.context.pageidx % (param.ncol * param.nrow) == 0){
                        this.hitManager.commit(this.context.current_canvas);
                        this.context.current_canvas = await this.canvas_provider();
                        graphic.SetupHiDPICanvas(
                            this.context.current_canvas,
                            yse[pei].param.paper_width / param.text_size,
                            yse[pei].param.paper_height / param.text_size,
                            param.pixel_ratio,
                            param.text_size
                        );
                        
                        if(param.background_color)
                            graphic.CanvasRect(this.context.current_canvas, 0, 0, 
                                param.paper_width / param.text_size, 
                                param.paper_height / param.text_size, 
                                param.background_color);
                    }

                    pages.push(this.context.current_canvas);

                    // try again next page
                    pei = pei - 1;
                } else {
                    if(r.rm_detected){
                        let rb = [row_elements_list[0], row_elements_list[row_elements_list.length-1]];
                        if(row_elements_list[0].renderprop.rg_from_here) rb[0] = row_elements_list[0].renderprop.rg_from_here;
                        this.hitManager.add(this.context.current_canvas, 
                            new graphic.BoundingBox(0, y_base, param.paper_width / param.text_size, r.mu_y - y_base),
                            new common.GenericRow("RM", rb));
                    }
                    this.hitManager.add(this.context.current_canvas, 
                        new graphic.BoundingBox(0, r.mu_y, param.paper_width / param.text_size, r.y_base - r.mu_y),
                        new common.GenericRow("BODY", [row_elements_list[0], row_elements_list[row_elements_list.length-1]]));
                    y_base = r.y_base;
                }
            }
        }

        if(show_footer){
            let songname = null;
            let title = track.getVariable("TITLE");
            let artist = track.getVariable("ARTIST");
            if(title){
                songname = title;
                if(artist) songname += "/" + artist;
            }

            //var score_width = param.paper_width / param.text_size / param.ncol;
            pages.forEach((canvas,pageidx)=>{
                // Page number footer
                page_origin = pageOffset(pageidx);

                let footerstr =
                    (songname ? (songname + " - ") : "") + (pageidx + 1) + " of " + pages.length;
                graphic.CanvasText(
                    canvas,
                    page_origin.x + page_width / 2,
                    page_origin.y + page_height - param.y_footer_offset, 
                    footerstr,
                    12,
                    "ct"
                );
            });
        }

        // Increment for next session(if any)
        ++this.context.pageidx;
        
        this.hitManager.commit(this.context.current_canvas);

        return {
            pages: pages.length,
            height: page_height
        };
    }

    screening_y_areas(row_elements_list, y_base, param, show_staff, 
        inner_reharsal_mark){

        var ycomps = ["rm", "mu","body","rs","ml","irm","end"];
        var yprof = {
            rm:    {detected:false, height: param.rm_area_height, margin:[param.rm_margin_top,  param.rm_margin_bottom]}, // Rhearsal mark if any
            mu:    {detected:false, height: param.mu_area_height, margin:[param.mu_margin_top,  param.mu_margin_bottom]},
            body:  {detected:true,  height: param.row_height,     margin:[param.margin_top,     param.margin_bottom]},
            rs:    {detected:false, height: param.rs_area_height, margin:[param.rs_margin_top,  param.rs_margin_bottom]},
            ml:    {detected:false, height: param.ml_row_height,  margin:[param.ml_margin_top,  param.ml_margin_bottom]},
            irm:   {detected:true,  height: param.row_margin,     margin:[0, 0]}, // Virtual row represeinting fixed inter-row margin
            end:   {detected:true,  height: 0,                    margin:[0, 0]} // Vitrual row representing start of end of row = start of next row
        };

        var lyric_rows = 0;

        //var draw_5line = false;
        if (show_staff == "YES") {
            yprof.rs.detected = true; 
        }

        // Screening of y-axis areas
        let rg_mark_detected = false;
        let fixed_mu_elem_detected = false;
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            var m = row_elements_list[ml];
            if(m.renderprop && 
               m.renderprop.rg_from_here &&
               m.renderprop.rg_from_here.name != "") // Anonymous rehearsal group is not rendered
               rg_mark_detected = true;

            for (let ei = 0; ei < m.childNodes.length; ++ei) {
                var e = m.childNodes[ei];
                if (
                    e instanceof common.ToCoda ||
                    e instanceof common.DalSegno ||
                    e instanceof common.DaCapo ||
                    e instanceof common.Fine
                ){
                    // Provisinally, judged as mu element. In case of RS detected, it will goes to body area.
                    yprof.mu.detected = true;
                } else if(
                    e instanceof common.Coda ||
                    e instanceof common.Segno ||
                    e instanceof common.Comment ||
                    e instanceof common.LoopIndicator
                ){
                    yprof.mu.detected = true;
                    fixed_mu_elem_detected = true;
                } else if (e instanceof common.MeasureBoundary) {
                    yprof.ml.detected =
                    yprof.ml.detected ||
                        (e.times != null && (e.ntimes || e.times != 2));
                } else if (e instanceof common.Chord) {
                    yprof.rs.detected |= e.note_group_list !== null;
                    if(e.lyric){
                        yprof.ml.detected = true;
                        lyric_rows = Math.max(
                            e.lyric.lyric.split("/").length,
                            lyric_rows
                        );
                    }
                    if(e.exceptinal_comment){
                        yprof.mu.detected = true;
                        fixed_mu_elem_detected = true;
                    }
                } else if (e instanceof common.Lyric) {
                    throw "Illegal parsing";
                }
            }
        }
        if (show_staff == "NO") {
            yprof.rs.detected = false;
        }

        // Adjust mu area elements in case of RS area detected
        if(yprof.rs.detected){
            if(!fixed_mu_elem_detected){
                yprof.mu.detected = false; // Reset it !
            }
        }

        if(rg_mark_detected){
            if(inner_reharsal_mark){
                yprof.mu.detected = true; // In MU area
            }else{
                yprof.rm.detected = true; // dedecated rehardsal mark region
            }
        }

        // Calculate yposition  for each area
        for(let i = 0; i < ycomps.length; ++i){
            let name = ycomps[i];
            let prev = i>0 ? ycomps[i-1] : null;
            // Here y is the start of body element, not upper edge
            yprof[name].y = (i==0 ? y_base : 
                yprof[prev].y - yprof[prev].margin[0]
                + yprof[prev].whole_height
                + yprof[name].margin[0]);
            if(!yprof[name].detected){
                yprof[name].whole_height = 0;
            }else{
                if(name == "ml"){
                    yprof[name].whole_height = Math.max(1, lyric_rows) * yprof[name].height 
                        + yprof[name].margin[0] + yprof[name].margin[1]; // multiplied by lyric ros
                }else{
                    yprof[name].whole_height = yprof[name].height + yprof[name].margin[0] + yprof[name].margin[1];
                }
            }
        }
       
        return yprof;
    }

    screening_x_areas(
        track,
        x,
        paper,
        row_elements_list,
        prev_measure,
        next_measure,
        yprof,
        param,
        music_context
    ){
        var transpose = track.getVariable("TRANSPOSE");
        var half_type = track.getVariable("KEY_TYPE");
        var key = track.getVariable("KEY");

        let dammy_rs_area_height = 24; // any value is ok

        // Determine the width of each measure
        var x_width_info = []; // for number of measures

        for (let ml = 0; ml < row_elements_list.length; ++ml) {

            // Reset music context
            music_context.pos_in_a_measure = 0; // reset
            music_context.cumal_block_duration = 0;
            music_context.first_li = null;
            music_context.in_tuplet = false;
            // TODO : consider key infomration
            // TODO : consider tie
            // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
            music_context.accidental_info = new Array(128).fill(0);

            // measure object
            let m = row_elements_list[ml];
            let meas_fixed_width = 0;
            var meas_num_flexible_rooms = 0;
            var all_fixed_width_details = [];
            var elements = this.classifyElements(m);
            elements.header.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
                    var ne = pm ? pm.childNodes[pm.childNodes.length - 1] : null;
                    let r = this.draw_boundary_simplified(
                        "begin",
                        ne,
                        e,
                        ml==0, //m.raw_new_line,
                        paper,
                        x,
                        0,
                        dammy_rs_area_height, // any value is OK
                        dammy_rs_area_height,
                        param,
                        false
                    );
                    meas_fixed_width += r.width;
                    all_fixed_width_details.push({type:"fixed", f:r.width});
                    e.renderprop = { w: r.width };
                } else if (e instanceof common.Time) {
                    let w = 12;
                    meas_fixed_width += w;
                    all_fixed_width_details.push({type:"fixed", f:w});
                    e.renderprop = { w: w };
                }
            });

            meas_fixed_width += param.header_body_margin;
            all_fixed_width_details.push({type:"fixed",f:param.header_body_margin});

            var rberet = this.render_body_elements(
                false, x, elements, 
                param, music_context, 
                yprof, 
                paper, 0, 
                0 /*meas_start_x*/, 
                m,
                1,
                transpose,
                half_type,
                key,
                0,
                0
            );
            meas_fixed_width += rberet.fixed_width;
            meas_num_flexible_rooms += rberet.num_flexible_rooms;
            all_fixed_width_details = all_fixed_width_details.concat(rberet.fixed_width_details);

            meas_fixed_width += param.body_footer_margin;
            all_fixed_width_details.push({type:"fixed",f:param.body_footer_margin});

            // Draw footer
            elements.footer.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var nm =
                        ml == row_elements_list.length - 1
                            ? next_measure
                            : row_elements_list[ml + 1];
                    var ne = nm ? nm.childNodes[0] : null;
                    let r = this.draw_boundary_simplified(
                        "end",
                        e,
                        ne,
                        ml == row_elements_list.length-1, //nm ? nm.raw_new_line : false,
                        paper,
                        x,
                        0,
                        dammy_rs_area_height,
                        dammy_rs_area_height,
                        param,
                        false
                    );

                    e.renderprop = { w: r.width };
                    meas_fixed_width += r.width;
                    all_fixed_width_details.push({type:"fixed", f:r.width});
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

            x_width_info.push({
                meas_fixed_width:meas_fixed_width,
                body_fixed_width: rberet.fixed_width,
                body_fixed_width_details: rberet.fixed_width_details.map(e=>e.f),
                all_fixed_width_details: all_fixed_width_details,
                meas_num_flexible_rooms:meas_num_flexible_rooms});

        }

        return x_width_info;
    }

    render_body_elements(
        draw, x, elements, 
        param, music_context, 
        yprof, 
        paper, _5lines_intv, 
        meas_start_x,
        m,
        x_global_scale,
        transpose,
        half_type,
        key,
        C7_width,
        y_body_or_rs_base,
        balken
    ){
        let fixed_width = 0;
        let fixed_width_details = []; // show be same as num_flexible_rooms
        let num_flexible_rooms = 0;

        /**
         * Explanation for scaling policy
         * In fumen, x-axis scaling is applied when there is no enough space to an element fit in without compressing it.
         * In case scaling is applied by getnContext("2d").scale funcation, developer should aware followings :
         *    1) The absolute position needs to be modified according to the applied scaling factor. 
         *       For example, scaling of 0.25 applied, to draw something at point 100 on the screen, you need to 
         *       draw it at 100/0.25 = 400. 
         *    2) Once scaling apply, you "don't" need to concious about how much of compression/widening is required 
         *       when to draw a grlyph. The system automatically scale it while your can write as if there is no scaling apply.
         *       That means no need to care about scaling in its drawing code.
         *       However, your need to be careful about the absolute point (see 1) if the actual position drawn is important.
         *       You don't need to be concious about the relative positions.
         *    3) Treatment of x-positions with differnt scalings.
         *       Length of W drawn with scaling S is corresponds to the length of W*S when no scaling applied or on screen length.
         *       The arithmetic opration of positions or widths should be always done among those scaling is not applied.
         *    4) Inter-connected drawing of elements with differnt scaling applies. e.g. balkens, ties.
         *       This is kind of the most difficult part. Rdnering engine needs to be concious about the difference.
         *       For the balken case, the fundamenta question is which scaling should be taken as a baseline ? 
         *       If balken needs to be drawn e.g. S=0.5 and S=1.0
         */

        var scale = function(fixed_per_elem, room_per_elem, only_estm = false){
            let draw_scale = (room_per_elem + fixed_per_elem)/fixed_per_elem;
            var new_room_per_elem = draw_scale < 1 ? 0          : room_per_elem;
            draw_scale       = draw_scale < 1 ? draw_scale : 1.0;
            var elem_width = fixed_per_elem * draw_scale + new_room_per_elem;
            if(!only_estm) paper.getContext("2d").scale(draw_scale, 1);
            return [draw_scale, elem_width];
        };

        var unscale = function(draw_scale){
            paper.getContext("2d").scale(1/draw_scale, 1);
        };

        if (elements.body.length == 0) {
            if(draw){
                let [draw_scale, elem_width] = scale(1 * param.base_font_size, m.renderprop.total_room);
                x += elem_width;
                unscale(draw_scale);
            }else{
                fixed_width += (1 * param.base_font_size);
                fixed_width_details.push({type:"flex", f:1 * param.base_font_size});
                num_flexible_rooms++;
            }
        }

        let this_group_start_index = 0; // used only for draw phase. Used for index room_per_elem.

        let body_grouping_info = m.renderprop.body_grouping_info;

        body_grouping_info.groupedBodyElems.forEach( (element_group, gbei) => {
            // Draw Rythm Slashes, first
             if (yprof.rs.detected && body_grouping_info.all_has_length) {

                let draw_scale = 1.0;
                let room_for_rs_per_elem = 0;
                let element_group_width = 0;
                let room_for_rs = 0;

                if(draw){

                    if(element_group.renderprop.based_on_rs_elem){
                        // Element group width is determined based on RS elements
                        for(let ei=0; ei<element_group.elems.length; ++ei)
                            room_for_rs += m.renderprop.room_per_elem[this_group_start_index+ei];
                        room_for_rs_per_elem = room_for_rs / element_group.elems.length; // TODO : Improve non constant div
                        
                        // Scaling for chord area.
                        [draw_scale, element_group_width] = scale(element_group.renderprop.cr_width , 
                            element_group.renderprop.rs_area_width + room_for_rs - element_group.renderprop.cr_width);

                        this_group_start_index += element_group.elems.length;
                    }else{
                        // Element group width is determined based on first chord element
                        room_for_rs = (element_group.renderprop.w + m.renderprop.room_per_elem[this_group_start_index]) 
                            - element_group.renderprop.rs_area_width; 
                        room_for_rs_per_elem = room_for_rs / element_group.elems.length;
                        
                        // Scaling for chord area.
                        [draw_scale, element_group_width] = scale(element_group.renderprop.cr_width , 
                            m.renderprop.room_per_elem[this_group_start_index]);
                    
                        this_group_start_index += 1;
                    }


                }
       
                var e0 = element_group.elems[0];
                let cr = null;
                if (e0 instanceof common.Chord) {
                    cr = this.render_chord_simplified(
                        draw, 
                        e0,
                        transpose,
                        half_type,
                        key,
                        paper,
                        x / draw_scale,
                        yprof.body.y,
                        param,
                        C7_width
                    );

                    if(draw) this.hitManager.add(paper, cr.bb.scale(draw_scale,1), e0);

                    if (draw && e0.exceptinal_comment !== null) {
                        let r = graphic.CanvasText(
                            paper,
                            x / draw_scale,
                            yprof.mu.y + yprof.mu.height,
                            e0.exceptinal_comment.comment,
                            param.base_font_size / 2,
                            "lb"
                        );
                        this.hitManager.add(paper, r.bb.scale(draw_scale,1), e0.exceptinal_comment);
                    }
                    if (draw && e0.lyric !== null) {
                        var llist = e0.lyric.lyric.split("/");
                        for (var li = 0; li < llist.length; ++li) {
                            let r = graphic.CanvasText(
                                paper,
                                x / draw_scale,
                                yprof.ml.y + li * param.ml_row_height,
                                llist[li],
                                param.base_font_size / 3,
                                "lt"
                            );
                            this.hitManager.add(paper, r.bb.scale(draw_scale,1), e0.lyric);
                        }
                    }

                } else { // Rest or Simile
                    // Rest is drawn in render_rs_area function in RS area
                    cr = {width:0};
                    
                }

                if(draw){

                    // Unscale for chord area
                    unscale(draw_scale);

                    // Scale for RS area
                    // Estimation only and actual scaling will be done in the render_rs_area function and its callee
                    [draw_scale, element_group_width] = scale(
                        element_group.renderprop.rs_area_width,
                        room_for_rs, 
                        true); // Only estimation actual scaing not apply
                    
                    let g = this.render_rs_area(
                        x, // does not scale, all the scaing things are processed inside this function
                        draw_scale,
                        element_group.elems,
                        paper,
                        yprof.rs.y,
                        yprof.rs.height,
                        meas_start_x, // NOTE : meas_start_x sould be irrespective of draw_scale.
                        music_context,
                        m,
                        param,
                        (draw_scale < 1 ? 0 : room_for_rs_per_elem), // on-screen coordinate
                        balken,
                        (gbei == body_grouping_info.groupedBodyElems.length-1)
                    );

                    x += element_group_width;

                    // unscale(draw_scale); // No need to unscale as all the scaling procedure is enclosed in the above function

                }else{
                    let rs_area_bounding_box = new graphic.BoundingBox();
                    // Only try to esimate using non-flag-balken drawer
                    let tmp_fixed_width_details = [];
                    element_group.elems.forEach(e=>{
                        let balken_element = this.generate_balken_element(
                            e, x, yprof.rs.height, music_context);
                        let r = this.draw_rs_area_without_flag_balken(
                            draw, paper, param, e, balken_element, x, yprof.rs.y, yprof.rs.height);
                        e.renderprop.balken_element = balken_element;
                        rs_area_bounding_box.add_BB(r.bounding_box);
                        x += r.bounding_box.width();
                        tmp_fixed_width_details.push({type:"flex",f:r.bounding_box.width()});
                    });
                    let rs_area_width = rs_area_bounding_box.get().w;
                    // To select which (chord or RS area element) to be selected as a elemng group 
                    let choice = null;
                    if(param.master_elem_selection == "default"){
                        choice = rs_area_width > cr.width ? "rs" : "chord";
                    }else{
                        choice = param.master_elem_selection; // "rs" or "chord";
                    }
                    element_group.renderprop.w = choice == "rs"  ? rs_area_width : cr.width;
                    element_group.renderprop.cr_width = cr.width;
                    element_group.renderprop.rs_area_width = rs_area_width;
                    element_group.renderprop.based_on_rs_elem = (choice == "rs");
                    fixed_width += element_group.renderprop.w;
                    fixed_width_details = fixed_width_details.concat(choice == "rs" ? tmp_fixed_width_details : [{type:"flex",f:cr.width}] );
                    num_flexible_rooms += (choice == "rs" ? element_group.elems.length : 1);
                }

            } else{
                element_group.elems.forEach((e,ei)=>{
                    if (e instanceof common.Chord) {

                        let [draw_scale, elem_width] = [1.0, 0.0];
                        if(draw) [draw_scale, elem_width] =
                            scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index+ei]);
                        
                        let cr = this.render_chord_simplified(
                            draw,
                            e,
                            transpose,
                            half_type,
                            key,
                            paper,
                            x / draw_scale,
                            yprof.body.y,
                            param,
                            C7_width
                        );

                        if (draw && e.exceptinal_comment !== null) {
                            let r = graphic.CanvasText(
                                paper,
                                x / draw_scale,
                                yprof.mu.y + yprof.mu.height,
                                e.exceptinal_comment.comment,
                                param.base_font_size / 2,
                                "lb"
                            );
                            this.hitManager.add(paper, r.bb.scale(draw_scale,1), e.exceptinal_comment);
                        }
                        if (draw && e.lyric !== null) {
                            var llist = e.lyric.lyric.split("/");
                            for (var li = 0; li < llist.length; ++li) {
                                let r = graphic.CanvasText(
                                    paper,
                                    x / draw_scale,
                                    yprof.ml.y + li * param.ml_row_height,
                                    llist[li],
                                    param.base_font_size / 3,
                                    "lt"
                                );
                                this.hitManager.add(paper, r.bb.scale(draw_scale,1), e.lyric);
                            }
                        }
                       if(draw){
                           x += elem_width;
                           unscale(draw_scale);
                           this.hitManager.add(paper, cr.bb.scale(draw_scale,1), e); // BBbox scaled to convert back to on-screen coordinate
                       }else{
                            e.renderprop.w = cr.width; // cr.bb.width(); TODO: Do not use bb.width as it only works for draw=True
                            fixed_width += e.renderprop.w;
                            fixed_width_details.push({type:"flex",f:e.renderprop.w});
                            num_flexible_rooms++;
                        }

                    } else if (e instanceof common.Rest) {

                        let [draw_scale, elem_width] = [1.0, 0.0];
                        if(draw) [draw_scale, elem_width] =
                            scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index+ei]);

                        let cr = this.render_rest_plain(
                            e,
                            paper,
                            draw,
                            x / draw_scale,
                            y_body_or_rs_base,
                            "l",
                            yprof.rs.detected ? param.rs_area_height : param.row_height,
                            yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                            param
                        );
                        if(draw){
                            x += elem_width;
                            this.hitManager.add(paper, cr.bb.scale(draw_scale,1), e);
                            unscale(draw_scale);
                        }else{
                            e.renderprop.w = cr.bb.width();
                            fixed_width += e.renderprop.w;
                            fixed_width_details.push({type:"flex",f:e.renderprop.w});
                            num_flexible_rooms++;
                        }
                    } else if (e instanceof common.Simile) {

                        let [draw_scale, elem_width] = [1.0, 0.0];
                        if(draw) [draw_scale, elem_width] =
                            scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index+ei]);
                        
                        let cr = this.render_simile_mark_plain(
                            draw,
                            paper,
                            x / draw_scale,
                            y_body_or_rs_base,
                            yprof.rs.detected ? param.rs_area_height : param.row_height,
                            yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                            e.numslash,
                            false,
                            "l"
                        );

                        if(draw){
                            x += elem_width;
                            this.hitManager.add(paper, cr.bb.scale(draw_scale,1), e);
                            unscale(draw_scale);
                        }else{
                            e.renderprop.w = cr.width;
                            fixed_width += e.renderprop.w;
                            fixed_width_details.push({type:"flex",f:e.renderprop.w});
                            num_flexible_rooms++;
                        }
                    } else if (e instanceof common.Space) {
                        let [draw_scale, elem_width] = [1.0, 0.0];
                        if(draw) [draw_scale, elem_width] =
                            scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index+ei]);
                        
                        if(draw){
                            this.hitManager.add(paper, 
                                new graphic.BoundingBox(x, yprof.body.y, e.renderprop.w, param.row_height),
                                e);
                            x += elem_width;
                            unscale(draw_scale);
                        }else{
                            let r = graphic.CanvasText(paper, 0, 0, "M", 
                                param.base_font_size, "lt", 0.5*param.base_font_size, true, null); // width parameter needs to be aligned with chord rendering
                            e.renderprop.w = e.length * r.width;
                            fixed_width += e.renderprop.w;
                            fixed_width_details.push({type:"flex",f:e.renderprop.w});
                            num_flexible_rooms++;
                        }
                    }
                });

                if(draw) this_group_start_index += element_group.elems.length; // This count should be same as num_flexible_rooms;
            }
        });

        return {x:x, fixed_width:fixed_width, num_flexible_rooms:num_flexible_rooms, fixed_width_details:fixed_width_details};
    }
    
    grouping_body_elemnts_enh(body_elements){
        // First, guess chord duration here.
        // In current version, each chord in the measure is assumed to have the same duration.
        // TODO : Improve based on number of spaces or duration indication mark.
        let all_has_length = true;
        let chord_name_str = null;
        let sum_length = 0;
        let rest_or_long_rests_detected = false;

        body_elements.forEach(function(e) {
            if(e instanceof common.Space) return;
            all_has_length &= e.note_group_list !== null;
            if (all_has_length)
                sum_length += e.note_group_list[0].lengthIndicator.length;
            rest_or_long_rests_detected |= e instanceof common.Rest;
        });

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
                this_chord_str = ""; // Rests, Simile(in body) and Space are regarded as empty chord
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
        track,
        x,
        paper,
        row_elements_list,
        prev_measure,
        next_measure,
        y_base,
        param,
        inner_reharsal_mark,
        ylimit,
        music_context
    ) {
        var x_global_scale = track.getVariable("X_GLOBAL_SCALE");
        var transpose = track.getVariable("TRANSPOSE");
        var half_type = track.getVariable("KEY_TYPE");
        var key = track.getVariable("KEY");
        var show_staff = track.getVariable("SHOW_STAFF");

        /* Reference reserved width for empty measures or chord symbol without base names*/
        var C7_width = 20;

        // interval of 5 lines
        var _5lines_intv = param.rs_area_height / (5 - 1);

        var yprof = this.screening_y_areas(row_elements_list, y_base, param, show_staff, 
            inner_reharsal_mark);
        
        var y_body_or_rs_base = yprof.rs.detected ? yprof.rs.y : yprof.body.y;
        var repeat_mark_y_base = yprof.rs.detected ? 
            yprof.rs.y - param.repeat_mark_y_margin :
            yprof.mu.y + yprof.mu.height;
            

        // if ylimit is specified, and drawing region surpass that limit, do not render
        if (ylimit !== null && yprof.end.y > ylimit) {
            return null;
        }

        if(row_elements_list[0].renderprop.left_margin != null){
            x += row_elements_list[0].renderprop.left_margin;
        }

        // For each measure in this row
        for (let ml = 0; ml < row_elements_list.length; ++ml) {
            // measure object
            let m = row_elements_list[ml];

            let elements = this.classifyElements(m);

            var mh_offset = 0;

            var meas_base_x = x;

            // Reset music context
            music_context.pos_in_a_measure = 0; // reset
            music_context.cumal_block_duration = 0; 
            music_context.first_li = null;
            music_context.in_tuplet = false;
            // TODO : consider key infomration
            // TODO : consider tie
            // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
            music_context.accidental_info = new Array(128).fill(0);

            // balken context inside a measure
            let balken = {
                groups: []
            };

            // Rehearsal group mark, only rendred when it has name
            if(m.renderprop && m.renderprop.rg_from_here && m.renderprop.rg_from_here.name != ""){

                let reharsal_group = m.renderprop.rg_from_here;

                let r = graphic.CanvasTextWithBox(
                    paper,
                    meas_base_x,
                    inner_reharsal_mark ? yprof.mu.y : yprof.rm.y,
                    reharsal_group.name,
                    param.reharsal_mark_font_size,
                    2, 
                    graphic.GetCharProfile(param.reharsal_mark_font_size, null, paper.ratio, paper.zoom).height
                );
                
                this.hitManager.add(paper, r.bb, reharsal_group);

                if(inner_reharsal_mark) mh_offset += (r.bb.width()+2);
            }

            for (var ei = 0; ei < elements.header.length; ++ei) {
                let e = elements.header[ei];
                if (e instanceof common.Coda) {
                    let r = this.draw_coda_plain(
                        paper,
                        param,
                        meas_base_x + mh_offset,
                        yprof.mu.y + yprof.mu.height,
                        "lb",
                        e,
                        param.base_font_size
                    );
                    mh_offset += r.bb.width();
                    this.hitManager.add(paper, r.bb, e);
                } else if (e instanceof common.Segno) {
                    let r = this.draw_segno_plain(
                        paper,
                        param,
                        meas_base_x + mh_offset,
                        yprof.mu.y + yprof.mu.height,
                        e,
                        param.base_font_size
                    );
                    mh_offset += r.width;
                    this.hitManager.add(paper, r.bb, e);
                } else if (e instanceof common.Comment) {
                    // If this comment is associated with a chord with exceptional comment, not rendered here.
                    if (!e.chorddep) {
                        let r = graphic.CanvasText(
                            paper,
                            meas_base_x + mh_offset,
                            yprof.mu.y + yprof.mu.height,
                            e.comment,
                            param.base_font_size / 2,
                            "lb"
                        );
                        mh_offset += r.width;
                        this.hitManager.add(paper, r.bb, e);
                    }
                } else if (e instanceof common.Lyric) {
                    // If this comment is associated with a chord with exceptional comment, not rendered here.
                    if (!e.chorddep) {
                        // Currently lyrics are only rendered for chord dependency case
                    }
                }
            } // Header loop

            let meas_start_x = x;
            let meas_start_x_actual_boundary = x;

            // Draw header
            // Clef, Key, Begin Boundary, Time(1st one) are included in this area
            elements.header.forEach(e => {
                if (e instanceof common.MeasureBoundary) {
                    var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
                    var ne = pm ? pm.childNodes[pm.childNodes.length - 1] : null;
                    let r = this.draw_boundary_simplified(
                        "begin",
                        ne,
                        e,
                        ml == 0, //m.raw_new_line,
                        paper,
                        x,
                        y_body_or_rs_base,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                        param,
                        true
                    );
                    m.renderprop.y = y_body_or_rs_base;
                    m.renderprop.sx = x;
                    m.renderprop.paper = paper;
                    x += e.renderprop.w;
                    meas_start_x_actual_boundary = r.actual_boundary;
                    if(r.bb) this.hitManager.add(paper, r.bb, e);
                    if(r.bb2) this.hitManager.add(paper, r.bb2, e);
                } else if (e instanceof common.Time) {
                    let chord_str_height = graphic.GetCharProfile(
                        param.base_font_size, null, paper.ratio, paper.zoom).height;
                    let row_height = yprof.rs.detected ?param.rs_area_height : param.row_height;
                    let cont_height = yprof.rs.detected ?param.rs_area_height : chord_str_height;
                    let left_margin = 2;
                    
                    let rd = graphic.CanvasImage(paper, 
                        graphic.G_imgmap["uniE08"+e.numer],// numbers
                        x + left_margin, 
                        y_body_or_rs_base + row_height/2, 
                        null, 
                        cont_height/2,
                        "lb",
                        true);
                    let rn = graphic.CanvasImage(paper, 
                        graphic.G_imgmap["uniE08"+e.denom],// numbers
                        x + left_margin, 
                        y_body_or_rs_base + row_height/2, 
                        null, 
                        cont_height/2,
                        "lt",
                        true);
                    x += e.renderprop.w;
                    this.hitManager.add(paper, rd.bb.add_BB(rn.bb), e);
                }
            });

            let header_width = x - meas_start_x;

            x += param.header_body_margin;

            // Draw body
            let rberet = this.render_body_elements(
                true, x, elements, 
                param, music_context, 
                yprof, 
                paper, _5lines_intv, 
                meas_start_x,
                m,
                x_global_scale,
                transpose,
                half_type,
                key,
                C7_width,
                y_body_or_rs_base,
                balken);
            
            x = rberet.x;

            x += param.body_footer_margin;

            let footer_start_x = x;

            // Draw footer
            var footer_base = x;
            for (let ei = 0; ei < elements.footer.length; ++ei) {
                let e = elements.footer[ei];
                if (e instanceof common.MeasureBoundary) {
                    var nm =
                        ml == row_elements_list.length - 1
                            ? next_measure
                            : row_elements_list[ml + 1];
                    var ne = nm ? nm.childNodes[0] : null;
                    let r = this.draw_boundary_simplified(
                        "end",
                        e,
                        ne,
                        ml == row_elements_list.length-1, //nm ? nm.raw_new_line : false,
                        paper,
                        x,
                        y_body_or_rs_base,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                        param,
                        true
                    );

                    m.renderprop.ex = x;
                    x += e.renderprop.w;
                    if(r.bb) this.hitManager.add(paper, r.bb, e);
                    if(r.bb2) this.hitManager.add(paper, r.bb2, e);
                } else if (e instanceof common.DaCapo) {
                    let r = graphic.CanvasText(
                        paper,
                        x,
                        repeat_mark_y_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb", null, null, {font:param.repeat_mark_font}
                    );
                    this.hitManager.add(paper, r.bb, e);
                } else if (e instanceof common.DalSegno) {
                    let r = graphic.CanvasText(
                        paper,
                        x,
                        repeat_mark_y_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb", null, null, {font:param.repeat_mark_font}
                    );
                    this.hitManager.add(paper, r.bb, e);
                } else if (e instanceof common.ToCoda) {
                    let r = this.draw_coda_plain(
                        paper,
                        param,
                        x,
                        repeat_mark_y_base,
                        "rb",
                        e,
                        param.base_font_size
                    );
                    let rt = graphic.CanvasText(
                        paper,
                        x - r.bb.width(),
                        repeat_mark_y_base,
                        "To",
                        param.base_font_size / 2,
                        "rb", null, null, {font:param.repeat_mark_font}
                    );
                    this.hitManager.add(paper, r.bb.add_BB(rt.bb), e);
                } else if (e instanceof common.Fine) {
                    let r = graphic.CanvasText(
                        paper,
                        x,
                        repeat_mark_y_base,
                        e.toString(),
                        param.base_font_size / 2,
                        "rb", null, null, {font:param.repeat_mark_font}
                    );
                    this.hitManager.add(paper, r.bb, e);
                } else {
                    throw "Unkown instance of footer elements";
                }
            }

            let footer_width = x - footer_start_x;

            var meas_end_x = x;

            // Draw Upper and Lower Signs
            for (let ei = 0; ei < elements.measure_wide.length; ++ei) {
                let e = elements.measure_wide[ei];
                if (e instanceof common.LoopIndicator) {
                    let bb = new graphic.BoundingBox();
                    var oy = 12;
                    var ly = yprof.body.y - 2 - oy;
                    var sx = meas_start_x_actual_boundary;
                    var fx = meas_start_x + (meas_end_x - meas_start_x) * 0.7;
                    graphic.CanvasLine(paper, sx, ly, sx, ly + oy);
                    graphic.CanvasLine(paper, sx, ly, fx, ly);
                    bb.add(sx, ly+oy);
                    bb.add(fx, ly);
                    var s = e.indstr;
                    let r = graphic.CanvasText(
                        paper,
                        sx + 2,
                        ly + oy/2,
                        s,
                        param.base_font_size / 3,
                        "lm", null, null, {font:param.repeat_mark_font}
                    );
                    this.hitManager.add(paper, bb.add_BB(r.bb), e);
                } else if (e instanceof common.LongRest) {
                    let height = yprof.rs.detected ? param.rs_area_height : param.row_height;
                    let sx =
                        meas_start_x +
                        header_width; // header_width does not include header_body_margin
                    let fx = meas_end_x - footer_width;
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


                    let bb = new graphic.BoundingBox();
                    let r = graphic.CanvasLine(
                        paper,
                        lx,
                        y_body_or_rs_base + height / 2 + yshift,
                        rx,
                        y_body_or_rs_base + height / 2 + yshift,
                        { width: height/5 }
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        paper,
                        lx,
                        y_body_or_rs_base + rh * vlmargin + yshift,
                        lx,
                        y_body_or_rs_base + rh - rh * vlmargin + yshift,
                        { width: "1" }
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        paper,
                        rx,
                        y_body_or_rs_base + rh * vlmargin + yshift,
                        rx,
                        y_body_or_rs_base + rh - rh * vlmargin + yshift,
                        { width: "1" }
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasText(
                        paper,
                        (sx + fx) / 2,
                        y_body_or_rs_base,
                        e.longrestlen,
                        param.base_font_size / 2,
                        "ct",
                        undefined,
                        false,
                        {font:param.repeat_mark_font}
                    );
                    bb.add_BB(r.bb);

                    this.hitManager.add(paper, bb, e);

                    //rest_or_long_rests_detected |= true;
                } else if (e instanceof common.Rest){
                    // This shall be whole rest
                    let sx =
                        meas_start_x +
                        header_width; // header_width does not include header_body_margin
                    let fx = meas_end_x - footer_width;
                    let cr = this.render_rest_plain(
                        e,
                        paper,
                        true,
                        (sx + fx) / 2,
                        y_body_or_rs_base,
                        "c",
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                        param
                    );
                    this.hitManager.add(paper, cr.bb, e);
                } else if (e instanceof common.Simile) {
                    // Simile mark in measure wide element if there is no other body elements in this measure
                    let sx =
                        meas_start_x +
                        header_width; // header_width does not include header_body_margin
                    let fx = meas_end_x - footer_width;
                    let r = this.render_simile_mark_plain(
                        true,
                        paper,
                        (sx + fx) / 2,
                        y_body_or_rs_base,
                        yprof.rs.detected ? param.rs_area_height : param.row_height,
                        yprof.rs.detected ? param.rs_area_height : param.base_body_height,
                        e.numslash,
                        false,
                        "c"
                    );
                    this.hitManager.add(paper, r.bb, e);
                } else {
                    throw "Unkown measure wide instance detected";
                }
            }

            m.renderprop.meas_end_x = meas_end_x;
            m.renderprop.meas_start_x = meas_start_x;

            this.hitManager.add(
                paper, 
                new graphic.BoundingBox(meas_start_x, y_base,meas_end_x - meas_start_x, yprof.end.y - y_base),
                m);

        } // measure loop

        // 0. Draw 5 lines
        if(yprof.rs.detected){
            let start_x   = row_elements_list[0].renderprop.meas_start_x;
            let end_x = row_elements_list[row_elements_list.length-1].renderprop.meas_end_x - 1; // -1 as meas_end_x point to the next point of end of boundary(= Normally total_width - x_margin)
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
        return { rm_detected: yprof.rm.detected, mu_y: yprof.mu.y, y_base: yprof.end.y };
    }

    draw_segno_plain(paper, param, x, y, segno, B) {
        var lx = x;
        var img_width = B/3;
        var img_height = B/2;
        var text_size = B/2;
        let bb = new graphic.BoundingBox();
        let r = graphic.CanvasImage(paper, 
            graphic.G_imgmap["uniE047"], //segno.svg
            lx, 
            y, 
            img_width, 
            img_height,
            "lb",
            true);
        lx += img_width;
        bb.add_BB(r.bb);
        if (segno.number !== null) {
            let r = graphic.CanvasText(
                paper,
                lx,
                y,
                segno.number,
                text_size,
                "lb"
                , null, null, {font:param.repeat_mark_font}
            );
            lx += r.width;
            bb.add_BB(r.bb);
        }
        if (segno.opt !== null) {
            let r = graphic.CanvasText(
                paper,
                lx,
                y,
                "(" + segno.opt + ")",
                text_size,
                "lb"
                , null, null, {font:param.repeat_mark_font}
            );
            lx += r.width;
            bb.add_BB(r.bb);
        }

        return { width: lx - x, bb:bb };
    }

    draw_coda_plain(paper, param, x, y, align, coda, B) {
        let bb = new graphic.BoundingBox();
        var width = 0;
        var ys = 0;
        var img_width = B/2;
        var img_height = B/2;
        var text_size = B/2;
        if (align[1] == "b") {
            ys = - img_height;
        } else if (align[1] == "m") {
            ys = - img_height/2;
        }
        // var img_y = y; // + ys;

        if (align[0] == "r") {
            if (coda.number !== null) {
                let r = graphic.CanvasText(
                    paper,
                    x,
                    y, //img_y + img_height,
                    coda.number,
                    text_size,
                    "rb", null, null, {font:param.repeat_mark_font}
                );
                width += r.width;
                bb.add_BB(r.bb);
            }
            let r = graphic.CanvasImage(paper, 
                graphic.G_imgmap["uniE048"],  //coda.svg
                x - width, 
                y, 
                img_width, 
                img_height,
                "rb",
                true);
            width += img_width;
            bb.add_BB(r.bb);
        } else if (align[0] == "l") {
            let r = graphic.CanvasImage(paper, 
                graphic.G_imgmap["uniE048"],  // coda.svg
                x , 
                y, 
                img_width, 
                img_height,
                "lb",
                true);
            width += img_width;
            bb.add_BB(r.bb);
            if (coda.number !== null) {
                let r = graphic.CanvasText(
                    paper,
                    x + width,
                    y, //img_y + img_height,
                    coda.number,
                    text_size,
                    "lb",
                    null, null, {font:param.repeat_mark_font}
                );
                width += r.width;
                bb.add_BB(r.bb);
            }
        } else {
            throw "NOT SUPPORTED";
        }
        return { bb: bb };
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

        return { bb: r.bb };
    }

    render_rest_plain(
        e,
        paper,
        draw,
        x,
        y_body_or_rs_base,
        align, // "l or "c" or "r"
        row_height,
        base_body_height,
        param
    ) {
        let _5i = base_body_height / 4; 
        var yoffsets = {
            1: -_5i - 0.5, // 0.5 is subpixel adjustment
            2: (-_5i / 6) * 4 + 0.5,
            4: -_5i * 1.5,
            8: -_5i + 0.5,
            16: 0   + 0.5,
            32: 0   + 0.5,
            64: _5i + 0.5
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
        let namemap = {1:"uniE4F4", 2:"uniE4F5", 4:"uniE4E5", 8:"uniE4E6"};
        let img = graphic.G_imgmap[namemap[(rd <= 4 ? rd : 8)]];
        let s = img.height / heights[rd];

        let rdx = 2;
        let rdy = -_5i;
        
        let nKasane = common.myLog2(rd) - 2;

        // pre-calculate total width
        let w = 0;
        if (rd <= 4) {
            w = img.width / s;
        } else {
            w = rdx * (nKasane-1) + img.width / s;
        }
        // dots
        w = Math.max(w, dot_xoffsets[rd] + (numdot-1)*5);

        if(align == "c") x -= w/2;
        else if(align == "r") x -= w;

        if(draw){            
            if (rd <= 4) {
                ctx.drawImage(
                    img,
                    x,
                    y_body_or_rs_base + row_height / 2 + oy,
                    img.width / s,
                    img.height / s
                );
            } else {
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

        return { bb: new graphic.BoundingBox(x,y_body_or_rs_base, w, row_height)};
    }

    render_simile_mark_plain(
        draw,
        paper,
        x,
        y_body_base,
        row_height,
        base_body_height, // In RS area, row_height == base_body_height is asuumed
        numslash,
        put_boundary,
        align
    ) {
        var h = 4;
        var H = 12;
        var i = 4;
        var cm = 2;
        var cr = 1.2;
        var _5lines_intv = base_body_height / 4;
        var width = (h + i) * (numslash - 1) + h + H;

        if (align == "c") x -= width / 2;
        else if (align == "r") x -= width;

        var x0 = x;
        let bb = new graphic.BoundingBox();
        if (draw){
            let r = graphic.CanvasCircle(
                paper,
                x + cm,
                y_body_base + row_height/2 - _5lines_intv * 0.5,
                cr
            );
            bb.add_BB(r.bb);
        }
        for (let r = 0; r < numslash; ++r) {
            var y = y_body_base + row_height/2;
            x += (h + i) * r;
            if (draw) {
                var points = [
                   [x, y + _5lines_intv * 1],
                   [x + h, y + _5lines_intv * 1],
                    [x + h + H, y - _5lines_intv * 1],
                    [x + H, y - _5lines_intv * 1]
                ];
                let r = graphic.CanvasPolygon(paper, points, true, true);   
                bb.add_BB(r.bb);  
            }
        }
        if (draw){
            let r = graphic.CanvasCircle(
                paper,
                x + h + H - cm,
                y_body_base + row_height/2 + _5lines_intv * 0.5,
                cr
            );
            bb.add_BB(r.bb);
        }
        if (put_boundary) {
            if (draw){
                let r = graphic.CanvasLine(
                    paper,
                    x0 + width / 2,
                    y_body_base,
                    x0 + width / 2,
                    y_body_base + row_height,
                    { width: 1 }
                );
                bb.add_BB(r.bb);
            }
        }
        return {width: width, bb:bb};
    }

    render_chord_simplified(
        draw,
        chord,
        transpose,
        half_type,
        key,
        canvas,
        x,
        y_body_base,
        param,
        C7_width
    ) {
        if (!chord.is_valid_chord) {
            let r = this.render_chord_as_string_plain(
                chord,
                canvas,
                x,
                y_body_base,
                param,
                draw
            );
            // add width for now. TODO : remove
            return {width: r.bb.width(), bb:r.bb};
        }

        var bb = new graphic.BoundingBox();

        var ce = this.chord_elem_classify(chord, transpose, half_type, key);
        var bases = ce.bases;
        var elems = ce.mid_elem_objs;

        var y = y_body_base;
        var B = param.base_font_size;

        // if bases are null, elems are null, then it is just a duration information
        if (bases[0] == null && bases[1] == null && elems === undefined) {
            return { width: B, bb: new graphic.BoundingBox(x, y_body_base, B, B) }; // TODO : Check
        }

        var _3rdelem = ce._3rdelem;
        var _5thelem = ce._5thelem;
        var _6791113suselem = ce._6791113suselem;
        var _alteredelem = ce._alteredelem; // #11, #9, b9, #13, b13,

        var upper_width = 0;
        var lower_width = 0;
        var tensions_width = 0;
        var onbass_width = 0;

        var rootCharHeight = graphic.GetCharProfile(B, null, canvas.ratio, canvas.zoom).height;


        // Position parameters
        var upper_tension_y_offset = 0; // Baseline is middle of main chord character
        var lower_onbass_y_offset = rootCharHeight/16; // Slight offset so that on bass does not interfer with tensions. Baseline is bottom of main chord character. For on bass this applies for normal onbass style. For on bass style of "below", offset 0 is applied.

        var root = bases[0];
        var onbass = bases[1];


        let chord_offset_on_bass = 0;
        if(onbass != null && param.on_bass_style == "below")
            chord_offset_on_bass = param.on_bass_below_y_offset;

        // Character width scaling, ratio to base font size in pt. Note that 1.0 does not mean the width of base character.
        // In most case, non-proportional font have differnt width for each cahracter. 
        // Typically "G" has max width among characters used for chords.
        // Adjustment based on "G" sometimes lead to too much space for other thinner fonts like "F".
        // A little bit of compressing the default character width will absorb such a difference. Here *0.9 is used. 
        var char_width_scale = 0.7;
        var main_char_width = 0.7; 
        var space_char_width = 0.3;

        if (root) {
            let r = graphic.CanvasText(
                canvas,
                x,
                y + param.row_height/2 + chord_offset_on_bass,
                root[0],
                B,
                "lm",
                B * char_width_scale,
                !draw
            );
            bb.add_BB(r.bb);
            upper_width = B * main_char_width;
            lower_width = B * main_char_width;
            if (root.length == 2) {
                let acc_height = rootCharHeight/2.0+rootCharHeight/8.0;
                let acc_width = B * 0.25;
                if (root[1] == "b") {
                    if (draw){
                        let r = graphic.CanvasImage(
                            canvas,
                            graphic.G_imgmap["uni266D"], // flat.svg
                            x + upper_width,
                            y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                            acc_width,
                            acc_height,
                            "lb");
                        bb.add_BB(r.bb);
                    }
                    upper_width += acc_width;
                } else {
                    if (draw){
                        let r = graphic.CanvasImage(
                            canvas,
                            graphic.G_imgmap["uni266F"], // sharp.svg
                            x + upper_width,
                            y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                            acc_width,
                            acc_height,
                            "lb");
                        bb.add_BB(r.bb);
                    }
                    upper_width += acc_width;
                }
            }
        } else {
            // No root but only bass
            // Add space to eliminate the conbination with previous chord
            if(param.on_bass_style != "below"){
                upper_width = B * space_char_width;
                lower_width = B * space_char_width;
            }
        }

        // Half diminish is firstly rendered
        if(ce._halfdim_exists){
            // Remove m7 and -5
            _3rdelem = _3rdelem.filter((e)=>!(e.type=="triad" && e.value=="m"));
            _6791113suselem = _6791113suselem.filter((e)=>!(e.type=="dig"&&e.value=="7"));
            _5thelem = _5thelem.filter((e)=>!(e.type=="tension"&&e.value=="b"));

            let r = graphic.CanvasText(
                canvas,
                x + lower_width,
                y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                String.fromCharCode(0x00d8),
                B * 0.5,
                "lb",
                B * 0.5,
                !draw
            );
            lower_width += r.width;
            bb.add_BB(r.bb);
        }

        _3rdelem.forEach(e => {
            if (e.type == "M"/* && _6791113suselem.length > 0*/) {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    String.fromCharCode(0x0394),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "triad" && e.value == "m") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    String.fromCharCode(0x2013),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "triad" && e.value == "dim") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    String.fromCharCode(0x004f),
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            } else {
                // Unkown type
            }
        });
        _6791113suselem.forEach(e => {
            if (e.type == "dig") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    e.value,
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "sus") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    e.type + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.8,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "tension" && e.value == "add") {
                let r = graphic.CanvasText(
                    canvas,
                    x + lower_width,
                    y + param.row_height/2 + rootCharHeight/2 + chord_offset_on_bass + lower_onbass_y_offset,
                    e.value + (e.param ? e.param : ""),
                    B * 0.5,
                    "lb",
                    B * 0.8,
                    !draw
                );
                lower_width += r.width;
                bb.add_BB(r.bb);
            }
        });
        _5thelem.forEach(e => {
            if (e.type == "tension" && e.value == "b") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                    "-5",
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                upper_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "tension" && e.value == "#") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                    "+5",
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                upper_width += r.width;
                bb.add_BB(r.bb);
            } else if (e.type == "triad" && e.value == "+") {
                let r = graphic.CanvasText(
                    canvas,
                    x + upper_width,
                    y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                    "+",
                    B * 0.5,
                    "lb",
                    B * 0.5,
                    !draw
                );
                upper_width += r.width;
                bb.add_BB(r.bb);
            }
        });

        if (_alteredelem.length > 0) {
            var tensions_pos = Math.max(upper_width, lower_width); // Assume onbass below does not exceed lower_width
            let r = graphic.CanvasText(
                canvas,
                x + tensions_pos,
                y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                "(",
                B * 0.5,
                "lb",
                B * 0.5,
                !draw
            );
            tensions_width += r.width;
            bb.add_BB(r.bb);
            var h = graphic.GetCharProfile(B * 0.5, null, canvas.ratio, canvas.zoom).height;
            _alteredelem.forEach((e, index) => {
                if(e.type == "tension" && (e.value == "b" || e.value == "#")){
                    if (draw){
                        let r = graphic.CanvasImage(canvas,
                            graphic.G_imgmap[e.value=="b" ? "uni266D" : "uni266F"], // flat.svg,
                            x + tensions_pos + tensions_width,
                            y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                            B * 0.2,
                            h,
                            "lb"
                        );
                        bb.add_BB(r.bb);
                    }
                    tensions_width += B * 0.2;

                    let r = graphic.CanvasText(
                        canvas,
                        x + tensions_pos + tensions_width,
                        y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                        e.param,
                        B * 0.5,
                        "lb",
                        B * 0.5,
                        !draw
                    );
                    tensions_width += r.width;
                    bb.add_BB(r.bb);
                } else if (e.type == "tension" && e.value == "omit"){
                    let r = graphic.CanvasText(
                        canvas,
                        x + tensions_pos + tensions_width,
                        y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                        e.value + e.param, // take same appropach as sus/add.
                        B * 0.5,
                        "lb",
                        B * 0.9, // "omit" is 4 chars then expand a little bit
                        !draw
                    );
                    tensions_width += r.width;
                    bb.add_BB(r.bb);
                }

                if (index != _alteredelem.length - 1) {
                    let r = graphic.CanvasText(
                        canvas,
                        x + tensions_pos + tensions_width,
                        y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                        ", ",
                        B * 0.5,
                        "lb",
                        B * 0.5,
                        !draw
                    );
                    tensions_width += r.width;
                    bb.add_BB(r.bb);
                }
            });
            r = graphic.CanvasText(
                canvas,
                x + tensions_pos + tensions_width,
                y + param.row_height/2 + chord_offset_on_bass + upper_tension_y_offset,
                ")",
                B * 0.5,
                "lb",
                B * 0.5,
                !draw
            );
            tensions_width += r.width;
            bb.add_BB(r.bb);
        }

        if (onbass != null) {

            let on_bass_below_a_margin = param.on_bass_style == "below" ? 1 : 0;

            var onbass_pos =
                param.on_bass_style == "below" ?
                x :
                x + lower_width;

            let on_bass_y_offset = 
                param.on_bass_style == "below" ?
                0 :
                lower_onbass_y_offset;

            let r = graphic.CanvasText(
                canvas,
                onbass_pos,
                y + param.row_height/2 + rootCharHeight/2
                 + chord_offset_on_bass
                 + on_bass_below_a_margin
                 + on_bass_y_offset,
                "/" + onbass[0],
                B * 0.45,
                param.on_bass_style == "below"  ? "lt" : "lb",
                B * 0.5,
                !draw
            );
            onbass_width += r.width;
            bb.add_BB(r.bb);
            if (onbass.length == 2) {
                if (onbass[1] == "b") {
                    if (draw){
                        let rd = graphic.CanvasImage(canvas, 
                            graphic.G_imgmap["uni266D"], // flat.svg
                            onbass_pos + onbass_width, 
                            y + param.row_height/2 + rootCharHeight/2
                             + chord_offset_on_bass
                             + on_bass_below_a_margin
                             + on_bass_y_offset,
                            B*0.2, 
                            r.height, 
                            param.on_bass_style == "below"  ? "lt" : "lb", 
                            true);
                        bb.add_BB(rd.bb);
                    }
                        
                    onbass_width += B * 0.2;
                } else {
                    if (draw){
                        let rd = graphic.CanvasImage(canvas, 
                            graphic.G_imgmap["uni266F"], // sharp.svg 
                            onbass_pos + onbass_width, 
                            y + param.row_height/2 + rootCharHeight/2 
                                + chord_offset_on_bass
                                + on_bass_below_a_margin 
                                + on_bass_y_offset,
                            B*0.2, 
                            r.height, 
                            param.on_bass_style == "below"  ? "lt" : "lb", 
                            true);
                        bb.add_BB(rd.bb);
                    }

                    onbass_width += B * 0.2;
                }
            }

            //if(param.on_bass_style != "below")
            //    lower_width += onbass_width;
        }


        var width = 0;
        if(param.on_bass_style == "below" )
            // max of overall-tension, overall-lower, overall onbass(below)
            width = Math.max( Math.max(upper_width, lower_width) + tensions_width, lower_width, onbass_width);
        else{
            // max of overall-tension and overall lower
            width = Math.max( Math.max(upper_width, lower_width) + tensions_width, lower_width + onbass_width );
        }

        return { width: width, bb:bb }; // width and bb.width() could be differnt. TODO : Clean up.
    }

    /**
     * Draw boundary
     * @private
     * @param side : 'begin' or 'end' of boundary for current measure
     * @param e0 : Boundary element: 0
     *             - 'end' boundary if the previous measure when <side> is 'begin'
     *             - 'end' boundary of current measure when <side> is 'end' 
     *             - can be null if there is no previous measure when <side> is 'begin'.
     * @param e1 : Boundary element: 1
     *             - 'begin' boundary of current measure when <side> is 'begin'
     *             - 'begin' boundary of next measure when <side> is 'end'
     *             - can be null if there is no next measure when <side> is 'end'.
     * @param is_row_edge : Whether this boundary is at the edge of row( left edge if <side> is 'begin', or right edge if <side> is 'end')
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
        is_row_edge,
        canvas,
        x,
        y_body_base,
        row_height,
        base_body_height,
        param,
        draw
    ) {

        var draw_type = null; // "s, d, lb, le, lb, f"

        var w = 0; // width of boundary
        let actual_boundary = 0; // Actual boundary when having more than 1 pixel width.
        
        let bb = new graphic.BoundingBox();
        let bb2 = new graphic.BoundingBox(); // in case separated bb required.

        if (side == "end" && !is_row_edge) {
            // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
            return { drawn:false, width: 0, actual_boundary : 0, bb:null, bb2:null };
        }

        if (is_row_edge === null || is_row_edge == false) {
            // 1. 2 boundaries in  differnt rows in the code will be rendered as an adjacent measure, or
            // 2. The adjacent measures in the codes are measured as is
            draw_type = this.boundary_type_without_line_break(e0, e1);
        } else {
            // 1. The adjacnet measures in the codes are measured in differnt rows
            // 2. 2 boundraies in differnt rows in the code will be rendered as is (i.e. for differnt rows)
            draw_type = this.boundary_type_with_line_break(e0, e1, side);
        }

        //console.log([draw_type, side]);
        let xshift = null;

        let r = null;

        switch (draw_type) {
            case "s":
            case "d":
                // begin and end
                var nline = draw_type == "s" ? 1 : 2;
                var barintv = 3;
                w = 1 + (nline - 1) * barintv;
                for (var li = 0; li < nline; ++li) {
                    if (draw){
                        let r = graphic.CanvasLine(
                            canvas,
                            x + li * barintv,
                            y_body_base,
                            x + li * barintv,
                            y_body_base + row_height
                        );
                        bb.add_BB(r.bb);
                    }
                }
                actual_boundary = x + (nline-1) * barintv;
                break;
            case "b":
                // begin only
                w = 8;
                actual_boundary = x;
                if (draw){
                    let r = graphic.CanvasLine(
                        canvas,
                        x,
                        y_body_base,
                        x,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + 3,
                        y_body_base,
                        x + 3,
                        y_body_base + row_height
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasCircle(
                        canvas,
                        x + 7,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasCircle(
                        canvas,
                        x + 7,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                    bb.add_BB(r.bb);
                }
                break;
            case "e":
                // begin and end
                w = 8;
                actual_boundary = x + w;
                xshift = side == "end" ? 0 : 0;
                if (draw){
                    let r = graphic.CanvasCircle(
                        canvas,
                        x + xshift,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasCircle(
                        canvas,
                        x + xshift,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + xshift + 4,
                        y_body_base,
                        x + xshift + 4,
                        y_body_base + row_height
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + xshift + 7,
                        y_body_base,
                        x + xshift + 7,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                    bb.add_BB(r.bb);
                }
                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    let stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw){
                        let r = graphic.CanvasText(
                            canvas,
                            x + xshift + w,
                            y_body_base + row_height + param.xtimes_mark_y_margin,
                            "(" + stimes + " times)",
                            param.base_font_size / 2,
                            "rt", null, null, {font:param.repeat_mark_font}
                        );
                        bb2.add_BB(r.bb);
                    }
                }
                break;
            case "B":
                // begin only
                w = 15;
                actual_boundary = x + w/2;
                if (draw){
                    let r = graphic.CanvasCircle(
                        canvas,
                        x,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasCircle(
                        canvas,
                        x,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + 4,
                        y_body_base,
                        x + 4,
                        y_body_base + row_height
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + 7,
                        y_body_base,
                        x + 7,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + 10,
                        y_body_base,
                        x + 10,
                        y_body_base + row_height
                    );
                    bb.add_BB(r.bb);
                }

                if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
                    let stimes = e0.ntimes == true ? "X" : "" + e0.times;
                    if (draw){
                        let r = graphic.CanvasText(
                            canvas,
                            x + 8,
                            y_body_base + row_height + param.xtimes_mark_y_margin,
                            "(" + stimes + " times)",
                            param.base_font_size / 2,
                            "rt", null, null, {font:param.repeat_mark_font}
                        );
                        bb2.add_BB(r.bb);
                    }
                }
                if (draw){
                    let r = graphic.CanvasCircle(
                        canvas,
                        x + 14,
                        y_body_base + (row_height / 4) * 1.5,
                        1
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasCircle(
                        canvas,
                        x + 14,
                        y_body_base + (row_height / 4) * 2.5,
                        1
                    );
                    bb.add_BB(r.bb);
                }
                break;
            case "f":
                // begin and end (normally, end)
                w = 5;
                xshift = side == "end" ? 0 : 0;
                actual_boundary = x + w;
                if (draw){
                    let r = graphic.CanvasLine(
                        canvas,
                        x + xshift,
                        y_body_base,
                        x + xshift,
                        y_body_base + row_height
                    );
                    bb.add_BB(r.bb);
                    r = graphic.CanvasLine(
                        canvas,
                        x + xshift + 3,
                        y_body_base,
                        x + xshift + 3,
                        y_body_base + row_height,
                        { width: 2 }
                    );
                    bb.add_BB(r.bb);
                }
                break;
            case "r":
                r = this.render_simile_mark_plain(
                    draw,
                    canvas,
                    x,
                    y_body_base,
                    row_height,
                    base_body_height,
                    2,
                    true,
                    "l"
                );
                x += r.width;
                w = r.width;
                actual_boundary = x + w/2;
                if(draw) bb.add_BB(r.bb);
                break;
            default:
                throw "Internal error";
        }
        return { drawn: true, width: w, actual_boundary: actual_boundary, bb:bb, bb2:bb2.width()>0?bb2:null };
    }


}
