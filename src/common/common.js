import "@babel/polyfill";

function shallowcopy(obj)
{
	return jQuery.extend({}, obj);
}

function deepcopy(obj)
{
	//return jQuery.extend(true, {}, obj);
	return JSON.parse(JSON.stringify(obj));
}

//
// Task and Task queue class
//
// var the_task_queue = new TaskQueue();
	
export class TaskQueue
{
	constructor(){
		this.task_queue = {};
	}
	
	enqueue(task)
	{
		if(task.task_type !== null){
			// All the tasks with same task type are serialized
			// Tasks are queued
			if(! (task.task_type in this.task_queue) )
				this.task_queue[task.task_type] = [];
			this.task_queue[task.task_type].push(task);
			console.log("Enqueue task for queue '" + task.task_type + "'. Size = " + this.task_queue[task.task_type].length);
			if(this.task_queue[task.task_type].length == 1){
				setTimeout(task.run.bind(task), 0);
			}
		}else{
			setTimeout(task.run.bind(task),0); // Just run it immediately if task type is null
		}
	};
	
	finish(task)
	{
		// Finish notification from task
		if(task.task_type === null)
			return;
	
		if((!(task.task_type in this.task_queue)) ||
		   (this.task_queue[task.task_type].length == 0) ||
		   (this.task_queue[task.task_type][0] != task)){
			alert("Invalid task execution state detected");
		}else{
			var q = this.task_queue[task.task_type];
			q.shift();
			console.log("Dequeue task for queue '" + task.task_type + "'. Size = " + q.length);
			if(q.length > 0){
				// TODO : Set timer for next task run ?
				q[0].run();
			}
		}
	};
}	

export class Task
{
	constructor(context, worker, task_type, queue)
	{
		if(task_type === undefined)
			task_type = null;
	
		this.task_type = task_type;
		this.context = context;
		this.worker = worker;
	
		this.promise = null;
		this.resolve = null;
		this.reject  = null;
	
	
		var me = this;
		// TODO : Promise.defer may be better, but chrome does not support it yet.
		this.promise = new Promise(function(resolve, reject){
			me.resolve = resolve;
			me.reject = reject;
		});
	
		queue = queue === undefined ? null : queue;
		this.queue = (queue ? queue : the_task_queue);
		this.queue.enqueue(this);
	}
	
	then(func){
		return this.promise.then(func);
	};
	
	
	run (){
	
		var ret = this.worker(this.context);
	
		if( (ret instanceof Task) || (ret instanceof Promise)){
			// Asynchronous execution of worker
			var me = this;
			ret.then(function(taskret){
				// End of task
				// false, 0, true, ... all the values other than Task and undefined is land in here.
				// ret is treated as a parameter for resolve
				if(me.resolve === null){ alert("Invalid state detected"); }
				me.resolve(taskret);
				// Note that resolve will invoke then "later".
				// finish notification will invoke a next task.
				// It is required to wait a 1msec to keep order of the "then" and next task call.
				setTimeout(me.queue.finish.bind(me.queue, me), 1);
			});
		}else{
			// End of task
			// false, 0, true, ... all the values other than Task and undefined is land in here.
			// ret is treated as a parameter for resolve
			if(this.resolve === null){ alert("Invalid state detected"); }
			this.resolve(ret);
			// Note that resolve will invoke then "later".
			// finish notification will invoke a next task.
			// It is required to wait a 1msec to keep order of the "then" and next task call.
			setTimeout(this.queue.finish.bind(this.queue, this), 1);
		}
	};

	enqueueFunctionCall(func, farg, task_type)
	{
		return new Task({func:func, farg:farg, i:0, func_ret:undefined}, function(ctx){
			if(ctx.i > 0)
				return true; // Waste function's result : TODO : Handle function result to then
			ret = ctx.func.apply(null, ctx.farg);
			ctx.func_ret = ret;
			if(ret===undefined) ret = true; // Force to exit 1 time even if the function returns undefined.
			++ctx.i;
			return ret;
		}, task_type); // Make one shot task
	};
	
	_ForeachWorker(wc)
	{
		// Temporal queue to serialize following 2 tasks
		var tempqueue = new TaskQueue();
		new Task(wc, function(wc2){
			return wc2.worker(wc2.loopindex, wc2.looptarget.length, wc2.looptarget[wc2.loopindex],wc2.context);
		}, 0, tempqueue);
		var task = new Task(wc, function(wc2){
			if(wc2.loopindex == wc2.looptarget.length - 1){ return wc2.context; }
			var newwc = shallowcopy(wc2);
			newwc.loopindex++;
			return new Task(newwc, Task._ForeachWorker, null);
		}, 0, tempqueue);
		return task;
	};
	
