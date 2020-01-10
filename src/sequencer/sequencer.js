	
	function ctxlt(c0, c1)
	{
		if(c0.rgi < c1.rgi) return true;
		else if(c0.rgi > c1.rgi) return false;
		else if(c0.mi < c1.mi) return true;
		else return false;
	}
	
	function ctxeq(c0, c1)
	{
		return c0.rgi == c1.rgi && c0.mi == c1.mi;
	}
	
	function ctxlte(c0, c1)
	{
		return ctxlt(c0, c1) || ctxeq(c0, c1);
	}
	
	/*
	 * Sequencer class.
	 *
	 * track : Track object including rendering information by Rederer object
	 * cb_play : Callback function called when sequencer is played.
	 * cb_stop : Callback function called when sequencer is stopped.
	 * param : Sequencer configurable parameters
	 * 		auto_scroll : Auto scroll On/Off
	 */
	function Sequencer(track, cb_play, cb_stop, param)
	{
		if(param === undefined)	param = {};
		// Default sequencer prameters
		if(param.auto_scroll === undefined) param.auto_scroll = false; // Auto scroll On/Off
	
		this.param = param;
	
		this.sequence = [];
		this.hasValidStructure = false;
	
		this.cb_play = cb_play == undefined ? null : cb_play;
		this.cb_stop = cb_stop == undefined ? null : cb_stop;
	
		this.lastloopstart = {rg: null, m: null};
		this.segnos = {};
	
	
		// Analyze musical structure
		var ctx = { rgi: 0, bi: 0, mi: -1};
		var at = function(c){
			return track.reharsal_groups[c.rgi].blocks[c.bi][c.mi];
		};
		var next = function(c){
			do {
				if(c.rgi >= track.reharsal_groups.length)
					return null;
				c.mi++;
				if(c.mi >= track.reharsal_groups[c.rgi].blocks[c.bi].length){
					c.mi = 0;
					c.bi++;
					if(c.bi >= track.reharsal_groups[c.rgi].blocks.length){
						c.bi = 0;
						c.rgi++;
						if(c.rgi >= track.reharsal_groups.length)
							return null;
					}
				}
				//if(c.rgi < track.reharsal_groups.length && c.mi < track.reharsal_groups[c.rgi].measures.length)
				return track.reharsal_groups[c.rgi].blocks[c.bi][c.mi];
			} while( true );
		};
	
		var current_time_mark = new Time(4,4);
		var current_time = 0;
	
		var m = next(ctx);
		var startm = m;
		var startctx = deepcopy(ctx);
		var cur_loop = null;
		var segnos = {};
		var codas = {};
		var tocodas = {};
		var fine = null;
		var maxloop = 1000;
		var loopcnt = 0;
		while(m){
			if(loopcnt++ > maxloop){
				throw "Error : Analyzing error : Infinite loop detected.";
			}
			var nextneeded = true;
			var elems = classifyElements(m);
	
			// There is a limination that loop start and loop indicator can not exist in the same measure.
			var jumploopindicator = false;
			for( var ei = 0; ei < elems.measure_wide.length; ++ei){
				var e = elems.measure_wide[ei];
				if( e instanceof LoopIndicator ){
					if(cur_loop){
						if(e.intindicators.indexOf(cur_loop.cnt) >= 0){
							break;
						}else{
							// Skip to the measure which has target loop indicator
							while(m = next(ctx)){
								if(findElement(m,function(ec){
									return ( ec instanceof LoopIndicator ) &&
										   ( ec.intindicators.indexOf(cur_loop.cnt) >= 0 )}))
								{
									jumploopindicator = true;
									break;
								}
							}
						}
						break;
					}else{
						throw "Invalid loop indicator detected";
					}
				}
			}
	
			if(jumploopindicator)
				continue;
	
			// Check if long rest indicator exists. If exists, just duplicate sequence for that duration.
			var longrest = null;
			for( var ei = 0; ei < elems.measure_wide.length; ++ei){
				var e = elems.measure_wide[ei];
				if( e instanceof LongRestIndicator ){
					longrest = parseInt(e.longrestlen);
				}
			}
	
			for( var ei = 0; ei < elems.header.length; ++ei ){
				var e = elems.header[ei];
				if( e instanceof LoopBeginMark || e instanceof LoopBothMark){
					if(cur_loop && ctxeq(cur_loop.p, ctx)){
						// In only, same position.
						cur_loop.cnt++;
					}else{
						cur_loop = { p:deepcopy(ctx),cnt: 1};
					}
				}else if( e instanceof Segno){
					if(e.numnber in segnos){
	
					}else{
						segnos[e.number] = { p:deepcopy(ctx)};
					}
				}else if( e instanceof Coda ){
					// TODO
				}else if( e instanceof Time ){
					current_time_mark = e;
				}
			}
	
			if(longrest !== null){
				for(var i = 0; i < longrest ; ++i){
					var seqprop = {
						t: current_time,
						duration : (current_time_mark.numer / current_time_mark.denom)
					};
	
					this.sequence.push([seqprop, m]);
					current_time += seqprop.duration;
				}
			}else{
				// No long rest (corresponding to longrest = 1)
				var seqprop = {
					t: current_time,
					duration : (current_time_mark.numer / current_time_mark.denom)
				};
	
				this.sequence.push([seqprop, m]);
				current_time += seqprop.duration;
			}
	
			//console.log("Push : ");
			//console.log(m);
			//console.log(seqprop);
	
			var validfinedetected = false;
	
			for ( var ei = 0; ei < elems.footer.length; ++ei){
				var e = elems.footer[ei];
				if( e instanceof LoopEndMark || e instanceof LoopBothMark){
					if(cur_loop.cnt < e.times){
						m = at(cur_loop.p);
						ctx = deepcopy(cur_loop.p);
						nextneeded = false;
						break;
					}else{
						cur_loop = null;
					}
				}else if( e instanceof DalSegno ){
					if(e.number in segnos){
						// All the toCoda between segno position and current position
						// are marked as valid
						for(var key in tocodas){
							if( ctxlt(tocodas[key].p, ctx) && ctxlte(segnos[e.number].p, tocodas[key].p))
								tocodas[key].valid = true;
						}
						// If fine is placed between Segno and DalSegno, marked as valid
						if(fine){
							if( ctxlt(fine.p, ctx) && ctxlte(startctx, fine.p ) )
								fine.valid = true;
						}
						m = at(segnos[e.number].p);
						ctx = deepcopy(segnos[e.number].p);
						nextneeded = false;
						// Loop should be reset in general.
						// TODO : If segno is in the middle of loop, cur_loop should be set
						// to the last loopbegin mark.
						cur_loop = null;
					}else{
						throw "Segno not found";
					}
				}else if( e instanceof DaCapo ){
					// All the to Coda prior to current position is marked as valid
					for(var key in tocodas){
						if( ctxlt(tocodas[key].p, ctx) && ctxlte(startctx, tocodas[key].p ) )
							tocodas[key].valid = true;
					}
					// If fine is placed prior to current position, marked as valid.
					if(fine){
						if( ctxlt(fine.p, ctx) && ctxlte(startctx, fine.p ) )
							fine.valid = true;
					}
					m = startm;
					ctx = deepcopy(startctx);
					nextneeded = false;
					// Loop should be reset in general.
					cur_loop = null;
					break;
				}else if( e instanceof ToCoda){
					if(e.number in tocodas && tocodas[e.number].valid){
						// Skip to the measure which has coda mark
						nextneeded = false;
						while(m = next(ctx)){
							if(findElement(m,function(ec){ return ( ec instanceof Coda ) && ec.number == e.number; })){
								break;
							}
						}
						break;
					}else{
						tocodas[e.number] = {valid:false, p:deepcopy(ctx)};
					}
				}else if( e instanceof Fine){
					if(!fine){
						fine = {valid:false, p:deepcopy(ctx)};
					}else if(fine.valid){
						validfinedetected = true;
					}
				}
			}
	
			if(validfinedetected){
				break; // End of a song
			}
	
			if(nextneeded){
				m = next(ctx);
			}
		}
	}
	
	Sequencer.prototype.auto_scroll = function(onoff)
	{
		this.param.auto_scroll = onoff;
	};
	
	Sequencer.prototype.play = function(tempo)
	{
		if(this.timerid){
			return; // Already played
		}
		this.timerStart = Date.now();
		this.tempo_bpm = tempo;
	
		this.cmi = 0;
	
		var me = this;
		this.timerid = setInterval(function(){ me.onClock();}, 100);
		this.onClock();
		if(this.cb_play){
			this.cb_play();
		}
	};
	
	Sequencer.prototype.stop = function()
	{
		if(this.timerid){
			clearInterval(this.timerid);
			this.timerid = null;
			if(this.lastindicator){ this.lastindicator.remove(); this.lastindicator = null; }
			if(this.cb_stop){
				this.cb_stop();
			}
		}
	};
	
	Sequencer.prototype.onClock = function()
	{
		var now = Date.now();
		var diff = now - this.timerStart; // ms
	
		var seq = this.sequence;
	
		var measure_length = (1.0 / this.tempo_bpm ) * 60 * 1000 * 4; // ms // TODO : "4" should be changed due to initial time mark.
	
		for(; this.cmi < seq.length; ++this.cmi){
			if( diff >= seq[this.cmi][0].t * measure_length &&
				diff < (seq[this.cmi][0].t + seq[this.cmi][0].duration) * measure_length){
				break;
			}
		}
	
		if(this.cmi >= seq.length){
			this.stop();
			return;
		}
	
		var m = seq[this.cmi][1];
		var sx = m.renderprop.sx;
		var ex = m.renderprop.ex;
		var y = m.renderprop.y;
		if(this.lastindicator){ this.lastindicator.remove(); this.lastindicator = null; }
		this.lastindicator = m.renderprop.paper.rect(sx, y, ex-sx, 30).attr({fill:'red','fill-opacity':0.3,stroke:0});
		var offsetx = m.renderprop.paper.canvas.offsetLeft;
		var offsety = m.renderprop.paper.canvas.offsetTop;
		if(this.param.auto_scroll){
			window.scroll(0, offsety + y - $(window).height()/2);
		}
	};
    