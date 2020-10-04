/**
 * @module Fumen
 */

import "@babel/polyfill";
import * as common from "../common/common";

var TOKEN_INVALID = -1;
var TOKEN_END = 0;
var TOKEN_WORD = 1;
var TOKEN_ASIS = 2;
var TOKEN_BRACKET_LR = 3; // Left round
var TOKEN_BRACKET_RR = 4; // Right round
var TOKEN_BRACKET_LS = 5; // Left square
var TOKEN_BRACKET_RS = 6; // Right square
var TOKEN_BRACKET_LA = 7; // Left angle
var TOKEN_BRACKET_RA = 8; // Right angle
var TOKEN_BRACKET_LW = 9; // Left wave {
var TOKEN_BRACKET_RW = 10; // Right wave }
var TOKEN_MB = 20; // "|"
var TOKEN_MB_DBL = 21; // "||"
var TOKEN_MB_LOOP_BEGIN = 22; // "||:"
var TOKEN_MB_LOOP_END = 23; // ":||"
var TOKEN_MB_LOOP_BOTH = 24; // ":||:"
var TOKEN_MB_FIN = 25; // "||."
var TOKEN_MB_DBL_SIMILE = 26; // ".//."
var TOKEN_COMMA = 30;
var TOKEN_SLASH = 31; // "\/"
var TOKEN_BACK_SLASH = 32; // "\""
var TOKEN_NL = 33; // \n"
var TOKEN_PERCENT = 34;
var TOKEN_EQUAL = 35;
var TOKEN_STRING = 36; // String with double quote
var TOKEN_STRING_SQ = 37; // String with single quote
var TOKEN_STRING_GRAVE_ACCENT = 38; // String with grave accent '
var TOKEN_STRING_HYPHEN = 39; // General string enclosed within hyphen
var TOKEN_ATMARK = 40; // @
var TOKEN_COLON = 41; // :
var TOKEN_PERIOD = 42; // .

