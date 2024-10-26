
/*!
fumen v1.3.3

The MIT License (MIT)

Copyright (c) 2020 Hiroyuki Baba

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


** Musical font parts are provided under OFL lisence **

Copyright © 2015, Steinberg Media Technologies GmbH (http://www.steinberg.net/),
with Reserved Font Name "Bravura".

Copyright © 2020, Hiroyuki Baba (hiroyuki.baba.jp@gmail.com),
with Reserved Font Name "Fumen".

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.

*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fumen"] = factory();
	else
		root["Fumen"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");
var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}
_global["default"]._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");
__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");
__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");
__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");
__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");
__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");
__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");
__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");
__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");
__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");
__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';
var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }
          return new C(a, b, c);
        }
        return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.G, {
  global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
          case 3:
            return true;
          // some
          case 5:
            return val;
          // find
          case 6:
            return index;
          // findIndex
          case 2:
            result.push(val);
          // filter
        } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");
module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};
var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }
  return factories[len](F, args);
};
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function bound( /* args... */
  ) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};
module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;
module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';
var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = create(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }
        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed
      };

      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }
    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;
var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';
module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';
var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }
  return true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () {
    return originalExec.apply(this, arguments);
  };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();
module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () {
      execCalled = true;
      return null;
    };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () {
        return re;
      };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }
        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }
      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');
function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;
  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }
      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }
      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}
module.exports = flattenIntoArray;

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});
module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function returnThis() {
  return this;
};
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}
module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return {
        done: safe = true
      };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1
// Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
// Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};
module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs
    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }
  return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }
  return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';
module.exports = function () {
  var head, last, notify;
  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }
  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) delete _createDict[PROTOTYPE][enumBugKeys[i]];
  return _createDict();
};
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);
(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};
(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';
var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
    re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);
    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }
    return match;
  };
}
module.exports = patchedExec;

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ?
  // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');
var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};
module.exports = exporter;

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });
  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };
  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };
  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }
    return new C(length);
  };
  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };
  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };
  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };
  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }
      O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };
  var $of = function of( /* ...items */
  ) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });
  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };
  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }
      return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };
  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };
  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };
  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };
  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }
    return dP(target, key, desc);
  };
  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }
  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });
  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }
  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {/* noop */},
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }
    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {/* empty */};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * pow(2, e - mLen);
}
function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}
function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function get() {
      return this[internal];
    }
  });
}
function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}
if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };
  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };
  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }
  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}
module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var _Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof _Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};
$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'Array', {
  copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js")
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'Array', {
  fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js")
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);
$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Array', {
  isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of( /* ...args */
  ) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'Function', {
  bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
    return false;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;
function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = ('trim' in String.prototype);

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      }
      return parseInt(digits, radix);
    }
  }
  return +it;
};
if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);
$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';
var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }
  return s;
};
var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }
  return n;
};
$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }
    return m;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', {
  is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', {
  setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () {/* empty */});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() {/* empty */}
  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {/* empty */});
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target
  this._i = 0; // next index
  var keys = this._k = []; // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));
  return {
    value: key,
    done: false
  };
});
$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}
$export($export.S, 'Reflect', {
  get: get
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");
if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}
$export($export.S, 'Reflect', {
  set: set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
  // `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  },
  // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;
    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }
    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
  // `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  },
  // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;
    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }
    var results = [];
    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }
    var accumulatedResult = '';
    var nextSourcePosition = 0;
    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = [];
      // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
      var namedCaptures = result.groups;
      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }
      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }
    return accumulatedResult + S.slice(nextSourcePosition);
  }];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return str.slice(0, position);
        case "'":
          return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
  // `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  },
  // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
});

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }
  return [
  // `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  },
  // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

    // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.
    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];
    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;
      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;
        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }
        q = p = e;
      }
    }
    A.push(S.slice(p));
    return A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];
var define = function define(fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }
    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }
    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// ECMAScript 6 symbols shim
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};
var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }
  return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;
  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});
for (var es6Symbols =
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);
for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }
    return result;
  }
});
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;
var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};
var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
        // store all the rest on native weakmap
      }
      return method.call(this, a, b);
    });
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);
$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);
$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);
$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};
for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function wrap(set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? 0 : _typeof(module)) === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Artist": () => (/* binding */ Artist),
/* harmony export */   "Block": () => (/* binding */ Block),
/* harmony export */   "Chord": () => (/* binding */ Chord),
/* harmony export */   "Coda": () => (/* binding */ Coda),
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "DaCapo": () => (/* binding */ DaCapo),
/* harmony export */   "DalSegno": () => (/* binding */ DalSegno),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Fine": () => (/* binding */ Fine),
/* harmony export */   "GenericRow": () => (/* binding */ GenericRow),
/* harmony export */   "HitManager": () => (/* binding */ HitManager),
/* harmony export */   "LongRest": () => (/* binding */ LongRest),
/* harmony export */   "LoopBeginMark": () => (/* binding */ LoopBeginMark),
/* harmony export */   "LoopBothMark": () => (/* binding */ LoopBothMark),
/* harmony export */   "LoopEndMark": () => (/* binding */ LoopEndMark),
/* harmony export */   "LoopIndicator": () => (/* binding */ LoopIndicator),
/* harmony export */   "Lyric": () => (/* binding */ Lyric),
/* harmony export */   "Measure": () => (/* binding */ Measure),
/* harmony export */   "MeasureBoundary": () => (/* binding */ MeasureBoundary),
/* harmony export */   "MeasureBoundaryDblSimile": () => (/* binding */ MeasureBoundaryDblSimile),
/* harmony export */   "MeasureBoundaryFinMark": () => (/* binding */ MeasureBoundaryFinMark),
/* harmony export */   "MeasureBoundaryMark": () => (/* binding */ MeasureBoundaryMark),
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "RehearsalGroup": () => (/* binding */ RehearsalGroup),
/* harmony export */   "Rest": () => (/* binding */ Rest),
/* harmony export */   "Segno": () => (/* binding */ Segno),
/* harmony export */   "Simile": () => (/* binding */ Simile),
/* harmony export */   "Space": () => (/* binding */ Space),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "Syncopation": () => (/* binding */ Syncopation),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "ToCoda": () => (/* binding */ ToCoda),
/* harmony export */   "Track": () => (/* binding */ Track),
/* harmony export */   "Variable": () => (/* binding */ Variable),
/* harmony export */   "VirtualElement": () => (/* binding */ VirtualElement),
/* harmony export */   "WHOLE_NOTE_LENGTH": () => (/* binding */ WHOLE_NOTE_LENGTH),
/* harmony export */   "charIsIn": () => (/* binding */ charIsIn),
/* harmony export */   "charStartsWithAmong": () => (/* binding */ charStartsWithAmong),
/* harmony export */   "deepcopy": () => (/* binding */ deepcopy),
/* harmony export */   "findLastIndex": () => (/* binding */ findLastIndex),
/* harmony export */   "myLog2": () => (/* binding */ myLog2),
/* harmony export */   "shallowcopy": () => (/* binding */ shallowcopy)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @module Fumen
 */



// Default values for variables

var VARIABLE_DEFAULT = {
  "TITLE": null,
  "SUB_TITLE": null,
  "ARTIST": null,
  "SHOW_FOOTER": "YES",
  "SHOW_STAFF": "AUTO",
  "TRANSPOSE": 0,
  "KEY": "C",
  "KEY_TYPE": "AUTO"
};

// Utilities
function shallowcopy(obj) {
  return Object.assign({}, obj);
}
function deepcopy(obj) {
  //return jQuery.extend(true, {}, obj);
  return JSON.parse(JSON.stringify(obj));
}
function myLog2(integer) {
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
function charIsIn(c, chars) {
  for (var i = 0; i < chars.length; ++i) if (chars[i] == c) return {
    r: true,
    index: i
  };
  return null;
}
function charStartsWithAmong(s, strlist) {
  for (var i = 0; i < strlist.length; ++i) if (s.indexOf(strlist[i]) == 0) return {
    index: i,
    s: strlist[i]
  };
  return null;
}
function findLastIndex(array, predicate) {
  var l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) return l;
  }
  return -1;
}

//
// Parser
//

var WHOLE_NOTE_LENGTH = 2 * 3 * 5 * 7 * 9 * 11 * 13 * 64;

/**
 * Abstract base class represetns the fumen code tree
 */
var Node = /*#__PURE__*/function () {
  function Node() {
    _classCallCheck(this, Node);
    this.childNodes = [];
    this.parentNode = null;
    this.variables = {};
  }
  _createClass(Node, [{
    key: "appendChild",
    value: function appendChild(node) {
      node.parentNode = this;
      this.childNodes.push(node);
      if (this.childNodes.length >= 2) {
        this.childNodes[this.childNodes.length - 2].nextSiblingNode = node;
        node.previousSiblingNode = this.childNodes[this.childNodes.length - 2];
      }
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var code = "";
      this.childNodes.forEach(function (e) {
        code += e.exportCode();
      });
      return code;
    }
  }, {
    key: "getVariable",
    value: function getVariable(name) {
      var variable = this.getVariableObject(name);
      if (variable) return variable.value;
      return null;
    }
  }, {
    key: "getVariableObject",
    value: function getVariableObject(name) {
      if (name in this.variables) return this.variables[name];
      if (this.parentNode) return this.parentNode.getVariableObject(name);
      return null;
    }
  }, {
    key: "setVariable",
    value: function setVariable() {
      if (arguments.length == 1) {
        var variable = arguments.length <= 0 ? undefined : arguments[0]; // Variable object
        if (!(variable instanceof Variable)) throw "Invalid object passed";
        this.variables[variable.name] = variable; // reference
        return variable; // same object
      } else {
        var name = arguments.length <= 0 ? undefined : arguments[0];
        var value = arguments.length <= 1 ? undefined : arguments[1];
        if (name in this.variables) this.variables[name].value = deepcopy(value);else this.variables[name] = new Variable(name, value);
        return this.variables[name];
      }
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(node, newNode) {
      newNode.parentNode = this;
      if (node) {
        var i = this.childNodes.indexOf(node);
        this.childNodes.splice(i, 0, newNode);
        if (i >= 1) {
          // not first
          this.childNodes[i - 1].nextSiblingNode = newNode;
          newNode.previousSiblingNode = this.childNodes[i - 1];
        }
        // it is always ensured i+1 elements exists.
        this.childNodes[i + 1].previousSiblingNode = newNode;
        newNode.nextSiblingNode = this.childNodes[i + 1];
      } else {
        this.childNodes.push(newNode);
        if (this.childNodes.length >= 2) {
          this.childNodes[this.childNodes.length - 2].nextSiblingNode = newNode;
          newNode.previousSiblingNode = this.childNodes[this.childNodes.length - 2];
        }
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.parentNode) {
        var i = this.parentNode.childNodes.indexOf(this);
        this.parentNode.childNodes.splice(i, 1);
      }
      if (this.previousSiblingNode) this.previousSiblingNode.nextSiblingNode = this.nextSiblingNode;
      if (this.nextSiblingNode) this.nextSiblingNode.previousSiblingNode = this.previousSiblingNode;
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      // removal tolerable for each
      var cs = [];
      this.childNodes.forEach(function (n) {
        return cs.push(n);
      });
      cs.forEach(cb);
    }
  }, {
    key: "find",
    value: function find(cond) {
      var recurse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ret = this.childNodes.filter(cond);
      if (recurse) {
        this.childNodes.forEach(function (c) {
          ret = ret.concat(c.find(cond, recurse));
        });
      }
      return ret;
    }
  }, {
    key: "findFirstOf",
    value: function findFirstOf(cond) {
      for (var i = 0; i < this.childNodes.length; ++i) {
        if (cond(this.childNodes[i])) return this.childNodes[i];
      }
      return null;
    }
  }, {
    key: "findLastOf",
    value: function findLastOf(cond) {
      for (var i = this.childNodes.length - 1; i >= 0; --i) {
        if (cond(this.childNodes[i])) return this.childNodes[i];
      }
      return null;
    }
  }, {
    key: "indexOf",
    value: function indexOf(cond) {
      for (var i = 0; i < this.childNodes.length; ++i) {
        if (cond(this.childNodes[i])) return i;
      }
      return -1;
    }
  }, {
    key: "clone",
    value: function clone() {
      throw "Shall be overrided";
    }
  }, {
    key: "dump",
    value: function dump(depth) {
      depth = depth || 0;
      var s = "   ".repeat(depth) + this.constructor.name + "\n";
      this.childNodes.forEach(function (c) {
        s += c.dump(depth + 1);
      });
      return s;
    }
  }]);
  return Node;
}();

/**
 * Abstract class represents musical elements 
 * @extends Node
 */
var Element = /*#__PURE__*/function (_Node) {
  _inherits(Element, _Node);
  var _super = _createSuper(Element);
  // Musical
  function Element() {
    _classCallCheck(this, Element);
    return _super.call(this);
  }
  _createClass(Element, [{
    key: "clone",
    value: function clone() {
      throw "Shall be overrided";
    }
  }, {
    key: "getElementName",
    value: function getElementName() {
      throw "Shall be overrided; ";
    }
  }]);
  return Element;
}(Node);

/**
 * A class represents a track
 * @extends Element
 */
var Track = /*#__PURE__*/function (_Element) {
  _inherits(Track, _Element);
  var _super2 = _createSuper(Track);
  function Track() {
    var _this;
    _classCallCheck(this, Track);
    _this = _super2.call(this);
    for (var key in VARIABLE_DEFAULT) {
      _this.setVariable(key, VARIABLE_DEFAULT[key]);
    }
    _this.pre_render_info = {};
    return _this;
  }
  _createClass(Track, [{
    key: "getElementName",
    value: function getElementName() {
      return "Track";
    }

    // Utility functions open for external
  }, {
    key: "getKey",
    value: function getKey() {
      if (Number.isInteger(this.getVariable("TRANSPOSE"))) {
        var transposed_key = Chord.getTransposedKeyFromOffset(this.getVariable("KEY"), this.getVariable("TRANSPOSE"), this.getVariable("KEY_TYPE"));
        return {
          key: transposed_key,
          originalKey: this.getVariable("KEY")
        };
      } else {
        return {
          key: this.getVariable("TRANSPOSE"),
          originalKey: this.getVariable("KEY")
        };
      }
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var rgcnt = 0;
      var code = "";
      this.childNodes.forEach(function (e) {
        if (e instanceof RehearsalGroup) {
          if (rgcnt > 0) {
            code += "\n";
            if (!e.inline) code += "\n";
          }
          code += e.exportCode();
          ++rgcnt;
        } else if (e instanceof Variable) {
          // could be Variable
          code += e.exportCode() + "\n";
        } else {
          throw "Invali element detected";
        }
      });
      return code;
    }
  }, {
    key: "clone",
    value: function clone() {
      var n = new Track();
      this.childNodes.map(function (c) {
        n.appendChild(c.clone());
      });
      return n;
    }
  }]);
  return Track;
}(Element);

/**
 * A class represents a rehearsal group
 * @extends Element
 */
var RehearsalGroup = /*#__PURE__*/function (_Element2) {
  _inherits(RehearsalGroup, _Element2);
  var _super3 = _createSuper(RehearsalGroup);
  function RehearsalGroup(name) {
    var _this2;
    var inline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, RehearsalGroup);
    _this2 = _super3.call(this);
    _this2.name = name;
    _this2.inline = inline;
    return _this2;
  }
  _createClass(RehearsalGroup, [{
    key: "getElementName",
    value: function getElementName() {
      return "RehearsalGroup";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var code = "";
      var blockcnt = 0;
      code += "[" + this.name + "]\n";
      this.childNodes.forEach(function (e) {
        if (e instanceof Block) {
          if (blockcnt > 0) code += "\n\n";
          code += e.exportCode();
          ++blockcnt;
        } else {
          throw "Invalid element detected";
        }
      });
      return code;
    }
  }, {
    key: "clone",
    value: function clone() {
      var n = new RehearsalGroup(this.name, this.inline);
      this.childNodes.map(function (c) {
        n.appendChild(c.clone());
      });
      return n;
    }
  }]);
  return RehearsalGroup;
}(Element);

/**
 * A class represents a block
 * @extends Element
 */
var Block = /*#__PURE__*/function (_Element3) {
  _inherits(Block, _Element3);
  var _super4 = _createSuper(Block);
  function Block() {
    _classCallCheck(this, Block);
    return _super4.call(this);
  }
  _createClass(Block, [{
    key: "getElementName",
    value: function getElementName() {
      return "Block";
    }
  }, {
    key: "concat",
    value: function concat(newmeasures) {
      // in-place concat.
      // do not use concat as the object is replaced.
      for (var i = 0; i < newmeasures.length; ++i) this.appendChild(newmeasures[i]);
    }
  }, {
    key: "clone",
    value: function clone() {
      var n = new Block();
      this.childNodes.map(function (c) {
        n.appendChild(c.clone());
      });
      return n;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var code = "";
      var measure_appears = false;
      this.childNodes.forEach(function (e, i) {
        if (e instanceof Measure) {
          measure_appears = true;
          if (e.raw_new_line) code += "\n"; // This case should not be a first measure in this block
          code += e.exportCode();
        } else if (e instanceof Variable) {
          // could be Variable
          if (measure_appears) {
            code += "\n" + e.exportCode(); // last NL will be added by next measure or next turn of this code.
          } else {
            code += e.exportCode() + "\n"; // Next mreasure
          }
        }
      });

      return code;
    }
  }]);
  return Block;
}(Element);

/**
 * A class represents a measure
 * @extends Element
 */
var Measure = /*#__PURE__*/function (_Element4) {
  _inherits(Measure, _Element4);
  var _super5 = _createSuper(Measure);
  function Measure() {
    var _this3;
    _classCallCheck(this, Measure);
    _this3 = _super5.call(this);
    _this3.raw_new_line = false; // Raw "new line" mark. Maked when this is a second or later measure inside a rehearsal group after one ore more new lines in the fumen code
    _this3.align = "expand"; // expand, left, right

    _this3.renderprop = {}; // Rendering information storage
    return _this3;
  }
  _createClass(Measure, [{
    key: "getElementName",
    value: function getElementName() {
      return "Measure";
    }
  }, {
    key: "clone",
    value: function clone() {
      var n = new Measure();
      n.raw_new_line = this.raw_new_line;
      n.align = this.align;
      this.childNodes.map(function (c) {
        n.appendChild(c.clone());
      });
      return n;
    }
  }, {
    key: "pushToBody",
    value: function pushToBody(elem) {
      var i = this.childNodes.length - 1;
      for (; i >= 0; --i) {
        var e = this.childNodes[i];
        if (e instanceof MeasureBoundary) break;
      }
      this.childNodes.splice(i, 0, elem);
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var code = "";
      //if(this.raw_new_line) code += "\n"; // added at block export
      if (this.align == "left") code += "<";else if (this.align == "right") code += ">";
      this.childNodes.forEach(function (e) {
        if (e instanceof MeasureBoundary) {
          if (!e.exportTarget) return "";
        }
        code += e.exportCode() + " ";
      });
      return code;
    }
  }, {
    key: "remove",
    value: function remove() {
      // Combine elements considering the boundaries. 

      var prevMeas = this.previousSiblingNode;
      while (prevMeas && !(prevMeas instanceof Measure)) prevMeas = prevMeas.previousSiblingNode; // Find closest Measure

      var nextMeas = this.nextSiblingNode;
      while (nextMeas && !(nextMeas instanceof Measure)) nextMeas = nextMeas.nextSiblingNode; // Find closest Measure

      var firstMeasInACodeRow = this.raw_new_line || !prevMeas;
      var lastMeasInACodeRow = !nextMeas || nextMeas.raw_new_line;
      if (firstMeasInACodeRow || lastMeasInACodeRow) {
        // Edge measure of code row
        _get(_getPrototypeOf(Measure.prototype), "remove", this).call(this);
        if (prevMeas && lastMeasInACodeRow) prevMeas.findLastOf(function (e) {
          return e instanceof MeasureBoundary;
        }).exportTarget = true;
        if (nextMeas && !lastMeasInACodeRow) nextMeas.raw_new_line = this.raw_new_line; // Inherit the raw_new_line of this measure.
        if (nextMeas && nextMeas.parentNode.findFirstOf(function (e) {
          return e instanceof Measure;
        }) == nextMeas) nextMeas.raw_new_line = false; // If next meas becomes the top meas, make it false.
      } else {
        // Intermediate measure inside a single row.
        _get(_getPrototypeOf(Measure.prototype), "remove", this).call(this);
        var prevEndB = prevMeas.findLastOf(function (e) {
          return e instanceof MeasureBoundary;
        });
        var nextBeginB = nextMeas.findFirstOf(function (e) {
          return e instanceof MeasureBoundary;
        });
        var newB_p = MeasureBoundary.combine(prevEndB, nextBeginB);
        var newB_n = MeasureBoundary.combine(prevEndB, nextBeginB);
        newB_p.exportTarget = false;
        prevMeas.insertBefore(prevEndB, newB_p);
        prevEndB.remove();
        newB_n.exportTarget = true;
        nextMeas.insertBefore(nextBeginB, newB_n);
        nextBeginB.remove();
      }
    }
  }]);
  return Measure;
}(Element);

/**
 * A class represents a rest
 * @extends Element
 */
var Rest = /*#__PURE__*/function (_Element5) {
  _inherits(Rest, _Element5);
  var _super6 = _createSuper(Rest);
  function Rest(length_s) {
    var _this4;
    _classCallCheck(this, Rest);
    _this4 = _super6.call(this);
    _this4.init(length_s);
    return _this4;
  }
  _createClass(Rest, [{
    key: "getElementName",
    value: function getElementName() {
      return "Rest";
    }
  }, {
    key: "init",
    value: function init(length_s) {
      this.length_s = length_s;
      this.note_group_list = [{
        lengthIndicator: Chord.parseLengthIndicator(length_s),
        note_profiles: null
      }];
      this.renderprop = {};
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "r:".concat(this.length_s);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Rest(this.length_s);
    }
  }]);
  return Rest;
}(Element);

/**
 * A class represents a simile mark
 * @extends Element
 */
var Simile = /*#__PURE__*/function (_Element6) {
  _inherits(Simile, _Element6);
  var _super7 = _createSuper(Simile);
  function Simile(numslash) {
    var _this5;
    _classCallCheck(this, Simile);
    _this5 = _super7.call(this);
    // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
    _this5.numslash = numslash;
    _this5.renderprop = {};
    _this5.note_group_list = null;
    return _this5;
  }
  _createClass(Simile, [{
    key: "getElementName",
    value: function getElementName() {
      return "Simile";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "." + "/".repeat(this.numslash) + ".";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Simile(this.numslash);
    }
  }]);
  return Simile;
}(Element);

/**
 * A class represents a chord
 * @extends Element
 */
var Chord = /*#__PURE__*/function (_Element7) {
  _inherits(Chord, _Element7);
  var _super8 = _createSuper(Chord);
  function Chord(chord_str) {
    var _this6;
    _classCallCheck(this, Chord);
    _this6 = _super8.call(this);
    _this6.init(chord_str);
    return _this6;
  }
  _createClass(Chord, [{
    key: "getElementName",
    value: function getElementName() {
      return "Chord";
    }
  }, {
    key: "clone",
    value: function clone() {
      var n = new Chord(this.chord_str);
      if (this.exceptinal_comment) {
        n.exceptinal_comment = this.exceptinal_comment.clone();
        n.exceptinal_comment.setCodeDependency(n);
      }
      if (this.lyric) {
        n.lyric = this.lyric.clone();
        n.lyric.setCodeDependency(n);
      }
      return n;
    }
  }, {
    key: "setSyncopationAndGetShadowChord",
    value: function setSyncopationAndGetShadowChord(se) {
      this.syncopationElement = se;
      var n = new Chord(this.chord_str);
      if (this.exceptinal_comment) {
        n.exceptinal_comment = this.exceptinal_comment; // Just use reference
        //n.exceptinal_comment.setCodeDependency(n); // Chord dependency is kept for source chord.
      }

      if (this.lyric) {
        n.lyric = this.lyric; // Just use reference
        //n.lyric.setCodeDependency(n); // Chord dependency is kept for source chord.
      }

      n.syncopationElement = se;
      n.isSyncopationShadowChord = true;
      n.note_group_list.forEach(function (ng) {
        ng.lengthIndicator = se.lengthIndicator;
      });
      return n;
    }
  }, {
    key: "init",
    value: function init(chord_str) {
      this.chord_str = chord_str;
      this.is_valid_chord = true;
      this.renderprop = {};
      this.exceptinal_comment = null;
      this.lyric = null;
      this.isSyncopationShadowChord = false; // This is set to the original chord for which syncopation is applied.
      this.syncopationElement = null; // This is set to the generated shadow chord which is syncopation of other chord.

      this.note_group_list = null;

      // Analyze Chord symbol
      var r = /^(((A|B|C|D|E|F|G)(#|b)?([^/r:]*))?(\/(A|B|C|D|E|F|G)(#|b)?)?)(r)?(:((([\d_]+)(\.*)(~)?)|(\(.*\))))?/;
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
          this.is_with_rest = true;
        }
        if (m[10]) {
          if (m[12]) {
            var li = Chord.parseLengthIndicator(m[12]);
            //this.length_s = m[11];
            //this.length = li.length;
            this.note_group_list = [{
              lengthIndicator: li,
              note_profiles: null
            }];
            //this.tie = li.has_tie;
          } else if (m[16]) {
            // Notes
            var _ret = Chord.parseChordNotes(m[16]);
            if (_ret.length > 0)
              // empty note_group_list does not work
              this.note_group_list = _ret;
            //console.log(this.note_group_list);
          }
        }

        //this.tie = (m[14] == '~');
      } else {
        this.chord_name_str = this.chord_str;
        this.is_valid_chord = false;
      }
    }
  }, {
    key: "setException",
    value: function setException(exceptional_comment) {
      this.exceptinal_comment = exceptional_comment;
    }
  }, {
    key: "setLyric",
    value: function setLyric(lyric) {
      this.lyric = lyric;
    }
  }, {
    key: "getTranpsoedNote",
    value: function getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat) {
      return Chord.getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat);
    }
  }, {
    key: "getChordStrBase",
    value: function getChordStrBase(tranpose, half_type, key) {
      if (!this.is_valid_chord) return [false, this.chord_str]; // Not chord or invalid chord notation

      var tranposed_note = null;
      if (this.note_base !== undefined) tranposed_note = this.getTranpsoedNote(tranpose, half_type, key, this.note_base, this.sharp_flat);
      var transposed_base_note = null;
      if (this.base_note_base !== undefined) {
        transposed_base_note = this.getTranpsoedNote(tranpose, half_type, key, this.base_note_base, this.base_sharp_flat);
      }
      return [tranposed_note, transposed_base_note];
    }
  }, {
    key: "forEachMid",
    value: function forEachMid(callback) {
      Chord.chordMidSerialize(this.mid_elems, callback);
    }
  }, {
    key: "isSyncopatedShadow",
    value: function isSyncopatedShadow() {
      return this.isSyncopationShadowChord;
    }
  }, {
    key: "isSyncopatedSource",
    value: function isSyncopatedSource() {
      return this.syncopationElement && !this.isSyncopationShadowChord;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      if (this.isSyncopatedShadow()) return ""; // This shall be not exported.

      var code = "";
      if (this.exceptinal_comment) {
        code += this.exceptinal_comment.exportCode() + "@ ";
      }
      if (this.lyric) {
        code += this.lyric.exportCode() + "@ ";
      }
      if (this.is_valid_chord) {
        // construct from the raw data.
        // Keep the original strign as much as possible.
        if (this.note_base) code += this.note_base;
        if (this.sharp_flat) code += this.sharp_flat;
        if (this.mid_elems) code += Chord.chordMidSerialize(this.mid_elems)[1];
        if (this.base_note_base) code += "/" + this.base_note_base;
        if (this.base_sharp_flat) code += this.base_sharp_flat;
        if (this.note_group_list) {
          if (this.note_group_list[0].note_profiles) {
            // note
            code += ":(";
            for (var i = 0; i < this.note_group_list.length; ++i) {
              code += "(";
              var li = this.note_group_list[i].lengthIndicator;
              var nps = this.note_group_list[i].note_profiles;
              for (var j = 0; j < nps.length; ++j) {
                var note = nps[j].note; //
                code += note.name + Chord.accCodeToStr(note.accidental) + note.octave;
                if (j < nps.length - 1) code += ",";
              }
              code += ")";
              code += ":" + li.base + (li.renpu ? "_" + li.renpu : "") + ".".repeat(li.numdot) + (li.has_tie ? "~" : "");
              if (i < this.note_group_list.length - 1) code += ",";
            }
            code += ")";
          } else {
            // simple length indicator
            var _li = this.note_group_list[0].lengthIndicator;
            code += ":" + _li.base + (_li.renpu ? "_" + _li.renpu : "") + ".".repeat(_li.numdot) + (_li.has_tie ? "~" : "");
          }
        }
        return code;
        //return this.chord_str;
      } else {
        return code + "\"".concat(this.chord_str, "\"");
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.isSyncopatedSource()) {
        this.syncopationElement.remove();
      } else if (this.isSyncopatedShadow()) {
        this.syncopationElement.remove();
      }
      _get(_getPrototypeOf(Chord.prototype), "remove", this).call(this);
    }

    // More sophiscated method based on BNF based parsing
    /*
    CHORD ::= ROOT ( "m" | "dim"|"aug"|"+")? "M"? ("5" | "6"|"7"|"9"|"11"|"13"|"69")? ("sus" ("4"|"2")? )?  ","? TENSIONLIST* ( EOF | ":" | "/" )
    ROOT ::= ( A|B|C|D|E|F|G ) ("#"|"b") ?
    TENSIONLIST ::= TENSIONGROUP | TENSIONGROUP ","? TENSIONLIST
    TENSIONGROUP ::= TENSION | "(" TENSIONLIST ")" 
    TENSION ::= ( ("+" ("5"|"9"|"11")) | ("-" ("5"|"9"|"13")) | ("b" ("5"|"9"|"13")) | ("#" ("5"|"9"|"11")) | ("omit" ("3" | "5")) | ("add" ("2"|"9")) )
    */
  }], [{
    key: "parseChordMids",
    value: function parseChordMids(s) {
      function parse(ps) {
        var structure = [];
        var r = null;

        //let fs = [root, triad, M, digit, sus, tensionlist, chordend];
        var fs = [triad, M, digit, sus, tensiondelim, tensionlist, chordend];
        for (var fi = 0; fi < fs.length; ++fi) {
          r = fs[fi](ps);
          if (r) {
            ps = r.s;
            structure.push(r.structure);
          }
        }
        if (r) return {
          s: ps,
          structure: {
            type: "chord",
            structure: structure
          }
        };else return null;
      }
      function root(ps) {
        var c0 = "ABCDEFG";
        var c1 = "#b";
        if (ps.length >= 1 && charIsIn(ps[0], c0)) {
          if (ps.length >= 2 && charIsIn(ps[1], c1)) {
            return {
              s: ps.substr(2),
              structure: {
                type: "root",
                value: ps[0] + ps[1]
              }
            };
          } else {
            return {
              s: ps.substr(1),
              structure: {
                type: "root",
                value: ps[0]
              }
            };
          }
        }
        return null;
      }
      function triad(ps) {
        var ts = ["min", "dim", "aug", "mi", "m", "+"];
        var r = charStartsWithAmong(ps, ts);
        if (r) {
          return {
            s: ps.substr(r.s.length),
            structure: {
              type: "triad",
              value: ts[r.index]
            }
          };
        }
        return null;
      }
      function M(ps) {
        if (ps.length >= 1 && ps[0] == "M") {
          // TODO:maj
          return {
            s: ps.substr(1),
            structure: {
              type: "M",
              value: ps[0]
            }
          };
        }
        return null;
      }
      function digit(ps) {
        var ds = ["69", "13", "11", "5", "6", "7", "9"];
        var r = charStartsWithAmong(ps, ds);
        if (r) {
          return {
            s: ps.substr(r.s.length),
            structure: {
              type: "dig",
              value: ds[r.index]
            }
          };
        }
        return null;
      }
      function sus(ps) {
        var ds = ["sus2", "sus4", "sus"];
        var r = charStartsWithAmong(ps, ds);
        if (r) {
          return {
            s: ps.substr(r.s.length),
            structure: {
              type: "sus",
              value: "sus",
              param: ds[r.index].substr(3, 1)
            }
          };
        }
        return null;
      }
      function tensiondelim(ps) {
        if (ps.length == 0) return null;
        if (ps[0] == ",") return {
          s: ps.substr(1),
          structure: {
            type: "tensiondelim",
            value: ","
          }
        };
        return null;
      }
      // Brnaches in tensionlist
      function tensionlist(ps) {
        if (ps.length == 0) return null;
        var value = [];
        var r0 = tenstiongroup(ps);
        if (r0) {
          value.push(r0.structure);
          ps = r0.s;
          if (ps.length > 0 && ps[0] == ",") {
            ps = ps.substr(1);
            value.push({
              type: "delim",
              value: ","
            });
          }
          var r1 = tensionlist(ps);
          if (r1) {
            value.push(r1.structure);
            return {
              s: r1.s,
              structure: {
                type: "tensionlist",
                value: value
              }
            };
          }
          return {
            s: r0.s,
            structure: {
              type: "tensionlist",
              value: value
            }
          };
        }
        return null;
      }
      function tenstiongroup(ps) {
        if (ps.length == 0) return null;
        if (ps[0] == "(") {
          var r = tensionlist(ps.substr(1));
          if (r && r.s[0] == ")") {
            return {
              s: r.s.substr(1),
              structure: {
                type: "tensiongroup",
                value: [{
                  type: "delim",
                  value: "("
                }, r.structure, {
                  type: "delim",
                  value: ")"
                }]
              }
            };
          }
        } else {
          var _r = tension(ps);
          if (_r) return {
            s: _r.s,
            structure: {
              type: "tensiongroup",
              value: [_r.structure]
            }
          };
        }
        return null;
      }
      function tension(ps) {
        var ds = ["omit3", "omit5", "add9", "add2", "#11", "+11", "b13", "-13", "#9", "+9", "b9", "-9", "+5", "#5", "-5", "b5"];
        var th = [4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // type and digit split pos
        if (ps.length == 0) return null;
        var r = charStartsWithAmong(ps, ds);
        if (r) {
          return {
            s: ps.substr(r.s.length),
            structure: {
              type: "tension",
              value: ds[r.index].substr(0, th[r.index]),
              param: ds[r.index].substr(th[r.index])
            }
          };
        }
        return null;
      }
      function chordend(ps) {
        if (ps.length == 0) return {
          s: ps,
          structure: {
            type: "chordend",
            value: ""
          }
        };else if (ps[0] == "/") return {
          s: ps.substr(1),
          structure: {
            type: "chordend",
            value: "/"
          }
        };else if (ps[0] == ":") return {
          s: ps.substr(1),
          structure: {
            type: "chordend",
            value: ":"
          }
        };else return null; // not accepted
      }

      var holder = parse(s);
      if (holder) {
        var _Chord$chordMidSerial = Chord.chordMidSerialize(holder),
          _Chord$chordMidSerial2 = _slicedToArray(_Chord$chordMidSerial, 2),
          objholder = _Chord$chordMidSerial2[0],
          code = _Chord$chordMidSerial2[1];
        return [holder, objholder, code];
      } else {
        return null; // invalid format
      }
    }

    /**
     * Convert the data structure (chord mids) to flat list and code string.
     * @param {*} p Data structure of chord mids.
     * @param {*} callback callback called for each leaf element. (Called synchrnously)
     */
  }, {
    key: "chordMidSerialize",
    value: function chordMidSerialize(p, callback) {
      var objholder = [];
      if (!p) {
        return null; // Invalid code
      } else {
        var tensionlist = function tensionlist(value, serialize) {
          var code = "";
          for (var i = 0; i < value.length; ++i) {
            var e = value[i];
            if (e.type == "tensionlist") {
              code += tensionlist(e.value, serialize);
            } else if (e.type == "tensiongroup") {
              code += tensiongroup(e.value, serialize);
            } else if (e.type == "delim") {
              code += e.value;
            }
          }
          return code;
        };
        var tensiongroup = function tensiongroup(value, serialize) {
          // single tension or ( TENSIONLIST )
          var code = "";
          for (var i = 0; i < value.length; ++i) {
            var e = value[i];
            if (e.type == "tension") {
              serialize.push({
                value: e.value,
                param: e.param
              });
              if (callback) callback(e);
              code += e.value + e.param || "";
            } else if (e.type == "tensionlist") {
              code += tensionlist(e.value, serialize);
            } else if (e.type == "delim") {
              code += e.value;
            }
          }
          return code;
        };
        // Convert to flat data list and export string rather than structured data

        var repl = {};
        var code = "";
        for (var i = 0; i < p.structure.structure.length; ++i) {
          var r = p.structure.structure[i];
          switch (r.type) {
            case "triad":
              repl = {
                "+": "+",
                "aug": "+",
                "min": "m",
                "mi": "m",
                "m": "m",
                "dim": "dim"
              };
              objholder.push({
                type: "triad",
                value: repl[r.value]
              });
              code += r.value + (r.param || "");
              if (callback) callback(r);
              break;
            case "M":
              objholder.push({
                type: r.type
              }); // true or false
              code += r.value;
              if (callback) callback(r);
              break;
            case "dig":
              objholder.push({
                type: "dig",
                value: r.value
              });
              code += r.value;
              if (callback) callback(r);
              break;
            case "sus":
              objholder.push({
                type: "sus",
                value: r.value,
                param: r.param
              });
              code += r.value + (r.param || "");
              if (callback) callback(r);
              break;
            case "tensiondelim":
              code += r.value; // ",";
              break;
            case "tensionlist":
              {
                // normalize +, - to #, b
                var serialize = [];
                code += tensionlist(r.value, serialize);
                for (var j = 0; j < serialize.length; ++j) {
                  repl = {
                    add: "add",
                    "+": "#",
                    "-": "b",
                    "#": "#",
                    "b": "b",
                    "omit": "omit"
                  };
                  objholder.push({
                    "type": "tension",
                    value: repl[serialize[j].value],
                    param: serialize[j].param
                  });
                }
                break;
              }
            case "chordend":
              break;
            default:
              throw "Unexpected situations";
          }
        }
        return [objholder, code];
      }
    }
  }, {
    key: "accCodeToStr",
    value: function accCodeToStr(acc) {
      return {
        0: "",
        11: "b",
        1: "#",
        12: "bb",
        2: "##"
      }[acc];
    }
  }, {
    key: "getNoteProfile",
    value: function getNoteProfile(note_str) {
      var IDX = {
        C: 0,
        D: 2,
        E: 4,
        F: 5,
        G: 7,
        A: 9,
        B: 11
      };
      var ACC = {
        b: 11,
        "#": 1,
        bb: 12,
        "##": 2
      };
      var m = note_str.match(/([A-G])(#|b)?(\d+)/);
      if (!m) return null;
      var code = parseInt(m[3]) * 12 + IDX[m[1]] + (m[2] == "#" ? 1 : -1) - 36 + 0x3c; // C3 bocomes 0x3C
      var accidental = 0;
      if (m[2]) accidental = ACC[m[2]];
      return {
        code: code,
        note: {
          name: m[1],
          accidental: accidental,
          octave: parseInt(m[3])
        }
      };
    }

    // Parse strings of number + dot
  }, {
    key: "parseLengthIndicator",
    value: function parseLengthIndicator(length_s) {
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
        var base_length = 0;
        if (renpu == 2) {
          base_length = WHOLE_NOTE_LENGTH / base / 2 * 3; // shall be integer
        } else if (renpu == 3) {
          base_length = WHOLE_NOTE_LENGTH / base * 2; // shall be integer
        } else if (renpu <= 7) {
          base_length = WHOLE_NOTE_LENGTH / base * 4; // shall be integer
        } else if (renpu <= 15) {
          base_length = WHOLE_NOTE_LENGTH / base * 8; // shall be integer
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
  }, {
    key: "parseChordNotes",
    value: function parseChordNotes(str) {
      str = str.substr(1); // first (

      var parseNoteGroup = function parseNoteGroup(sng) {
        // pre-requisite : after outer "(" is loaded
        var sngi = 0;
        if (sng[0] == ")") {
          // empty note groups
          return {
            s: sng,
            // do not consume last )
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
          ng: {
            note_profiles: note_profiles,
            lengthIndicator: li
          }
        };
      };
      var note_group_list = [];
      // eslint-disable-next-line no-constant-condition
      while (true) {
        var ret = parseNoteGroup(str);
        if (ret.ng) note_group_list.push(ret.ng);
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
  }, {
    key: "getTranpsoedNote",
    value: function getTranpsoedNote(transpose, half_type, key, note_base, sharp_flat) {
      // https://music.stackexchange.com/questions/40041/algorithm-for-transposing-chords-between-keys

      var min_maj_map = {
        "B#m": "D#",
        "Cm": "Eb",
        "C#m": "E",
        "Dbm": "Fb",
        "Dm": "F",
        "D#m": "F#",
        "Ebm": "Gb",
        "Em": "G",
        //"Fbm" : "Abb",
        "E#m": "G#",
        "Fm": "Ab",
        "F#m": "A",
        //"Gbm" : "Bbb",
        "Gm": "Bb",
        "G#m": "B",
        "Abm": "Cb",
        "Am": "C",
        "A#m": "C#",
        "Bbm": "Db",
        "Bm": "D"
        //"Cbm" : "Ebb"
      };

      var note_values_1 = [["C", null, "B#"], [null, "Db", "C#"], ["D", null, null], [null, "Eb", "D#"], ["E", "Fb", null], ["F", null, "E#"], [null, "Gb", "F#"], ["G", null, null], [null, "Ab", "G#"], ["A", null, null], [null, "Bb", "A#"], ["B", "Cb", null]];
      var note_values_2 = {
        "B#": 0,
        "C": 0,
        "C#": 1,
        "Db": 1,
        "D": 2,
        "D#": 3,
        "Eb": 3,
        "E": 4,
        "Fb": 4,
        "E#": 5,
        "F": 5,
        "F#": 6,
        "Gb": 6,
        "G": 7,
        "G#": 8,
        "Ab": 8,
        "A": 9,
        "A#": 10,
        "Bb": 10,
        "B": 11,
        "Cb": 11
      };
      var keyclass_maj = {
        "B#": "#",
        "C": "b",
        "C#": "#",
        "Db": "b",
        "D": "#",
        "D#": "#",
        "Eb": "b",
        "E": "b",
        "Fb": "b",
        "E#": "#",
        "F": "b",
        "F#": "#",
        "Gb": "b",
        "G": "#",
        "G#": "#",
        "Ab": "b",
        "A": "#",
        "A#": "#",
        "Bb": "b",
        "B": "#",
        "Cb": "b"
      };
      var letters = ["A", "B", "C", "D", "E", "F", "G"];

      /////

      var note = note_base;
      if (sharp_flat) note += sharp_flat;
      var org_maj_key = key;
      if (key in min_maj_map) org_maj_key = min_maj_map[key]; // minor is converted to maj key

      var target_maj_key = null; // given from external. Temprory implementation.

      if (Number.isInteger(transpose)) {
        var base_value = note_values_2[org_maj_key];
        var tgt_value = (base_value + transpose + 12) % 12;
        var half_to_apply = null;
        if (half_type.toUpperCase() == "AUTO") half_to_apply = keyclass_maj[org_maj_key]; // Use the similar key class as original key
        else if (half_type.toUpperCase() == "SHARP") half_to_apply = "#";else if (half_type.toUpperCase() == "FLAT") half_to_apply = "b";else half_to_apply = half_type; // "#" or "b" directly is OK.

        var tgt_key_cand = note_values_1[tgt_value];
        if (tgt_key_cand[0]) target_maj_key = tgt_key_cand[0];else target_maj_key = tgt_key_cand[half_to_apply == "b" ? 1 : 2];
      } else {
        // Key is specified directly
        target_maj_key = transpose;
        if (target_maj_key in min_maj_map) target_maj_key = min_maj_map[target_maj_key]; // minor is converted to maj key
        transpose = (note_values_2[target_maj_key] - note_values_2[org_maj_key] + 12) % 12;
      }

      //console.log("Orignal key = "+org_maj_key + " Target key = " + target_key);

      var letter_diff = letters.indexOf(target_maj_key[0]) - letters.indexOf(org_maj_key[0]);
      var letter_index = letters.indexOf(note_base);
      var new_letter_index = (letter_index + letter_diff + 7) % 7;
      var newletter = letters[new_letter_index];
      var nvalue = note_values_2[note];
      var new_nvalue = (nvalue + transpose + 12) % 12;
      var acc = "";
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // Take circular diff
        var offset = 6 - note_values_2[newletter];
        var fs = (new_nvalue + offset + 12) % 12 - 6; // >0 means #, <0 means flat, 0 means no accidental

        if (fs == 0) {
          acc = "";
          break;
        } else if (fs == 1) {
          acc = "#";
          break;
        } else if (fs == -1) {
          acc = "b";
          break;
        } else if (fs >= 2) {
          // ## can happen.
          // 2 can happen e.g. E# in key=C = III#. Key=D goes to F##. Convert it to G.
          // 3 can happen e.g. G# in key=Gb = I##. Key=C# goes to C###. Convert it to D#.
          // Next letter
          new_letter_index = (new_letter_index + 1) % 7;
          newletter = letters[new_letter_index];
        } else if (fs <= -2) {
          // Previous letter
          // -2 can happen e.g. Fb in key=C = IVb. Key=Eb goes to Abb. Convert it to G.
          // -3 can happen e.g. Gb in key=B = VIbb = G#bb. Key=Db goes to Bbbb. Convert it to Ab.
          new_letter_index = (new_letter_index - 1 + 7) % 7;
          newletter = letters[new_letter_index];
        } else {
          throw "Unexpected situation on transpose";
        }
      }
      return newletter + acc;
    }
  }, {
    key: "getTransposedKeyFromOffset",
    value: function getTransposedKeyFromOffset(key, transpose, half_type) {
      var is_minor = key[key.length - 1] == "m";
      var note = is_minor ? key.substr(0, key.length - 1) : key;
      var note_base = note[0];
      var acc = note.length == 2 ? key[1] : null;
      var transposed_key = Chord.getTranpsoedNote(transpose, half_type, key, note_base, acc);
      if (is_minor) transposed_key += "m";
      return transposed_key;
    }
  }]);
  return Chord;
}(Element);

/**
 * A class represents a syncopation
 * @extends Element
 */
var Syncopation = /*#__PURE__*/function (_Element8) {
  _inherits(Syncopation, _Element8);
  var _super9 = _createSuper(Syncopation);
  function Syncopation(ins) {
    var _this7;
    _classCallCheck(this, Syncopation);
    _this7 = _super9.call(this);
    _this7.init(ins);
    return _this7;
  }
  _createClass(Syncopation, [{
    key: "getElementName",
    value: function getElementName() {
      return "LoopIndicator";
    }
  }, {
    key: "init",
    value: function init(ins) {
      // Note : Content of indicators are not always integers.
      // intindicators is storage for integer indicators analyzed from indicators.
      this.indstr = ins;
      this.lengthIndicator = Chord.parseLengthIndicator(ins);
      this.lengthIndicator.has_tie = true; // Force tie
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<:".concat(this.indstr);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Syncopation(this.indstr);
    }
  }]);
  return Syncopation;
}(Element);

/**
 * A class represents a loop indicator
 * @extends Element
 */
var LoopIndicator = /*#__PURE__*/function (_Element9) {
  _inherits(LoopIndicator, _Element9);
  var _super10 = _createSuper(LoopIndicator);
  function LoopIndicator(loopIndStr) {
    var _this8;
    _classCallCheck(this, LoopIndicator);
    _this8 = _super10.call(this);
    _this8.init(loopIndStr);
    return _this8;
  }
  _createClass(LoopIndicator, [{
    key: "getElementName",
    value: function getElementName() {
      return "LoopIndicator";
    }
  }, {
    key: "init",
    value: function init(loopIndStr) {
      // Note : Content of indicators are not always integers.
      // intindicators is storage for integer indicators analyzed from indicators.
      this.indstr = loopIndStr;
      this.intindicators = [];
      var intrg = new RegExp(/(\d+)/);
      var indicators = this.indstr.split(",");
      for (var i = 0; i < indicators.length; ++i) {
        var m = indicators[i].match(intrg);
        if (m) {
          this.intindicators.push(parseInt(m[0]));
        }
      }
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "[".concat(this.indstr, "]");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LoopIndicator(this.indstr);
    }
  }]);
  return LoopIndicator;
}(Element);

/**
 * A class represents a space
 * @extends Element
 */
var Space = /*#__PURE__*/function (_Element10) {
  _inherits(Space, _Element10);
  var _super11 = _createSuper(Space);
  function Space() {
    var _this9;
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    _classCallCheck(this, Space);
    _this9 = _super11.call(this);
    _this9.length = length;
    _this9.renderprop = {};
    return _this9;
  }
  _createClass(Space, [{
    key: "getElementName",
    value: function getElementName() {
      return "Space";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return ",".repeat(this.length);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Space(this.length);
    }
  }]);
  return Space;
}(Element);

/**
 * A class represents a long rest
 * @extends Element
 */
var LongRest = /*#__PURE__*/function (_Element11) {
  _inherits(LongRest, _Element11);
  var _super12 = _createSuper(LongRest);
  function LongRest(longrestlen) {
    var _this10;
    _classCallCheck(this, LongRest);
    _this10 = _super12.call(this);
    _this10.longrestlen = longrestlen;
    return _this10;
  }
  _createClass(LongRest, [{
    key: "getElementName",
    value: function getElementName() {
      return "LongRest";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "-".concat(this.longrestlen, "-");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LongRest(this.longrestlen);
    }
  }]);
  return LongRest;
}(Element);

/**
 * A class represents a time signature
 * @extends Element
 */
var Time = /*#__PURE__*/function (_Element12) {
  _inherits(Time, _Element12);
  var _super13 = _createSuper(Time);
  function Time(numer, denom) {
    var _this11;
    _classCallCheck(this, Time);
    _this11 = _super13.call(this);
    _this11.numer = numer;
    _this11.denom = denom;
    return _this11;
  }
  _createClass(Time, [{
    key: "getElementName",
    value: function getElementName() {
      return "Time";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "(".concat(this.numer, "/").concat(this.denom, ")");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Time(this.numer, this.denom);
    }
  }]);
  return Time;
}(Element);

/**
 * Abstract class represents a measure boundary
 * @extends Element
 */
var MeasureBoundary = /*#__PURE__*/function (_Element13) {
  _inherits(MeasureBoundary, _Element13);
  var _super14 = _createSuper(MeasureBoundary);
  function MeasureBoundary() {
    var _this12;
    var exportTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, MeasureBoundary);
    _this12 = _super14.call(this);
    _this12.exportTarget = exportTarget;
    return _this12;
  }
  _createClass(MeasureBoundary, [{
    key: "getElementName",
    value: function getElementName() {
      return "MeasureBoundary";
    }
    // Factory function to make a new boundary from 2 boundaries
  }], [{
    key: "combine",
    value: function combine(b0, b1) {
      // s,d,b,e,B,f,r,n
      // 8C2 = 56
      // define priority order, then define some exceptions
      var priority = {
        n: 0,
        s: 1,
        d: 2,
        f: 3,
        r: 4,
        b: 5,
        e: 6,
        B: 7
      };
      var combineRule = {
        eb: function eb() {
          return new LoopBothMark({
            ntimes: b0.ntimes,
            times: b0.times
          });
        }
      };
      var factory = {
        s: function s() {
          return new MeasureBoundaryMark(1);
        },
        d: function d() {
          return new MeasureBoundaryMark(2);
        },
        b: function b() {
          return new LoopBeginMark();
        },
        e: function e() {
          return new LoopEndMark({
            ntimes: b0.ntimes,
            times: b0.times
          });
        },
        B: function B() {
          return new LoopBothMark({
            ntimes: b0.ntimes,
            times: b0.times
          });
        },
        f: function f() {
          return new MeasureBoundaryFinMark();
        },
        r: function r() {
          return new MeasureBoundaryDblSimile();
        },
        n: function n() {
          return null;
        }
      };
      var key = b0.typestr + b1.typestr;
      var newB = null;
      if (key in combineRule) {
        newB = combineRule[key]();
      } else {
        if (priority[b0.typestr] < priority[b1.typestr]) {
          newB = factory[b1.typestr]();
        } else {
          newB = factory[b0.typestr]();
        }
      }
      return newB;
    }
  }]);
  return MeasureBoundary;
}(Element);

/**
 * Class represents a measure boundary with signle or double line
 * @extends MeasureBoundary
 */
var MeasureBoundaryMark = /*#__PURE__*/function (_MeasureBoundary) {
  _inherits(MeasureBoundaryMark, _MeasureBoundary);
  var _super15 = _createSuper(MeasureBoundaryMark);
  function MeasureBoundaryMark(nline, exportTarget) {
    var _this13;
    _classCallCheck(this, MeasureBoundaryMark);
    _this13 = _super15.call(this, exportTarget);
    _this13.nline = nline;
    _this13.typestr = _this13.nline == 1 ? "s" : "d";
    return _this13;
  }
  _createClass(MeasureBoundaryMark, [{
    key: "getElementName",
    value: function getElementName() {
      return "MeasureBoundaryMark";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return this.exportTarget ? "|".repeat(this.nline) : "";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MeasureBoundaryMark(this.nline, this.exportTarget);
    }
  }]);
  return MeasureBoundaryMark;
}(MeasureBoundary);

/**
 * Class represents a measure boundary at the beginning of loop
 * @extends MeasureBoundary
 */
var LoopBeginMark = /*#__PURE__*/function (_MeasureBoundary2) {
  _inherits(LoopBeginMark, _MeasureBoundary2);
  var _super16 = _createSuper(LoopBeginMark);
  function LoopBeginMark() {
    var _this14;
    var exportTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, LoopBeginMark);
    _this14 = _super16.call(this, exportTarget);
    _this14.typestr = "b";
    return _this14;
  }
  _createClass(LoopBeginMark, [{
    key: "getElementName",
    value: function getElementName() {
      return "LoopBeginMark";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return this.exportTarget ? "||:" : "";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LoopBeginMark(this.exportTarget);
    }
  }]);
  return LoopBeginMark;
}(MeasureBoundary);

/**
 * Class represents a measure boundary at the end of loop
 * @extends MeasureBoundary
 */
var LoopEndMark = /*#__PURE__*/function (_MeasureBoundary3) {
  _inherits(LoopEndMark, _MeasureBoundary3);
  var _super17 = _createSuper(LoopEndMark);
  function LoopEndMark(param) {
    var _this15;
    var exportTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, LoopEndMark);
    _this15 = _super17.call(this, exportTarget);
    _this15.times = param.times;
    _this15.ntimes = param.ntimes;
    _this15.typestr = "e";
    return _this15;
  }
  _createClass(LoopEndMark, [{
    key: "getElementName",
    value: function getElementName() {
      return "LoopEndMark";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var ts = this.ntimes ? "xX" : this.times ? "x".concat(this.times) : "";
      return this.exportTarget ? ":||" + (ts == "x2" ? "" : ts) : ""; // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LoopEndMark({
        times: this.times,
        ntimes: this.ntimes
      }, this.exportTarget);
    }
  }]);
  return LoopEndMark;
}(MeasureBoundary);

/**
 * Class represents a measure boundary at the end and beginning of loop
 * @extends MeasureBoundary
 */
var LoopBothMark = /*#__PURE__*/function (_MeasureBoundary4) {
  _inherits(LoopBothMark, _MeasureBoundary4);
  var _super18 = _createSuper(LoopBothMark);
  function LoopBothMark(param) {
    var _this16;
    var exportTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, LoopBothMark);
    _this16 = _super18.call(this, exportTarget);
    _this16.times = param.times;
    _this16.ntimes = param.ntimes;
    _this16.typestr = "B";
    return _this16;
  }
  _createClass(LoopBothMark, [{
    key: "getElementName",
    value: function getElementName() {
      return "LoopBothMark";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var ts = this.ntimes ? "xX" : this.times ? "x".concat(this.times) : "";
      return this.exportTarget ? ":||:" + (ts == "x2" ? "" : ts) : ""; // x2 is not explicity stated : TODO : align with what wrote in the code.
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LoopBothMark({
        times: this.times,
        ntimes: this.ntimes
      }, this.exportTarget);
    }
  }]);
  return LoopBothMark;
}(MeasureBoundary);

/**
 * Class represents a measure boundary at the end of a piece
 * @extends MeasureBoundary
 */
var MeasureBoundaryFinMark = /*#__PURE__*/function (_MeasureBoundary5) {
  _inherits(MeasureBoundaryFinMark, _MeasureBoundary5);
  var _super19 = _createSuper(MeasureBoundaryFinMark);
  function MeasureBoundaryFinMark() {
    var _this17;
    var exportTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, MeasureBoundaryFinMark);
    _this17 = _super19.call(this, exportTarget);
    _this17.typestr = "f";
    return _this17;
  }
  _createClass(MeasureBoundaryFinMark, [{
    key: "getElementName",
    value: function getElementName() {
      return "MeasureBoundaryFinMark";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return this.exportTarget ? "||." : "";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MeasureBoundaryFinMark(this.exportTarget);
    }
  }]);
  return MeasureBoundaryFinMark;
}(MeasureBoundary);

/**
 * Class represents a measure boundary with double simile mark over it
 * @extends MeasureBoundary
 */
var MeasureBoundaryDblSimile = /*#__PURE__*/function (_MeasureBoundary6) {
  _inherits(MeasureBoundaryDblSimile, _MeasureBoundary6);
  var _super20 = _createSuper(MeasureBoundaryDblSimile);
  function MeasureBoundaryDblSimile() {
    var _this18;
    var exportTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, MeasureBoundaryDblSimile);
    _this18 = _super20.call(this, exportTarget);
    _this18.typestr = "r";
    return _this18;
  }
  _createClass(MeasureBoundaryDblSimile, [{
    key: "getElementName",
    value: function getElementName() {
      return "MeasureBoundaryDblSimile";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return this.exportTarget ? "./|/." : "";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MeasureBoundaryDblSimile(this.exportTarget);
    }
  }]);
  return MeasureBoundaryDblSimile;
}(MeasureBoundary);

// Signs
/**
 * Class represents a DaCapo mark
 * @extends Element
 */
var DaCapo = /*#__PURE__*/function (_Element14) {
  _inherits(DaCapo, _Element14);
  var _super21 = _createSuper(DaCapo);
  function DaCapo(al) {
    var _this19;
    _classCallCheck(this, DaCapo);
    _this19 = _super21.call(this);
    _this19.init(al);
    return _this19;
  }
  _createClass(DaCapo, [{
    key: "getElementName",
    value: function getElementName() {
      return "DaCapo";
    }
  }, {
    key: "init",
    value: function init(al) {
      this.al = al; // Either Coda/Fine
    }
  }, {
    key: "toString",
    value: function toString() {
      var dss = "D.C.";
      var als = this.al ? " al " + this.al.toString() : "";
      return dss + als;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<" + this.toString() + ">";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new DaCapo(this.al ? this.al.clone() : null);
    }
  }]);
  return DaCapo;
}(Element);

/**
 * Class represents a DalSegno mark
 * @extends Element
 */
var DalSegno = /*#__PURE__*/function (_Element15) {
  _inherits(DalSegno, _Element15);
  var _super22 = _createSuper(DalSegno);
  function DalSegno(number, al) {
    var _this20;
    _classCallCheck(this, DalSegno);
    _this20 = _super22.call(this);
    _this20.init(number, al);
    return _this20;
  }
  _createClass(DalSegno, [{
    key: "getElementName",
    value: function getElementName() {
      return "DalSegno";
    }
  }, {
    key: "init",
    value: function init(number, al) {
      this.number = number;
      this.al = al; // Either Coda/Fine
    }
  }, {
    key: "toString",
    value: function toString() {
      var dss = "D.S." + (this.number || "");
      var als = this.al ? " al " + this.al.toString() : "";
      return dss + als;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<" + this.toString() + ">";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new DalSegno(this.number, this.al ? this.al.clone() : null);
    }
  }]);
  return DalSegno;
}(Element);

/**
 * Class represents a Segno mark
 * @extends Element
 */
var Segno = /*#__PURE__*/function (_Element16) {
  _inherits(Segno, _Element16);
  var _super23 = _createSuper(Segno);
  function Segno(number, opt) {
    var _this21;
    _classCallCheck(this, Segno);
    _this21 = _super23.call(this);
    _this21.number = number;
    _this21.opt = opt;
    return _this21;
  }
  _createClass(Segno, [{
    key: "getElementName",
    value: function getElementName() {
      return "Segno";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      var opts = this.opt ? " ".concat(this.opt) : "";
      return "<S".concat(this.number || "").concat(opts, ">");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Segno(this.number, this.opt);
    }
  }]);
  return Segno;
}(Element);

/**
 * Class represents a Coda mark
 * @extends Element
 */
var Coda = /*#__PURE__*/function (_Element17) {
  _inherits(Coda, _Element17);
  var _super24 = _createSuper(Coda);
  function Coda(number) {
    var _this22;
    _classCallCheck(this, Coda);
    _this22 = _super24.call(this);
    _this22.number = number;
    return _this22;
  }
  _createClass(Coda, [{
    key: "getElementName",
    value: function getElementName() {
      return "Coda";
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Coda" + (this.number || "");
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<" + this.toString() + ">";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Coda(this.number);
    }
  }]);
  return Coda;
}(Element);

/**
 * Class represents a To Coda mark
 * @extends Element
 */
var ToCoda = /*#__PURE__*/function (_Element18) {
  _inherits(ToCoda, _Element18);
  var _super25 = _createSuper(ToCoda);
  function ToCoda(number) {
    var _this23;
    _classCallCheck(this, ToCoda);
    _this23 = _super25.call(this);
    _this23.number = number;
    return _this23;
  }
  _createClass(ToCoda, [{
    key: "getElementName",
    value: function getElementName() {
      return "ToCoda";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<to Coda".concat(this.number || "", ">");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new ToCoda(this.number);
    }
  }]);
  return ToCoda;
}(Element);

/**
 * Class represents a Fine mark
 * @extends Element
 */
var Fine = /*#__PURE__*/function (_Element19) {
  _inherits(Fine, _Element19);
  var _super26 = _createSuper(Fine);
  function Fine() {
    _classCallCheck(this, Fine);
    return _super26.call(this);
  }
  _createClass(Fine, [{
    key: "getElementName",
    value: function getElementName() {
      return "Fine";
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Fine";
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "<" + this.toString() + ">";
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Fine();
    }
  }]);
  return Fine;
}(Element);

/**
 * Class represents a Comment
 * @extends Element
 */
var Comment = /*#__PURE__*/function (_Element20) {
  _inherits(Comment, _Element20);
  var _super27 = _createSuper(Comment);
  function Comment(comment) {
    var _this24;
    var chorddep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Comment);
    _this24 = _super27.call(this);
    _this24.comment = comment;
    _this24.chorddep = chorddep; // Dependency for particular chord : true/false
    return _this24;
  }
  _createClass(Comment, [{
    key: "getElementName",
    value: function getElementName() {
      return "Comment";
    }
  }, {
    key: "setCodeDependency",
    value: function setCodeDependency(v) {
      this.chorddep = v;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "'" + this.comment + "'";
    } // TODO : quote considrtaion
  }, {
    key: "remove",
    value: function remove() {
      if (this.chorddep) {
        this.chorddep.exceptinal_comment = null;
        this.chorddep = null;
      }
      _get(_getPrototypeOf(Comment.prototype), "remove", this).call(this);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Comment(this.comment);
    } // NOTE : codedep is reset
  }]);
  return Comment;
}(Element);

/**
 * Class represents a lyric
 * @extends Element
 */
var Lyric = /*#__PURE__*/function (_Element21) {
  _inherits(Lyric, _Element21);
  var _super28 = _createSuper(Lyric);
  function Lyric(lyric) {
    var _this25;
    var chorddep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Lyric);
    _this25 = _super28.call(this);
    _this25.lyric = lyric;
    _this25.chorddep = chorddep; // Dependency for particular chord : true/false
    return _this25;
  }
  _createClass(Lyric, [{
    key: "getElementName",
    value: function getElementName() {
      return "Lyric";
    }
  }, {
    key: "setCodeDependency",
    value: function setCodeDependency(v) {
      this.chorddep = v;
    }
  }, {
    key: "exportCode",
    value: function exportCode() {
      return "`" + this.lyric + "`";
    } // TODO : quote considrtaion
  }, {
    key: "remove",
    value: function remove() {
      if (this.chorddep) {
        this.chorddep.lyric = null;
        this.chorddep = null;
      }
      _get(_getPrototypeOf(Lyric.prototype), "remove", this).call(this);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Lyric(this.lyric);
    } // NOTE : codedep is reset
  }]);
  return Lyric;
}(Element);

// Pure {} object
function isObject(val) {
  if (val !== null && _typeof(val) === "object" && val.constructor === Object) {
    return true;
  }
  return false;
}

// Represents Variable that is explicit shown in the drawing and user can select it.
var Title = /*#__PURE__*/function (_Element22) {
  _inherits(Title, _Element22);
  var _super29 = _createSuper(Title);
  function Title(variable) {
    var _this26;
    _classCallCheck(this, Title);
    _this26 = _super29.call(this);
    _this26.variable = variable;
    return _this26;
  }
  _createClass(Title, [{
    key: "getElementName",
    value: function getElementName() {
      return "Title";
    }
  }]);
  return Title;
}(Element);
var SubTitle = /*#__PURE__*/function (_Element23) {
  _inherits(SubTitle, _Element23);
  var _super30 = _createSuper(SubTitle);
  function SubTitle(variable) {
    var _this27;
    _classCallCheck(this, SubTitle);
    _this27 = _super30.call(this);
    _this27.variable = variable;
    return _this27;
  }
  _createClass(SubTitle, [{
    key: "getElementName",
    value: function getElementName() {
      return "SubTitle";
    }
  }]);
  return SubTitle;
}(Element);
var Artist = /*#__PURE__*/function (_Element24) {
  _inherits(Artist, _Element24);
  var _super31 = _createSuper(Artist);
  function Artist(variable) {
    var _this28;
    _classCallCheck(this, Artist);
    _this28 = _super31.call(this);
    _this28.variable = variable;
    return _this28;
  }
  _createClass(Artist, [{
    key: "getElementName",
    value: function getElementName() {
      return "Artist";
    }
  }]);
  return Artist;
}(Element);

/**
 * Class represents a Variable. Not always shown in the rendered image (up to renderer implementation)
 * @extends Node
 */
var Variable = /*#__PURE__*/function (_Node2) {
  _inherits(Variable, _Node2);
  var _super32 = _createSuper(Variable);
  function Variable(name, value) {
    var _this29;
    _classCallCheck(this, Variable);
    _this29 = _super32.call(this);
    _this29.name = name;
    _this29.value = deepcopy(value);
    return _this29;
  }
  _createClass(Variable, [{
    key: "exportCode",
    value: function exportCode() {
      var vtype = _typeof(this.value);
      var code = "%" + this.name + "=";
      if (vtype == "string") code += "\"".concat(this.value, "\"");else if (vtype == "number") code += "".concat(this.value);else if (isObject(this.value)) {
        code += JSON.stringify(this.value);
      } else {
        throw "Error on export code for Variable";
      }
      //code += "\n";
      return code;
    }
  }]);
  return Variable;
}(Node);

/**
 * Virtual/Abstract element used for GUI based editting. Not appears explicitly in the original code nor in rendered image.
 * Only used in HitManager
 */
var VirtualElement = /*#__PURE__*/_createClass(function VirtualElement() {
  _classCallCheck(this, VirtualElement);
});

/**
 * Class represents the concept of row in the renderer. How to use this is up to renderer.
 * @extends VirtualElement
 */
var GenericRow = /*#__PURE__*/function (_VirtualElement) {
  _inherits(GenericRow, _VirtualElement);
  var _super33 = _createSuper(GenericRow);
  function GenericRow(type, param) {
    var _this30;
    _classCallCheck(this, GenericRow);
    _this30 = _super33.call(this);
    _this30.type = type;
    _this30.param = param; // Any element can be associated.
    return _this30;
  }
  return _createClass(GenericRow);
}(VirtualElement);
var HitManager = /*#__PURE__*/function () {
  function HitManager() {
    _classCallCheck(this, HitManager);
    this.clear();
  }
  _createClass(HitManager, [{
    key: "_uuid",
    value: function _uuid() {
      var chars = new Array(8);
      for (var i = 0; i < chars.length; ++i) {
        chars[i] = Math.floor(Math.random() * 16).toString(16);
      }
      return chars.join();
    }
  }, {
    key: "_drawBBs",
    value: function _drawBBs() {
      var _this31 = this;
      var _loop = function _loop() {
        var p = _this31.papers[paper_id];
        var ctx = p.paper.getContext("2d");
        p.objs.forEach(function (entry) {
          ctx.fillStyle = "rgb(0, 0, 255, 0.5)";
          ctx.fillRect(entry.bb.x[0], entry.bb.y[0], entry.bb.width(), entry.bb.height());
          //console.log("BB dump : " + [entry.bb.x[0], entry.bb.y[0], entry.bb.width(), entry.bb.height()]);
        });
      };
      for (var paper_id in this.papers) {
        _loop();
      }
    }

    // This is to set global scale to convert the real on-screen coordinate to graphic coordinate.
    // Assumed to use when text_size parameter != 1 is specofied.
  }, {
    key: "setGlobalScale",
    value: function setGlobalScale(sx, sy) {
      this.global_scale.x = sx;
      this.global_scale.y = sy;
    }

    // Once you add, you need to call commmit to construct the data
    // Canvas DOM element "paper" has to have unique ID in .fumen_canvas_id property
    // If no fumen_canvas_id is specified, automtically generated with random string.
  }, {
    key: "add",
    value: function add(paper, bb, element) {
      if (bb === undefined) {
        console.warn("bb is null");
        return;
      }
      if (paper.fumen_canvas_id === undefined) {
        paper.fumen_canvas_id = this._uuid();
      }
      bb = bb.clone();
      if (bb.width() <= 4) bb.expand(2, 2, 0, 0);
      bb.scale(this.global_scale.x, this.global_scale.y); // Registered as on-screen coordinates

      if (!(paper.fumen_canvas_id in this.papers)) {
        this.papers[paper.fumen_canvas_id] = {
          paper: paper,
          objs: [],
          left_x_sorted: [],
          top_y_sorted: [],
          right_x_sorted: [],
          bottom_y_sorted: []
        };
      }
      this.papers[paper.fumen_canvas_id].objs.push({
        bb: bb,
        element: element
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.papers = {};
      this.global_scale = {
        x: 1.0,
        y: 1.0
      };
    }
  }, {
    key: "indexSort",
    value: function indexSort(paper, pred) {
      // sort it in x
      var len = this.papers[paper.fumen_canvas_id].objs.length;
      var indices = new Array(len);
      for (var i = 0; i < len; ++i) indices[i] = i;
      indices.sort(pred);
      return indices;
    }
  }, {
    key: "commit",
    value: function commit(paper) {
      if (!(paper.fumen_canvas_id in this.papers)) return;
      var p = this.papers[paper.fumen_canvas_id];
      p.left_x_sorted = this.indexSort(paper, function (a, b) {
        var va = p.objs[a].bb.x[0];
        var vb = p.objs[b].bb.x[0];
        return va < vb ? -1 : va > vb ? 1 : 0;
      });
      p.right_x_sorted = this.indexSort(paper, function (a, b) {
        var va = p.objs[a].bb.x[1];
        var vb = p.objs[b].bb.x[1];
        return va < vb ? -1 : va > vb ? 1 : 0;
      });
      p.top_y_sorted = this.indexSort(paper, function (a, b) {
        var va = p.objs[a].bb.y[0];
        var vb = p.objs[b].bb.y[0];
        return va < vb ? -1 : va > vb ? 1 : 0;
      });
      p.bottom_y_sorted = this.indexSort(paper, function (a, b) {
        var va = p.objs[a].bb.y[1];
        var vb = p.objs[b].bb.y[1];
        return va < vb ? -1 : va > vb ? 1 : 0;
      });
    }
  }, {
    key: "get",
    value: function get(paper, coord) {
      if (!(paper.fumen_canvas_id in this.papers)) return;
      var p = this.papers[paper.fumen_canvas_id];
      var len = p.objs.length;
      var lx_end = p.left_x_sorted.findIndex(function (n) {
        return p.objs[n].bb.x[0] > coord.x;
      });
      if (lx_end == 0) return [];else if (lx_end == -1) lx_end = len - 1;else lx_end -= 1;
      var rx_start = p.right_x_sorted.findIndex(function (n) {
        return p.objs[n].bb.x[1] >= coord.x;
      });
      if (rx_start == -1) return [];
      var ty_end = p.top_y_sorted.findIndex(function (n) {
        return p.objs[n].bb.y[0] > coord.y;
      });
      if (ty_end == 0) return [];else if (ty_end == -1) ty_end = len - 1;else ty_end -= 1;
      var by_start = p.bottom_y_sorted.findIndex(function (n) {
        return p.objs[n].bb.y[1] >= coord.y;
      });
      if (by_start == -1) return [];
      var lxc = p.left_x_sorted.slice(0, lx_end + 1);
      var rxc = p.right_x_sorted.slice(rx_start);
      var tyc = p.top_y_sorted.slice(0, ty_end + 1);
      var byc = p.bottom_y_sorted.slice(by_start);
      var hit_objs = lxc.filter(function (val) {
        return rxc.indexOf(val) !== -1;
      }).filter(function (val) {
        return tyc.indexOf(val) !== -1;
      }).filter(function (val) {
        return byc.indexOf(val) !== -1;
      }).map(function (val) {
        return {
          element: p.objs[val].element,
          bb: p.objs[val].bb.clone()
        };
      });
      return hit_objs;
    }
  }]);
  return HitManager;
}();

/***/ }),

/***/ "./src/parser/parser.js":
/*!******************************!*\
  !*** ./src/parser/parser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @module Fumen
 */



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
var Parser = /*#__PURE__*/function () {
  /**
   * Parser class for fumen markdown code
   */
  function Parser(error_msg_callback) {
    _classCallCheck(this, Parser);
    this.context = {
      line: 0,
      "char": 0
    };
    this.error_msg_callback = error_msg_callback;
  }
  _createClass(Parser, [{
    key: "onParseError",
    value: function onParseError(msg) {
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
  }, {
    key: "nextToken",
    value: function nextToken(s, dont_skip_spaces) {
      var word_def = WORD_DEFINIITON_GENERAL;
      var skipped_spaces = 0;
      var skipped_spaces_str = "";
      if (!(dont_skip_spaces === true)) {
        while (s.length > 0 && _common_common__WEBPACK_IMPORTED_MODULE_1__.charIsIn(s[0], " 	")) {
          skipped_spaces_str += s[0];
          s = s.substr(1);
          ++skipped_spaces;
        }
      }
      if (s.length == 0) return {
        token: null,
        s: s,
        type: TOKEN_END,
        ss: skipped_spaces,
        sss: skipped_spaces_str
      };

      // At first, plain string is analyzed irrespective of word_def.
      var r = _common_common__WEBPACK_IMPORTED_MODULE_1__.charStartsWithAmong(s, ["\"", "'", "`", "-"]);
      //if (s[0] == "\"" || s[0] == "'" || s[0] == "`") {
      if (r != null) {
        var quote = r.s; //s[0];
        var plain_str = "";
        s = s.substr(1);
        while (s.length > 0 && s[0] != quote) {
          plain_str += s[0];
          s = s.substr(1);
        }
        var strclosed = s.length > 0 && s[0] == quote;
        if (!strclosed) this.onParseError("ERROR_WHILE_PARSING_PLAIN_STRING");
        s = s.substr(1);
        return {
          token: plain_str,
          s: s,
          type: [TOKEN_STRING, TOKEN_STRING_SQ, TOKEN_STRING_GRAVE_ACCENT, TOKEN_STRING_HYPHEN][r.index],
          ss: skipped_spaces,
          sss: skipped_spaces_str
        };
      }
      r = _common_common__WEBPACK_IMPORTED_MODULE_1__.charStartsWithAmong(s, ["||:", "||.", "||", "|", "./|/."]);
      if (r != null) {
        return {
          token: r.s,
          s: s.substr(r.s.length),
          ss: skipped_spaces,
          sss: skipped_spaces_str,
          type: [TOKEN_MB_LOOP_BEGIN, TOKEN_MB_FIN, TOKEN_MB_DBL, TOKEN_MB, TOKEN_MB_DBL_SIMILE][r.index]
        };
      }
      var m = null;
      m = s.match(/^(:\|\|:?)(x(\d+|X))?/); // ":||" or ":||:". Repeat number can be specified as "x<digit|n>"
      if (m != null) {
        var loopTimes = 2;
        var isNTimes = false;
        if (m[2] != null) {
          if (m[3] == "X") isNTimes = true;else loopTimes = Number(m[3]);
        }
        return {
          token: m[0],
          s: s.substr(m[0].length),
          ss: skipped_spaces,
          sss: skipped_spaces_str,
          type: m[1] == ":||:" ? TOKEN_MB_LOOP_BOTH : TOKEN_MB_LOOP_END,
          param: {
            times: loopTimes,
            ntimes: isNTimes
          }
        };
      }
      r = _common_common__WEBPACK_IMPORTED_MODULE_1__.charIsIn(s[0], "[]<>(){},\n/\\%=@:.");
      if (r != null) {
        return {
          token: s[0],
          s: s.substr(1),
          ss: skipped_spaces,
          sss: skipped_spaces_str,
          type: [TOKEN_BRACKET_LS, TOKEN_BRACKET_RS, TOKEN_BRACKET_LA, TOKEN_BRACKET_RA, TOKEN_BRACKET_LR, TOKEN_BRACKET_RR, TOKEN_BRACKET_LW, TOKEN_BRACKET_RW, TOKEN_COMMA, TOKEN_NL, TOKEN_SLASH, TOKEN_BACK_SLASH, TOKEN_PERCENT, TOKEN_EQUAL, TOKEN_ATMARK, TOKEN_COLON, TOKEN_PERIOD][r.index]
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
          // updated string 
          type: TOKEN_WORD,
          ss: skipped_spaces,
          // number of skipped spaces
          sss: skipped_spaces_str // skipped spaces string
        };
      }

      this.onParseError("INVALID_TOKEN_DETECTED");
    }
  }, {
    key: "parseGroup",
    value: function parseGroup(profile, s, errmsg) {
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
              if (r.type != expected_token_type) this.onParseError(errmsg);
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
                if (l.length == 0) this.onParseError(errmsg);else {
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
      return {
        tokens: tokens,
        s: s
      };
    }
  }, {
    key: "parseRehearsalMark",
    value: function parseRehearsalMark(trig_token, s) {
      // prerequisite
      //   trig_token_type = TOKEN_BRACKET_LS, consumed
      // Expects "Word characters"
      // exit state
      //   "]" is consumed.
      var m = s.match(WORD_DEFINITION_IN_REHARSAL_MARK);
      if (m != null) {
        var reharsalMarkName = m[0];
        var r = this.nextToken(s.substr(m[0].length));
        if (r.type == TOKEN_BRACKET_RS) return {
          reharsalMarkName: reharsalMarkName,
          s: r.s
        };
      }
      this.onParseError("Invalid rehearsal mark");
    }
  }, {
    key: "parseSyncopation",
    value: function parseSyncopation(trig_token_type, s) {
      // prerequisite
      //   trig_token_type =(TOKEN_BRACKET_LS + )TOKEN_COLON

      var m = s.match(/^[\d._~]*/);
      if (m != null) {
        var nexts = s.substr(m[0].length);
        return {
          syncopation: new _common_common__WEBPACK_IMPORTED_MODULE_1__.Syncopation(m[0]),
          s: nexts
        };
      }
      this.onParseError("Invalid syncopation indicator");
    }
  }, {
    key: "parseLoopIndicator",
    value: function parseLoopIndicator(trig_token_type, s) {
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
      var m = s.match(WORD_DEFINITION_IN_LOOP_IND_GENERIC);
      if (m != null) {
        var loopIndStr = m[0];
        var r = this.nextToken(s.substr(m[0].length));
        if (r.type == TOKEN_BRACKET_RS) return {
          loopIndicator: new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopIndicator(loopIndStr),
          s: r.s
        };
      }
      this.onParseError("Invalid loop indicator");
    }
  }, {
    key: "parseTime",
    value: function parseTime(trig_token_type, s) {
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
      if (r.type != TOKEN_BRACKET_RR) this.onParseError("ERROR_WHILE_PARSE_TIME");
      return {
        time: new _common_common__WEBPACK_IMPORTED_MODULE_1__.Time(numer, denom),
        s: s
      };
    }
  }, {
    key: "parseSign",
    value: function parseSign(trig_token_type, s) {
      // Read until ">" found
      var index = s.indexOf(">");
      if (index < 0) throw "Parse error on Sign(0)";
      var signStr = s.slice(0, index);
      s = s.slice(index + 1); // ">" is skipped

      // Parse sign string
      // "D.S.([0-9]+)?( al Coda([0-9]+)?)
      var r = this.nextToken(signStr, WORD_DEFINIITON_GENERAL);
      if (r.type != TOKEN_WORD) throw "Parse error on Sign(1)";
      var regDS = /D\.S\.([0-9]+)?/;
      var regCoda = /Coda([0-9]+)?/;
      var regSegno = /S(egno)?([0-9]+)?$/;
      var sign = null;
      var m = null;
      if (r.token == "Fine") {
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Fine();
      } else if (r.token == "D.C.") {
        var _al = null;
        r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
        if (r.type != TOKEN_END) {
          if (r.type != TOKEN_WORD) throw "Invalid token after D.C.(1)";
          if (r.token != "al") throw "Invalid token after D.C.(2)";
          r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
          if (r.type != TOKEN_WORD) throw "Invalid token after al";
          if (r.token == "Fine") _al = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Fine();else if ((m = r.token.match(regCoda)) !== null) _al = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Coda(m[1] === undefined ? null : m[1]);else throw "Invalid token after al(2)";
        }
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.DaCapo(_al);
      } else if ((m = r.token.match(regCoda)) !== null) {
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Coda(m[1] === undefined ? null : m[1]);
      } else if ((m = r.token.match(regSegno)) !== null) {
        var m2 = r.s.match(/^\s*(straight|((with\s+)repeat))/);
        //console.log(r.s + "/" + signStr + m2);
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Segno(m[2] === undefined ? null : m[2], m2 ? m2[1] : null);
      } else if (r.token == "to") {
        r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
        if (r.type != TOKEN_WORD) throw "Invalid token after to.";
        m = r.token.match(regCoda);
        if (m === null) throw "Coda was not detected";
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.ToCoda(m[1] === undefined ? null : m[1]);
      } else if ((m = r.token.match(regDS)) !== null) {
        var dsNumber = m[1] === undefined ? null : m[1];
        var al = null;
        r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
        if (r.type != TOKEN_END) {
          if (r.type != TOKEN_WORD) throw "Invalid token after D.S.(1)";
          if (r.token != "al") throw "Invalid token after D.S.(2)";
          r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
          if (r.type != TOKEN_WORD) throw "Invalid token after al";
          if (r.token == "Fine") al = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Fine();else if ((m = r.token.match(regCoda)) !== null) al = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Coda(m[1] === undefined ? null : m[1]);else throw "Invalid token after al(2)";
        }
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__.DalSegno(dsNumber, al);
      } else {
        throw "Invalid token in parse sign";
      }
      return {
        sign: sign,
        s: s
      };
    }
  }, {
    key: "parseChordSymbol",
    value: function parseChordSymbol(trig_token, trig_token_type, s) {
      // prerequisite:
      //   trig_token_type == TOKEN_WORD || TOKEN_SLASH
      // Parsing rule:
      //      Any continuous string of WORD_DEFINITION_GENERAL | "(" | ")"  | "/"
      //      without any spaces are read as chord symbol.
      //      Validtion of chord symbol notation is sperately conducted by
      //      Chord class.

      var chord_symbol = trig_token;
      var m = s.match(WORD_DEFINITION_CHORD_SYMBOL);
      if (m) {
        chord_symbol += m[0];
        s = s.substr(m[0].length);
      }
      var chord = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord(chord_symbol);
      return {
        s: s,
        chord: chord
      };
    }
  }, {
    key: "parseInMeasSimile",
    value: function parseInMeasSimile(trig_token, trig_token_type, s) {
      // prerequisite:
      //   trig_token_type == TOKEN_PERIOD
      // Parsing rule:
      //      Any continuous string of "/" and following period "."

      var m = s.match(/(\/+)\./);
      var simile = null;
      if (m) {
        var numslash = m[1].length;
        s = s.substr(m[0].length);
        simile = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Simile(numslash);
      }
      return {
        s: s,
        simile: simile
      };
    }
  }, {
    key: "parseRest",
    value: function parseRest(trig_token, trig_token_type, s) {
      // Analyze Rest symbol
      var r = /^r:(([\d_]+)(\.*))$/;
      var m = trig_token.match(r);
      var rest = null;
      if (m) rest = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest(m[1]);
      return {
        s: s,
        rest: rest
      };
    }
  }, {
    key: "parseMeasure",
    value: function parseMeasure(trig_token_obj, s, prev_measure) {
      // prerequisite:
      //   trig_boundary == TOKEN_MB || TOKEN_MB_DBL || TOKEN_MB_LOOP_BEGIN || TOKEN_MB_DBL_SIMILE
      // note:
      //   | or || or ||: or :|| at the end of the measure will "not" be consumed.
      var measure = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Measure();
      if (trig_token_obj.type == TOKEN_MB) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryMark(1));else if (trig_token_obj.type == TOKEN_MB_DBL) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryMark(2));else if (trig_token_obj.type == TOKEN_MB_LOOP_END) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopEndMark(trig_token_obj.param));else if (trig_token_obj.type == TOKEN_MB_LOOP_BEGIN) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopBeginMark());else if (trig_token_obj.type == TOKEN_MB_LOOP_BOTH) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopBothMark(trig_token_obj.param));else if (trig_token_obj.type == TOKEN_MB_FIN) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryFinMark());else if (trig_token_obj.type == TOKEN_MB_DBL_SIMILE) measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryDblSimile());
      var loop_flg = true;
      var atmark_associated_elements = [];
      var cur_syncopation = null;
      var associator = function associator(elem_list, chord) {
        for (var ei = elem_list.length - 1; ei >= 0; --ei) {
          var elem = elem_list[ei];
          if (elem instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) break;else if (elem instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Comment) {
            elem.setCodeDependency(chord);
            chord.setException(elem);
          } else if (elem instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Lyric) {
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
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.Space(1));
            s = r.s;
            break;
          case TOKEN_STRING:
            var chord = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord(r.token);
            if (atmark_associated_elements.length > 0) {
              associator(atmark_associated_elements, chord);
              atmark_associated_elements = [];
            }
            measure.appendChild(chord);
            s = r.s;
            break;
          case TOKEN_STRING_SQ:
            var comment = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Comment(r.token);
            // Check if atmark specified
            s = r.s;
            r = this.nextToken(s);
            if (r.type == TOKEN_ATMARK) {
              // At mark is now an independent element which associate previous elements to the next elements of atmark.
              s = r.s;
              atmark_associated_elements.push(comment);
            } else {
              measure.appendChild(comment);
            }
            break;
          case TOKEN_STRING_GRAVE_ACCENT:
            var lyric = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Lyric(r.token);
            s = r.s;
            r = this.nextToken(s);
            if (r.type == TOKEN_ATMARK) {
              // At mark is now an independent element which associate previous elements to the next elements of atmark.
              s = r.s;
              atmark_associated_elements.push(lyric);
            } else {
              measure.appendChild(lyric);
            }
            break;
          case TOKEN_STRING_HYPHEN:
            m = r.token.match("^[0-9]+$");
            if (!m) {
              this.onParseError("ERROR_WHILE_PARSE_LONG_REST");
            }
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LongRest(parseInt(r.token)));
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
              cur_syncopation = null; // Cancel it
              break;
            }
          // else continute to chord symbol analysis
          // To SLASH or COLON
          // eslint-disable-next-line no-fallthrough
          case TOKEN_SLASH:
          case TOKEN_COLON:
            r = this.parseChordSymbol(r.token, r.type, r.s);
            if (atmark_associated_elements.length > 0) {
              associator(atmark_associated_elements, r.chord);
              atmark_associated_elements = [];
            }
            if (cur_syncopation) {
              //cur_syncopation.setCodeDependency(r.chord);
              var syncchord = r.chord.setSyncopationAndGetShadowChord(cur_syncopation);
              this.context.prev_measure.pushToBody(syncchord);
              cur_syncopation = null;
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
            var r_tmp = this.nextToken(r.s);
            if (r_tmp.type == TOKEN_COLON) {
              r = this.parseSyncopation(r_tmp.type, r_tmp.s);
              cur_syncopation = r.syncopation;
              measure.appendChild(r.syncopation); // Not processed actually but stored for recovering the code
            } else {
              r = this.parseSign(r.type, r.s);
              measure.appendChild(r.sign);
            }
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
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryMark(1, false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_DBL:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryMark(2, false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_LOOP_END:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopEndMark(r.param, false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_LOOP_BEGIN:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopBeginMark(false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_LOOP_BOTH:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopBothMark(r.param, false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_FIN:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryFinMark(false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          case TOKEN_MB_DBL_SIMILE:
            measure.appendChild(new _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundaryDblSimile(false));
            loop_flg = false;
            s = s.substr(r.sss.length);
            break;
          default:
            this.onParseError("ERROR_WHILE_PARSE_MEASURE");
            break;
        }
      }
      return {
        measure: measure,
        s: s
      };
    }
  }, {
    key: "parseMeasures",
    value: function parseMeasures(trig_token_obj, s) {
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
        this.context.prev_measure = r.measure;
        r = this.nextToken(s); // Not skipped spaces are already consumed.
        if (r.sss.length > 0) {
          this.onParseError("ERROR_WHILE_PARSE_MEASURES");
        }
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
                {
                  loop_flg = false;
                  // Register the last boundary to the serialize object of last measure as it is not regisereted.
                  var lastm = measures[measures.length - 1];
                  var lastb = lastm.childNodes[lastm.childNodes.length - 1];
                  if (!(lastb instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.MeasureBoundary)) {
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
      return {
        measures: measures,
        s: s
      };
    }
  }, {
    key: "parseVariable",
    value: function parseVariable(s) {
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
      for (var j = 0; j < s.length && s[j] != "\n"; ++j) v_s += s[j];
      try {
        value = JSON.parse(v_s);
      } catch (e) {
        this.onParseError("ERROR_WHILE_PARSE_VARIABLE_VALUE");
      }
      s = s.substr(v_s.length);
      return {
        key: key,
        value: value,
        s: s
      };
    }
  }, {
    key: "glanceHeader",
    value: function glanceHeader(s) {
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
  }, {
    key: "parseBlock",
    value: function parseBlock(s, currentRehearsalGroup, latest_variables) {
      // parase until block boundary is found
      // block boundary = "[" or 2 successive NL or NOL
      try {
        var r = null;
        var loop_cnt = 0;
        var block = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Block();
        var current_align = "expand";
        this.context.contiguous_line_break = 0; // This should be done only if NL is really consumed.

        var num_meas_row = 0;
        var MAX_LOOP = 1000;
        var end_of_rg = false;

        // eslint-disable-next-line no-constant-condition
        while (true) {
          r = this.nextToken(s);
          if (r.type == TOKEN_END) {
            s = r.s; // explicitly consume the last spaces if any.
            end_of_rg = true;
            break;
          } else if (r.type == TOKEN_NL) {
            this.context.line += 1;
            this.context.contiguous_line_break += 1;
            current_align = "expand"; // default is expand
            //if(this.context.contiguous_line_break >= 2) break; Do not break here. If the first non NL element is found, then break.
          } else if (r.type == TOKEN_BACK_SLASH) {
            if (this.context.contiguous_line_break >= 2) break;
            // Expect TOKEN_NL 
            r = this.nextToken(r.s);
            if (r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
            this.context.line += 1;
            //block.appendChild(new common.RawSpaces(r.sss));
            //block.appendChild(new common.RawSpaces(r.token)); 
            // Does not count as line break
          } else if (r.type == TOKEN_BRACKET_RA) {
            if (this.context.contiguous_line_break >= 2) break;
            // Right aligh indicoator > which is outside measure
            current_align = "right";
          } else if (r.type == TOKEN_BRACKET_LA) {
            if (this.context.contiguous_line_break >= 2) break;
            // Right aligh indicoator > which is outside measure
            current_align = "left";
          } else if (r.type == TOKEN_BRACKET_LS) {
            // Next rehearsal mark detected.
            // Do not consume.
            end_of_rg = true;
            break;
          } else if ([TOKEN_MB, TOKEN_MB_DBL, TOKEN_MB_LOOP_BEGIN, TOKEN_MB_LOOP_END, TOKEN_MB_LOOP_BOTH, TOKEN_MB_FIN, TOKEN_MB_DBL_SIMILE].indexOf(r.type) >= 0) {
            if (this.context.contiguous_line_break >= 2) break;
            var is_new_line_middle_of_block = num_meas_row > 0 && this.context.contiguous_line_break == 1;
            this.context.contiguous_line_break = 0;
            r = this.parseMeasures(r, r.s); // the last NL has not been consumed.
            // Apply the variables valid at this point for each measures
            //r.measures.forEach(m=>{ m.variables = common.shallowcopy(latest_variables);});
            r.measures.forEach(function (m) {
              for (var key in latest_variables) {
                m.setVariable(latest_variables[key]);
              }
            });

            // For the first measure, set align and new line mark.
            r.measures[0].align = current_align;
            r.measures[0].raw_new_line = is_new_line_middle_of_block; // mark to the first measure
            block.concat(r.measures);
            ++num_meas_row;
          } else if (r.type == TOKEN_PERCENT) {
            if (this.context.contiguous_line_break >= 2) break;
            // Expression
            r = this.parseVariable(r.s); // last NL would not be consumed
            var variable = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Variable(r.key, r.value);
            //block.setVariable(r.key, r.value); Do not do this as with this, only the last variable will be valid.
            latest_variables[r.key] = variable;
            block.appendChild(variable);
            this.context.contiguous_line_break = 0; // -= 1; // Does not reset to 0, but cancell the new line in the same row as this variable
          } else {
            console.log(r.token);
            this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
          }
          s = r.s;
          loop_cnt++;
          if (loop_cnt >= MAX_LOOP) {
            throw "Too much elements or infnite loop detected with unkown reason";
          }
        }
        return {
          block: block,
          s: s,
          end_of_rg: end_of_rg
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    }
  }, {
    key: "parseRehearsalGroup",
    value: function parseRehearsalGroup(s, rgtype) {
      // pre-requisite:  
      // - "[" (consumed) (for normal or inline)
      // - boundaries (not consumed) (for anonymous)
      // - "<" or ">" (not consumed) (for anonymous)
      var r = null;
      var latest_variables = {}; // Do not inherit from previous rehearsal group

      var rgName = "";
      if (rgtype != "anonymous") {
        r = this.parseRehearsalMark(null, s); // "[" shall be already consumed.
        rgName = r.reharsalMarkName;
        s = r.s;
      }
      var rg = new _common_common__WEBPACK_IMPORTED_MODULE_1__.RehearsalGroup(rgName, rgtype == "inline");
      this.context.contiguous_line_break = 0;
      var loop_cnt = 0;
      var MAX_LOOP = 1000;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        // If more 2 or more NL is placed, empty block can be generated, in that case ignore it.
        r = this.parseBlock(s, rg, latest_variables);
        if (r.block.childNodes.length > 0) rg.appendChild(r.block);
        s = r.s;
        ++loop_cnt;
        if (loop_cnt >= MAX_LOOP) throw "Too much elements or infnite loop detected with unkown reason";
        if (r.end_of_rg) break;
      }
      // Empty rehearsal group is not permitted as of now.
      if (rg.find(function (e) {
        return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Measure;
      }, true).length == 0) throw "Empty rehearsal group is not allowed";
      return {
        rg: rg,
        s: s
      };
    }

    /**
     * Parse the fumen markdown code
     * @param {String} code Markdown code
     */
  }, {
    key: "parse",
    value: function parse(code) {
      try {
        code = code.replace(/\r\n/g, "\n");
        code = code.replace(/\r/g, "\n");
        var r = null;
        var loop_cnt = 0;
        var track = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Track();
        this.context = {
          line: 0,
          contiguous_line_break: 0,
          prev_measure: null // Refernce to the previous measure for the backward affection elements such as syncopation
        };

        // eslint-disable-next-line no-constant-condition
        while (true) {
          r = this.nextToken(code);
          if (r.type == TOKEN_END) {
            break;
          } else if (r.type == TOKEN_NL) {
            this.context.line += 1;
            this.context.contiguous_line_break += 1;
          } else if (r.type == TOKEN_BACK_SLASH) {
            // Expect TOKEN_NL 
            //track.appendChild(new common.RawSpaces(r.token)); 
            r = this.nextToken(r.s);
            if (r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
            this.context.line += 1;
            //track.appendChild(new common.RawSpaces(r.sss));
            //track.appendChild(new common.RawSpaces(r.token)); 
            // Does not count as line break
          } else if (r.type == TOKEN_BRACKET_LS) {
            var rgs = track.childNodes.filter(function (e) {
              return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.RehearsalGroup;
            });
            var inline = this.context.contiguous_line_break <= 1 && rgs.length > 0 &&
            // 1st RG is always non-inline
            rgs[rgs.length - 1].childNodes.filter(function (e) {
              return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Block;
            }).length > 0; // previous rehearsal group has at least one block(measure)

            r = this.parseRehearsalGroup(r.s, inline ? "inline" : "normal");
            track.appendChild(r.rg);
            //this.context.contiguous_line_break = 0;
          } else if ([TOKEN_MB, TOKEN_MB_DBL, TOKEN_MB_LOOP_BEGIN, TOKEN_MB_LOOP_END, TOKEN_MB_LOOP_BOTH, TOKEN_MB_FIN, TOKEN_MB_DBL_SIMILE, TOKEN_BRACKET_RA, TOKEN_BRACKET_LA].indexOf(r.type) >= 0) {
            // Measure appears directly withou rehearsal group mark.
            // If not rehearsal mark is defined and the measure is directly specified, 
            // then default anonymous rehearsal mark is generated.
            // For all the variables specified before these symbols are treated as a global variable.
            r = this.parseRehearsalGroup(code.substr(r.sss.length), "anonymous");
            track.appendChild(r.rg);
          } else if (r.type == TOKEN_PERCENT) {
            // Expression
            r = this.parseVariable(r.s); // last NL will not be consumed.
            var variable = new _common_common__WEBPACK_IMPORTED_MODULE_1__.Variable(r.key, r.value);
            track.appendChild(variable);
            track.setVariable(variable);
            this.context.contiguous_line_break = 0; // Does not reset to 0, but cancell the new line in the same row as this variable
          } else {
            console.log(r.token);
            this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
          }
          code = r.s;
          loop_cnt++;
          if (loop_cnt >= 1000) break;
        }
        return track;
      } catch (e) {
        console.error(e);
        return null;
      }
    }
  }]);
  return Parser;
}();

/***/ }),

/***/ "./src/renderer/default_renderer.js":
/*!******************************************!*\
  !*** ./src/renderer/default_renderer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRenderer": () => (/* binding */ DefaultRenderer)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer/renderer.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var _graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphic */ "./src/renderer/graphic.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/renderer/presets.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * @module Fumen
 */







/**
 * @typedef RenderParam
 * @global
 * @description An Object to specify prameters for rendering engine
 * @property {Number} [paper_width=375] Width of the paper
 * @property {Number} [paper_height=667] Height of the paper. If 0 is specified, the paper height is fit to its contents.
 * @property {float} [text_size=1.0] Text size as a ratio to default size. 0.9 means 10% smaller than default size.
 * @property {int} [base_font_size] Font size of the chord symbols.
 * @property {int} [title_font_size] Title font size
 * @property {int} [artist_font_size] Artist font size
 * @property {int} [x_offset] Margin of the left and right side of the paper.
 * @property {int} [x_offset_left=null] Margin of the right side of the paper. x_offset applies when null is specified.
 * @property {int} [x_offset_right=null] Margin of the left side of the paper. x_offset applies when null is specified.
 * @property {int} [y_offset] Margin of the top and bottom side of the paper.
 * @property {int} [y_offset_top=null] Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply.
 * @property {int} [y_offset_bottom=null] Margin of top side of the paper. y_offset applies when null is specified. In case header is drawn, this does not apply
 * @property {int} [y_header_margin] Margin of the top y when header is shown (normally, firstpage)
 * @property {int} [y_title_offset] Top offset for title
 * @property {int} [y_subtitle_offset] Top offset for sub-title
 * @property {int} [y_artist_offset] Top offset for artist row
 * @property {int} [y_footer_offset] Bottom offset for footer
 */
var SR_RENDER_PARAM = {
  // Paper setting
  paper_width: 375,
  // iPhone 8 etc, the top share as of 2020
  paper_height: 667,
  // iPhone 8 etc, , the top share as of 2020
  text_size: 1.0,
  // total canvas size will be [paper_width * text_size, paper_height*text_size]. NOTE that even the canvas size is scaled with text_size, any coordinate unit/size infomation inside the renderer stays the same and no need to be conscious about text_size value.
  pixel_ratio: 2,
  // integer. null : use system default, this is not configurable in source as it is memoried in global variable.
  ncol: 1,
  // Number of columns of score inside the paper
  nrow: 1,
  // Number of rows of score inside the paper

  // Papaer Margins
  y_title_offset: 5,
  y_subtitle_offset: 19,
  y_artist_offset: 19,
  y_header_margin: 2,
  // Margin between header and first row
  y_offset: 10,
  // Without header
  x_offset: 10,
  y_offset_top: null,
  // Without header. Use y_offset as a deafult.
  y_offset_bottom: null,
  // Without footer. Use y_offset as a deafult.
  x_offset_left: null,
  // Use x_offset as a default when null is specified.
  x_offset_right: null,
  // Use x_offset as a default when null is specified.
  y_footer_offset: 15,
  // Font size settings
  reharsal_mark_font_size: 12,
  title_font_size: 14,
  subtitle_font_size: 12,
  artist_font_size: 14,
  // 
  base_font_size: 28,
  // Chord symbol font size

  // Font configs. Please refer to CSS font configs for the meaning of each variable. http://www.htmq.com/style/font.shtml .
  // Font size config is done separately above. Gives as array with priority order.  
  repeat_mark_font: [{
    "font-family": "'Times New Roman'",
    // make sure to include quation for font name.
    //"font-style": "italic",
    "font-weight": "bold"
  }],
  title_font: [{
    "font-weight": "bold"
  }],
  // Row Settings 
  /// Vertical settings
  row_height: 28,
  // Basic height of the measure when no rs, mu and ml area is drawn
  base_body_height: 28,
  // Height in body area (not applicable for RS area) used for simile and rest rendering. Recommended to keep this value irrespective of row_height.
  row_margin: 4,
  // Margin between next y_base and lower edge of Measure Lower Area
  rs_area_height: 24,
  // Rhythm Slashes Area // 
  rm_area_height: 15,
  // Rehearsal Mark Area
  mu_area_height: 15,
  // Measure Upper Area ( Repeat signs area )
  ml_row_height: 10,
  // Measure Lower Area ( Lyrics etc.. )

  rm_margin_top: 0,
  // Margin between MU and chord
  rm_margin_bottom: 0,
  // Margin between MU and chord
  mu_margin_top: 0,
  // Margin between MU and chord
  mu_margin_bottom: 2,
  // Margin between MU and chord
  margin_top: 0,
  // Margin between MU and chord
  margin_bottom: 0,
  // Margin between MU and chord
  rs_margin_top: 0,
  // Margin between chord and rythm slash
  rs_margin_bottom: 10,
  // Margin below chord and rhthm slash
  ml_margin_top: 0,
  // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
  ml_margin_bottom: 0,
  // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea

  repeat_mark_y_margin: 2,
  // RS are upper/bootom and Repeat Marks( DalSegno, DaCapo, Fine, xX ) y margin in case RS are is shown.
  xtimes_mark_y_margin: 2,
  // Margin between body/RS are and "(x times)" mark.

  // Horizontal settings
  header_body_margin: 2,
  // Margin between header and body (x-direction)
  body_footer_margin: 2,
  // Margin between body and footer (x-direction)

  // Chord settings
  on_bass_style: "right",
  // right|below
  on_bass_below_y_offset: 0,
  // Rhythm Shalsh / Notes rendering settings
  balken_width: 3,
  note_bar_length: 24 / 4 * 3.5,
  // 3.5 times of interval is the conventional length
  note_flag_interval: 5,
  rs_elem_min_room: 5,
  // Minimum room after RS area elements in x-direction

  // Rendering optimization settings
  optimize_type: 4,
  // 0 : Constant room for each flexible element. 1: Uniform ratio (propotional to each fixed width of flexible element), 2: Evenly division of measures(force), 3: Evenly division of measures as much as possible
  opt2_room_dist: 1,
  // Room per elem assignment type for type 2. 0 : constant room, 1 : uniform ratio. Applicable for type2 and type4. 
  vertical_align: 1,
  // 1: Enable, 0: Disable
  vertical_align_intensity: 0.9,
  // Vertical align intensity 0:No align, 1:Always align
  inner_vertical_align: 1,
  // 1: Enable, 0: Disable
  inner_vertical_align_intensity: 0.5,
  // Vertical align intensity 0:No align, 0.5 : align if no compression, 1:Always align
  master_elem_selection: "default",
  // "chord" | "rs"
  scale_if_overlap: 1,
  // 1 or 0
  background_color: "white",
  // null will be transparent
  row_gen_mode: "default",
  // "dfault" | "constant_meas"
  row_gen_n_meas: 4
};

/**
 * Callback function when new canvas is requested by renderer.
 * @global
 * @callback canvasProvider
 * @return {(HTMLElement|Promise<HTMLElement>)} HTML canvas element
 */

var DefaultRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(DefaultRenderer, _Renderer);
  var _super = _createSuper(DefaultRenderer);
  /**
   * Default Renderer class for HTML canvas element
   * @param {(HTMLElement|canvasProvider)} canvas - HTML canvas element to draw the image. Or, callback function which returns HTML canvas element.
   * @param {RenderParam} [param={}] - Parameter for the rednering. If not specified, internal default values are used.
   */
  function DefaultRenderer(canvas) {
    var _this;
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, DefaultRenderer);
    _this = _super.call(this);
    if (typeof canvas == "function") {
      _this.canvas_provider = canvas;
      _this.canvas = null;
    } else {
      _this.canvas = canvas;
      if (canvas.id === undefined) {
        canvas.id = "thefumencanvas";
      } // dummy }
      _this.canvas_provider = null;
    }
    _this.memCanvas = null; // Canvas on memory used for screening

    _this.init_param = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(SR_RENDER_PARAM); // Default parameters

    // Overwrite with preset if specified
    if ("preset" in param) {
      var preset = param.preset;
      for (var key in _presets__WEBPACK_IMPORTED_MODULE_4__[preset]) {
        _this.init_param[key] = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(_presets__WEBPACK_IMPORTED_MODULE_4__[preset][key]);
      }
    }
    _this.mergeParam(_this.init_param, param, false);
    _this.track = null;
    _this.context = {
      pageidx: 0,
      current_canvas: null
    };
    return _this;
  }
  _createClass(DefaultRenderer, [{
    key: "setoffsetparam",
    value: function setoffsetparam(param) {
      if ("y_offset" in param) param.y_offset_top = param.y_offset_top || param.y_offset;
      if ("y_offset" in param) param.y_offset_bottom = param.y_offset_bottom || param.y_offset;
      if ("x_offset" in param) param.x_offset_left = param.x_offset_left || param.x_offset;
      if ("x_offset" in param) param.x_offset_right = param.x_offset_right || param.x_offset;
    }

    /**
     * Render the track
     * @param {Track} track - Track object passed from Parser.parse function 
     * @param {RenderParam} [param={}] - Rendering parameter for this rendering. Supercedes(field by field) the prameters specified in constructor. 
     */
  }, {
    key: "render",
    value: function render(track) {
      var _this2 = this;
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.track = track;
      return _graphic__WEBPACK_IMPORTED_MODULE_3__.PreloadJsonFont().then(function () {
        return _this2.renderImpl(track, param);
      });
    }
  }, {
    key: "field_sum",
    value: function field_sum(arr, field) {
      return arr.reduce(function (acc, e) {
        var obj = {};
        obj[field] = acc[field] + e[field];
        return obj;
      })[field];
    }
  }, {
    key: "optimizeType0",
    value: function optimizeType0(row_elements_list, x_width_info, total_width) {
      var num_flexible_rooms = this.field_sum(x_width_info, "meas_num_flexible_rooms");
      var fixed_width = this.field_sum(x_width_info, "meas_fixed_width");
      var room_per_elem_constant = (total_width - fixed_width) / num_flexible_rooms; // Constant room for all room

      row_elements_list.forEach(function (e, mi) {
        var room_per_elem = room_per_elem_constant;
        e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
        e.renderprop.total_room = room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
        x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
        e.renderprop.measure_width = x_width_info[mi].measure_width;
        e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
        e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
        e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
      });
    }
  }, {
    key: "roomForEqualRatioDivison",
    value: function roomForEqualRatioDivison(x_width_info, total_width, num_meas, num_meas_to_consider) {
      var num_flexible_rooms = this.field_sum(x_width_info, "meas_num_flexible_rooms");
      var fixed_width = this.field_sum(x_width_info, "meas_fixed_width");
      var fixed_width_flexbile_only = this.field_sum(x_width_info, "body_fixed_width");
      var fixed_width_others = fixed_width - fixed_width_flexbile_only;
      var room_per_elem_even_ratio_meas = [];
      var room_per_meas_even_ratio_meas = []; // room per measure for each meas in case even division of width for each measure
      // Used for optimize type = 1 
      var room_per_elem_uniform_ratio = (total_width - fixed_width_others) / fixed_width_flexbile_only;
      //console.log("S for type1 = " + room_per_elem_uniform_ratio);

      for (var mi = 0; mi < num_meas; ++mi) {
        var fixed_width_flexbile_only_details = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(x_width_info[mi]["body_fixed_width_details"]);
        var room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
        var room_per_meas = 0;
        for (var ii = 0; ii < x_width_info[mi].meas_num_flexible_rooms; ++ii) {
          room_per_elem[ii] = (room_per_elem_uniform_ratio - 1) * fixed_width_flexbile_only_details[ii];
          room_per_meas += room_per_elem[ii];
        }
        room_per_elem_even_ratio_meas.push(room_per_elem);
        room_per_meas_even_ratio_meas.push(room_per_meas);
      }
      return {
        "S": room_per_elem_uniform_ratio,
        "room_per_elem": room_per_elem_even_ratio_meas,
        "room_per_meas": room_per_meas_even_ratio_meas
      };
    }
  }, {
    key: "optimizeType1",
    value: function optimizeType1(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid) {
      var room_equal_ratio = this.roomForEqualRatioDivison(x_width_info, total_width, num_meas, num_meas_to_consider);
      row_elements_list.forEach(function (e, mi) {
        e.renderprop.room_per_elem = room_equal_ratio.room_per_elem[mi];
        e.renderprop.total_room = room_equal_ratio.room_per_meas[mi]; //room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
        x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
        e.renderprop.measure_width = x_width_info[mi].measure_width;
        e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
        e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
        e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
      });
    }
  }, {
    key: "roomPerMeasForEqualDivison",
    value: function roomPerMeasForEqualDivison(x_width_info, total_width, num_meas, num_meas_to_consider) {
      var room_per_meas_even_meas = []; // room per measure for each meas in case even division of width for each measure
      for (var mi = 0; mi < num_meas; ++mi) {
        room_per_meas_even_meas.push(total_width / num_meas_to_consider - x_width_info[mi].meas_fixed_width);
      }
      return room_per_meas_even_meas;
    }
  }, {
    key: "optimizeType2",
    value: function optimizeType2(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid, room_per_elem_dist) {
      // Equal division
      var room_per_meas_even_meas = this.roomPerMeasForEqualDivison(x_width_info, total_width, num_meas, num_meas_to_consider);
      row_elements_list.forEach(function (e, mi) {
        if (room_per_elem_dist == 0) {
          // type 2_0
          var room_per_elem = room_per_meas_even_meas[mi] / x_width_info[mi].meas_num_flexible_rooms;
          e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
        } else if (room_per_elem_dist == 1) {
          // type 2_1
          e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
          var Sk = room_per_meas_even_meas[mi] / x_width_info[mi].body_fixed_width + 1.0;
          for (var ife = 0; ife < x_width_info[mi].meas_num_flexible_rooms; ++ife) {
            e.renderprop.room_per_elem[ife] = (Sk - 1.0) * x_width_info[mi].body_fixed_width_details[ife];
          }
        }
        e.renderprop.total_room = room_per_meas_even_meas[mi];
        x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
        e.renderprop.measure_width = x_width_info[mi].measure_width;
        e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
        e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
        e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
      });
      if (reduced_meas_valid && row_elements_list[0].align == "right") row_elements_list[0].renderprop.left_margin = total_width / num_meas_to_consider * (num_meas_to_consider - num_meas);
    }
  }, {
    key: "optimizeType3",
    value: function optimizeType3(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid) {
      // https://docs.google.com/document/d/1oPmUvAF6-KTsQrEovYJgMZSDqlztp4pL-XVs8uee7A4/edit?usp=sharing
      // Here alpha=1 case is filtered at the first IF statement, then we only consider the case
      // where room when optimize_type = 0 is positive.
      var num_flexible_rooms = this.field_sum(x_width_info, "meas_num_flexible_rooms");
      var fixed_width = this.field_sum(x_width_info, "meas_fixed_width");
      var room_per_meas_even_meas = this.roomPerMeasForEqualDivison(x_width_info, total_width, num_meas, num_meas_to_consider);
      var room_per_elem_constant = (total_width - fixed_width) / num_flexible_rooms; // Constant room for all room

      var alpha = null;
      if (room_per_elem_constant < 0) {
        // No room in total.
        alpha = 1.0; // Type 0
      } else {
        alpha = 0.0;
        for (var mi = 0; mi < num_meas; ++mi) {
          if (room_per_meas_even_meas[mi] < 0) {
            var R0 = room_per_elem_constant * x_width_info[mi].meas_num_flexible_rooms;
            var R2 = room_per_meas_even_meas[mi];
            var alpha_dash = R2 / (R2 - R0); // should be a positive value less than 1
            alpha = Math.max(alpha, alpha_dash);
          }
        }
      }
      var row_total_width = 0;
      row_elements_list.forEach(function (e, mi) {
        var R0 = room_per_elem_constant * x_width_info[mi].meas_num_flexible_rooms;
        var R2 = room_per_meas_even_meas[mi];
        var room_per_elem = (alpha * R0 + (1 - alpha) * R2) / x_width_info[mi].meas_num_flexible_rooms;
        e.renderprop.room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms).fill(room_per_elem);
        e.renderprop.total_room = room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
        x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
        e.renderprop.measure_width = x_width_info[mi].measure_width;
        e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
        e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
        e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
        row_total_width += x_width_info[mi].measure_width;
      });
      if (reduced_meas_valid && row_elements_list[0].align == "right") row_elements_list[0].renderprop.left_margin = total_width - row_total_width;
      console.log("alpha = " + alpha);
    }
  }, {
    key: "optimizeType4",
    value: function optimizeType4(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid, opt2_room_dist) {
      // https://docs.google.com/document/d/1oPmUvAF6-KTsQrEovYJgMZSDqlztp4pL-XVs8uee7A4/edit?usp=sharing
      // Here alpha=1 case is filtered at the first IF statement, then we only consider the case
      // where room when optimize_type = 0 is positive.

      var room_per_meas_even_meas = this.roomPerMeasForEqualDivison(x_width_info, total_width, num_meas, num_meas_to_consider);
      var room_equal_ratio = this.roomForEqualRatioDivison(x_width_info, total_width, num_meas, num_meas_to_consider);
      var alpha = null;
      if (room_equal_ratio.S < 1) {
        // No room in total.
        alpha = 1.0; // Type 1
      } else {
        alpha = 0.0;
        for (var mi = 0; mi < num_meas; ++mi) {
          if (room_per_meas_even_meas[mi] < 0) {
            var R1 = room_equal_ratio.room_per_meas[mi];
            var R2 = room_per_meas_even_meas[mi];
            var alpha_dash = R2 / (R2 - R1); // should be a positive value less than 1
            alpha = Math.max(alpha, alpha_dash);
          }
        }
      }
      var row_total_width = 0;
      row_elements_list.forEach(function (e, mi) {
        var R1 = room_equal_ratio.room_per_meas[mi];
        var R2 = room_per_meas_even_meas[mi];
        var room_per_elem = new Array(x_width_info[mi].meas_num_flexible_rooms);
        var room_per_meas = 0;
        for (var ii = 0; ii < x_width_info[mi].meas_num_flexible_rooms; ++ii) {
          var f_ratio = x_width_info[mi].body_fixed_width_details[ii] / x_width_info[mi].body_fixed_width;
          if (opt2_room_dist == 0) {
            room_per_elem[ii] = alpha * R1 * f_ratio + (1 - alpha) * R2 / x_width_info[mi].meas_num_flexible_rooms;
          } else if (opt2_room_dist == 1) {
            room_per_elem[ii] = alpha * R1 * f_ratio + (1 - alpha) * R2 * f_ratio;
          }
          room_per_meas += room_per_elem[ii];
        }
        e.renderprop.room_per_elem = room_per_elem;
        e.renderprop.total_room = room_per_meas;
        x_width_info[mi].measure_width = e.renderprop.total_room + x_width_info[mi].meas_fixed_width;
        e.renderprop.measure_width = x_width_info[mi].measure_width;
        e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
        e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
        e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
        row_total_width += x_width_info[mi].measure_width;
      });
      if (reduced_meas_valid && row_elements_list[0].align == "right") row_elements_list[0].renderprop.left_margin = total_width - row_total_width;
    }
  }, {
    key: "determineRooms",
    value: function determineRooms(param, reharsal_x_width_info, total_width) {
      // Optimize width of each measure
      var row = 0;
      while (row < reharsal_x_width_info.length) {
        var row_elements_list = reharsal_x_width_info[row][0];
        var x_width_info = reharsal_x_width_info[row][1]; // For number of measures

        var num_meas = row_elements_list.length;
        var num_meas_to_consider = num_meas; // for type #2 and #3

        // In case right or left align is specified
        var reduced_meas_valid = false;
        if (row_elements_list[0].align != "expand" && row > 0) {
          // find the last measure for which expand is applied, or fallback to #0.
          var rowdash = void 0;
          for (rowdash = row - 1; rowdash >= 0; --rowdash) {
            if (reharsal_x_width_info[rowdash][0][0].align == "expand") break;
          }
          if (rowdash < 0) rowdash = 0; // Fallback to #0 even it has right|left align
          reduced_meas_valid = reharsal_x_width_info[rowdash][0].length > num_meas;
          if (reduced_meas_valid) {
            num_meas_to_consider = reharsal_x_width_info[rowdash][0].length;
          }
        }
        if (param.optimize_type == 0) {
          this.optimizeType0(row_elements_list, x_width_info, total_width);
          row++;
        } else if (param.optimize_type == 1) {
          this.optimizeType1(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid);
          row++;
        } else if (param.optimize_type == 2) {
          // Equal division
          this.optimizeType2(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid, param.opt2_room_dist);
          row++;
        } else if (param.optimize_type == 3) {
          // Combination of 2_0 and 0(fallback option when negative total room)
          this.optimizeType3(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid);
          row++;
        } else if (param.optimize_type == 4) {
          // Combination of 2_0|2_1 and 1(fallback option when negative total room)
          this.optimizeType4(row_elements_list, x_width_info, total_width, num_meas, num_meas_to_consider, reduced_meas_valid, param.opt2_room_dist);
          row++;
        } else {
          throw "Invalid optimize type";
        }
      }
      if (param.vertical_align) {
        var _row = 0;
        while (_row < reharsal_x_width_info.length) {
          var _num_meas = reharsal_x_width_info[_row][0].length;

          // Group the rows with :
          //     1. the same number of measures from #row
          //     2. Having right align mark and having less than 1st row
          var same_nmeas_row_group = [];
          var _rowdash = void 0;
          for (_rowdash = _row; _rowdash < reharsal_x_width_info.length; ++_rowdash) {
            if (reharsal_x_width_info[_rowdash][0].length == _num_meas) {
              same_nmeas_row_group.push(reharsal_x_width_info[_rowdash]);
            } else if (_rowdash > 0 && reharsal_x_width_info[_rowdash][0][0].align != "expand" && reharsal_x_width_info[_rowdash][0].length < _num_meas) {
              same_nmeas_row_group.push(reharsal_x_width_info[_rowdash]);
            } else {
              break; // only group the continuous rows with same number of measures
            }
          }

          // Withing the group above, search for the groups for which alternation extension condition is met

          // Take maximum of each column, and check if total width wider than paper width
          // Make virtual combined row having : 
          //    Fixed width = max( fixed width of all rows in correspoding column )
          var max_measure_widths = new Array(_num_meas).fill(0);

          // In case the row with less measures than other rows exists,
          // mapping of measure index is not a simple 1:1 relation.
          // This function is to map the global measure index to local measure index
          var getMeasRefIndex = function getMeasRefIndex(globalmi, row_elements_list, base_num_meas) {
            var mi_ref = globalmi;
            if (row_elements_list.length < base_num_meas) {
              if (row_elements_list[0].align == "right") {
                if (globalmi >= base_num_meas - row_elements_list.length) mi_ref = globalmi - (base_num_meas - row_elements_list.length);else mi_ref = null; // Not corresponding meas exist
              } else if (row_elements_list[0].align == "left") {
                if (globalmi < row_elements_list.length) mi_ref = globalmi;else mi_ref = null; // Not corresponding meas exist
              }
            } else if (row_elements_list.length > base_num_meas) {
              throw "Vertical align process error"; // Should be bug
            }

            return mi_ref;
          };

          // TODO : More clean code ...
          for (_rowdash = 0; _rowdash < same_nmeas_row_group.length; ++_rowdash) {
            var dammy_max_measure_widths = new Array(_num_meas).fill(0);
            var _x_width_info = same_nmeas_row_group[_rowdash][1];
            var _row_elements_list = same_nmeas_row_group[_rowdash][0];
            for (var mi = 0; mi < _num_meas; ++mi) {
              var mi_ref = getMeasRefIndex(mi, _row_elements_list, _num_meas);
              if (mi_ref == null) {
                // corresponding measure does not exist : inherit current max value
                dammy_max_measure_widths[mi] = max_measure_widths[mi];
                continue;
              }
              dammy_max_measure_widths[mi] = Math.max(_x_width_info[mi_ref].measure_width, max_measure_widths[mi]);
            }
            var dammy_total_max_measure_width = dammy_max_measure_widths.reduce(function (acc, e) {
              return acc + e;
            }); // This is always >= total_width except reduced measure with left/right align is under analysis.

            // Nomralize so that total width does not surpass total_width.
            // In case only reduced measure row is under analysis and dammy_total_max_measure_width is less than total_width,
            // do nothiing.  
            for (var _mi = 0; _mi < _num_meas; ++_mi) dammy_max_measure_widths[_mi] = dammy_max_measure_widths[_mi] / dammy_total_max_measure_width * Math.min(total_width, dammy_total_max_measure_width);

            // If there is at least one measure which does not meet alternate threshold, then do not include rowdash
            var all_meets_thread = true;
            if (_rowdash == 0) {
              // First row is always fixed.
            } else {
              // For the case of 2 and more rows. Judge if combined rows meets the criteria.
              for (var rowdash2 = 0; rowdash2 <= _rowdash; ++rowdash2) {
                for (var _mi2 = 0; _mi2 < _num_meas; ++_mi2) {
                  var _mi_ref = getMeasRefIndex(_mi2, same_nmeas_row_group[rowdash2][0], _num_meas);
                  if (_mi_ref == null) continue;
                  // Calculate alter ratio for this measure
                  var alter_ratio = same_nmeas_row_group[rowdash2][1][_mi_ref].measure_width / dammy_max_measure_widths[_mi2];
                  //if(Math.abs(1.0 - alter_ratio) > alter_thresh){
                  if (alter_ratio < 1 - param.vertical_align_intensity) {
                    // only check how much the width is narrowed. Expanding case is not checked.
                    all_meets_thread = false;
                    break;
                  }
                }
                if (all_meets_thread == false) break;
              }
            }
            if (all_meets_thread) {
              max_measure_widths = dammy_max_measure_widths;
            } else {
              break;
            }
          }

          // Here rowdash means number of actually grouped rows
          var act_num_grouped_rows = _rowdash;

          //console.log("max_fixed_widths :");
          //console.log(max_measure_widths);

          //let max_measure_widths = new Array(num_meas).fill(0);
          // room per froom with maximum fixed with only

          // Then, at last, calculate the rooms for each row and measure
          var _loop = function _loop() {
            var x_width_info = same_nmeas_row_group[_rowdash][1];
            var row_elements_list = same_nmeas_row_group[_rowdash][0];
            var _loop2 = function _loop2() {
              var mi_ref = getMeasRefIndex(_mi4, row_elements_list, _num_meas);
              if (mi_ref == null) return "continue";
              var m = row_elements_list[mi_ref];
              var intra_meas_room_dist = 1;
              if (intra_meas_room_dist == 0) {
                // Type 0 : This is no good appropach as all waste the decision in previous stage
                var room_per_elem = (max_measure_widths[_mi4] - x_width_info[mi_ref].meas_fixed_width) / x_width_info[mi_ref].meas_num_flexible_rooms;
                m.renderprop.room_per_elem = new Array(x_width_info[mi_ref].meas_num_flexible_rooms).fill(room_per_elem);
              } else if (intra_meas_room_dist == 1) {
                // Type 1 : Proportional to fixed width
                var delta_total_room = max_measure_widths[_mi4] - x_width_info[mi_ref].measure_width;
                m.renderprop.room_per_elem = m.renderprop.room_per_elem.map(function (r, ii) {
                  var f_ratio = x_width_info[mi_ref].body_fixed_width_details[ii] / x_width_info[mi_ref].body_fixed_width;
                  return r + delta_total_room * f_ratio;
                });
              } else if (intra_meas_room_dist == 2) {
                // Constant offset approach
                var delta = (max_measure_widths[_mi4] - x_width_info[mi_ref].measure_width) / x_width_info[mi_ref].meas_num_flexible_rooms;
                m.renderprop.room_per_elem = m.renderprop.room_per_elem.map(function (r) {
                  return r + delta;
                });
              }
              m.renderprop.total_room = max_measure_widths[_mi4] - x_width_info[mi_ref].meas_fixed_width;
              m.renderprop.measure_width = max_measure_widths[_mi4];
              m.renderprop.meas_fixed_width = x_width_info[mi_ref].meas_fixed_width; // Actually this is already set
              m.renderprop.body_fixed_width = x_width_info[mi_ref].body_fixed_width;
              m.renderprop.meas_num_flexible_rooms = x_width_info[mi_ref].meas_num_flexible_rooms;
            };
            for (var _mi4 = 0; _mi4 < _num_meas; ++_mi4) {
              var _ret = _loop2();
              if (_ret === "continue") continue;
            }
          };
          for (_rowdash = 0; _rowdash < act_num_grouped_rows; ++_rowdash) {
            _loop();
          }
          // Set left margin in case it is needed.
          for (_rowdash = 0; _rowdash < act_num_grouped_rows; ++_rowdash) {
            var _row_elements_list2 = same_nmeas_row_group[_rowdash][0];
            var row_total_width = 0;
            for (var _mi3 = 0; _mi3 < _row_elements_list2.length; ++_mi3) {
              row_total_width += max_measure_widths[_mi3 + (max_measure_widths.length - _row_elements_list2.length)];
            }
            var m = _row_elements_list2[0];
            if (m.align == "right") {
              m.renderprop.left_margin = total_width - row_total_width;
            }
          }
          _row += act_num_grouped_rows;
          if (act_num_grouped_rows <= 0) {
            throw "Something wrong with the code";
          }
        }
      }
      if (param.inner_vertical_align) {
        // Further align inside the measure
        var _row2 = 0;
        var _loop3 = function _loop3() {
          var row_elements_list = reharsal_x_width_info[_row2][0];
          var x_width_info = reharsal_x_width_info[_row2][1]; // For number of measures
          row_elements_list.forEach(function (m, mi) {
            var ex = x_width_info[mi].all_fixed_width_details;
            var W = m.renderprop.measure_width; // Total measure width
            var L = m.renderprop.meas_num_flexible_rooms; // Num flex elements
            var flex_n = 0;
            var local_x = 0;
            var flex_x_cand = new Array(L);
            var room_force = new Array(L);
            var flex_ref_x = new Array(L);
            ex.forEach(function (exi, i) {
              if (exi.type == "fixed") {
                local_x += exi.f;
              } else {
                flex_ref_x[flex_n] = W / L * flex_n; // Reference position
                if (flex_n == 0) {
                  flex_x_cand[flex_n] = Math.max(local_x, flex_ref_x[flex_n]);
                } else {
                  flex_x_cand[flex_n] = flex_ref_x[flex_n];
                  room_force[flex_n - 1] = flex_x_cand[flex_n] - local_x;
                }
                local_x = flex_x_cand[flex_n] + exi.f;
                ++flex_n;
              }
            });
            room_force[L - 1] = W - local_x;
            // validation
            // eslint-disable-next-line no-constant-condition
            if (false) {}
            var org_room = m.renderprop.room_per_elem;

            // Serach maximum compressed element after forncing
            var Tc_min = 1000000;
            var Tc_max = -1000000;
            var Tc_org_min = 1000000;
            var Tc_org_max = -1000000;
            for (var l = 0; l < L; ++l) {
              var f = x_width_info[mi].body_fixed_width_details[l];
              var _c = (room_force[l] + f) / f;
              Tc_min = Math.min(_c, Tc_min);
              Tc_max = Math.max(_c, Tc_max);
              var corg = (org_room[l] + f) / f;
              Tc_org_min = Math.min(corg, Tc_org_min);
              Tc_org_max = Math.max(corg, Tc_org_max);
            }

            //let Tc = 1.0 - param.inner_vertical_align_intensity; 
            var HALF_INT_COMP = 1.0; // S
            var ZERO_INT_COMP = Math.max(Tc_max, Tc_org_max); // L
            //let Tc = HALF_INT_COMP * ( 1/param.inner_vertical_align_intensity - 1);
            var denom = ZERO_INT_COMP - 2 * HALF_INT_COMP;
            var c = HALF_INT_COMP / denom;
            var b = -HALF_INT_COMP * ZERO_INT_COMP / denom;
            var a = ZERO_INT_COMP * HALF_INT_COMP * (ZERO_INT_COMP - HALF_INT_COMP) / denom / denom;
            var Tc = a / (Number(param.inner_vertical_align_intensity) + c) + b;

            // Determining optimum alpha
            var max_widened = -10000000;
            var min_narrowed = 1000000;
            for (var _l = 0; _l < L; ++_l) {
              var _f = x_width_info[mi].body_fixed_width_details[_l];
              var rorg = org_room[_l];
              var rforce = room_force[_l];
              var diff = rforce - rorg;
              diff = Math.abs(diff) < 0.1 ? Math.sign(diff) * 0.001 : diff; // To avoid 0 division
              var alpha_d = ((Tc - 1.0) * _f - rorg) / diff;
              //console.log("Inner vertical alignment : " + diff.toFixed(2) + "/" +alpha_d.toFixed(2));
              // To cater for 
              if (diff >= 0) {
                // widended
                max_widened = Math.max(max_widened, alpha_d);
              } else {
                // narrowened
                min_narrowed = Math.min(min_narrowed, alpha_d);
              }
            }

            //console.log("Max widended alpha = " + max_widened + ", Min narrowened alpha = " + min_narrowed);

            var alpha = 1.0;
            if (max_widened > min_narrowed) {
              // Cannot not meet requirement for all elements, end up with alpha = 0.0 : Do nothing
              alpha = 0.0;
              //console.log("Inner vertical alignment : not all meets requirement : alpha = " + alpha.toFixed(2));
            } else {
              alpha = Math.max(0, Math.min(min_narrowed, 1));
              //console.log("Inner vertical alignment : all meets requirement : alpha = " + alpha.toFixed(2));
            }

            for (var _l2 = 0; _l2 < L; ++_l2) {
              m.renderprop.room_per_elem[_l2] = alpha * room_force[_l2] + (1 - alpha) * org_room[_l2];
              var _c2 = (x_width_info[mi].body_fixed_width_details[_l2] + m.renderprop.room_per_elem[_l2]) / x_width_info[mi].body_fixed_width_details[_l2];
              //console.log("c["+l+"]="+c.toFixed(2));
            }
          });

          ++_row2;
        };
        while (_row2 < reharsal_x_width_info.length) {
          _loop3();
        }
      }
    }
  }, {
    key: "mergeParam",
    value: function mergeParam(param, additional_param) {
      var takemax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Important to do this before merging, otherwise the offset_l|r|b|t value already configured remains to be used.
      this.setoffsetparam(additional_param);
      for (var _i = 0, _Object$entries = Object.entries(additional_param); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          param_key = _Object$entries$_i[0],
          param_value = _Object$entries$_i[1];
        if (param_key.includes("margin") && takemax) {
          param[param_key] = Math.max(param[param_key], param_value);
        } else {
          param[param_key] = param_value;
        }
      }

      // In case, no offset specifieed in additional_param, this still needed.
      this.setoffsetparam(param);
    }
  }, {
    key: "drawheader",
    value: function drawheader(canvas, param, stage, x, width, track) {
      var max_header_height = 0;

      // Title
      if (track.getVariable("TITLE")) {
        var ri = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + width / 2, param.y_title_offset, track.getVariable("TITLE"), param.title_font_size, "ct", null, stage == 1, {
          font: param.title_font
        });
        max_header_height = Math.max(max_header_height, param.y_title_offset + ri.height);
        this.hitManager.add(canvas, ri.bb, track.getVariableObject("TITLE"));
      }

      // Sub Title
      if (track.getVariable("SUB_TITLE")) {
        var _ri = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + width / 2, param.y_subtitle_offset, track.getVariable("SUB_TITLE"), param.subtitle_font_size, "ct", null, stage == 1);
        max_header_height = Math.max(max_header_height, param.y_subtitle_offset + _ri.height);
        this.hitManager.add(canvas, _ri.bb, track.getVariableObject("SUB_TITLE"));
      }

      // Artist
      if (track.getVariable("ARTIST")) {
        var _ri2 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + width, param.y_artist_offset, track.getVariable("ARTIST"), param.artist_font_size, "rt", null, stage == 1);
        max_header_height = Math.max(max_header_height, param.y_artist_offset + _ri2.height);
        this.hitManager.add(canvas, _ri2.bb, track.getVariableObject("ARTIST"));
      }
      return max_header_height;
    }
  }, {
    key: "renderImpl",
    value: function () {
      var _renderImpl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(track, rparam) {
        var _this3 = this;
        var param, page_width, page_content_width, show_footer, music_context, meas_row_list, accum_block_id, meas_row, meas_row_rg_ids, meas_row_block_ids, reharsal_groups, i, rg, blocks, bi, block_measures, ml, m, meas_row_list_inv, _loop4, _i2, _i3, _rg, _blocks, _bi, _block_measures, _ml, _m, y_stacks, next_reharsal_group_index, yse, y_base_screening, headerHeight, dammy_music_context, current_accum_block_id, reharsal_x_width_info, pei, row_elements_list, _ml2, _m2, elements, geret, yprof, x_width_info, page_height, pageOffset, start_pageidx, page_origin, canvas, y_base, max_header_height, headerH, pages, _pei, _row_elements_list3, ylimit, r, rb, songname, title, artist;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // parameter constructing. Parameter applicability order: Embeded track variable > Parameter specifed in render() call > Parameter specified in constructor
              param = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(this.init_param); // Merge parameter specified by render() call
              this.mergeParam(param, rparam, false);

              // firstly, merge global PARAM specified in the source.
              if (track.getVariable("PARAM")) {
                this.mergeParam(param, track.getVariable("PARAM"), false); // Merge to defaul param
              }
              page_width = param.paper_width / param.text_size / param.ncol;
              page_content_width = page_width - (param.x_offset_left + param.x_offset_right);
              show_footer = track.getVariable("SHOW_FOOTER") == "YES"; // Music context
              music_context = {
                accidental_info: {},
                key_info: {},
                time_info: {},
                tie_info: {
                  rs_prev_coord: null,
                  rs_prev_draw_scale: 1.0,
                  rs_prev_meas: null,
                  rs_prev_has_tie: false,
                  rs_prev_tie_paper: null,
                  prev_has_tie: false
                },
                pos_in_a_measure: 0,
                cumal_block_duration: 0,
                // Culmative duration of this blaken block.
                first_li: null,
                // length indicator of the first element amongcurrently stored elements. This shall be non-null other than first state
                in_tuplet: false // tuplet mode or not
              };
              meas_row_list = []; // Firstly, just split with new lines
              accum_block_id = 0;
              meas_row = [];
              meas_row_rg_ids = [];
              meas_row_block_ids = [];
              reharsal_groups = track.childNodes.filter(function (e) {
                return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.RehearsalGroup;
              });
              if (!(param.row_gen_mode == "default")) {
                _context2.next = 25;
                break;
              }
              for (i = 0; i < reharsal_groups.length; ++i) {
                rg = reharsal_groups[i];
                blocks = rg.childNodes.filter(function (e) {
                  return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Block;
                });
                for (bi = 0; bi < blocks.length; ++bi) {
                  block_measures = blocks[bi].childNodes.filter(function (e) {
                    return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Measure;
                  });
                  for (ml = 0; ml < block_measures.length; ++ml) {
                    m = block_measures[ml];
                    if (m.raw_new_line) {
                      meas_row_list.push({
                        meas_row: meas_row,
                        meas_row_rg_ids: meas_row_rg_ids,
                        meas_row_block_ids: meas_row_block_ids
                      });
                      meas_row = [];
                      meas_row_rg_ids = [];
                      meas_row_block_ids = [];
                    }
                    meas_row.push(m);
                    meas_row_rg_ids.push(i);
                    meas_row_block_ids.push(accum_block_id);
                  }
                  if (meas_row.length > 0) {
                    meas_row_list.push({
                      meas_row: meas_row,
                      meas_row_rg_ids: meas_row_rg_ids,
                      meas_row_block_ids: meas_row_block_ids
                    });
                    meas_row = [];
                    meas_row_rg_ids = [];
                    meas_row_block_ids = [];
                  }
                  accum_block_id++;
                }
              }
              // If there is inline rehearsal group, then combine the last row of the 
              // last rehearsal group  and first row of the rehearsal group
              // tmp variable : shallow copy of meas_row_list
              meas_row_list_inv = meas_row_list.slice().reverse();
              _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4(_i2) {
                var rg, dst_idx, src_idx, dst, src;
                return _regeneratorRuntime().wrap(function _loop4$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      rg = reharsal_groups[_i2];
                      if (rg.inline) {
                        dst_idx = meas_row_list_inv.findIndex(function (e) {
                          return e.meas_row_rg_ids.includes(_i2 - 1);
                        });
                        dst_idx = meas_row_list.length - 1 - dst_idx; // Convert to index for non-inversed array
                        src_idx = meas_row_list.findIndex(function (e) {
                          return e.meas_row_rg_ids.includes(_i2);
                        });
                        dst = meas_row_list[dst_idx];
                        src = meas_row_list[src_idx];
                        dst.meas_row = dst.meas_row.concat(src.meas_row);
                        dst.meas_row_rg_ids = dst.meas_row_rg_ids.concat(src.meas_row_rg_ids);
                        dst.meas_row_block_ids = dst.meas_row_block_ids.concat(src.meas_row_block_ids);
                        meas_row_list.splice(src_idx, 1); // Delete the first row
                        meas_row_list_inv = meas_row_list.slice().reverse();
                      }
                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }, _loop4);
              });
              _i2 = 0;
            case 18:
              if (!(_i2 < reharsal_groups.length)) {
                _context2.next = 23;
                break;
              }
              return _context2.delegateYield(_loop4(_i2), "t0", 20);
            case 20:
              ++_i2;
              _context2.next = 18;
              break;
            case 23:
              _context2.next = 26;
              break;
            case 25:
              if (param.row_gen_mode == "constant_n_meas") {
                for (_i3 = 0; _i3 < reharsal_groups.length; ++_i3) {
                  _rg = reharsal_groups[_i3];
                  _blocks = _rg.childNodes.filter(function (e) {
                    return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Block;
                  });
                  for (_bi = 0; _bi < _blocks.length; ++_bi) {
                    _block_measures = _blocks[_bi].childNodes.filter(function (e) {
                      return e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Measure;
                    });
                    for (_ml = 0; _ml < _block_measures.length; ++_ml) {
                      _m = _block_measures[_ml];
                      meas_row.push(_m);
                      meas_row_rg_ids.push(_i3);
                      meas_row_block_ids.push(accum_block_id);
                      if (meas_row.length == param.row_gen_n_meas) {
                        meas_row_list.push({
                          meas_row: meas_row,
                          meas_row_rg_ids: meas_row_rg_ids,
                          meas_row_block_ids: meas_row_block_ids
                        });
                        meas_row = [];
                        meas_row_rg_ids = [];
                        meas_row_block_ids = [];
                      }
                    }
                  }
                }
                if (meas_row.length > 0) {
                  meas_row_list.push({
                    meas_row: meas_row,
                    meas_row_rg_ids: meas_row_rg_ids,
                    meas_row_block_ids: meas_row_block_ids
                  });
                  meas_row = [];
                  meas_row_rg_ids = [];
                  meas_row_block_ids = [];
                }
              }
            case 26:
              // Make y-strack elements, and mark the rehearsal mark position
              y_stacks = [];
              next_reharsal_group_index = 0;
              meas_row_list.forEach(function (e, i) {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                  var meas_index = e.meas_row_rg_ids.findIndex(function (e) {
                    return e == next_reharsal_group_index;
                  });
                  if (meas_index < 0) break;
                  e.meas_row[meas_index].renderprop.rg_from_here = reharsal_groups[next_reharsal_group_index];
                  ++next_reharsal_group_index;
                }
                var prev_measures = i > 0 ? meas_row_list[i - 1].meas_row : null;
                var prev_measure = prev_measures ? prev_measures[prev_measures.legnth - 1] : null;
                var next_measures = i < meas_row_list.length - 1 ? meas_row_list[i + 1].meas_row : null;
                var next_measure = next_measures ? next_measures[0] : null;

                // Determine params to be applied for this. 
                // As of now, 
                var param_for_row = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(param);
                var param_for_row_alt = false;
                e.meas_row.forEach(function (m) {
                  var mparam = m.getVariable("PARAM");
                  if (mparam) {
                    if (!param_for_row_alt) {
                      _this3.mergeParam(param_for_row, _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(mparam), false); // Overwrite 
                      param_for_row_alt = true;
                    } else {
                      _this3.mergeParam(param_for_row, _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(mparam), true); // Update 
                    }
                  }
                });

                y_stacks.push({
                  type: "meas",
                  height: 0,
                  cont: e.meas_row,
                  rg_ids: e.meas_row_rg_ids,
                  block_ids: e.meas_row_block_ids,
                  nm: next_measure,
                  pm: prev_measure,
                  param: param_for_row
                });
              });

              // ---------------------
              // Stage 1 : Screening
              // ---------------------
              if (!this.memCanvas) {
                // Canvas on memory for screening
                // TODO : Canvas height 400 is enough ?
                this.memCanvas = document.createElement("canvas");
                _graphic__WEBPACK_IMPORTED_MODULE_3__.setupHiDPICanvas(this.memCanvas, param.paper_width / param.text_size, 400 / param.text_size,
                /// 400 is dammy
                param.pixel_ratio, param.text_size);
              }
              yse = y_stacks;
              y_base_screening = 0;
              headerHeight = this.drawheader(this.memCanvas, param, 1, 0, 100, track); // x position, width is dammy, as only height information is important.
              if (headerHeight > 0) {
                y_base_screening += headerHeight;
                y_base_screening += headerHeight > 0 ? param.y_header_margin : 0;
              } else {
                y_base_screening += param.y_offset_top;
              }
              dammy_music_context = _common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(music_context); // Maybe not required ?
              current_accum_block_id = 0;
              reharsal_x_width_info = [];
              pei = 0;
            case 38:
              if (!(pei < yse.length)) {
                _context2.next = 52;
                break;
              }
              if (!(yse[pei].type == "titles")) {
                _context2.next = 41;
                break;
              }
              return _context2.abrupt("continue", 49);
            case 41:
              //let x = yse[pei].param.x_offset_left;

              if (!yse[pei].block_ids.includes(current_accum_block_id)) {
                // Per block optimization
                this.determineRooms(yse[pei].param, reharsal_x_width_info, page_content_width);
                current_accum_block_id = yse[pei].block_ids[0]; // First block ID is the reference block id
                reharsal_x_width_info = [];
              }
              row_elements_list = yse[pei].cont; // Screening music contexts and determine grouping in body elements
              // For each measure in this row
              for (_ml2 = 0; _ml2 < row_elements_list.length; ++_ml2) {
                // measure object
                _m2 = row_elements_list[_ml2];
                elements = this.classifyElements(_m2); // Too much call of calssify elements.
                // Grouping body elements which share the same balken
                geret = this.determineBodyElementGrouping(elements.body);
                _m2.renderprop.body_grouping_info = geret;
              }

              // y-screening is done in stage 2 as well : TODO : Make it once
              // Do it in the dammy position y = 0;
              yprof = this.screeningYAreas(row_elements_list, 0, yse[pei].param, yse[pei].cont[0].getVariable("SHOW_STAFF"), yse[pei].cont[0].getVariable("REHARSAL_MARK_POSITION") == "Inner"); // yprof.end.y means the row total height
              y_base_screening += yprof.end.y;

              // Screening x elements and determine the rendering policy for x-axis.
              x_width_info = this.screeningzXAreas(track, 0,
              // dammy x position as it is not a matter
              this.memCanvas, row_elements_list, yse[pei].pm, yse[pei].nm, yprof, yse[pei].param, dammy_music_context);
              reharsal_x_width_info.push([row_elements_list, x_width_info]);
              if (pei == yse.length - 1) {
                // Per block optimization
                this.determineRooms(yse[pei].param, reharsal_x_width_info, page_content_width);
              }
            case 49:
              ++pei;
              _context2.next = 38;
              break;
            case 52:
              y_base_screening += param.y_offset_bottom; // Here y_base_screening means the height of the total score if single page applied.
              if (show_footer) y_base_screening += param.y_footer_offset;

              // Release memCanvas
              _graphic__WEBPACK_IMPORTED_MODULE_3__.releaseCanvas(this.memCanvas);
              this.memCanvas = null;

              // ----------------------
              // Stage 2 : Rendering
              // ----------------------
              page_height = param.paper_height > 0 ? param.paper_height / param.text_size / param.nrow : y_base_screening;
              pageOffset = function pageOffset(pageidx) {
                var r = Math.floor(pageidx / param.ncol) % param.nrow;
                var c = pageidx % param.ncol;
                //let page_width  = param.paper_width / param.text_size / param.ncol;
                //let page_height = param.paper_height / param.text_size / param.nrow;
                return {
                  x: page_width * c,
                  y: page_height * r
                };
              };
              start_pageidx = this.context.pageidx;
              page_origin = param.paper_height > 0 ? pageOffset(this.context.pageidx) : {
                x: 0,
                y: 0
              };
              if (!(this.context.pageidx % (param.ncol * param.nrow) == 0)) {
                _context2.next = 72;
                break;
              }
              canvas = this.canvas;
              if (!(canvas == null)) {
                _context2.next = 66;
                break;
              }
              _context2.next = 65;
              return this.canvas_provider();
            case 65:
              canvas = _context2.sent;
            case 66:
              _graphic__WEBPACK_IMPORTED_MODULE_3__.setupHiDPICanvas(canvas, param.paper_width / param.text_size,
              // Internally, canvas size is set to this value * zoom, then eventually equals to param.paper_height.
              param.paper_height > 0 ? param.paper_height / param.text_size : y_base_screening, param.pixel_ratio, param.text_size);
              if (param.background_color) _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasRect(canvas, 0, 0, param.paper_width / param.text_size, param.paper_height > 0 ? param.paper_height / param.text_size : y_base_screening, param.background_color);
              this.context.current_canvas = canvas;
              this.hitManager.setGlobalScale(param.text_size, param.text_size);
              _context2.next = 73;
              break;
            case 72:
              if (this.context.current_canvas.zoom != param.text_size) {
                // text_size is changed  from the previous score drawing. This can happen when ncol and/or nrow > 1
                // Only change the zooming configuration.
                _graphic__WEBPACK_IMPORTED_MODULE_3__.setupHiDPICanvas(this.context.current_canvas, 0,
                // not used
                0,
                // not used
                param.pixel_ratio, param.text_size, true);
                this.hitManager.setGlobalScale(param.text_size, param.text_size);
              }
            case 73:
              y_base = page_origin.y;
              max_header_height = this.drawheader(this.context.current_canvas, param, 2, page_origin.x + param.x_offset_left, page_content_width, track);
              if (max_header_height > 0) {
                y_stacks.push({
                  type: "titles",
                  height: max_header_height + param.y_header_margin
                });
                y_base += max_header_height + param.y_header_margin;
              } else {
                y_base += param.y_offset_top;
              }
              headerH = y_base - page_origin.y;
              this.hitManager.add(this.context.current_canvas, new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(0, page_origin.y - Math.max(0, 2 - headerH), page_width, Math.max(2, headerH)), new _common_common__WEBPACK_IMPORTED_MODULE_2__.GenericRow("HEADER", null));
              pages = [{
                canvas: this.context.current_canvas
              }];
              _pei = 0;
            case 80:
              if (!(_pei < yse.length)) {
                _context2.next = 111;
                break;
              }
              if (!(yse[_pei].type == "titles")) {
                _context2.next = 84;
                break;
              }
              _context2.next = 108;
              break;
            case 84:
              if (!(yse[_pei].type == "meas")) {
                _context2.next = 108;
                break;
              }
              _row_elements_list3 = yse[_pei].cont;
              ylimit = this.canvas_provider != null ? page_origin.y + page_height - yse[_pei].param.y_offset_bottom - (show_footer ? yse[_pei].param.y_footer_offset : 0) : null;
              r = this.renderMeasureRow(track, page_origin.x + param.x_offset_left, this.context.current_canvas, _row_elements_list3, yse[_pei].pm, yse[_pei].nm, y_base, yse[_pei].param, yse[_pei].cont[0].getVariable("REHARSAL_MARK_POSITION") == "Inner", ylimit, music_context);
              if (r) {
                _context2.next = 105;
                break;
              }
              if (!(y_base == page_origin.y + yse[_pei].param.y_offset_top)) {
                _context2.next = 91;
                break;
              }
              throw "Paper height is too short to fit in single row";
            case 91:
              // increment the page
              ++this.context.pageidx;
              page_origin = pageOffset(this.context.pageidx);
              y_base = page_origin.y + yse[_pei].param.y_offset_top;
              if (!(this.context.pageidx % (param.ncol * param.nrow) == 0)) {
                _context2.next = 101;
                break;
              }
              this.hitManager.commit(this.context.current_canvas);
              _context2.next = 98;
              return this.canvas_provider();
            case 98:
              this.context.current_canvas = _context2.sent;
              _graphic__WEBPACK_IMPORTED_MODULE_3__.setupHiDPICanvas(this.context.current_canvas, yse[_pei].param.paper_width / param.text_size, yse[_pei].param.paper_height / param.text_size, param.pixel_ratio, param.text_size);
              if (param.background_color) _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasRect(this.context.current_canvas, 0, 0, param.paper_width / param.text_size, param.paper_height / param.text_size, param.background_color);
            case 101:
              pages.push({
                canvas: this.context.current_canvas
              });

              // try again next page
              _pei = _pei - 1;
              _context2.next = 108;
              break;
            case 105:
              if (r.rm_detected) {
                rb = [_row_elements_list3[0], _row_elements_list3[_row_elements_list3.length - 1]];
                if (_row_elements_list3[0].renderprop.rg_from_here) rb[0] = _row_elements_list3[0].renderprop.rg_from_here;
                this.hitManager.add(this.context.current_canvas, new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(0, y_base, param.paper_width / param.text_size, r.mu_y - y_base), new _common_common__WEBPACK_IMPORTED_MODULE_2__.GenericRow("RM", rb));
              }
              this.hitManager.add(this.context.current_canvas, new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(0, r.mu_y, param.paper_width / param.text_size, r.y_base - r.mu_y), new _common_common__WEBPACK_IMPORTED_MODULE_2__.GenericRow("BODY", [_row_elements_list3[0], _row_elements_list3[_row_elements_list3.length - 1]]));
              y_base = r.y_base;
            case 108:
              ++_pei;
              _context2.next = 80;
              break;
            case 111:
              if (show_footer) {
                songname = null;
                title = track.getVariable("TITLE");
                artist = track.getVariable("ARTIST");
                if (title) {
                  songname = title;
                  if (artist) songname += "/" + artist;
                }

                //var score_width = param.paper_width / param.text_size / param.ncol;
                pages.forEach(function (page, l_pageidx) {
                  // Page number footer
                  page_origin = pageOffset(l_pageidx + start_pageidx);
                  var footerstr = (songname ? songname + " - " : "") + (l_pageidx + 1) + " of " + pages.length;
                  _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(page.canvas, page_origin.x + page_width / 2, page_origin.y + page_height - param.y_footer_offset, footerstr, 12, "ct");
                });
              }

              // Increment for next session(if any)
              ++this.context.pageidx;
              this.hitManager.commit(this.context.current_canvas);
              return _context2.abrupt("return", {
                pages: _common_common__WEBPACK_IMPORTED_MODULE_2__.shallowcopy(pages)
              });
            case 115:
            case "end":
              return _context2.stop();
          }
        }, _callee, this);
      }));
      function renderImpl(_x2, _x3) {
        return _renderImpl.apply(this, arguments);
      }
      return renderImpl;
    }()
  }, {
    key: "screeningYAreas",
    value: function screeningYAreas(row_elements_list, y_base, param, show_staff, inner_reharsal_mark) {
      var ycomps = ["rm", "mu", "body", "rs", "ml", "irm", "end"];
      var yprof = {
        rm: {
          detected: false,
          height: param.rm_area_height,
          margin: [param.rm_margin_top, param.rm_margin_bottom]
        },
        // Rhearsal mark if any
        mu: {
          detected: false,
          height: param.mu_area_height,
          margin: [param.mu_margin_top, param.mu_margin_bottom]
        },
        body: {
          detected: true,
          height: param.row_height,
          margin: [param.margin_top, param.margin_bottom]
        },
        rs: {
          detected: false,
          height: param.rs_area_height,
          margin: [param.rs_margin_top, param.rs_margin_bottom]
        },
        ml: {
          detected: false,
          height: param.ml_row_height,
          margin: [param.ml_margin_top, param.ml_margin_bottom]
        },
        irm: {
          detected: true,
          height: param.row_margin,
          margin: [0, 0]
        },
        // Virtual row represeinting fixed inter-row margin
        end: {
          detected: true,
          height: 0,
          margin: [0, 0]
        } // Vitrual row representing start of end of row = start of next row
      };

      var lyric_rows = 0;

      //var draw_5line = false;
      if (show_staff == "YES") {
        yprof.rs.detected = true;
      }

      // Screening of y-axis areas
      var rg_mark_detected = false;
      var fixed_mu_elem_detected = false;
      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var m = row_elements_list[ml];
        if (m.renderprop && m.renderprop.rg_from_here && m.renderprop.rg_from_here.name != "")
          // Anonymous rehearsal group is not rendered
          rg_mark_detected = true;
        for (var ei = 0; ei < m.childNodes.length; ++ei) {
          var e = m.childNodes[ei];
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.ToCoda || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DalSegno || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DaCapo || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Fine) {
            // Provisinally, judged as mu element. In case of RS detected, it will goes to body area.
            yprof.mu.detected = true;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Coda || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Segno || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Comment || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.LoopIndicator) {
            yprof.mu.detected = true;
            fixed_mu_elem_detected = true;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.MeasureBoundary) {
            yprof.ml.detected = yprof.ml.detected || e.times != null && (e.ntimes || e.times != 2);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Chord) {
            yprof.rs.detected |= e.note_group_list !== null;
            if (e.exceptinal_comment && !e.isSyncopatedSource()) {
              yprof.mu.detected = true;
              fixed_mu_elem_detected = true;
            }
            if (e.lyric && !e.isSyncopatedSource()) {
              yprof.ml.detected = true;
              lyric_rows = Math.max(e.lyric.lyric.split("/").length, lyric_rows);
            }
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Lyric) {
            throw "Illegal parsing";
          }
        }
      }
      if (show_staff == "NO") {
        yprof.rs.detected = false;
      }

      // Adjust mu area elements in case of RS area detected
      if (yprof.rs.detected) {
        if (!fixed_mu_elem_detected) {
          yprof.mu.detected = false; // Reset it !
        }
      }

      if (rg_mark_detected) {
        if (inner_reharsal_mark) {
          yprof.mu.detected = true; // In MU area
        } else {
          yprof.rm.detected = true; // dedecated rehardsal mark region
        }
      }

      // Calculate yposition  for each area
      for (var i = 0; i < ycomps.length; ++i) {
        var name = ycomps[i];
        var prev = i > 0 ? ycomps[i - 1] : null;
        // Here y is the start of body element, not upper edge
        yprof[name].y = i == 0 ? y_base : yprof[prev].y - yprof[prev].margin[0] + yprof[prev].whole_height + yprof[name].margin[0];
        if (!yprof[name].detected) {
          yprof[name].whole_height = 0;
        } else {
          if (name == "ml") {
            yprof[name].whole_height = Math.max(1, lyric_rows) * yprof[name].height + yprof[name].margin[0] + yprof[name].margin[1]; // multiplied by lyric ros
          } else {
            yprof[name].whole_height = yprof[name].height + yprof[name].margin[0] + yprof[name].margin[1];
          }
        }
      }
      return yprof;
    }
  }, {
    key: "screeningzXAreas",
    value: function screeningzXAreas(track, x, paper, row_elements_list, prev_measure, next_measure, yprof, param, music_context) {
      var _this4 = this;
      var transpose = track.getVariable("TRANSPOSE");
      var half_type = track.getVariable("KEY_TYPE");
      var key = track.getVariable("KEY");
      var dammy_rs_area_height = 24; // any value is ok

      // Determine the width of each measure
      var x_width_info = []; // for number of measures
      var _loop5 = function _loop5(ml) {
        // Reset music context
        music_context.pos_in_a_measure = 0; // reset
        music_context.cumal_block_duration = 0;
        music_context.first_li = null;
        music_context.in_tuplet = false;
        // TODO : consider key infomration
        // TODO : consider tie
        // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
        music_context.accidental_info = new Array(128).fill(0);

        // measure object
        var m = row_elements_list[ml];
        var meas_fixed_width = 0;
        meas_num_flexible_rooms = 0;
        all_fixed_width_details = [];
        elements = _this4.classifyElements(m);
        elements.header.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.MeasureBoundary) {
            var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
            var ne = pm ? pm.childNodes[pm.childNodes.length - 1] : null;
            var r = _this4.drawBoundary("begin", ne, e, ml == 0,
            //m.raw_new_line,
            paper, x, 0, dammy_rs_area_height,
            // any value is OK
            dammy_rs_area_height, param, false);
            meas_fixed_width += r.width;
            all_fixed_width_details.push({
              type: "fixed",
              f: r.width
            });
            e.renderprop = {
              w: r.width
            };
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Time) {
            var w = 12;
            meas_fixed_width += w;
            all_fixed_width_details.push({
              type: "fixed",
              f: w
            });
            e.renderprop = {
              w: w
            };
          }
        });
        meas_fixed_width += param.header_body_margin;
        all_fixed_width_details.push({
          type: "fixed",
          f: param.header_body_margin
        });
        rberet = _this4.renderBodyElements(false, x, elements, param, music_context, yprof, paper, 0, 0 /*meas_start_x*/, m, 1, transpose, half_type, key, 0, 0);
        meas_fixed_width += rberet.fixed_width;
        meas_num_flexible_rooms += rberet.num_flexible_rooms;
        all_fixed_width_details = all_fixed_width_details.concat(rberet.fixed_width_details);
        meas_fixed_width += param.body_footer_margin;
        all_fixed_width_details.push({
          type: "fixed",
          f: param.body_footer_margin
        });

        // Draw footer
        elements.footer.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.MeasureBoundary) {
            var nm = ml == row_elements_list.length - 1 ? next_measure : row_elements_list[ml + 1];
            var ne = nm ? nm.childNodes[0] : null;
            var r = _this4.drawBoundary("end", e, ne, ml == row_elements_list.length - 1,
            //nm ? nm.raw_new_line : false,
            paper, x, 0, dammy_rs_area_height, dammy_rs_area_height, param, false);
            e.renderprop = {
              w: r.width
            };
            meas_fixed_width += r.width;
            all_fixed_width_details.push({
              type: "fixed",
              f: r.width
            });
            // eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DaCapo) {
            // eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DalSegno) {
            // eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.ToCoda) {
            // eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Fine) {}
        });
        x_width_info.push({
          meas_fixed_width: meas_fixed_width,
          body_fixed_width: rberet.fixed_width,
          body_fixed_width_details: rberet.fixed_width_details.map(function (e) {
            return e.f;
          }),
          all_fixed_width_details: all_fixed_width_details,
          meas_num_flexible_rooms: meas_num_flexible_rooms
        });
      };
      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var meas_num_flexible_rooms, all_fixed_width_details, elements, rberet;
        _loop5(ml);
      }
      return x_width_info;
    }
  }, {
    key: "renderBodyElements",
    value: function renderBodyElements(draw, x, elements, param, music_context, yprof, paper, _5lines_intv, meas_start_x, m, x_global_scale, transpose, half_type, key, C7_width, y_body_or_rs_base, balken) {
      var _this5 = this;
      var fixed_width = 0;
      var fixed_width_details = []; // show be same as num_flexible_rooms
      var num_flexible_rooms = 0;

      /**
       * Explanation for scaling policy
       * In fumen, x-axis scaling is applied when there is no enough space to an element fit in without compressing it.
       * In case scaling is applied by getnContext("2d").scale funcation, developer should aware followings :
       *    1) The absolute position needs to be modified according to the applied scaling factor. 
       *       For example, scaling of 0.25 applied, to draw something at point 100 on the screen, you need to 
       *       draw it at 100/0.25 = 400. 
       *    2) Once scaling apply, you "don't" need to concious about how much of compression/widening is required 
       *       when to draw a grlyph. The system automatically scale it while your can write as if there is no scaling apply.
       *       That means no need to care about scaling in its drawing code.
       *       However, your need to be careful about the absolute point (see 1) if the actual position drawn is important.
       *       You don't need to be concious about the relative positions.
       *    3) Treatment of x-positions with differnt scalings.
       *       Length of W drawn with scaling S is corresponds to the length of W*S when no scaling applied or on screen length.
       *       The arithmetic opration of positions or widths should be always done among those scaling is not applied.
       *    4) Inter-connected drawing of elements with differnt scaling applies. e.g. balkens, ties.
       *       This is kind of the most difficult part. Rdnering engine needs to be concious about the difference.
       *       For the balken case, the fundamenta question is which scaling should be taken as a baseline ? 
       *       If balken needs to be drawn e.g. S=0.5 and S=1.0
       */

      var scale = function scale(fixed_per_elem, room_per_elem) {
        var only_estm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var draw_scale = (room_per_elem + fixed_per_elem) / fixed_per_elem;
        var new_room_per_elem = draw_scale < 1 ? 0 : room_per_elem;
        draw_scale = draw_scale < 1 ? draw_scale : 1.0;
        var elem_width = fixed_per_elem * draw_scale + new_room_per_elem;
        if (!only_estm) paper.getContext("2d").scale(draw_scale, 1);
        return [draw_scale, elem_width];
      };
      var unscale = function unscale(draw_scale) {
        paper.getContext("2d").scale(1 / draw_scale, 1);
      };
      if (elements.body.length == 0) {
        if (draw) {
          var _scale = scale(1 * param.base_font_size, m.renderprop.total_room),
            _scale2 = _slicedToArray(_scale, 2),
            draw_scale = _scale2[0],
            elem_width = _scale2[1];
          x += elem_width;
          unscale(draw_scale);
        } else {
          fixed_width += 1 * param.base_font_size;
          fixed_width_details.push({
            type: "flex",
            f: 1 * param.base_font_size
          });
          num_flexible_rooms++;
        }
      }
      var this_group_start_index = 0; // used only for draw phase. Used for index room_per_elem.

      var body_grouping_info = m.renderprop.body_grouping_info;
      body_grouping_info.groupedBodyElems.forEach(function (element_group, gbei) {
        // Draw Rythm Slashes, first
        if (yprof.rs.detected && body_grouping_info.all_has_length) {
          var _draw_scale = 1.0;
          var room_for_rs_per_elem = 0;
          var element_group_width = 0;
          var room_for_rs = 0;
          if (draw) {
            if (element_group.renderprop.based_on_rs_elem) {
              // Element group width is determined based on RS elements
              for (var ei = 0; ei < element_group.elems.length; ++ei) room_for_rs += m.renderprop.room_per_elem[this_group_start_index + ei];
              room_for_rs_per_elem = room_for_rs / element_group.elems.length; // TODO : Improve non constant div

              // Scaling for chord area.
              var _scale3 = scale(element_group.renderprop.cr_width, element_group.renderprop.rs_area_width + room_for_rs - element_group.renderprop.cr_width);
              var _scale4 = _slicedToArray(_scale3, 2);
              _draw_scale = _scale4[0];
              element_group_width = _scale4[1];
              this_group_start_index += element_group.elems.length;
            } else {
              // Element group width is determined based on first chord element
              room_for_rs = element_group.renderprop.w + m.renderprop.room_per_elem[this_group_start_index] - element_group.renderprop.rs_area_width;
              room_for_rs_per_elem = room_for_rs / element_group.elems.length;

              // Scaling for chord area.
              var _scale5 = scale(element_group.renderprop.cr_width, m.renderprop.room_per_elem[this_group_start_index]);
              var _scale6 = _slicedToArray(_scale5, 2);
              _draw_scale = _scale6[0];
              element_group_width = _scale6[1];
              this_group_start_index += 1;
            }
          }
          var e0 = element_group.elems[0];
          var cr = {
            width: 0
          };
          if (e0 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Chord && !e0.isSyncopatedSource()) {
            cr = _this5.renderChord(draw, e0, transpose, half_type, key, paper, x / _draw_scale, yprof.body.y, param, C7_width);
            if (draw) _this5.hitManager.add(paper, cr.bb.scale(_draw_scale, 1), e0);
            if (draw && e0.exceptinal_comment !== null) {
              var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x / _draw_scale, yprof.mu.y + yprof.mu.height, e0.exceptinal_comment.comment, param.base_font_size / 2, "lb");
              _this5.hitManager.add(paper, r.bb.scale(_draw_scale, 1), e0.exceptinal_comment);
            }
            if (draw && e0.lyric !== null) {
              var llist = e0.lyric.lyric.split("/");
              for (var li = 0; li < llist.length; ++li) {
                var _r2 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x / _draw_scale, yprof.ml.y + li * param.ml_row_height, llist[li], param.base_font_size / 3, "lt");
                _this5.hitManager.add(paper, _r2.bb.scale(_draw_scale, 1), e0.lyric);
              }
            }
          } else {
            // Rest or Simile or SyncopatedSource chord
            // Rest is drawn in render_rs_area function in RS area
            cr = {
              width: 0
            };
          }
          if (draw) {
            // Unscale for chord area
            unscale(_draw_scale);

            // Scale for RS area
            // Estimation only and actual scaling will be done in the render_rs_area function and its callee
            // Only estimation actual scaing not apply
            var _scale7 = scale(element_group.renderprop.rs_area_width, room_for_rs, true);
            var _scale8 = _slicedToArray(_scale7, 2);
            _draw_scale = _scale8[0];
            element_group_width = _scale8[1];
            var g = _this5.renderRsArea(x,
            // does not scale, all the scaing things are processed inside this function
            _draw_scale, element_group.elems, paper, yprof.rs.y, yprof.rs.height, meas_start_x,
            // NOTE : meas_start_x sould be irrespective of draw_scale.
            music_context, m, param, _draw_scale < 1 ? 0 : room_for_rs_per_elem,
            // on-screen coordinate
            balken, gbei == body_grouping_info.groupedBodyElems.length - 1);
            x += element_group_width;

            // unscale(draw_scale); // No need to unscale as all the scaling procedure is enclosed in the above function
          } else {
            var rs_area_bounding_box = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
            // Only try to esimate using non-flag-balken drawer
            var tmp_fixed_width_details = [];
            element_group.elems.forEach(function (e) {
              var balken_element = _this5.generateBalkenElement(e, x, yprof.rs.height, music_context);
              var r = _this5.drawRsAreaWithoutFlagBalken(false, paper, param, e, balken_element, x, yprof.rs.y, yprof.rs.height);
              e.renderprop.balken_element = balken_element;
              rs_area_bounding_box.add_BB(r.bounding_box);
              x += r.bounding_box.width();
              tmp_fixed_width_details.push({
                type: "flex",
                f: r.bounding_box.width()
              });
            });
            var rs_area_width = rs_area_bounding_box.get().w;
            // To select which (chord or RS area element) to be selected as a elemng group 
            var choice = null;
            if (param.master_elem_selection == "default") {
              choice = rs_area_width > cr.width ? "rs" : "chord";
            } else {
              choice = param.master_elem_selection; // "rs" or "chord";
            }

            element_group.renderprop.w = choice == "rs" ? rs_area_width : cr.width;
            element_group.renderprop.cr_width = cr.width;
            element_group.renderprop.rs_area_width = rs_area_width;
            element_group.renderprop.based_on_rs_elem = choice == "rs";
            fixed_width += element_group.renderprop.w;
            fixed_width_details = fixed_width_details.concat(choice == "rs" ? tmp_fixed_width_details : [{
              type: "flex",
              f: cr.width
            }]);
            num_flexible_rooms += choice == "rs" ? element_group.elems.length : 1;
          }
        } else {
          element_group.elems.forEach(function (e, ei) {
            if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Chord) {
              var _draw_scale2 = 1.0,
                _elem_width = 0.0;
              if (draw) {
                var _scale9 = scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index + ei]);
                var _scale10 = _slicedToArray(_scale9, 2);
                _draw_scale2 = _scale10[0];
                _elem_width = _scale10[1];
              }
              var _cr = _this5.renderChord(draw, e, transpose, half_type, key, paper, x / _draw_scale2, yprof.body.y, param, C7_width);
              if (draw && e.exceptinal_comment !== null && !e.isSyncopatedSource()) {
                var _r3 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x / _draw_scale2, yprof.mu.y + yprof.mu.height, e.exceptinal_comment.comment, param.base_font_size / 2, "lb");
                _this5.hitManager.add(paper, _r3.bb.scale(_draw_scale2, 1), e.exceptinal_comment);
              }
              if (draw && e.lyric !== null && !e.isSyncopatedSource()) {
                var llist = e.lyric.lyric.split("/");
                for (var li = 0; li < llist.length; ++li) {
                  var _r4 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x / _draw_scale2, yprof.ml.y + li * param.ml_row_height, llist[li], param.base_font_size / 3, "lt");
                  _this5.hitManager.add(paper, _r4.bb.scale(_draw_scale2, 1), e.lyric);
                }
              }
              if (draw) {
                x += _elem_width;
                unscale(_draw_scale2);
                _this5.hitManager.add(paper, _cr.bb.scale(_draw_scale2, 1), e); // BBbox scaled to convert back to on-screen coordinate
              } else {
                e.renderprop.w = _cr.width; // cr.bb.width(); TODO: Do not use bb.width as it only works for draw=True
                fixed_width += e.renderprop.w;
                fixed_width_details.push({
                  type: "flex",
                  f: e.renderprop.w
                });
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Rest) {
              var _draw_scale3 = 1.0,
                _elem_width2 = 0.0;
              if (draw) {
                var _scale11 = scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index + ei]);
                var _scale12 = _slicedToArray(_scale11, 2);
                _draw_scale3 = _scale12[0];
                _elem_width2 = _scale12[1];
              }
              var _cr2 = _this5.renderRest(e, paper, draw, x / _draw_scale3, y_body_or_rs_base, "l", yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param);
              if (draw) {
                x += _elem_width2;
                _this5.hitManager.add(paper, _cr2.bb.scale(_draw_scale3, 1), e);
                unscale(_draw_scale3);
              } else {
                e.renderprop.w = _cr2.bb.width();
                fixed_width += e.renderprop.w;
                fixed_width_details.push({
                  type: "flex",
                  f: e.renderprop.w
                });
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Simile) {
              var _draw_scale4 = 1.0,
                _elem_width3 = 0.0;
              if (draw) {
                var _scale13 = scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index + ei]);
                var _scale14 = _slicedToArray(_scale13, 2);
                _draw_scale4 = _scale14[0];
                _elem_width3 = _scale14[1];
              }
              var _cr3 = _this5.renderSimileMark(draw, paper, x / _draw_scale4, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, e.numslash, false, "l");
              if (draw) {
                x += _elem_width3;
                _this5.hitManager.add(paper, _cr3.bb.scale(_draw_scale4, 1), e);
                unscale(_draw_scale4);
              } else {
                e.renderprop.w = _cr3.width;
                fixed_width += e.renderprop.w;
                fixed_width_details.push({
                  type: "flex",
                  f: e.renderprop.w
                });
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Space) {
              var _draw_scale5 = 1.0,
                _elem_width4 = 0.0;
              if (draw) {
                var _scale15 = scale(e.renderprop.w, m.renderprop.room_per_elem[this_group_start_index + ei]);
                var _scale16 = _slicedToArray(_scale15, 2);
                _draw_scale5 = _scale16[0];
                _elem_width4 = _scale16[1];
              }
              if (draw) {
                _this5.hitManager.add(paper, new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(x, yprof.body.y, e.renderprop.w, param.row_height), e);
                x += _elem_width4;
                unscale(_draw_scale5);
              } else {
                var _r5 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, 0, 0, "M", param.base_font_size, "lt", 0.5 * param.base_font_size, true, null); // width parameter needs to be aligned with chord rendering
                e.renderprop.w = e.length * _r5.width;
                fixed_width += e.renderprop.w;
                fixed_width_details.push({
                  type: "flex",
                  f: e.renderprop.w
                });
                num_flexible_rooms++;
              }
            }
          });
          if (draw) this_group_start_index += element_group.elems.length; // This count should be same as num_flexible_rooms;
        }
      });

      return {
        x: x,
        fixed_width: fixed_width,
        num_flexible_rooms: num_flexible_rooms,
        fixed_width_details: fixed_width_details
      };
    }
  }, {
    key: "determineBodyElementGrouping",
    value: function determineBodyElementGrouping(body_elements) {
      // First, guess chord duration here.
      // In current version, each chord in the measure is assumed to have the same duration.
      // TODO : Improve based on number of spaces or duration indication mark.
      var all_has_length = true;
      var chord_name_str = null;
      var sum_length = 0;
      var rest_or_long_rests_detected = false;
      body_elements.forEach(function (e) {
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Space) return;
        all_has_length &= e.note_group_list !== null;
        if (all_has_length) sum_length += e.note_group_list[0].lengthIndicator.length;
        rest_or_long_rests_detected |= e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Rest;
      });
      var tmpl = {
        elems: [],
        groupedChordsLen: 0,
        renderprop: {}
      };
      var groupedBodyElems = [];
      if (body_elements.length > 0) groupedBodyElems.push(_common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(tmpl));
      var gbei = 0;

      // Grouping the chord and notes among which the x-axis rooms are shared
      // grouping is just done whether same chord is sahred.
      // If this measure starts with Rest/Simle, then following Rests and chord without chord 
      // name are regarded as in the same group.
      // IF this measure starts with Chord with no name, then folowing Rests/Similre and Chords 
      // with no names are grouped in the same group.
      body_elements.forEach(function (e, ei) {
        var this_chord_str = "";
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Chord) {
          this_chord_str = e.chord_name_str;
        } else {
          this_chord_str = ""; // Rests, Simile(in body) and Space are regarded as empty chord
        }

        if (chord_name_str === null) chord_name_str = this_chord_str;
        if (groupedBodyElems[gbei].elems.length == 0) {
          // Keep in the same group
        } else if (all_has_length && (this_chord_str == chord_name_str || this_chord_str == "" && chord_name_str != "")) {
          // Keep in the same group
        } else {
          // flush
          groupedBodyElems.push(_common_common__WEBPACK_IMPORTED_MODULE_2__.deepcopy(tmpl));
          ++gbei;
          chord_name_str = this_chord_str;
        }
        groupedBodyElems[gbei].elems.push(e);
      });
      return {
        groupedBodyElems: groupedBodyElems,
        all_has_length: all_has_length
      };
    }
  }, {
    key: "renderMeasureRow",
    value: function renderMeasureRow(track, x, paper, row_elements_list, prev_measure, next_measure, y_base, param, inner_reharsal_mark, ylimit, music_context) {
      var _this6 = this;
      var x_global_scale = track.getVariable("X_GLOBAL_SCALE");
      var transpose = track.getVariable("TRANSPOSE");
      var half_type = track.getVariable("KEY_TYPE");
      var key = track.getVariable("KEY");
      var show_staff = track.getVariable("SHOW_STAFF");

      /* Reference reserved width for empty measures or chord symbol without base names*/
      var C7_width = 20;

      // interval of 5 lines
      var _5lines_intv = param.rs_area_height / (5 - 1);
      var yprof = this.screeningYAreas(row_elements_list, y_base, param, show_staff, inner_reharsal_mark);
      var y_body_or_rs_base = yprof.rs.detected ? yprof.rs.y : yprof.body.y;
      var repeat_mark_y_base = yprof.rs.detected ? yprof.rs.y - param.repeat_mark_y_margin : yprof.mu.y + yprof.mu.height;

      // if ylimit is specified, and drawing region surpass that limit, do not render
      if (ylimit !== null && yprof.end.y > ylimit) {
        return null;
      }
      if (row_elements_list[0].renderprop.left_margin != null) {
        x += row_elements_list[0].renderprop.left_margin;
      }

      // For each measure in this row
      var _loop6 = function _loop6(ml) {
        // measure object
        var m = row_elements_list[ml];
        var elements = _this6.classifyElements(m);
        mh_offset = 0;
        meas_base_x = x; // Reset music context
        music_context.pos_in_a_measure = 0; // reset
        music_context.cumal_block_duration = 0;
        music_context.first_li = null;
        music_context.in_tuplet = false;
        // TODO : consider key infomration
        // TODO : consider tie
        // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)
        music_context.accidental_info = new Array(128).fill(0);

        // balken context inside a measure
        var balken = {
          groups: []
        };

        // Rehearsal group mark, only rendred when it has name
        if (m.renderprop && m.renderprop.rg_from_here && m.renderprop.rg_from_here.name != "") {
          var reharsal_group = m.renderprop.rg_from_here;
          var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasTextWithBox(paper, meas_base_x, inner_reharsal_mark ? yprof.mu.y : yprof.rm.y, reharsal_group.name, param.reharsal_mark_font_size, 2, _graphic__WEBPACK_IMPORTED_MODULE_3__.getCharProfile(param.reharsal_mark_font_size, null, paper.ratio, paper.zoom).height);
          _this6.hitManager.add(paper, r.bb, reharsal_group);
          if (inner_reharsal_mark) mh_offset += r.bb.width() + 2;
        }
        for (ei = 0; ei < elements.header.length; ++ei) {
          var e = elements.header[ei];
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Coda) {
            var _r6 = _this6.drawCoda(paper, param, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, "lb", e, param.base_font_size);
            mh_offset += _r6.bb.width();
            _this6.hitManager.add(paper, _r6.bb, e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Segno) {
            var _r7 = _this6.drawSegno(paper, param, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, e, param.base_font_size);
            mh_offset += _r7.width;
            _this6.hitManager.add(paper, _r7.bb, e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Comment) {
            // If this comment is associated with a chord with exceptional comment, not rendered here.
            if (!e.chorddep) {
              var _r8 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, e.comment, param.base_font_size / 2, "lb");
              mh_offset += _r8.width;
              _this6.hitManager.add(paper, _r8.bb, e);
            }
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Lyric) {
            // If this comment is associated with a chord with exceptional comment, not rendered here.
            if (!e.chorddep) {
              // Currently lyrics are only rendered for chord dependency case
            }
          }
        } // Header loop

        var meas_start_x = x;
        var meas_start_x_actual_boundary = x;

        // Draw header
        // Clef, Key, Begin Boundary, Time(1st one) are included in this area
        elements.header.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.MeasureBoundary) {
            var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
            var ne = pm ? pm.childNodes[pm.childNodes.length - 1] : null;
            var _r9 = _this6.drawBoundary("begin", ne, e, ml == 0,
            //m.raw_new_line,
            paper, x, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param, true);
            m.renderprop.y = y_body_or_rs_base;
            m.renderprop.sx = x;
            m.renderprop.paper = paper;
            x += e.renderprop.w;
            meas_start_x_actual_boundary = _r9.actual_boundary;
            if (_r9.bb) _this6.hitManager.add(paper, _r9.bb, e);
            if (_r9.bb2) _this6.hitManager.add(paper, _r9.bb2, e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Time) {
            var chord_str_height = _graphic__WEBPACK_IMPORTED_MODULE_3__.getCharProfile(param.base_font_size, null, paper.ratio, paper.zoom).height;
            var row_height = yprof.rs.detected ? param.rs_area_height : param.row_height;
            var cont_height = yprof.rs.detected ? param.rs_area_height : chord_str_height;
            var left_margin = 2;
            var rd = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap["uniE08" + e.numer],
            // numbers
            x + left_margin, y_body_or_rs_base + row_height / 2, null, cont_height / 2, "lb", true);
            var rn = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap["uniE08" + e.denom],
            // numbers
            x + left_margin, y_body_or_rs_base + row_height / 2, null, cont_height / 2, "lt", true);
            x += e.renderprop.w;
            _this6.hitManager.add(paper, rd.bb.add_BB(rn.bb), e);
          }
        });
        var header_width = x - meas_start_x;
        x += param.header_body_margin;

        // Draw body
        var rberet = _this6.renderBodyElements(true, x, elements, param, music_context, yprof, paper, _5lines_intv, meas_start_x, m, x_global_scale, transpose, half_type, key, C7_width, y_body_or_rs_base, balken);
        x = rberet.x;
        x += param.body_footer_margin;
        var footer_start_x = x;

        // Draw footer
        footer_base = x;
        for (var _ei = 0; _ei < elements.footer.length; ++_ei) {
          var _e2 = elements.footer[_ei];
          if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.MeasureBoundary) {
            nm = ml == row_elements_list.length - 1 ? next_measure : row_elements_list[ml + 1];
            ne = nm ? nm.childNodes[0] : null;
            var _r10 = _this6.drawBoundary("end", _e2, ne, ml == row_elements_list.length - 1,
            //nm ? nm.raw_new_line : false,
            paper, x, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param, true);
            m.renderprop.ex = x;
            x += _e2.renderprop.w;
            if (_r10.bb) _this6.hitManager.add(paper, _r10.bb, _e2);
            if (_r10.bb2) _this6.hitManager.add(paper, _r10.bb2, _e2);
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DaCapo) {
            var _r11 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb", null, null, {
              font: param.repeat_mark_font
            });
            _this6.hitManager.add(paper, _r11.bb, _e2);
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.DalSegno) {
            var _r12 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb", null, null, {
              font: param.repeat_mark_font
            });
            _this6.hitManager.add(paper, _r12.bb, _e2);
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.ToCoda) {
            var _r13 = _this6.drawCoda(paper, param, x, repeat_mark_y_base, "rb", _e2, param.base_font_size);
            var rt = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x - _r13.bb.width(), repeat_mark_y_base, "To", param.base_font_size / 2, "rb", null, null, {
              font: param.repeat_mark_font
            });
            _this6.hitManager.add(paper, _r13.bb.add_BB(rt.bb), _e2);
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Fine) {
            var _r14 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb", null, null, {
              font: param.repeat_mark_font
            });
            _this6.hitManager.add(paper, _r14.bb, _e2);
          } else {
            throw "Unkown instance of footer elements";
          }
        }
        var footer_width = x - footer_start_x;
        meas_end_x = x; // Draw Upper and Lower Signs
        for (var _ei2 = 0; _ei2 < elements.measure_wide.length; ++_ei2) {
          var _e3 = elements.measure_wide[_ei2];
          if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.LoopIndicator) {
            var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
            oy = 12;
            ly = yprof.body.y - 2 - oy;
            sx = meas_start_x_actual_boundary;
            fx = meas_start_x + (meas_end_x - meas_start_x) * 0.7;
            _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, sx, ly, sx, ly + oy);
            _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, sx, ly, fx, ly);
            bb.add(sx, ly + oy);
            bb.add(fx, ly);
            s = _e3.indstr;
            var _r15 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, sx + 2, ly + oy / 2, s, param.base_font_size / 3, "lm", null, null, {
              font: param.repeat_mark_font
            });
            _this6.hitManager.add(paper, bb.add_BB(_r15.bb), _e3);
          } else if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.LongRest) {
            var height = yprof.rs.detected ? param.rs_area_height : param.row_height;
            var _sx = meas_start_x + header_width; // header_width does not include header_body_margin
            var _fx = meas_end_x - footer_width;
            rh = height;
            r_lrmargin = 0.05;
            min_lrmargin = 5;
            max_lrmargin = 10;
            yshift = 0; // height / 6;
            vlmargin = 0.2;
            var lrmargin = Math.max(min_lrmargin, Math.min(max_lrmargin, (_sx + _fx) * r_lrmargin));
            lx = _sx + lrmargin;
            rx = _fx - lrmargin;
            var _bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
            var _r16 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, lx, y_body_or_rs_base + height / 2 + yshift, rx, y_body_or_rs_base + height / 2 + yshift, {
              width: height / 5
            });
            _bb.add_BB(_r16.bb);
            _r16 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, lx, y_body_or_rs_base + rh * vlmargin + yshift, lx, y_body_or_rs_base + rh - rh * vlmargin + yshift, {
              width: "1"
            });
            _bb.add_BB(_r16.bb);
            _r16 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, rx, y_body_or_rs_base + rh * vlmargin + yshift, rx, y_body_or_rs_base + rh - rh * vlmargin + yshift, {
              width: "1"
            });
            _bb.add_BB(_r16.bb);
            _r16 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, (_sx + _fx) / 2, y_body_or_rs_base, _e3.longrestlen, param.base_font_size / 2, "ct", undefined, false, {
              font: param.repeat_mark_font
            });
            _bb.add_BB(_r16.bb);
            _this6.hitManager.add(paper, _bb, _e3);

            //rest_or_long_rests_detected |= true;
          } else if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Rest) {
            // This shall be whole rest
            if (_e3.note_group_list[0].lengthIndicator.base != 1) {
              throw "Other than whole rest is here";
            }
            var _sx2 = meas_start_x + header_width; // header_width does not include header_body_margin
            var _fx2 = meas_end_x - footer_width;
            var cr = _this6.renderRest(_e3, paper, true, (_sx2 + _fx2) / 2, y_body_or_rs_base, "c", yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param);
            _this6.hitManager.add(paper, cr.bb, _e3);
          } else if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__.Simile) {
            // Simile mark in measure wide element if there is no other body elements in this measure
            var _sx3 = meas_start_x + header_width; // header_width does not include header_body_margin
            var _fx3 = meas_end_x - footer_width;
            var _r17 = _this6.renderSimileMark(true, paper, (_sx3 + _fx3) / 2, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, _e3.numslash, false, "c");
            _this6.hitManager.add(paper, _r17.bb, _e3);
          } else {
            throw "Unkown measure wide instance detected";
          }
        }
        m.renderprop.meas_end_x = meas_end_x;
        m.renderprop.meas_start_x = meas_start_x;
        _this6.hitManager.add(paper, new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(meas_start_x, y_base, meas_end_x - meas_start_x, yprof.end.y - y_base), m);
      };
      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var mh_offset, meas_base_x, ei, footer_base, nm, ne, meas_end_x, oy, ly, sx, fx, s, rh, r_lrmargin, min_lrmargin, max_lrmargin, yshift, vlmargin, lx, rx;
        _loop6(ml);
      } // measure loop

      // 0. Draw 5 lines
      if (yprof.rs.detected) {
        var start_x = row_elements_list[0].renderprop.meas_start_x;
        var end_x = row_elements_list[row_elements_list.length - 1].renderprop.meas_end_x - 1; // -1 as meas_end_x point to the next point of end of boundary(= Normally total_width - x_margin)
        for (var i = 0; i < 5; ++i) {
          var intv = _5lines_intv;
          var dy = 0;
          _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, start_x, yprof.rs.y + i * intv + dy, end_x, yprof.rs.y + i * intv + dy, {
            width: 1
          });
        }
      }

      // return {y_base:y_base + param.row_height + param.row_margin};
      return {
        rm_detected: yprof.rm.detected,
        mu_y: yprof.mu.y,
        y_base: yprof.end.y
      };
    }
  }, {
    key: "drawSegno",
    value: function drawSegno(paper, param, x, y, segno, B) {
      var lx = x;
      var img_width = B / 3;
      var img_height = B / 2;
      var text_size = B / 2;
      var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
      var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uniE047,
      //segno.svg
      lx, y, img_width, img_height, "lb", true);
      lx += img_width;
      bb.add_BB(r.bb);
      if (segno.number !== null) {
        var _r18 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, lx, y, segno.number, text_size, "lb", null, null, {
          font: param.repeat_mark_font
        });
        lx += _r18.width;
        bb.add_BB(_r18.bb);
      }
      if (segno.opt !== null) {
        var _r19 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, lx, y, "(" + segno.opt + ")", text_size, "lb", null, null, {
          font: param.repeat_mark_font
        });
        lx += _r19.width;
        bb.add_BB(_r19.bb);
      }
      return {
        width: lx - x,
        bb: bb
      };
    }
  }, {
    key: "drawCoda",
    value: function drawCoda(paper, param, x, y, align, coda, B) {
      var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
      var width = 0;
      var ys = 0;
      var img_width = B / 2;
      var img_height = B / 2;
      var text_size = B / 2;
      if (align[1] == "b") {
        ys = -img_height;
      } else if (align[1] == "m") {
        ys = -img_height / 2;
      }
      // var img_y = y; // + ys;

      if (align[0] == "r") {
        if (coda.number !== null) {
          var _r20 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x, y,
          //img_y + img_height,
          coda.number, text_size, "rb", null, null, {
            font: param.repeat_mark_font
          });
          width += _r20.width;
          bb.add_BB(_r20.bb);
        }
        var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uniE048,
        //coda.svg
        x - width, y, img_width, img_height, "rb", true);
        width += img_width;
        bb.add_BB(r.bb);
      } else if (align[0] == "l") {
        var _r21 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uniE048,
        // coda.svg
        x, y, img_width, img_height, "lb", true);
        width += img_width;
        bb.add_BB(_r21.bb);
        if (coda.number !== null) {
          var _r22 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x + width, y,
          //img_y + img_height,
          coda.number, text_size, "lb", null, null, {
            font: param.repeat_mark_font
          });
          width += _r22.width;
          bb.add_BB(_r22.bb);
        }
      } else {
        throw "NOT SUPPORTED";
      }
      return {
        bb: bb
      };
    }
  }, {
    key: "renderChordAsString",
    value: function renderChordAsString(chord, paper, x, y_body_base, param, draw) {
      var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(paper, x, y_body_base + param.row_height / 2, chord.chord_str, param.base_font_size * 0.6, "lm", undefined, !draw);
      return {
        bb: r.bb
      };
    }
  }, {
    key: "renderRest",
    value: function renderRest(e, paper, draw, x, y_body_or_rs_base, align,
    // "l or "c" or "r"
    row_height, base_body_height, param) {
      var _5i = base_body_height / 4;
      var yoffsets = {
        1: -_5i - 0.5,
        // 0.5 is subpixel adjustment
        2: -_5i / 6 * 4 + 0.5,
        4: -_5i * 1.5,
        8: -_5i + 0.5,
        16: 0 + 0.5,
        32: 0 + 0.5,
        64: _5i + 0.5
      };
      var heights = {
        1: _5i / 6 * 4,
        2: _5i / 6 * 4,
        4: _5i * 3,
        8: _5i * 2.5,
        16: _5i * 2.5,
        32: _5i * 2.5,
        64: _5i * 2.5
      };
      var dot_xoffsets = {
        1: 16,
        2: 16,
        4: 10,
        8: 12,
        16: 14,
        32: 16,
        64: 18
      };
      var rd = e.note_group_list[0].lengthIndicator.base;
      var numdot = e.note_group_list[0].lengthIndicator.numdot;
      var oy = yoffsets[rd];
      var fs = 14;
      var ctx = paper.getContext("2d");
      // eslint-disable-next-line no-constant-condition
      if (false) { var i; }
      var namemap = {
        1: "uniE4F4",
        2: "uniE4F5",
        4: "uniE4E5",
        8: "uniE4E6"
      };
      var img = _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap[namemap[rd <= 4 ? rd : 8]];
      var s = img.height / heights[rd];
      var rdx = 2;
      var rdy = -_5i;
      var nKasane = _common_common__WEBPACK_IMPORTED_MODULE_2__.myLog2(rd) - 2;

      // pre-calculate total width
      var w = 0;
      if (rd <= 4) {
        w = img.width / s;
      } else {
        w = rdx * (nKasane - 1) + img.width / s;
      }
      // dots
      w = Math.max(w, dot_xoffsets[rd] + (numdot - 1) * 5);
      if (align == "c") x -= w / 2;else if (align == "r") x -= w;
      if (draw) {
        if (rd <= 4) {
          ctx.drawImage(img, x, y_body_or_rs_base + row_height / 2 + oy, img.width / s, img.height / s);
        } else {
          for (var k = 0; k < nKasane; ++k) {
            ctx.drawImage(img, x + k * rdx, y_body_or_rs_base + row_height / 2 + k * rdy + oy, img.width / s, img.height / s);
          }
        }
        // dots
        for (var di = 0; di < numdot; ++di) {
          _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(paper, x + dot_xoffsets[rd] + di * 5, y_body_or_rs_base + row_height / 2 - _5i / 2, 1);
        }
      }
      return {
        bb: new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(x, y_body_or_rs_base, w, row_height)
      };
    }
  }, {
    key: "renderSimileMark",
    value: function renderSimileMark(draw, paper, x, y_body_base, row_height, base_body_height,
    // In RS area, row_height == base_body_height is asuumed
    numslash, put_boundary, align) {
      var h = 4;
      var H = 12;
      var i = 4;
      var cm = 2;
      var cr = 1.2;
      var _5lines_intv = base_body_height / 4;
      var width = (h + i) * (numslash - 1) + h + H;
      if (align == "c") x -= width / 2;else if (align == "r") x -= width;
      var x0 = x;
      var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
      if (draw) {
        var r = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(paper, x + cm, y_body_base + row_height / 2 - _5lines_intv * 0.5, cr);
        bb.add_BB(r.bb);
      }
      for (var _r23 = 0; _r23 < numslash; ++_r23) {
        var y = y_body_base + row_height / 2;
        x += (h + i) * _r23;
        if (draw) {
          var points = [[x, y + _5lines_intv * 1], [x + h, y + _5lines_intv * 1], [x + h + H, y - _5lines_intv * 1], [x + H, y - _5lines_intv * 1]];
          var _r24 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasPolygon(paper, points, true, true);
          bb.add_BB(_r24.bb);
        }
      }
      if (draw) {
        var _r25 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(paper, x + h + H - cm, y_body_base + row_height / 2 + _5lines_intv * 0.5, cr);
        bb.add_BB(_r25.bb);
      }
      if (put_boundary) {
        if (draw) {
          var _r26 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(paper, x0 + width / 2, y_body_base, x0 + width / 2, y_body_base + row_height, {
            width: 1
          });
          bb.add_BB(_r26.bb);
        }
      }
      return {
        width: width,
        bb: bb
      };
    }
  }, {
    key: "renderChord",
    value: function renderChord(draw, chord, transpose, half_type, key, canvas, x, y_body_base, param, C7_width) {
      if (!chord.is_valid_chord) {
        var r = this.renderChordAsString(chord, canvas, x, y_body_base, param, draw);
        // add width for now. TODO : remove
        return {
          width: r.bb.width(),
          bb: r.bb
        };
      }
      var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
      var ce = this.chordElemClassify(chord, transpose, half_type, key);
      var bases = ce.bases;
      var elems = ce.mid_elem_objs;
      var y = y_body_base;
      var B = param.base_font_size;

      // if bases are null, elems are null, then it is just a duration information
      if (bases[0] == null && bases[1] == null && elems === undefined) {
        return {
          width: B,
          bb: new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(x, y_body_base, B, B)
        }; // TODO : Check
      }

      var _3rdelem = ce._3rdelem;
      var _5thelem = ce._5thelem;
      var _6791113suselem = ce._6791113suselem;
      var _alteredelem = ce._alteredelem; // #11, #9, b9, #13, b13,

      var upper_width = 0;
      var lower_width = 0;
      var tensions_width = 0;
      var onbass_width = 0;
      var rootCharHeight = _graphic__WEBPACK_IMPORTED_MODULE_3__.getCharProfile(B, null, canvas.ratio, canvas.zoom).height;

      // Position parameters
      var upper_tension_y_offset = 0; // Baseline is middle of main chord character
      var lower_onbass_y_offset = rootCharHeight / 16; // Slight offset so that on bass does not interfer with tensions. Baseline is bottom of main chord character. For on bass this applies for normal onbass style. For on bass style of "below", offset 0 is applied.

      var root = bases[0];
      var onbass = bases[1];
      var chord_offset_on_bass = 0;
      if (onbass != null && param.on_bass_style == "below") chord_offset_on_bass = param.on_bass_below_y_offset;

      // Character width scaling, ratio to base font size in pt. Note that 1.0 does not mean the width of base character.
      // In most case, non-proportional font have differnt width for each cahracter. 
      // Typically "G" has max width among characters used for chords.
      // Adjustment based on "G" sometimes lead to too much space for other thinner fonts like "F".
      // A little bit of compressing the default character width will absorb such a difference. Here *0.9 is used. 
      var char_width_scale = 0.7;
      var main_char_width = 0.7;
      var space_char_width = 0.3;
      if (root) {
        var _r27 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x, y + param.row_height / 2 + chord_offset_on_bass, root[0], B, "lm", B * char_width_scale, !draw);
        bb.add_BB(_r27.bb);
        upper_width = B * main_char_width;
        lower_width = B * main_char_width;
        if (root.length == 2) {
          var acc_height = rootCharHeight / 2.0 + rootCharHeight / 8.0;
          var acc_width = B * 0.25;
          if (root[1] == "b") {
            if (draw) {
              var _r28 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uni266D,
              // flat.svg
              x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, acc_width, acc_height, "lb");
              bb.add_BB(_r28.bb);
            }
            upper_width += acc_width;
          } else {
            if (draw) {
              var _r29 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uni266F,
              // sharp.svg
              x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, acc_width, acc_height, "lb");
              bb.add_BB(_r29.bb);
            }
            upper_width += acc_width;
          }
        }
      } else {
        // No root but only bass
        // Add space to eliminate the conbination with previous chord
        if (param.on_bass_style != "below") {
          upper_width = B * space_char_width;
          lower_width = B * space_char_width;
        }
      }

      // Half diminish is firstly rendered
      if (ce._halfdim_exists) {
        // Remove m7 and -5
        _3rdelem = _3rdelem.filter(function (e) {
          return !(e.type == "triad" && e.value == "m");
        });
        _6791113suselem = _6791113suselem.filter(function (e) {
          return !(e.type == "dig" && e.value == "7");
        });
        _5thelem = _5thelem.filter(function (e) {
          return !(e.type == "tension" && e.value == "b");
        });
        var _r30 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x00d8), B * 0.5, "lb", B * 0.5, !draw);
        lower_width += _r30.width;
        bb.add_BB(_r30.bb);
      }
      _3rdelem.forEach(function (e) {
        if (e.type == "M" /* && _6791113suselem.length > 0*/) {
          var _r31 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x0394), B * 0.5, "lb", B * 0.5, !draw);
          lower_width += _r31.width;
          bb.add_BB(_r31.bb);
        } else if (e.type == "triad" && e.value == "m") {
          var _r32 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x2013), B * 0.5, "lb", B * 0.5, !draw);
          lower_width += _r32.width;
          bb.add_BB(_r32.bb);
        } else if (e.type == "triad" && e.value == "dim") {
          var _r33 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x004f), B * 0.5, "lb", B * 0.5, !draw);
          lower_width += _r33.width;
          bb.add_BB(_r33.bb);
        } else {
          // Unkown type
        }
      });
      _6791113suselem.forEach(function (e) {
        if (e.type == "dig") {
          var _r34 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, e.value, B * 0.5, "lb", B * 0.5, !draw);
          lower_width += _r34.width;
          bb.add_BB(_r34.bb);
        } else if (e.type == "sus") {
          var _r35 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, e.type + (e.param ? e.param : ""), B * 0.5, "lb", B * 0.8, !draw);
          lower_width += _r35.width;
          bb.add_BB(_r35.bb);
        } else if (e.type == "tension" && e.value == "add") {
          var _r36 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, e.value + (e.param ? e.param : ""), B * 0.5, "lb", B * 0.8, !draw);
          lower_width += _r36.width;
          bb.add_BB(_r36.bb);
        }
      });
      _5thelem.forEach(function (e) {
        if (e.type == "tension" && e.value == "b") {
          var _r37 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "-5", B * 0.5, "lb", B * 0.5, !draw);
          upper_width += _r37.width;
          bb.add_BB(_r37.bb);
        } else if (e.type == "tension" && e.value == "#") {
          var _r38 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "+5", B * 0.5, "lb", B * 0.5, !draw);
          upper_width += _r38.width;
          bb.add_BB(_r38.bb);
        } else if (e.type == "triad" && e.value == "+") {
          var _r39 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "+", B * 0.5, "lb", B * 0.5, !draw);
          upper_width += _r39.width;
          bb.add_BB(_r39.bb);
        }
      });
      if (_alteredelem.length > 0) {
        var tensions_pos = Math.max(upper_width, lower_width); // Assume onbass below does not exceed lower_width
        var _r40 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + tensions_pos, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "(", B * 0.5, "lb", B * 0.5, !draw);
        tensions_width += _r40.width;
        bb.add_BB(_r40.bb);
        var h = _graphic__WEBPACK_IMPORTED_MODULE_3__.getCharProfile(B * 0.5, null, canvas.ratio, canvas.zoom).height;
        _alteredelem.forEach(function (e, index) {
          if (e.type == "tension" && (e.value == "b" || e.value == "#")) {
            if (draw) {
              var _r41 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap[e.value == "b" ? "uni266D" : "uni266F"],
              // flat.svg,
              x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, B * 0.2, h, "lb");
              bb.add_BB(_r41.bb);
            }
            tensions_width += B * 0.2;
            var _r42 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, e.param, B * 0.5, "lb", B * 0.5, !draw);
            tensions_width += _r42.width;
            bb.add_BB(_r42.bb);
          } else if (e.type == "tension" && e.value == "omit") {
            var _r43 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, e.value + e.param,
            // take same appropach as sus/add.
            B * 0.5, "lb", B * 0.9,
            // "omit" is 4 chars then expand a little bit
            !draw);
            tensions_width += _r43.width;
            bb.add_BB(_r43.bb);
          }
          if (index != _alteredelem.length - 1) {
            var _r44 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, ", ", B * 0.5, "lb", B * 0.5, !draw);
            tensions_width += _r44.width;
            bb.add_BB(_r44.bb);
          }
        });
        _r40 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, ")", B * 0.5, "lb", B * 0.5, !draw);
        tensions_width += _r40.width;
        bb.add_BB(_r40.bb);
      }
      if (onbass != null) {
        var on_bass_below_a_margin = param.on_bass_style == "below" ? 1 : 0;
        var onbass_pos = param.on_bass_style == "below" ? x : x + lower_width;
        var on_bass_y_offset = param.on_bass_style == "below" ? 0 : lower_onbass_y_offset;
        var _r45 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, onbass_pos, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, "/" + onbass[0], B * 0.45, param.on_bass_style == "below" ? "lt" : "lb", B * 0.5, !draw);
        onbass_width += _r45.width;
        bb.add_BB(_r45.bb);
        if (onbass.length == 2) {
          if (onbass[1] == "b") {
            if (draw) {
              var rd = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uni266D,
              // flat.svg
              onbass_pos + onbass_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, B * 0.2, _r45.height, param.on_bass_style == "below" ? "lt" : "lb", true);
              bb.add_BB(rd.bb);
            }
            onbass_width += B * 0.2;
          } else {
            if (draw) {
              var _rd = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasImage(canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__.G_imgmap.uni266F,
              // sharp.svg 
              onbass_pos + onbass_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, B * 0.2, _r45.height, param.on_bass_style == "below" ? "lt" : "lb", true);
              bb.add_BB(_rd.bb);
            }
            onbass_width += B * 0.2;
          }
        }

        //if(param.on_bass_style != "below")
        //    lower_width += onbass_width;
      }

      var width = 0;
      if (param.on_bass_style == "below")
        // max of overall-tension, overall-lower, overall onbass(below)
        width = Math.max(Math.max(upper_width, lower_width) + tensions_width, lower_width, onbass_width);else {
        // max of overall-tension and overall lower
        width = Math.max(Math.max(upper_width, lower_width) + tensions_width, lower_width + onbass_width);
      }
      return {
        width: width,
        bb: bb
      }; // width and bb.width() could be differnt. TODO : Clean up.
    }

    /**
     * Draw boundary
     * @private
     * @param side : 'begin' or 'end' of boundary for current measure
     * @param e0 : Boundary element: 0
     *             - 'end' boundary if the previous measure when <side> is 'begin'
     *             - 'end' boundary of current measure when <side> is 'end' 
     *             - can be null if there is no previous measure when <side> is 'begin'.
     * @param e1 : Boundary element: 1
     *             - 'begin' boundary of current measure when <side> is 'begin'
     *             - 'begin' boundary of next measure when <side> is 'end'
     *             - can be null if there is no next measure when <side> is 'end'.
     * @param is_row_edge : Whether this boundary is at the edge of row( left edge if <side> is 'begin', or right edge if <side> is 'end')
     * @param paper : Paper object
     * @param x : Current x position
     * @param darw : Whether to draw or just estimating sizes
     *
     * @return dictionary with following keys and values
     *             x : updated x position.
     */
  }, {
    key: "drawBoundary",
    value: function drawBoundary(side, e0, e1, is_row_edge, canvas, x, y_body_base, row_height, base_body_height, param, draw) {
      var draw_type = null; // "s, d, lb, le, lb, f"

      var w = 0; // width of boundary
      var actual_boundary = 0; // Actual boundary when having more than 1 pixel width.

      var bb = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox();
      var bb2 = new _graphic__WEBPACK_IMPORTED_MODULE_3__.BoundingBox(); // in case separated bb required.

      if (side == "end" && !is_row_edge) {
        // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
        return {
          drawn: false,
          width: 0,
          actual_boundary: 0,
          bb: null,
          bb2: null
        };
      }
      if (is_row_edge === null || is_row_edge == false) {
        // 1. 2 boundaries in  differnt rows in the code will be rendered as an adjacent measure, or
        // 2. The adjacent measures in the codes are measured as is
        draw_type = this.boundaryTypeWithoutLineBreak(e0, e1);
      } else {
        // 1. The adjacnet measures in the codes are measured in differnt rows
        // 2. 2 boundraies in differnt rows in the code will be rendered as is (i.e. for differnt rows)
        draw_type = this.boundaryTypeWithLineBreak(e0, e1, side);
      }

      //console.log([draw_type, side]);
      var xshift = null;
      var r = null;
      switch (draw_type) {
        case "s":
        case "d":
          // begin and end
          var nline = draw_type == "s" ? 1 : 2;
          var barintv = 3;
          w = 1 + (nline - 1) * barintv;
          for (var li = 0; li < nline; ++li) {
            if (draw) {
              var _r46 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + li * barintv, y_body_base, x + li * barintv, y_body_base + row_height);
              bb.add_BB(_r46.bb);
            }
          }
          actual_boundary = x + (nline - 1) * barintv;
          break;
        case "b":
          // begin only
          w = 8;
          actual_boundary = x;
          if (draw) {
            var _r47 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x, y_body_base, x, y_body_base + row_height, {
              width: 2
            });
            bb.add_BB(_r47.bb);
            _r47 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + 3, y_body_base, x + 3, y_body_base + row_height);
            bb.add_BB(_r47.bb);
            _r47 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + 7, y_body_base + row_height / 4 * 1.5, 1);
            bb.add_BB(_r47.bb);
            _r47 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + 7, y_body_base + row_height / 4 * 2.5, 1);
            bb.add_BB(_r47.bb);
          }
          break;
        case "e":
          // begin and end
          w = 8;
          actual_boundary = x + w;
          xshift = side == "end" ? 0 : 0;
          if (draw) {
            var _r48 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + xshift, y_body_base + row_height / 4 * 1.5, 1);
            bb.add_BB(_r48.bb);
            _r48 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + xshift, y_body_base + row_height / 4 * 2.5, 1);
            bb.add_BB(_r48.bb);
            _r48 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + xshift + 4, y_body_base, x + xshift + 4, y_body_base + row_height);
            bb.add_BB(_r48.bb);
            _r48 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + xshift + 7, y_body_base, x + xshift + 7, y_body_base + row_height, {
              width: 2
            });
            bb.add_BB(_r48.bb);
          }
          if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
            var stimes = e0.ntimes == true ? "X" : "" + e0.times;
            if (draw) {
              var _r49 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + xshift + w, y_body_base + row_height + param.xtimes_mark_y_margin, "(" + stimes + " times)", param.base_font_size / 2, "rt", null, null, {
                font: param.repeat_mark_font
              });
              bb2.add_BB(_r49.bb);
            }
          }
          break;
        case "B":
          // begin only
          w = 15;
          actual_boundary = x + w / 2;
          if (draw) {
            var _r50 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x, y_body_base + row_height / 4 * 1.5, 1);
            bb.add_BB(_r50.bb);
            _r50 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x, y_body_base + row_height / 4 * 2.5, 1);
            bb.add_BB(_r50.bb);
            _r50 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + 4, y_body_base, x + 4, y_body_base + row_height);
            bb.add_BB(_r50.bb);
            _r50 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + 7, y_body_base, x + 7, y_body_base + row_height, {
              width: 2
            });
            bb.add_BB(_r50.bb);
            _r50 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + 10, y_body_base, x + 10, y_body_base + row_height);
            bb.add_BB(_r50.bb);
          }
          if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
            var _stimes = e0.ntimes == true ? "X" : "" + e0.times;
            if (draw) {
              var _r51 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText(canvas, x + 8, y_body_base + row_height + param.xtimes_mark_y_margin, "(" + _stimes + " times)", param.base_font_size / 2, "rt", null, null, {
                font: param.repeat_mark_font
              });
              bb2.add_BB(_r51.bb);
            }
          }
          if (draw) {
            var _r52 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + 14, y_body_base + row_height / 4 * 1.5, 1);
            bb.add_BB(_r52.bb);
            _r52 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasCircle(canvas, x + 14, y_body_base + row_height / 4 * 2.5, 1);
            bb.add_BB(_r52.bb);
          }
          break;
        case "f":
          // begin and end (normally, end)
          w = 5;
          xshift = side == "end" ? 0 : 0;
          actual_boundary = x + w;
          if (draw) {
            var _r53 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + xshift, y_body_base, x + xshift, y_body_base + row_height);
            bb.add_BB(_r53.bb);
            _r53 = _graphic__WEBPACK_IMPORTED_MODULE_3__.canvasLine(canvas, x + xshift + 3, y_body_base, x + xshift + 3, y_body_base + row_height, {
              width: 2
            });
            bb.add_BB(_r53.bb);
          }
          break;
        case "r":
          r = this.renderSimileMark(draw, canvas, x, y_body_base, row_height, base_body_height, 2, true, "l");
          x += r.width;
          w = r.width;
          actual_boundary = x + w / 2;
          if (draw) bb.add_BB(r.bb);
          break;
        default:
          throw "Internal error";
      }
      return {
        drawn: true,
        width: w,
        actual_boundary: actual_boundary,
        bb: bb,
        bb2: bb2.width() > 0 ? bb2 : null
      };
    }
  }]);
  return DefaultRenderer;
}(_renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer);

/***/ }),

/***/ "./src/renderer/fonts.js":
/*!*******************************!*\
  !*** ./src/renderer/fonts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontData": () => (/* binding */ fontData)
/* harmony export */ });
/* -----------------------------------------------------------------------------
 * Backround and acknowledgements
 * -----------------------------------------------------------------------------
 * Fumen font is a modified version of Bravura font provided from 
 * Steinberg Media Technologies GmbH (http://www.steinberg.net/). 
 * Fumen font is generated by extracting some of the glyphs from 
 * Bravura font and is enmbeded directly in the form javascript 
 * sourcecode including a SVG dataURL. 
 * Use font-make.html to generate the following codes from svg font file.
 * -----------------------------------------------------------------------------
 */

var fontData = {
  "uni266D": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI2MTQiIHZpZXdCb3g9IjAgLTQzOSAyMjYgNjE0IiBpZD0idW5pMjY2RCIgPjxwYXRoICAgIGQ9Ik0xMiAtMTcwYy04IDEwIC0xMiA1ODEgLTEyIDU4MWMxIDE4IDE3IDI4IDMxIDI4YzEwIDAgMTkgLTYgMTkgLTE3YzAgLTIwIC02IC0yNjAgLTcgLTI4MmMwIC03IDQgLTE0IDExIC0xN2MyIC0xIDMgLTEgNSAtMWM1IDAgMTYgOSAyMiAxNGMxNCA5IDM4IDE3IDU1IDE3YzQ2IC0zIDkwIC0zOSA5MCAtOTZjMCAtNDYgLTMxIC0xMDcgLTEyMCAtMTY5Yy0yNSAtMTcgLTQ5IC00NCAtNzkgLTYxYzAgMCAtMyAtMiAtNiAtMnMtNiAxIC05IDV6IE00NiA1MWMtMSAtNCAtMiAtMTYgLTIgLTMyYzAgLTQwIDMgLTEwMCAzIC0xMDBjMCAtNSAyIC0xNSAxMSAtMTVjMyAwIDYgMSAxMCAzYzQzIDI3IDg5IDgxIDg5IDEzNWMwIDI1IC0xMiA1OCAtNDEgNThjLTIzIDAgLTYzIC0yOSAtNzAgLTQ5eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 226,
      "height": 614
    },
    "origName": "uni266D",
    "origFont": "Bravura"
  },
  "uni266E": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2OCIgaGVpZ2h0PSI2NzYiIHZpZXdCb3g9IjAgLTM0MSAxNjggNjc2IiBpZD0idW5pMjY2RSIgPjxwYXRoICAgIGQ9Ik0wIC0xODZ2NTE1YzAgNyA1IDEyIDEyIDEyaDEzYzYgMCAxMiAtNSAxMiAtMTJ2LTE2N2MwIC00IDQgLTUgMTAgLTVjMjYgMCA5MCAyMyA5MCAyM2MxIDAgMiAxIDQgMWwxNSA1YzEgMSAzIDEgNCAxYzQgMCA4IC0zIDggLTh2LTUwMmMwIC03IC02IC0xMiAtMTIgLTEyaC0xM2MtNyAwIC0xMiA1IC0xMiAxMnYxNDljMCA4IC03IDExIC0xNyAxMWMtMjkgMCAtODUgLTI0IC05OSAtMzBjLTEgLTEgLTYgLTIgLTcgLTJjLTUgMCAtOCAzIC04IDl6IE0xMjIgNzljLTI0IDAgLTg1IC0yNiAtODUgLTQwdi0xMDNjMCAtNCA1IC02IDEyIC02YzI1IDAgODIgMjMgODIgNDF2MTAzYzAgNCAtMyA1IC05IDV6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 168,
      "height": 676
    },
    "origName": "uni266E",
    "origFont": "Bravura"
  },
  "uni266F": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0OSIgaGVpZ2h0PSI2OTgiIHZpZXdCb3g9IjAgLTM1MCAyNDkgNjk4IiBpZD0idW5pMjY2RiIgPjxwYXRoICAgIGQ9Ik04IDI2Yy01IDAgLTggMyAtOCA5djcxYzAgNiA1IDE0IDEyIDE2YzAgMCAyMCA4IDI2IDExczEyIDEzIDEyIDI3djEzNWMwIDYgNiAxMSAxNiAxMWM3IDAgMTQgLTUgMTQgLTExdi0xMjBjMCAtOCAzIC0yMCAxMiAtMjBjMTcgNCA1MSAxOCA2MyAyNWM5IDYgMTIgMTkgMTMgMjl2MTMwYzAgNiA2IDExIDE2IDExYzggMCAxNCAtNSAxNCAtMTF2LTEyMmMwIC04IDcgLTEzIDE0IC0xM2M1IDEgMjUgOSAyNSA5YzIgMSAzIDEgNSAxIGM0IDAgNyAtMyA3IC04di03MWMwIC02IC01IC0xNCAtMTIgLTE3bC0yNiAtMTBjLTggLTMgLTEzIC0yMiAtMTMgLTI5di05M2MwIC0xMiA3IC0xOCAxMyAtMThsMjYgMTBjMiAxIDMgMSA1IDFjNCAwIDcgLTMgNyAtOHYtNzFjMCAtNiAtNSAtMTQgLTEyIC0xN2MwIDAgLTIxIC04IC0yOCAtMTFzLTExIC0xNSAtMTEgLTIzdi0xNDJjMCAtNiAtNiAtMTEgLTE3IC0xMWMtNyAwIC0xMyA1IC0xMyAxMXYxMjVjMCA2IC01IDE4IC0xMyAxOCBjLTEgMCAtMyAtMSAtNCAtMWwtNjEgLTI1Yy01IC0yIC0xMCAtOSAtMTAgLTIydi0xMzljMCAtNiAtNyAtMTEgLTE3IC0xMWMtNyAwIC0xMyA1IC0xMyAxMXYxMjNjMCA1IC01IDE2IC0xMiAxNmMtMSAwIC0yIDAgLTMgLTFjLTkgLTMgLTIzIC05IC0yMyAtOWMtMSAwIC0zIC0xIC00IC0xYy01IDAgLTggMyAtOCA5djcxYzAgNiA1IDE0IDEyIDE2YzAgMCAyMSA5IDI3IDExYzYgMyAxMSAxMiAxMSAyM3Y5OWMwIDggLTYgMTggLTEzIDE4IGMtMSAwIC0yIC0xIC0zIC0xYy0zIC0yIC0yMiAtMTEgLTI2IC0xMXpNNzcgLTMwYzAgLTI0IDEgLTQ2IDMgLTUwYzEgLTMgNiAtNSAxMiAtNWMyMyAwIDcwIDIwIDc2IDQwYzIgOSA0IDM3IDQgNjRzLTIgNTIgLTQgNTdjLTIgNCAtOCA2IC0xNSA2Yy0yNSAwIC03MSAtMjEgLTczIC0zOGMtMiAtOCAtMyAtNDMgLTMgLTc0eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 249,
      "height": 698
    },
    "origName": "uni266F",
    "origFont": "Bravura"
  },
  "uniE045": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwNzEiIGhlaWdodD0iNDUxIiB2aWV3Qm94PSIxMSAtNDQyIDEwNzEgNDUxIiBpZD0idW5pRTA0NSIgPjxwYXRoICAgIGQ9Ik0xMSA0MzNoMjE0Yzg1IDAgMTI5IC04IDE2NSAtMzJjNTYgLTM3IDg2IC05OSA4NiAtMTgwYzAgLTgyIC0zMCAtMTQ3IC04MyAtMTg0Yy0zNyAtMjYgLTg1IC0zNyAtMTYxIC0zN2gtMjIxdjMyaDljMzIgMCA0NCAzIDUwIDljNCA1IDQgOCA0IDQ1djI2MWMwIDM4IDAgNDAgLTQgNDVjLTYgNiAtMTggOSAtNTAgOWgtOXYzMnpNNjMwIC00aC0zMXYxNzBoMzFjMzMgLTkwIDkyIC0xNDQgMTYwIC0xNDRjNTIgMCA4NyAyOCA4NyA3MCBjMCAyMSAtMTAgMzkgLTI3IDQ4Yy0xMSA1IC0yMSA4IC00MiAxM2MtNCAwIC0xMCAyIC0xNCAzYy0zIDEgLTYgMSAtOSAybC0zNyA4Yy05NCAxNyAtMTQ4IDY5IC0xNDggMTQyYzAgODAgNjMgMTM0IDE1NSAxMzRjNDIgMCA3NSAtOSAxMDggLTMybDMyIDI3aDI3bDcgLTE1NWgtMzFjLTM2IDg1IC04NiAxMjkgLTE0OCAxMjljLTQ3IDAgLTgxIC0yNiAtODEgLTYzYzAgLTI1IDE0IC00MiA0MSAtNTJjMTUgLTUgMTUgLTMgNjEgLTE0bDI5IC03IGMxMDQgLTIyIDE0OSAtNjUgMTQ5IC0xNDFjMCAtODQgLTY1IC0xNDMgLTE1OSAtMTQzYy00OCAwIC04NiAxMyAtMTIzIDQwek0yMTggNDAxYy0yOSAwIC0zNiAtNyAtMzYgLTM2di0yOTRjMCAtMzEgNiAtMzkgMzYgLTM5aDEyYzkwIDAgMTI2IDU5IDEyNiAxOTFjMCAxMjAgLTQwIDE3OCAtMTIzIDE3OGgtMTV6TTEwMjUgLTljLTMxIDAgLTU2IDI2IC01NiA1NmMwIDMyIDI1IDU3IDU2IDU3YzMyIDAgNTcgLTI1IDU3IC01NyBjMCAtMzEgLTI1IC01NiAtNTcgLTU2ek00NTkgNDdjMCAzMiAyNSA1NyA1NiA1N2MzMiAwIDU3IC0yNSA1NyAtNTdjMCAtMzEgLTI1IC01NiAtNTcgLTU2Yy0zMSAwIC01NiAyNiAtNTYgNTZ6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 1071,
      "height": 451
    },
    "origName": "uniE045",
    "origFont": "Bravura"
  },
  "uniE046": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwNzEiIGhlaWdodD0iNDUxIiB2aWV3Qm94PSIxMSAtNDQyIDEwNzEgNDUxIiBpZD0idW5pRTA0NiIgPjxwYXRoICAgIGQ9Ik0yMzIgMGgtMjIxdjMyaDljMzIgMCA0NCAzIDUwIDljNCA1IDQgOCA0IDQ1djI2MWMwIDM4IDAgNDAgLTQgNDVjLTYgNiAtMTggOSAtNTAgOWgtOXYzMmgyMTRjODUgMCAxMjkgLTggMTY1IC0zMmM1NiAtMzcgODYgLTk5IDg2IC0xODBjMCAtODIgLTMwIC0xNDcgLTgzIC0xODRjLTM3IC0yNiAtODUgLTM3IC0xNjEgLTM3ek01NjQgMjExYzAgMTM1IDk1IDIzMSAyMjcgMjMxYzQyIDAgNzAgLTggMTEwIC0zMmwzMiAzMGgyNmw2IC0xNzIgbC0zMiAtM2MtMjcgMTAwIC03MSAxNDYgLTEzNyAxNDZjLTc0IDAgLTExMyAtNjUgLTExMyAtMTg5YzAgLTEzMiAzOSAtMTk0IDEyMCAtMTk0YzY5IDAgMTE3IDQ4IDEzNCAxMzFsMzcgLTljLTIzIC0xMDcgLTg0IC0xNTkgLTE5MCAtMTU5Yy03MSAwIC0xMjIgMjAgLTE2MyA2NmMtMzggNDMgLTU3IDkyIC01NyAxNTR6TTE4MiAzNjV2LTI5NGMwIC0zMSA2IC0zOSAzNiAtMzloMTJjOTAgMCAxMjYgNTkgMTI2IDE5MSBjMCAxMjAgLTQwIDE3OCAtMTIzIDE3OGgtMTVjLTI5IDAgLTM2IC03IC0zNiAtMzZ6TTEwMjUgLTljLTMxIDAgLTU2IDI2IC01NiA1NmMwIDMyIDI1IDU3IDU2IDU3YzMyIDAgNTcgLTI1IDU3IC01N2MwIC0zMSAtMjUgLTU2IC01NyAtNTZ6TTUxNSAtOWMtMzEgMCAtNTYgMjYgLTU2IDU2YzAgMzIgMjUgNTcgNTYgNTdjMzIgMCA1NyAtMjUgNTcgLTU3YzAgLTMxIC0yNSAtNTYgLTU3IC01NnoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 1071,
      "height": 451
    },
    "origName": "uniE046",
    "origFont": "Bravura"
  },
  "uniE047": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjU0NiIgaGVpZ2h0PSI3ODYiIHZpZXdCb3g9IjQgLTc1OSA1NDYgNzg2IiBpZD0idW5pRTA0NyIgPjxwYXRoICAgIGQ9Ik0yMCA0NzdjLTExIDI1IC0xNiA1MCAtMTYgNzRjMCA5OSA3OSAxODUgMTQ5IDE4NWM1MSAwIDExOCAtMTcgMTM0IC02M2M1IC0xNiA4IC0zMiA4IC00N2MwIC00MyAtMjggLTY3IC02OSAtNjdjLTUxIDAgLTY2IDU5IC03MyA4NmwtMiA3Yy0zIDExIC0xMCAxMyAtMTYgMTNoLTZjLTQyIC03IC01NCAtMzUgLTU0IC02MmMwIC0yMSA4IC00MiAxNCAtNTNjMjYgLTQ1IDE3NyAtMTAzIDE4NiAtMTA2YzQgLTIgNyAtMyAxMCAtMyBjNCAwIDYgMyA5IDhjNiA5IDE2NSAyOTYgMTY1IDI5NmM1IDkgMTUgMTQgMjUgMTRjMTUgMCAyOCAtMTIgMjggLTI4YzAgLTUgLTEgLTkgLTQgLTE0YzAgMCAtMTU1IC0yNzkgLTE2MCAtMjg3Yy0xIC0yIC0yIC00IC0yIC02YzAgLTUgNSAtOSAxNyAtMTZjMTIgLTYgMTcwIC05NSAxODUgLTIwNWMxIC0xMCAyIC0yMCAyIC0yOWMwIC04MyAtNTMgLTE0OCAtMTMzIC0xNzVjLTE1IC01IC0yOSAtNyAtNDIgLTdjLTU5IDAgLTEyMSA1MyAtMTIxIDExNCBjMCA0MCAzNCA1NiA3MSA2NWM0IDEgOCAyIDEyIDJjMjggMCA1MyAtMjggNTMgLTY2di0xMWMwIC0zMSAxNyAtNDUgMzYgLTQ1YzIgMCA1IDEgNyAxYzMyIDUgNTYgMzEgNTYgNzBjMCA5NSAtMjAwIDE1NCAtMjE1IDE1N2MtNCAwIC0xMiAtNiAtMTIgLTVjLTMgLTYgLTE1OCAtMjg2IC0xNTggLTI4NmMtNSAtOSAtMTUgLTE1IC0yNSAtMTVjLTE2IDAgLTI4IDEzIC0yOCAyOWMwIDQgMSA5IDMgMTNjMCAwIDE0NCAyNTkgMTUxIDI3MyBjNCA3IDYgMTIgNiAxNnMtMiA2IC02IDhjLTggMyAtMTUzIDkyIC0xODUgMTY1ek00NzIgNDA5Yy0zMSAwIC01NyAyNiAtNTcgNTdjMCAzMiAyNiA1NyA1NyA1N2MzMiAwIDU3IC0yNSA1NyAtNTdjMCAtMzEgLTI1IC01NyAtNTcgLTU3ek04MyAyMDdjLTMxIDAgLTU3IDI1IC01NyA1N2MwIDMxIDI2IDU3IDU3IDU3YzMyIDAgNTcgLTI2IDU3IC01N2MwIC0zMiAtMjUgLTU3IC01NyAtNTd6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 546,
      "height": 786
    },
    "origName": "uniE047",
    "origFont": "Bravura"
  },
  "uniE048": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9Ijk1OSIgaGVpZ2h0PSIxMDU2IiB2aWV3Qm94PSItNCAtODk4IDk1OSAxMDU2IiBpZD0idW5pRTA0OCIgPjxwYXRoICAgIGQ9Ik0tNCAzNzZjMCAxMyA0IDI0IDE4IDI0aDEzMmMxMSAxODkgMTUwIDMzOSAzMTIgMzUydjEyOWMwIDEzIDExIDE3IDI0IDE3czI0IC00IDI0IC0xN3YtMTI5YzE2MiAtMTMgMzAyIC0xNjQgMzEyIC0zNTJoMTE5YzE0IDAgMTggLTExIDE4IC0yNHMtNCAtMjQgLTE4IC0yNGgtMTE5Yy0xMCAtMTg3IC0xNTAgLTMzOSAtMzEyIC0zNTJ2LTE0MGMwIC0xNCAtMTEgLTE4IC0yNCAtMThzLTI0IDQgLTI0IDE4djE0MCBjLTE2MiAxMyAtMzAxIDE2NSAtMzEyIDM1MmgtMTMyYy0xNCAwIC0xOCAxMSAtMTggMjR6TTY1MyA0MDBjMCAxNjIgLTcgMjg0IC0xNDcgMjk2di0yOTZoMTQ3ek01MDYgMzUydi0zMDRjMTI1IDE1IDE0NCAxNTEgMTQ3IDMwNGgtMTQ3ek0zMTYgNDAwaDE0MnYyOTZjLTE0MiAtMTIgLTE0MiAtMTM0IC0xNDIgLTI5NnpNNDU4IDM1MmgtMTQyYzEgLTE1NCAxMyAtMjg5IDE0MiAtMzA0djMwNHoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 959,
      "height": 1056
    },
    "origName": "uniE048",
    "origFont": "Bravura"
  },
  "uniE050": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjY3MSIgaGVpZ2h0PSIxNzU2IiB2aWV3Qm94PSIwIC0xMDk4IDY3MSAxNzU2IiBpZD0idW5pRTA1MCIgPjxwYXRoICAgIGQ9Ik0zNjQgLTI1MmMtMjQ1IDAgLTM2NCAxNjUgLTM2NCAzMzljMCAyMDIgMTUzIDM0NSAyOTcgNDY0YzEyIDEwIDExIDEyIDkgMjRjLTcgNDEgLTE0IDEwNiAtMTQgMTY0YzAgMTA0IDI0IDIyOSA5OCAzMTFjMjAgMjIgNTEgNDggNjUgNDhjMTEgMCAzNyAtMjggNTIgLTUwYzQxIC02MCA2NSAtMTQ2IDY1IC0yMzNjMCAtMTUzIC04MiAtMjgwIC0xOTAgLTM4MWMtNiAtNiAtOCAtNyAtNiAtMTlsMjUgLTE0NWMzIC0xOCAzIC0xOCAyOSAtMTggYzE0NyAwIDI0MSAtMTEzIDI0MSAtMjQxYzAgLTExMyAtNjcgLTE5OCAtMTY4IC0yMzhjLTE0IC02IC0xNSAtNSAtMTMgLTE3YzExIC02MiAyOSAtMTU3IDI5IC0yMTRjMCAtMTcwIC0xMzAgLTIwMCAtMTk3IC0yMDBjLTE1MSAwIC0xOTAgOTggLTE5MCAxNjNjMCA2MiA0MCAxMTUgMTA3IDExNWM2MSAwIDk2IC00NyA5NiAtMTAyYzAgLTU4IC0zNiAtODUgLTY3IC05NGMtMjMgLTcgLTMyIC0xMCAtMzIgLTE3YzAgLTEzIDI2IC0yOSA4MCAtMjkgYzU5IDAgMTU5IDE4IDE1OSAxNjZjMCA0NyAtMTUgMTM0IC0yNyAyMDFjLTIgMTIgLTQgMTEgLTE1IDljLTIwIC00IC00NiAtNiAtNjkgLTZ6TTgwIDIwYzAgLTEzOSAxMTMgLTIzNiAyODggLTIzNmMyMCAwIDQwIDIgNTYgNWMxNSAzIDE2IDMgMTQgMTRsLTUwIDI5OGMtMiAxMSAtNCAxMiAtMjAgOGMtNjEgLTE3IC0xMDAgLTYwIC0xMDAgLTExN2MwIC00NiAzMCAtODkgNzIgLTEwN2M3IC0zIDE1IC02IDE1IC0xMyBjMCAtNiAtNCAtMTEgLTEyIC0xMWMtNyAwIC0xOSAzIC0yNyA2Yy02OCAyMyAtMTE1IDg3IC0xMTUgMTc3YzAgODUgNTcgMTY0IDE0NSAxOTRjMTggNiAxOCA1IDE1IDI0bC0yMSAxMjhjLTIgMTEgLTQgMTIgLTE0IDRjLTQ3IC0zOCAtOTMgLTc1IC0xNTMgLTE0MmMtODMgLTk0IC05MyAtMTczIC05MyAtMjMyek00NzAgOTQzYy02MSAwIC0xMzMgLTk2IC0xMzMgLTI1MmMwIC0zMiAyIC02NiA2IC05MmMyIC0xMyA2IC0xNCAxMyAtOCBjNzkgNjkgMTc0IDE1OSAxNzQgMjcwYzAgNTUgLTI3IDgyIC02MCA4MnpNNDQxIDExN2MtMTIgMSAtMTMgLTIgLTExIC0xNGw0OSAtMjg1YzIgLTEyIDQgLTEyIDE2IC02YzU2IDI4IDk0IDc5IDk0IDE0MmMwIDg4IC02NyAxNTYgLTE0OCAxNjN6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 671,
      "height": 1756
    },
    "origName": "uniE050",
    "origFont": "Bravura"
  },
  "uniE062": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjY4OSIgaGVpZ2h0PSI4OTciIHZpZXdCb3g9Ii01IC0yNjIgNjg5IDg5NyIgaWQ9InVuaUUwNjIiID48cGF0aCAgICBkPSJNOCAtNjM1Yy05IDAgLTEzIDYgLTEzIDEyYzAgOCA2IDEzIDE1IDE4YzIzMyAxMzMgMzcxIDI4OSAzNzEgNTY4YzAgMTU3IC00NiAyNjEgLTE1MiAyNjFjLTEwMiAwIC0xNjIgLTczIC0xNjIgLTExM2MwIC0xMCAzIC0xOCAxNiAtMThzMjMgNyA1MCA3YzQ5IDAgOTYgLTQwIDk2IC0xMDRjMCAtNjIgLTQzIC0xMDYgLTEwNiAtMTA2Yy04MSAwIC0xMjMgNjkgLTEyMyAxNDljMCA5NiA3OCAyMjMgMjUyIDIyMyBjMTczIDAgMjc5IC0xMTYgMjc5IC0yOTBjMCAtMzA0IC0yNjAgLTQ4MiAtNTA2IC02MDJjLTYgLTMgLTEyIC01IC0xNyAtNXpNNjI5IDcwYy0zMSAwIC01NSAyNCAtNTUgNTVzMjQgNTUgNTUgNTVzNTUgLTI0IDU1IC01NXMtMjQgLTU1IC01NSAtNTV6TTYzMCAtMTc5Yy0zMSAwIC01NCAyMyAtNTQgNTRzMjMgNTQgNTQgNTRzNTQgLTIzIDU0IC01NHMtMjMgLTU0IC01NCAtNTR6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 689,
      "height": 897
    },
    "origName": "uniE062",
    "origFont": "Bravura"
  },
  "uniE080": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQzMCIgaGVpZ2h0PSI1MDEiIHZpZXdCb3g9IjIwIC0yNTEgNDMwIDUwMSIgaWQ9InVuaUUwODAiID48cGF0aCAgICBkPSJNMjM1IC0yNTBjLTExOSAwIC0yMTUgMTEyIC0yMTUgMjUwYzAgMTM5IDk2IDI1MSAyMTUgMjUxczIxNSAtMTEyIDIxNSAtMjUxYzAgLTEzOCAtOTYgLTI1MCAtMjE1IC0yNTB6TTE2MCA3YzAgLTExNyAzMyAtMjEyIDc1IC0yMTJjNDEgMCA3NSA5NSA3NSAyMTJjMCAxMTggLTM0IDIxMyAtNzUgMjEzYy00MiAwIC03NSAtOTUgLTc1IC0yMTN6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 430,
      "height": 501
    },
    "origName": "uniE080",
    "origFont": "Bravura"
  },
  "uniE081": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI5NCIgaGVpZ2h0PSI1MDEiIHZpZXdCb3g9IjIwIC0yNTEgMjk0IDUwMSIgaWQ9InVuaUUwODEiID48cGF0aCAgICBkPSJNMjAgMGMwIDcgNCAxMyA0IDEzbDk2IDIxOWM0IDkgOCAxOSAxOCAxOWMxIDAgMyAtMSA1IC0xYzE1IC0yIDMzIC0zIDUyIC0zYzEzIDAgMzggNCA1MiA0YzE0IC0xIDIwIC03IDIwIC0yM3YtNDEyYzAgLTE3IDE4IC0zNSAzMiAtMzVjMTUgMCAxNSAtMTUgMTUgLTE1czAgLTE2IC0xNiAtMTZoLTIxM2MtMTMgMCAtMjIgNSAtMjIgMTZjMCAxMiAxMCAxNSAxNyAxNWMyMSAwIDQ0IDE1IDQ0IDM4djI1OGMwIDYgLTIgMTQgLTYgMTQgYy0yIDAgLTYgLTMgLTEwIC0xMGMtMTEgLTE5IC01NCAtODggLTU0IC04OHMtNCAtOSAtMTQgLTljLTEgMCAtNSAxIC05IDJjLTggMyAtMTEgOSAtMTEgMTR6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 294,
      "height": 501
    },
    "origName": "uniE081",
    "origFont": "Bravura"
  },
  "uniE082": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQwNiIgaGVpZ2h0PSI1MTEiIHZpZXdCb3g9IjIwIC0yNTQgNDA2IDUxMSIgaWQ9InVuaUUwODIiID48cGF0aCAgICBkPSJNMjAgMTE4YzAgMjcgMTEgNTIgMjggNzNjNDkgNTcgMTExIDYzIDE4MSA2M2M5MyAwIDE5NyAtNDYgMTk3IC0xNTJjMCAtODMgLTYzIC0xMTIgLTEzMyAtMTMxYy0yMiAtNiAtMTA3IC0zNiAtMTI5IC03MmMxMSA0IDI0IDYgMzcgNmM0MSAwIDg4IC0xNiAxMDggLTI0YzEwIC01IDE3IC02IDMwIC0xMWM3IC0yIDEyIC0zIDE3IC0zYzIxIDAgMjkgMTkgMzkgNDNjMCAxIDEgMiAxIDNjMiA2IDUgMTAgMTMgMTBjNyAwIDEyIC0yIDEyIC0xNCBjLTE2IC0xNTUgLTkzIC0xNTkgLTEzNiAtMTU5Yy04OSAwIC0xMDQgNTQgLTE0NCA1NGMtNTkgMCAtNzEgLTYxIC05MyAtNjFjLTIwIDAgLTI1IDI0IC0yNSAzOWMxNyA2MyA1NiAxMTIgMTExIDE0N2M3MiA0NCAxNDcgMTEzIDE0NyAyMDRjMCAyOSAtMSA5NiAtOTAgOTZjLTU5IDAgLTc3IC0yNCAtNzkgLTM4YzAgLTIwIDY5IC0yMyA2OSAtODNjMCAtMjUgLTkgLTg4IC03MCAtODhjLTM2IDAgLTY3IDI0IC04MiA1NWMtNiAxNSAtOSAyOSAtOSA0MyB6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 406,
      "height": 511
    },
    "origName": "uniE082",
    "origFont": "Bravura"
  },
  "uniE083": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM4MSIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjIwIC0yNDkgMzgxIDUwMCIgaWQ9InVuaUUwODMiID48cGF0aCAgICBkPSJNMjAgLTE0MWMwIDIyIDUgNDYgMjIgNjFjMTIgMTMgMzEgMjMgNDggMjZjNCAxIDcgMSAxMSAxYzQzIDAgNzIgLTMwIDcyIC03MmMtMSAtMjkgLTIzIC00NCAtMjMgLTY2di01YzEgLTE1IDIwIC0xNSAyOCAtMTZjMSAwIDUgLTEgOSAtMWMyMiAwIDc2IDEyIDc2IDExOGMwIDEzIC05IDkxIC0xMjQgOTFjLTggMCAtMjUgMCAtMjUgMTJjMCAxMSAxNCAxNiAyNCAxN2M2MyAzIDEyMiAzMiAxMjIgMTA2djdjMCAyNCAtOCA3NyAtOTMgNzcgYy05IDAgLTQwIC04IC00MiAtMjV2LTRjMCAtMTQgMTUgLTEyIDIwIC0xNHMzMCAtNCAzMyAtNDF2LThjMCAtMzMgLTIyIC02NSAtNjYgLTY1aC01Yy02MiA0IC04MSA0OCAtODEgODFjMCA1MyA4NiAxMTAgMTcyIDExMGM1IDAgMTAgLTEgMTUgLTFjNDIgLTMgMTY3IC0zMCAxNjcgLTEyMmMwIC00NiAtMjEgLTcyIC02MSAtOTFjLTkgLTUgLTIwIC02IC0zMSAtOWMtMyAtMSAtNCAtNSAtNCAtOWMwIC0yIDAgLTMgMSAtNWMyIC00IDUgLTQgMTAgLTUgbDMzIC05bDIxIC0xMmMxMCAtNiAxOCAtMTMgMjQgLTIxYzE5IC0yMiAyNiAtNDEgMjggLTcwdi03YzAgLTg4IC0xMDIgLTEzOSAtMjAxIC0xMzloLTljLTk4IDIgLTE2OSAzMiAtMTcxIDExMHoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 381,
      "height": 500
    },
    "origName": "uniE083",
    "origFont": "Bravura"
  },
  "uniE084": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQzMCIgaGVpZ2h0PSI1MDEiIHZpZXdCb3g9IjIwIC0yNTEgNDMwIDUwMSIgaWQ9InVuaUUwODQiID48cGF0aCAgICBkPSJNNDAgLTExMmMtMTIgMCAtMjAgNyAtMjAgMTdjMCAzIDEgNyAzIDExYzAgMSAxIDIgMSAzbDYgOGMzMCA0MiAxMjggMTgxIDEyOCAzMDVjMCAxNiAxNCAxOSAyMyAxOWM4IDAgNTMgLTIgNzEgLTJzNTkgMiA2OCAyYzggMCAxNSAtNiAxNSAtMTRjMCAtMiAtMSAtMyAtMSAtNWMtMyAtMTEgLTE2MyAtMjM4IC0yNDMgLTMwNmgxMzV2ODRjMCAxMiA1IDE4IDkgMjNsOTUgMTE1YzYgNyAxMSA5IDIwIDljMTEgMCAxMiAtOSAxMiAtMTd2LTIxNGg3MyBjMTEgMCAxNSAtNyAxNSAtMTlzLTUgLTE5IC0xNSAtMTloLTczdi01OWMwIC0zMiAyMSAtMzggMzEgLTM4czIyIC02IDIyIC0yMHMtMTAgLTIxIC0yMCAtMjFoLTIxM2MtMTUgMCAtMTkgMTEgLTE5IDIxczcgMTkgMjMgMTljMTggMCA0MCA4IDQwIDM1djYzaC0xODZ6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 430,
      "height": 501
    },
    "origName": "uniE084",
    "origFont": "Bravura"
  },
  "uniE085": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM2MyIgaGVpZ2h0PSI0OTciIHZpZXdCb3g9IjIwIC0yNDYgMzYzIDQ5NyIgaWQ9InVuaUUwODUiID48cGF0aCAgICBkPSJNMjAgLTEyN2MwIDYgMCAxMiAxIDE4YzMgMzUgMjUgNzQgNzkgNzRjNDMgMCA3OCAtMzQgNzggLTc4YzAgLTI4IC0xNSAtNTMgLTM4IC02N2MtNSAtMyAtMTIgLTcgLTEyIC0xNGMxIC03IDcgLTExIDEyIC0xNGM3IC0zIDE1IC0zIDIzIC0zYzI2IDAgODUgMTQgODUgMTI0YzAgMTExIC02OSAxMzAgLTEwMyAxMzBzLTU4IC0yMyAtNjggLTMzYy0xMSAtMTEgLTEyIC0yMCAtMjIgLTIwcy0yMCAyIC0yMCAxNXYybDExIDIyMiBjMSA4IDYgMTcgMjQgMTdjMTcgLTIgMTAzIC0xMCAxMzUgLTEwczExMCA5IDEyMyA5YzExIDAgMTQgLTggMTQgLTIxYzAgLTE2IC01IC05NiAtMTQ0IC05NmMtNDEgMCAtODggNyAtOTggOWgtNGMtOSAwIC0xNCAtNSAtMTUgLTEzYy0xIC05IC01IC02NSAtNSAtNjV2LTRjMCAtMyAwIC03IDQgLTdjMSAwIDMgMCA1IDFjMzIgMTkgNzUgMjkgMTMzIDI5YzkxIDAgMTY1IC03NCAxNjUgLTE2NWMwIC05MCAtNjYgLTE2NCAtMTg2IC0xNjQgYy0xMjMgMCAtMTc3IDQxIC0xNzcgMTI0eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 363,
      "height": 497
    },
    "origName": "uniE085",
    "origFont": "Bravura"
  },
  "uniE086": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM5NCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjIwIC0yNTEgMzk0IDUwMCIgaWQ9InVuaUUwODYiID48cGF0aCAgICBkPSJNMjAgM2MwIDQ3IDE3IDEwMCAzOSAxNDJjMzYgNjggMTA3IDEwNSAxODMgMTA2YzU0IDAgMTMyIC0xNyAxNDIgLTgxYzEgLTQgMSAtNyAxIC0xMWMwIC00MyAtMzggLTc2IC04MCAtNzZjLTEzIDAgLTQyIDggLTQ5IDIxYy0xMCAxMSAtMTUgMjYgLTE1IDQxYzAgMTAgMiAyMCA3IDI5YzYgMTIgMjUgMjQgMjUgMzhjMCAxMCAtMTMgMTUgLTMzIDE1Yy0yMSAwIC04MCAtNSAtODMgLTE5MGMwIC0xNiAzIC0yNCA5IC0yNGMyIDAgNCAwIDYgMiBjMjYgMjMgNTkgMzUgOTEgMzVjNzcgMCAxNTEgLTY3IDE1MSAtMTQ1YzAgLTQ1IC0yMyAtOTAgLTU4IC0xMThjLTM2IC0yOSAtODYgLTM2IC0xMzEgLTM2Yy04NCAwIC0xMzMgMzYgLTE3NCAxMTBjLTIyIDQwIC0zMCA5MiAtMzEgMTM4djR6TTIyMiAyYy0zMiAwIC01OCAtNTAgLTU4IC0xMTJzMjYgLTExMiA1OCAtMTEyczU5IDUwIDU5IDExMnMtMjcgMTEyIC01OSAxMTJ6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 394,
      "height": 500
    },
    "origName": "uniE086",
    "origFont": "Bravura"
  },
  "uniE087": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQwMSIgaGVpZ2h0PSI0OTkiIHZpZXdCb3g9IjIwIC0yNDkgNDAxIDQ5OSIgaWQ9InVuaUUwODciID48cGF0aCAgICBkPSJNMjAgNDl2MTY1YzAgOSA1IDEyIDEwIDEyczEwIC0zIDEyIC03YzUgLTEwIDE4IC0yNCAyNiAtMjRjNyAxIDEzIDUgMjcgMThzMjkgMzYgODcgMzZjODMgMCAxMzAgLTg1IDE1NSAtODVzMzkgNTcgNDYgNjljNCA3IDIwIDExIDIxIDExYzE3IDAgMTcgLTEzIDE3IC00MHYtNGMwIC0xMDMgLTExOSAtMjQ2IC0xMTkgLTQxM2MwIC0yOSAtNiAtMzcgLTE2IC0zN3MtNTcgOSAtODIgOXMtNDcgLTkgLTY1IC05Yy0xOSAwIC0xOSAxMCAtMTkgMzEgYzAgMzkgMzEgOTcgNjkgMTQxYzYwIDcxIDEzNyAxMjcgMTM3IDE1NWMtMSA2IC0zIDkgLTcgOWMtMiAwIC02IC0yIC05IC00Yy04IC02IC0yMiAtMjEgLTUwIC0yMWMtNTggMCAtMTA2IDc1IC0xNDYgNzVjLTQ1IDAgLTU4IC01OCAtNjggLTgzYy00IC0xMSAtNyAtMjAgLTE1IC0yMGMtMTAgMCAtMTEgMTYgLTExIDE2eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 401,
      "height": 499
    },
    "origName": "uniE087",
    "origFont": "Bravura"
  },
  "uniE088": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM5NiIgaGVpZ2h0PSI1MTgiIHZpZXdCb3g9IjIwIC0yNTkgMzk2IDUxOCIgaWQ9InVuaUUwODgiID48cGF0aCAgICBkPSJNMjAgLTEzMmMwIDYzIDQwIDk2IDkyIDEyMWMtNDggMjcgLTg3IDY0IC04NyAxMzNjMCA4NCA3OSAxMzcgMTk1IDEzN2MyNyAwIDE3NCAtMTUgMTc0IC0xMTdjMCAtNTAgLTI0IC04MyAtNjAgLTEwNmM0NyAtMjQgODIgLTU3IDgyIC0xMTdjMCAtMTM1IC0xMDcgLTE3OCAtMjA3IC0xNzhjLTk5IDAgLTE4OSA0MCAtMTg5IDEyN3pNNzcgLTEyN2MwIC02NSA2MSAtOTkgMTI4IC05OXM5OCAzNCA5OCA3NGMwIDY2IC03NCA4NyAtMTQ3IDExOSBjLTQ0IC0xNyAtNzkgLTU0IC03OSAtOTR6TTIxOCAyMzBjLTQ0IDAgLTEwMSAtMjEgLTEwMSAtNjNjMCAtNjMgODUgLTgwIDE2NSAtMTA4YzMzIDE5IDUzIDQ1IDUzIDg1YzAgNzAgLTg1IDg2IC0xMTcgODZ6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 396,
      "height": 518
    },
    "origName": "uniE088",
    "origFont": "Bravura"
  },
  "uniE089": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM5NCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjIwIC0yNTEgMzk0IDUwMCIgaWQ9InVuaUUwODkiID48cGF0aCAgICBkPSJNMTcxIC00OGMtNzcgMCAtMTUxIDY3IC0xNTEgMTQ1YzAgNDUgMjMgOTAgNTggMTE4YzM2IDI5IDg2IDM2IDEzMSAzNmM4NCAwIDEzMyAtMzYgMTc0IC0xMTBjMjIgLTQwIDMwIC05MiAzMSAtMTM4di00YzAgLTQ3IC0xNyAtMTAwIC0zOSAtMTQyYy0zNiAtNjggLTEwNyAtMTA1IC0xODMgLTEwNmMtNTQgMCAtMTMyIDE3IC0xNDIgODFjLTEgNCAtMSA3IC0xIDExYzAgNDMgMzggNzYgODAgNzZjMTMgMCA0MiAtOCA0OSAtMjEgYzEwIC0xMSAxNSAtMjYgMTUgLTQxYzAgLTEwIC0yIC0yMCAtNyAtMjljLTYgLTEyIC0yNSAtMjQgLTI1IC0zOGMwIC0xMCAxMyAtMTUgMzMgLTE1YzIxIDAgODAgNSA4MyAxOTBjMCAxNiAtMyAyNCAtOSAyNGMtMiAwIC00IDAgLTYgLTJjLTI2IC0yMyAtNTkgLTM1IC05MSAtMzV6TTE1MyAxMTJjMCAtNjIgMjcgLTExMiA1OSAtMTEyczU4IDUwIDU4IDExMnMtMjYgMTEyIC01OCAxMTJzLTU5IC01MCAtNTkgLTExMnoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 394,
      "height": 500
    },
    "origName": "uniE089",
    "origFont": "Bravura"
  },
  "uniE0A2": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQyMiIgaGVpZ2h0PSIyNTAiIHZpZXdCb3g9IjAgLTEyNSA0MjIgMjUwIiBpZD0idW5pRTBBMiIgPjxwYXRoICAgIGQ9Ik0wIDJjMCA2OCA4MyAxMjMgMjE2IDEyM2M5MyAwIDIwNiAtNTIgMjA2IC0xMjNjMCAtNzAgLTUyIC0xMjcgLTIxNiAtMTI3Yy0xNDkgMCAtMjA2IDYwIC0yMDYgMTI3ek0xMDggMzljMCAtMzIgMTUgLTY2IDM1IC04OWMyMSAtMjggNTggLTUyIDk0IC01MmMxMCAwIDIxIDEgMzEgNGMzMyA4IDQ2IDM2IDQ2IDY3YzAgNjAgLTU1IDEzNCAtMTI0IDEzNGMtMzEgMCAtNjggLTUgLTc5IC00MGMtMiAtOCAtMyAtMTYgLTMgLTI0eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 422,
      "height": 250
    },
    "origName": "uniE0A2",
    "origFont": "Bravura"
  },
  "uniE0A3": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI5NSIgaGVpZ2h0PSIyNTAiIHZpZXdCb3g9IjAgLTEyNSAyOTUgMjUwIiBpZD0idW5pRTBBMyIgPjxwYXRoICAgIGQ9Ik05NyAtMTI1Yy01NSAwIC05NyAzMCAtOTcgODNjMCA1MiA0NyAxNjcgMTk2IDE2N2M1OCAwIDk5IC0zMiA5OSAtODNjMCAtMzMgLTMzIC0xNjcgLTE5OCAtMTY3ek0yOSAtNDRjMCAtNyAzIC0xNCA2IC0yMGM3IC0xMiAxOSAtMjMgNDAgLTIzYzQ4IDAgMTg5IDg4IDE4OSAxMzFjMCA3IC0zIDEzIC02IDE5Yy03IDEyIC0xOCAyMSAtMzcgMjFjLTQ3IDAgLTE5MiAtNzkgLTE5MiAtMTI4eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 295,
      "height": 250
    },
    "origName": "uniE0A3",
    "origFont": "Bravura"
  },
  "uniE0A4": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI5NSIgaGVpZ2h0PSIyNTAiIHZpZXdCb3g9IjAgLTEyNSAyOTUgMjUwIiBpZD0idW5pRTBBNCIgPjxwYXRoICAgIGQ9Ik0wIC00MmMwIDg2IDg4IDE2NyAxOTggMTY3YzU3IDAgOTcgLTMyIDk3IC04M2MwIC04NSAtMTA5IC0xNjcgLTE5OCAtMTY3Yy01NCAwIC05NyAzMSAtOTcgODN6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 295,
      "height": 250
    },
    "origName": "uniE0A4",
    "origFont": "Bravura"
  },
  // Rests
  "uniE4E5": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI2OSIgaGVpZ2h0PSI3NDgiIHZpZXdCb3g9IjEgLTM3MyAyNjkgNzQ4IiBpZD0idW5pRTRFNSIgPjxwYXRoICAgIGQ9Ik0xMTcgLTM2NmMtNzMgNTYgLTExNiAxMDUgLTExNiAxNTVjMCA1MyAzOSA5NiA4MiA5NmM1IDAgMTEgLTMgMTYgLTNjNCAtMSAxMiAtMyAxNiAtM2M1IDAgOSAxIDExIDVjMSAxIDEgMyAxIDRjMCAyIC00IDEwIC02IDE0Yy0xMyAyMSAtMjcgNDAgLTQzIDYwbC00OSA2MHMtMTAgMTAgLTEwIDI0YzAgOCA0IDE5IDE0IDI5YzQ1IDQ3IDYwIDkwIDYwIDEyN2MwIDcyIC01NyAxMjMgLTYxIDEzNGMtMyA2IC00IDExIC00IDE2IGMwIDE0IDEwIDIxIDIwIDIxYzYgMCAxMyAtMyAxOCAtOGMxNyAtMTcgMTY1IC0xOTMgMTY1IC0xOTNzNCAtOSA0IC0xOWMwIC01IC0xIC0xMCAtNCAtMTVjLTI2IC00MSAtNjIgLTg5IC02NiAtMTQ3YzAgLTQgLTEgLTkgLTEgLTEzYzAgLTU2IDMxIC05MyA2OSAtMTM5YzExIC0xMiAzNyAtNDUgMzcgLTU3YzAgLTMgLTIgLTQgLTUgLTRjLTIgMCAtNCAwIC03IDFjLTEgMCAtMiAxIC0zIDFjLTE2IDYgLTQ5IDE3IC03OCAxNyBjLTQyIDAgLTYzIC0zMiAtNjMgLTczYzAgLTkgMSAtMTggNCAtMjZjMiAtOSAxMyAtMzYgMjYgLTM2YzggLTcgMTYgLTE1IDE2IC0yNGMwIC0yIC0xIC00IC0yIC03Yy0xIC00IC04IC02IC0xNSAtNmMtOCAwIC0xOCAzIC0yNiA5eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 269,
      "height": 748
    },
    "origName": "uniE4E5",
    "origFont": "Bravura"
  },
  "uniE4E6": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0NyIgaGVpZ2h0PSI0MjUiIHZpZXdCb3g9IjAgLTE3NCAyNDcgNDI1IiBpZD0idW5pRTRFNiIgPjxwYXRoICAgIGQ9Ik0yNyA1NmMtMTUgMTIgLTI3IDMwIC0yNyA1MWMwIDM3IDMwIDY3IDY3IDY3czY3IC0zMCA2NyAtNjd2LTEwYzMzIDAgODMgNjAgOTAgNjZjNiA0IDkgNCAxMSA0YzIgLTEgMTIgLTYgMTIgLTE2Yy0xIC01IC02IC0yMSAtMTAgLTM5YzAgMCAtOTggLTM1MSAtMTAxIC0zNTNjLTEwIC04IC0yNCAtMTAgLTM1IC0xMGMtNiAwIC0yOSAxIC0yOSAxM2MxOCA2NiA5MCAyNjUgOTMgMjgwYzEgNCAxIDggMSAxMWMwIDUgLTEgOSAtNSA5IGMtMSAwIC0zIDAgLTUgLTFjLTEzIC03IC0yMiAtMTEgLTM2IC0xNWMtMTEgLTQgLTI1IC03IC0zOSAtN2MtMTkgMCAtMzggNiAtNTQgMTd6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 247,
      "height": 425
    },
    "origName": "uniE4E6",
    "origFont": "Bravura"
  },
  "uniE4F4": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxNiIgaGVpZ2h0PSIxNTUiIHZpZXdCb3g9Ii0xMTcgLTIwIDUxNiAxNTUiIGlkPSJ1bmlFNEY0IiA+PHBhdGggICAgZD0iTS0xMTcgMmMwIDEwIDggMTggMTggMThoNDgwYzEwIDAgMTggLTggMTggLTE4cy04IC0xOCAtMTggLTE4Yy05OSAwIC05OSAwIC05OSAtMXYtOTJjMCAtMTQgLTEyIC0yNiAtMjYgLTI2aC0yMzBjLTE1IDAgLTI2IDEyIC0yNiAyNnY5M2gtOTljLTEwIDAgLTE4IDggLTE4IDE4eiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 516,
      "height": 155
    },
    "origName": "uniE4F4",
    "origFont": "Bravura"
  },
  "uniE4F5": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxNiIgaGVpZ2h0PSIxNTUiIHZpZXdCb3g9Ii0xMTcgLTE0MiA1MTYgMTU1IiBpZD0idW5pRTRGNSIgPjxwYXRoICAgIGQ9Ik0tOTkgLTEzYy0xMCAwIC0xOCA4IC0xOCAxOHM4IDE4IDE4IDE4aDk5djkzYzAgMTQgMTEgMjYgMjYgMjZoMjMwYzE0IDAgMjYgLTEyIDI2IC0yNnYtOTJjMCAtMSAwIC0xIDk5IC0xYzEwIDAgMTggLTggMTggLTE4cy04IC0xOCAtMTggLTE4aC00ODB6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 516,
      "height": 155
    },
    "origName": "uniE4F5",
    "origFont": "Bravura"
  },
  // Flags
  "flag_f1": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI2NCIgaGVpZ2h0PSI4MTkuMTkyMTM4NjcxODc1IiB2aWV3Qm94PSIwIC05IDI2NCA4MTkuMTkyMTM4NjcxODc1IiBpZD0idW5pRTI0MCIgPjxwYXRoICAgIGQ9Ik0xOTcgLTQ3OGMtMzYgODUgLTEzMSAyMjEgLTE5NyAyMzN2MjM5YzAgMTIgNCAxNSAxMCAxNWMxOSAwIDI3IC02IDMwIC0yMmMxNiAtOTYgNTggLTE4MiAxMDkgLTI2MWM2MyAtMTAwIDExNSAtMjE4IDExNSAtMzQzYzAgLTc4IC0yNiAtMTczIC0yNiAtMTczYy01IC0xNyAtMjIgLTIzIC0yOCAtMTlzLTE2IDEzIC0xNiAyOWMwIDQgMSA5IDMgMTVjMTcgNDUgMjQgOTIgMjQgMTM3YzAgNTkgLTkgMTE2IC0yNCAxNTB6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 264,
      "height": 819.192138671875
    },
    "origName": "uniE240",
    "origFont": "Bravura"
  },
  "flag_i1": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMwNiIgaGVpZ2h0PSI4MjIiIHZpZXdCb3g9IjAgLTgwOCAzMDYgODIyIiBpZD0idW5pRTI0MSIgPjxwYXRoICAgIGQ9Ik0xMSAtMTRjLTYgMCAtMTEgMyAtMTEgMTV2MjM1YzEzNCA0NSAxODQgMTI2IDIyMSAyMTBjMTUgMzQgNDAgMTE4IDQwIDE3N2MwIDQ1IC03IDk1IC0yMSAxMzdjLTEwIDI5IDcgNDggMjIgNDhjNyAwIDEzIC00IDE2IC0xNWM4IC0zMiAyOCAtMTAzIDI4IC0xODFjMCAtMTI1IC02MSAtMjQ0IC0xMjQgLTM0M2MtNTEgLTc5IC0xMjUgLTE2NiAtMTQyIC0yNjFjLTIgLTE2IC0xMCAtMjIgLTI5IC0yMnoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 306,
      "height": 822
    },
    "origName": "uniE241",
    "origFont": "Bravura"
  },
  "flag_f2": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI3OSIgaGVpZ2h0PSI4MTUiIHZpZXdCb3g9IjAgLTIgMjc5IDgxNSIgaWQ9InVuaUUyNDIiID48cGF0aCAgICBkPSJNNSAtMzk2aC01djM5N3MxMSAxIDE3IDFzMTggLTIgMjAgLTEzYzE3IC0xMDYgNzMgLTEyMiAxMjcgLTE4MGM3MiAtNzggOTggLTEwNiAxMDggLTE3NGMyIC0xMiAzIC0yMyAzIC0zNmMwIC02MSAtMjIgLTEyMSAtMjUgLTEyN2MtMSAtMyAtMSAtNSAtMSAtN2MwIC00IDEgLTYgMSAtOWMxOCAtMzcgMjkgLTc4IDI5IC0xMjB2LTIyYzAgLTQ4IC0zIC0xMDUgLTcgLTExMGMtNiAtMTMgLTEzIC0xNyAtMjAgLTE3IGMtMTQgMCAtMjIgMTMgLTIyIDI2YzAgMyAwIDUgMSA5YzUgMzAgOCA2MCA4IDg5YzAgNTIgLTkgMTAxIC0zMiAxNDljLTY5IDE0MCAtMTQwIDE0MiAtMjAyIDE0NHpNNTQgLTIxN2MtOCAwIC0xNCAtNiAtMTQgLTEwYzAgLTEgMCAtMiAxIC0zYzIxIC04MiA2NyAtMTA2IDExNCAtMTYwYzIxIC0yNCAzOCAtNDQgNTQgLTY5YzIgLTMgNCAtNCA3IC00YzUgMCAxMiAzIDEzIDZjNSA4IDUgMTggNyAyNmMxIDcgMSAxMyAxIDIwIGMwIDMyIC05IDYzIC0yNyA4OWMtMzMgNDkgLTg3IDEwNSAtMTQ4IDEwNWgtOHoiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 279,
      "height": 815
    },
    "origName": "uniE242",
    "origFont": "Bravura"
  },
  "flag_i2": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI5MC44OTUxNzIxMTkxNDA2IiBoZWlnaHQ9IjgyMS4wMDY0MDg2OTE0MDYyIiB2aWV3Qm94PSIwIC04MTIuMDA2NDA4NjkxNDA2MiAyOTAuODk1MTcyMTE5MTQwNiA4MjEuMDA2NDA4NjkxNDA2MiIgaWQ9InVuaUUyNDMiID48cGF0aCAgICBkPSJNMCAtOHYzOTZoNWM2MiAyIDE0MyA1IDIxMiAxNDVjMzggNzggMzggMTY5IDIzIDI1M2MtMyAxNyA1IDI1IDE3IDI2YzEyIDAgMTkgMSAyNCAtMjJjMTYgLTgwIDE1IC0xNzggLTIxIC0yNTNjMCAtMyAtMSAtNSAtMSAtOWMwIC0zIDAgLTUgMSAtN2MzIC02IDI1IC02NiAyNSAtMTI3YzAgLTEzIC0xIC0yNSAtMyAtMzZjLTI0IC0xNTcgLTIyMSAtMjAwIC0yNDUgLTM1NGMtMiAtMTEgLTE0IC0xMyAtMjAgLTEzcy0xNyAxIC0xNyAxeiBNNDAgMjIwYzAgLTUgNiAtMTAgMTQgLTEwaDhjNjEgMCAxMjUgNTYgMTU4IDEwNWMxOCAyNiAyNyA1NiAyNyA4OWMwIDYgMCAxMyAtMSAyMGMtMiA4IC0yIDE4IC03IDI1Yy0xIDQgLTggNyAtMTMgN2MtMyAwIC01IC0xIC03IC00Yy0xNiAtMjYgLTMzIC00NiAtNTQgLTY5Yy00NyAtNTUgLTEwMyAtNzggLTEyNCAtMTYwYy0xIC0xIC0xIC0yIC0xIC0zeiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 290.8951721191406,
      "height": 821.0064086914062
    },
    "origName": "uniE243",
    "origFont": "Bravura"
  },
  "flag_f3": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI2MSIgaGVpZ2h0PSI5NjEiIHZpZXdCb3g9IjAgLTE0OSAyNjEgOTYxIiBpZD0idW5pRTI0NCIgPjxwYXRoICAgIGQ9Ik01IC00MjNoLTV2NTYwczYgMTIgMTIgMTJzMTkgLTEwIDIwIC0xOWMxNyAtMTAwIDcxIC0xMTYgMTIxIC0xNzBjNjcgLTczIDkwIC0xMDAgMTAxIC0xNjFjMiAtOSAyIC0xOCAyIC0yOGMwIC0zOSAtMTEgLTgwIC0yMCAtMTA2YzE0IC0yOSAyMSAtNjEgMjEgLTkzYzAgLTU3IC0yMSAtMTEyIC0yMyAtMTE5Yy0xIC0yIC0xIC00IC0xIC02YzAgLTMgMCAtNSAxIC03YzE1IC0zNiAyNCAtNzQgMjYgLTExM2MwIC05IDEgLTE4IDEgLTI4IGMwIC00MyAtNCAtODkgLTcgLTk1Yy03IC0xMSAtMTQgLTE2IC0yMCAtMTZjLTIgMCAtNCAxIC02IDJjLTcgMyAtMTMgMTIgLTEzIDI0YzAgMiAxIDQgMSA3YzUgMjkgOCA1NyA4IDg1YzAgNDggLTkgOTMgLTMxIDEzN2MtNjQgMTMwIC0xMzAgMTMyIC0xODggMTM0ek0yMDggLTE4MWMtNTUgOTMgLTExNCAxMTcgLTE2OSAxMTdjMTYgLTk3IDY1IC0xMTQgMTE0IC0xNjhjMjMgLTI1IDQxIC00NCA1NSAtNjJjNSAxNyAxMCAzNCAxMiA0NCBjMSA3IDMgMTMgMyAyMWMwIDEzIC00IDI4IC0xNSA0OHpNMzggLTI2OGMyMCAtNzcgNjQgLTk4IDEwNyAtMTQ5bDUgLTVjMTcgLTIwIDMxIC0zNyA0NiAtNTljMSAtMyA0IC00IDcgLTRjNSAwIDEwIDMgMTEgNmMzIDcgMyAxNSA1IDIzYzEgOCAyIDE2IDIgMjRjMCA4MSAtOTAgMTc3IC0xNzAgMTc3Yy02IC0xIC0xMyAtMTIgLTEzIC0xM3oiICAgIGlkPSJwYXRoMCIgICAgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSIgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPjwvc3ZnPg==",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 261,
      "height": 961
    },
    "origName": "uniE244",
    "origFont": "Bravura"
  },
  "flag_i3": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI3MyIgaGVpZ2h0PSI5ODQiIHZpZXdCb3g9IjAgLTgxMiAyNzMgOTg0IiBpZD0idW5pRTI0NSIgPjxwYXRoICAgIGQ9Ik0xMiAtMTcyYy02IDAgLTEyIDEzIC0xMiAxM3Y1ODljNjEgMiAxMjUgNCAyMDEgMTQwYzIzIDQxIDMxIDcwIDMxIDk4YzAgMzQgLTEyIDY1IC0yMCAxMTBjMCAzIC0xIDUgLTEgN2MwIDEzIDcgMjMgMTQgMjZjMiAxIDQgMSA2IDFjMzUgMCA0MiAtMTE2IDQyIC0xMzZ2LTExYy00IC02NCAtOSAtNzUgLTIyIC0xMDBsLTQgLTdjLTIgLTMgLTMgLTUgLTMgLTdjMCAtMyAzIC02IDMgLTljNCAtMTAgMjAgLTUzIDIwIC0xMDUgYzAgLTM0IC03IC03MiAtMjMgLTEwMWM5IC0yNyAyMiAtNzEgMjIgLTExNGMwIC0xMCAwIC0yMCAtMiAtMjljLTExIC02NCAtMzUgLTkyIC0xMDUgLTE2OGMtNTIgLTU3IC0xMDkgLTczIC0xMjYgLTE3N2MtMSAtOSAtMTQgLTIwIC0yMSAtMjB6TTM5IDUzYzAgLTEgMCAtMiAyIC0zYzU3IDAgMTE4IDI2IDE3NSAxMjJjMTIgMjEgMTYgMzcgMTYgNTBjMCA4IC0yIDE0IC0zIDIxYy0zIDExIC04IDMyIC0xNCA1MSBjLTE0IC0xOCAtMzIgLTM4IC01NiAtNjRjLTUyIC01NyAtMTAzIC03MyAtMTIwIC0xNzd6TTM5IDI2OGMwIC01IDQgLTEzIDEzIC0xM2g1YzgxIDAgMTczIDEwMyAxNzMgMTg1YzAgOCAtMSAxNyAtMiAyNWMtMiA4IC0yIDE2IC01IDIzYy0xIDMgLTcgNiAtMTIgNmMtMyAwIC02IC0xIC04IC00Yy0xNiAtMjUgLTMyIC00NCAtNTIgLTY3Yy00NSAtNTMgLTkxIC03NSAtMTEyIC0xNTV6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 273,
      "height": 984
    },
    "origName": "uniE245",
    "origFont": "Bravura"
  },
  "flag_f4": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI2MSIgaGVpZ2h0PSIxMTU5IiB2aWV3Qm94PSIwIC0zNDcgMjYxIDExNTkiIGlkPSJ1bmlFMjQ2IiA+PHBhdGggICAgZD0iTTAgLTQyM3Y3NThzNiAxMiAxMiAxMnMxOSAtMTAgMjAgLTE5YzE3IC0xMDAgNzEgLTExNiAxMjEgLTE3MGM2NyAtNzMgOTAgLTEwMCAxMDEgLTE2MWMxIC05IDIgLTE4IDIgLTI3YzAgLTQyIC0xMyAtODYgLTIyIC0xMTFjMTUgLTI3IDIyIC01OCAyMiAtODhjMCAtMzkgLTExIC04MCAtMjAgLTEwNmMxNCAtMjkgMjEgLTYxIDIxIC05M2MwIC01NyAtMjEgLTExMiAtMjMgLTExOWMtMSAtMiAtMSAtNCAtMSAtNmMwIC0zIDAgLTUgMSAtNyBjMTUgLTM2IDI0IC03NCAyNiAtMTEzYzAgLTkgMSAtMTggMSAtMjhjMCAtNDMgLTQgLTg5IC03IC05NWMtNyAtMTEgLTE0IC0xNiAtMjAgLTE2Yy0yIDAgLTQgMSAtNiAyYy03IDMgLTEzIDEyIC0xMyAyNGMwIDIgMSA0IDEgN2M1IDI5IDggNTcgOCA4NWMwIDQ4IC05IDkzIC0zMSAxMzdjLTY0IDEzMCAtMTMwIDEzMiAtMTg4IDEzNGgtNXpNMzkgMTM0YzEgLTEgMSAtMyAxIC00YzE3IC0xMDAgNjMgLTExNiAxMTMgLTE3MCBjMjMgLTI1IDQwIC00NCA1NCAtNjFsMTMgNDljMSA3IDMgMTMgMyAyMWMwIDEzIC00IDI4IC0xNSA0OGMtNTUgOTIgLTExMiAxMTcgLTE2OSAxMTd6TTIwOCAtMTgxYy01NSA5MyAtMTE0IDExNyAtMTY5IDExN2MxNiAtOTcgNjUgLTExNCAxMTQgLTE2OGMyMyAtMjUgNDEgLTQ0IDU1IC02MmM1IDE3IDEwIDM0IDEyIDQ0YzEgNyAzIDEzIDMgMjFjMCAxMyAtNCAyOCAtMTUgNDh6TTM4IC0yNjhjMjAgLTc3IDY0IC05OCAxMDcgLTE0OWw1IC01IGMxNyAtMjAgMzEgLTM3IDQ2IC01OWMxIC0zIDQgLTQgNyAtNGM1IDAgMTAgMyAxMSA2YzMgNyAzIDE1IDUgMjNjMSA4IDIgMTYgMiAyNGMwIDgxIC05MCAxNzcgLTE3MCAxNzdjLTYgLTEgLTEzIC0xMiAtMTMgLTEzeiIgICAgaWQ9InBhdGgwIiAgICB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIiAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+PC9zdmc+",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 261,
      "height": 1159
    },
    "origName": "uniE246",
    "origFont": "Bravura"
  },
  "flag_i4": {
    "dataURL": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI3MyIgaGVpZ2h0PSIxMTg4IiB2aWV3Qm94PSIwIC04MTIgMjczIDExODgiIGlkPSJ1bmlFMjQ3IiA+PHBhdGggICAgZD0iTTEyIC0zNzZjLTYgMCAtMTIgMTMgLTEyIDEzdjc5M2M2MSAyIDEyNSA0IDIwMSAxNDBjMjMgNDEgMzEgNzAgMzEgOThjMCAzNCAtMTIgNjUgLTIwIDExMGMwIDMgLTEgNSAtMSA3YzAgMTMgNyAyMyAxNCAyNmMyIDEgNCAxIDYgMWMzNSAwIDQyIC0xMTYgNDIgLTEzNnYtMTFjLTQgLTY0IC05IC03NSAtMjIgLTEwMGwtNCAtN2MtMiAtMyAtMyAtNSAtMyAtN2MwIC0zIDMgLTYgMyAtOWM0IC0xMCAyMCAtNTMgMjAgLTEwNSBjMCAtMzQgLTcgLTcyIC0yMyAtMTAxYzkgLTI3IDIyIC03MSAyMiAtMTE0YzAgLTEwIDAgLTIwIC0yIC0yOWMtNCAtMjQgLTEwIC00MyAtMjAgLTYyYzEwIC0yNiAyMyAtNzAgMjMgLTExMmMwIC0xMCAtMSAtMjAgLTMgLTMwYy0xMSAtNjQgLTM1IC05MiAtMTA1IC0xNjhjLTUyIC01NyAtMTA5IC03MyAtMTI2IC0xNzdjLTEgLTkgLTE0IC0yMCAtMjEgLTIwek0zOSA1M2MwIC0xIDAgLTIgMiAtM2M1NyAwIDExOCAyNiAxNzUgMTIyIGMxMiAyMSAxNiAzNyAxNiA1MGMwIDggLTIgMTQgLTMgMjFjLTMgMTEgLTggMzIgLTE0IDUxYy0xNCAtMTggLTMyIC0zOCAtNTYgLTY0Yy01MiAtNTcgLTEwMyAtNzMgLTEyMCAtMTc3ek0xNTkgMjVjLTU4IC02MyAtMTA3IC04NSAtMTIwIC0xNzljNTYgMCAxMjAgMjYgMTc3IDEyMmMxMiAyMSAxNiAzNyAxNiA1MGMwIDggLTIgMTQgLTMgMjFsLTEzIDUwYy0xNSAtMTggLTMzIC0zOCAtNTcgLTY0ek0xNTEgNDIzIGMtNDUgLTUzIC05MSAtNzUgLTExMiAtMTU1YzAgLTUgNCAtMTMgMTMgLTEzaDVjODEgMCAxNzMgMTAzIDE3MyAxODVjMCA4IC0xIDE3IC0yIDI1Yy0yIDggLTIgMTYgLTUgMjNjLTEgMyAtNyA2IC0xMiA2Yy0zIDAgLTYgLTEgLTggLTRjLTE2IC0yNSAtMzIgLTQ0IC01MiAtNjd6IiAgICBpZD0icGF0aDAiICAgIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiICAgIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgLz48L3N2Zz4=",
    "bbox": {
      "x": 0,
      "y": 0,
      "width": 273,
      "height": 1188
    },
    "origName": "uniE247",
    "origFont": "Bravura"
  }
};

/***/ }),

/***/ "./src/renderer/graphic.js":
/*!*********************************!*\
  !*** ./src/renderer/graphic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBox": () => (/* binding */ BoundingBox),
/* harmony export */   "G_imgmap": () => (/* binding */ G_imgmap),
/* harmony export */   "PreloadJsonFont": () => (/* binding */ PreloadJsonFont),
/* harmony export */   "canvasCircle": () => (/* binding */ canvasCircle),
/* harmony export */   "canvasImage": () => (/* binding */ canvasImage),
/* harmony export */   "canvasLine": () => (/* binding */ canvasLine),
/* harmony export */   "canvasPath": () => (/* binding */ canvasPath),
/* harmony export */   "canvasPolygon": () => (/* binding */ canvasPolygon),
/* harmony export */   "canvasRect": () => (/* binding */ canvasRect),
/* harmony export */   "canvasText": () => (/* binding */ canvasText),
/* harmony export */   "canvasTextWithBox": () => (/* binding */ canvasTextWithBox),
/* harmony export */   "canvasbBzierCurve": () => (/* binding */ canvasbBzierCurve),
/* harmony export */   "fontDesc": () => (/* binding */ fontDesc),
/* harmony export */   "fontDescSingle": () => (/* binding */ fontDescSingle),
/* harmony export */   "getCharProfile": () => (/* binding */ getCharProfile),
/* harmony export */   "getFontSizeFromHeight": () => (/* binding */ getFontSizeFromHeight),
/* harmony export */   "getPixelRatio": () => (/* binding */ getPixelRatio),
/* harmony export */   "preloadImages": () => (/* binding */ preloadImages),
/* harmony export */   "releaseCanvas": () => (/* binding */ releaseCanvas),
/* harmony export */   "setupHiDPICanvas": () => (/* binding */ setupHiDPICanvas),
/* harmony export */   "svgArcBezie": () => (/* binding */ svgArcBezie),
/* harmony export */   "svgLine": () => (/* binding */ svgLine),
/* harmony export */   "svgPath": () => (/* binding */ svgPath)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts */ "./src/renderer/fonts.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var G_memCanvasStore = {}; // refered by ratio&zoom
//var G_memCanvas = null;
var G_mem_Canvas_size = [600, 600];
//var G_pixelRatio = null;
//var G_zoom = null;
// Utilities
var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox(x, y) {
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    _classCallCheck(this, BoundingBox);
    this.x = [100000, -100000];
    this.y = [100000, -100000];
    if (x !== undefined && y !== undefined) {
      this.add(x, y, w, h);
    }
  }
  _createClass(BoundingBox, [{
    key: "add",
    value: function add(x, y) {
      var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.x[0] = Math.min(x, this.x[0]);
      this.x[1] = Math.max(x + w, this.x[1]);
      this.y[0] = Math.min(y, this.y[0]);
      this.y[1] = Math.max(y + h, this.y[1]);
      return this;
    }
  }, {
    key: "add_BB",
    value: function add_BB(bb) {
      // add another bounding box
      this.x[0] = Math.min(bb.x[0], this.x[0]);
      this.x[1] = Math.max(bb.x[1], this.x[1]);
      this.y[0] = Math.min(bb.y[0], this.y[0]);
      this.y[1] = Math.max(bb.y[1], this.y[1]);
      return this;
    }
  }, {
    key: "add_rect",
    value: function add_rect(rect) {
      this.x[0] = Math.min(rect.x, this.x[0]);
      this.x[1] = Math.max(rect.x + rect.w, this.x[1]);
      this.y[0] = Math.min(rect.y, this.y[0]);
      this.y[1] = Math.max(rect.y + rect.h, this.y[1]);
      return this;
    }
  }, {
    key: "expand",
    value: function expand(x0, x1, y0, y1) {
      this.x[0] -= x0;
      this.x[1] += x1;
      this.y[0] -= y0;
      this.y[1] += y1;
      return this;
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      this.x[0] += dx;
      this.x[1] += dx;
      this.y[0] += dy;
      this.y[1] += dy;
      return this;
    }
  }, {
    key: "scale",
    value: function scale(sx, sy) {
      this.x[0] *= sx;
      this.x[1] *= sx;
      this.y[0] *= sy;
      this.y[1] *= sy;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new BoundingBox(this.x[0], this.y[0], this.x[1] - this.x[0], this.y[1] - this.y[0]);
    }
  }, {
    key: "get",
    value: function get() {
      return {
        x: this.x[0],
        y: this.y[0],
        w: this.x[1] - this.x[0],
        h: this.y[1] - this.y[0]
      };
    }
  }, {
    key: "width",
    value: function width() {
      return this.x[1] - this.x[0];
    }
  }, {
    key: "height",
    value: function height() {
      return this.y[1] - this.y[0];
    }
  }]);
  return BoundingBox;
}();
function canvasRect(canvas, x, y, w, h) {
  var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var context = canvas.getContext("2d");
  context.save();
  if (fill) {
    context.fillStyle = fill;
    context.fillRect(x, y, w, h);
  } else {
    context.beginPath();
    context.rect(x, y, w, h);
    context.stroke();
  }
  context.restore();
}
function canvasCircle(canvas, x, y, r) {
  var draw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  if (draw) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.fill();
  }
  //return {bounding_box:{x:x-r,y:y-r,w:2*r,h:2*r}};
  return {
    bb: new BoundingBox(x - r, y - r, 2 * r, 2 * r)
  };
}
function canvasLine(canvas, x0, y0, x1, y1, opt) {
  var draw = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  if (draw) {
    var context = canvas.getContext("2d");
    context.save(); // In iOS 16.1, somewhat lineWidth is not reset....
    context.beginPath();
    if (opt && opt.dash) context.setLineDash([2, 2]);
    if (opt && opt.width) context.lineWidth = opt.width;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
    //if (opt && opt.dash) context.setLineDash([]);
    //if (opt && opt.width) context.lineWidth = 1;
    context.restore(); // To restore the old state
  }
  //return {bounding_box:{x:Math.min(x0,x1), y:Math.min(y0,y1), w:Math.abs(x0-x1), h:Math.abs(y0-y1)}};
  return {
    bb: new BoundingBox(Math.min(x0, x1), Math.min(y0, y1), Math.abs(x0 - x1), Math.abs(y0 - y1))
  };
}
function canvasPolygon(canvas, points) {
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var draw = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var bb = new BoundingBox();
  for (var i = 0; i < points.length; ++i) {
    bb.add(points[i][0], points[i][1]);
  }
  if (draw) {
    var context = canvas.getContext("2d");
    context.save();
    var orgValues = {};
    if (opt != null) {
      for (var key in opt) {
        orgValues[key] = context[key];
        context[key] = opt[key];
      }
    }
    context.beginPath();
    for (var _i = 0; _i < points.length; ++_i) {
      if (_i == 0) {
        context.moveTo(points[_i][0], points[_i][1]);
      } else {
        context.lineTo(points[_i][0], points[_i][1]);
      }
    }
    if (close) {
      context.closePath();
    }
    context.stroke();
    if (fill) {
      context.fill();
    }
    context.restore();
  }
  return {
    bb: bb
  };
}
function canvasbBzierCurve(canvas, points) {
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // points shuld have 4 points, (start point, control point 1, control point 2, end point)
  var context = canvas.getContext("2d");
  context.save();
  var orgValues = {};
  if (opt != null) {
    for (var key in opt) {
      orgValues[key] = context[key];
      context[key] = opt[key];
    }
  }
  if (opt && "clip-rect" in opt) {
    context.beginPath();
    context.rect(opt["clip-rect"][0], opt["clip-rect"][1], opt["clip-rect"][2], opt["clip-rect"][3]);
    context.clip();
  }
  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);
  context.bezierCurveTo(points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1]);
  if (close) {
    context.closePath();
  }
  context.stroke();
  if (fill) {
    context.fill();
  }
  context.restore();
}
function canvasPath(canvas, svgpathdata) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var opt = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = canvas.getContext("2d");
  ctx.save();
  var orgValues = {};
  if (opt != null) {
    for (var key in opt) {
      orgValues[key] = ctx[key];
      ctx[key] = opt[key];
    }
  }
  if (opt && "clip-rect" in opt) {
    ctx.beginPath();
    ctx.rect(opt["clip-rect"][0], opt["clip-rect"][1], opt["clip-rect"][2], opt["clip-rect"][3]);
    ctx.clip();
  }
  var p = new Path2D(svgpathdata);
  ctx.stroke(p);
  if (fill) ctx.fill(p);
  ctx.restore();
  /*   if (opt != null) {
         for (let key in orgValues) {
             ctx[key] = orgValues[key];
         }
     }
     */
}

// confs as array
function fontDescSingle(fsize, conf) {
  //fontfamily,bold) {
  var sc = "";
  if (conf && conf["font-weight"]) sc += conf["font-weight"] + " ";
  if (conf && conf["font-style"]) sc += conf["font-style"] + " ";
  if (conf && conf["font-variant"]) sc += conf["font-variant"] + " ";
  sc += fsize + "px ";
  sc += conf && conf["font-family"] || "'Arial'"; // not the original config shoud have quotation mark if it means concrete font name. For generic name, quoation is not needed.
  return sc;
}

// confs as array
function fontDesc(fsize, confs) {
  //fontfamily,bold) {
  //return  (bold?"bold ":"")+fsize + "px '" + (fontfamily?fontfamily:"Arial") + "'";
  var s = "";
  if (!confs) return fsize + "px " + "'Arial'"; // Use default settings
  confs.forEach(function (conf, i) {
    var sc = fontDescSingle(fsize, conf);
    s += sc;
    if (i < confs.length - 1) s += ",";
  });
  return s;
}
function getCharProfile(fsize, confs, ratio, zoom) {
  var font = fontDesc(fsize, confs);
  var refstr = font + "/" + ratio + "/" + zoom;
  var yroom = null;
  if (refstr in G_y_char_offsets) yroom = G_y_char_offsets[refstr];else {
    var memkey = ratio + "/" + zoom;
    if (!(memkey in G_memCanvasStore)) {
      var memCanvas = document.createElement("canvas");
      setupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
      //console.log("Pixel ratio = " + ratio + " , zoom = " + zoom);
      G_memCanvasStore[memkey] = memCanvas;
    }
    yroom = judgeTextYPosOffset(G_memCanvasStore[memkey], font); //bold, fontfamily, fsize);
    G_y_char_offsets[refstr] = yroom;
  }
  return yroom;
}
function canvasText(canvas, x, y, text, fsize, align, xwidth, notdraw, opt) {
  var context = canvas.getContext("2d");
  var ta = {
    l: "left",
    c: "center",
    r: "right",
    d: "left" // default
  };

  var tb = {
    t: "top",
    m: "middle",
    b: "bottom",
    d: "top" // default
  };

  var orgfont = context.font;
  var font = fontDesc(fsize, opt && opt.font); //opt?opt.fontfamily:null,opt?opt.bold:null);

  var yadjust = 0;
  var yroom = null;
  context.font = font; //bold + fsize + "px '" + fontfamily + "'";
  context.textAlign = ta[align[0]];
  if (opt && opt.raw) {
    // DO othing
    context.textBaseline = tb[align[1]]; //tb[align[1]];
  } else {
    yroom = getCharProfile(fsize, opt && opt.font, canvas.ratio, canvas.zoom);
    if (align[1] == "t") {
      yadjust = -yroom.top_room;
    } else if (align[1] == "m") {
      yadjust = -(yroom.top_room + yroom.height / 2.0); // This is just a huristic guess
    } else if (align[1] == "b") {
      yadjust = -(yroom.top_room + yroom.height);
    } else {
      // default
    }
    context.textBaseline = "top"; //tb[align[1]];
  }

  var orgValues = {};
  if (opt != null) {
    for (var key in opt) {
      orgValues[key] = context[key];
      context[key] = opt[key];
    }
  }
  if (notdraw != true) {
    if (xwidth != null) context.fillText(text, x, y + yadjust, xwidth);else context.fillText(text, x, y + yadjust); // Nothing drawn if "undefined" is passed for 4th argument. 
  }

  var width = context.measureText(text).width;
  if (xwidth != null) width = Math.min(xwidth, width);

  // eslint-disable-next-line no-constant-condition
  if (false) {}
  if (opt != null) {
    for (var _key in orgValues) {
      context[_key] = orgValues[_key];
    }
  }
  context.font = orgfont;

  // TODO : For backward compatibility, width is kept as is. Remove in the later.
  var xadjust = {
    "left": 0,
    "center": -width / 2,
    "right": -width
  }[ta[align[0]]];
  var ret = {
    width: width,
    bb: new BoundingBox(x + xadjust, y + yadjust, width, yroom.height)
  };
  Object.assign(ret, yroom);
  return ret;
}
function canvasTextWithBox(canvas, x, y, text, fsize) {
  var margin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  var min_width = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var ret = null;
  if (min_width != null) {
    ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt", undefined, true);
    if (ret.width < min_width) {
      ret = canvasText(canvas, x + margin + min_width / 2, y + margin, text, fsize, "ct");
      ret.width = min_width;
    } else {
      ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt");
    }
  } else {
    ret = canvasText(canvas, x + margin, y + margin, text, fsize, "lt");
  }
  canvasRect(canvas, x, y, ret.width + 2 * margin, ret.height + 2 * margin);
  //return {x:x, y:y, width: ret.width+2*margin, height:ret.height+2*margin};
  return {
    bb: new BoundingBox(x, y, ret.width + 2 * margin, ret.height + 2 * margin)
  };
}
function canvasImage(canvas, img, x, y, w, h) {
  var align = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "lt";
  var draw = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  var act_w = img.width;
  var act_h = img.height;

  // only if one of w or y is not specified, scaling applies. 
  if (w != null && h == null) {
    var s = img.width / w;
    act_w = w;
    act_h = img.height / s;
  } else if (w == null && h != null) {
    var _s = img.height / h;
    act_h = h;
    act_w = img.width / _s;
  } else if (w != null && h != null) {
    act_h = h;
    act_w = w;
  }
  var x_shift = 0;
  if (align[0] == "r") x_shift = -act_w;else if (align[0] == "c") x_shift = -act_w / 2;
  var y_shift = 0;
  if (align[1] == "b") y_shift = -act_h;else if (align[1] == "m") y_shift = -act_h / 2;
  if (draw) {
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, x + x_shift, y + y_shift, act_w, act_h);
  }

  //return {bounding_box:{x:x+x_shift, y:y+y_shift,w:act_w,h:act_h}};
  return {
    bb: new BoundingBox(x + x_shift, y + y_shift, act_w, act_h)
  };
}

// SVG related
function svgLine(x0, y0, x1, y1) {
  return "M" + x0 + "," + y0 + " L" + x1 + "," + y1;
}

// SVG related
function svgPath(point_array, close) {
  var svg = "M";
  for (var i = 0; i < point_array.length; ++i) {
    svg += point_array[i][0] + "," + point_array[i][1];
    if (i < point_array.length - 1) svg += " L";
  }
  if (close === true) {
    svg += "Z";
  }
  return svg;
}
function svgArcBezie(point_array) {
  // 4 points are required
  // Draw bround braces
  var svg = "M ";
  svg += point_array[0][0] + " " + point_array[0][1];
  svg += " C";
  for (var i = 1; i < point_array.length; ++i) svg += point_array[i][0] + " " + point_array[i][1] + " ";
  return svg;
}

// Text rendering 

var G_y_char_offsets = {};
function getPixelRatio(canvas) {
  var ctx = canvas.getContext("2d"),
    dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  return dpr / bsr;
}
function setupHiDPICanvas(canvas, w, h, ratio, zoom) {
  var zoomChangeOnly = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!ratio) ratio = getPixelRatio(canvas);
  if (!zoom) zoom = 1.0;
  canvas.ratio = ratio;
  canvas.zoom = zoom;

  // This is not a good manner, though...
  if (zoomChangeOnly) {
    // Reset absolute transforms. Only called at the begging of the rendering    
    var ctx = canvas.getContext("2d");
    ctx.setTransform(ratio * zoom, 0, 0, ratio * zoom, 0, 0);
  } else {
    var _ctx = canvas.getContext("2d");
    canvas.width = w * ratio * zoom;
    canvas.height = h * ratio * zoom;
    canvas.style.width = w * zoom + "px";
    canvas.style.height = h * zoom + "px";
    _ctx.setTransform(ratio * zoom, 0, 0, ratio * zoom, 0, 0);
    _ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  return {
    ratio: ratio
  };
}
function judgeTextYPosOffset(canvas, font, code) /*bold, fontfamily, fontsize) */{
  var context = canvas.getContext("2d");
  if (!code) code = "D";
  var bs = 300; //fontsize * G_pixelRatio;

  context.clearRect(0, 0, bs, bs);
  context.fillStyle = "rgba(255,255,255,1)";
  context.fillRect(0, 0, bs, bs);
  //context.font = bold + fontsize + "px '" + fontfamily + "'";
  context.fillStyle = "rgba(0,0,0,1)";
  context.font = font;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(code, 0, 0);
  var imageData = context.getImageData(0, 0, bs, bs); // Always inside fontsize*fontsize box
  var data = imageData.data;
  var top_room = 0;
  var bottom_room = 0;

  //console.log(imageData.width, imageData.height, data.length);

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
      var nonwhite = A > 0 && (R < 255 || G < 255 || B < 255);
      //console.log([row, col, R,G,B,A]);
      if (nonwhite) {
        found_nonwhite = true;
        break;
      }
    }
    if (found_nonwhite) break;else ++top_room;
  }

  // Judge hight of char
  /*
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
  }*/

  found_nonwhite = false;
  for (row = imageData.height - 1; row >= 0; --row) {
    for (col = 0; col < imageData.width; ++col) {
      var _R = data[col * 4 + 0 + row * imageData.width * 4];
      var _G = data[col * 4 + 1 + row * imageData.width * 4];
      var _B = data[col * 4 + 2 + row * imageData.width * 4];
      var _A = data[col * 4 + 3 + row * imageData.width * 4];
      //console.log([row, col, R,G,B,A]);
      var _nonwhite = _A > 0 && (_R < 255 || _G < 255 || _B < 255);
      if (_nonwhite) {
        found_nonwhite = true;
        break;
      }
    }
    if (found_nonwhite) break;else ++bottom_room;
  }

  // here the raw pixel data resolution is G_pixelRatio * G_zoom times. (Same value as setTransform in SetupHIDPICanvas) 
  return {
    top_room: top_room / canvas.ratio / canvas.zoom,
    height: (imageData.height - top_room - bottom_room) / canvas.ratio / canvas.zoom,
    bottom_room: bottom_room / canvas.ratio / canvas.zoom,
    imgheight: imageData.height / canvas.ratio / canvas.zoom
  };
}
function getFontSizeFromHeight(height, fontfamily, code, tol, opt, ratio, zoom) {
  // Determine the font size of which height is same as specified value.
  // TODO : Binary search
  var canvas_to_use = opt ? opt.canvas : null;
  var memkey = ratio + "/" + zoom;
  if (!(memkey in G_memCanvasStore)) {
    var memCanvas = document.createElement("canvas");
    setupHiDPICanvas(memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], ratio, zoom);
    //console.log("Pixel ratio = " + ratio, + " , Zoom = " + zoom);
    G_memCanvasStore[memkey] = memCanvas;
  }
  if (!canvas_to_use) canvas_to_use = G_memCanvasStore[memkey];
  var maxLoop = 100;
  var curLow = 1;
  var curHigh = 500;
  var px = (curLow + curHigh) / 2;
  var loop = 0;
  if (!tol) tol = 0.5;
  while (loop < maxLoop) {
    var ret = judgeTextYPosOffset(canvas_to_use, px + "px '" + fontfamily + "'", code);
    //console.log("px="+px+", target height="+height);
    //console.log(ret);
    //var tol = 0.4;
    if (ret.height > height + tol) {
      curHigh = px;
      px = (curLow + curHigh) / 2;
    } else if (ret.height < height - tol) {
      curLow = px;
      px = (curLow + curHigh) / 2;
    } else {
      return px;
    }
    ++loop;
  }
  return px;
}
function releaseCanvas(canvas) {
  // To eliminate memory leak, explictly resize to 0.
  canvas.width = 0;
  canvas.height = 0;
  canvas.style.width = "0px";
  canvas.style.height = "0px";
}
var G_imgmap = {};
function preloadImages(imageurls) {
  var promises = [];
  for (var i = 0; i < imageurls.length; ++i) {
    if (imageurls[i] in G_imgmap) continue;
    var p = new Promise(function (resolve, reject) {
      var url = imageurls[i];
      var img = new Image();
      img.src = url;
      img.onload = function () {
        resolve({
          img: img,
          url: url
        });
      };
    });
    promises.push(p);
  }
  return Promise.all(promises).then(function (result) {
    // make map with url
    for (var ii = 0; ii < result.length; ++ii) {
      G_imgmap[result[ii].url] = result[ii].img;
    }
    return result;
  });
}
var embedFontPromise = null;
function PreloadJsonFont() {
  if (embedFontPromise) {
    // To eliminate multiple loads
    return embedFontPromise;
  }
  var promises = [];
  var _loop = function _loop(glyphname) {
    var p = new Promise(function (resolve, reject) {
      var img = new Image();
      img.src = _fonts__WEBPACK_IMPORTED_MODULE_1__.fontData[glyphname].dataURL;
      img.onload = function () {
        resolve({
          img: img,
          url: glyphname
        });
      };
    });
    promises.push(p);
  };
  for (var glyphname in _fonts__WEBPACK_IMPORTED_MODULE_1__.fontData) {
    _loop(glyphname);
  }
  embedFontPromise = Promise.all(promises).then(function (result) {
    // make map with url
    for (var ii = 0; ii < result.length; ++ii) {
      G_imgmap[result[ii].url] = result[ii].img;
    }
    return result;
  });
  return embedFontPromise;
}

/***/ }),

/***/ "./src/renderer/presets.js":
/*!*********************************!*\
  !*** ./src/renderer/presets.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4": () => (/* binding */ A4),
/* harmony export */   "Mobile": () => (/* binding */ Mobile)
/* harmony export */ });
/**
 * Desktop settings (difference from default)
 */
var A4 = {
  paper_width: 96 * 210 / 25.4,
  // 96dpi * A4_width[mm] / 25.4[mm/inche], total canvas width = paper_width, internal paper width is paper_width/text_size
  paper_height: 96 * 297 / 25.4,
  // 96dpi * A4_height[mm] / 25.4[mm/inche], total canvas height = paper_height. internal paper height is paper_height/text_size

  y_title_offset: 50,
  y_subtitle_offset: 70,
  y_artist_offset: 90,
  y_first_page_offset: 120,
  // With header
  y_offset: 50,
  // Without header
  x_offset: 50,
  y_footer_offset: 30,
  title_font_size: 24,
  subtitle_font_size: 20,
  artist_font_size: 20,
  reharsal_mark_font_size: 18,
  rm_area_height: 24 // Rehearsal Mark Area
};

var Mobile = {
  // Paper setting
  paper_width: 375,
  // iPhone 8 etc, the top share as of 2020
  paper_height: 667,
  // iPhone 8 etc, , the top share as of 2020
  text_size: 1.0,
  // total canvas size will be [paper_width * text_size, paper_height*text_size]. NOTE that even the canvas size is scaled with text_size, any coordinate unit/size infomation inside the renderer stays the same and no need to be conscious about text_size value.
  pixel_ratio: 2,
  // integer. null : use system default, this is not configurable in source as it is memoried in global variable.
  ncol: 1,
  // Number of columns of score inside the paper
  nrow: 1,
  // Number of rows of score inside the paper

  // Papaer Margins
  y_title_offset: 2,
  y_subtitle_offset: 16,
  y_artist_offset: 16,
  y_first_page_offset: 30,
  // With header
  y_offset: 10,
  // Without header
  x_offset: 10,
  y_footer_offset: 10,
  // Font size settings
  reharsal_mark_font_size: 12,
  title_font_size: 14,
  subtitle_font_size: 12,
  artist_font_size: 14,
  // 
  base_font_size: 28 // Chord symbol font size
};

/***/ }),

/***/ "./src/renderer/renderer.js":
/*!**********************************!*\
  !*** ./src/renderer/renderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var _graphic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphic */ "./src/renderer/graphic.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
    this.hitManager = new _common_common__WEBPACK_IMPORTED_MODULE_1__.HitManager();
  }
  _createClass(Renderer, [{
    key: "render",
    value: function render() {
      console.log("Run renderer");
    }
  }, {
    key: "getElementsByPosition",
    value: function getElementsByPosition(paper, coord) {
      return this.hitManager.get(paper, coord);
    }
  }, {
    key: "getBoundarySign",
    value: function getBoundarySign(e) {
      if (e === null) return "n";
      return e.typestr;
    }
  }, {
    key: "boundaryTypeWithoutLineBreak",
    value: function boundaryTypeWithoutLineBreak(b0, b1) {
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
      var key = this.getBoundarySign(b0) + this.getBoundarySign(b1);
      if (key in profile) {
        return profile[key];
      }
      throw "Invalid boundary pair : " + key;
    }
  }, {
    key: "boundaryTypeWithLineBreak",
    value: function boundaryTypeWithLineBreak(b0, b1, side) {
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
      var key = this.getBoundarySign(b0) + this.getBoundarySign(b1);
      if (key in profile) {
        return profile[key][side == "begin" ? 1 : 0];
      } else {
        return key[side == "begin" ? 1 : 0];
      }
      //throw "Invalid boundary pair : " + key;
    }
  }, {
    key: "classifyElements",
    value: function classifyElements(measure) {
      var m = measure;
      var header_elements = new Array();
      var body_elements = new Array();
      var footer_elements = new Array();
      var measure_wide_elements = new Array();

      // For simile marks
      var simile_body_idx = new Array();
      var simile_measure_wide_idx = new Array();
      var simile_objs = new Array();
      var musical_elements = m.childNodes;
      for (var ei = 0; ei < musical_elements.length; ++ei) {
        var e = musical_elements[ei];
        if (ei == 0) {
          // First element must be boundary
          header_elements.push(e);
        } else if (ei == musical_elements.length - 1) {
          // Last element must be boundary
          footer_elements.push(e);
        } else {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) {
            body_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest) {
            body_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.LoopIndicator) {
            measure_wide_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.LongRest) {
            measure_wide_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Simile) {
            // Simile is body elements when at least one another body element(including another simile) exsits, otherwise measure wide elements.
            // Judge after screeining.
            simile_body_idx.push(body_elements.length);
            simile_measure_wide_idx.push(measure_wide_elements.length);
            simile_objs.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Time) {
            // Time mark is treated as header element irrespective of its positionat the second element is treated as header part
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.DaCapo) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.DalSegno) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Segno) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Coda) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.ToCoda) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Fine) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Comment) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Lyric) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space) {
            body_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Syncopation) {
            // Intentionally ignore this
          } else {
            throw "Unkown component found";
          }
        }
      }

      // Special treatment for simile
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

      // Special treatment for whole rest
      // Whole rest is a measure rest and not nessesaryly means whole note 
      if (body_elements.length == 1 && body_elements[0] instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest && body_elements[0].note_group_list[0].lengthIndicator.base == 1) {
        var wr = body_elements[0];
        body_elements.splice(0, 1);
        measure_wide_elements.push(wr);
      }
      return {
        header: header_elements,
        body: body_elements,
        footer: footer_elements,
        measure_wide: measure_wide_elements
      };
    }
  }, {
    key: "chordElemClassify",
    value: function chordElemClassify(chord, transpose, half_type, key) {
      var bases = chord.getChordStrBase(transpose, half_type, key);
      var elems = chord.mid_elem_objs;

      // if bases are null, elems are null, then it is just a duration information
      if (bases[0] == null && bases[1] == null && elems === undefined) {
        //x += (C7_width * x_global_scale * body_scaling + chord_space * body_scaling);
        return {
          bases: bases
        };
      }
      var _3rdelem = [];
      var _5thelem = [];
      var _6791113suselem = [];
      var _alteredelem = []; // #11, #9, b9, #13, b13,

      if (elems) {
        var _6exists = false,
          _9exists = false,
          _7exists = false,
          _minus5exists = false,
          _minor_exists = false;
        for (var i = 0; i < elems.length; ++i) {
          var e = elems[i];
          switch (e.type) {
            case "M":
              //if (e.param !== undefined) _6791113suselem.push(e);
              //else _3rdelem.push(e);
              _3rdelem.push(e);
              break;
            case "triad":
              if (e.value == "+") {
                _5thelem.push(e);
              } else {
                _3rdelem.push(e);
              }
              if (e.value == "m") _minor_exists = true;
              break;
            /*case "add":
                _6791113suselem.push(e);
                break;*/
            case "sus":
              _6791113suselem.push(e);
              break;
            case "dig":
              _6791113suselem.push(e);
              _6exists |= e.value == "6";
              _9exists |= e.value == "9";
              _7exists |= e.value == "7";
              break;
            case "tension":
              {
                //case "b":
                //case "#":
                if (e.value != "omit" && e.param == "5") _5thelem.push(e);else if (e.value == "add") _6791113suselem.push(e);else _alteredelem.push(e);
                _minus5exists |= e.value == "b" && e.param == "5";
                break;
              }

            /*case "dim":
                _6791113suselem.push(e);
                break;
            case "alt":
                _alteredelem.push(e);
                break;*/
          }
        }
      }

      return {
        bases: bases,
        _3rdelem: _3rdelem,
        _5thelem: _5thelem,
        _6791113suselem: _6791113suselem,
        _alteredelem: _alteredelem,
        _6_and_9_exists: _6exists && _9exists,
        _halfdim_exists: _minor_exists && _7exists && _minus5exists
      };
    }
  }, {
    key: "getThreshDuration",
    value: function getThreshDuration(li) {
      var renpu = li.renpu;
      var base = li.base;
      var base_length = 0;
      if (!renpu) {
        base_length = _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / 4;
      } else if (renpu == 2) {
        base_length = _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / base / 2 * 3; // shall be integer
      } else if (renpu == 3) {
        base_length = _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / base * 2; // shall be integer
      } else if (renpu <= 7) {
        base_length = _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / base * 4; // shall be integer
      } else if (renpu <= 15) {
        base_length = _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / base * 8; // shall be integer
      }

      return base_length;
    }
  }, {
    key: "renderRsArea",
    value: function renderRsArea(x,
    // This represents screen position and scaling is not considered
    draw_scale,
    // scaling applied fro this elements. 
    elems, paper, rs_y_base, row_height, meas_start_x, music_context, meas, param, room_for_rs_per_element,
    // room per element in RS are for set of elemes. This is on-screen coordinates. Already considred scaling impact.
    balken, is_last_body_elem_group_in_a_measure) {
      // elements in a measure
      for (var ei = 0; ei < elems.length; ++ei) {
        var e = elems[ei];
        // no duration information
        if (e.note_group_list === null) {
          throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
        }
        var balken_element = e.renderprop.balken_element; // this is corresponds to single flex element

        // Rule of balken grouping:
        // tuplet is prioritized
        //   : if xplet is detected, the contiguous elements(either slash, note, rest) with the same(or integer multiple) 
        //     length are grouped until the sum of length reaches the base length( i.e. 4_3 -> 2, 4_5 -> 1)
        //     note that xplet notation rule is :
        //       - triplet : base length is 2 times of time value : e.g. 8_3 8_3 8_3 = 4
        //       - 5, 6, 7 : base length is 4 times of time value : e.g. 4_5,...,4_5 = 1
        //       - 9 ~ 15  : base length is 8 times of time value : e.g. 8_9,....,8_9 = 1
        //       - duplet  : base length is 1.5 times of time value : 2_2 2_2 = 2., 8_2 8_2 -> 8.
        // fallback to the default grouping policy:
        //   - Rest is singleton
        //   - If the contiguous notes/slashes 's length becomes larger than 4th note, balken are separated.

        // Flush current groups if needed
        if (music_context.first_li) {
          var _threshDuration = this.getThreshDuration(music_context.first_li);
          var _flushCond = music_context.in_tuplet == false && balken_element.lengthIndicator && (balken_element.chord_length >= _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / 4 || balken_element.lengthIndicator.renpu != null) || music_context.in_tuplet == true && balken_element.lengthIndicator && (balken_element.lengthIndicator.renpu == null || music_context.first_li.renpu != balken_element.lengthIndicator.renpu || music_context.cumal_block_duration + balken_element.chord_length > _threshDuration) || balken_element.type == "simile";
          // Note : Space does not make flushCond = true.

          // Flush current groups
          if (_flushCond) {
            var dbret = this.drawRsAreaElements(draw_scale, paper, balken, rs_y_base, row_height, meas_start_x, music_context, meas, param);
            balken.groups = [];
            x = dbret.x;
            music_context.first_li = balken_element.lengthIndicator; // update the head li. Could be null.
            music_context.cumal_block_duration = 0;
            if (music_context.in_tuplet == false && balken_element.lengthIndicator.renpu != null) music_context.in_tuplet = true;else if (music_context.in_tuplet == true && balken_element.lengthIndicator.renpu == null) music_context.in_tuplet = false;
          }
        } else {
          music_context.first_li = balken_element.lengthIndicator; // can be null for e.g. space or simile
          music_context.in_tuplet = balken_element.lengthIndicator && balken_element.lengthIndicator.renpu != null || false; // Element w/o length indicator has null LI.
        }

        music_context.pos_in_a_measure += balken_element.chord_length;
        music_context.cumal_block_duration += balken_element.chord_length;

        // This needed because we need to draw bars or balken etc... for some group of elements.
        // Such bars or balken are drawn only when required elements are all collected.
        balken.groups.push({
          balken_element: balken_element,
          e: e,
          org_x: x,
          org_draw_scale: draw_scale,
          org_room_for_rs_per_element: room_for_rs_per_element
        });
        var threshDuration = music_context.first_li ? this.getThreshDuration(music_context.first_li) : 0;
        var flushCond = music_context.in_tuplet == false && music_context.first_li && (
        // first_li is checked to eliminate the case only space/simile is in flushed.

        music_context.pos_in_a_measure % (_common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / 4) == 0 || balken_element.chord_length >= _common_common__WEBPACK_IMPORTED_MODULE_1__.WHOLE_NOTE_LENGTH / 4) || music_context.in_tuplet == true && music_context.first_li && music_context.cumal_block_duration == threshDuration;
        if (flushCond || ei == elems.length - 1 && is_last_body_elem_group_in_a_measure // the last element in a measure
        ) {
          var _dbret = this.drawRsAreaElements(draw_scale, paper, balken, rs_y_base, row_height, meas_start_x, music_context, meas, param);
          x = _dbret.x;
          balken.groups = [];
          music_context.first_li = null; // update the head li
          music_context.cumal_block_duration = 0;
          music_context.in_tuplet = false;
        }
      }
      return {
        x: x
      };
    }
  }, {
    key: "generateBalkenElement",
    value: function generateBalkenElement(e, x, row_height, music_context) {
      // no duration information
      if (e.note_group_list === null) {
        throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
      }
      var _5lines_intv = row_height / 4;
      var chord_length = 10000000;
      var pos_on_5lines = []; // For notes only. bottom line is 0, second bottom line is 2, ... top line is 8
      var has_tie = false;
      var sharp_flats = [];

      // Currently only one note_group at a time is assumed
      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest) {
        for (var ngi = 0; ngi < e.note_group_list.length; ++ngi) {
          var ng = e.note_group_list[ngi];
          var note_profiles = ng.note_profiles;
          var d = ng.lengthIndicator.base; //ng.length_s.match(/[0-9]+/)[0];
          var numdot = ng.lengthIndicator.numdot; //ng.length_s.substr(d.length);
          chord_length = Math.min(ng.lengthIndicator.length, chord_length); // Take the note group of min-length. TODO for cater for multi-group notes
          has_tie = ng.lengthIndicator.has_tie; //ng.has_tie;
          if (note_profiles === null) {
            // slash or rest
            pos_on_5lines.push(4); // Not used, but put center line for now.
          } else {
            // notes
            for (var nri = 0; nri < note_profiles.length; ++nri) {
              var dy = _5lines_intv / 2; // 1/2 of interval of 5 lines
              var NLIST = {
                C: 0,
                D: 1,
                E: 2,
                F: 3,
                G: 4,
                A: 5,
                B: 6
              };
              var pos_idx = NLIST[note_profiles[nri].note.name] + 7 * (note_profiles[nri].note.octave - 3); // C3 is 0
              var yoffset = pos_idx * dy; // C3 offset = 0
              var pos_on_5line = Math.round(yoffset / dy) - 2;
              pos_on_5lines.push(pos_on_5line);
              if (music_context.accidental_info[pos_idx] == note_profiles[nri].note.accidental) sharp_flats.push(null);
              // no need of accidental. null is no mark. 0 is natural.
              else sharp_flats.push(note_profiles[nri].note.accidental); // 0 is natural. null is no mark.
              music_context.accidental_info[pos_idx] = note_profiles[nri].note.accidental;
            }
          }
        }
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space) {
        chord_length = 0; // Does not affect any music context
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Simile) {
        chord_length = 10000000; // TODO: Think about the treatment of Simile in RS region
      }

      var type = null;
      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest) type = "rest";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space) type = "space";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Simile) type = "simile";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) {
        if (e.is_with_rest) type = "rest";else if (e.note_group_list[0].note_profiles === null) type = "slash";else type = "notes";
      }
      var lengthIndicator = null;
      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) lengthIndicator = e.note_group_list[0].lengthIndicator;else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest) lengthIndicator = e.note_group_list[0].lengthIndicator;
      var balken_element = {
        type: type,
        numdot: numdot,
        chord_length: chord_length,
        notes_coord: {
          x: [],
          y: null
        },
        // x, y coordinates are filled out later in stage 2. x and y are array correspoding to each notes.
        note_value: d,
        has_tie: has_tie,
        pos_on_5lines: pos_on_5lines,
        // for notes only
        lengthIndicator: lengthIndicator,
        sharp_flats: sharp_flats,
        // for notes only
        renderprop: {} // for internal use
      };

      return balken_element;
    }
  }, {
    key: "drawRsAreaWithoutFlagBalken",
    value: function drawRsAreaWithoutFlagBalken(draw, paper, param, e, balken_element, x, rs_y_base, row_height) {
      var bounding_box = new _graphic__WEBPACK_IMPORTED_MODULE_2__.BoundingBox();
      var _5lines_intv = row_height / 4;
      var deltax_acc = 10;
      var ys = balken_element.notes_coord.y;

      // Stage 1 (draw=false), no y position information available then null, in that case put dammy value
      if (!ys && balken_element.type == "slash") {
        ys = [0];
      } else if (!ys && balken_element.type == "notes") {
        ys = new Array(e.note_group_list[0].note_profiles.length).fill(0);
      }
      var d = balken_element.note_value;
      var pos_on_5lines = balken_element.pos_on_5lines;
      var sharp_flats = balken_element.sharp_flats;
      var numdot = balken_element.numdot;
      var bo_group = null; //paper.set();

      if (balken_element.type == "slash") {
        var ret = null;
        if (d == "0" || d == "1") {
          ret = this.renderSlash(paper, bo_group, x, ys[0], d, numdot, _5lines_intv, draw);
        } else {
          ret = this.renderSlash(paper, bo_group, x, ys[0], d, numdot, _5lines_intv, draw);
        }
        bounding_box.add_rect(ret.bounding_box);
        balken_element.renderprop.note_x_center = x;
        if (draw) {
          // notes_coord.x : 
          //   0 : Left side of note including accidentals
          //   1 : Left side of note
          //   2 : Right side of note
          //   3 : Right side of note including dots
          balken_element.notes_coord.x.push([x, x, x + ret.bounding_box.w, x + ret.bounding_box.w]);
        }
      } else if (balken_element.type == "notes") {
        var xs = [];
        var accidental_exists = balken_element.sharp_flats.some(function (sf) {
          return sf !== null;
        });
        var as = accidental_exists ? deltax_acc : 0;
        var note_x_center = x + as;
        balken_element.renderprop.note_x_center = note_x_center;
        for (var ci = 0; ci < ys.length; ++ci) {
          var y = ys[ci];
          var r = null;
          // eslint-disable-next-line no-empty
          if (d == "0") {} else if (d == "1") {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_2__.G_imgmap.uniE0A2,
            //w1note
            note_x_center, y, null, _5lines_intv, "lm", draw);
          } else if (d == "2") {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_2__.G_imgmap.uniE0A3,
            //w2note
            note_x_center, y, null, _5lines_intv, "lm", draw);
          } else {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_2__.G_imgmap.uniE0A4,
            // bnote
            note_x_center, y, null, _5lines_intv, "lm", draw);
          }
          if (!r) {
            throw "SOMETHING WRONG WITH PARSING";
          }
          var note_right_side = note_x_center + r.bb.width();
          bounding_box.add_BB(r.bb);

          // dots
          var dots_bounding_box = new _graphic__WEBPACK_IMPORTED_MODULE_2__.BoundingBox();
          dots_bounding_box.add(note_right_side, y);
          for (var i = 0; i < numdot; ++i) {
            var dy = pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasCircle(paper, note_x_center + 12 + i * 5, y + dy, 1, draw);
            bounding_box.add_BB(r.bb);
            dots_bounding_box.add_BB(r.bb);
          }
          if (draw) {
            // notes_coord.x : 
            //   0 : Left side of note including accidentals
            //   1 : Left side of note
            //   2 : Right side of note
            //   3 : Right side of note including dots
            balken_element.notes_coord.x.push([x, note_x_center, note_right_side, note_right_side + dots_bounding_box.get().w]);
          }

          // draw sharp, flat and natrual
          // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html
          if (sharp_flats[ci] !== null) {
            var svgname = {
              11: "uni266D",
              1: "uni266F",
              0: "uni266E"
            };
            var svg_dy = {
              11: -0.5,
              1: 0,
              0: 0
            };
            var url = svgname[sharp_flats[ci]];
            var _dy = svg_dy[sharp_flats[ci]];
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_2__.G_imgmap[url], x, y + _5lines_intv * _dy, null, _5lines_intv * 2.5, "lm", draw);
            bounding_box.add_BB(r.bb);
          }

          // Draw additional horizontal lines
          for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
            if (p5i % 2 != 0) continue;
            var a5y = _5lines_intv / 2 * (8 - p5i); // rs_y_base corresponds to pos#3

            _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, note_x_center - 3, rs_y_base + a5y, note_x_center + 12, rs_y_base + a5y, {
              width: 1
            }, draw);
          }
          for (var _p5i = pos_on_5lines[ci]; _p5i >= 10; --_p5i) {
            if (_p5i % 2 != 0) continue;
            var _a5y = _5lines_intv / 2 * (8 - _p5i); // rs_y_base corresponds to pos#3

            _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, note_x_center - 3, rs_y_base + _a5y, note_x_center + 12, rs_y_base + _a5y, {
              width: 1
            }, draw);
          }
        }
      } else if (balken_element.type == "rest") {
        // e is Rest or Chord(with with_rest flag on)

        // This calls the child class's renderRest ... maybe good to refactor
        var _r = this.renderRest(e, paper, draw, x, rs_y_base, "l", row_height, row_height, param);
        bounding_box.add_BB(_r.bb);
        if (draw) {
          // notes_coord.x : 
          //   0 : Left side of note including accidentals
          //   1 : Left side of note
          //   2 : Right side of note
          //   3 : Right side of note including dots
          balken_element.notes_coord.x.push([x, x, x + _r.bb.width(), x + _r.bb.width()]);
        }
      } else if (balken_element.type == "space") {
        // Do not use expand here in case only one space is grouped in balken group
        bounding_box.add(x, rs_y_base, 0.5 * param.base_font_size, row_height);
      } else if (balken_element.type == "simile") {
        alert("Impleetaion not ready for siile in RS area");
      }

      // Apply minimum room for RS area elements
      bounding_box.expand(0, param.rs_elem_min_room, 0, 0); // Apply minimum room

      return {
        bounding_box: bounding_box
      };
    }
  }, {
    key: "balkenGrouping",
    value: function balkenGrouping(balken) {
      // Classify the elements for preparation of drawing : balkenGrouping()
      //Type a : Sole Rest or Space (Single element)
      //Type b : Sole Chord with Note value longer than or equal to 4th-note. (Note : 4_3, 4_5 etc ... would also classifeid here.)
      //Type c : Sole Chord(Isolated Chord) with Note value shorter than 4th-note. 
      //Type d : >= 2 contiguous Chord with note value shorter than 4th-note. Space can be inserted between the chords.
      var balkenGroups = [];
      for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
        //let ys = balken.groups[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
        var g = balken.groups[gbi];
        if (g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest || g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space || g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord && g.e.is_with_rest) {
          balkenGroups.push({
            type: "a",
            elem: [g]
          });
        } else if (g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord && g.balken_element.note_value <= 4) {
          balkenGroups.push({
            type: "b",
            elem: [g]
          });
        } else {
          // 8-th and shorter Chord
          var tmp = [g];
          var t_gbi = gbi + 1;
          // Collect contiguous Chord(not with rest) of less than 8th duration and Space.  Space is included intentionally for the case space is inserted between chords with balken.
          while (t_gbi < balken.groups.length) {
            if (balken.groups[t_gbi].e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space || balken.groups[t_gbi].e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord && !balken.groups[t_gbi].e.is_with_rest && balken.groups[t_gbi].balken_element.note_value >= 8) {
              tmp.push(balken.groups[t_gbi]);
              ++t_gbi;
            } else {
              break;
            }
          }
          if (tmp.filter(function (t) {
            return t.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord;
          }).length == 1) {
            tmp.forEach(function (t) {
              if (t.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) balkenGroups.push({
                type: "c",
                elem: [t]
              });else if (t.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space) balkenGroups.push({
                type: "a",
                elem: [t]
              });
            });
            //                   balkenGroups.push({type:"c", elem:tmp});
          } else {
            balkenGroups.push({
              type: "d",
              elem: tmp
            });
          }
          gbi = t_gbi - 1; // as outer for will increment gbi, minus 1 here.
        }
      }

      return balkenGroups;
    }
  }, {
    key: "drawRsAreaElements",
    value: function drawRsAreaElements(draw_scale,
    // This is the draw scale of latest element, coudl be differnt from draw scale of old eleents in registred bolken groups
    paper, balken, rs_y_base, row_height, meas_start_x, music_context, meas, param) {
      var bounding_box = new _graphic__WEBPACK_IMPORTED_MODULE_2__.BoundingBox();

      // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes
      var _5lines_intv = row_height / 4;
      var x = balken.groups[0].org_x; // on screen position, no scaling applied

      // Balken Grouping
      var balkenGroups = this.balkenGrouping(balken);

      // Draw Balken for each group
      for (var i = 0; i < balkenGroups.length; ++i) {
        var balkenGroup = balkenGroups[i];
        // a : sole Rest
        // b : sole Chord/Note of 4th note and longer
        // c : sole CHord/Note with shorter than 4th note but is judged as sole note
        // d : more than 1 contiguous chords with shorter than 4th notes. Balken will be drawn. Mixing of Space lement is possible unless number of chord >= 2.
        if (balkenGroup.type == "a" || balkenGroup.type == "b" || balkenGroup.type == "c") {
          x = this.drawBalkenABC(balkenGroup, x, rs_y_base, _5lines_intv, bounding_box, param, paper, row_height, music_context, meas_start_x, meas, draw_scale);
        } else if (balkenGroup.type == "d") {
          // This is what we need to call draw balken
          x = this.drawBalkenD(balkenGroup, x, rs_y_base, _5lines_intv, param, bounding_box, paper, music_context, row_height, meas_start_x, meas, draw_scale);
        }
      }

      // Draw tuplet signs if needed
      this.drawTuplet(balken, balkenGroups, bounding_box, paper, true, param);
      return {
        x: x,
        bb: bounding_box
      };

      // Draw tuplet marks
    }
  }, {
    key: "setNoteYCoords",
    value: function setNoteYCoords(balkenGroup, rs_y_base, _5lines_intv) {
      for (var gbi = 0; gbi < balkenGroup.length; ++gbi) {
        //let ys = balkenGroup[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
        var e = balkenGroup[gbi].e;
        var group_y = [];
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Simile) {
          group_y.push(rs_y_base); // just dammy
        } else {
          for (var ngi = 0; ngi < e.note_group_list.length; ++ngi) {
            var ng = e.note_group_list[ngi];
            var note_profiles = ng.note_profiles;
            if (note_profiles === null) {
              // slash or rest
              group_y.push(parseInt(rs_y_base + _5lines_intv * 2)); // center
              //pos_on_5lines.push(4); // Not used, but put center line for now.
            } else {
              // notes
              for (var nri = 0; nri < note_profiles.length; ++nri) {
                var dy = _5lines_intv / 2; // 1/2 of interval of 5 lines
                var NLIST = {
                  C: 0,
                  D: 1,
                  E: 2,
                  F: 3,
                  G: 4,
                  A: 5,
                  B: 6
                };
                var pos_idx = NLIST[note_profiles[nri].note.name] + 7 * (note_profiles[nri].note.octave - 3); // C3 is 0
                var yoffset = pos_idx * dy; // C3 offset = 0
                var ypos = rs_y_base + dy * 10 - yoffset; // rs_y_base corresopnds to the center of rs region and is corresponding to A3 when the notes are drawn with "top".
                //var pos_on_5line = Math.round(yoffset / dy) - 2;
                group_y.push(ypos);
                //pos_on_5lines.push(pos_on_5line);
              }
            }
          }
        }

        balkenGroup[gbi].balken_element.notes_coord.y = group_y;
      }
    }
  }, {
    key: "determineFlagDirections",
    value: function determineFlagDirections(balkenGroup, rs_y_base, _5lines_intv) {
      var center_y = 0.0;
      var min_y = 10000000;
      var max_y = 0;
      var gbi_at_min_y = null;
      var gbi_at_max_y = null;
      var cnt_y = 0;
      for (var gbi = 0; gbi < balkenGroup.length; ++gbi) {
        var e = balkenGroup[gbi].e;
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) {
          //} || e instanceof common.Rest){

          var ys = balkenGroup[gbi].balken_element.notes_coord.y;
          for (var ci = 0; ci < ys.length; ++ci) {
            center_y += ys[ci];
            if (min_y > ys[ci]) {
              min_y = ys[ci];
              gbi_at_min_y = gbi;
            }
            if (max_y < ys[ci]) {
              max_y = ys[ci];
              gbi_at_max_y = gbi;
            }
            cnt_y += 1;
          }
        } else {
          // Does not affecct flag direction  
        }
      }
      center_y = Math.floor(center_y / cnt_y);
      var upper_flag = center_y > rs_y_base + _5lines_intv * 2;
      return {
        upper_flag: upper_flag,
        gbi_at_min_y: gbi_at_min_y,
        gbi_at_max_y: gbi_at_max_y,
        min_y: min_y,
        max_y: max_y
      };
    }
  }, {
    key: "drawWithoutBalkensWrap",
    value: function drawWithoutBalkensWrap(balkenGroup, paper, param, rs_y_base, row_height, bounding_box, music_context, x, upper_flag, meas_start_x, meas, draw_scale) {
      var _this = this;
      var _loop = function _loop() {
        var this_elem_draw_scale = balkenGroup[gbi].org_draw_scale;
        var e = balkenGroup[gbi].e;
        var balken_element = balkenGroup[gbi].balken_element;
        var ys = balken_element.notes_coord.y;
        d = balken_element.note_value;
        paper.getContext("2d").scale(this_elem_draw_scale, 1);
        // Here all the output and set value by following funtion will be that with scaling apply.
        // To use the values which the following functions generates, apply "* this_elem_draw_scale".
        var wo_flags = _this.drawRsAreaWithoutFlagBalken(true, paper, param, e, balken_element, x / this_elem_draw_scale, rs_y_base, row_height);
        paper.getContext("2d").scale(1.0 / this_elem_draw_scale, 1);

        // ----
        // Convert output to on-screen coordinates
        // -----
        wo_flags.bounding_box.scale(this_elem_draw_scale, 1.0);
        for (var ncc = 0; ncc < balken_element.notes_coord.x.length; ++ncc) {
          balken_element.notes_coord.x[ncc] = balken_element.notes_coord.x[ncc].map(function (x) {
            return x * this_elem_draw_scale;
          });
        }
        _this.hitManager.add(paper, wo_flags.bounding_box, e);
        bounding_box.add(wo_flags.bounding_box); // global RS are bounding box

        var xs = balken_element.notes_coord.x;
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord && !e.is_with_rest) {
          if (music_context.tie_info.rs_prev_has_tie) {
            // NOTE : Tie is always drawn with on-screen coordinates, no scaling apply
            // Draw tie line
            prev_coord = music_context.tie_info.rs_prev_coord;
            psm = music_context.tie_info.rs_prev_meas; // Check the consistency.
            if (prev_coord.y.length != ys.length) {
              throw "INVALID TIE NOTATION";
            }
            var dy = 0;
            var sdx = 0;
            var edx = 0;
            var round = 0;
            if (balkenGroup[gbi].balken_element.type == "slash") {
              // slash only has down flag
              dy = -3;
              sdx = 3;
              edx = 0;
              round = 6;
            } else {
              // notes
              if (upper_flag) {
                dy = 3;
                sdx = 3;
                edx = -3;
                round = -6;
              } else {
                dy = -3;
                sdx = 3;
                edx = -3;
                round = 6;
              }
            }
            for (var ci = 0; ci < ys.length; ++ci) {
              var y = ys[ci];
              //let prev_draw_scale = music_context.tie_info.rs_prev_draw_scale;

              if (y != prev_coord.y[ci] || music_context.tie_info.rs_prev_tie_paper != paper) {
                // Crossing measure row. Previous RS mark could be on another page.
                // Make sure to create curve on the paper on which previous RS is drawn.
                brace_points = [[prev_coord.x[ci][3] + sdx, prev_coord.y[ci] + dy], [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] - round + dy], [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] - round + dy], [psm.renderprop.meas_end_x + 20, prev_coord.y[ci] + dy]];
                var clip_rect = [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] - 50, psm.renderprop.meas_end_x - (prev_coord.x[ci][3] + sdx) + 5, 100];

                // eslint-disable-next-line no-constant-condition
                if (false) {}

                // In case the previous paper is in the same paper, "draw_scale" is currently applied,
                // then temporaryly deactivate scaling.
                // In case of differnt paper, such paper shall already be reverted back to scaling=1, 
                // no need to do anything.
                // Update : 2020 09 03 : No need to apply scaing as all the coordinates are normalized
                //                       to on-screen coordinates
                //if(paper == music_context.tie_info.rs_prev_tie_paper)
                //    music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(1.0/draw_scale, 1.0);

                _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasbBzierCurve(music_context.tie_info.rs_prev_tie_paper, brace_points, false, false, {
                  "clip-rect": clip_rect
                });
                brace_points = [[meas_start_x - 20, y + dy], [meas_start_x - 20, y - round + dy], [xs[ci][0] + edx, y - round + dy], [xs[ci][0] + edx, y + dy]];
                clip_rect = [meas_start_x - 5, y - 50, x - (meas_start_x - 5), 100];

                //paper.getContext("2d").scale(1.0/draw_scale, 1.0);

                _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasbBzierCurve(paper, brace_points, false, false, {
                  "clip-rect": clip_rect
                });

                //paper.getContext("2d").scale(draw_scale, 1.0);
              } else {
                var _brace_points = [[prev_coord.x[ci][3] + sdx, prev_coord.y[ci] + dy], [prev_coord.x[ci][3] + sdx, prev_coord.y[ci] - round + dy], [xs[ci][0] + edx, y - round + dy], [xs[ci][0] + edx, y + dy]];

                //paper.getContext("2d").scale(1.0/draw_scale, 1.0);

                _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasbBzierCurve(paper, _brace_points, false, false);

                //paper.getContext("2d").scale(draw_scale, 1.0);
              }
            }
          }

          music_context.tie_info.rs_prev_has_tie = balkenGroup[gbi].balken_element.has_tie;
          music_context.tie_info.rs_prev_tie_paper = paper;
          music_context.tie_info.rs_prev_coord = balken_element.notes_coord;
          music_context.tie_info.rs_prev_draw_scale = draw_scale;
          music_context.tie_info.rs_prev_meas = meas;
        }
        e.renderprop.x = x;
        balken_element.renderprop.x = x;

        // Here is the only update of x
        //   * org_room_for_rs_per_element is with on-screen coordinates. In case scaling apply, this value is already set to 0.
        x += wo_flags.bounding_box.width() + balkenGroup[gbi].org_room_for_rs_per_element; // TODO : FIXME to cater for actual width of components
      };
      for (var gbi = 0; gbi < balkenGroup.length; ++gbi) {
        var d, prev_coord, psm, brace_points;
        _loop();
      }
      return x;
    }
  }, {
    key: "drawTuplet",
    value: function drawTuplet(balken, balkenGroups, bounding_box, paper, draw, param) {
      // Draw tuplet(renpu) marker.
      // Tuplet marker drawing is possible even if no balken drawn. e.g. 
      var first_chord_rest_idx = balken.groups.findIndex(function (g) {
        return g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord || g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest;
      });
      if (first_chord_rest_idx < 0) return;
      var last_chord_rest_idx = _common_common__WEBPACK_IMPORTED_MODULE_1__.findLastIndex(balken.groups, function (g) {
        return g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord || g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Rest;
      });
      var tuplet = balken.groups[first_chord_rest_idx].balken_element.lengthIndicator.renpu; // TODO : Space should be eliminated

      if (!tuplet) return; // No tuplet.

      var pssx = balken.groups[first_chord_rest_idx].balken_element.notes_coord.x[0][1];
      var psex = balken.groups[last_chord_rest_idx].balken_element.notes_coord.x[0][2];
      var ro = 10;
      var center_x = (pssx + psex) / 2.0;
      var inherit_balken = balkenGroups.length == 1 && balkenGroups[0].type == "d";
      var slope = 0.0;
      var intercept = 0.0;
      var upper_position = true; // By default put it in the upper position.

      if (inherit_balken) {
        slope = balkenGroups[0].balken_draw_info.slope;
        intercept = balkenGroups[0].balken_draw_info.intercept;
        upper_position = balkenGroups[0].balken_draw_info.upper_flag;
      } else {
        // Draw tuplet mark irrespective of slope for balken
        var chords = balkenGroups.filter(function (bg) {
          return bg.type != "a";
        });
        slope = 0.0; // horizontal line for now
        var really_min_y = Math.min.apply(null, chords.map(function (bg) {
          return bg.balken_draw_info.min_y;
        }));
        var really_max_y = Math.max.apply(null, chords.map(function (bg) {
          return bg.balken_draw_info.max_y;
        }));
        var num_upper_flag = chords.filter(function (bg) {
          return bg.balken_draw_info.upper_flag == true;
        }).length;
        upper_position = num_upper_flag > chords.length - num_upper_flag;

        // Pla
        intercept = upper_position ? really_min_y - param.note_bar_length : really_max_y + param.note_bar_length;
      }
      var r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasText(paper, center_x, slope * center_x + intercept + (upper_position ? -ro : ro), tuplet + "", 12, "cm", undefined, !draw);
      bounding_box.add_BB(r.bb);

      // eslint-disable-next-line no-constant-condition
      if (!inherit_balken) {
        //same_sds[0].balken_element.note_value < 8) {
        var rno = 10;
        var rnh = 4;
        var points1 = [[pssx, slope * pssx + intercept + (upper_position ? -rnh : rnh)], [pssx, slope * pssx + intercept + (upper_position ? -rno : rno)], [center_x - 7, slope * (center_x - 7) + intercept + (upper_position ? -rno : rno)]];
        var points2 = [[center_x + 7, slope * (center_x + 7) + intercept + (upper_position ? -rno : rno)], [psex, slope * psex + intercept + (upper_position ? -rno : rno)], [psex, slope * psex + intercept + (upper_position ? -rnh : rnh)]];
        var _r2 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasPolygon(paper, points1, false, false, null, draw);
        bounding_box.add_BB(_r2.bb);
        _r2 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasPolygon(paper, points2, false, false, null, draw);
        bounding_box.add_BB(_r2.bb);
      }
    }
  }, {
    key: "drawBalkenABC",
    value: function drawBalkenABC(balkenGroup, x, rs_y_base, _5lines_intv, bounding_box, param, paper, row_height, music_context, meas_start_x, meas, draw_scale) {
      var elements = balkenGroup.elem;
      if (elements.length != 1) {
        throw "Invalid context in draw_balken_abc";
      }

      // 0. make notes_coord for y axis
      this.setNoteYCoords(elements, rs_y_base, _5lines_intv);

      // 1. determine the flag direction here
      var dfret = this.determineFlagDirections(elements, rs_y_base, _5lines_intv);
      var upper_flag = dfret.upper_flag;
      balkenGroup.balken_draw_info = Object.assign({}, dfret);

      //let x = balkenGroup[0].org_x; // on screen position, no scaling applied

      // 2. Draw notes and slashes without bars, flags and balkens
      x = this.drawWithoutBalkensWrap(elements, paper, param, rs_y_base, row_height, bounding_box, music_context, x, upper_flag, meas_start_x, meas, draw_scale);
      if (!(elements[0].e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord) || elements[0].e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord && elements[0].e.is_with_rest) {
        return x; //{ x: x, bb: bounding_box };
      }

      // 4. Draw vertical bars
      for (var gbi = 0; gbi < elements.length; ++gbi) {
        // Currnetly, not apply scaling for vertical line and line width 1 always set to 1

        var ys = elements[gbi].balken_element.notes_coord.y;
        var xs = elements[gbi].balken_element.notes_coord.x;
        var _d = elements[gbi].balken_element.note_value;

        //var intercept =
        //(upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) -
        //slope * (upper_flag ? x_at_min_y : x_at_max_y);

        if (elements[gbi].balken_element.type == "slash") {
          var _bar_x = upper_flag ? xs[0][2] : xs[0][1];
          // eslint-disable-next-line no-empty
          if (_d <= 1) {} else {
            var r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, _bar_x, ys[0] + 3, _bar_x, ys[0] + (upper_flag ? -param.note_bar_length : param.note_bar_length), {
              width: 1
            }, true);
            bounding_box.add_BB(r.bb);
          }
          //bar_flag_group.push(o);
        } else if (elements[gbi].balken_element.type == "notes") {
          // eslint-disable-next-line no-empty
          if (_d <= 1) {} else {
            var _bar_x2 = upper_flag ? xs[0][2] : xs[0][1];
            var y0 = upper_flag ? Math.max.apply(null, ys) : Math.min.apply(null, ys);
            var y1 = upper_flag ? Math.min.apply(null, ys) - param.note_bar_length : Math.max.apply(null, ys) + param.note_bar_length;
            // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.

            var _r3 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, _bar_x2, y0, _bar_x2, y1, {
              width: 1
            }, true);
            bounding_box.add_BB(_r3.bb);
          }
          // eslint-disable-next-line no-empty
        } else if (elements[gbi].balken_element.type == "rest") {}
      }
      //group.push(bar_flag_group);

      // 5. Draw flags

      // This is sigle flag/balken, then scaling apply. This is the only case we apply the scaling
      var this_elem_draw_scale = elements[0].org_draw_scale;

      // Normal drawing of flags
      var bar_x = elements[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var d = elements[0].balken_element.note_value;
      var numflag = _common_common__WEBPACK_IMPORTED_MODULE_1__.myLog2(parseInt(d)) - 2;

      // 8 and 16 the has same length of vertical bars
      // 32 and uppper will have longer bars of which delta is corresponding to (Num flags - 2)
      if (numflag >= 1) {
        var x_adj = -0.5; // subpixel adjustment
        var barlen_delta = Math.max(0, (numflag - 2) * 5); // "5" is magic number adjusted for this paticular font
        var flag_w = _5lines_intv * 1.1; // Normalize by width. Unfortunately, it is not easy to normalize with height as the rule is not clear. "1.1" is magic number.
        var url = "flag_" + (upper_flag ? "f" : "i") + numflag; // for now numflags <= 4

        var _ys = elements[0].balken_element.notes_coord.y;
        var _xs = elements[0].balken_element.notes_coord.x;
        var _y = upper_flag ? Math.max.apply(null, _ys) : Math.min.apply(null, _ys);
        var _y2 = upper_flag ? Math.min.apply(null, _ys) - param.note_bar_length - barlen_delta : Math.max.apply(null, _ys) + param.note_bar_length + barlen_delta;
        paper.getContext("2d").scale(this_elem_draw_scale, 1.0);
        var _r4 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasImage(paper, _graphic__WEBPACK_IMPORTED_MODULE_2__.G_imgmap[url], (bar_x + x_adj) / this_elem_draw_scale, _y2, flag_w,
        // No need to apply "/this_elem_draw_scale" otherwise no compression apply :).
        null, "l" + (upper_flag ? "t" : "b"), true);
        bounding_box.add_BB(_r4.bb.scale(this_elem_draw_scale, 1.0)); // add based on on-screen coordinates
        paper.getContext("2d").scale(1.0 / this_elem_draw_scale, 1.0);
      }
      return x; //{ x: x, bb: bounding_box };
    }
  }, {
    key: "drawBalkenD",
    value: function drawBalkenD(balkenGroup, x, rs_y_base, _5lines_intv, param, bounding_box, paper, music_context, row_height, meas_start_x, meas, draw_scale) {
      var elements = balkenGroup.elem;
      if (!elements.every(function (g) {
        return g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Chord || g.e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__.Space;
      })) {
        throw "Invalid context in draw_balken_d";
      }

      // 0. make notes_coord for y axis
      this.setNoteYCoords(elements, rs_y_base, _5lines_intv);

      // 1. determine the flag direction here
      var dfret = this.determineFlagDirections(elements, rs_y_base, _5lines_intv);
      var upper_flag = dfret.upper_flag;
      var gbi_at_min_y = dfret.gbi_at_min_y;
      var gbi_at_max_y = dfret.gbi_at_max_y;
      var min_y = dfret.min_y;
      var max_y = dfret.max_y;
      balkenGroup.balken_draw_info = Object.assign({}, dfret);

      //let x = balkenGroup[0].org_x; // on screen position, no scaling applied

      // 2. Draw notes and slashes without bars, flags and balkens
      x = this.drawWithoutBalkensWrap(elements, paper, param, rs_y_base, row_height, bounding_box, music_context, x, upper_flag, meas_start_x, meas, draw_scale);

      // 3. Determine the flag intercept and slope
      // Slope and intercepts are calucated for the first and last Chord element. Space is skipped.
      //let first_chord_idx = balkenGroup.findIndex(g=>g.e instanceof common.Chord);
      //let last_chord_idx  = common.findLastIndex(balkenGroup, g=>g.e instanceof common.Chord);
      //let bridge_balken = first_chord_idx >= 0 && (first_chord_idx != last_chord_idx);
      var first_chord_idx = 0;
      var last_chord_idx = elements.length - 1;
      var x_at_min_y = elements[gbi_at_min_y].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var x_at_max_y = elements[gbi_at_max_y].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var slope = 0;
      var ps_y = elements[first_chord_idx].balken_element.notes_coord.y;
      var ps_bar_x = elements[first_chord_idx].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var pe_y = elements[last_chord_idx].balken_element.notes_coord.y;
      var pe_bar_x = elements[last_chord_idx].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var delta_y = upper_flag ? Math.min.apply(null, pe_y) - Math.min.apply(null, ps_y) : Math.max.apply(null, pe_y) - Math.max.apply(null, ps_y);
      slope = delta_y / (pe_bar_x - ps_bar_x);
      var intercept = (upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) - slope * (upper_flag ? x_at_min_y : x_at_max_y);
      balkenGroup.balken_draw_info.slope = slope;
      balkenGroup.balken_draw_info.intercept = intercept;

      // 4. Draw vertical bars
      for (var gbi = 0; gbi < elements.length; ++gbi) {
        // Currnetly, not apply scaling for vertical line and line width 1 always set to 1

        var ys = elements[gbi].balken_element.notes_coord.y;
        var xs = elements[gbi].balken_element.notes_coord.x;
        var d = elements[gbi].balken_element.note_value;
        if (elements[gbi].balken_element.type == "slash") {
          var bar_x = upper_flag ? xs[0][2] : xs[0][1];
          // eslint-disable-next-line no-empty
          if (d <= 1) {} else {
            var r = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, bar_x, ys[0] + (upper_flag ? -3 : +3), bar_x, slope * bar_x + intercept, {
              width: 1
            }, true);
            bounding_box.add_BB(r.bb);
          }
          //bar_flag_group.push(o);
        } else if (elements[gbi].balken_element.type == "notes") {
          // eslint-disable-next-line no-empty
          if (d <= 1) {} else {
            var _bar_x3 = upper_flag ? xs[0][2] : xs[0][1];
            var y0 = upper_flag ? Math.max.apply(null, ys) : Math.min.apply(null, ys);
            // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.

            var _r5 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, _bar_x3, y0, _bar_x3, slope * _bar_x3 + intercept, {
              width: 1
            }, true);
            bounding_box.add_BB(_r5.bb);
          }
          // eslint-disable-next-line no-empty
        } else if (elements[gbi].balken_element.type == "rest") {}
      }
      //group.push(bar_flag_group);

      // 5. Draw balkens

      // Inter-element balkens, no scaling apply (even for single balken)

      // Draw flag for balken
      // Common balken
      if (elements[first_chord_idx].balken_element.note_value >= 8) {
        var _r6 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, ps_bar_x, slope * ps_bar_x + intercept, pe_bar_x, slope * pe_bar_x + intercept, {
          width: param.balken_width
        }, true);
        bounding_box.add_BB(_r6.bb);
      }

      // Balken for each note_value level
      var gg = this.toSameValueGroup(elements, function (o) {
        return o.balken_element.note_value;
      });
      for (var g = 0; g < gg.length; ++g) {
        var same_sds = gg[g];
        var sd = same_sds[0].balken_element.note_value;
        var numflag = _common_common__WEBPACK_IMPORTED_MODULE_1__.myLog2(parseInt(sd)) - 2;
        if (same_sds.length == 1) {
          var pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];

          // Determine which direction to draw flag. Determined from which neighboring
          // rhythm is more natural to coupling with.
          // Currently, simple strategy is adopted for now.
          var dir = 1;
          if (g == gg.length - 1) dir = -1;
          var neighbor_x = gg[g + dir][gg[g + dir].length - 1].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
          var blen = Math.abs(neighbor_x - pssx) * 0.3;
          for (var fi = 1; fi < numflag; ++fi) {
            // fi=0 is alread drawn by common balken

            var _r7 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, pssx, slope * pssx + intercept + (upper_flag ? +1 : -1) * fi * param.note_flag_interval, pssx + dir * blen, slope * (pssx + dir * blen) + intercept + (upper_flag ? +1 : -1) * fi * param.note_flag_interval, {
              width: param.balken_width
            }, true);
            bounding_box.add_BB(_r7.bb);
          }
        } else if (same_sds.length >= 2) {
          var _pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
          var psex = same_sds[same_sds.length - 1].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
          for (var _fi = 1; _fi < numflag; ++_fi // fi=0 is alread drawn by common balken
          ) {
            var _r8 = _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasLine(paper, _pssx, slope * _pssx + intercept + (upper_flag ? +1 : -1) * _fi * param.note_flag_interval, psex, slope * psex + intercept + (upper_flag ? +1 : -1) * _fi * param.note_flag_interval, {
              width: param.balken_width
            }, true);
            bounding_box.add_BB(_r8.bb);
          }
        }
      }
      return x; //{ x: x, bb: bounding_box };
    }
  }, {
    key: "renderSlash",
    value: function renderSlash(paper, group, x, y, d, numdot, _5lines_intv) {
      var draw = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var rsgw = 8;
      var rsgh = _5lines_intv * 2;
      var rsh = 4;
      if (draw) {
        var points = [[x, y + rsgh / 2 - rsh], [x + rsgw, y - rsgh / 2], [x + rsgw, y - rsgh / 2 + rsh], [x, y + rsgh / 2]];

        //var obj = null;
        if (d == "1" || d == "2") {
          _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasPolygon(paper, points, true, false);
        } else {
          // '0' and other
          _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasPolygon(paper, points, true, true);
        }
        //group.push(obj);
        for (var i = 0; i < numdot; ++i) {
          _graphic__WEBPACK_IMPORTED_MODULE_2__.canvasCircle(paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
        }
      }
      return {
        bar_reduction: rsgh / 2 - rsh,
        bounding_box: {
          x: x,
          y: y - rsgh / 2,
          w: rsgw + (numdot > 0 ? 5 + numdot * 5 : 0),
          h: rsgh
        }
      };
    }

    /*
     * Group objs to the ones which has same values with 'field' ( Neighbor ). Skip the null or undefined value.
     */
  }, {
    key: "toSameValueGroup",
    value: function toSameValueGroup(objs, comp) {
      var ret = [];
      var tmp = [];
      var cur_v = null;
      for (var i = 0; i < objs.length; ++i) {
        if (comp(objs[i]) == null) continue; // null or undefined is skipped.
        if (cur_v != null && cur_v != comp(objs[i])) {
          ret.push(tmp);
          tmp = [];
        }
        cur_v = comp(objs[i]);
        tmp.push(objs[i]);
      }
      ret.push(tmp);
      return ret;
    }
  }]);
  return Renderer;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Artist": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Artist),
/* harmony export */   "Block": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Block),
/* harmony export */   "Chord": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Chord),
/* harmony export */   "Coda": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Coda),
/* harmony export */   "Comment": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Comment),
/* harmony export */   "DaCapo": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.DaCapo),
/* harmony export */   "DalSegno": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.DalSegno),
/* harmony export */   "DefaultRenderer": () => (/* reexport safe */ _renderer_default_renderer__WEBPACK_IMPORTED_MODULE_2__.DefaultRenderer),
/* harmony export */   "Fine": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Fine),
/* harmony export */   "GenericRow": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.GenericRow),
/* harmony export */   "LongRest": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.LongRest),
/* harmony export */   "LoopBeginMark": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.LoopBeginMark),
/* harmony export */   "LoopBothMark": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.LoopBothMark),
/* harmony export */   "LoopEndMark": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.LoopEndMark),
/* harmony export */   "LoopIndicator": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.LoopIndicator),
/* harmony export */   "Lyric": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Lyric),
/* harmony export */   "Measure": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Measure),
/* harmony export */   "MeasureBoundary": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.MeasureBoundary),
/* harmony export */   "MeasureBoundaryDblSimile": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.MeasureBoundaryDblSimile),
/* harmony export */   "MeasureBoundaryFinMark": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.MeasureBoundaryFinMark),
/* harmony export */   "MeasureBoundaryMark": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.MeasureBoundaryMark),
/* harmony export */   "Parser": () => (/* reexport safe */ _parser_parser__WEBPACK_IMPORTED_MODULE_1__.Parser),
/* harmony export */   "RehearsalGroup": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.RehearsalGroup),
/* harmony export */   "Rest": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Rest),
/* harmony export */   "Segno": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Segno),
/* harmony export */   "Simile": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Simile),
/* harmony export */   "Space": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Space),
/* harmony export */   "SubTitle": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.SubTitle),
/* harmony export */   "Time": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Time),
/* harmony export */   "Title": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Title),
/* harmony export */   "ToCoda": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.ToCoda),
/* harmony export */   "Variable": () => (/* reexport safe */ _common_common__WEBPACK_IMPORTED_MODULE_4__.Variable),
/* harmony export */   "canvasText": () => (/* reexport safe */ _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__.canvasText),
/* harmony export */   "canvasTextWithBox": () => (/* reexport safe */ _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__.canvasTextWithBox),
/* harmony export */   "getCharProfile": () => (/* reexport safe */ _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__.getCharProfile),
/* harmony export */   "getFontSizeFromHeight": () => (/* reexport safe */ _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__.getFontSizeFromHeight),
/* harmony export */   "setupHiDPICanvas": () => (/* reexport safe */ _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__.setupHiDPICanvas)
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser/parser */ "./src/parser/parser.js");
/* harmony import */ var _renderer_default_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/default_renderer */ "./src/renderer/default_renderer.js");
/* harmony import */ var _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/graphic */ "./src/renderer/graphic.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/common */ "./src/common/common.js");


//export * from './renderer/default_renderer';



// Debug





// Export Component Classes

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fumen.js.map