/**
 * @module Fumen
 */

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

// Utilities
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

export function findLastIndex(array, predicate) {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array))
            return l;
    }
    return -1;
}

//
// Parser
//

export var WHOLE_NOTE_LENGTH = 2 * 3 * 5 * 7 * 9 * 11 * 13 * 64;

/**
 * Abstract base class represetns the fumen code tree
 */
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
        this.childNodes.forEach(e=>{
            code += e.exportCode();
        });
        return code;
    }

    getVariable(name){
        let variable = this.getVariableObject(name);
        if(variable) return variable.value;
        return null;
    }

    getVariableObject(name){
        if(name in this.variables) return this.variables[name];
        if(this.parentNode) return this.parentNode.getVariableObject(name);
        return null;
    }

    setVariable(...args){
        if(args.length == 1){
            let variable = args[0]; // Variable object
            if(! (variable instanceof Variable) ) throw "Invalid object passed";
            this.variables[variable.name] = variable; // reference
            return variable; // same object
        }else{
            let name = args[0];
            let value = args[1];
            if(name in this.variables) this.variables[name].value = deepcopy(value);
            else this.variables[name] = new Variable(name, value);

            return this.variables[name];
        }
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
        if(this.parentNode){
            let i = this.parentNode.childNodes.indexOf(this);
            this.parentNode.childNodes.splice(i, 1);
        }
        if(this.previousSiblingNode) this.previousSiblingNode.nextSiblingNode = this.nextSiblingNode;
        if(this.nextSiblingNode) this.nextSiblingNode.previousSiblingNode = this.previousSiblingNode;
    }

    forEach(cb){
        // removal tolerable for each
        let cs = [];
        this.childNodes.forEach(n=>cs.push(n));
        cs.forEach(cb);
    }

    find(cond, recurse=false){
        let ret = this.childNodes.filter(cond);
        if(recurse){
            this.childNodes.forEach(c=>{
                ret = ret.concat( c.find(cond, recurse) );
            });
        }
        return ret;
    }
    findFirstOf(cond){
        for(let i = 0; i < this.childNodes.length; ++i){
            if(cond(this.childNodes[i])) return this.childNodes[i];
        }
        return null;
    }
    findLastOf(cond){
        for(let i = this.childNodes.length-1; i >=0; --i){
            if(cond(this.childNodes[i])) return this.childNodes[i];
        }
        return null;
    }
    indexOf(cond){
        for(let i = 0; i < this.childNodes.length; ++i){
            if(cond(this.childNodes[i])) return i;
        }
        return -1;
    }

    clone(){ throw "Shall be overrided"; }

    dump(depth){
        depth = depth||0;
        let s = "   ".repeat(depth) + this.constructor.name + "\n";
        this.childNodes.forEach(c=>{
            s += c.dump(depth+1);
        });
        return s;
    }
}

/**
 * Abstract class represents musical elements 
 * @extends Node
 */
export class Element extends Node {
    // Musical
    constructor(){
        super();
    }

    clone(){ throw "Shall be overrided"; }
    getElementName() { throw "Shall be overrided; "}
}

/**
 * A class represents a track
 * @extends Element
 */
export class Track extends Element {
    constructor() {
        super();
        for(let key in VARIABLE_DEFAULT){
            this.setVariable(key, VARIABLE_DEFAULT[key]);
        }
        this.pre_render_info = {};
    }

    getElementName() { return "Track"; }
    
    // Utility functions open for external
    getKey() {
        if(Number.isInteger(this.getVariable("TRANSPOSE"))){
            let transposed_key = Chord.getTransposedKeyFromOffset(this.getVariable("KEY"), this.getVariable("TRANSPOSE"), this.getVariable("KEY_TYPE"));
            return {key:transposed_key, originalKey:this.getVariable("KEY")};
        }else{
            return {key:this.getVariable("TRANSPOSE"), originalKey:this.getVariable("KEY")};
        }
    }

    exportCode(){
        let rgcnt = 0;
        let code = "";
        this.childNodes.forEach(e=>{
            if(e instanceof RehearsalGroup){
                if(rgcnt > 0){
                    code += "\n";
                    if(!e.inline) code += "\n";
                }
                code += e.exportCode();
                ++rgcnt;
            }else if(e instanceof Variable){
                // could be Variable
                code += e.exportCode() + "\n";
            }else{
                throw "Invali element detected";
            }
        });
        return code;
    }

