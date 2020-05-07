# Fumen

Fumen is a markup language and rendering engine for music leadsheet creation with simple, easy and intuitive syntax, supporting various types of compoents used in popular music's leadsheet such as chord symbols, rhythm slashes, rest marks, repeat marks, reharsal marks, comments, lyrics. 

Differnt from the other sheetmusic redenring softwares, Fumen is **specialized for creating quick chord-name based leadsheets** which is oftenly used in popular music contexts.

This is Fumen2 which is a re-creationg of Fumen to improve the rendering times and to improve flexibility of rendering result to support various types of devices(desktop, smarphones etc).

## Quick start

* HTML

Just import fumen.js. No other depending modules !
```html
    <script type="text/javascript" src="fumen.js"></script>
```

* Javascript

Reneder a code for canvas element of which id is "canvas".

```javascript

// Make a parser object. 
var p = new Fumen.Parser();

// Parse fumen markdown texts
var track = p.parse(code);

// Target canvas element
var canvas = document.getElementById("canvas");

// Maker a renderer object.
var renderer = new Fumen.DefaultRenderer(canvas);

// Render it !
renderer.render(track);
```

## License
MIT

Fonts are under SIL open font license found in OLF.txt.
