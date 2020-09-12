/**
 * @module Fumen
 */

import "@babel/polyfill";
import * as common from "../common/common";

function charIsIn(c, chars) {
    for (var i = 0; i < chars.length; ++i)
        if (chars[i] == c) return { r: true, index: i };
    return null;
}

function charStartsWithAmong(s, strlist) {
    for (var i = 0; i < strlist.length; ++i)
        if (s.indexOf(strlist[i]) == 0) return { index: i, s: strlist[i] };
    return null;
}

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
            while (s.length > 0 && charIsIn(s[0], " 	")) {
                skipped_spaces_str += s[0];
                s = s.substr(1);
                ++skipped_spaces;
            }
        }

        if (s.length == 0)
            return { token: null, s: s, type: TOKEN_END, ss: skipped_spaces, sss:skipped_spaces_str };

        // At first, plain string is analyzed irrespective of word_def.
        var r = charStartsWithAmong(s, ["\"", "'", "`", "-"]);
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

        r = charStartsWithAmong(s, ["||:", "||.", "||", "|", "./|/."]);
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

        r = charIsIn(s[0], "[]<>(){},\n/\\%=@:.");
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
                s: s.substr(w.length),
                type: TOKEN_WORD,
                ss: skipped_spaces,
                sss: skipped_spaces_str
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
        //   trig_token_type = TOKEN_BRACKET_LS
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
        }

        return { loopIndicator: new common.LoopIndicator(indicators), s: s };
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
            sign = new common.DaCapo();
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
        let serialize = measure.serialize;

        if (trig_token_obj.type == TOKEN_MB)
            measure.elements.push(new common.MeasureBoundaryMark(1));
        else if (trig_token_obj.type == TOKEN_MB_DBL)
            measure.elements.push(new common.MeasureBoundaryMark(2));
        else if (trig_token_obj.type == TOKEN_MB_LOOP_END)
            measure.elements.push(new common.LoopEndMark(trig_token_obj.param));
        else if (trig_token_obj.type == TOKEN_MB_LOOP_BEGIN)
            measure.elements.push(new common.LoopBeginMark());
        else if (trig_token_obj.type == TOKEN_MB_LOOP_BOTH)
            measure.elements.push(
                new common.LoopBothMark(trig_token_obj.param)
            );
        else if (trig_token_obj.type == TOKEN_MB_FIN)
            measure.elements.push(new common.MeasureBoundaryFinMark());
        else if (trig_token_obj.type == TOKEN_MB_DBL_SIMILE)
            measure.elements.push(new common.MeasureBoundaryDblSimile());
        
        serialize.push( measure.elements[measure.elements.length-1]); // Register boundary

        var loop_flg = true;

        var atmark_associated_elements = [];

        var associator = function(elem_list, chord){
            for(let ei=elem_list.length - 1; ei >= 0; --ei){
                let elem = elem_list[ei];
                if(elem instanceof common.Chord) break;
                else if(elem instanceof common.Comment){
                    elem.setCodeDependency(true);
                    chord.setException(elem);
                }else if(elem instanceof common.Lyric){
                    elem.setCodeDependency(true);
                    chord.setLyric(elem);                               
                }
            }
        };

        while (loop_flg) {
            var r = this.nextToken(s);
            if(r.sss.length > 0) serialize.push(new common.RawSpaces(r.sss));

            var m = null;
            switch (r.type) {
                case TOKEN_COMMA:
                    measure.elements.push(new common.Space(1));
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_STRING:
                    var chord = new common.Chord(r.token);

                    if(atmark_associated_elements.length > 0){
                        associator(atmark_associated_elements, chord);
                        atmark_associated_elements = [];
                    }

                    measure.elements.push(chord);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_STRING_SQ:
                    var comment = new common.Comment(r.token);
                    measure.elements.push(comment);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_STRING_GRAVE_ACCENT:
                    var lyric = new common.Lyric(r.token);
                    measure.elements.push(lyric);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_STRING_HYPHEN:
                    m = r.token.match("^[0-9]+$");
                    if(!m){
                        this.onParseError("ERROR_WHILE_PARSE_LONG_REST");
                    }
                    measure.elements.push(new common.LongRestIndicator(parseInt(r.token)));
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_ATMARK:
                    // At mark is now an independent element which associate previous elements to the next elements of atmark.
                    //atmark_detected = true;
                    atmark_associated_elements.push(measure.elements[measure.elements.length-1]); // Remember the previous element
                    serialize.push(new common.RawSpaces(r.token));
                    s = r.s;
                    break;
                case TOKEN_WORD:
                    // Analyze Rest symbol firstly, if not it is chord.
                    var rr = this.parseRest(r.token, r.type, r.s);
                    if (rr.rest !== null) {
                        measure.elements.push(rr.rest);
                        serialize.push( measure.elements[measure.elements.length-1]);
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

                    measure.elements.push(r.chord);
                    serialize.push( measure.elements[measure.elements.length-1]);

                    s = r.s;
                    break;
                case TOKEN_PERIOD:
                    // Only simile symbol at this moment
                    r = this.parseInMeasSimile(r.token, r.type, r.s);
                    measure.elements.push(r.simile);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LA:
                    r = this.parseSign(r.type, r.s);
                    measure.elements.push(r.sign);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LR:
                    r = this.parseTime(r.type, r.s);
                    measure.elements.push(r.time);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                case TOKEN_BRACKET_LS:
                    r = this.parseLoopIndicator(r.type, r.s);
                    measure.elements.push(r.loopIndicator);
                    serialize.push( measure.elements[measure.elements.length-1]);
                    s = r.s;
                    break;
                // Boundaries.
                // Not consumed. Not registed to sealize object as it will be registred at as the begin boundary of next measure.
                // For the last measure, it still needst to be registed, which is done outside this function. 
                case TOKEN_MB:
                    measure.elements.push(new common.MeasureBoundaryMark(1));
                    loop_flg = false;
                    break;
                case TOKEN_MB_DBL:
                    measure.elements.push(new common.MeasureBoundaryMark(2));
                    loop_flg = false;
                    break;
                case TOKEN_MB_LOOP_END:
                    measure.elements.push(new common.LoopEndMark(r.param));
                    loop_flg = false;
                    break;
                case TOKEN_MB_LOOP_BEGIN:
                    measure.elements.push(new common.LoopBeginMark());
                    loop_flg = false;
                    break;
                case TOKEN_MB_LOOP_BOTH:
                    measure.elements.push(new common.LoopBothMark(r.param));
                    loop_flg = false;
                    break;
                case TOKEN_MB_FIN:
                    measure.elements.push(new common.MeasureBoundaryFinMark());
                    loop_flg = false;
                    break;
                case TOKEN_MB_DBL_SIMILE:
                    measure.elements.push(
                        new common.MeasureBoundaryDblSimile()
                    );
                    loop_flg = false;
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
        //   trig_token_obj == "|" or "||" or "||:" with params
        // Contiguous measures in one row(from raw string perspective) is parsed. Parsing lasts until newline/end/or backslash is detected.
        // After calling this method, context will be out of measure context, that is,
        // last boundary will be consumed. newline/end/backslash will not be consumed.
        var measures = new Array();
        var loop_flg = true;
        while (loop_flg) {
            var r = this.parseMeasure(trig_token_obj, s);
            s = r.s;
            measures.push(r.measure);
            r = this.nextToken(s);
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
                        case TOKEN_BACK_SLASH:
                            loop_flg = false;
                            // Register the last boundary to the serialize object of last measure as it is not regisereted.
                            var lastm = measures[measures.length-1];
                            lastm.serialize.push(lastm.elements[lastm.elements.length-1]);
                            break;
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

    parseMacro(s) {
        // prerequisite :
        //   trig_token_obj == TOKEN_PERCENT
        var key = null;
        var value = null;
        var r = this.nextToken(s);
        if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_MACRO");
        key = r.token;
        s = r.s;
        r = this.nextToken(s);
        if (r.type != TOKEN_EQUAL) this.onParseError("ERROR_WHILE_PARSE_MACRO");
        s = r.s;
        // Parse as JSON decodables : String, Numbers, objects, arrays.
        var v_s = "";
        for(var j=0; j<s.length&&s[j]!="\n"; ++j) v_s += s[j];
        try{
            value = JSON.parse(v_s);
        }catch(e){
            this.onParseError("ERROR_WHILE_PARSE_MACRO_VALUE");
        }
        s = s.substr(v_s.length);
        return { key: key, value: value, s: s };
    }

    glanceHeader(s) {
        var targetMacros = ["TITLE", "ARTIST"];
        var headers = {};
        var c = s.split("\n");
        for (var i = 0; i < c.length; ++i) {
            if (c[i].length > 0 && c[i][0] == "%") {
                var r = this.parseMacro(c[i].substr(1));
                if (targetMacros.indexOf(r.key) >= 0) headers[r.key] = r.value;
                if (headers.length == targetMacros.length) break;
            }
        }
        return headers;
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

            var currentReharsalGroup = null;
            var latest_macros = {};
            var current_align = "expand";

            this.context = {
                line: 0,
                contiguous_line_break: 0,
            };

            // eslint-disable-next-line no-constant-condition
            while (true) {
                r = this.nextToken(code);
                let serialize = currentReharsalGroup ? currentReharsalGroup.serialize : track.serialize;
                if(r.sss.length > 0) serialize.push(new common.RawSpaces(r.sss)); // remember skipped spaces
                //console.log(r);
                if (r.type == TOKEN_END){
                    break;
                }else if (r.type == TOKEN_NL) {
                    this.context.line += 1;
                    this.context.contiguous_line_break += 1;
                    current_align = "expand"; // default is expand
                    serialize.push(new common.RawSpaces(r.token)); 
                } else if(r.type == TOKEN_BACK_SLASH){
                    // Expect TOKEN_NL 
                    serialize.push(new common.RawSpaces(r.token)); 
                    r = this.nextToken(r.s);
                    if(r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
                    this.context.line += 1;
                    serialize.push(new common.RawSpaces(r.sss));
                    serialize.push(new common.RawSpaces(r.token)); 
                    // Does not count as line break
                }else if(r.type == TOKEN_BRACKET_RA){
                    // Right aligh indicoator > which is outside measure
                    current_align = "right";
                    serialize.push(new common.RawSpaces(r.token)); 
                }else if(r.type == TOKEN_BRACKET_LA){
                    // Right aligh indicoator > which is outside measure
                    current_align = "left";
                    serialize.push(new common.RawSpaces(r.token)); 
                } else if (r.type == TOKEN_BRACKET_LS) {
                    // Reset latest_macros
                    latest_macros = {};
                    //console.log("Reharsal Mark:"+r.reharsalMarkName);
                    if (currentReharsalGroup != null)
                        track.reharsal_groups.push(currentReharsalGroup);
                    
                    let inline = 
                        this.context.contiguous_line_break<=1 &&
                        track.reharsal_groups.length > 0 && // 1st RG is always non-inline
                        track.reharsal_groups[track.reharsal_groups.length - 1].blocks.length > 0; // previous reharsal group has at least one block(measure)
                
                    r = this.parseReharsalMark(r.token, r.s);
                    currentReharsalGroup = new common.ReharsalGroup(
                        r.reharsalMarkName, inline);
                    track.serialize.push(currentReharsalGroup);

                    currentReharsalGroup.serialize.push(new common.TemplateString("[${name}]", currentReharsalGroup));
                    //console.log(currentReharsalGroup);
                    this.context.contiguous_line_break = 0;
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
                    // Exepction : If not reharsal mark is defined and the measure is directly specified, 
                    // then define default anonymous reharsal mark

                    // Anonymous reharsal group
                    if(currentReharsalGroup==null){
                        currentReharsalGroup = new common.ReharsalGroup("",false);
                        track.serialize.push(currentReharsalGroup);
                        this.context.contiguous_line_break = 0;
                    } 

                    r = this.parseMeasures(r, r.s);
                    // Apply par row macros
                    r.measures[0].macros = common.deepcopy(latest_macros);

                    if (currentReharsalGroup.blocks.length == 0) {
                        currentReharsalGroup.blocks.push(new Array());
                        currentReharsalGroup.blocks[0] = currentReharsalGroup.blocks[0].concat(
                            r.measures
                        );
                    } else {
                        if (this.context.contiguous_line_break >= 2) {
                            currentReharsalGroup.blocks.push(new Array());
                        } else if (this.context.contiguous_line_break == 1){
                            // When new line in the fumen code in the middle of a block
                            r.measures[0].raw_new_line = true;
                        }
                        r.measures[0].align = current_align;

                        var blocklen = currentReharsalGroup.blocks.length;
                        currentReharsalGroup.blocks[
                            blocklen - 1
                        ] = currentReharsalGroup.blocks[blocklen - 1].concat(
                            r.measures
                        );
                    }
                    currentReharsalGroup.serialize = currentReharsalGroup.serialize.concat(r.measures);
                    this.context.contiguous_line_break = 0;

                } else if (r.type == TOKEN_PERCENT) {
                    // Expression
                    r = this.parseMacro(r.s);
                    if (currentReharsalGroup) {
                        currentReharsalGroup.macros[r.key] = r.value;
                    } else {
                        track.macros[r.key] = r.value;
                    }
                    latest_macros[r.key] = r.value;
                    serialize.push(new common.Macro(r.key, r.value));
                    this.context.contiguous_line_break -= 1; // Does not reset to 0, but cancell the new line in the same row as this macro
                } else {
                    console.log(r.token);
                    this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
                }
                code = r.s;
                loop_cnt++;
                if (loop_cnt >= 1000) break;
            }

            if (currentReharsalGroup != null) {
                track.reharsal_groups.push(currentReharsalGroup);
                currentReharsalGroup = null;
            }

            return track;
        }catch(e){
            console.error(e);
            return null;
        }
    }
}
