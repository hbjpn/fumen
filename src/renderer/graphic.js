import "@babel/polyfill";

var G_memCanvasStore = {}; // refered by ratio&zoom
//var G_memCanvas = null;
var G_mem_Canvas_size = [600, 600];
//var G_pixelRatio = null;
//var G_zoom = null;

export function CanvasRect(canvas, x, y, w, h, fill=null) {
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

export function CanvasCircle(canvas, x, y, r, draw=true) {
    if(draw){
        var context = canvas.getContext("2d");
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.fill();
    }
    return {bounding_box:{x:x-r,y:y-r,w:2*r,h:2*r}};
}

export function CanvasLine(canvas, x0, y0, x1, y1, opt, draw=true) {
    if(draw){
        var context = canvas.getContext("2d");
        context.beginPath();
        if (opt && opt.dash) context.setLineDash([2, 2]);
        if (opt && opt.width) context.lineWidth = opt.width;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.stroke();
        if (opt && opt.dash) context.setLineDash([]);
        if (opt && opt.width) context.lineWidth = 1;
    }
    return {bounding_box:{x:Math.min(x0,x1), y:Math.min(y0,y1), w:Math.abs(x0-x1), h:Math.abs(y0-y1)}};
}

export function CanvasPolygon(canvas, points, close=false, fill=false, opt=null){
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
    for(var i=0; i < points.length; ++i){
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

export function CanvasbBzierCurve(canvas, points, close=false, fill=false, opt=null){
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

export function CanvasPath(canvas, svgpathdata, fill=false, opt) {

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

export function fontDesc(fsize,fontfamily,bold) {
    return  (bold?"bold ":"")+fsize + "px '" + (fontfamily?fontfamily:"Arial") + "'";
}

export function GetCharProfile(fsize,fontfamily,bold,ratio,zoom) {
    let font = fontDesc(fsize,fontfamily,bold);
    let refstr = font+"/"+ratio+"/"+zoom;

    let yroom = null;
    if (refstr in G_y_char_offsets) yroom = G_y_char_offsets[refstr];
    else {
        let memkey = ratio+"/"+zoom;
        if (!(memkey in G_memCanvasStore)) {
            let memCanvas = document.createElement("canvas");
            SetupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
            //console.log("Pixel ratio = " + ratio + " , zoom = " + zoom);
            G_memCanvasStore[memkey] = memCanvas;
        }
        yroom = JudgeTextYPosOffset(G_memCanvasStore[memkey], font); //bold, fontfamily, fsize);
        G_y_char_offsets[refstr] = yroom;
    }

    return yroom;
}

export function CanvasText(canvas, x, y, text, fsize, align, xwidth, notdraw, opt) {
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
    let font = fontDesc(fsize, opt?opt.fontfamily:null,opt?opt.bold:null);

    let yadjust = 0;
    let yroom = null;

    context.font = font; //bold + fsize + "px '" + fontfamily + "'";
    context.textAlign = ta[align[0]];
    
    if(opt&&opt.raw){
        // DO othing
        context.textBaseline = tb[align[1]]; //tb[align[1]];
    
    }else{
        yroom = GetCharProfile(fsize, opt?opt.fontfamily:null,opt?opt.bold:null,canvas.ratio,canvas.zoom);


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
        CanvasLine(canvas, x, y, x + xwidth, y);
        CanvasLine(canvas, x, y + yadjust, x + xwidth, y + yadjust, {
            dash: true
        });
        CanvasLine(canvas, x, y, x, y + fsize);
    }

    if (opt != null) {
        for (let key in orgValues) {
            context[key] = orgValues[key];
        }
    }
    context.font = orgfont;

    var ret = { width: width };
    Object.assign(ret, yroom);
    return ret;
}

export function CanvasTextWithBox(canvas, x, y, text, fsize, margin=2, min_width=null) {
    let ret = null;
    if(min_width != null){
        ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt", undefined, true);
        if(ret.width < min_width){
            ret = CanvasText(canvas, x + margin + min_width/2, y + margin, text, fsize, "ct");
            ret.width = min_width;
        }else{
            ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt");
        }
    }else{
        ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt");
    }
    CanvasRect(canvas, x, y, ret.width + 2*margin, ret.height + 2*margin);
    return {width: ret.width+2*margin, height:ret.height+2*margin};
}

export function CanvasImage(canvas, img, x, y, w, h, align = "lt", draw=true)
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

    return {bounding_box:{x:x+x_shift, y:y+y_shift,w:act_w,h:act_h}};
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


export function GetPixelRatio(canvas) {
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

export function SetupHiDPICanvas(canvas, w, h, ratio, zoom) {
    if (!ratio) ratio = GetPixelRatio(canvas);
    if (!zoom) zoom = 1.0;

    // This is not a good manner, though...
    // = ratio;
    //G_zoom = zoom;
    canvas.ratio = ratio;
    canvas.zoom = zoom;

    //console.log(ratio + "/" + w + "," + h);

    var ctx = canvas.getContext("2d");
    canvas.width = w * ratio * zoom;
    canvas.height = h * ratio * zoom;
    canvas.style.width = w * zoom + "px";
    canvas.style.height = h * zoom + "px";
    ctx.setTransform(ratio * zoom, 0, 0, ratio * zoom, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return { ratio: ratio };
}

function JudgeTextYPosOffset(canvas, font, code)/*bold, fontfamily, fontsize) */{
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
        SetupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
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
        var ret = JudgeTextYPosOffset(canvas_to_use, px + "px '"+fontfamily+"'", code);
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

export var G_imgmap = {};

export function PreloadImages(imageurls) {
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

export function PreloadJsonFont(url) {

    var getJSON = function(url) {
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();		
            req.onreadystatechange = function() {			
                if(req.readyState == 4 && req.status == 200){
                    var data = JSON.parse(req.responseText);	
                    resolve(data);
                }
            };
            req.open("GET", url, false);
            req.send(null);
        });
    };

    return getJSON(url)
    .then(fontData=>{
        let promises = [];
        for(let glyphname in fontData){
            let p = new Promise((resolve,reject)=>{
                let img = new Image();
                img.src = fontData[glyphname].dataURL;
                img.onload = function() {
                    resolve({ img: img, url: glyphname });
                };
            });
            promises.push(p);
        }
        return Promise.all(promises);
    })
    .then((result)=>{
        // make map with url
        for (var ii = 0; ii < result.length; ++ii) {
            G_imgmap[result[ii].url] = result[ii].img;
        }
        return result;
    });
}

let theBravura = null;

export function getBravuraInstance(fontfamily, woff_url, meta_json_url, glyphnames_json){
    if(theBravura) return theBravura;
    theBravura = new Bravura(fontfamily, woff_url, meta_json_url, glyphnames_json);
    return theBravura;
}

export class Bravura{
    constructor(fontfamily, woff_url, meta_json_url, glyphnames_json){
        // fontfamily is "Bravura" or "Bravura Text" depending on the specified woff file.
        // Currenly only "Bravura Text" works.
        this.intervalToFontSizeMap = {};
        this.codeToNameMap = {};
        this.init_promise = this.init(fontfamily, woff_url, meta_json_url, glyphnames_json);
    }

    getJSON(url) {
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();		
            req.onreadystatechange = function() {			
                if(req.readyState == 4 && req.status == 200){
                    var data = JSON.parse(req.responseText);	
                    resolve(data);
                }
            };
            req.open("GET", url, false);
            req.send(null);
        });
    }

    ready(){
        return this.init_promise;
    }

    checkloaded(){
        var c1 = document.createElement("canvas");
        var c2 = c1.cloneNode(false);
        var ctx1 = c1.getContext("2d");
        var ctx2 = c2.getContext("2d");
        ctx1.font = "normal 30px '"+this.fontfamily+"', serif";
        ctx2.font = "normal 30px serif";
        var text = String.fromCodePoint(0xE050); //"this is test text.";  // Gclef as a reference

        return new Promise(function(resolve, reject){
            function loaded(){
                var tm1 = ctx1.measureText(text);
                var tm2 = ctx2.measureText(text);
                //console.log("tm1:"+tm1.width+" tm2:"+tm2.width);
                return tm1.width != tm2.width;
            }

            var cnt = 0;
            function checker(){
                if(loaded()){
                    resolve(true);
                }else if(cnt >= 30){
                    reject("Time out");
                }else{
                    setTimeout(checker, 100);
                    cnt++;
                }
            }

            checker();
        });
    }

    init(fontfamily, woff_url, meta_json_url, glyphnames_json){
        this.fontfamily = fontfamily;

        // THis does not work in MS Edge
        //var font = new FontFace(this.fontfamily, "url("+woff_url+")");
        //var pf = font.load();
        var pf = this.checkloaded(); //new Promise(function(resolve){ resolve(true); }); // Dammy promise

        var pmeta = this.getJSON(meta_json_url);
        var pg = this.getJSON(glyphnames_json); // From https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/glyphnames.json
    
        return Promise.all([pf, pmeta, pg]).then((rets)=>{
            //document.fonts.add(font);
            //console.log("Font loaded");

            this.metaData = rets[1];
            this.glyphnames = rets[2];
            for(let key in this.glyphnames){
                var codeInt = parseInt(this.glyphnames[key].codepoint.replace("U+","0x"));
                this.codeToNameMap[codeInt] = key;
            }
        });
    }

    put(canvas, name_or_code, staff_interval_px, lx, ty){
        let code = name_or_code;
        if(name_or_code instanceof String)
            code = parseInt(this.glyphnames[name].codepoint.replace("U+","0x"));
        
        let fontSize = null;
        if(staff_interval_px in this.intervalToFontSizeMap) fontSize = this.intervalToFontSizeMap[staff_interval_px];
        else{
            var lineThickNessShift = 0.064; // Line tickness
            fontSize = getFontSizeFromHeight(staff_interval_px*4 + lineThickNessShift*staff_interval_px, 
                this.fontfamily, String.fromCodePoint(0xE014),
                null, null,
                canvas.ratio, canvas.zoom); // 5 line is baseline
            this.intervalToFontSizeMap[staff_interval_px] = fontSize;
        }
        let ctx = canvas.getContext("2d");
        ctx.save();
        ctx.font = fontSize+"px '"+this.fontfamily+"'";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(String.fromCodePoint(code), lx, ty);
        ctx.restore();
    }

}