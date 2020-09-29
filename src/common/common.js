import "@babel/polyfill";

// Default values for variables

let VARIABLE_DEFAULT = {
    "TITLE" : null,
    "SUB_TITLE": null,
    "ARTIST" : null,
    "SHOW_FOOTER": "YES",
    "SHOW_STAFF": "AUTO",
    "TRANSPOSE" : 0,
    "KEY": "C",
    "KEY_TYPE" : "AUTO",
};

export function shallowcopy(obj) {
    return Object.assign({}, obj);
}

export function deepcopy(obj) {
    //return jQuery.extend(true, {}, obj);
    return JSON.parse(JSON.stringify(obj));
}

export function myLog2(integer) {
	var log2 = {
		1: 0,
		2: 1,
		4: 2,
		8: 3,
		16: 4,
		32: 5,
		64: 6,
		128: 7
	};
	return log2[integer];
}

export function charIsIn(c, chars) {
    for (var i = 0; i < chars.length; ++i)
        if (chars[i] == c) return { r: true, index: i };
    return null;
}

export function charStartsWithAmong(s, strlist) {
    for (var i = 0; i < strlist.length; ++i)
        if (s.indexOf(strlist[i]) == 0) return { index: i, s: strlist[i] };
    return null;
}

//
// Parser
//

export var WHOLE_NOTE_LENGTH = 2 * 3 * 5 * 7 * 9 * 11 * 13 * 64;

export class Node {
    constructor(){
        this.childNodes = [];
        this.parentNode = null;
        this.variables = {};
    }
    appendChild(node){
        node.parentNode = this;
        this.childNodes.push(node);
        if(this.childNodes.length >= 2){
            this.childNodes[this.childNodes.length-2].nextSiblingNode = node;
            node.previousSiblingNode = this.childNodes[this.childNodes.length-2];
        }
    }

    exportCode(){
        let code = "";
        this.childNodes.forEach(rg=>{
            code += rg.exportCode();
        });
        return code;
    }

    getVariable(key){
        let variable = this.getVariableObject(key);
        if(variable) return variable.value;
        return null;
    }

    getVariableObject(key){
        if(key in this.variables) return this.variables[key];
        if(this.parentNode) return this.parentNode.getVariableObject(key);
        return null;
    }

    setVariable(key, value){
        if(key in this.variables) this.variables[key].value = deepcopy(value);
        else this.variables[key] = new Variable(key, value);

        return this.variables[key];
    }

    insertBefore(node, newNode){
        newNode.parentNode = this;
        if(node){
            let i = this.childNodes.indexOf(node);
            this.childNodes.splice(i, 0, newNode);
            if(i>=1){ // not first
                this.childNodes[i-1].nextSiblingNode = newNode;
                newNode.previousSiblingNode = this.childNodes[i-1];
            }
            // it is always ensured i+1 elements exists.
            this.childNodes[i+1].previousSiblingNode = newNode;
            newNode.nextSiblingNode = this.childNodes[i+1];
        }else{
            this.childNodes.push(newNode);
            if(this.childNodes.length >= 2){
                this.childNodes[this.childNodes.length-2].nextSiblingNode = newNode;
                newNode.previousSiblingNode = this.childNodes[this.childNodes.length-2];
            }
        }
    }

    remove(){
        let i = this.parentNode.childNodes.indexOf(this);
        this.parentNode.childNodes.splice(i, 1);
        if(this.previousSiblingNode) this.previousSiblingNode.nextSiblingNode = this.nextSiblingNode;
        if(this.nextSiblingNode) this.nextSiblingNode.previousSiblingNode = this.previousSiblingNode;
    }
}

export class Element extends Node {
    // Musical
    constructor(){
        super();
        this.childElements = [];
    }
    _reconstruct(){
        this.childElements = this.childNodes.filter(e=>e instanceof Element);
        for(let i = 0; i < this.childElements; ++i){
            this.childElements[i].nextSiblingNode = i+1<this.childElements.length ? this.childElements[i+1]: null;
            this.childElements[i].previousSiblingNode = i>0 ? this.childElements[i-1] : null;
            
        }
    }
    appendChild(node){
        super.appendChild(node);
        if(node instanceof Element){
            this.childElements.push(node);
            if(this.childElements.length >= 2){
                this.childElements[this.childElements.length-2].nextSiblingElement = node;
                node.previousSiblingElement = this.childElements[this.childElements.length-2];
            }
        }
    }
    insertBefore(node, newNode){
        super.insertBefore(node, newNode);
        // Re-construct all : TODO: improve time
        this._reconstruct();
    }

    remove(){
        super.remove();
        this._reconstruct();
    }
}

export class Track extends Element {
    constructor() {
        super();
        for(let key in VARIABLE_DEFAULT){
            this.setVariable(key, VARIABLE_DEFAULT[key]);
        }
        this.pre_render_info = {};
    }
    
    // Utility functions open for external
    getKey() {
        if(Number.isInteger(this.getVariable("TRANSPOSE"))){
            let transposed_key = Chord.getTransposedKeyFromOffset(this.getVariable("KEY"), this.getVariable("TRANSPOSE"), this.getVariable("KEY_TYPE"));
            return {key:transposed_key, originalKey:this.getVariable("KEY")};
        }else{
            return {key:this.getVariable("TRANSPOSE"), originalKey:this.getVariable("KEY")};
        }
    }
}

