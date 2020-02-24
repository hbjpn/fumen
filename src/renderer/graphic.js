import "@babel/polyfill";

var G_memCanvas = null;
var G_pixelRatio = null;
var G_zoom = 4.0;

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

export function GetCharProfile(fsize) {
    let bold = ""; //"bold ";
    let fontfamily = "Arial";
    var key = bold + fsize + fontfamily;

    let yroom = null;
    if (key in G_y_char_offsets) yroom = G_y_char_offsets[key];
    else {
        if (!G_memCanvas) {
            G_memCanvas = document.createElement("canvas");
            //G_pixelRatio = GetPixelRatio(G_memCanvas);
            SetupHiDPICanvas(G_memCanvas, 200, 200, G_pixelRatio);
            console.log("Pixel ratio = " + G_pixelRatio);
        }
        yroom = JudgeTextYPosOffset(G_memCanvas, bold, fontfamily, fsize);
        G_y_char_offsets[key] = yroom;
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
    let bold = ""; //"bold ";
    let fontfamily = "Arial";

    var yroom = GetCharProfile(fsize);

    let yadjust = 0;
    if (align[1] == "t") {
        yadjust = -yroom.top_room;
    } else if (align[1] == "m") {
        yadjust = -(yroom.top_room + yroom.height / 2.0); // This is just a huristic guess
    } else if (align[1] == "b"){
        yadjust = -(yroom.top_room + yroom.height);
    } else{
        // default
    }

    //console.log("yoffset/yadjust/key = " + JSON.stringify(yroom) + "/" + yadjust);

    context.font = bold + fsize + "px '" + fontfamily + "'";
    context.textAlign = ta[align[0]];
    context.textBaseline = "top"; //tb[align[1]];

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

export function SetupHiDPICanvas(canvas, w, h, ratio) {
    if (!ratio) ratio = GetPixelRatio(canvas);
    G_pixelRatio = ratio;

    //console.log(ratio + "/" + w + "," + h);

    var ctx = canvas.getContext("2d");
    canvas.width = w * ratio * G_zoom;
    canvas.height = h * ratio * G_zoom;
    canvas.style.width = w * G_zoom + "px";
    canvas.style.height = h * G_zoom + "px";
    ctx.setTransform(ratio * G_zoom, 0, 0, ratio * G_zoom, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return { ratio: ratio };
}

function JudgeTextYPosOffset(canvas, bold, fontfamily, fontsize) {
    var context = canvas.getContext("2d");

    var bs = 1000; //fontsize * G_pixelRatio;

    context.clearRect(0, 0, bs, bs);
    context.font = bold + fontsize + "px '" + fontfamily + "'";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("M", 0, 0);
    var imageData = context.getImageData(0, 0, bs, bs); // Always inside fontsize*fontsize box
    var data = imageData.data;
    var top_room = 0;
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
            //console.log([row, col, R,G,B,A]);
            var nonwhite = A > 0 && (R < 255 || G < 255 || B < 255);
            if (nonwhite) {
                found_nonwhite = true;
                break;
            }
        }
        if (found_nonwhite) break;
        else ++top_room;
    }

    // Judge hight of char
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
    }

    // here the raw pixel data resolution is G_pixelRatio * G_zoom times. (Same value as setTransform in SetupHIDPICanvas) 
    return {
        top_room: top_room / G_pixelRatio / G_zoom,
        height: M_height / G_pixelRatio / G_zoom
    };

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