var WORD_DEFINIITON_GENERAL = /^(\w[\w¥.,\-+#:]*)/;
var WORD_DEFINITION_IN_REHARSAL_MARK = /^[^[\]]*/;
var WORD_DEFINITION_IN_LOOP_IND_GENERIC = /^[^[\]]*/;
var WORD_DEFINITION_CHORD_SYMBOL = /^[\w.,\-+#/():~]*/;

export class Parser {
    /**
     * Parser class for fumen markdown code
     */
    constructor(error_msg_callback) {
        this.context = { line: 0, char: 0 };
        this.error_msg_callback = error_msg_callback;
    }

    onParseError(msg) {
        var errormsg = "Parse error on Line " + this.context.line + " : " + msg;
        console.log(errormsg);
        console.trace();
        if (this.error_msg_callback) {
            this.error_msg_callback(errormsg);
        } else {
            console.warn(errormsg);
        }

        throw "Parser Error";
    }

    nextToken(s, dont_skip_spaces) {
        let word_def = WORD_DEFINIITON_GENERAL;

        var skipped_spaces = 0;
        let skipped_spaces_str = "";
        if (!(dont_skip_spaces === true)) {
            while (s.length > 0 && common.charIsIn(s[0], " 	")) {
                skipped_spaces_str += s[0];
                s = s.substr(1);
                ++skipped_spaces;
            }
        }

        if (s.length == 0)
            return { token: null, s: s, type: TOKEN_END, ss: skipped_spaces, sss:skipped_spaces_str };

        // At first, plain string is analyzed irrespective of word_def.
        var r = common.charStartsWithAmong(s, ["\"", "'", "`", "-"]);
        //if (s[0] == "\"" || s[0] == "'" || s[0] == "`") {
        if(r != null){
            var quote = r.s; //s[0];
            var plain_str = "";
            s = s.substr(1);
            while (s.length > 0 && s[0] != quote) {
                plain_str += s[0];
                s = s.substr(1);
            }
            var strclosed = s.length > 0 && s[0] == quote;
            if (!strclosed)
                this.onParseError("ERROR_WHILE_PARSING_PLAIN_STRING");
            s = s.substr(1);

            return {
                token: plain_str,
                s: s,
                type: [TOKEN_STRING, TOKEN_STRING_SQ, TOKEN_STRING_GRAVE_ACCENT,TOKEN_STRING_HYPHEN][r.index],
                ss: skipped_spaces,
                sss: skipped_spaces_str
            };
        }

        r = common.charStartsWithAmong(s, ["||:", "||.", "||", "|", "./|/."]);
        if (r != null) {
            return {
                token: r.s,
                s: s.substr(r.s.length),
                ss: skipped_spaces,
                sss: skipped_spaces_str,
                type: [
                    TOKEN_MB_LOOP_BEGIN,
                    TOKEN_MB_FIN,
                    TOKEN_MB_DBL,
                    TOKEN_MB,
                    TOKEN_MB_DBL_SIMILE
                ][r.index]
            };
        }

        var m = null;
        m = s.match(/^(:\|\|:?)(x(\d+|X))?/); // ":||" or ":||:". Repeat number can be specified as "x<digit|n>"
        if (m != null) {
            var loopTimes = 2;
            var isNTimes = false;
            if (m[2] != null) {
                if (m[3] == "X") isNTimes = true;
                else loopTimes = Number(m[3]);
            }
            return {
                token: m[0],
                s: s.substr(m[0].length),
                ss: skipped_spaces,
                sss: skipped_spaces_str,
                type: m[1] == ":||:" ? TOKEN_MB_LOOP_BOTH : TOKEN_MB_LOOP_END,
                param: { times: loopTimes, ntimes: isNTimes }
            };
        }

        r = common.charIsIn(s[0], "[]<>(){},\n/\\%=@:.");
        if (r != null) {
            return {
                token: s[0],
                s: s.substr(1),
                ss: skipped_spaces,
                sss: skipped_spaces_str,
                type: [
                    TOKEN_BRACKET_LS,
                    TOKEN_BRACKET_RS,
                    TOKEN_BRACKET_LA,
                    TOKEN_BRACKET_RA,
                    TOKEN_BRACKET_LR,
                    TOKEN_BRACKET_RR,
                    TOKEN_BRACKET_LW,
                    TOKEN_BRACKET_RW,
                    TOKEN_COMMA,
                    TOKEN_NL,
                    TOKEN_SLASH,
                    TOKEN_BACK_SLASH,
                    TOKEN_PERCENT,
                    TOKEN_EQUAL,
                    TOKEN_ATMARK,
                    TOKEN_COLON,
                    TOKEN_PERIOD
                ][r.index]
            };
        }

        // "Word characters"
        m = s.match(word_def);
        if (m != null) {
            //console.log(m);
            var w = m[0];
            return {
                token: w,
                s: s.substr(w.length), // updated string 
                type: TOKEN_WORD,
                ss: skipped_spaces, // number of skipped spaces
                sss: skipped_spaces_str // skipped spaces string
            };
        }

        this.onParseError("INVALID_TOKEN_DETECTED");
    }

    parseGroup(profile, s, errmsg) {
        var tokens = new Array();
        for (var i = 0; i < profile.length; ++i) {
            var ns = profile[i][1];
            var expected_token_type = profile[i][0];
            var l = new Array();
            var loop_flg = true;
            while (loop_flg) {
                var r = this.nextToken(s);
                switch (ns) {
                    case "":
                        if (r.type != expected_token_type)
                            this.onParseError(errmsg);
                        l.push(r.token);
                        s = r.s;
                        loop_flg = false;
                        break;
                    case "*":
                        if (r.type != expected_token_type) {
                            loop_flg = false;
                            break;
                        }
                        l.push(r.token);
                        s = r.s;
                        break;
                    case "+":
                        if (r.type != expected_token_type) {
                            if (l.length == 0) this.onParseError(errmsg);
                            else {
                                loop_flg = false;
                                break;
                            }
                        }
                        l.push(r.token);
                        s = r.s;
                        break;
                    case "?":
                        if (r.type != expected_token_type) break;
                        l.push(r.token);
                        s = r.s;
                        break;
                    default:
                        this.onParseError("ASSERTION ERROR");
                }
            }
            tokens.push(l);
        }

        return { tokens: tokens, s: s };
    }

    parseReharsalMark(trig_token, s) {
        // prerequisite
        //   trig_token_type = TOKEN_BRACKET_LS, consumed
        // Expects "Word characters"
        // exit state
        //   "]" is consumed.
        let m = s.match(WORD_DEFINITION_IN_REHARSAL_MARK);
        if (m != null) {
            let reharsalMarkName = m[0];
            var r = this.nextToken(s.substr(m[0].length));
            if (r.type == TOKEN_BRACKET_RS)
                return { reharsalMarkName: reharsalMarkName, s: r.s };
        }
        this.onParseError("Invalid reharsal mark");
    }

    parseLoopIndicator(trig_token_type, s) {
        // prerequisite
        //   trig_token_type = TOKEN_BRACKET_LS
        /*
        var loop_flg = true;
        var indicators = new Array();
        while (loop_flg) {
            var r = this.nextToken(s);
            if (r.type != TOKEN_WORD)
                this.onParseError("ERROR_WHILE_PARSE_LOOP_INDICATOR");
            indicators.push(r.token);
            s = r.s;
            r = this.nextToken(s);
            s = r.s;
            if (r.type == TOKEN_BRACKET_RS) break;
            else if (r.type != TOKEN_COMMA)
                this.onParseError("ERROR_WHILE_PARSE_LOOP_INDICATOR");
        }*/
        let m = s.match(WORD_DEFINITION_IN_LOOP_IND_GENERIC);
        if (m != null) {
            let loopIndStr = m[0];
            var r = this.nextToken(s.substr(m[0].length));
            if (r.type == TOKEN_BRACKET_RS)
                return { loopIndicator: new common.LoopIndicator(loopIndStr), s: r.s };
        }
        this.onParseError("Invalid loop indicator");
    }

    parseTime(trig_token_type, s) {
        // prerequisite
        //   trig_token_type = TOKEN_BRACKET_LR
        var numer = 0;
        var denom = 0;

        var r = this.nextToken(s);
        s = r.s;
        if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_TIME");
        numer = r.token;

        r = this.nextToken(s);
        s = r.s;
        if (r.type != TOKEN_SLASH) this.onParseError("ERROR_WHILE_PARSE_TIME");

        r = this.nextToken(s);
        s = r.s;
        if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_TIME");
        denom = r.token;

        r = this.nextToken(s);
        s = r.s;
        if (r.type != TOKEN_BRACKET_RR)
            this.onParseError("ERROR_WHILE_PARSE_TIME");

        return { time: new common.Time(numer, denom), s: s };
    }

    parseSign(trig_token_type, s) {
        // Read until ">" found
        var index = s.indexOf(">");
        if (index < 0) throw "Parse error on Sign(0)";

        var signStr = s.slice(0, index);
        s = s.slice(index + 1); // ">" is skipped

        // Parse sign string
        // "D.S.([0-9]+)?( al Coda([0-9]+)?)
        var r = this.nextToken(signStr, WORD_DEFINIITON_GENERAL);
        if (r.type != TOKEN_WORD) throw "Parse error on Sign(1)";
        let regDS = /D\.S\.([0-9]+)?/;
        let regCoda = /Coda([0-9]+)?/;
        let regSegno = /S(egno)?([0-9]+)?$/;
        let sign = null;
        var m = null;
        if (r.token == "Fine") {
            sign = new common.Fine();
        } else if (r.token == "D.C.") {
            let al = null;
            r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
            if (r.type != TOKEN_END) {
                if (r.type != TOKEN_WORD) throw "Invalid token after D.C.(1)";
                if (r.token != "al") throw "Invalid token after D.C.(2)";
                r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
                if (r.type != TOKEN_WORD) throw "Invalid token after al";
                if (r.token == "Fine") al = new common.Fine();
                else if ((m = r.token.match(regCoda)) !== null)
                    al = new common.Coda(m[1] === undefined ? null : m[1]);
                else throw "Invalid token after al(2)";
            }
            sign = new common.DaCapo(al);
        } else if ((m = r.token.match(regCoda)) !== null) {
            sign = new common.Coda(m[1] === undefined ? null : m[1]);
        } else if ((m = r.token.match(regSegno)) !== null) {
            var m2 = r.s.match(/^\s*(straight|((with\s+)repeat))/);
            //console.log(r.s + "/" + signStr + m2);
            sign = new common.Segno(
                m[2] === undefined ? null : m[2],
                m2 ? m2[1] : null
            );
        } else if (r.token == "to") {
            r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
            if (r.type != TOKEN_WORD) throw "Invalid token after to.";
            m = r.token.match(regCoda);
            if (m === null) throw "Coda was not detected";
            sign = new common.ToCoda(m[1] === undefined ? null : m[1]);
        } else if ((m = r.token.match(regDS)) !== null) {
            var dsNumber = m[1] === undefined ? null : m[1];
            var al = null;
            r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
            if (r.type != TOKEN_END) {
                if (r.type != TOKEN_WORD) throw "Invalid token after D.S.(1)";
                if (r.token != "al") throw "Invalid token after D.S.(2)";
                r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
                if (r.type != TOKEN_WORD) throw "Invalid token after al";
                if (r.token == "Fine") al = new common.Fine();
                else if ((m = r.token.match(regCoda)) !== null)
                    al = new common.Coda(m[1] === undefined ? null : m[1]);
                else throw "Invalid token after al(2)";
            }
            sign = new common.DalSegno(dsNumber, al);
        } else {
            throw "Invalid token in parse sign";
        }

        return { sign: sign, s: s };
    }

    parseChordSymbol(trig_token, trig_token_type, s) {
        // prerequisite:
        //   trig_token_type == TOKEN_WORD || TOKEN_SLASH
        // Parsing rule:
        //      Any continuous string of WORD_DEFINITION_GENERAL | "(" | ")"  | "/"
        //      without any spaces are read as chord symbol.
        //      Validtion of chord symbol notation is sperately conducted by
        //      Chord class.

        let chord_symbol = trig_token;
        var m = s.match(WORD_DEFINITION_CHORD_SYMBOL);
        if (m) {
            chord_symbol += m[0];
            s = s.substr(m[0].length);
        }
        var chord = new common.Chord(chord_symbol);
        return { s: s, chord: chord };
    }

    parseInMeasSimile(trig_token, trig_token_type, s) {
        // prerequisite:
        //   trig_token_type == TOKEN_PERIOD
        // Parsing rule:
        //      Any continuous string of "/" and following period "."

        var m = s.match(/(\/+)\./);
        var simile = null;
        if (m) {
            var numslash = m[1].length;
            s = s.substr(m[0].length);
            simile = new common.Simile(numslash);
        }

        return { s: s, simile: simile };
    }

    parseRest(trig_token, trig_token_type, s) {
        // Analyze Rest symbol
        var r = /^r:(([\d_]+)(\.*))$/;
        var m = trig_token.match(r);
        var rest = null;
        if (m) rest = new common.Rest(m[1]);
        return { s: s, rest: rest };
    }

    parseMeasure(trig_token_obj, s) {
        // prerequisite:
        //   trig_boundary == TOKEN_MB || TOKEN_MB_DBL || TOKEN_MB_LOOP_BEGIN || TOKEN_MB_DBL_SIMILE
        // note:
        //   | or || or ||: or :|| at the end of the measure will "not" be consumed.
        var measure = new common.Measure();

        if (trig_token_obj.type == TOKEN_MB)
            measure.appendChild(new common.MeasureBoundaryMark(1));
        else if (trig_token_obj.type == TOKEN_MB_DBL)
            measure.appendChild(new common.MeasureBoundaryMark(2));
        else if (trig_token_obj.type == TOKEN_MB_LOOP_END)
            measure.appendChild(new common.LoopEndMark(trig_token_obj.param));
        else if (trig_token_obj.type == TOKEN_MB_LOOP_BEGIN)
            measure.appendChild(new common.LoopBeginMark());
        else if (trig_token_obj.type == TOKEN_MB_LOOP_BOTH)
            measure.appendChild(
                new common.LoopBothMark(trig_token_obj.param)
            );
        else if (trig_token_obj.type == TOKEN_MB_FIN)
            measure.appendChild(new common.MeasureBoundaryFinMark());
        else if (trig_token_obj.type == TOKEN_MB_DBL_SIMILE)
            measure.appendChild(new common.MeasureBoundaryDblSimile());

        var loop_flg = true;

        var atmark_associated_elements = [];

        var associator = function(elem_list, chord){
            for(let ei=elem_list.length - 1; ei >= 0; --ei){
                let elem = elem_list[ei];
                if(elem instanceof common.Chord) break;
                else if(elem instanceof common.Comment){
                    elem.setCodeDependency(chord);
                    chord.setException(elem);
                }else if(elem instanceof common.Lyric){
                    elem.setCodeDependency(chord);
                    chord.setLyric(elem);                               
                }
            }
        };

        while (loop_flg) {
            var r = this.nextToken(s);

            var m = null;
            switch (r.type) {
                case TOKEN_COMMA:
                    measure.appendChild(new common.Space(1));
                    s = r.s;
                    break;
                case TOKEN_STRING:
                    var chord = new common.Chord(r.token);

                    if(atmark_associated_elements.length > 0){
                        associator(atmark_associated_elements, chord);
                        atmark_associated_elements = [];
                    }

                    measure.appendChild(chord);
                    s = r.s;
                    break;
                case TOKEN_STRING_SQ:
                    var comment = new common.Comment(r.token);
                    // Check if atmark specified
                    s = r.s;

                    r = this.nextToken(s);
                    if(r.type == TOKEN_ATMARK){
                        // At mark is now an independent element which associate previous elements to the next elements of atmark.
                        s = r.s;
                        atmark_associated_elements.push(comment);
                    }else{
                        measure.appendChild(comment);
                    }

                    break;
                case TOKEN_STRING_GRAVE_ACCENT:
                    var lyric = new common.Lyric(r.token);
                    s = r.s;

                    r = this.nextToken(s);
                    if(r.type == TOKEN_ATMARK){
                        // At mark is now an independent element which associate previous elements to the next elements of atmark.
                        s = r.s;
                        atmark_associated_elements.push(lyric);
                    }else{
                        measure.appendChild(lyric); 
                    }

                    break;
                case TOKEN_STRING_HYPHEN:
                    m = r.token.match("^[0-9]+$");
                    if(!m){
                        this.onParseError("ERROR_WHILE_PARSE_LONG_REST");
                    }
                    measure.appendChild(new common.LongRest(parseInt(r.token)));
                    s = r.s;
                    break;
                case TOKEN_ATMARK:
                    throw "Invalid context : atmark detected";
                case TOKEN_WORD:
                    // Analyze Rest symbol firstly, if not it is chord.
                    var rr = this.parseRest(r.token, r.type, r.s);
                    if (rr.rest !== null) {
                        measure.appendChild(rr.rest);
                        s = rr.s;
                        break;
                    }
                    // else continute to chord symbol analysis
                // To SLASH or COLON
                // eslint-disable-next-line no-fallthrough
                case TOKEN_SLASH:
                case TOKEN_COLON:
                    r = this.parseChordSymbol(r.token, r.type, r.s);

                    if(atmark_associated_elements.length > 0){
                        associator(atmark_associated_elements, r.chord);
                        atmark_associated_elements = [];
                    }

                    measure.appendChild(r.chord);
                    
                    s = r.s;
                    break;
                case TOKEN_PERIOD:
                    // Only simile symbol at this moment
                    r = this.parseInMeasSimile(r.token, r.type, r.s);
                    measure.appendChild(r.simile);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LA:
                    r = this.parseSign(r.type, r.s);
                    measure.appendChild(r.sign);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LR:
                    r = this.parseTime(r.type, r.s);
                    measure.appendChild(r.time);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LS:
                    r = this.parseLoopIndicator(r.type, r.s);
                    measure.appendChild(r.loopIndicator);
                    s = r.s;
                    break;
                
                // Boundaries.
                // Boundary is not consumed as it will be drawn as the first element of next measure.
                // Not that if spaces exists before the boundary, spaces are consumed.
                 // For the last measure, it still needst to be registed, which is done outside this function. 
                case TOKEN_MB:
                    measure.appendChild(new common.MeasureBoundaryMark(1, false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_DBL:
                    measure.appendChild(new common.MeasureBoundaryMark(2, false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_LOOP_END:
                    measure.appendChild(new common.LoopEndMark(r.param, false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_LOOP_BEGIN:
                    measure.appendChild(new common.LoopBeginMark(false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_LOOP_BOTH:
                    measure.appendChild(new common.LoopBothMark(r.param, false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_FIN:
                    measure.appendChild(new common.MeasureBoundaryFinMark(false));
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                case TOKEN_MB_DBL_SIMILE:
                    measure.appendChild(
                        new common.MeasureBoundaryDblSimile(false)
                    );
                    loop_flg = false;
                    s = s.substr(r.sss.length);
                    break;
                default:
                    this.onParseError("ERROR_WHILE_PARSE_MEASURE");
                    break;
            }
        }

        return { measure: measure, s: s };
    }

    parseMeasures(trig_token_obj, s) {
        // prerequisite :
        //   trig_token_obj == "|" or "||" or "||:" with params. consumed.
        // Contiguous measures in one row(from raw string perspective) is parsed. Parsing lasts until newline/end/or backslash is detected.
        // After calling this method, context will be out of measure context, that is,
        // last boundary and subsequent single NL will be consumed. 
        var measures = new Array();
        var loop_flg = true;
        while (loop_flg) {
            var r = this.parseMeasure(trig_token_obj, s);
            s = r.s;
            measures.push(r.measure);
            r = this.nextToken(s); // Not skipped spaces are already consumed.
            if(r.sss.length > 0){ this.onParseError("ERROR_WHILE_PARSE_MEASURES"); }
            s = r.s;
            switch (r.type) {
                case TOKEN_MB:
                case TOKEN_MB_DBL:
                case TOKEN_MB_LOOP_BEGIN:
                case TOKEN_MB_LOOP_END:
                case TOKEN_MB_LOOP_BOTH:
                case TOKEN_MB_FIN:
                case TOKEN_MB_DBL_SIMILE:
                    var tr = this.nextToken(s);
                    switch (tr.type) {
                        case TOKEN_NL:
                        case TOKEN_END:
                        case TOKEN_BACK_SLASH:{
                            loop_flg = false;
                            // Register the last boundary to the serialize object of last measure as it is not regisereted.
                            var lastm = measures[measures.length-1];
                            let lastb = lastm.childElements[lastm.childElements.length-1];
                            if(! (lastb instanceof common.MeasureBoundary)){
                                throw "Invalid state";
                            }
                            lastb.exportTarget = true;

                            break;
                        }
                        default:
                            // Measure definition is continuing
                            trig_token_obj = r;
                    }
                    break;
                default:
                    this.onParseError("ERROR_WHILE_PARSE_MEASURES");
                    break;
            }
        }

        return { measures: measures, s: s };
    }

    parseVariable(s) {
        // prerequisite :
        //   trig_token_obj == TOKEN_PERCENT
        var key = null;
        var value = null;
        var r = this.nextToken(s);
        if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_VARIABLE");
        key = r.token;
        s = r.s;
        r = this.nextToken(s);
        if (r.type != TOKEN_EQUAL) this.onParseError("ERROR_WHILE_PARSE_VARIABLE");
        s = r.s;
        // Parse as JSON decodables : String, Numbers, objects, arrays.
        var v_s = "";
        for(var j=0; j<s.length&&s[j]!="\n"; ++j) v_s += s[j];
        try{
            value = JSON.parse(v_s);
        }catch(e){
            this.onParseError("ERROR_WHILE_PARSE_VARIABLE_VALUE");
        }
        s = s.substr(v_s.length);
        return { key: key, value: value, s: s };
    }

    glanceHeader(s) {
        var targetKeys = ["TITLE", "ARTIST"];
        var headers = {};
        var c = s.split("\n");
        for (var i = 0; i < c.length; ++i) {
            if (c[i].length > 0 && c[i][0] == "%") {
                var r = this.parseVariable(c[i].substr(1));
                if (targetKeys.indexOf(r.key) >= 0) headers[r.key] = r.value;
                if (headers.length == targetKeys.length) break;
            }
        }
        return headers;
    }

    // This function can be called with screening purpose then 
    // do not change the status unless really the string is consumed.
    parseBlock(s, currentReharsalGroup, latest_variables){
        // parase until block boundary is found
        // block boundary = "[" or 2 successive NL or NOL
        try{
            var r = null;
            var loop_cnt = 0;

            var block = new common.Block();
            var current_align = "expand";

            this.context.contiguous_line_break = 0; // This should be done only if NL is really consumed.

            let num_meas_row = 0;

            let MAX_LOOP = 1000;

            let end_of_rg = false;

            // eslint-disable-next-line no-constant-condition
            while (true) {
                r = this.nextToken(s);
                if (r.type == TOKEN_END){
                    s = r.s; // explicitly consume the last spaces if any.
                    end_of_rg = true;
                    break;
                }else if (r.type == TOKEN_NL) {
                    this.context.line += 1;
                    this.context.contiguous_line_break += 1;
                    current_align = "expand"; // default is expand
                    //if(this.context.contiguous_line_break >= 2) break; Do not break here. If the first non NL element is found, then break.
                } else if(r.type == TOKEN_BACK_SLASH){
                    if(this.context.contiguous_line_break >= 2) break;
                    // Expect TOKEN_NL 
                    r = this.nextToken(r.s);
                    if(r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
                    this.context.line += 1;
                    //block.appendChild(new common.RawSpaces(r.sss));
                    //block.appendChild(new common.RawSpaces(r.token)); 
                    // Does not count as line break
                }else if(r.type == TOKEN_BRACKET_RA){
                    if(this.context.contiguous_line_break >= 2) break;
                    // Right aligh indicoator > which is outside measure
                    current_align = "right";
                }else if(r.type == TOKEN_BRACKET_LA){
                    if(this.context.contiguous_line_break >= 2) break;
                    // Right aligh indicoator > which is outside measure
                    current_align = "left";
                } else if (r.type == TOKEN_BRACKET_LS) {
                    // Next reharsal mark detected.
                    // Do not consume.
                    end_of_rg = true;
                    break;
                } else if (
                    [
                        TOKEN_MB,
                        TOKEN_MB_DBL,
                        TOKEN_MB_LOOP_BEGIN,
                        TOKEN_MB_LOOP_BOTH,
                        TOKEN_MB_FIN,
                        TOKEN_MB_DBL_SIMILE
                    ].indexOf(r.type) >= 0
                ) {
                    if(this.context.contiguous_line_break >= 2) break;

                    let is_new_line_middle_of_block = num_meas_row > 0 && this.context.contiguous_line_break == 1;

                    this.context.contiguous_line_break = 0;
                    
                    r = this.parseMeasures(r, r.s); // the last NL has not been consumed.
                    // Apply the variables valid at this point for each measures
                    r.measures.forEach(m=>{ m.variables = common.shallowcopy(latest_variables);});

                    // For the first measure, set align and new line mark.
                    r.measures[0].align = current_align;
                    r.measures[0].raw_new_line = is_new_line_middle_of_block; // mark to the first measure
                    block.concat(r.measures);

                    ++num_meas_row;

                } else if (r.type == TOKEN_PERCENT) {
                    // Expression
                    r = this.parseVariable(r.s);
                    let variable = new common.Variable(r.key, r.value);
                    //block.setVariable(r.key, r.value); Do not do this as with this, only the last variable will be valid.
                    latest_variables[r.key] = variable;
                    block.appendChild(variable);
                    this.context.contiguous_line_break -= 1; // Does not reset to 0, but cancell the new line in the same row as this variable
                } else {
                    console.log(r.token);
                    this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
                }
                s = r.s;
                loop_cnt++;
                if (loop_cnt >= MAX_LOOP){
                    throw "Too much elements or infnite loop detected with unkown reason";
                }
            }
            return { block:block, s:s, end_of_rg:end_of_rg};
        }catch(e){
            console.error(e);
            return null;
        }
    }
    
    parseReharsalGroup(s, rgtype)
    {
        // pre-requisite:  
        // - "[" (consumed) (for normal or inline)
        // - boundaries (not consumed) (for anonymous)
        // - "<" or ">" (not consumed) (for anonymous)

        try{
            var r = null;
            var latest_variables = {}; // Do not inherit from previous reharsal group
        
            let rgName = "";
            if(rgtype != "anonymous"){
                r = this.parseReharsalMark(null, s); // "[" shall be already consumed.
                rgName = r.reharsalMarkName;
                s = r.s;
            }
            let rg = new common.ReharsalGroup(
                rgName, rgtype=="inline");
            
            this.context.contiguous_line_break = 0;

            let loop_cnt = 0;
            let MAX_LOOP = 1000;

            // eslint-disable-next-line no-constant-condition
            while(true){
                r = this.parseBlock(s, rg, latest_variables);
                rg.appendChild(r.block);
                s = r.s;
                ++loop_cnt;
                if (loop_cnt >= MAX_LOOP) throw "Too much elements or infnite loop detected with unkown reason";
                if(r.end_of_rg) break;
            }
            return {rg:rg,s:s};
        }catch(e){
            console.error(e);
            return null;
        }
    }

    /**
     * Parse the fumen markdown code
     * @param {String} code Markdown code
     */
    parse(code) {
        try{
            code = code.replace(/\r\n/g, "\n");
            code = code.replace(/\r/g, "\n");
            var r = null;
            var loop_cnt = 0;

            var track = new common.Track();

            this.context = {
                line: 0,
                contiguous_line_break: 0,
            };

            // eslint-disable-next-line no-constant-condition
            while (true) {
                r = this.nextToken(code);
                if (r.type == TOKEN_END){
                    break;
                }else if (r.type == TOKEN_NL) {
                    this.context.line += 1;
                    this.context.contiguous_line_break += 1;
                } else if(r.type == TOKEN_BACK_SLASH){
                    // Expect TOKEN_NL 
                    //track.appendChild(new common.RawSpaces(r.token)); 
                    r = this.nextToken(r.s);
                    if(r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
                    this.context.line += 1;
                    //track.appendChild(new common.RawSpaces(r.sss));
                    //track.appendChild(new common.RawSpaces(r.token)); 
                    // Does not count as line break
                } else if (r.type == TOKEN_BRACKET_LS) {
                    let rgs = track.childElements.filter(e => e instanceof common.ReharsalGroup);
                    let inline = 
                        this.context.contiguous_line_break<=1 &&
                        rgs.length > 0 && // 1st RG is always non-inline
                        rgs[rgs.length - 1].childElements.filter(e=>e instanceof common.Block).length > 0; // previous reharsal group has at least one block(measure)
                
                    r = this.parseReharsalGroup(r.s, inline?"inline":"normal");
                    track.appendChild(r.rg);
                    //this.context.contiguous_line_break = 0;
                } else if (
                    [
                        TOKEN_MB,
                        TOKEN_MB_DBL,
                        TOKEN_MB_LOOP_BEGIN,
                        TOKEN_MB_LOOP_BOTH,
                        TOKEN_MB_FIN,
                        TOKEN_MB_DBL_SIMILE,
                        TOKEN_BRACKET_RA,
                        TOKEN_BRACKET_LA
                    ].indexOf(r.type) >= 0
                ) {
                    // Measure appears directly withou reharsal group mark.
                    // If not reharsal mark is defined and the measure is directly specified, 
                    // then default anonymous reharsal mark is generated.
                    // For all the variables specified before these symbols are treated as a global variable.
                    r = this.parseReharsalGroup(code.substr(r.sss.length), "anonymous");
                    track.appendChild(r.rg);
                    

                } else if (r.type == TOKEN_PERCENT) {
                    // Expression
                    r = this.parseVariable(r.s);
                    let variable = track.setVariable(r.key, r.value); // Auto generate object
                    track.appendChild(variable);
                    this.context.contiguous_line_break -= 1; // Does not reset to 0, but cancell the new line in the same row as this variable
                } else {
                    console.log(r.token);
                    this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
                }
                code = r.s;
                loop_cnt++;
                if (loop_cnt >= 1000) break;
            }

            return track;
        }catch(e){
            console.error(e);
            return null;
        }
    }
}
