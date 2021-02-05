/**
 * Desktop settings (difference from default)
 */
export var A4 = {
    paper_width     : (96 * 210) / 25.4, // 96dpi * A4_width[mm] / 25.4[mm/inche], total canvas width = paper_width, internal paper width is paper_width/text_size
    paper_height    : (96 * 297) / 25.4, // 96dpi * A4_height[mm] / 25.4[mm/inche], total canvas height = paper_height. internal paper height is paper_height/text_size

    y_title_offset      : 50,
    y_subtitle_offset   : 70,
    y_artist_offset     : 90,
    y_first_page_offset : 120, // With header
    y_offset            : 50, // Without header
    x_offset            : 50,
    y_footer_offset     : 30,

    title_font_size         : 24,
    subtitle_font_size      : 20,
    artist_font_size        : 20,
    reharsal_mark_font_size : 18,

    rm_area_height      : 24, // Rehearsal Mark Area
    
};

export var Mobile = {
    // Paper setting
    paper_width     : 375, // iPhone 8 etc, the top share as of 2020
    paper_height    : 667, // iPhone 8 etc, , the top share as of 2020
    text_size       : 1.0, // total canvas size will be [paper_width * text_size, paper_height*text_size]. NOTE that even the canvas size is scaled with text_size, any coordinate unit/size infomation inside the renderer stays the same and no need to be conscious about text_size value.
    pixel_ratio     : 2, // integer. null : use system default, this is not configurable in source as it is memoried in global variable.
    ncol            : 1, // Number of columns of score inside the paper
    nrow            : 1, // Number of rows of score inside the paper

    // Papaer Margins
    y_title_offset      : 2,
    y_subtitle_offset   : 16,
    y_artist_offset     : 16,
    y_first_page_offset : 30, // With header
    y_offset            : 10, // Without header
    x_offset            : 10,
    y_footer_offset     : 10,

    // Font size settings
    reharsal_mark_font_size : 12,
    title_font_size         : 14,
    subtitle_font_size      : 12,
    artist_font_size        : 14, // 
    base_font_size          : 28, // Chord symbol font size
};
