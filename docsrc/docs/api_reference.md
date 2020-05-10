<a name="module_Fumen"></a>

## Fumen

* [Fumen](#module_Fumen)
    * [.Parser](#module_Fumen.Parser)
        * [new Parser()](#new_module_Fumen.Parser_new)
        * [.parse(code)](#module_Fumen.Parser+parse)
    * [.DefaultRenderer](#module_Fumen.DefaultRenderer)
        * [new DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
        * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="module_Fumen.Parser"></a>

### Fumen.Parser
**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  

* [.Parser](#module_Fumen.Parser)
    * [new Parser()](#new_module_Fumen.Parser_new)
    * [.parse(code)](#module_Fumen.Parser+parse)

<a name="new_module_Fumen.Parser_new"></a>

#### new Parser()
Parser class for fumen markdown code

<a name="module_Fumen.Parser+parse"></a>

#### parser.parse(code)
Parse the fumen markdown code

**Kind**: instance method of [<code>Parser</code>](#module_Fumen.Parser)  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>String</code> | Markdown code |

<a name="module_Fumen.DefaultRenderer"></a>

### Fumen.DefaultRenderer
**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  

* [.DefaultRenderer](#module_Fumen.DefaultRenderer)
    * [new DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
    * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="new_module_Fumen.DefaultRenderer_new"></a>

#### new DefaultRenderer(canvas, param)
Default Renderer class for HTML canvas element


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLElement</code> \| [<code>canvasProvider</code>](#canvasProvider) | HTML canvas element to draw the image. Or, callback function which returns HTML canvas element. |
| param | [<code>RenderParam</code>](#RenderParam) | Parameter for the rednering |

<a name="module_Fumen.DefaultRenderer+render"></a>

#### defaultRenderer.render(track)
Render the track

**Kind**: instance method of [<code>DefaultRenderer</code>](#module_Fumen.DefaultRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| track | <code>Track</code> | Track object passed from Parser.parse function |

<a name="A4"></a>

## A4
Desktop settings (difference from default)

**Kind**: global variable  
<a name="RenderParam"></a>

## RenderParam
An Object to specify prameters for rendering engine

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [paper_width] | <code>Number</code> | <code>375</code> | Width of the paper |
| [paper_height] | <code>Number</code> | <code>667</code> | Height of the paper. If 0 is specified, the paper height is fit to its contents. |
| [text_size] | <code>float</code> | <code>1.0</code> | Text size as a ratio to default size. 0.9 means 10% smaller than default size. |
| [base_font_size] | <code>int</code> |  | Font size of the chord symbols. |
| [title_font_size] | <code>int</code> |  | Title font size |
| [artist_font_size] | <code>int</code> |  | Artist font size |
| [x_offset] | <code>int</code> |  | Margin of the left and right side of the paper. |
| [x_offset_left] | <code>int</code> |  | Margin of the right side of the paper. |
| [x_offset_right] | <code>int</code> |  | Margin of the left side of the paper. |
| [y_offset] | <code>int</code> |  | Margin of the top and bottom side of the paper. |
| [y_offset_top] | <code>int</code> | <code></code> | Margin of top side of the paper. In case header is drawn, this does not apply. |
| [y_offset_bottom] | <code>int</code> | <code></code> | Margin of top side of the paper. In case header is drawn, this does not apply |
| [y_header_margin] | <code>int</code> |  | Margin of the top y when header is shown (normally, firstpage) |
| [y_title_offset] | <code>int</code> |  | Top offset for title |
| [y_subtitle_offset] | <code>int</code> |  | Top offset for sub-title |
| [y_artist_offset] | <code>int</code> |  | Top offset for artist row |
| [y_footer_offset] | <code>int</code> |  | Bottom offset for footer |

<a name="canvasProvider"></a>

## canvasProvider ⇒ <code>HTMLElement</code> \| <code>Promise.&lt;HTMLElement&gt;</code>
Callback function when new canvas is requested by renderer.

**Kind**: global typedef  
**Returns**: <code>HTMLElement</code> \| <code>Promise.&lt;HTMLElement&gt;</code> - HTML canvas element  

