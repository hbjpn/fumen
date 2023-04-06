# Fumen

Fumen is a lightweight markup language and rendering engine for chord and rhthm chart with simple, easy and intuitive syntax, supporting various types of compoents used in popular music's chord and rhythm chart such as chord symbols, rhythm slashes, rest marks, repeat marks, rehearsal marks, comments, lyrics. 

Differnt from the other sheetmusic redenring softwares, Fumen is **specialized for creating quick chord and rhythm chart** which is oftenly used in popular music contexts.

## Quick start

* HTML

Just import fumen.js. No other depending modules !
```html
    <script type="text/javascript" src="fumen.js"></script>
```

You can also use the released version in jsdeliver CDN

```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hbjpn/fumen@1.3.0/dist/fumen.js"></script>
```

Minified version :

```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hbjpn/fumen@1.3.0/dist/fumen.min.js"></script>
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

## Documentation
https://hbjpn.github.io/fumen/

## License
MIT

Fonts are under SIL open font license found in OLF.txt.

