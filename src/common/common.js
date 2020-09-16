import "@babel/polyfill";

// Default values for macros

let MACRO_DEFAULT = {
    "TITLE" : "NO TITLE",
    "SUB_TITLE": "",
    "ARTIST" : "NO ARTIST",
    "SHOW_HEADER": "YES",
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

export class TaskQueue {
    constructor() {
        this.task_queue = {};
    }

    enqueue(task) {
        if (task.task_type !== null) {
            // All the tasks with same task type are serialized
            // Tasks are queued
            if (!(task.task_type in this.task_queue))
                this.task_queue[task.task_type] = [];
            this.task_queue[task.task_type].push(task);
            console.log(
                "Enqueue task for queue '" +
                    task.task_type +
                    "'. Size = " +
                    this.task_queue[task.task_type].length
            );
            if (this.task_queue[task.task_type].length == 1) {
                setTimeout(task.run.bind(task), 0);
            }
        } else {
            setTimeout(task.run.bind(task), 0); // Just run it immediately if task type is null
        }
    }

    finish(task) {
        // Finish notification from task
        if (task.task_type === null) return;

        if (
            !(task.task_type in this.task_queue) ||
            this.task_queue[task.task_type].length == 0 ||
            this.task_queue[task.task_type][0] != task
        ) {
            alert("Invalid task execution state detected");
        } else {
            var q = this.task_queue[task.task_type];
            q.shift();
            console.log(
                "Dequeue task for queue '" +
                    task.task_type +
                    "'. Size = " +
                    q.length
            );
            if (q.length > 0) {
                // TODO : Set timer for next task run ?
                q[0].run();
            }
        }
    }
}

//
// Task and Task queue class
//
var the_task_queue = new TaskQueue();

export class Task {
    constructor(context, worker, task_type, queue) {
        if (task_type === undefined) task_type = null;

        this.task_type = task_type;
        this.context = context;
        this.worker = worker;

        this.promise = null;
        this.resolve = null;
        this.reject = null;

        var me = this;
        // TODO : Promise.defer may be better, but chrome does not support it yet.
        this.promise = new Promise(function(resolve, reject) {
            me.resolve = resolve;
            me.reject = reject;
        });

        queue = queue === undefined ? null : queue;
        this.queue = queue ? queue : the_task_queue;
        this.queue.enqueue(this);
    }

    then(func) {
        return this.promise.then(func);
    }

    run() {
        var ret = this.worker(this.context);

        if (ret instanceof Task || ret instanceof Promise) {
            // Asynchronous execution of worker
            var me = this;
            ret.then(function(taskret) {
                // End of task
                // false, 0, true, ... all the values other than Task and undefined is land in here.
                // ret is treated as a parameter for resolve
                if (me.resolve === null) {
                    alert("Invalid state detected");
                }
                me.resolve(taskret);
                // Note that resolve will invoke then "later".
                // finish notification will invoke a next task.
                // It is required to wait a 1msec to keep order of the "then" and next task call.
                setTimeout(me.queue.finish.bind(me.queue, me), 1);
            });
        } else {
            // End of task
            // false, 0, true, ... all the values other than Task and undefined is land in here.
            // ret is treated as a parameter for resolve
            if (this.resolve === null) {
                alert("Invalid state detected");
            }
            this.resolve(ret);
            // Note that resolve will invoke then "later".
            // finish notification will invoke a next task.
            // It is required to wait a 1msec to keep order of the "then" and next task call.
            setTimeout(this.queue.finish.bind(this.queue, this), 1);
        }
    }

    enqueueFunctionCall(func, farg, task_type) {
        return new Task(
            { func: func, farg: farg, i: 0, func_ret: undefined },
            function(ctx) {
                if (ctx.i > 0) return true; // Waste function's result : TODO : Handle function result to then
                let ret = ctx.func.apply(null, ctx.farg);
                ctx.func_ret = ret;
                if (ret === undefined) ret = true; // Force to exit 1 time even if the function returns undefined.
                ++ctx.i;
                return ret;
            },
            task_type
        ); // Make one shot task
    }

    _ForeachWorker(wc) {
        // Temporal queue to serialize following 2 tasks
        var tempqueue = new TaskQueue();
        new Task(
            wc,
            function(wc2) {
                return wc2.worker(
                    wc2.loopindex,
                    wc2.looptarget.length,
                    wc2.looptarget[wc2.loopindex],
                    wc2.context
                );
            },
            0,
            tempqueue
        );
        var task = new Task(
            wc,
            function(wc2) {
                if (wc2.loopindex == wc2.looptarget.length - 1) {
                    return wc2.context;
                }
                var newwc = shallowcopy(wc2);
                newwc.loopindex++;
                return new Task(newwc, Task._ForeachWorker, null);
            },
            0,
            tempqueue
        );
        return task;
    }

    Foreach(looptarget, worker, context, task_type) {
        var wcontext = {};
        wcontext.worker = worker;
        wcontext.context = context;
        wcontext.looptarget = looptarget;
        wcontext.loopindex = 0;
        var task = new Task(wcontext, Task._ForeachWorker, task_type);

        return task;
    }
}

//
// Parser
//

export var WHOLE_NOTE_LENGTH = 2 * 3 * 5 * 7 * 9 * 11 * 13 * 64;

export class Track {
    constructor() {
        this.reharsal_groups = new Array();
        this.macros = deepcopy(MACRO_DEFAULT);
        this.pre_render_info = {};
        this.serialize = []; // Store serialized data structure
    }
    
    // Utility functions open for external
    getKey() {
        if(Number.isInteger(this.macros["TRANSPOSE"])){
            let transposed_key = getTransposedKeyFromOffset(this.macros["KEY"], this.macros["TRANSPOSE"], this.macros["KEY_TYPE"]);
            return {key:transposed_key, originalKey:this.macros["KEY"]};
        }else{
            return {key:this.macros["TRANSPOSE"], originalKey:this.macros["KEY"]};
        }
    }

    setVariable(obj){
        for(let key in obj){
            this.macros[key] = deepcopy(obj[key]);
        }
    }

    getVariable(name){
        return this.macros[name];
    }

    exportCode(){
        let code = "";
        for(let si=0; si<this.serialize.length; ++si){
            code += this.serialize[si].exportCode();
        }
        return code;
    }
}

export class ReharsalGroup {
    constructor(name, inline=false) {
        this.name = name;
        this.inline = inline;
        //	this.measures = new Array();
        this.blocks = new Array(); // Blocks in the reharsal groups
        this.macros = deepcopy(MACRO_DEFAULT);

        this.serialize = [];
    }

    exportCode(){
        let code = "";
        for(let si=0; si<this.serialize.length; ++si){
            code += this.serialize[si].exportCode();
        }
        return code;
    }
}

export class Measure {
    constructor() {
        this.elements = new Array();
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
        this.macros = deepcopy(MACRO_DEFAULT);

        this.serialize = [];
    }

    exportCode(){
        let code = "";
        for(let si=0; si<this.serialize.length; ++si){
            code += this.serialize[si].exportCode();
        }
        return code;
    }
}

export class Rest {
    constructor(length_s) {
        this.length_s = length_s;
        this.note_group_list = [
            { lengthIndicator: parseLengthIndicator(length_s), note_profiles: null }
        ];
        this.renderprop = {};
    }
    exportCode(){
        return `r:${this.length_s}`;
    }
}

export class Simile {
    constructor(numslash) {
        // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
        this.numslash = numslash;
        this.renderprop = {};
        this.note_group_list = null;
    }
    exportCode(){
        return "."+("/".repeat(this.numslash))+".";
    }
}

// More sophiscated method based on BNF based parsing
/*
CHORD ::= ROOT ( "m" | "dim"|"aug"|"+")? "M"? ("5" | "6"|"7"|"9"|"11"|"13"|"69")? (("sus" ("4"|"2")? ) | ("add" ("2"|"9")))?  TENSIONLIST* ( EOF | ":" | "/" )
ROOT ::= ( A|B|C|D|E|F|G ) ("#"|"b") ?
TENSIONLIST ::= TENSIONGROUP | TENSIONGROUP ","? TENSIONLIST
TENSIONGROUP ::= TENSION | "(" TENSIONLIST ")" 
TENSION ::= ( ("+" ("5"|"9"|"11")) | ("-" ("5"|"9"|"13")) | ("b" ("9"|"13")) | ("#" ("9"|"11")) | ("no" ("3" | "5")) )
*/
function parseChordMids(s){
    function parse(ps){
        let structure = [];
        let r = null;

        //let fs = [root, triad, M, digit, sus, tensionlist, chordend];
        let fs = [triad, M, digit, sus, tensionlist, chordend];

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
        if(ps.length >= 1 && ps[0] == "M"){
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
        let ds = ["add9","add2","#11","+11","b13","-13","no3","no5","#9","+9","b9","-9","+5","-5"];
        let th = [3,     3,      1,    1,    1,    1,    2,    2,    1,   1,   1,   1,   1,   1  ]; // type and digit split pos
        if(ps.length == 0) return null;
        let r = charStartsWithAmong(ps, ds);
        if(r){
            return {
                s:ps.substr(r.s.length),
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

    function serializer(p){
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
            
            let code = "";
            for(let i = 0; i < p.structure.structure.length; ++i){
                let r = p.structure.structure[i];
                switch(r.type){
                case "triad":
                    objholder.push({type:r.value, param:r.param});
                    code += r.value + (r.param||"");
                    break;
                case "M":
                    objholder.push({type:r.type});
                    code += r.value;
                    break;
                case "dig":
                    objholder.push({type:"dig", param: r.value});
                    code += r.value;
                    break;
                case "sus":
                    objholder.push({type:r.value, param:r.param});
                    code += r.value + (r.param||"");
                    break;
                case "tensionlist":{
                    // normalize +, - to #, b
                    let serialize = [];
                    code += tensionlist(r.value, serialize);
                    for(let j=0; j<serialize.length; ++j){
                        var repl = {add:"add",sus:"sus","+":"#","-":"b","#":"#","b":"b"};
                        objholder.push({type:repl[serialize[j].value], param:serialize[j].param}); 
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

    let holder = parse(s);
    let [objholder, code] = serializer(holder);
    return [ holder, objholder, code];
}

function getNoteProfile(note_str) {
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
function parseLengthIndicator(length_s) {
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

function parseChordNotes(str) {
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
            var np = getNoteProfile(notes_str[nsi]);
            if (!np) throw "INVALID_TOKEN_DETECTED : invalid note notation";
            note_profiles.push(np);
        }

        sng = sng.substr(sngi + 1); // Skip )
        var r = /:(([\d_]+)(\.*)(~)?)/;
        var m = sng.match(r);

        if (!m[0]) throw "INVALID_TOKEN_DETECTED";

        var li = parseLengthIndicator(m[1]);

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

function getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat) {
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

function getTransposedKeyFromOffset(key, transpose, half_type){

    let is_minor = key[key.length-1] == "m";
    let note = (is_minor ? key.substr(0, key.length-1) : key);
    let note_base = note[0];
    let acc = note.length==2 ? key[1] : null;

    let transposed_key = getTranpsoedNote(transpose, half_type, key, note_base, acc);

    if(is_minor) transposed_key += "m";

    return transposed_key;
}

export class Chord {
    constructor(chord_str) {
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
                var ret = parseChordMids(this.mid_str);
                if (ret !== null) {
                    this.mid_elems = ret[0];
                    this.mid_elem_objs = ret[1];
                }
                this.is_valid_chord = ret !== null;
            }
            if (m[9]) {
                if (m[11]) {
                    var li = parseLengthIndicator(m[11]);
                    //this.length_s = m[11];
                    //this.length = li.length;
                    this.note_group_list = [{ lengthIndicator: li, note_profiles: null }];
                    //this.tie = li.has_tie;
                } else if (m[15]) {
                    // Notes
                    let ret = parseChordNotes(m[15]);
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
        return getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat);
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

    exportCode(){
        if(this.is_valid_chord){
            // construct from the raw data.
            // Keep the original strign as much as possible.
            let code = "";
            if(this.note_base) code += this.note_base;
            if(this.sharp_flat) code += this.sharp_flat;
            return code;
            //return this.chord_str;
        }else{
            return `"${this.chord_str}"`;
        }
    }
}

export class LoopIndicator {
    constructor(indicators) {
        // Note : Content of indicators are not always integers.
        // intindicators is storage for integer indicators analyzed from indicators.
        this.indicators = indicators;
        this.intindicators = [];
        var intrg = new RegExp(/(\d+)/);
        for (var i = 0; i < this.indicators.length; ++i) {
            let m = this.indicators[i].match(intrg);
            if (m) {
                this.intindicators.push(parseInt(m[0]));
            }
        }
    }
    exportCode(){ return `[${this.indicators}]`; }
}

export class Space{
    constructor(length=1){
        this.length = length;
        this.renderprop = {};
    }
    exportCode(){ return ",".repeat(this.length); }
}

export class LongRestIndicator {
    constructor(longrestlen) {
        this.longrestlen = longrestlen;
    }
    exportCode() {
        return `-${this.longrestlen}-`;
    }
}

export class Time {
    constructor(numer, denom) {
        this.numer = numer;
        this.denom = denom;
    }
    exportCode() {
        return `(${this.numer}/${this.denom})`;
    }
}

export class MeasureBoundary {
    constructor() {}
}

export class MeasureBoundaryMark extends MeasureBoundary {
    constructor(nline) {
		super();
        this.nline = nline;
    }
    exportCode() {
        return "|".repeat(this.nline);
    }
}

export class LoopBeginMark  extends MeasureBoundary {
    constructor() { super(); }
    exportCode() {
        return "||:";
    }
}

export class LoopEndMark  extends MeasureBoundary {
    constructor(param) {
        super();
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
    exportCode() {
        let ts = this.ntimes?"xX":`x${this.times}`;
        return ":||"+(ts=="x2"?"":ts); // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
}

export class LoopBothMark  extends MeasureBoundary {
    constructor(param) {
		super();
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
    exportCode() {
        let ts = this.ntimes?"xX":`x${this.times}`;
        return ":||:"+(ts=="x2"?"":ts); // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
}

export class MeasureBoundaryFinMark  extends MeasureBoundary {
    constructor() { super(); }
    exportCode() {
        return "||.";
    }
}

export class MeasureBoundaryDblSimile  extends MeasureBoundary {
    constructor() { super(); }
    exportCode() {
        return "./|/.";
    }
}

// Signs
export class DaCapo {
    constructor() {}

    toString() {
        return "D.C.";
    }
    exportCode(){ return this.toString(); }
}

export class DalSegno {
    constructor(number, al) {
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

export class Segno {
    constructor(number, opt) {
        this.number = number;
        this.opt = opt;
    }
    exportCode(){
        let opts = this.opt ? ` ${this.opt}` : "";
        return `<S${this.number||""}${opts}>`;
    }
}

export class Coda {
    constructor(number) {
        this.number = number;
    }

    toString() {
        return "Coda" + (this.number === null ? "" : this.number);
    }
    exportCode(){ return "<"+this.toString()+">"; }
}

export class ToCoda {
    constructor(number) {
        this.number = number;
    }
    exportCode(){ return `<to Coda${this.number||""}>`; }
}

export class Fine {
    constructor() {}

    toString() {
        return "Fine";
    }
    exportCode(){ return "<"+this.toString()+">"; }
}

export class Comment {
    constructor(comment, chorddep=false) {
        this.comment = comment;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
    setCodeDependency(v){ this.chorddep = v; }
    exportCode(){ return "'"+this.comment+"'"; } // TODO : quote considrtaion
}

export class Lyric {
    constructor(lyric, chorddep=false) {
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

export class Macro {
    constructor(name, value){
        this.name = name;
        this.value = value;
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
            throw "Error on export code for Macro";
        }
        return code;
    }
}

/**
 * Reperesetnts skipped contiguous spaces/tabs during parsing.
 * Used for serialization.
 */
export class RawSpaces
{
    constructor(sss){
        this.sss = sss;
    }
    exportCode(){
        return this.sss;
    }
}

export class TemplateString
{
    // dict is hold as reference. Any change in the dict is propagated to exported code
    constructor(tmpl, dict){
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
                console.log("BB dump : " + [entry.bb.x[0], entry.bb.y[0], entry.bb.width(), entry.bb.height()]);
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
    add(paper, bb, obj){
        if(bb === undefined){
            console.warn("bb is null");
            return;
        }
        if(paper.fumen_canvas_id === undefined){
            paper.fumen_canvas_id = this._uuid();
        }

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
        this.papers[paper.fumen_canvas_id].objs.push({bb, obj});
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
            return p.objs[val].obj;
        });
        
        return hit_objs;
    }
}
