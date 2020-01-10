import "@babel/polyfill";

var G_memCanvas = null;
var G_pixelRatio = null;

export function CanvasRect(canvas, x, y, w, h) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.rect(x, y, w, h);
    context.stroke();
}

export function CanvasCircle(canvas, x, y, r) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.fill();
}

export function CanvasLine(canvas, x0, y0, x1, y1, opt) {
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

export function GetCharProfile(fsize) {
    let bold = ""; //"bold ";
    let fontfamily = "Arial";
    var key = bold + fsize + fontfamily;

    let yroom = null;
    if (key in G_y_char_offsets) yroom = G_y_char_offsets[key];
    else {
        if (!G_memCanvas) {
            G_memCanvas = document.createElement("canvas");
            G_pixelRatio = GetPixelRatio(G_memCanvas);
            this.SetupHiDPICanvas(G_memCanvas, 200, 200, G_pixelRatio);
            console.log("Pixel ratio = " + G_pixelRatio);
        }
        yroom = this.JudgeTextYPosOffset(G_memCanvas, bold, fontfamily, fsize);
        G_y_char_offsets[key] = yroom;
    }

    return yroom;
}

export function CanvasText(canvas, x, y, text, fsize, align, xwidth, notdraw, opt) {
    var context = canvas.getContext("2d");
    var ta = {
        l: "left",
        c: "center",
        r: "right"
    };
    var tb = {
        t: "top",
        m: "middle",
        b: "bottom"
    };
    var orgfont = context.font;
    let bold = ""; //"bold ";
    let fontfamily = "Arial";

    var yroom = this.GetCharProfile(fsize);

    let yadjust = 0;
    if (align[1] == "t") {
        yadjust = -yroom.top_room;
    } else if (align[1] == "m") {
        yadjust = -(yroom.top_room + yroom.height / 2.0); // This is just a huristic guess
    } else {
        yadjust = -(yroom.top_room + yroom.height);
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

    if (notdraw != true) context.fillText(text, x, y + yadjust, xwidth);
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

export function CanvasTextWithBox(canvas, x, y, text, fsize) {
    var ret = CanvasText(canvas, x, y, text, fsize, "lt");
    CanvasRect(canvas, x - 1, y - 1, ret.width + 2, ret.height + 2);
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

    //console.log(ratio + "/" + w + "," + h);

    var ctx = canvas.getContext("2d");
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return { ratio: ratio };
}

function JudgeTextYPosOffset(canvas, bold, fontfamily, fontsize) {
    var context = canvas.getContext("2d");

    var bs = fontsize * G_pixelRatio;

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

    return {
        top_room: top_room / G_pixelRatio,
        height: M_height / G_pixelRatio
    };
}