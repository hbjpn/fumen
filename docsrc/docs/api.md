# APIs


## Quick Start
```javascript
    var code = ... ;
    var canvas = document.getElementById("canvas");

    var parser = new Fumen.Parser();
    var renderer = new Fumen.DefaultRenderer(canvas);

    var track = parser.parse(code);
    renderer.render(track);
```

## Parser

Parser class parses the markdown text of the Fumen.

## DefaultRenderer

DefaultRenderer class is the default rendering engine for Fumen. Image will be drawn in the canvas element.