    clone(){
        let n = new Track();
        this.childNodes.map(c=>{ n.appendChild(c.clone()); });
        return n;
    }
}

/**
 * A class represents a rehearsal group
 * @extends Element
 */
export class RehearsalGroup extends Element{
    constructor(name, inline=false) {
        super();
        this.name = name;
        this.inline = inline;
    }
    getElementName() { return "RehearsalGroup"; }
    exportCode(){
        let code = "";
        let blockcnt = 0;
        code += "["+this.name+"]\n";
        this.childNodes.forEach(e=>{
            if(e instanceof Block){
                if(blockcnt > 0) code += "\n\n";
                code += e.exportCode();
                ++blockcnt;
            }else{
                throw "Invalid element detected";
            }
        });
        return code;
    }

    clone(){
        let n = new RehearsalGroup(this.name, this.inline);
        this.childNodes.map(c=>{ n.appendChild(c.clone()); });
        return n;
    }
}

/**
 * A class represents a block
 * @extends Element
 */
export class Block extends Element{
    constructor(){
        super();
    }
    getElementName() { return "Block"; }
    concat(newmeasures){
        // in-place concat.
        // do not use concat as the object is replaced.
        for(let i = 0; i < newmeasures.length; ++i)
            this.appendChild(newmeasures[i]);
    }

    clone(){
        let n = new Block();
        this.childNodes.map(c=>{ n.appendChild(c.clone()); });
        return n;
    }
    exportCode(){
        let code = "";
        let measure_appears = false;
        this.childNodes.forEach((e,i)=>{
            if(e instanceof Measure){
                measure_appears = true;
                if(e.raw_new_line) code += "\n"; // This case should not be a first measure in this block
                code += e.exportCode();
            }else if(e instanceof Variable){
                // could be Variable
                if(measure_appears){
                    code += ("\n" + e.exportCode()); // last NL will be added by next measure or next turn of this code.
                }else{
                    code += (e.exportCode() + "\n"); // Next mreasure
                }
            }
        });
        return code;
    }
}

/**
 * A class represents a measure
 * @extends Element
 */
export class Measure extends Element{
    constructor() {
        super();

        this.raw_new_line = false; // Raw "new line" mark. Maked when this is a second or later measure inside a rehearsal group after one ore more new lines in the fumen code
        this.align = "expand"; // expand, left, right

        this.renderprop = {}; // Rendering information storage
    }
    getElementName() { return "Measure"; }
    clone(){
        let n = new Measure();
        n.raw_new_line = this.raw_new_line;
        n.align = this.align;
        this.childNodes.map(c=>{ n.appendChild(c.clone()); });
        return n;
    }

    pushToBody(elem){
        let i =  this.childNodes.length-1;
        for(; i >= 0; --i){
            let e = this.childNodes[i];
            if(e instanceof MeasureBoundary) break;
        }
        this.childNodes.splice(i, 0, elem);
    }

    exportCode(){
        let code = "";
        //if(this.raw_new_line) code += "\n"; // added at block export
        if(this.align == "left") code += "<";
        else if(this.align == "right") code += ">";
        this.childNodes.forEach(e=>{
            if(e instanceof MeasureBoundary){
                if(!e.exportTarget) return "";
            }
            code += (e.exportCode() + " ");
        });
        return code;
    }

    remove(){
        // Combine elements considering the boundaries. 

        let prevMeas = this.previousSiblingNode;
        while( prevMeas && !(prevMeas instanceof Measure) ) prevMeas = prevMeas.previousSiblingNode; // Find closest Measure

        let nextMeas = this.nextSiblingNode;
        while( nextMeas && !(nextMeas instanceof Measure) ) nextMeas = nextMeas.nextSiblingNode; // Find closest Measure
        
        let firstMeasInACodeRow = this.raw_new_line || (!prevMeas);
        let lastMeasInACodeRow  = (!nextMeas) || (nextMeas.raw_new_line);
        if(firstMeasInACodeRow || lastMeasInACodeRow){
            // Edge measure of code row
            super.remove();
            if(prevMeas && lastMeasInACodeRow) prevMeas.findLastOf(e=>e instanceof MeasureBoundary).exportTarget = true;
            if(nextMeas && (!lastMeasInACodeRow)) nextMeas.raw_new_line = this.raw_new_line; // Inherit the raw_new_line of this measure.
            if(nextMeas && nextMeas.parentNode.findFirstOf(e=>e instanceof Measure) == nextMeas) nextMeas.raw_new_line = false; // If next meas becomes the top meas, make it false.
        }else{
            // Intermediate measure inside a single row.
            super.remove();
            
            let prevEndB = prevMeas.findLastOf(e=>e instanceof MeasureBoundary);
            let nextBeginB = nextMeas.findFirstOf(e=> e instanceof MeasureBoundary);

            let newB_p = MeasureBoundary.combine(prevEndB, nextBeginB);
            let newB_n = MeasureBoundary.combine(prevEndB, nextBeginB);
            
            newB_p.exportTarget = false;
            prevMeas.insertBefore(prevEndB, newB_p);
            prevEndB.remove();

            newB_n.exportTarget = true;
            nextMeas.insertBefore(nextBeginB, newB_n);
            nextBeginB.remove();
        }
    }
}

