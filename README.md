# Fumen

Fumen is a lightweight markup language and rendering engine designed to generate chord charts and rhythm charts from simple, easy-to-write text. Fumen supports various types of components commonly used in popular music chord and rhythm charts, such as chord symbols, rhythm slashes, rest marks, repeat marks, rehearsal marks, comments, and lyrics. Fumen is **specialized for creating quick chord and rhythm charts** that are often used in popular music contexts. It is different from other sheet music rendering software and is designed to be simple and intuitive to use. 

## Quick start

* HTML

Just import fumen.js. No other depending modules !
```html
    <script type="text/javascript" src="fumen.js"></script>
```

You can also use the released version in jsdeliver CDN

```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hbjpn/fumen@1.3.2/dist/fumen.js"></script>
```

Minified version :

```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hbjpn/fumen@1.3.2/dist/fumen.min.js"></script>
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