export class ReharsalGroup extends Element{
    constructor(name, inline=false) {
        super();
        this.name = name;
        this.inline = inline;
    }
}

export class Block extends Element{
    constructor(){
        super();
    }

    concat(newmeasures){
        // in-place concat.
        // do not use concat as the object is replaced.
        for(let i = 0; i < newmeasures.length; ++i)
            this.appendChild(newmeasures[i]);
    }
}

export class Measure extends Element{
    constructor() {
        super();
        this.boundary_info = ["n", "n"];
        // "n" : normal boundary
        // "b" : loop Begin boundary
        // "e" : loop End boundary
        // "d" : Double line boundary

        this.header_width = 0;
        this.body_width = 0;
        this.footer_width = 0;

        this.body_scaling = 1.0;
        this.raw_new_line = false; // Raw "new line" mark. Maked when this is a second or later measure inside a reharsal group after one ore more new lines in the fumen code
        this.new_line = false; // THis is used in renderer
        this.align = "expand"; // expand, left, right

        this.renderprop = {}; // Rendering information storage
    }
}

export class Rest extends Element{
    constructor(length_s) {
        super();
        this.init(length_s);
    }
    init(length_s){
        this.length_s = length_s;
        this.note_group_list = [
            { lengthIndicator: Chord.parseLengthIndicator(length_s), note_profiles: null }
        ];
        this.renderprop = {};
    }
    exportCode(){
        return `r:${this.length_s}`;
    }
}

export class Simile extends Element{
    constructor(numslash) {
        super();
        // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
        this.numslash = numslash;
        this.renderprop = {};
        this.note_group_list = null;
    }
    exportCode(){
        return "."+("/".repeat(this.numslash))+".";
    }
}

export class Chord extends Element {
    constructor(chord_str) {
        super();
        this.init(chord_str);
    }

