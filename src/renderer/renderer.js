import "@babel/polyfill";
import * as common from "../common/common";

export class Renderer {
    constructor() {}
    render() {
        console.log("Run renderer");
	}

	get_boundary_sign(e) {
        if (e === null) return "n";
        else if (e instanceof common.MeasureBoundaryMark) {
            if (e.nline == 1) return "s";
            else if (e.nline == 2) return "d";
        } else if (e instanceof common.LoopBeginMark) {
            return "b";
        } else if (e instanceof common.LoopEndMark) {
            return "e";
        } else if (e instanceof common.LoopBothMark) {
            return "B";
        } else if (e instanceof common.MeasureBoundaryFinMark) {
            return "f";
        } else if (e instanceof common.MeasureBoundaryDblSimile) {
            return "r";
        }
        throw "Invalid boundary object";
    }

    boundary_type_without_line_break(b0, b1) {
        // b0 and b1 must be either following characters
        // s : Single, d : Double, b: Loop Begin, e: Loop End, B: Loop Both, r: Double Simile, n:null
        var profile = {
            ss: "s",
            sd: "d",
            sb: "b",
            sn: "s",
            ds: "d",
            dd: "d",
            db: "b",
            dn: "d",
            es: "e",
            ed: "e",
            ee: "e",
            eb: "B",
            en: "e",
            bb: "b",
            BB: "B",
            fn: "f",
            rr: "r",
            ns: "s",
            nd: "d",
            nb: "b"
        };
        var key = this.get_boundary_sign(b0) + this.get_boundary_sign(b1);
        if (key in profile) {
            return profile[key];
        }
        throw "Invalid boundary pair : " + key;
    }

    boundary_type_with_line_break(b0, b1, side) {
        // b0 and b1 must be either following characters
        // s : Single, d : Double, b: Loop Begin, e: Loop End, B: Loop Both, r: Double Simile, n:null
        // side must be either 'end' or 'begin'
        var profile = {
            ss: "ss",
            sd: "sd",
            sb: "sb",
            ds: "ds",
            dd: "dd",
            db: "db",
            es: "es",
            ed: "ed",
            ee: "es",
            eb: "eb",
            bb: "sb",
            BB: "eb",
            rr: "rr"
        };
        var key = this.get_boundary_sign(b0) + this.get_boundary_sign(b1);
        if (key in profile) {
            return profile[key][side == "begin" ? 1 : 0];
        }
        throw "Invalid boundary pair : " + key;
    }

    classifyElements(measure) {
        var m = measure;
        var header_elements = new Array();
        var body_elements = new Array();
        var footer_elements = new Array();
        var measure_wide_elements = new Array();

        // For simile marks
        var simile_body_idx = new Array();
        var simile_measure_wide_idx = new Array();
        var simile_objs = new Array();

        for (var ei = 0; ei < m.elements.length; ++ei) {
            var e = m.elements[ei];
            if (ei == 0) {
                // First element must be boundary
                header_elements.push(e);
            } else if (ei == m.elements.length - 1) {
                // Last element must be boundary
                footer_elements.push(e);
            } else {
                if (e instanceof common.Chord) {
                    body_elements.push(e);
                } else if (e instanceof common.Rest) {
                    body_elements.push(e);
                } else if (e instanceof common.LoopIndicator) {
                    measure_wide_elements.push(e);
                } else if (e instanceof common.LongRestIndicator) {
                    measure_wide_elements.push(e);
                } else if (e instanceof common.Simile) {
                    // Simile is body elements when at least one another body element(including another simile) exsits, otherwise measure wide elements.
                    // Judge after screeining.
                    simile_body_idx.push(body_elements.length);
                    simile_measure_wide_idx.push(measure_wide_elements.length);
                    simile_objs.push(e);
                } else if (e instanceof common.Time) {
                    // Time mark is treated as header element irrespective of its positionat the second element is treated as header part
                    header_elements.push(e);
                } else if (e instanceof common.DaCapo) {
                    footer_elements.push(e);
                } else if (e instanceof common.DalSegno) {
                    footer_elements.push(e);
                } else if (e instanceof common.Segno) {
                    header_elements.push(e);
                } else if (e instanceof common.Coda) {
                    header_elements.push(e);
                } else if (e instanceof common.ToCoda) {
                    footer_elements.push(e);
                } else if (e instanceof common.Fine) {
                    footer_elements.push(e);
                } else if (e instanceof common.Comment) {
                    header_elements.push(e);
                } else if (e instanceof common.Lyric) {
                    header_elements.push(e);
                } else if (e instanceof common.ArMark) {
                    // Associate the Chord and Comment or Lyric symbols here
                    var chord = m.elements[ei - 1];
                    var obj = m.elements[ei + 1];
                }
            }
        }

        if (body_elements.length > 0 || simile_objs.length >= 2) {
            // simile makrs are all body elements
            for (var i = 0; i < simile_body_idx.length; ++i) {
                body_elements.splice(simile_body_idx[i] + i, 0, simile_objs[i]);
            }
        } else if (simile_objs.length >= 1) {
            // simile mark is measure wide element
            if (simile_objs.length != 1) {
                throw "Error on classifying simile marks";
            }
            measure_wide_elements.splice(simile_body_idx[0], 0, simile_objs[0]);
        }

        return {
            header: header_elements,
            body: body_elements,
            footer: footer_elements,
            measure_wide: measure_wide_elements
        };
    }
	
	chord_elem_classify(chord, transpose, half_type) {
        var bases = chord.getChordStrBase(transpose, half_type);
        var elems = chord.mid_elem_objs;

        // if bases are null, elems are null, then it is just a duration information
        if (bases[0] == null && bases[1] == null && elems === undefined) {
            //x += (C7_width * x_global_scale * body_scaling + chord_space * body_scaling);
            return { bases: bases };
        }

        var _3rdelem = [];
        var _5thelem = [];
        var _6791113suselem = [];
        var _alteredelem = []; // #11, #9, b9, #13, b13,

        if (elems) {
            var _6exists = false,
                _9exists = false;
            for (var i = 0; i < elems.length; ++i) {
                var e = elems[i];
                switch (e.type) {
                    case "M":
                        if (e.param !== undefined) _6791113suselem.push(e);
                        else _3rdelem.push(e);
                        break;
                    case "m":
                        _3rdelem.push(e);
                        break;
                    case "add":
                        _6791113suselem.push(e);
                        break;
                    case "sus":
                        _6791113suselem.push(e);
                        break;
                    case "dig":
                        _6791113suselem.push(e);
                        _6exists |= e.param == "6";
                        _9exists |= e.param == "9";
                        break;
                    case "b":
                    case "#":
                        if (e.param == "5") _5thelem.push(e);
                        else _alteredelem.push(e);
                        break;
                    case "dim":
                        _6791113suselem.push(e);
                        break;
                    case "alt":
                        _alteredelem.push(e);
                        break;
                }
            }
        }

        return {
            bases: bases,
            _3rdelem: _3rdelem,
            _5thelem: _5thelem,
            _6791113suselem: _6791113suselem,
            _alteredelem: _alteredelem,
            _6_and_9_exists: _6exists && _9exists
		};
	}
}
