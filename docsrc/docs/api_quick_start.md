# Quick Start
```javascript
    var code = ... ;
    var canvas = document.getElementById("canvas");

    var parser = new Fumen.Parser();
    var renderer = new Fumen.DefaultRenderer(canvas);

    var track = parser.parse(code);
    renderer.render(track);
```