	Foreach(looptarget, worker, context, task_type)
	{
		var wcontext = {};
		wcontext.worker = worker;
		wcontext.context = context;
		wcontext.looptarget = looptarget;
		wcontext.loopindex = 0;
		var task = new Task(wcontext, Task._ForeachWorker, task_type);
	
		return task;
	};
}

	//
	// Parser
	//
	
	var WHOLE_NOTE_LENGTH = 2*3*5*7*9*11*13*64;
	
export class Track{
	constructor()
	{
		this.reharsal_groups = new Array();
		this.macros = {};
		this.pre_render_info = {};
	}
}
	
export class ReharsalGroup{
	constructor() {
		this.name = null;
	//	this.measures = new Array();
		this.blocks = new Array(); // Blocks in the reharsal groups
		this.macros = {};
	}
}

export class Measure{
	constructor()
	{
		this.elements = new Array();
		this.boundary_info = ['n','n'];
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
	
		this.renderprop = {}; // Rendering information storage
	}
}
	
export class Rest{
	constructor(length_s)
	{
		this.nglist = [ {lengthIndicator:parseLengthIndicator(length_s), nr:null} ];
		this.renderprop = {};
	}
}

export class Simile{
	constructor(numslash)
	{
		// NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
		this.numslash = numslash;
		this.renderprop = {};
		this.nglist = null;
	}
}
	
	
	var cnrg = new RegExp();
	cnrg.compile(/^((sus(4|2)?)|(add(9|13))|(alt)|(dim)|(7|9|6|11|13)|((\+|\#)(5|9|13|11))|((\-|b)(5|9|13))|([Mm]([Aa][Jj]?|[Ii][Nn]?)?)|([\,\(\)]))/);
	var CS_IDX_OFFSET=2;
	
	var CS_SUS=0;
	var CS_SUS_DIG=1;
	var CS_ADD=2;
	var CS_ADD_DIG=3;
	var CS_ALT=4;
	var CS_DIM=5;
	var CS_DIG=6;
	var CS_PLS=7;
	var CS_PLS_SYM=8;
	var CS_PLS_DIG=9;
	var CS_MNS=10;
	var CS_MNS_SYM=11;
	var CS_MNS_DIG=12;
	var CS_M  =13;
	var CS_M_TAIL=14;
	var CS_SEP=15;
	var NUM_CS=16;
	var CS_LIST = [CS_M, CS_DIG, CS_SUS, CS_DIM, CS_SEP, CS_PLS, CS_MNS, CS_ADD, CS_ALT]; // Frequently used first
	
	function parseChordMids(s)
	{
		var holder = [];
		var objholder = [];
		while(s.length > 0){
			//if([",","(",")"].indexOf(s[0]) >= 0){ s = s.substr(1); continue; }
			m = s.match(cnrg);
			//console.log(m);
			if(m === null){
				console.log("Invalid code notation : " + s);
				return null;
			}
			for(var i = 0; i < CS_LIST.length; ++i){
				if(m[CS_IDX_OFFSET+CS_LIST[i]] !== undefined && m[CS_IDX_OFFSET+CS_LIST[i]] !== null){
	
					holder.push({cs:CS_LIST[i],s:m[0],g:m});
					break;
				}
			}
	
			s = s.substr(m[0].length);
		}
	
		var minor_exists = false;
		for(var i = 0; i < holder.length; ++i){
			switch(holder[i].cs){
			case CS_M:
				var s = holder[i].s;
				var isMaj = (s == "M" || s.toLowerCase() == "maj" || s.toLowerCase() == "ma");
				if(isMaj == false) minor_exists = true;
	
				if(minor_exists && isMaj == true){
					// mM7 Chord is expected
					if(holder[i+1].cs == CS_DIG){
						objholder.push({type:'M',param:holder[i+1].s});
						++i; // Skip next CS_DIG
					}else{
					}
				}else if(isMaj){
					objholder.push({type:'M'});
				}else{
					objholder.push({type:'m'});
				}
				break;
			case CS_DIG:
				objholder.push({type:'dig',param:holder[i].s});
				break;
			case CS_SUS: objholder.push({type:'sus', param:holder[i].s.substr(3)});	break;
			case CS_DIM: objholder.push({type:'dim'}); break;
			case CS_MNS: objholder.push({type:'b', param:holder[i].s.substr(1)});	break;
			case CS_PLS: objholder.push({type:'#', param:holder[i].s.substr(1)});	break;
			case CS_ADD: objholder.push({type:'add', param:holder[i].s.substr(3)});  break;
			case CS_ALT: objholder.push({type:'alt'}); break;
			}
		}
		//console.log(objholder);
	
		return [holder, objholder];
	};
	
	function getNoteProfile(note_str)
	{
		var IDX={'C':0,'D':2,'E':4,'F':5,'G':7,'A':9,'B':11};
		var ACC={'b':11,'#':1,'bb':12,'##':2};
		var m = note_str.match(/([A-G])(#|b)?(\d+)/);
		if(!m) return null;
		var code = parseInt(m[3])*12 + IDX[m[1]] + (m[2]=='#'?1:-1) - 36 + 0x3C; // C3 bocomes 0x3C
		var accidental = 0;
		if(m[2]) accidental = ACC[m[2]];
		return {code:code, note:{name:m[1],accidental:accidental,octave:parseInt(m[3])}};
	}
	
	// Parse strings of number + dot
	function parseLengthIndicator(length_s)
	{
		var mm = length_s.match(/(\d+)((_(3|5|6|7))|(\.+))?(\~)?/);
		if(!mm) return null;
	
		var base = parseInt(mm[1]);
		var length = 0;
		var numdot = 0;
		if(mm[3]){
			// Renpu
			var renpu = parseInt(mm[4]);
			length = WHOLE_NOTE_LENGTH / (base/2) / renpu;
		}else{
			length = WHOLE_NOTE_LENGTH / base;
			var tp = length;
			numdot = mm[5] ? mm[5].length : 0;
			for(var j = 0; j < numdot; ++j){
				tp /= 2;
				length += tp;
			}
		}
		return {length:length,base:base,renpu:renpu,numdot:numdot,has_tie:mm[6]?true:false};
	}
	
	function parseChordNotes(str)
	{
		str = str.substr(1); // first (
	
		var parseNoteGroup = function(sng){
			var sngi = 0;
			sng = sng.substr(1); // first (
			var tmp = "";
			while(sng[sngi] != ")"){
				tmp += sng[sngi];
				++sngi;
			}
			var notes_str = tmp.split(",");
			var nr = [];
			for(var nsi=0; nsi < notes_str.length; ++nsi){
				//var m = notes_str[nsi].match(/([A-G])(#|b)?(\d+)/);
				var np = getNoteProfile(notes_str[nsi]);
				if(!np)
					throw "INVALID_TOKEN_DETECTED : invalid note notation"
				nr.push(np);
			}
	
			sng = sng.substr(sngi+1); // Skip )
			var r = /\:(([\d_]+)(\.*)(\~)?)/;
			var m = sng.match(r);
	
			if(!m[0])
				throw "INVALID_TOKEN_DETECTED";
	
			var li = parseLengthIndicator(m[1]);
	
			return {s:sng.substr(m[0].length),ng:{nr:nr,lengthIndicator:li}};
		};
	
		var nglist = [];
		while(true){
			var ret = parseNoteGroup(str);
			nglist.push(ret.ng);
			var str = ret.s;
			if(str[0] == ","){
				str = str.substr(1);
			}else if(str[0] == ")"){
				break;
			}else{
				throw "INVALID_TOKEN_DETECTED";
			}
		}
		return nglist;
	}
	
export class Chord{
	constructor(chord_str)
	{
		this.chord_str = chord_str;
	
		this.is_valid_chord = true;
	
		this.renderprop = {};
	
		this.exceptinal_comment = null;
		this.lyric = null;
	
		//this.lengthIndicator = null;
	
		this.nglist = null;
	
		// Analyze Chord symbol
		var r = /^(((A|B|C|D|E|F|G)(#|b)?([^\/\:]*))?(\/(A|B|C|D|E|F|G)(#|b)?)?)(:((([\d_]+)(\.*)(\~)?)|(\(.*\))))?/;
		var m = chord_str.match(r);
		//console.log(m);
		// [0] is entire matched string
	
		this.chord_name_str = null;
	
		if( m && m[0] != ""){
			this.chord_name_str = m[1];
			this.note_base = m[3];
			this.sharp_flat = m[4];
			this.mid_str = m[5];
			this.base_note_base = m[7];
			this.base_sharp_flat = m[8];
	
			this.mid_elems = null;
			if(this.mid_str !== undefined){
				var ret = parseChordMids(this.mid_str);
				if(ret !== null){
					this.mid_elems = ret[0];
					this.mid_elem_objs = ret[1];
				}
				this.is_valid_chord = (ret !== null);
			}
			if(m[9]){
	
				if(m[11]){
					var li = parseLengthIndicator(m[11]);
					//this.length_s = m[11];
					//this.length = li.length;
					this.nglist = [{lengthIndicator:li,nr:null}];
					//this.tie = li.has_tie;
				}else if(m[15]){
					// Notes
					this.nglist = parseChordNotes(m[15]);
					//console.log(this.nglist);
				}
			}
	
			//this.tie = (m[14] == '~');
		}else{
			this.chord_name_str = this.chord_str;
			this.is_valid_chord = false;
		}
	}
	
	setException(exceptional_comment)
	{
		this.exceptinal_comment = exceptional_comment;
	}
	
	setLyric(lyric)
	{
		this.lyric = lyric;
	}
	
	
	getTranpsoedNote(transpose, half_type, note_base, sharp_flat)
	{
		var seq = [ ["A"],["A#","Bb"],["B","Cb"],["C"],["C#","Db"],["D"],["D#","Eb"],["E","Fb"],["F"],["F#","Gb"],["G"],["G#","Ab"] ];
		var note = note_base;
		if(sharp_flat !== undefined)
			note += sharp_flat;
	
		if(transpose == 0) return note;
	
		var i = 0;
		for(i = 0; i < seq.length; ++i){
			if(seq[i].indexOf(note) >= 0)
				break;
		}
	
		var k = i + transpose;
		while( k < 0 ) k += 12;
	
		var s = seq[k%12];
		if(s.length == 1){
			return s[0];
		}else{
			switch(half_type){
			case "GUESS":
				// TODO : More intelligent transposing based on key of the track.
				if(sharp_flat){
					if(sharp_flat == "#") return s[0];
					else return s[1];
				}else{
					return s[1]; // Sharp based
				}
				break;
			case "SHARP":
				return s[0];
				break;
			case "FLAT":
				return s[1];
				break;
			}
		}
		return null;
	};
	
	getChordStrBase(tranpose, half_type)
	{
		if(!this.is_valid_chord)
			return [false,this.chord_str]; // Not chord or invalid chord notation
	
		var tranposed_note = null;
		if(this.note_base !== undefined)
			tranposed_note = Chord.getTranpsoedNote(tranpose, half_type, this.note_base, this.sharp_flat);
		var transposed_base_note = null;
		if(this.base_note_base !== undefined){
			transposed_base_note = Chord.getTranpsoedNote(tranpose, half_type, this.base_note_base, this.base_sharp_flat);
		}
	
		return [tranposed_note, transposed_base_note];
	};
}

export class LoopIndicator{
	constructor(indicators)
	{
		// Note : Content of indicators are not always integers.
		// intindicators is storage for integer indicators analyzed from indicators.
		this.indicators = indicators;
		this.intindicators = [];
		var intrg = new RegExp(/(\d+)/);
		for(var i = 0; i < this.indicators.length; ++i){
			m = this.indicators[i].match(intrg);
			if(m){
				this.intindicators.push(parseInt(m[0]));
			}
		}
	}
}

export class LongRestIndicator{
	constructor(longrestlen)
	{
		this.longrestlen = longrestlen;
	}
}
	
export class Time{
	constructor(numer, denom)
	{
		this.numer = numer;
		this.denom = denom;
	}
}
	
export class MeasureBoundary{
	constructor()
	{
	}
}

export class MeasureBoundaryMark{
	constructor(nline)
	{
		this.nline = nline;
	}	
}

export class LoopBeginMark{
	constructor()
	{
	}
}
	
export class LoopEndMark{
	constructor(param)
	{
		this.times = param.times;
		this.ntimes = param.ntimes;
	}
}
	
export class LoopBothMark{
	constructor(param)
	{
		this.times = param.times;
		this.ntimes = param.ntimes;
	}
}

export class MeasureBoundaryFinMark{
	constructor()
	{
	}
}

export class MeasureBoundaryDblSimile{
	constructor()
	{
	}
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
export class DaCapo{
	constructor()
	{
	}
	
	toString(){
		return "D.C.";
	};
}
	
export class DalSegno{
	constructor(number, al)
	{
		this.number = number;
		this.al = al; // Either Coda/Fine
	}
	
	toString(){
		var dss="D.S."+(this.number===null?"":this.number);
		var als=this.al===null?"":(" al "+this.al.toString());
		return dss+als;
	};
}
	
export class Segno{
	constructor(number, opt)
	{
		this.number = number;
		this.opt = opt;
	}
}

export class Coda{
	constructor(number)
	{
		this.number = number;
	}
	
	toString(){
		return "Coda"+(this.number===null?"":this.number);
	};
}
	
export class ToCoda{
	constructor(number)
	{
		this.number = number;
	}
}
	
export class Fine{
	constructor()
	{
	}
	
	toString(){
		return "Fine";
	};
}
	
export class Comment{
	constructor(comment, chorddep)
	{
		this.comment = comment;
		this.chorddep = chorddep; // Dependency for particular chord : true/false
	}
}
	
export class Lyric{
	constructor(lyric, chorddep)
	{
		this.lyric = lyric;
		this.chorddep = chorddep; // Dependency for particular chord : true/false
	}
}