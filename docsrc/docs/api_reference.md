<a name="module_Fumen"></a>

## Fumen

* [Fumen](#module_Fumen)
    * [.Node](#module_Fumen.Node)
    * [.Element](#module_Fumen.Element) ⇐ <code>Node</code>
    * [.Track](#module_Fumen.Track) ⇐ <code>Element</code>
    * [.RehearsalGroup](#module_Fumen.RehearsalGroup) ⇐ <code>Element</code>
    * [.Block](#module_Fumen.Block) ⇐ <code>Element</code>
    * [.Measure](#module_Fumen.Measure) ⇐ <code>Element</code>
    * [.Rest](#module_Fumen.Rest) ⇐ <code>Element</code>
    * [.Simile](#module_Fumen.Simile) ⇐ <code>Element</code>
    * [.Chord](#module_Fumen.Chord) ⇐ <code>Element</code>
        * [.chordMidSerialize(p, callback)](#module_Fumen.Chord.chordMidSerialize)
    * [.Syncopation](#module_Fumen.Syncopation) ⇐ <code>Element</code>
    * [.LoopIndicator](#module_Fumen.LoopIndicator) ⇐ <code>Element</code>
    * [.Space](#module_Fumen.Space) ⇐ <code>Element</code>
    * [.LongRest](#module_Fumen.LongRest) ⇐ <code>Element</code>
    * [.Time](#module_Fumen.Time) ⇐ <code>Element</code>
    * [.MeasureBoundary](#module_Fumen.MeasureBoundary) ⇐ <code>Element</code>
    * [.MeasureBoundaryMark](#module_Fumen.MeasureBoundaryMark) ⇐ <code>MeasureBoundary</code>
    * [.LoopBeginMark](#module_Fumen.LoopBeginMark) ⇐ <code>MeasureBoundary</code>
    * [.LoopEndMark](#module_Fumen.LoopEndMark) ⇐ <code>MeasureBoundary</code>
    * [.LoopBothMark](#module_Fumen.LoopBothMark) ⇐ <code>MeasureBoundary</code>
    * [.MeasureBoundaryFinMark](#module_Fumen.MeasureBoundaryFinMark) ⇐ <code>MeasureBoundary</code>
    * [.MeasureBoundaryDblSimile](#module_Fumen.MeasureBoundaryDblSimile) ⇐ <code>MeasureBoundary</code>
    * [.DaCapo](#module_Fumen.DaCapo) ⇐ <code>Element</code>
    * [.DalSegno](#module_Fumen.DalSegno) ⇐ <code>Element</code>
    * [.Segno](#module_Fumen.Segno) ⇐ <code>Element</code>
    * [.Coda](#module_Fumen.Coda) ⇐ <code>Element</code>
    * [.ToCoda](#module_Fumen.ToCoda) ⇐ <code>Element</code>
    * [.Fine](#module_Fumen.Fine) ⇐ <code>Element</code>
    * [.Comment](#module_Fumen.Comment) ⇐ <code>Element</code>
    * [.Lyric](#module_Fumen.Lyric) ⇐ <code>Element</code>
    * [.Variable](#module_Fumen.Variable) ⇐ <code>Node</code>
    * [.VirtualElement](#module_Fumen.VirtualElement)
    * [.GenericRow](#module_Fumen.GenericRow) ⇐ <code>VirtualElement</code>
    * [.Parser](#module_Fumen.Parser)
        * [new Parser()](#new_module_Fumen.Parser_new)
        * [.parse(code)](#module_Fumen.Parser+parse)
    * [.DefaultRenderer](#module_Fumen.DefaultRenderer)
        * [new DefaultRenderer(canvas, [param])](#new_module_Fumen.DefaultRenderer_new)
        * [.render(track, [param])](#module_Fumen.DefaultRenderer+render)

<a name="module_Fumen.Node"></a>

### Fumen.Node
Abstract base class represetns the fumen code tree

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
<a name="module_Fumen.Element"></a>

### Fumen.Element ⇐ <code>Node</code>
Abstract class represents musical elements

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Node</code>  
<a name="module_Fumen.Track"></a>

### Fumen.Track ⇐ <code>Element</code>
A class represents a track

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.RehearsalGroup"></a>

### Fumen.RehearsalGroup ⇐ <code>Element</code>
A class represents a rehearsal group

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Block"></a>

### Fumen.Block ⇐ <code>Element</code>
A class represents a block

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Measure"></a>

### Fumen.Measure ⇐ <code>Element</code>
A class represents a measure

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Rest"></a>

### Fumen.Rest ⇐ <code>Element</code>
A class represents a rest

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Simile"></a>

### Fumen.Simile ⇐ <code>Element</code>
A class represents a simile mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Chord"></a>

### Fumen.Chord ⇐ <code>Element</code>
A class represents a chord

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Chord.chordMidSerialize"></a>

#### Chord.chordMidSerialize(p, callback)
Convert the data structure (chord mids) to flat list and code string.

**Kind**: static method of [<code>Chord</code>](#module_Fumen.Chord)  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>\*</code> | Data structure of chord mids. |
| callback | <code>\*</code> | callback called for each leaf element. (Called synchrnously) |

<a name="module_Fumen.Syncopation"></a>

### Fumen.Syncopation ⇐ <code>Element</code>
A class represents a syncopation

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.LoopIndicator"></a>

### Fumen.LoopIndicator ⇐ <code>Element</code>
A class represents a loop indicator

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Space"></a>

### Fumen.Space ⇐ <code>Element</code>
A class represents a space

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.LongRest"></a>

### Fumen.LongRest ⇐ <code>Element</code>
A class represents a long rest

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Time"></a>

### Fumen.Time ⇐ <code>Element</code>
A class represents a time signature

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.MeasureBoundary"></a>

### Fumen.MeasureBoundary ⇐ <code>Element</code>
Abstract class represents a measure boundary

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.MeasureBoundaryMark"></a>

### Fumen.MeasureBoundaryMark ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary with signle or double line

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.LoopBeginMark"></a>

### Fumen.LoopBeginMark ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary at the beginning of loop

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.LoopEndMark"></a>

### Fumen.LoopEndMark ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary at the end of loop

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.LoopBothMark"></a>

### Fumen.LoopBothMark ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary at the end and beginning of loop

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.MeasureBoundaryFinMark"></a>

### Fumen.MeasureBoundaryFinMark ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary at the end of a piece

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.MeasureBoundaryDblSimile"></a>

### Fumen.MeasureBoundaryDblSimile ⇐ <code>MeasureBoundary</code>
Class represents a measure boundary with double simile mark over it

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>MeasureBoundary</code>  
<a name="module_Fumen.DaCapo"></a>

### Fumen.DaCapo ⇐ <code>Element</code>
Class represents a DaCapo mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.DalSegno"></a>

### Fumen.DalSegno ⇐ <code>Element</code>
Class represents a DalSegno mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Segno"></a>

### Fumen.Segno ⇐ <code>Element</code>
Class represents a Segno mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Coda"></a>

### Fumen.Coda ⇐ <code>Element</code>
Class represents a Coda mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.ToCoda"></a>

### Fumen.ToCoda ⇐ <code>Element</code>
Class represents a To Coda mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Fine"></a>

### Fumen.Fine ⇐ <code>Element</code>
Class represents a Fine mark

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Comment"></a>

### Fumen.Comment ⇐ <code>Element</code>
Class represents a Comment

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Lyric"></a>

### Fumen.Lyric ⇐ <code>Element</code>
Class represents a lyric

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Element</code>  
<a name="module_Fumen.Variable"></a>

### Fumen.Variable ⇐ <code>Node</code>
Class represents a Variable. Not always shown in the rendered image (up to renderer implementation)

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>Node</code>  
<a name="module_Fumen.VirtualElement"></a>

### Fumen.VirtualElement
Virtual/Abstract element used for GUI based editting. Not appears explicitly in the original code nor in rendered image.
Only used in HitManager

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
<a name="module_Fumen.GenericRow"></a>

### Fumen.GenericRow ⇐ <code>VirtualElement</code>
Class represents the concept of row in the renderer. How to use this is up to renderer.

**Kind**: static class of [<code>Fumen</code>](#module_Fumen)  
**Extends**: <code>VirtualElement</code>  
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
    * [new DefaultRenderer(canvas, [param])](#new_module_Fumen.DefaultRenderer_new)
    * [.render(track, [param])](#module_Fumen.DefaultRenderer+render)

<a name="new_module_Fumen.DefaultRenderer_new"></a>

#### new DefaultRenderer(canvas, [param])
Default Renderer class for HTML canvas element


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>HTMLElement</code> \| [<code>canvasProvider</code>](#canvasProvider) |  | HTML canvas element to draw the image. Or, callback function which returns HTML canvas element. |
| [param] | [<code>RenderParam</code>](#RenderParam) | <code>{}</code> | Parameter for the rednering. If not specified, internal default values are used. |

<a name="module_Fumen.DefaultRenderer+render"></a>

#### defaultRenderer.render(track, [param])
Render the track

**Kind**: instance method of [<code>DefaultRenderer</code>](#module_Fumen.DefaultRenderer)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| track | <code>Track</code> |  | Track object passed from Parser.parse function |
| [param] | [<code>RenderParam</code>](#RenderParam) | <code>{}</code> | Rendering parameter for this rendering. Supercedes(field by field) the prameters specified in constructor. |

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
| [x_offset_left] | <code>int</code> | <code></code> | Margin of the right side of the paper. x_offset applies when null is specified. |
| [x_offset_right] | <code>int</code> | <code></code> | Margin of the left side of the paper. x_offset applies when null is specified. |
| [y_offset] | <code>int</code> |  | Margin of the top and bottom side of the paper. |
| [y_offset_top] | <code>int</code> | <code></code> | Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply. |
| [y_offset_bottom] | <code>int</code> | <code></code> | Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply |
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

