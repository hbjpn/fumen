## Modules

<dl>
<dt><a href="#module_Fumen">Fumen</a></dt>
<dd></dd>
<dt><a href="#module_Fumen">Fumen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RenderParam">RenderParam</a></dt>
<dd><p>An Object to specify prameters for rendering engine</p>
</dd>
<dt><a href="#canvasProvider">canvasProvider</a> ⇒ <code>HTMLElement</code> | <code>Promise.&lt;HTMLElement&gt;</code></dt>
<dd><p>Callback function when new canvas is requested by renderer.</p>
</dd>
</dl>

<a name="module_Fumen"></a>

## Fumen

* [Fumen](#module_Fumen)
    * [.Parser](#module_Fumen.Parser)
        * [new exports.Parser()](#new_module_Fumen.Parser_new)
        * [.parse(code)](#module_Fumen.Parser+parse)
    * [.DefaultRenderer](#module_Fumen.DefaultRenderer)
        * [new exports.DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
        * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="module_Fumen.Parser"></a>

### Fumen.Parser
**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  

* [.Parser](#module_Fumen.Parser)
    * [new exports.Parser()](#new_module_Fumen.Parser_new)
    * [.parse(code)](#module_Fumen.Parser+parse)

<a name="new_module_Fumen.Parser_new"></a>

#### new exports.Parser()
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
    * [new exports.DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
    * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="new_module_Fumen.DefaultRenderer_new"></a>

#### new exports.DefaultRenderer(canvas, param)
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

<a name="module_Fumen"></a>

## Fumen

* [Fumen](#module_Fumen)
    * [.Parser](#module_Fumen.Parser)
        * [new exports.Parser()](#new_module_Fumen.Parser_new)
        * [.parse(code)](#module_Fumen.Parser+parse)
    * [.DefaultRenderer](#module_Fumen.DefaultRenderer)
        * [new exports.DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
        * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="module_Fumen.Parser"></a>

### Fumen.Parser
**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  

* [.Parser](#module_Fumen.Parser)
    * [new exports.Parser()](#new_module_Fumen.Parser_new)
    * [.parse(code)](#module_Fumen.Parser+parse)

<a name="new_module_Fumen.Parser_new"></a>

#### new exports.Parser()
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
    * [new exports.DefaultRenderer(canvas, param)](#new_module_Fumen.DefaultRenderer_new)
    * [.render(track)](#module_Fumen.DefaultRenderer+render)

<a name="new_module_Fumen.DefaultRenderer_new"></a>

#### new exports.DefaultRenderer(canvas, param)
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

<a name="RenderParam"></a>

## RenderParam
An Object to specify prameters for rendering engine

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [paper_width] | <code>Number</code> | <code>120</code> | Width of the paper |
| [paper_height] | <code>Number</code> | <code>(96 * 297) / 25.4</code> | Height of the paper. If 0 is specified, the paper height is fit to its contents. |
| [text_size] | <code>float</code> | <code>1.0</code> | Text size as a ratio to default size. 0.9 means 10% smaller than default size. |

<a name="canvasProvider"></a>

## canvasProvider ⇒ <code>HTMLElement</code> \| <code>Promise.&lt;HTMLElement&gt;</code>
Callback function when new canvas is requested by renderer.

**Kind**: global typedef  
**Returns**: <code>HTMLElement</code> \| <code>Promise.&lt;HTMLElement&gt;</code> - HTML canvas element  

