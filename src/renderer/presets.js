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
    y_footer_offset      : 30,

    title_font_size         : 24,
    subtitle_font_size      : 20,
    artist_font_size        : 20,
    reharsal_mark_font_size : 18,

    rm_area_height      : 24, // Reharsal Mark Area
    
};

