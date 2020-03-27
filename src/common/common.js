import "@babel/polyfill";

// Default values for macros

let MACRO_DEFAULT = {
    "TITLE" : "NO TITLE",
    "SUB_TITLE": "",
    "ARTIST" : "NO ARTIST",
    "SHOW_HEADER": "YES",
    "SHOW_FOOTER": "YES",
    "STAFF": "AUTO",
    "TRANSPOSE" : 0,
    "KEY": "C",
    "HALF_TYPE" : "GUESS",
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
	}
}

export class ReharsalGroup {
    constructor(name, inline=false) {
        this.name = name;
        this.inline = inline;
        //	this.measures = new Array();
        this.blocks = new Array(); // Blocks in the reharsal groups
        this.macros = deepcopy(MACRO_DEFAULT);
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
    }
}

export class Rest {
    constructor(length_s) {
        this.note_group_list = [
            { lengthIndicator: parseLengthIndicator(length_s), note_profiles: null }
        ];
        this.renderprop = {};
    }
}

export class Simile {
    constructor(numslash) {
        // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
        this.numslash = numslash;
        this.renderprop = {};
        this.note_group_list = null;
    }
}

var cnrg = new RegExp();
cnrg.compile(
    /^((sus(4|2)?)|(add(9|13))|(alt)|(dim)|(7|9|6|11|13)|((\+|#)(5|9|13|11))|((-|b)(5|9|13))|([Mm]([Aa][Jj]?|[Ii][Nn]?)?)|([,()]))/
);
var CS_IDX_OFFSET = 2;

var CS_SUS = 0;
var CS_SUS_DIG = 1;
var CS_ADD = 2;
var CS_ADD_DIG = 3;
var CS_ALT = 4;
var CS_DIM = 5;
var CS_DIG = 6;
var CS_PLS = 7;
var CS_PLS_SYM = 8;
var CS_PLS_DIG = 9;
var CS_MNS = 10;
var CS_MNS_SYM = 11;
var CS_MNS_DIG = 12;
var CS_M = 13;
var CS_M_TAIL = 14;
var CS_SEP = 15;
var NUM_CS = 16;
var CS_LIST = [
    CS_M,
    CS_DIG,
    CS_SUS,
    CS_DIM,
    CS_SEP,
    CS_PLS,
    CS_MNS,
    CS_ADD,
    CS_ALT
]; // Frequently used first

function parseChordMids(s) {
    var holder = [];
    var objholder = [];
    while (s.length > 0) {
        //if([",","(",")"].indexOf(s[0]) >= 0){ s = s.substr(1); continue; }
        let m = s.match(cnrg);
        //console.log(m);
        if (m === null) {
            console.log("Invalid code notation : " + s);
            return null;
        }
        for (var i = 0; i < CS_LIST.length; ++i) {
            if (
                m[CS_IDX_OFFSET + CS_LIST[i]] !== undefined &&
                m[CS_IDX_OFFSET + CS_LIST[i]] !== null
            ) {
                holder.push({ cs: CS_LIST[i], s: m[0], g: m });
                break;
            }
        }

        s = s.substr(m[0].length);
    }

    var minor_exists = false;
    for (let i = 0; i < holder.length; ++i) {
        let s = "";
        switch (holder[i].cs) {
            case CS_M:
                s = holder[i].s;
                var isMaj =
                    s == "M" ||
                    s.toLowerCase() == "maj" ||
                    s.toLowerCase() == "ma";
                if (isMaj == false) minor_exists = true;

                if (minor_exists && isMaj == true) {
                    // mM7 Chord is expected
                    if (holder[i + 1].cs == CS_DIG) {
                        objholder.push({ type: "M", param: holder[i + 1].s });
                        ++i; // Skip next CS_DIG
                    } else {
                        throw Error("Invalid statement");
                    }
                } else if (isMaj) {
                    objholder.push({ type: "M" });
                } else {
                    objholder.push({ type: "m" });
                }
                break;
            case CS_DIG:
                objholder.push({ type: "dig", param: holder[i].s });
                break;
            case CS_SUS:
                objholder.push({ type: "sus", param: holder[i].s.substr(3) });
                break;
            case CS_DIM:
                objholder.push({ type: "dim" });
                break;
            case CS_MNS:
                objholder.push({ type: "b", param: holder[i].s.substr(1) });
                break;
            case CS_PLS:
                objholder.push({ type: "#", param: holder[i].s.substr(1) });
                break;
            case CS_ADD:
                objholder.push({ type: "add", param: holder[i].s.substr(3) });
                break;
            case CS_ALT:
                objholder.push({ type: "alt" });
                break;
        }
    }
    //console.log(objholder);

    return [holder, objholder];
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
        var keyclass = {
            "B#":"#", "C":"b", "C#":"#", "Db":"b", "D":"#", "D#":"#", "Eb":"b", "E":"b", "Fb":"b", "E#":"#", "F":"b", 
            "F#":"#", "Gb":"b", "G":"#", "G#":"#", "Ab":"b", "A":"#", "A#":"#", "Bb":"b", "B":"#", "Cb":"b"
        };

        var letters = ["A","B","C","D","E","F","G"];

        /////

        var note = note_base;
        if (sharp_flat !== undefined) note += sharp_flat;

        var org_maj_key = key; 

        if(key in min_maj_map)
            org_maj_key = min_maj_map[key]; // minor is converted to maj key

        var target_key = null; // given from external. Temprory implementation.

        if(Number.isInteger(transpose)){

            var base_value = note_values_2[org_maj_key];
            var tgt_value = (base_value + transpose + 12)%12;

            var half_to_apply = null;
            if(half_type.toUpperCase()  == "GUESS")
                half_to_apply = keyclass[org_maj_key]; // Use the similar key class as original key
            else if(half_type.toUpperCase() == "SHARP")
                half_to_apply = "#";
            else if(half_type.toUpperCase() == "FLAT")
                half_to_apply = "b";
            else
                half_to_apply = half_type; // "#" or "b" directly is OK.

            var tgt_key_cand = note_values_1[tgt_value];
            if(tgt_key_cand[0]) target_key = tgt_key_cand[0];
            else target_key = tgt_key_cand[ half_to_apply == "b" ? 1 : 2];

        }else {
            // Key is specified directly
            target_key = transpose;
            if(target_key in min_maj_map)
                target_key = min_maj_map[target_key]; // minor is converted to maj key
            transpose = ((note_values_2[target_key] - note_values_2[org_maj_key])+12)%12;
        }

        console.log("Orignal key = "+org_maj_key + " Target key = " + target_key);

        var letter_diff = letters.indexOf(target_key[0]) - letters.indexOf(org_maj_key[0]);

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
}

export class Space{
    constructor(length=1){
        this.length = length;
        this.renderprop = {};
    }
}

export class LongRestIndicator {
    constructor(longrestlen) {
        this.longrestlen = longrestlen;
    }
}

export class Time {
    constructor(numer, denom) {
        this.numer = numer;
        this.denom = denom;
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
}

export class LoopBeginMark  extends MeasureBoundary {
    constructor() { super(); }
}

export class LoopEndMark  extends MeasureBoundary {
    constructor(param) {
		super();
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
}

export class LoopBothMark  extends MeasureBoundary {
    constructor(param) {
		super();
        this.times = param.times;
        this.ntimes = param.ntimes;
    }
}

export class MeasureBoundaryFinMark  extends MeasureBoundary {
    constructor() { super(); }
}

export class MeasureBoundaryDblSimile  extends MeasureBoundary {
    constructor() { super(); }
}
/*
	var inherits = function inherits(sub, sup) {
		var F = function F () {};
		F.prototype = sup.prototype;
		sub.prototype = new F();
		sub.prototype.constructor = sub;
	};
	
	inherits(MeasureBoundaryMark, MeasureBoundary);
	inherits(LoopBeginMark, MeasureBoundary);
	inherits(LoopEndMark, MeasureBoundary);
	inherits(LoopBothMark, MeasureBoundary);
	inherits(MeasureBoundaryFinMark, MeasureBoundary);
	inherits(MeasureBoundaryDblSimile, MeasureBoundary);
*/

// Signs
export class DaCapo {
    constructor() {}

    toString() {
        return "D.C.";
    }
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
}

export class Segno {
    constructor(number, opt) {
        this.number = number;
        this.opt = opt;
    }
}

export class Coda {
    constructor(number) {
        this.number = number;
    }

    toString() {
        return "Coda" + (this.number === null ? "" : this.number);
    }
}

export class ToCoda {
    constructor(number) {
        this.number = number;
    }
}

export class Fine {
    constructor() {}

    toString() {
        return "Fine";
    }
}

export class Comment {
    constructor(comment, chorddep) {
        this.comment = comment;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
}

export class Lyric {
    constructor(lyric, chorddep) {
        this.lyric = lyric;
        this.chorddep = chorddep; // Dependency for particular chord : true/false
    }
}


// Utilities
export class BoundingBox{
    constructor(){
        this.x = [100000, -100000];
        this.y = [100000, -100000];
    }
    add(x, y, w=0, h=0){
        this.x[0] = Math.min(x, this.x[0]);
        this.x[1] = Math.max(x+w, this.x[1]);
        this.y[0] = Math.min(y, this.y[0]);
        this.y[1] = Math.max(y+h, this.y[1]);
    }
    add_BB(bb){ // add another bounding box
        this.x[0] = Math.min(bb.x[0], this.x[0]);
        this.x[1] = Math.max(bb.x[1], this.x[1]);
        this.y[0] = Math.min(bb.y[0], this.y[0]);
        this.y[1] = Math.max(bb.y[1], this.y[1]);
    }
    add_rect(rect){
        this.x[0] = Math.min(rect.x, this.x[0]);
        this.x[1] = Math.max(rect.x+rect.w, this.x[1]);
        this.y[0] = Math.min(rect.y, this.y[0]);
        this.y[1] = Math.max(rect.y+rect.h, this.y[1]);
    }
    expand(x0, x1, y0, y1){
        this.x[0] -= x0;
        this.x[1] += x1;
        this.y[0] -= y0;
        this.y[1] += y1;
    }
    get(){
        return {x:this.x[0],y:this.y[0],w:this.x[1]-this.x[0], h:this.y[1]-this.y[0]};
    }
}