    init(chord_str){
        this.chord_str = chord_str;

        this.is_valid_chord = true;

        this.renderprop = {};

        this.exceptinal_comment = null;
        this.lyric = null;

        //this.lengthIndicator = null;

        this.note_group_list = null;

        // Analyze Chord symbol
        var r = /^(((A|B|C|D|E|F|G)(#|b)?([^/:]*))?(\/(A|B|C|D|E|F|G)(#|b)?)?)(:((([\d_]+)(\.*)(~)?)|(\(.*\))))?/;
        var m = chord_str.match(r);
        //console.log(m);
        // [0] is entire matched string

        this.chord_name_str = null;

        if (m && m[0] != "") {
            this.chord_name_str = m[1];
            this.note_base = m[3];
            this.sharp_flat = m[4];
            this.mid_str = m[5];
            this.base_note_base = m[7];
            this.base_sharp_flat = m[8];

            this.mid_elems = null;
            if (this.mid_str !== undefined) {
                var ret = Chord.parseChordMids(this.mid_str);
                if (ret !== null) {
                    this.mid_elems = ret[0];
                    this.mid_elem_objs = ret[1];
                }
                this.is_valid_chord = ret !== null;
            }
            if (m[9]) {
                if (m[11]) {
                    var li = Chord.parseLengthIndicator(m[11]);
                    //this.length_s = m[11];
                    //this.length = li.length;
                    this.note_group_list = [{ lengthIndicator: li, note_profiles: null }];
                    //this.tie = li.has_tie;
                } else if (m[15]) {
                    // Notes
                    let ret = Chord.parseChordNotes(m[15]);
                    if(ret.length > 0) // empty note_group_list does not work
                        this.note_group_list = ret;
                    //console.log(this.note_group_list);
                }
            }

            //this.tie = (m[14] == '~');
        } else {
            this.chord_name_str = this.chord_str;
            this.is_valid_chord = false;
        }
    }

    setException(exceptional_comment) {
        this.exceptinal_comment = exceptional_comment;
    }

    setLyric(lyric) {
        this.lyric = lyric;
    }

    getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat) {
        return Chord.getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat);
    }

    getChordStrBase(tranpose, half_type, key) {
        if (!this.is_valid_chord) return [false, this.chord_str]; // Not chord or invalid chord notation

        var tranposed_note = null;
        if (this.note_base !== undefined)
            tranposed_note = this.getTranpsoedNote(
                tranpose,
                half_type,
                key,
                this.note_base,
                this.sharp_flat
            );
        var transposed_base_note = null;
        if (this.base_note_base !== undefined) {
            transposed_base_note = this.getTranpsoedNote(
                tranpose,
                half_type,
                key,
                this.base_note_base,
                this.base_sharp_flat
            );
        }

        return [tranposed_note, transposed_base_note];
    }

    forEachMid(callback){
        Chord.chordMidSerialize(this.mid_elems, callback);
    }

    exportCode(){
        if(this.is_valid_chord){
            // construct from the raw data.
            // Keep the original strign as much as possible.
            let code = "";
            if(this.note_base) code += this.note_base;
            if(this.sharp_flat) code += this.sharp_flat;
            if(this.mid_elems) code += Chord.chordMidSerialize(this.mid_elems)[1];
            if(this.base_note_base) code += ("/"+this.base_note_base);
            if(this.base_sharp_flat) code += this.base_sharp_flat;
            if(this.note_group_list){
                if(this.note_group_list[0].note_profiles){
                    // note
                    code += ":(";
                    for(let i=0; i<this.note_group_list.length; ++i){
                        code += "(";
                        let li = this.note_group_list[i].lengthIndicator;
                        let nps = this.note_group_list[i].note_profiles;
                        for(let j=0; j<nps.length; ++j){
                            let note = nps[j].note; //
                            code += note.name+Chord.accCodeToStr(note.accidental)+note.octave;
                            if(j < nps.length-1) code += ",";
                        }
                        code += ")";
                        code += (":"+li.base + (li.renpu?"_"+li.renpu:"") + ".".repeat(li.numdot) + (li.has_tie?"~":""));
                        if(i < this.note_group_list.length-1) code += ",";
                    }
                    code += ")";
                }else{
                    // simple length indicator
                    let li =  this.note_group_list[0].lengthIndicator;
                    code += (":"+li.base + (li.renpu?"_"+li.renpu:"") + ".".repeat(li.numdot) + (li.has_tie?"~":""));
                }
            }

            return code;
            //return this.chord_str;
        }else{
            return `"${this.chord_str}"`;
        }
    }

    // More sophiscated method based on BNF based parsing
    /*
    CHORD ::= ROOT ( "m" | "dim"|"aug"|"+")? "M"? ("5" | "6"|"7"|"9"|"11"|"13"|"69")? ("sus" ("4"|"2")? )?  ","? TENSIONLIST* ( EOF | ":" | "/" )
    ROOT ::= ( A|B|C|D|E|F|G ) ("#"|"b") ?
    TENSIONLIST ::= TENSIONGROUP | TENSIONGROUP ","? TENSIONLIST
    TENSIONGROUP ::= TENSION | "(" TENSIONLIST ")" 
    TENSION ::= ( ("+" ("5"|"9"|"11")) | ("-" ("5"|"9"|"13")) | ("b" ("5"|"9"|"13")) | ("#" ("5"|"9"|"11")) | ("omit" ("3" | "5")) | ("add" ("2"|"9")) )
    */
    static parseChordMids(s){
        function parse(ps){
            let structure = [];
            let r = null;

            //let fs = [root, triad, M, digit, sus, tensionlist, chordend];
            let fs = [triad, M, digit, sus, tensiondelim, tensionlist, chordend];

            for(let fi = 0; fi < fs.length; ++fi){
                r = fs[fi](ps);
                if(r){ ps = r.s; structure.push(r.structure);}
            }

            if(r) return {s:ps, structure: {type:"chord", structure:structure}};
            else return null;
        }
        function root(ps){
            let c0 = "ABCDEFG";
            let c1 = "#b";
            if(ps.length >= 1 && charIsIn(ps[0],c0)){
                if(ps.length >= 2 && charIsIn(ps[1],c1)) {
                    return {s: ps.substr(2), structure: {type:"root", value:ps[0]+ps[1]}};
                }else{
                    return {s: ps.substr(1), structure: { type:"root", value:ps[0]}};
                }
            }
            return null;
        }
        function triad(ps){
            let ts = ["min", "dim","aug", "mi", "m", "+"];
            let r = charStartsWithAmong(ps, ts);
            if(r){
                return {s: ps.substr(r.s.length), structure: {type:"triad",value:ts[r.index]}};
            }
            return null;
        }
        function M(ps){
            if(ps.length >= 1 && ps[0] == "M"){ // TODO:maj
                return {s:ps.substr(1), structure:{type:"M",value:ps[0]}};
            }
            return null;
        }
        function digit(ps){
            let ds = ["69","13","11","5","6","7","9"];
            let r = charStartsWithAmong(ps, ds);
            if(r){
                return {s:ps.substr(r.s.length), structure:{type:"dig", value:ds[r.index]}};
            }
            return null;
        }
        function sus(ps){
            let ds = ["sus2","sus4","sus"];

            let r = charStartsWithAmong(ps, ds);
            if(r){
                return {s: ps.substr(r.s.length), structure: {type:"sus", value:"sus", param:ds[r.index].substr(3,1)}};
            }
            return null;
        }
        function tensiondelim(ps){
            if(ps.length == 0) return null;
            if(ps[0] == ",") return {s: ps.substr(1), structure: {type: "tensiondelim", value:","}};
            return null;
        }
        // Brnaches in tensionlist
        function tensionlist(ps){
            if(ps.length==0) return null;
            let value = [];
            let r0 = tenstiongroup(ps);
            if(r0){
                value.push(r0.structure);
                ps = r0.s;
                if(ps.length > 0 && ps[0] == ","){ ps = ps.substr(1); value.push({type:"delim",value:","}); }
                let r1 = tensionlist(ps);
                if(r1){
                    value.push(r1.structure);
                    return {
                        s:r1.s, 
                        structure: {type: "tensionlist", value:value}
                    };
                }
                return {s:r0.s, structure:{type:"tensionlist", value:value}};
            }
            return null;
        }
        function tenstiongroup(ps){
            if(ps.length == 0) return null;
            if(ps[0] == "("){
                let r = tensionlist(ps.substr(1));
                if(r && r.s[0] == ")"){
                    return {
                        s:r.s.substr(1), 
                        structure: {
                            type:"tensiongroup", 
                            value:[{type:"delim",value:"("}, r.structure, {type:"delim",value:")"}]
                        }
                    };
                }
            }else{
                let r = tension(ps);
                if(r) return {
                    s:r.s,
                    structure: {
                        type:"tensiongroup",
                        value:[r.structure]
                    }
                };
            }
            return null;
        }
        function tension(ps){
            let ds = ["omit3","omit5","add9","add2","#11","+11","b13","-13","#9","+9","b9","-9","+5","#5","-5","b5"];
            let th = [ 4,      4,      3,     3,     1,    1,    1,    1,    1,   1,   1,   1,   1,   1,   1,   1  ]; // type and digit split pos
            if(ps.length == 0) return null;
            let r = charStartsWithAmong(ps, ds);
            if(r){
                return {
                    s:  ps.substr(r.s.length),
                    structure: {
                        type:"tension", 
                        value:ds[r.index].substr(0, th[r.index]),
                        param:ds[r.index].substr(th[r.index])
                    }
                };
            }
            return null;
        }
        function chordend(ps){
            if(ps.length == 0) return {s:ps, structure: {type:"chordend", value:""}};
            else if(ps[0] == "/") return {s:ps.substr(1), structure: {type:"chordend", value:"/"}};
            else if(ps[0] == ":") return {s:ps.substr(1), structure: {type:"chordend", value:":"}};
            else return null; // not accepted
        }

        let holder = parse(s);
        if(holder){
            let [objholder, code] = Chord.chordMidSerialize(holder);
            return [ holder, objholder, code];
        }else{
            return null; // invalid format
        }
    }


    /**
     * Convert the data structure (chord mids) to flat list and code string.
     * @param {*} p Data structure of chord mids.
     * @param {*} callback callback called for each leaf element. (Called synchrnously)
     */
    static chordMidSerialize(p, callback){
        let objholder = [];
        if(!p){
            return null; // Invalid code
        }else{
            let tensionlist = function(value, serialize){
                let code = "";
                for(let i = 0; i < value.length; ++i){
                    let e = value[i];
                    if(e.type == "tensionlist"){
                        code += tensionlist(e.value, serialize);
                    }else if(e.type == "tensiongroup"){
                        code += tensiongroup(e.value, serialize);
                    }else if(e.type == "delim"){
                        code += e.value;
                    }
                }
                return code;
            };
            let tensiongroup = function(value, serialize){
                // single tension or ( TENSIONLIST )
                let code = "";
                for(let i = 0; i < value.length; ++i){
                    let e = value[i];
                    if(e.type == "tension"){
                        serialize.push({value:e.value,param:e.param});
                        if(callback) callback(e);
                        code += (e.value+e.param||"");
                    }else if(e.type == "tensionlist"){
                        code += tensionlist(e.value, serialize);
                    }else if(e.type == "delim"){
                        code += e.value;
                    }
                }
                return code;
            };
            // Convert to flat data list and export string rather than structured data
            
            let repl = {};
            let code = "";
            for(let i = 0; i < p.structure.structure.length; ++i){
                let r = p.structure.structure[i];
                switch(r.type){
                case "triad":
                    repl = {"+":"+", "aug":"+","min":"m","mi":"m", "m":"m","dim":"dim"};
                    objholder.push({type:"triad", value: repl[r.value]});
                    code += r.value + (r.param||"");
                    if(callback) callback(r);
                    break;
                case "M":
                    objholder.push({type:r.type}); // true or false
                    code += r.value;
                    if(callback) callback(r);
                    break;
                case "dig":
                    objholder.push({type:"dig", value:r.value});
                    code += r.value;
                    if(callback) callback(r);
                    break;
                case "sus":
                    objholder.push({type:"sus", value:r.value, param:r.param});
                    code += r.value + (r.param||"");
                    if(callback) callback(r);
                    break;
                case "tensiondelim": 
                    code += r.value; // ",";
                    break;
                case "tensionlist":{
                    // normalize +, - to #, b
                    let serialize = [];
                    code += tensionlist(r.value, serialize);
                    for(let j=0; j<serialize.length; ++j){
                        repl = {add:"add","+":"#","-":"b","#":"#","b":"b","omit":"omit"};
                        objholder.push({"type":"tension", value:repl[serialize[j].value], param:serialize[j].param}); 
                    }
                    break; 
                }
                case "chordend":
                    break;
                default:
                    throw "Unexpected situations";
                }
            }
            return [objholder,code];
        }
    }

    static accCodeToStr(acc){
        return {0:"",11:"b",1:"#",12:"bb",2:"##"}[acc];
    }

    static getNoteProfile(note_str) {
        var IDX = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
        var ACC = { b: 11, "#": 1, bb: 12, "##": 2 };
        var m = note_str.match(/([A-G])(#|b)?(\d+)/);
        if (!m) return null;
        var code =
            parseInt(m[3]) * 12 + IDX[m[1]] + (m[2] == "#" ? 1 : -1) - 36 + 0x3c; // C3 bocomes 0x3C
        var accidental = 0;
        if (m[2]) accidental = ACC[m[2]];
        return {
            code: code,
            note: { name: m[1], accidental: accidental, octave: parseInt(m[3]) }
        };
    }

    // Parse strings of number + dot
    static parseLengthIndicator(length_s) {
        var mm = length_s.match(/(\d+)((_(3|5|6|7))|(\.+))?(~)?/);
        if (!mm) return null;

        var base = parseInt(mm[1]);
        var length = 0;
        var numdot = 0;
        if (mm[3]) {
            // Renpu
            var renpu = parseInt(mm[4]);
            length = WHOLE_NOTE_LENGTH / (base / 2) / renpu;
        } else {
            length = WHOLE_NOTE_LENGTH / base;
            var tp = length;
            numdot = mm[5] ? mm[5].length : 0;
            for (var j = 0; j < numdot; ++j) {
                tp /= 2;
                length += tp;
            }
        }
        return {
            length: length,
            base: base,
            renpu: renpu,
            numdot: numdot,
            has_tie: mm[6] ? true : false
        };
    }

    static parseChordNotes(str) {
        str = str.substr(1); // first (

        var parseNoteGroup = function(sng) {
            // pre-requisite : after outer "(" is loaded
            var sngi = 0;
            if(sng[0] == ")"){
                // empty note groups
                return {
                    s: sng, // do not consume last )
                    ng: null
                };
            }
            sng = sng.substr(1); // first (
            var tmp = "";
            while (sng[sngi] != ")") {
                tmp += sng[sngi];
                ++sngi;
            }
            var notes_str = tmp.split(",");
            var note_profiles = [];
            for (var nsi = 0; nsi < notes_str.length; ++nsi) {
                //var m = notes_str[nsi].match(/([A-G])(#|b)?(\d+)/);
                var np = Chord.getNoteProfile(notes_str[nsi]);
                if (!np) throw "INVALID_TOKEN_DETECTED : invalid note notation";
                note_profiles.push(np);
            }

            sng = sng.substr(sngi + 1); // Skip )
            var r = /:(([\d_]+)(\.*)(~)?)/;
            var m = sng.match(r);

            if (!m[0]) throw "INVALID_TOKEN_DETECTED";

            var li = Chord.parseLengthIndicator(m[1]);

            return {
                s: sng.substr(m[0].length),
                ng: { note_profiles: note_profiles, lengthIndicator: li }
            };
        };

        var note_group_list = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            var ret = parseNoteGroup(str);
            if(ret.ng) note_group_list.push(ret.ng);
            str = ret.s;
            if (str[0] == ",") {
                str = str.substr(1);
            } else if (str[0] == ")") {
                break;
            } else {
                throw "INVALID_TOKEN_DETECTED";
            }
        }
        return note_group_list;
    }

    static getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat) {
        // https://music.stackexchange.com/questions/40041/algorithm-for-transposing-chords-between-keys

        var min_maj_map = {
            "B#m" : "D#",
            "Cm" : "Eb",
            "C#m" : "E",
            "Dbm" : "Fb",
            "Dm" : "F",
            "D#m" : "F#",
            "Ebm" : "Gb",
            "Em" : "G",
            //"Fbm" : "Abb",
            "E#m" : "G#",
            "Fm" : "Ab",
            "F#m" : "A",
            //"Gbm" : "Bbb",
            "Gm" : "Bb",
            "G#m" : "B",
            "Abm" : "Cb",
            "Am" : "C",
            "A#m" : "C#",
            "Bbm" : "Db",
            "Bm" : "D",
            //"Cbm" : "Ebb"
        };

        var note_values_1 = [
            ["C",  null, "B#"],
            [null, "Db", "C#"],
            ["D",  null, null],
            [null, "Eb", "D#"],
            ["E",  "Fb", null],
            ["F",  null, "E#"],
            [null, "Gb", "F#"],
            ["G",  null, null],
            [null, "Ab", "G#"],
            ["A",  null, null],
            [null, "Bb", "A#"],
            ["B",  "Cb", null]
        ];
        var note_values_2 = {
            "B#":0, "C":0, "C#":1, "Db":1, "D":2, "D#":3, "Eb":3, "E":4, "Fb":4, "E#":5, "F":5, 
            "F#":6, "Gb":6, "G":7, "G#":8, "Ab":8, "A":9, "A#":10, "Bb":10, "B":11, "Cb":11
        };
        var keyclass_maj = {
            "B#":"#", "C":"b", "C#":"#", "Db":"b", "D":"#", "D#":"#", "Eb":"b", "E":"b", "Fb":"b", "E#":"#", "F":"b", 
            "F#":"#", "Gb":"b", "G":"#", "G#":"#", "Ab":"b", "A":"#", "A#":"#", "Bb":"b", "B":"#", "Cb":"b"
        };

        var letters = ["A","B","C","D","E","F","G"];

        /////

        var note = note_base;
        if (sharp_flat) note += sharp_flat;

        var org_maj_key = key; 

        if(key in min_maj_map)
            org_maj_key = min_maj_map[key]; // minor is converted to maj key

        var target_maj_key = null; // given from external. Temprory implementation.

        if(Number.isInteger(transpose)){

            var base_value = note_values_2[org_maj_key];
            var tgt_value = (base_value + transpose + 12)%12;

            var half_to_apply = null;
            if(half_type.toUpperCase()  == "AUTO")
                half_to_apply = keyclass_maj[org_maj_key]; // Use the similar key class as original key
            else if(half_type.toUpperCase() == "SHARP")
                half_to_apply = "#";
            else if(half_type.toUpperCase() == "FLAT")
                half_to_apply = "b";
            else
                half_to_apply = half_type; // "#" or "b" directly is OK.

            var tgt_key_cand = note_values_1[tgt_value];
            if(tgt_key_cand[0]) target_maj_key = tgt_key_cand[0];
            else target_maj_key = tgt_key_cand[ half_to_apply == "b" ? 1 : 2];

        }else {
            // Key is specified directly
            target_maj_key = transpose;
            if(target_maj_key in min_maj_map)
                target_maj_key = min_maj_map[target_maj_key]; // minor is converted to maj key
            transpose = ((note_values_2[target_maj_key] - note_values_2[org_maj_key])+12)%12;
        }

        //console.log("Orignal key = "+org_maj_key + " Target key = " + target_key);

        var letter_diff = letters.indexOf(target_maj_key[0]) - letters.indexOf(org_maj_key[0]);

        var letter_index = letters.indexOf(note_base);
        var new_letter_index = (letter_index + letter_diff + 7)%7;
        var newletter = letters[new_letter_index];

        var nvalue = note_values_2[note];
        var new_nvalue = (nvalue + transpose + 12) % 12;

        var acc="";
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Take circular diff
            var offset = 6 - note_values_2[newletter]; 
            var fs = (new_nvalue + offset + 12)%12 - 6; // >0 means #, <0 means flat, 0 means no accidental

            if(fs == 0){ acc = ""; break; }
            else if(fs == 1){ acc = "#"; break; }
            else if(fs == -1){ acc = "b"; break; }
            else if(fs >= 2) { // ## can happen.
                // 2 can happen e.g. E# in key=C = III#. Key=D goes to F##. Convert it to G.
                // 3 can happen e.g. G# in key=Gb = I##. Key=C# goes to C###. Convert it to D#.
                // Next letter
                new_letter_index = (new_letter_index+1)%7;
                newletter = letters[new_letter_index];
            }else if(fs <= -2){
                // Previous letter
                // -2 can happen e.g. Fb in key=C = IVb. Key=Eb goes to Abb. Convert it to G.
                // -3 can happen e.g. Gb in key=B = VIbb = G#bb. Key=Db goes to Bbbb. Convert it to Ab.
                new_letter_index = (new_letter_index-1+7)%7;
                newletter = letters[new_letter_index];                
            }else{
                throw "Unexpected situation on transpose";
            }
        }

        return newletter+acc;
        
    }

