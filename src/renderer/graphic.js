import "@babel/polyfill";
import * as fonts from "./fonts";

var G_memCanvasStore = {}; // refered by ratio&zoom
//var G_memCanvas = null;
var G_mem_Canvas_size = [600, 600];
//var G_pixelRatio = null;
//var G_zoom = null;
// Utilities
export class BoundingBox{
    constructor(x, y, w=0, h=0){
        this.x = [100000, -100000];
        this.y = [100000, -100000];
        if(x !== undefined && y !== undefined){
            this.add(x, y, w, h);
        }
    }
    add(x, y, w=0, h=0){
        this.x[0] = Math.min(x, this.x[0]);
        this.x[1] = Math.max(x+w, this.x[1]);
        this.y[0] = Math.min(y, this.y[0]);
        this.y[1] = Math.max(y+h, this.y[1]);
        return this;
    }
    add_BB(bb){ // add another bounding box
        this.x[0] = Math.min(bb.x[0], this.x[0]);
        this.x[1] = Math.max(bb.x[1], this.x[1]);
        this.y[0] = Math.min(bb.y[0], this.y[0]);
        this.y[1] = Math.max(bb.y[1], this.y[1]);
        return this;
    }
    add_rect(rect){
        this.x[0] = Math.min(rect.x, this.x[0]);
        this.x[1] = Math.max(rect.x+rect.w, this.x[1]);
        this.y[0] = Math.min(rect.y, this.y[0]);
        this.y[1] = Math.max(rect.y+rect.h, this.y[1]);
        return this;
    }
    expand(x0, x1, y0, y1){
        this.x[0] -= x0;
        this.x[1] += x1;
        this.y[0] -= y0;
        this.y[1] += y1;
        return this;
    }
    move(dx, dy){
        this.x[0] += dx;
        this.x[1] += dx;
        this.y[0] += dy;
        this.y[1] += dy;
        return this;
    }
    scale(sx, sy){
        this.x[0] *= sx;
        this.x[1] *= sx;
        this.y[0] *= sy;
        this.y[1] *= sy;
        return this;
    }
    clone(){
        return new BoundingBox(this.x[0], this.y[0], this.x[1]-this.x[0], this.y[1]-this.y[0]);
    }
    get(){
        return {x:this.x[0],y:this.y[0],w:this.x[1]-this.x[0], h:this.y[1]-this.y[0]};
    }
    width(){
        return this.x[1]-this.x[0];
    }
    height(){
        return this.y[1]-this.y[0];
    }
}

export function canvasRect(canvas, x, y, w, h, fill=null) {
    var context = canvas.getContext("2d");
    context.save();
    if(fill){
        context.fillStyle=fill;
        context.fillRect(x, y, w, h);
    }else{
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
    }
    context.restore();
}

export function canvasCircle(canvas, x, y, r, draw=true) {
    if(draw){
        var context = canvas.getContext("2d");
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.fill();
    }
    //return {bounding_box:{x:x-r,y:y-r,w:2*r,h:2*r}};
    return {bb:new BoundingBox(x-r,y-r,2*r,2*r)};
    
}

export function canvasLine(canvas, x0, y0, x1, y1, opt, draw=true) {
    if(draw){
        var context = canvas.getContext("2d");
        context.save(); // In iOS 16.1, somewhat lineWidth is not reset....
        context.beginPath();
        if (opt && opt.dash) context.setLineDash([2, 2]);
        if (opt && opt.width) context.lineWidth = opt.width;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.stroke();
        //if (opt && opt.dash) context.setLineDash([]);
        //if (opt && opt.width) context.lineWidth = 1;
        context.restore(); // To restore the old state
    }
    //return {bounding_box:{x:Math.min(x0,x1), y:Math.min(y0,y1), w:Math.abs(x0-x1), h:Math.abs(y0-y1)}};
    return {bb:new BoundingBox(Math.min(x0,x1), Math.min(y0,y1), Math.abs(x0-x1), Math.abs(y0-y1))};
}