/**
 * A class represents a rest
 * @extends Element
 */
export class Rest extends Element{
    constructor(length_s) {
        super();
        this.init(length_s);
    }
    getElementName() { return "Rest"; }
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

    clone(){ return new Rest(this.length_s); }
}

/**
 * A class represents a simile mark
 * @extends Element
 */
export class Simile extends Element{
    constructor(numslash) {
        super();
        // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
        this.numslash = numslash;
        this.renderprop = {};
        this.note_group_list = null;
    }
    getElementName() { return "Simile"; }
    exportCode(){
        return "."+("/".repeat(this.numslash))+".";
    }
    clone(){ return new Simile(this.numslash); }
}

/**
 * A class represents a chord
 * @extends Element
 */
export class Chord extends Element {
    constructor(chord_str) {
        super();
        this.init(chord_str);
    }
    getElementName() { return "Chord"; }
    clone(){
        let n = new Chord(this.chord_str);
        if(this.exceptinal_comment){
            n.exceptinal_comment = this.exceptinal_comment.clone();
            n.exceptinal_comment.setCodeDependency(n);
        }
        if(this.lyric){
            n.lyric = this.lyric.clone();
            n.lyric.setCodeDependency(n);
        }
        return n;
    }
    setSyncopationAndGetShadowChord(se){
        this.syncopationElement = se;

        let n = new Chord(this.chord_str);
        if(this.exceptinal_comment){
            n.exceptinal_comment = this.exceptinal_comment; // Just use reference
            //n.exceptinal_comment.setCodeDependency(n); // Chord dependency is kept for source chord.
        }
        if(this.lyric){
            n.lyric = this.lyric; // Just use reference
            //n.lyric.setCodeDependency(n); // Chord dependency is kept for source chord.
        }

        n.syncopationElement = se;
        n.isSyncopationShadowChord = true;

        n.note_group_list.forEach((ng)=>{
            ng.lengthIndicator = se.lengthIndicator;
        });

        return n;
    }
    init(chord_str){
        this.chord_str = chord_str;

        this.is_valid_chord = true;

        this.renderprop = {};

        this.exceptinal_comment = null;
        this.lyric = null;

        this.isSyncopationShadowChord = false; // This is set to the original chord for which syncopation is applied.
        this.syncopationElement = null; // This is set to the generated shadow chord which is syncopation of other chord.

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

    isSyncopatedShadow(){
        return this.isSyncopationShadowChord;
    }

    isSyncopatedSource(){
        return (this.syncopationElement && (!this.isSyncopationShadowChord));
    }

    exportCode(){
        if(this.isSyncopatedShadow()) return ""; // This shall be not exported.

        let code = "";
        if(this.exceptinal_comment){
            code += this.exceptinal_comment.exportCode() + "@ ";
        }
        if(this.lyric){
            code += this.lyric.exportCode() + "@ ";
        }
        if(this.is_valid_chord){
            // construct from the raw data.
            // Keep the original strign as much as possible.
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
            return code+`"${this.chord_str}"`;
        }
    }

    remove(){
        if(this.isSyncopatedSource()){
            this.syncopationElement.remove();
        }else if(this.isSyncopatedShadow()){
            this.syncopationElement.remove();
        }
        super.remove();
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
        var renpu = null;
        if (mm[3]) {
            // Renpu
            renpu = parseInt(mm[4]);
            //length = WHOLE_NOTE_LENGTH / (base / 2) / renpu;
            let base_length = 0;
            if(renpu == 2){
                base_length = WHOLE_NOTE_LENGTH/base/2*3; // shall be integer
            }else if(renpu == 3){
                base_length = WHOLE_NOTE_LENGTH/base*2; // shall be integer
            }else if(renpu <= 7){
                base_length = WHOLE_NOTE_LENGTH/base*4; // shall be integer
            }else if(renpu <= 15){
                base_length = WHOLE_NOTE_LENGTH/base*8; // shall be integer
            }
            length = base_length / renpu;
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

/**
 * A class represents a syncopation
 * @extends Element
 */
export class Syncopation extends Element {
    constructor(ins) {
        super();
        this.init(ins);
    }
    getElementName() { return "LoopIndicator"; }
    init(ins){
        // Note : Content of indicators are not always integers.
        // intindicators is storage for integer indicators analyzed from indicators.
        this.indstr = ins;
        this.lengthIndicator = Chord.parseLengthIndicator(ins);
        this.lengthIndicator.has_tie = true; // Force tie
    }
    exportCode(){  
        return `<:${this.indstr}`;
    }
    clone(){ return new Syncopation(this.indstr); }
}

/**
 * A class represents a loop indicator
 * @extends Element
 */
export class LoopIndicator extends Element {
    constructor(loopIndStr) {
        super();
        this.init(loopIndStr);
    }
    getElementName() { return "LoopIndicator"; }
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
    clone(){ return new LoopIndicator(this.indstr); }
}

/**
 * A class represents a space
 * @extends Element
 */
export class Space extends Element{
    constructor(length=1){
        super();
        this.length = length;
        this.renderprop = {};
    }
    getElementName() { return "Space"; }
    exportCode(){ return ",".repeat(this.length); }
    clone(){ return new Space(this.length); }
}

/**
 * A class represents a long rest
 * @extends Element
 */
export class LongRest extends Element {
    constructor(longrestlen) {
        super();
        this.longrestlen = longrestlen;
    }
    getElementName() { return "LongRest"; }
    exportCode() {
        return `-${this.longrestlen}-`;
    }
    clone(){ return new LongRest(this.longrestlen); }
}

/**
 * A class represents a time signature
 * @extends Element
 */
export class Time extends Element {
    constructor(numer, denom) {
        super();
        this.numer = numer;
        this.denom = denom;
    }
    getElementName() { return "Time"; }
    exportCode() {
        return `(${this.numer}/${this.denom})`;
    }
    clone(){ return new Time(this.numer, this.denom); }
}

/**
 * Abstract class represents a measure boundary
 * @extends Element
 */
export class MeasureBoundary extends Element {
    constructor(exportTarget = true) {
        super();
        this.exportTarget = exportTarget;
    }
    getElementName() { return "MeasureBoundary"; }
    // Factory function to make a new boundary from 2 boundaries
    static combine(b0, b1){
        // s,d,b,e,B,f,r,n
        // 8C2 = 56
        // define priority order, then define some exceptions
        let priority = {n:0, s:1, d:2, f:3, r:4, b:5, e:6, B:7};
        let combineRule = {
            eb: ()=>new LoopBothMark({ntimes:b0.ntimes, times:b0.times})
        };
        let factory = {
            s: ()=>new MeasureBoundaryMark(1),
            d: ()=>new MeasureBoundaryMark(2),
            b: ()=>new LoopBeginMark(),
            e: ()=>new LoopEndMark({ntimes:b0.ntimes, times:b0.times}),
            B: ()=>new LoopBothMark({ntimes:b0.ntimes, times:b0.times}),
            f: ()=>new MeasureBoundaryFinMark(),
            r: ()=>new MeasureBoundaryDblSimile(),
            n: ()=>null
        };
        let key = b0.typestr+b1.typestr;
        let newB = null;
        if(key in combineRule){
            newB = combineRule[key]();
        }else{
            if(priority[b0.typestr] < priority[b1.typestr]){
                newB = factory[b1.typestr]();
            }else{
                newB = factory[b0.typestr]();
            }
        }
        return newB;
    }
}

/**
 * Class represents a measure boundary with signle or double line
 * @extends MeasureBoundary
 */
export class MeasureBoundaryMark extends MeasureBoundary {
    constructor(nline, exportTarget) {
		super(exportTarget);
        this.nline = nline;
        this.typestr = this.nline==1 ? "s":"d";
    }
    getElementName() { return "MeasureBoundaryMark"; }
    exportCode() {
        return this.exportTarget ? "|".repeat(this.nline) : "";
    }
    clone(){ return new MeasureBoundaryMark(this.nline, this.exportTarget); }
}

/**
 * Class represents a measure boundary at the beginning of loop
 * @extends MeasureBoundary
 */
export class LoopBeginMark  extends MeasureBoundary {
    constructor(exportTarget = true) {
        super(exportTarget);
        this.typestr = "b";
    }
    getElementName() { return "LoopBeginMark"; }
    exportCode() {
        return this.exportTarget ?  "||:" : "";
    }
    clone(){ return new LoopBeginMark(this.exportTarget); }
}

/**
 * Class represents a measure boundary at the end of loop
 * @extends MeasureBoundary
 */
export class LoopEndMark  extends MeasureBoundary {
    constructor(param, exportTarget=true) {
        super(exportTarget);
        this.times = param.times;
        this.ntimes = param.ntimes;
        this.typestr = "e";
    }
    getElementName() { return "LoopEndMark"; }
    exportCode() {
        let ts = this.ntimes?"xX":(this.times?`x${this.times}`:"");
        return this.exportTarget ? ":||"+(ts=="x2"?"":ts) : "";// x2 is not explicity stated : TODO : align with what wrote in the code.
    }
    clone(){ return new LoopEndMark({times:this.times, ntimes:this.ntimes}, this.exportTarget); }
}

/**
 * Class represents a measure boundary at the end and beginning of loop
 * @extends MeasureBoundary
 */
export class LoopBothMark  extends MeasureBoundary {
    constructor(param, exportTarget = true) {
		super(exportTarget);
        this.times = param.times;
        this.ntimes = param.ntimes;
        this.typestr = "B";
    }
    getElementName() { return "LoopBothMark"; }
    exportCode() {
        let ts = this.ntimes?"xX":(this.times?`x${this.times}`:"");
        return this.exportTarget ? ":||:"+(ts=="x2"?"":ts) : ""; // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
    clone(){ return new LoopBothMark({times:this.times, ntimes:this.ntimes}, this.exportTarget); }
}

/**
 * Class represents a measure boundary at the end of a piece
 * @extends MeasureBoundary
 */
export class MeasureBoundaryFinMark  extends MeasureBoundary {
    constructor(exportTarget = true) {
        super(exportTarget);
        this.typestr = "f";
    }
    getElementName() { return "MeasureBoundaryFinMark"; }
    exportCode() {
        return this.exportTarget ? "||." : "";
    }
    clone(){ return new MeasureBoundaryFinMark(this.exportTarget); }
}

/**
 * Class represents a measure boundary with double simile mark over it
 * @extends MeasureBoundary
 */
export class MeasureBoundaryDblSimile  extends MeasureBoundary {
    constructor(exportTarget = true) {
        super(exportTarget);
        this.typestr = "r";
    }
    getElementName() { return "MeasureBoundaryDblSimile"; }
    exportCode() {
        return this.exportTarget ? "./|/." : "";
    }
    clone(){ return new MeasureBoundaryDblSimile(this.exportTarget); }
}

// Signs
/**
 * Class represents a DaCapo mark
 * @extends Element
 */
export class DaCapo extends Element {
    constructor(al) {
        super();
        this.init(al);
    }
    getElementName() { return "DaCapo"; }
    init(al){
        this.al = al; // Either Coda/Fine
    }

    toString() {
        var dss = "D.C.";
        var als = this.al ? (" al " + this.al.toString()) : "";
        return dss + als;
    }
    exportCode(){ return "<"+this.toString()+">"; }
    clone(){ return new DaCapo(this.al ? this.al.clone() : null); }
}

/**
 * Class represents a DalSegno mark
 * @extends Element
 */
export class DalSegno extends Element {
    constructor(number, al) {
        super();
        this.init(number, al);
    }
    getElementName() { return "DalSegno"; }
    init(number, al){
        this.number = number;
        this.al = al; // Either Coda/Fine
    }

    toString() {
        var dss = "D.S." + (this.number || "");
        var als = this.al ? (" al " + this.al.toString()) : "";
        return dss + als;
    }
    exportCode(){ return "<"+this.toString()+">"; }
    clone(){ return new DalSegno(this.number, this.al ? this.al.clone() : null); }
}

/**
 * Class represents a Segno mark
 * @extends Element
 */
export class Segno extends Element{
    constructor(number, opt) {
        super();
        this.number = number;
        this.opt = opt;
    }
    getElementName() { return "Segno"; }
    exportCode(){
        let opts = this.opt ? ` ${this.opt}` : "";
        return `<S${this.number||""}${opts}>`;
    }
    clone(){  return new Segno(this.number, this.opt); }
}

/**
 * Class represents a Coda mark
 * @extends Element
 */
export class Coda extends Element {
    constructor(number) {
        super();
        this.number = number;
    }
    getElementName() { return "Coda"; }
    toString() {
        return "Coda" + (this.number || "");
    }
    exportCode(){ return "<"+this.toString()+">"; }
    clone(){ return new Coda(this.number); }
}

/**
 * Class represents a To Coda mark
 * @extends Element
 */
export class ToCoda extends Element {
    constructor(number) {
        super();
        this.number = number;
    }
    getElementName() { return "ToCoda"; }
    exportCode(){ return `<to Coda${this.number||""}>`; }
    clone(){ return new ToCoda(this.number); }
}

/**
 * Class represents a Fine mark
 * @extends Element
 */
export class Fine extends Element {
    constructor() {
        super();
    }
    getElementName() { return "Fine"; }
    toString() {
        return "Fine";
    }
    exportCode(){ return "<"+this.toString()+">"; }
    clone(){ return new Fine(); }
}

/**
 * Class represents a Comment
 * @extends Element
 */
export class Comment extends Element {
    constructor(comment, chorddep=null) {
        super();
        this.comment = comment;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
    getElementName() { return "Comment"; }
    setCodeDependency(v){ this.chorddep = v; }
    exportCode(){ return "'"+this.comment+"'"; } // TODO : quote considrtaion
    remove(){
        if(this.chorddep){
            this.chorddep.exceptinal_comment = null;
            this.chorddep = null;
        }
        super.remove();
    }
    clone(){ return new Comment(this.comment); } // NOTE : codedep is reset
}

/**
 * Class represents a lyric
 * @extends Element
 */
export class Lyric extends Element {
    constructor(lyric, chorddep=null) {
        super();
        this.lyric = lyric;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
    getElementName() { return "Lyric"; }
    setCodeDependency(v){ this.chorddep = v; }
    exportCode(){ return "`"+this.lyric+"`"; } // TODO : quote considrtaion
    remove(){
        if(this.chorddep){
            this.chorddep.lyric = null;
            this.chorddep = null;
        }
        super.remove();
    }
    clone(){ return new Lyric(this.lyric); } // NOTE : codedep is reset
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
    getElementName() { return "Title"; }
}
export class SubTitle extends Element {
    constructor(variable){
        super();
        this.variable = variable;
    }
    getElementName() { return "SubTitle"; }
}
export class Artist extends Element {
    constructor(variable){
        super();
        this.variable = variable;
    }
    getElementName() { return "Artist"; }
}

/**
 * Class represents a Variable. Not always shown in the rendered image (up to renderer implementation)
 * @extends Node
 */
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
        //code += "\n";
        return code;
    }
}

/**
 * Virtual/Abstract element used for GUI based editting. Not appears explicitly in the original code nor in rendered image.
 * Only used in HitManager
 */
export class VirtualElement
{
}

/**
 * Class represents the concept of row in the renderer. How to use this is up to renderer.
 * @extends VirtualElement
 */
export class GenericRow extends VirtualElement
{
    constructor(type, param){
        super();
        this.type = type;
        this.param = param; // Any element can be associated.
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
        bb = bb.clone();

        if(bb.width() <= 4) bb.expand(2,2,0,0);

        bb.scale(this.global_scale.x, this.global_scale.y); // Registered as on-screen coordinates

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
            return p.objs[n].bb.x[0] > coord.x;
        });
        if(lx_end == 0) return [];
        else if(lx_end == -1) lx_end = len-1;
        else lx_end -= 1;

        var rx_start = p.right_x_sorted.findIndex(n => {
            return p.objs[n].bb.x[1] >= coord.x;
        });
        if(rx_start == -1) return [];

        var ty_end = p.top_y_sorted.findIndex(n => {
            return p.objs[n].bb.y[0] > coord.y;
        });
        if(ty_end == 0) return [];
        else if(ty_end == -1) ty_end = len-1;
        else ty_end -= 1;

        var by_start = p.bottom_y_sorted.findIndex(n => {
            return p.objs[n].bb.y[1] >= coord.y;
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
                bb: p.objs[val].bb.clone()};
        });
        
        return hit_objs;
    }
}