    static getTransposedKeyFromOffset(key, transpose, half_type){

        let is_minor = key[key.length-1] == "m";
        let note = (is_minor ? key.substr(0, key.length-1) : key);
        let note_base = note[0];
        let acc = note.length==2 ? key[1] : null;

        let transposed_key = Chord.getTranpsoedNote(transpose, half_type, key, note_base, acc);

        if(is_minor) transposed_key += "m";

        return transposed_key;
    }
}

export class LoopIndicator extends Element {
    constructor(loopIndStr) {
        super();
        this.init(loopIndStr);
    }

    init(loopIndStr){
        // Note : Content of indicators are not always integers.
        // intindicators is storage for integer indicators analyzed from indicators.
        this.indstr = loopIndStr;
        this.intindicators = [];
        var intrg = new RegExp(/(\d+)/);
        let indicators = this.indstr.split(",");
        for (var i = 0; i < indicators.length; ++i) {
            let m = indicators[i].match(intrg);
            if (m) {
                this.intindicators.push(parseInt(m[0]));
            }
        }
    }
    exportCode(){ return `[${this.indstr}]`; }
}

export class Space extends Element{
    constructor(length=1){
        super();
        this.length = length;
        this.renderprop = {};
    }
    exportCode(){ return ",".repeat(this.length); }
}