export function canvasPolygon(canvas, points, close=false, fill=false, opt=null, draw=true){

    let bb = new BoundingBox();
    for(let i=0; i < points.length; ++i){
        bb.add(points[i][0], points[i][1]);
    }

    if(draw){
        var context = canvas.getContext("2d");

        context.save();

        let orgValues = {};
        if (opt != null) {
            for (let key in opt) {
                orgValues[key] = context[key];
                context[key] = opt[key];
            }
        }

        context.beginPath();
        for(let i=0; i < points.length; ++i){
            if(i==0){
                context.moveTo(points[i][0], points[i][1]);
            }else{
                context.lineTo(points[i][0], points[i][1]);
            }
        }
        if(close){
            context.closePath();
        }
        context.stroke();
        if(fill){
            context.fill();
        }

        context.restore();
    }

    return {bb:bb};
}

export function canvasbBzierCurve(canvas, points, close=false, fill=false, opt=null){
    // points shuld have 4 points, (start point, control point 1, control point 2, end point)
    var context = canvas.getContext("2d");

    context.save();

    let orgValues = {};
    if (opt != null) {
        for (let key in opt) {
            orgValues[key] = context[key];
            context[key] = opt[key];
        }
    }

    if(opt && "clip-rect" in opt){
        context.beginPath();
        context.rect(opt["clip-rect"][0], opt["clip-rect"][1], opt["clip-rect"][2], opt["clip-rect"][3]);
        context.clip();
    }

    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);
    context.bezierCurveTo(
        points[1][0], points[1][1],
        points[2][0], points[2][1],
        points[3][0], points[3][1]);

    if(close){
        context.closePath();
    }
    context.stroke();
    if(fill){
        context.fill();
    }

    context.restore();
}

export function canvasPath(canvas, svgpathdata, fill=false, opt) {

    var ctx = canvas.getContext("2d");

    ctx.save();

    let orgValues = {};
    if (opt != null) {
        for (let key in opt) {
            orgValues[key] = ctx[key];
            ctx[key] = opt[key];
        }
    }

    if(opt && "clip-rect" in opt){
        ctx.beginPath();
        ctx.rect(opt["clip-rect"][0], opt["clip-rect"][1], opt["clip-rect"][2], opt["clip-rect"][3]);
        ctx.clip();
    }

    var p = new Path2D(svgpathdata);
    ctx.stroke(p);
    if(fill)
       ctx.fill(p);

    ctx.restore();
 /*   if (opt != null) {
        for (let key in orgValues) {
            ctx[key] = orgValues[key];
        }
    }
    */
}

// confs as array
export function fontDescSingle(fsize,conf){ //fontfamily,bold) {
    let sc = "";
    if(conf && conf["font-weight"])  sc += (conf["font-weight"]+" ");
    if(conf && conf["font-style"])   sc += (conf["font-style"]+ " ");
    if(conf && conf["font-variant"]) sc += (conf["font-variant"]+ " ");
    sc += (fsize+ "px ");
    sc += ((conf && conf["font-family"])||"'Arial'"); // not the original config shoud have quotation mark if it means concrete font name. For generic name, quoation is not needed.
    return sc;
}

// confs as array
export function fontDesc(fsize,confs){ //fontfamily,bold) {
    //return  (bold?"bold ":"")+fsize + "px '" + (fontfamily?fontfamily:"Arial") + "'";
    let s = "";
    if(!confs) return fsize+ "px "+"'Arial'"; // Use default settings
    confs.forEach((conf,i)=>{
        let sc = fontDescSingle(fsize, conf);
        s += sc;
        if(i < confs.length-1) s += ",";
    });
    return s;
}

export function getCharProfile(fsize,confs,ratio,zoom) {
    let font = fontDesc(fsize,confs);
    let refstr = font+"/"+ratio+"/"+zoom;

    let yroom = null;
    if (refstr in G_y_char_offsets) yroom = G_y_char_offsets[refstr];
    else {
        let memkey = ratio+"/"+zoom;
        if (!(memkey in G_memCanvasStore)) {
            let memCanvas = document.createElement("canvas");
            setupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
            //console.log("Pixel ratio = " + ratio + " , zoom = " + zoom);
            G_memCanvasStore[memkey] = memCanvas;
        }
        yroom = judgeTextYPosOffset(G_memCanvasStore[memkey], font); //bold, fontfamily, fsize);
        G_y_char_offsets[refstr] = yroom;
    }

    return yroom;
}

export function canvasText(canvas, x, y, text, fsize, align, xwidth, notdraw, opt) {
    var context = canvas.getContext("2d");
    var ta = {
        l: "left",
        c: "center",
        r: "right",
        d: "left" // default
    };
    var tb = {
        t: "top",
        m: "middle",
        b: "bottom",
        d: "top" // default
    };
    var orgfont = context.font;
    let font = fontDesc(fsize, opt && opt.font); //opt?opt.fontfamily:null,opt?opt.bold:null);

    let yadjust = 0;
    let yroom = null;

    context.font = font; //bold + fsize + "px '" + fontfamily + "'";
    context.textAlign = ta[align[0]];
    
    if(opt&&opt.raw){
        // DO othing
        context.textBaseline = tb[align[1]]; //tb[align[1]];
    
    }else{
        yroom = getCharProfile(fsize, opt && opt.font, canvas.ratio,canvas.zoom);


        if (align[1] == "t") {
            yadjust = -yroom.top_room;
        } else if (align[1] == "m") {
            yadjust = -(yroom.top_room + yroom.height / 2.0); // This is just a huristic guess
        } else if (align[1] == "b"){
            yadjust = -(yroom.top_room + yroom.height);
        } else{
            // default
        }

        context.textBaseline = "top"; //tb[align[1]];
    
    }

    let orgValues = {};
    if (opt != null) {
        for (let key in opt) {
            orgValues[key] = context[key];
            context[key] = opt[key];
        }
    }

    if (notdraw != true){
        if(xwidth != null) context.fillText(text, x, y + yadjust, xwidth);
        else context.fillText(text, x, y + yadjust); // Nothing drawn if "undefined" is passed for 4th argument. 
    }
    var width = context.measureText(text).width;
    if (xwidth != null) width = Math.min(xwidth, width);

    // eslint-disable-next-line no-constant-condition
    if (false) {
        canvasLine(canvas, x, y, x + xwidth, y);
        canvasLine(canvas, x, y + yadjust, x + xwidth, y + yadjust, {
            dash: true
        });
        canvasLine(canvas, x, y, x, y + fsize);
    }

    if (opt != null) {
        for (let key in orgValues) {
            context[key] = orgValues[key];
        }
    }
    context.font = orgfont;

    // TODO : For backward compatibility, width is kept as is. Remove in the later.
    let xadjust = {"left":0, "center":-width/2, "right":-width}[ta[align[0]]];
    var ret = { width: width, bb:new BoundingBox(x + xadjust, y + yadjust, width, yroom.height) };
    Object.assign(ret, yroom);
    return ret;
}

export function canvasTextWithBox(canvas, x, y, text, fsize, margin=2, min_width=null) {
    let ret = null;
    if(min_width != null){
        ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt", undefined, true);
        if(ret.width < min_width){
            ret = canvasText(canvas, x + margin + min_width/2, y + margin, text, fsize, "ct");
            ret.width = min_width;
        }else{
            ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt");
        }
    }else{
        ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt");
    }
    canvasRect(canvas, x, y, ret.width + 2*margin, ret.height + 2*margin);
    //return {x:x, y:y, width: ret.width+2*margin, height:ret.height+2*margin};
    return {bb: new BoundingBox(x, y, ret.width+2*margin, ret.height+2*margin)};
}

export function canvasImage(canvas, img, x, y, w, h, align = "lt", draw=true)
{
    let act_w = img.width;
    let act_h = img.height;

    // only if one of w or y is not specified, scaling applies. 
    if(w != null && h == null){
        let s = img.width / w;
        act_w = w;
        act_h = img.height / s;
    }else if(w == null && h != null){
        let s = img.height / h;
        act_h = h;
        act_w = img.width / s;
    }else if(w != null && h != null){
        act_h = h;
        act_w = w;
    }

    let x_shift = 0;
    if(align[0]=="r") x_shift = -act_w;
    else if(align[0]=="c") x_shift = -act_w/2;

    let y_shift = 0;
    if(align[1]=="b") y_shift = -act_h;
    else if(align[1]=="m") y_shift = -act_h/2;

    if(draw){
        let ctx = canvas.getContext("2d");
        ctx.drawImage(
            img,
            x + x_shift,
            y + y_shift,
            act_w,
            act_h
        );
    }

    //return {bounding_box:{x:x+x_shift, y:y+y_shift,w:act_w,h:act_h}};
    return {bb:new BoundingBox(x+x_shift, y+y_shift, act_w, act_h)};
    
}