export class LongRest extends Element {
    constructor(longrestlen) {
        super();
        this.longrestlen = longrestlen;
    }
    exportCode() {
        return `-${this.longrestlen}-`;
    }
}

export class Time extends Element {
    constructor(numer, denom) {
        super();
        this.numer = numer;
        this.denom = denom;
    }
    exportCode() {
        return `(${this.numer}/${this.denom})`;
    }
}

export class MeasureBoundary extends Element {
    constructor(exportTarget = true) {
        super();
        this.exportTarget = exportTarget;
    }
}

export class MeasureBoundaryMark extends MeasureBoundary {
    constructor(nline, exportTarget) {
		super(exportTarget);
        this.nline = nline;
    }
    exportCode() {
        return this.exportTarget ? "|".repeat(this.nline) : "";
    }
}

export class LoopBeginMark  extends MeasureBoundary {
    constructor(exportTarget = true) { super(exportTarget); }
    exportCode() {
        return this.exportTarget ?  "||:" : "";
    }
}

export class LoopEndMark  extends MeasureBoundary {
    constructor(param, exportTarget=true) {
        super(exportTarget);
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
    exportCode() {
        let ts = this.ntimes?"xX":`x${this.times}`;
        return this.exportTarget ? ":||"+(ts=="x2"?"":ts) : "";// x2 is not explicity stated : TODO : align with what wrote in the code.
    }
}

export class LoopBothMark  extends MeasureBoundary {
    constructor(param, exportTarget = true) {
		super(exportTarget);
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
    exportCode() {
        let ts = this.ntimes?"xX":`x${this.times}`;
        return this.exportTarget ? ":||:"+(ts=="x2"?"":ts) : ""; // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
}

export class MeasureBoundaryFinMark  extends MeasureBoundary {
    constructor(exportTarget = true) { super(exportTarget); }
    exportCode() {
        return this.exportTarget ? "||." : "";
    }
}

export class MeasureBoundaryDblSimile  extends MeasureBoundary {
    constructor(exportTarget = true) { super(exportTarget); }
    exportCode() {
        return this.exportTarget ? "./|/." : "";
    }
}

// Signs
export class DaCapo extends Element {
    constructor() {
        super();
    }

    toString() {
        return "D.C.";
    }
    exportCode(){ return this.toString(); }
}

export class DalSegno extends Element {
    constructor(number, al) {
        super();
        this.init(number, al);
    }

    init(number, al){
        this.number = number;
        this.al = al; // Either Coda/Fine
    }

    toString() {
        var dss = "D.S." + (this.number === null ? "" : this.number);
        var als = this.al === null ? "" : " al " + this.al.toString();
        return dss + als;
    }
    exportCode(){ return "<"+this.toString()+">"; }

}

export class Segno extends Element{
    constructor(number, opt) {
        super();
        this.number = number;
        this.opt = opt;
    }
    exportCode(){
        let opts = this.opt ? ` ${this.opt}` : "";
        return `<S${this.number||""}${opts}>`;
    }
}

export class Coda extends Element {
    constructor(number) {
        super();
        this.number = number;
    }

    toString() {
        return "Coda" + (this.number === null ? "" : this.number);
    }
    exportCode(){ return "<"+this.toString()+">"; }
}

export class ToCoda extends Element {
    constructor(number) {
        super();
        this.number = number;
    }
    exportCode(){ return `<to Coda${this.number||""}>`; }
}

export class Fine extends Element {
    constructor() {
        super();
    }

    toString() {
        return "Fine";
    }
    exportCode(){ return "<"+this.toString()+">"; }
}

export class Comment extends Element {
    constructor(comment, chorddep=false) {
        super();
        this.comment = comment;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
    setCodeDependency(v){ this.chorddep = v; }
    exportCode(){ return "'"+this.comment+"'"; } // TODO : quote considrtaion
}

export class Lyric extends Element {
    constructor(lyric, chorddep=false) {
        super();
        this.lyric = lyric;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
    setCodeDependency(v){ this.chorddep = v; }
    exportCode(){ return "`"+this.lyric+"`"; } // TODO : quote considrtaion
}

// Pure {} object
function isObject(val) {
    if( val !== null
        && typeof(val) === "object"
        && val.constructor === Object ) {
        return true;
    }
    return false;
}

// Represents Variable that is explicit shown in the drawing and user can select it.
export class Title extends Element {
    constructor(variable){
        super();
        this.variable = variable;
    }
}
export class SubTitle extends Element {
    constructor(variable){
        super();
        this.variable = variable;
    }
}
export class Artist extends Element {
    constructor(variable){
        super();
        this.variable = variable;
    }
}

// Variables that is used internally. Not explicty shown in the drawing.
export class Variable extends Node {
    constructor(name, value){
        super();
        this.name = name;
        this.value = deepcopy(value);
    }
    exportCode(){
        let vtype = typeof(this.value);
        let code = "%"+this.name+"=";
        if(vtype=="string")
            code += `"${this.value}"`;
        else if(vtype =="number")
            code += `${this.value}`;
        else if(isObject(this.value)){
            code += JSON.stringify(this.value);
        }else{
            throw "Error on export code for Variable";
        }
        return code;
    }
}

/**
 * Reperesetnts skipped contiguous spaces/tabs during parsing.
 * Used for serialization.
 */
export class RawSpaces extends Node
{
    constructor(sss){
        super();
        this.sss = sss;
    }
    exportCode(){
        return this.sss;
    }
}

export class TemplateString extends Node
{
    // dict is hold as reference. Any change in the dict is propagated to exported code
    constructor(tmpl, dict){
        super();
        this.tmpl = tmpl;
        this.dict = dict;
    }
    exportCode(){
        let tpl = deepcopy(this.tmpl);
        Object.keys(this.dict).forEach((k) => {
            tpl = tpl.replace(new RegExp("\\${" + k + "}","g"), this.dict[k]);
        });
        return tpl;
    }
}

export class HitManager
{
    constructor(){
        this.clear();
    }

    _uuid(){
        let chars = new Array(8);
        for(let i = 0; i < chars.length; ++i){
            chars[i] = Math.floor(Math.random() * 16).toString(16);
        }
        return chars.join();
    }
    
    _drawBBs(){
        for(let paper_id in this.papers){
            let p = this.papers[paper_id];
            let ctx = p.paper.getContext("2d");
            p.objs.forEach(entry=>{
                ctx.fillStyle = "rgb(0, 0, 255, 0.5)";
                ctx.fillRect(entry.bb.x[0], entry.bb.y[0], entry.bb.width(), entry.bb.height());
                //console.log("BB dump : " + [entry.bb.x[0], entry.bb.y[0], entry.bb.width(), entry.bb.height()]);
            });
        }
    }

    // This is to set global scale to convert the real on-screen coordinate to graphic coordinate.
    // Assumed to use when text_size parameter != 1 is specofied.
    setGlobalScale(sx, sy){
        this.global_scale.x = sx;
        this.global_scale.y = sy;
    }

    // Once you add, you need to call commmit to construct the data
    // Canvas DOM element "paper" has to have unique ID in .fumen_canvas_id property
    // If no fumen_canvas_id is specified, automtically generated with random string.
    add(paper, bb, element){
        if(bb === undefined){
            console.warn("bb is null");
            return;
        }
        if(paper.fumen_canvas_id === undefined){
            paper.fumen_canvas_id = this._uuid();
        }
        if(bb.width() <= 4) bb = bb.clone().expand(2,2,0,0);

        if(! (paper.fumen_canvas_id in this.papers)){
            this.papers[paper.fumen_canvas_id] = {
                paper: paper,
                objs: [],
                left_x_sorted: [],
                top_y_sorted: [],
                right_x_sorted: [],
                bottom_y_sorted: []
            };
        }
        this.papers[paper.fumen_canvas_id].objs.push({bb, element});
    }

    clear(){
        this.papers = {};
        this.global_scale = {x:1.0,y:1.0};
    }

    indexSort(paper, pred){
        // sort it in x
        var len = this.papers[paper.fumen_canvas_id].objs.length;
        var indices = new Array(len);
        for (var i = 0; i < len; ++i) indices[i] = i;
        indices.sort(pred);
        return indices;  
    }

    commit(paper){
        if(!(paper.fumen_canvas_id in this.papers)) return;
        
        let p = this.papers[paper.fumen_canvas_id];

        p.left_x_sorted = this.indexSort(paper, (a,b)=>{
            let va = p.objs[a].bb.x[0];
            let vb = p.objs[b].bb.x[0];
            return va < vb ? -1 : va > vb ? 1 : 0;
        });
        p.right_x_sorted = this.indexSort(paper, (a,b)=>{
            let va = p.objs[a].bb.x[1];
            let vb = p.objs[b].bb.x[1];
            return va < vb ? -1 : va > vb ? 1 : 0;
        });
        p.top_y_sorted = this.indexSort(paper, (a,b)=>{
            let va = p.objs[a].bb.y[0];
            let vb = p.objs[b].bb.y[0];
            return va < vb ? -1 : va > vb ? 1 : 0;
        });
        p.bottom_y_sorted = this.indexSort(paper, (a,b)=>{
            let va = p.objs[a].bb.y[1];
            let vb = p.objs[b].bb.y[1];
            return va < vb ? -1 : va > vb ? 1 : 0;
        });
    }

    get(paper, coord){
        if(!(paper.fumen_canvas_id in this.papers)) return;

        let p = this.papers[paper.fumen_canvas_id];
        var len = p.objs.length;

        var lx_end = p.left_x_sorted.findIndex(n => {
            return p.objs[n].bb.x[0] > coord.x / this.global_scale.x;
        });
        if(lx_end == 0) return [];
        else if(lx_end == -1) lx_end = len-1;
        else lx_end -= 1;

        var rx_start = p.right_x_sorted.findIndex(n => {
            return p.objs[n].bb.x[1] >= coord.x / this.global_scale.x;
        });
        if(rx_start == -1) return [];

        var ty_end = p.top_y_sorted.findIndex(n => {
            return p.objs[n].bb.y[0] > coord.y / this.global_scale.y;
        });
        if(ty_end == 0) return [];
        else if(ty_end == -1) ty_end = len-1;
        else ty_end -= 1;

        var by_start = p.bottom_y_sorted.findIndex(n => {
            return p.objs[n].bb.y[1] >= coord.y / this.global_scale.y;
        });
        if(by_start == -1) return [];

        let lxc = p.left_x_sorted.slice(0, lx_end+1);
        let rxc = p.right_x_sorted.slice(rx_start);
        let tyc = p.top_y_sorted.slice(0, ty_end+1);
        let byc = p.bottom_y_sorted.slice(by_start);
        
        let hit_objs = 
        lxc.filter((val)=>{
            return rxc.indexOf(val) !== -1;
        })
        .filter((val)=>{
            return tyc.indexOf(val) !== -1;
        })
        .filter((val)=>{
            return byc.indexOf(val) !== -1;
        })
        .map((val)=>{
            return {element: p.objs[val].element, 
                bb: p.objs[val].bb.clone().scale(this.global_scale.x, this.global_scale.y)};
        });
        
        return hit_objs;
    }
}