// SVG related
export function svgLine(x0, y0, x1, y1)
{
	return ("M"+x0+","+y0+" L"+x1+","+y1);
}

// SVG related
export function svgPath(point_array, close)
{
	var svg = "M";
	for(var i = 0; i < point_array.length; ++i){
		svg += (point_array[i][0]+","+point_array[i][1]);
		if(i < point_array.length-1)
			svg += " L";
	}
	if(close === true){
		svg += "Z";
	}
	return svg;
}

export function svgArcBezie(point_array)
{
	// 4 points are required
	// Draw bround braces
	var svg = "M ";
	svg += ( point_array[0][0] + " " + point_array[0][1]);
	svg += " C";
	for(var i = 1; i < point_array.length; ++i)
		svg += (point_array[i][0] + " " + point_array[i][1] + " ");
	return svg;
}

// Text rendering 

var G_y_char_offsets = {};


export function getPixelRatio(canvas) {
    var ctx = canvas.getContext("2d"),
        dpr = window.devicePixelRatio || 1;
    let bsr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;

    return dpr / bsr;
}

export function setupHiDPICanvas(canvas, w, h, ratio, zoom, zoomChangeOnly=false) {
    if (!ratio) ratio = getPixelRatio(canvas);
    if (!zoom) zoom = 1.0;

    canvas.ratio = ratio;
    canvas.zoom = zoom;

    // This is not a good manner, though...
    if(zoomChangeOnly){
        // Reset absolute transforms. Only called at the begging of the rendering    
        let ctx = canvas.getContext("2d");    
        ctx.setTransform(ratio * zoom, 0, 0, ratio * zoom, 0, 0);
    }else{
        let ctx = canvas.getContext("2d");
        canvas.width = w * ratio * zoom;
        canvas.height = h * ratio * zoom;
        canvas.style.width = w * zoom + "px";
        canvas.style.height = h * zoom + "px";
        ctx.setTransform(ratio * zoom, 0, 0, ratio * zoom, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return { ratio: ratio };
}

function judgeTextYPosOffset(canvas, font, code)/*bold, fontfamily, fontsize) */{
    var context = canvas.getContext("2d");
    if(!code) code = "D";

    var bs = 300; //fontsize * G_pixelRatio;

    context.clearRect(0, 0, bs, bs);
    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, bs, bs);
    //context.font = bold + fontsize + "px '" + fontfamily + "'";
    context.fillStyle = "rgba(0,0,0,1)";
    context.font = font;
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText(code, 0, 0);
    var imageData = context.getImageData(0, 0, bs, bs); // Always inside fontsize*fontsize box
    var data = imageData.data;
    var top_room = 0;
    var bottom_room = 0;

    //console.log(imageData.width, imageData.height, data.length);

    var found_nonwhite = false;
    //console.log(imageData);
    var row;
    var col;
    
    for (row = 0; row < imageData.height; ++row) {
        for (col = 0; col < imageData.width; ++col) {
            var R = data[col * 4 + 0 + row * imageData.width * 4];
            var G = data[col * 4 + 1 + row * imageData.width * 4];
            var B = data[col * 4 + 2 + row * imageData.width * 4];
            var A = data[col * 4 + 3 + row * imageData.width * 4];
            var nonwhite = A > 0 && (R < 255 || G < 255 || B < 255);
            //console.log([row, col, R,G,B,A]);
            if (nonwhite) {
                found_nonwhite = true;
                
                break;
            }
        }
        if (found_nonwhite) break;
        else ++top_room;
    }

    // Judge hight of char
    /*
    var found_white = false;
    var M_height = 0;
    for (; row < imageData.height; ++row) {
        //for(; col < imageData.width; ++col ){
        let R = data[col * 4 + 0 + row * imageData.width * 4];
        let G = data[col * 4 + 1 + row * imageData.width * 4];
        let B = data[col * 4 + 2 + row * imageData.width * 4];
        let A = data[col * 4 + 3 + row * imageData.width * 4];
        //console.log([row, col, R,G,B,A]);
        let nonwhite = A > 0 && (R < 255 || G < 255 || B < 255);
        if (!nonwhite) {
            found_white = true;
            break;
        }
        //}
        if (found_white) break;
        else ++M_height;
    }*/

    found_nonwhite = false;
    for (row = imageData.height-1; row >= 0; --row) {
        for (col = 0; col < imageData.width; ++col) {
            let R = data[col * 4 + 0 + row * imageData.width * 4];
            let G = data[col * 4 + 1 + row * imageData.width * 4];
            let B = data[col * 4 + 2 + row * imageData.width * 4];
            let A = data[col * 4 + 3 + row * imageData.width * 4];
            //console.log([row, col, R,G,B,A]);
            let nonwhite = A > 0 && (R < 255 || G < 255 || B < 255);
            if (nonwhite) {
                found_nonwhite = true;
                break;
            }
        }
        if (found_nonwhite) break;
        else ++bottom_room;
    }

    // here the raw pixel data resolution is G_pixelRatio * G_zoom times. (Same value as setTransform in SetupHIDPICanvas) 
    return {
        top_room: top_room / canvas.ratio / canvas.zoom,
        height: (imageData.height - top_room - bottom_room) / canvas.ratio / canvas.zoom,
        bottom_room: bottom_room / canvas.ratio / canvas.zoom,
        imgheight: imageData.height / canvas.ratio / canvas.zoom
    };

}

export function getFontSizeFromHeight(height, fontfamily, code, tol, opt, ratio, zoom){
    // Determine the font size of which height is same as specified value.
    // TODO : Binary search
    let canvas_to_use = opt?opt.canvas:null;

    let memkey = ratio + "/" + zoom;
    if (!(memkey in G_memCanvasStore)) {
        let memCanvas = document.createElement("canvas");
        setupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
        //console.log("Pixel ratio = " + ratio, + " , Zoom = " + zoom);
        G_memCanvasStore[memkey] = memCanvas;
    }

    if(!canvas_to_use)
        canvas_to_use = G_memCanvasStore[memkey];
    
    let maxLoop = 100;
    var curLow = 1;
    var curHigh = 500;
    var px = (curLow+curHigh)/2;
    var loop = 0;
    if(!tol) tol=0.5;
    while(loop < maxLoop){
        var ret = judgeTextYPosOffset(canvas_to_use, px + "px '"+fontfamily+"'", code);
        //console.log("px="+px+", target height="+height);
        //console.log(ret);
        //var tol = 0.4;
        if(ret.height > height+tol){
            curHigh = px;
            px = (curLow + curHigh)/2;
        }else if(ret.height < height-tol){
            curLow = px;
            px = (curLow + curHigh)/2;
        }else{
            return px;
        }
        ++loop;
    }
    return px;
}

export function releaseCanvas(canvas){
    // To eliminate memory leak, explictly resize to 0.
    canvas.width = 0;
    canvas.height = 0;
    canvas.style.width = "0px";
    canvas.style.height = "0px";
}

export var G_imgmap = {};

export function preloadImages(imageurls) {
    var promises = [];

    for (var i = 0; i < imageurls.length; ++i) {
        if(imageurls[i] in G_imgmap) continue;
        var p = new Promise(function(resolve, reject) {
            var url = imageurls[i];
            var img = new Image();
            img.src = url;
            img.onload = function() {
                resolve({ img: img, url: url });
            };
        });
        promises.push(p);
    }
    
    return Promise.all(promises).then(result => {
        // make map with url
        for (var ii = 0; ii < result.length; ++ii) {
            G_imgmap[result[ii].url] = result[ii].img;
        }
        return result;
    });
}

var embedFontPromise = null;

export function PreloadJsonFont() {

    if(embedFontPromise){
        // To eliminate multiple loads
        return embedFontPromise;
    }

    let promises = [];
    for(let glyphname in fonts.fontData){
        let p = new Promise((resolve,reject)=>{
            let img = new Image();
            img.src = fonts.fontData[glyphname].dataURL;
            img.onload = function() {
                resolve({ img: img, url: glyphname });
            };
        });
        promises.push(p);
    }
    
    embedFontPromise = Promise.all(promises)
    .then((result)=>{
        // make map with url
        for (var ii = 0; ii < result.length; ++ii) {
            G_imgmap[result[ii].url] = result[ii].img;
        }
        return result;
    });

    return embedFontPromise;
}
