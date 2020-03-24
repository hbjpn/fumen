(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fumen"] = factory();
	else
		root["Fumen"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise['finally'];

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
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
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
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
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

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
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
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
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
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
      that[SIZE]++; // add to index

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
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");

var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

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

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

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
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

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
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

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
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

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
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
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
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
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
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
}; // 1 -> String#trimLeft
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

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

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
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

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
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
    some: function some(callbackfn
    /* , thisArg */
    ) {
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

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
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
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
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
    constructor: function constructor() {
      /* noop */
    },
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
  }); // eslint-disable-next-line max-statements

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

        while (index < length) {
          addElement(that, index++);
        }
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
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
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
} else module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

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
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

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
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

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

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    ;
  }

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    ;
  }

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

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

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

  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
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
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
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
  } // iOS Safari 7.x bug


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);

var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
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
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayJoin = [].join; // fallback for not array-like strings

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js"); // WebKit Array.of isn't generic


$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

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

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  test.sort(null); // Old WebKit
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js"); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var MAP = 'Map'; // 23.1 Map Objects

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

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
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
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
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js"); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js"); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js"); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js"); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

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

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

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

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


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
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

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
}; // constructor polyfill


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
  }; // eslint-disable-next-line no-unused-vars


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

Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE]; // statics

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () {
    /* empty */
  });
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");

var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
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
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) {
    keys.push(key);
  }
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey
/* , receiver */
) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V
/* , receiver */
) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

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

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js"); // @@match logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
}; // @@replace logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
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
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

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
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js"); // @@search logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

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
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
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
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SET = 'Set'; // 23.2 Set Objects

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;

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
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

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

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

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
}; // 19.4.1.1 Symbol([description])


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
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
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

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
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
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
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

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");

var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


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

        return key == 'set' ? this : result; // store all the rest on native weakmap
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
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
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
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
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

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

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
    } // Return an iterator with no values.


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
      this.next = 0; // Resetting context._sent for legacy support of Babel's
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
      } // The context.catch method must only be called with a location
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
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/*! exports provided: shallowcopy, deepcopy, myLog2, TaskQueue, Task, WHOLE_NOTE_LENGTH, Track, ReharsalGroup, Measure, Rest, Simile, Chord, LoopIndicator, Space, LongRestIndicator, Time, MeasureBoundary, MeasureBoundaryMark, LoopBeginMark, LoopEndMark, LoopBothMark, MeasureBoundaryFinMark, MeasureBoundaryDblSimile, DaCapo, DalSegno, Segno, Coda, ToCoda, Fine, Comment, Lyric, BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowcopy", function() { return shallowcopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepcopy", function() { return deepcopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myLog2", function() { return myLog2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskQueue", function() { return TaskQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOLE_NOTE_LENGTH", function() { return WHOLE_NOTE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReharsalGroup", function() { return ReharsalGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measure", function() { return Measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rest", function() { return Rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simile", function() { return Simile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chord", function() { return Chord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopIndicator", function() { return LoopIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongRestIndicator", function() { return LongRestIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureBoundary", function() { return MeasureBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureBoundaryMark", function() { return MeasureBoundaryMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBeginMark", function() { return LoopBeginMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopEndMark", function() { return LoopEndMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBothMark", function() { return LoopBothMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureBoundaryFinMark", function() { return MeasureBoundaryFinMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureBoundaryDblSimile", function() { return MeasureBoundaryDblSimile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaCapo", function() { return DaCapo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DalSegno", function() { return DalSegno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segno", function() { return Segno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coda", function() { return Coda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToCoda", function() { return ToCoda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fine", function() { return Fine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lyric", function() { return Lyric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Default values for macros

var MACRO_DEFAULT = {
  "TITLE": "NO TITLE",
  "SUB_TITLE": "",
  "ARTIST": "NO ARTIST",
  "SHOW_HEADER": "YES",
  "SHOW_FOOTER": "YES",
  "STAFF": "AUTO",
  "TRANSPOSE": 0,
  "HALF_TYPE": "GUESS"
};
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
var TaskQueue =
/*#__PURE__*/
function () {
  function TaskQueue() {
    _classCallCheck(this, TaskQueue);

    this.task_queue = {};
  }

  _createClass(TaskQueue, [{
    key: "enqueue",
    value: function enqueue(task) {
      if (task.task_type !== null) {
        // All the tasks with same task type are serialized
        // Tasks are queued
        if (!(task.task_type in this.task_queue)) this.task_queue[task.task_type] = [];
        this.task_queue[task.task_type].push(task);
        console.log("Enqueue task for queue '" + task.task_type + "'. Size = " + this.task_queue[task.task_type].length);

        if (this.task_queue[task.task_type].length == 1) {
          setTimeout(task.run.bind(task), 0);
        }
      } else {
        setTimeout(task.run.bind(task), 0); // Just run it immediately if task type is null
      }
    }
  }, {
    key: "finish",
    value: function finish(task) {
      // Finish notification from task
      if (task.task_type === null) return;

      if (!(task.task_type in this.task_queue) || this.task_queue[task.task_type].length == 0 || this.task_queue[task.task_type][0] != task) {
        alert("Invalid task execution state detected");
      } else {
        var q = this.task_queue[task.task_type];
        q.shift();
        console.log("Dequeue task for queue '" + task.task_type + "'. Size = " + q.length);

        if (q.length > 0) {
          // TODO : Set timer for next task run ?
          q[0].run();
        }
      }
    }
  }]);

  return TaskQueue;
}(); //
// Task and Task queue class
//

var the_task_queue = new TaskQueue();
var Task =
/*#__PURE__*/
function () {
  function Task(context, worker, task_type, queue) {
    _classCallCheck(this, Task);

    if (task_type === undefined) task_type = null;
    this.task_type = task_type;
    this.context = context;
    this.worker = worker;
    this.promise = null;
    this.resolve = null;
    this.reject = null;
    var me = this; // TODO : Promise.defer may be better, but chrome does not support it yet.

    this.promise = new Promise(function (resolve, reject) {
      me.resolve = resolve;
      me.reject = reject;
    });
    queue = queue === undefined ? null : queue;
    this.queue = queue ? queue : the_task_queue;
    this.queue.enqueue(this);
  }

  _createClass(Task, [{
    key: "then",
    value: function then(func) {
      return this.promise.then(func);
    }
  }, {
    key: "run",
    value: function run() {
      var ret = this.worker(this.context);

      if (ret instanceof Task || ret instanceof Promise) {
        // Asynchronous execution of worker
        var me = this;
        ret.then(function (taskret) {
          // End of task
          // false, 0, true, ... all the values other than Task and undefined is land in here.
          // ret is treated as a parameter for resolve
          if (me.resolve === null) {
            alert("Invalid state detected");
          }

          me.resolve(taskret); // Note that resolve will invoke then "later".
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

        this.resolve(ret); // Note that resolve will invoke then "later".
        // finish notification will invoke a next task.
        // It is required to wait a 1msec to keep order of the "then" and next task call.

        setTimeout(this.queue.finish.bind(this.queue, this), 1);
      }
    }
  }, {
    key: "enqueueFunctionCall",
    value: function enqueueFunctionCall(func, farg, task_type) {
      return new Task({
        func: func,
        farg: farg,
        i: 0,
        func_ret: undefined
      }, function (ctx) {
        if (ctx.i > 0) return true; // Waste function's result : TODO : Handle function result to then

        var ret = ctx.func.apply(null, ctx.farg);
        ctx.func_ret = ret;
        if (ret === undefined) ret = true; // Force to exit 1 time even if the function returns undefined.

        ++ctx.i;
        return ret;
      }, task_type); // Make one shot task
    }
  }, {
    key: "_ForeachWorker",
    value: function _ForeachWorker(wc) {
      // Temporal queue to serialize following 2 tasks
      var tempqueue = new TaskQueue();
      new Task(wc, function (wc2) {
        return wc2.worker(wc2.loopindex, wc2.looptarget.length, wc2.looptarget[wc2.loopindex], wc2.context);
      }, 0, tempqueue);
      var task = new Task(wc, function (wc2) {
        if (wc2.loopindex == wc2.looptarget.length - 1) {
          return wc2.context;
        }

        var newwc = shallowcopy(wc2);
        newwc.loopindex++;
        return new Task(newwc, Task._ForeachWorker, null);
      }, 0, tempqueue);
      return task;
    }
  }, {
    key: "Foreach",
    value: function Foreach(looptarget, worker, context, task_type) {
      var wcontext = {};
      wcontext.worker = worker;
      wcontext.context = context;
      wcontext.looptarget = looptarget;
      wcontext.loopindex = 0;
      var task = new Task(wcontext, Task._ForeachWorker, task_type);
      return task;
    }
  }]);

  return Task;
}(); //
// Parser
//

var WHOLE_NOTE_LENGTH = 2 * 3 * 5 * 7 * 9 * 11 * 13 * 64;
var Track = function Track() {
  _classCallCheck(this, Track);

  this.reharsal_groups = new Array();
  this.macros = deepcopy(MACRO_DEFAULT);
  this.pre_render_info = {};
};
var ReharsalGroup = function ReharsalGroup(name) {
  var inline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _classCallCheck(this, ReharsalGroup);

  this.name = name;
  this.inline = inline; //	this.measures = new Array();

  this.blocks = new Array(); // Blocks in the reharsal groups

  this.macros = deepcopy(MACRO_DEFAULT);
};
var Measure = function Measure() {
  _classCallCheck(this, Measure);

  this.elements = new Array();
  this.boundary_info = ["n", "n"]; // "n" : normal boundary
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
};
var Rest = function Rest(length_s) {
  _classCallCheck(this, Rest);

  this.note_group_list = [{
    lengthIndicator: parseLengthIndicator(length_s),
    note_profiles: null
  }];
  this.renderprop = {};
};
var Simile = function Simile(numslash) {
  _classCallCheck(this, Simile);

  // NOTE : Double simile on measure boundary is not treated in this class, it is treated as a one of boundary type
  this.numslash = numslash;
  this.renderprop = {};
  this.note_group_list = null;
};
var cnrg = new RegExp();
cnrg.compile(/^((sus(4|2)?)|(add(9|13))|(alt)|(dim)|(7|9|6|11|13)|((\+|#)(5|9|13|11))|((-|b)(5|9|13))|([Mm]([Aa][Jj]?|[Ii][Nn]?)?)|([,()]))/);
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
var CS_LIST = [CS_M, CS_DIG, CS_SUS, CS_DIM, CS_SEP, CS_PLS, CS_MNS, CS_ADD, CS_ALT]; // Frequently used first

function parseChordMids(s) {
  var holder = [];
  var objholder = [];

  while (s.length > 0) {
    //if([",","(",")"].indexOf(s[0]) >= 0){ s = s.substr(1); continue; }
    var m = s.match(cnrg); //console.log(m);

    if (m === null) {
      console.log("Invalid code notation : " + s);
      return null;
    }

    for (var i = 0; i < CS_LIST.length; ++i) {
      if (m[CS_IDX_OFFSET + CS_LIST[i]] !== undefined && m[CS_IDX_OFFSET + CS_LIST[i]] !== null) {
        holder.push({
          cs: CS_LIST[i],
          s: m[0],
          g: m
        });
        break;
      }
    }

    s = s.substr(m[0].length);
  }

  var minor_exists = false;

  for (var _i = 0; _i < holder.length; ++_i) {
    var _s = "";

    switch (holder[_i].cs) {
      case CS_M:
        _s = holder[_i].s;
        var isMaj = _s == "M" || _s.toLowerCase() == "maj" || _s.toLowerCase() == "ma";
        if (isMaj == false) minor_exists = true;

        if (minor_exists && isMaj == true) {
          // mM7 Chord is expected
          if (holder[_i + 1].cs == CS_DIG) {
            objholder.push({
              type: "M",
              param: holder[_i + 1].s
            });
            ++_i; // Skip next CS_DIG
          } else {
            throw Error("Invalid statement");
          }
        } else if (isMaj) {
          objholder.push({
            type: "M"
          });
        } else {
          objholder.push({
            type: "m"
          });
        }

        break;

      case CS_DIG:
        objholder.push({
          type: "dig",
          param: holder[_i].s
        });
        break;

      case CS_SUS:
        objholder.push({
          type: "sus",
          param: holder[_i].s.substr(3)
        });
        break;

      case CS_DIM:
        objholder.push({
          type: "dim"
        });
        break;

      case CS_MNS:
        objholder.push({
          type: "b",
          param: holder[_i].s.substr(1)
        });
        break;

      case CS_PLS:
        objholder.push({
          type: "#",
          param: holder[_i].s.substr(1)
        });
        break;

      case CS_ADD:
        objholder.push({
          type: "add",
          param: holder[_i].s.substr(3)
        });
        break;

      case CS_ALT:
        objholder.push({
          type: "alt"
        });
        break;
    }
  } //console.log(objholder);


  return [holder, objholder];
}

function getNoteProfile(note_str) {
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
} // Parse strings of number + dot


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
      ng: {
        note_profiles: note_profiles,
        lengthIndicator: li
      }
    };
  };

  var note_group_list = []; // eslint-disable-next-line no-constant-condition

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

var Chord =
/*#__PURE__*/
function () {
  function Chord(chord_str) {
    _classCallCheck(this, Chord);

    this.chord_str = chord_str;
    this.is_valid_chord = true;
    this.renderprop = {};
    this.exceptinal_comment = null;
    this.lyric = null; //this.lengthIndicator = null;

    this.note_group_list = null; // Analyze Chord symbol

    var r = /^(((A|B|C|D|E|F|G)(#|b)?([^/:]*))?(\/(A|B|C|D|E|F|G)(#|b)?)?)(:((([\d_]+)(\.*)(~)?)|(\(.*\))))?/;
    var m = chord_str.match(r); //console.log(m);
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
          var li = parseLengthIndicator(m[11]); //this.length_s = m[11];
          //this.length = li.length;

          this.note_group_list = [{
            lengthIndicator: li,
            note_profiles: null
          }]; //this.tie = li.has_tie;
        } else if (m[15]) {
          // Notes
          var _ret = parseChordNotes(m[15]);

          if (_ret.length > 0) // empty note_group_list does not work
            this.note_group_list = _ret; //console.log(this.note_group_list);
        }
      } //this.tie = (m[14] == '~');

    } else {
      this.chord_name_str = this.chord_str;
      this.is_valid_chord = false;
    }
  }

  _createClass(Chord, [{
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
    value: function getTranpsoedNote(transpose, half_type, note_base, sharp_flat) {
      var seq = [["A"], ["A#", "Bb"], ["B", "Cb"], ["C"], ["C#", "Db"], ["D"], ["D#", "Eb"], ["E", "Fb"], ["F"], ["F#", "Gb"], ["G"], ["G#", "Ab"]];
      var note = note_base;
      if (sharp_flat !== undefined) note += sharp_flat;
      if (transpose == 0) return note;
      var i = 0;

      for (i = 0; i < seq.length; ++i) {
        if (seq[i].indexOf(note) >= 0) break;
      }

      var k = i + transpose;

      while (k < 0) {
        k += 12;
      }

      var s = seq[k % 12];

      if (s.length == 1) {
        return s[0];
      } else {
        switch (half_type) {
          case "GUESS":
            // TODO : More intelligent transposing based on key of the track.
            if (sharp_flat) {
              if (sharp_flat == "#") return s[0];else return s[1];
            } else {
              return s[1]; // Sharp based
            }

          case "SHARP":
            return s[0];

          case "FLAT":
            return s[1];
        }
      }

      return null;
    }
  }, {
    key: "getChordStrBase",
    value: function getChordStrBase(tranpose, half_type) {
      if (!this.is_valid_chord) return [false, this.chord_str]; // Not chord or invalid chord notation

      var tranposed_note = null;
      if (this.note_base !== undefined) tranposed_note = this.getTranpsoedNote(tranpose, half_type, this.note_base, this.sharp_flat);
      var transposed_base_note = null;

      if (this.base_note_base !== undefined) {
        transposed_base_note = this.getTranpsoedNote(tranpose, half_type, this.base_note_base, this.base_sharp_flat);
      }

      return [tranposed_note, transposed_base_note];
    }
  }]);

  return Chord;
}();
var LoopIndicator = function LoopIndicator(indicators) {
  _classCallCheck(this, LoopIndicator);

  // Note : Content of indicators are not always integers.
  // intindicators is storage for integer indicators analyzed from indicators.
  this.indicators = indicators;
  this.intindicators = [];
  var intrg = new RegExp(/(\d+)/);

  for (var i = 0; i < this.indicators.length; ++i) {
    var m = this.indicators[i].match(intrg);

    if (m) {
      this.intindicators.push(parseInt(m[0]));
    }
  }
};
var Space = function Space() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  _classCallCheck(this, Space);

  this.length = length;
  this.renderprop = {};
};
var LongRestIndicator = function LongRestIndicator(longrestlen) {
  _classCallCheck(this, LongRestIndicator);

  this.longrestlen = longrestlen;
};
var Time = function Time(numer, denom) {
  _classCallCheck(this, Time);

  this.numer = numer;
  this.denom = denom;
};
var MeasureBoundary = function MeasureBoundary() {
  _classCallCheck(this, MeasureBoundary);
};
var MeasureBoundaryMark =
/*#__PURE__*/
function (_MeasureBoundary) {
  _inherits(MeasureBoundaryMark, _MeasureBoundary);

  function MeasureBoundaryMark(nline) {
    var _this;

    _classCallCheck(this, MeasureBoundaryMark);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeasureBoundaryMark).call(this));
    _this.nline = nline;
    return _this;
  }

  return MeasureBoundaryMark;
}(MeasureBoundary);
var LoopBeginMark =
/*#__PURE__*/
function (_MeasureBoundary2) {
  _inherits(LoopBeginMark, _MeasureBoundary2);

  function LoopBeginMark() {
    _classCallCheck(this, LoopBeginMark);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoopBeginMark).call(this));
  }

  return LoopBeginMark;
}(MeasureBoundary);
var LoopEndMark =
/*#__PURE__*/
function (_MeasureBoundary3) {
  _inherits(LoopEndMark, _MeasureBoundary3);

  function LoopEndMark(param) {
    var _this2;

    _classCallCheck(this, LoopEndMark);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(LoopEndMark).call(this));
    _this2.times = param.times;
    _this2.ntimes = param.ntimes;
    return _this2;
  }

  return LoopEndMark;
}(MeasureBoundary);
var LoopBothMark =
/*#__PURE__*/
function (_MeasureBoundary4) {
  _inherits(LoopBothMark, _MeasureBoundary4);

  function LoopBothMark(param) {
    var _this3;

    _classCallCheck(this, LoopBothMark);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(LoopBothMark).call(this));
    _this3.times = param.times;
    _this3.ntimes = param.ntimes;
    return _this3;
  }

  return LoopBothMark;
}(MeasureBoundary);
var MeasureBoundaryFinMark =
/*#__PURE__*/
function (_MeasureBoundary5) {
  _inherits(MeasureBoundaryFinMark, _MeasureBoundary5);

  function MeasureBoundaryFinMark() {
    _classCallCheck(this, MeasureBoundaryFinMark);

    return _possibleConstructorReturn(this, _getPrototypeOf(MeasureBoundaryFinMark).call(this));
  }

  return MeasureBoundaryFinMark;
}(MeasureBoundary);
var MeasureBoundaryDblSimile =
/*#__PURE__*/
function (_MeasureBoundary6) {
  _inherits(MeasureBoundaryDblSimile, _MeasureBoundary6);

  function MeasureBoundaryDblSimile() {
    _classCallCheck(this, MeasureBoundaryDblSimile);

    return _possibleConstructorReturn(this, _getPrototypeOf(MeasureBoundaryDblSimile).call(this));
  }

  return MeasureBoundaryDblSimile;
}(MeasureBoundary);
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

var DaCapo =
/*#__PURE__*/
function () {
  function DaCapo() {
    _classCallCheck(this, DaCapo);
  }

  _createClass(DaCapo, [{
    key: "toString",
    value: function toString() {
      return "D.C.";
    }
  }]);

  return DaCapo;
}();
var DalSegno =
/*#__PURE__*/
function () {
  function DalSegno(number, al) {
    _classCallCheck(this, DalSegno);

    this.number = number;
    this.al = al; // Either Coda/Fine
  }

  _createClass(DalSegno, [{
    key: "toString",
    value: function toString() {
      var dss = "D.S." + (this.number === null ? "" : this.number);
      var als = this.al === null ? "" : " al " + this.al.toString();
      return dss + als;
    }
  }]);

  return DalSegno;
}();
var Segno = function Segno(number, opt) {
  _classCallCheck(this, Segno);

  this.number = number;
  this.opt = opt;
};
var Coda =
/*#__PURE__*/
function () {
  function Coda(number) {
    _classCallCheck(this, Coda);

    this.number = number;
  }

  _createClass(Coda, [{
    key: "toString",
    value: function toString() {
      return "Coda" + (this.number === null ? "" : this.number);
    }
  }]);

  return Coda;
}();
var ToCoda = function ToCoda(number) {
  _classCallCheck(this, ToCoda);

  this.number = number;
};
var Fine =
/*#__PURE__*/
function () {
  function Fine() {
    _classCallCheck(this, Fine);
  }

  _createClass(Fine, [{
    key: "toString",
    value: function toString() {
      return "Fine";
    }
  }]);

  return Fine;
}();
var Comment = function Comment(comment, chorddep) {
  _classCallCheck(this, Comment);

  this.comment = comment;
  this.chorddep = chorddep; // Dependency for particular chord : true/false
};
var Lyric = function Lyric(lyric, chorddep) {
  _classCallCheck(this, Lyric);

  this.lyric = lyric;
  this.chorddep = chorddep; // Dependency for particular chord : true/false
}; // Utilities

var BoundingBox =
/*#__PURE__*/
function () {
  function BoundingBox() {
    _classCallCheck(this, BoundingBox);

    this.x = [100000, -100000];
    this.y = [100000, -100000];
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
    }
  }, {
    key: "add_BB",
    value: function add_BB(bb) {
      // add another bounding box
      this.x[0] = Math.min(bb.x[0], this.x[0]);
      this.x[1] = Math.max(bb.x[1], this.x[1]);
      this.y[0] = Math.min(bb.y[0], this.y[0]);
      this.y[1] = Math.max(bb.y[1], this.y[1]);
    }
  }, {
    key: "add_rect",
    value: function add_rect(rect) {
      this.x[0] = Math.min(rect.x, this.x[0]);
      this.x[1] = Math.max(rect.x + rect.w, this.x[1]);
      this.y[0] = Math.min(rect.y, this.y[0]);
      this.y[1] = Math.max(rect.y + rect.h, this.y[1]);
    }
  }, {
    key: "expand",
    value: function expand(x0, x1, y0, y1) {
      this.x[0] -= x0;
      this.x[1] += x1;
      this.y[0] -= y0;
      this.y[1] += y1;
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
  }]);

  return BoundingBox;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Parser, MobileRenderer, SetupHiDPICanvas, GetCharProfile, CanvasTextWithBox, CanvasText, getFontSizeFromHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser/parser */ "./src/parser/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _parser_parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]; });

/* harmony import */ var _renderer_mobile_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/mobile_renderer */ "./src/renderer/mobile_renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileRenderer", function() { return _renderer_mobile_renderer__WEBPACK_IMPORTED_MODULE_2__["MobileRenderer"]; });

/* harmony import */ var _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/graphic */ "./src/renderer/graphic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupHiDPICanvas", function() { return _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__["SetupHiDPICanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCharProfile", function() { return _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__["GetCharProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasTextWithBox", function() { return _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasTextWithBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasText", function() { return _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontSizeFromHeight", function() { return _renderer_graphic__WEBPACK_IMPORTED_MODULE_3__["getFontSizeFromHeight"]; });


 //export * from './renderer/default_renderer';


 // Debug






/***/ }),

/***/ "./src/parser/parser.js":
/*!******************************!*\
  !*** ./src/parser/parser.js ***!
  \******************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function charIsIn(c, chars) {
  for (var i = 0; i < chars.length; ++i) {
    if (chars[i] == c) return {
      r: true,
      index: i
    };
  }

  return null;
}

function charStartsWithAmong(s, strlist) {
  for (var i = 0; i < strlist.length; ++i) {
    if (s.indexOf(strlist[i]) == 0) return {
      index: i,
      s: strlist[i]
    };
  }

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

var TOKEN_ATMARK = 40; // @

var TOKEN_COLON = 41; // :

var TOKEN_PERIOD = 42; // .

var WORD_DEFINIITON_GENERAL = /^(\w[\w¥.,\-+#:]*)/;
var WORD_DEFINITION_IN_REHARSAL_MARK = /^[^[\]]*/;
var WORD_DEFINITION_CHORD_SYMBOL = /^[\w.,\-+#/():~]*/;
var Parser =
/*#__PURE__*/
function () {
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

      if (!(dont_skip_spaces === true)) {
        while (s.length > 0 && charIsIn(s[0], " 	")) {
          s = s.substr(1);
          ++skipped_spaces;
        }
      }

      if (s.length == 0) return {
        token: null,
        s: s,
        type: TOKEN_END,
        ss: skipped_spaces
      }; // At first, plain string is analyzed irrespective of word_def.

      if (s[0] == "\"" || s[0] == "'" || s[0] == "`") {
        var quote = s[0];
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
          type: quote == "\"" ? TOKEN_STRING : quote == "'" ? TOKEN_STRING_SQ : TOKEN_STRING_GRAVE_ACCENT,
          ss: skipped_spaces
        };
      }

      var r = charStartsWithAmong(s, ["||:", "||.", "||", "|", "./|/."]);

      if (r != null) {
        return {
          token: r.s,
          s: s.substr(r.s.length),
          ss: skipped_spaces,
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
          type: m[1] == ":||:" ? TOKEN_MB_LOOP_BOTH : TOKEN_MB_LOOP_END,
          param: {
            times: loopTimes,
            ntimes: isNTimes
          }
        };
      }

      r = charIsIn(s[0], "[]<>(){},\n/\\%=@:.");

      if (r != null) {
        return {
          token: s[0],
          s: s.substr(1),
          ss: skipped_spaces,
          type: [TOKEN_BRACKET_LS, TOKEN_BRACKET_RS, TOKEN_BRACKET_LA, TOKEN_BRACKET_RA, TOKEN_BRACKET_LR, TOKEN_BRACKET_RR, TOKEN_BRACKET_LW, TOKEN_BRACKET_RW, TOKEN_COMMA, TOKEN_NL, TOKEN_SLASH, TOKEN_BACK_SLASH, TOKEN_PERCENT, TOKEN_EQUAL, TOKEN_ATMARK, TOKEN_COLON, TOKEN_PERIOD][r.index]
        };
      } // "Word characters"


      m = s.match(word_def);

      if (m != null) {
        //console.log(m);
        var w = m[0];
        return {
          token: w,
          s: s.substr(w.length),
          type: TOKEN_WORD,
          ss: skipped_spaces
        };
      }

      this.onParseError("INVALID_TOKEN_DETECTED");
    }
  }, {
    key: "parseGroup",
    value: function parseGroup(profile, s, errmsg) {
      var org_s = s;
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
    key: "parseReharsalMark",
    value: function parseReharsalMark(trig_token, s) {
      // "Word characters"
      var m = s.match(WORD_DEFINITION_IN_REHARSAL_MARK);

      if (m != null) {
        var reharsalMarkName = m[0];
        var r = this.nextToken(s.substr(m[0].length));
        if (r.type == TOKEN_BRACKET_RS) return {
          reharsalMarkName: reharsalMarkName,
          s: r.s
        };
      }

      this.onParseError("Invalid reharsal mark");
    }
  }, {
    key: "parseLoopIndicator",
    value: function parseLoopIndicator(trig_token_type, s) {
      // prerequisite
      //   trig_token_type = TOKEN_BRACKET_LS
      var loop_flg = true;
      var indicators = new Array();

      while (loop_flg) {
        var r = this.nextToken(s);
        if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_LOOP_INDICATOR");
        indicators.push(r.token);
        s = r.s;
        r = this.nextToken(s);
        s = r.s;
        if (r.type == TOKEN_BRACKET_RS) break;else if (r.type != TOKEN_COMMA) this.onParseError("ERROR_WHILE_PARSE_LOOP_INDICATOR");
      }

      return {
        loopIndicator: new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopIndicator"](indicators),
        s: s
      };
    }
  }, {
    key: "parseLongRestIndicator",
    value: function parseLongRestIndicator(trig_token_type, s) {
      // prerequisite
      //   trig_token_type = TOKEN_BRACKET_LW
      var r = this.nextToken(s);
      s = r.s;
      if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_OMIT_INDICATOR");
      var longrestlen = r.token;
      r = this.nextToken(s);
      s = r.s;
      if (r.type != TOKEN_BRACKET_RW) this.onParseError("ERROR_WHILE_PARSE_OMIT_INDICATOR");
      return {
        longRestIndicator: new _common_common__WEBPACK_IMPORTED_MODULE_1__["LongRestIndicator"](longrestlen),
        s: s
      };
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
        time: new _common_common__WEBPACK_IMPORTED_MODULE_1__["Time"](numer, denom),
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
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Fine"]();
      } else if (r.token == "D.C.") {
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["DaCapo"]();
      } else if ((m = r.token.match(regCoda)) !== null) {
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Coda"](m[1] === undefined ? null : m[1]);
      } else if ((m = r.token.match(regSegno)) !== null) {
        var m2 = r.s.match(/^\s*(straight|((with\s+)repeat))/); //console.log(r.s + "/" + signStr + m2);

        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Segno"](m[2] === undefined ? null : m[2], m2 ? m2[1] : null);
      } else if (r.token == "to") {
        r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
        if (r.type != TOKEN_WORD) throw "Invalid token after to.";
        m = r.token.match(regCoda);
        if (m === null) throw "Coda was not detected";
        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["ToCoda"](m[1] === undefined ? null : m[1]);
      } else if ((m = r.token.match(regDS)) !== null) {
        var dsNumber = m[1] === undefined ? null : m[1];
        var al = null;
        r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);

        if (r.type != TOKEN_END) {
          if (r.type != TOKEN_WORD) throw "Invalid token after D.S.(1)";
          if (r.token != "al") throw "Invalid token after D.S.(2)";
          r = this.nextToken(r.s, WORD_DEFINIITON_GENERAL);
          if (r.type != TOKEN_WORD) throw "Invalid token after al";
          if (r.token == "Fine") al = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Fine"]();else if ((m = r.token.match(regCoda)) !== null) al = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Coda"](m[1] === undefined ? null : m[1]);else throw "Invalid token after al(2)";
        }

        sign = new _common_common__WEBPACK_IMPORTED_MODULE_1__["DalSegno"](dsNumber, al);
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

      var chord = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"](chord_symbol);
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
        simile = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Simile"](numslash);
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
      if (m) rest = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"](m[1]);
      return {
        s: s,
        rest: rest
      };
    }
  }, {
    key: "parseMeasure",
    value: function parseMeasure(trig_token_obj, s) {
      // prerequisite:
      //   trig_boundary == TOKEN_MB || TOKEN_MB_DBL || TOKEN_MB_LOOP_BEGIN || TOKEN_MB_DBL_SIMILE
      // note:
      //   | or || or ||: or :|| at the end of the measure will "not" be consumed.
      var measure = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Measure"]();
      if (trig_token_obj.type == TOKEN_MB) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryMark"](1));else if (trig_token_obj.type == TOKEN_MB_DBL) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryMark"](2));else if (trig_token_obj.type == TOKEN_MB_LOOP_END) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopEndMark"](trig_token_obj.param));else if (trig_token_obj.type == TOKEN_MB_LOOP_BEGIN) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBeginMark"]());else if (trig_token_obj.type == TOKEN_MB_LOOP_BOTH) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBothMark"](trig_token_obj.param));else if (trig_token_obj.type == TOKEN_MB_FIN) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryFinMark"]());else if (trig_token_obj.type == TOKEN_MB_DBL_SIMILE) measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryDblSimile"]());
      var loop_flg = true;
      var atmark_detected = false;
      var associated_chord = null;

      while (loop_flg) {
        var r = this.nextToken(s);

        switch (r.type) {
          case TOKEN_COMMA:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["Space"](1));
            s = r.s;
            break;

          case TOKEN_STRING:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"](r.token));
            s = r.s;
            break;

          case TOKEN_STRING_SQ:
            var comment = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Comment"](r.token, atmark_detected);

            if (atmark_detected) {
              associated_chord.setException(comment);
              atmark_detected = false;
              associated_chord = null;
            }

            measure.elements.push(comment);
            s = r.s;
            break;

          case TOKEN_STRING_GRAVE_ACCENT:
            var lyric = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Lyric"](r.token, atmark_detected);

            if (atmark_detected) {
              associated_chord.setLyric(lyric);
              atmark_detected = false;
              associated_chord = null;
            }

            measure.elements.push(lyric);
            s = r.s;
            break;

          case TOKEN_ATMARK:
            var a_chord = measure.elements[measure.elements.length - 1];
            if (!(a_chord instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"])) this.onParseError("ATMARK_NOT_AFTER_CHORD_SYMBOL");
            associated_chord = a_chord;
            atmark_detected = true;
            s = r.s;
            break;

          case TOKEN_WORD:
            // Analyze Rest symbol
            var rr = this.parseRest(r.token, r.type, r.s);

            if (rr.rest !== null) {
              measure.elements.push(rr.rest);
              s = rr.s;
              break;
            }

          // To SLASH or COLON
          // eslint-disable-next-line no-fallthrough

          case TOKEN_SLASH:
          case TOKEN_COLON:
            r = this.parseChordSymbol(r.token, r.type, r.s);
            measure.elements.push(r.chord);
            s = r.s;
            break;

          case TOKEN_PERIOD:
            // Only simile symbol at this moment
            r = this.parseInMeasSimile(r.token, r.type, r.s);
            measure.elements.push(r.simile);
            s = r.s;
            break;

          case TOKEN_BRACKET_LA:
            r = this.parseSign(r.type, r.s);
            measure.elements.push(r.sign);
            s = r.s;
            break;

          case TOKEN_BRACKET_LR:
            r = this.parseTime(r.type, r.s);
            measure.elements.push(r.time);
            s = r.s;
            break;

          case TOKEN_BRACKET_LS:
            r = this.parseLoopIndicator(r.type, r.s);
            measure.elements.push(r.loopIndicator);
            s = r.s;
            break;

          case TOKEN_BRACKET_LW:
            r = this.parseLongRestIndicator(r.type, r.s);
            measure.elements.push(r.longRestIndicator);
            s = r.s;
            break;

          case TOKEN_MB:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryMark"](1));
            loop_flg = false;
            break;

          case TOKEN_MB_DBL:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryMark"](2));
            loop_flg = false;
            break;

          case TOKEN_MB_LOOP_END:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopEndMark"](r.param));
            loop_flg = false;
            break;

          case TOKEN_MB_LOOP_BEGIN:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBeginMark"]());
            loop_flg = false;
            break;

          case TOKEN_MB_LOOP_BOTH:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBothMark"](r.param));
            loop_flg = false;
            break;

          case TOKEN_MB_FIN:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryFinMark"]());
            loop_flg = false;
            break;

          case TOKEN_MB_DBL_SIMILE:
            measure.elements.push(new _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryDblSimile"]());
            loop_flg = false;
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
      //   trig_token_obj == "|" or "||" or "||:" with params
      // After calling this method, context will be out of measure context, that is,
      // last boundary will be consumed.
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
                loop_flg = false;
                break;

              case TOKEN_END:
                loop_flg = false;
                break;

              case TOKEN_BACK_SLASH:
                loop_flg = false;
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

      return {
        measures: measures,
        s: s
      };
    }
  }, {
    key: "parseMacro",
    value: function parseMacro(s) {
      var key = null;
      var value = null;
      var r = this.nextToken(s);
      if (r.type != TOKEN_WORD) this.onParseError("ERROR_WHILE_PARSE_MACRO");
      key = r.token;
      s = r.s;
      r = this.nextToken(s);
      if (r.type != TOKEN_EQUAL) this.onParseError("ERROR_WHILE_PARSE_MACRO");
      s = r.s; // Parse as JSON decodables : String, Numbers, objects, arrays.

      var v_s = "";

      for (var j = 0; j < s.length && s[j] != "\n"; ++j) {
        v_s += s[j];
      }

      try {
        value = JSON.parse(v_s);
      } catch (e) {
        this.onParseError("ERROR_WHILE_PARSE_MACRO_VALUE");
      }

      s = s.substr(v_s.length); //r = this.nextToken(s);
      //if (r.type != TOKEN_STRING)
      //    this.onParseError("ERROR_WHILE_PARSE_MACRO");
      //s = r.s;
      //value = r.token;

      return {
        key: key,
        value: value,
        s: s
      };
    }
  }, {
    key: "glanceHeader",
    value: function glanceHeader(s) {
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
  }, {
    key: "parse",
    value: function parse(s) {
      try {
        s = s.replace(/\r\n/g, "\n");
        s = s.replace(/\r/g, "\n");
        var r = null;
        var loop_cnt = 0;
        var track = new _common_common__WEBPACK_IMPORTED_MODULE_1__["Track"]();
        var currentReharsalGroup = null;
        var latest_macros = {};
        var current_align = "expand";
        this.context = {
          line: 0,
          contiguous_line_break: 0
        }; // eslint-disable-next-line no-constant-condition

        while (true) {
          r = this.nextToken(s); //console.log(r);

          if (r.type == TOKEN_END) break;

          if (r.type == TOKEN_NL) {
            this.context.line += 1;
            this.context.contiguous_line_break += 1;
            current_align = "expand"; // default is expand
          } else if (r.type == TOKEN_BACK_SLASH) {
            // Expect TOKEN_NL 
            r = this.nextToken(r.s);
            if (r.type != TOKEN_NL) this.onParseError("INVALID CODE DETECTED AFTER BACK SLASH");
            this.context.line += 1; // Does not count as line break
          } else if (r.type == TOKEN_BRACKET_RA) {
            // Right aligh indicoator > which is outside measure
            current_align = "right";
          } else if (r.type == TOKEN_BRACKET_LA) {
            // Right aligh indicoator > which is outside measure
            current_align = "left";
          } else if (r.type == TOKEN_BRACKET_LS) {
            // Reset latest_macros
            latest_macros = {};
            r = this.parseReharsalMark(r.token, r.s); //console.log("Reharsal Mark:"+r.reharsalMarkName);

            if (currentReharsalGroup != null) track.reharsal_groups.push(currentReharsalGroup);
            var inline = this.context.contiguous_line_break <= 1 && track.reharsal_groups.length > 0 && // 1st RG is always non-inline
            track.reharsal_groups[track.reharsal_groups.length - 1].blocks.length > 0; // previous reharsal group has at least one block(measure)

            currentReharsalGroup = new _common_common__WEBPACK_IMPORTED_MODULE_1__["ReharsalGroup"](r.reharsalMarkName, inline); //console.log(currentReharsalGroup);

            this.context.contiguous_line_break = 0;
          } else if ([TOKEN_MB, TOKEN_MB_DBL, TOKEN_MB_LOOP_BEGIN, TOKEN_MB_LOOP_BOTH, TOKEN_MB_FIN, TOKEN_MB_DBL_SIMILE].indexOf(r.type) >= 0) {
            // Exepction : If not reharsal mark is defined and the measure is directly specified, 
            // then define default anonymous reharsal mark
            if (currentReharsalGroup == null) {
              currentReharsalGroup = new _common_common__WEBPACK_IMPORTED_MODULE_1__["ReharsalGroup"]("", false);
              this.context.contiguous_line_break = 0;
            }

            r = this.parseMeasures(r, r.s); // Apply par row macros

            r.measures[0].macros = _common_common__WEBPACK_IMPORTED_MODULE_1__["deepcopy"](latest_macros);

            if (currentReharsalGroup.blocks.length == 0) {
              currentReharsalGroup.blocks.push(new Array());
              currentReharsalGroup.blocks[0] = currentReharsalGroup.blocks[0].concat(r.measures);
            } else {
              if (this.context.contiguous_line_break >= 2) {
                currentReharsalGroup.blocks.push(new Array());
              } else if (this.context.contiguous_line_break == 1) {
                // When new line in the fumen code in the middle of a block
                r.measures[0].raw_new_line = true;
              }

              r.measures[0].align = current_align;
              var blocklen = currentReharsalGroup.blocks.length;
              currentReharsalGroup.blocks[blocklen - 1] = currentReharsalGroup.blocks[blocklen - 1].concat(r.measures);
            }

            this.context.contiguous_line_break = 0; //currentReharsalGroup.measures =
            //	currentReharsalGroup.measures.concat(r.measures);
          } else if (r.type == TOKEN_PERCENT) {
            // Expression
            r = this.parseMacro(r.s);

            if (currentReharsalGroup) {
              currentReharsalGroup.macros[r.key] = r.value;
            } else {
              track.macros[r.key] = r.value;
            }

            latest_macros[r.key] = r.value;
            this.context.contiguous_line_break -= 1; // Does not reset to 0, but cancell the new line in the same row as this macro
          } else {
            console.log(r.token);
            this.onParseError("ERROR_WHILE_PARSE_MOST_OUTSIDER");
          }

          s = r.s;
          loop_cnt++;
          if (loop_cnt >= 1000) break;
        }

        if (currentReharsalGroup != null) {
          track.reharsal_groups.push(currentReharsalGroup);
          currentReharsalGroup = null;
        } // If same reharsal mark appears, preceeding one is applied
        // NOET : This is abandoned in fumen2 as it does not provide a benefit but cause confusion.
        // eslint-disable-next-line no-constant-condition


        if (false) { var rg, i, rgmap; }

        return track;
      } catch (e) {
        console.warn(e);
        return null;
      }
    }
  }]);

  return Parser;
}();

/***/ }),

/***/ "./src/renderer/graphic.js":
/*!*********************************!*\
  !*** ./src/renderer/graphic.js ***!
  \*********************************/
/*! exports provided: CanvasRect, CanvasCircle, CanvasLine, CanvasPolygon, CanvasbBzierCurve, CanvasPath, fontDesc, GetCharProfile, CanvasText, CanvasTextWithBox, CanvasImage, svgLine, svgPath, svgArcBezie, GetPixelRatio, SetupHiDPICanvas, getFontSizeFromHeight, G_imgmap, PreloadImages, getBravuraInstance, Bravura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRect", function() { return CanvasRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasCircle", function() { return CanvasCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasLine", function() { return CanvasLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPolygon", function() { return CanvasPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasbBzierCurve", function() { return CanvasbBzierCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPath", function() { return CanvasPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontDesc", function() { return fontDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCharProfile", function() { return GetCharProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasText", function() { return CanvasText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasTextWithBox", function() { return CanvasTextWithBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasImage", function() { return CanvasImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgLine", function() { return svgLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgPath", function() { return svgPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgArcBezie", function() { return svgArcBezie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPixelRatio", function() { return GetPixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupHiDPICanvas", function() { return SetupHiDPICanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontSizeFromHeight", function() { return getFontSizeFromHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G_imgmap", function() { return G_imgmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadImages", function() { return PreloadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBravuraInstance", function() { return getBravuraInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bravura", function() { return Bravura; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var G_memCanvas = null;
var G_mem_Canvas_size = [600, 600];
var G_pixelRatio = null;
var G_zoom = null;
function CanvasRect(canvas, x, y, w, h) {
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
function CanvasCircle(canvas, x, y, r) {
  var draw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (draw) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.fill();
  }

  return {
    bounding_box: {
      x: x - r,
      y: y - r,
      w: 2 * r,
      h: 2 * r
    }
  };
}
function CanvasLine(canvas, x0, y0, x1, y1, opt) {
  var draw = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

  if (draw) {
    var context = canvas.getContext("2d");
    context.beginPath();
    if (opt && opt.dash) context.setLineDash([2, 2]);
    if (opt && opt.width) context.lineWidth = opt.width;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
    if (opt && opt.dash) context.setLineDash([]);
    if (opt && opt.width) context.lineWidth = 1;
  }

  return {
    bounding_box: {
      x: Math.min(x0, x1),
      y: Math.min(y0, y1),
      w: Math.abs(x0 - x1),
      h: Math.abs(y0 - y1)
    }
  };
}
function CanvasPolygon(canvas, points) {
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
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

  for (var i = 0; i < points.length; ++i) {
    if (i == 0) {
      context.moveTo(points[i][0], points[i][1]);
    } else {
      context.lineTo(points[i][0], points[i][1]);
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
function CanvasbBzierCurve(canvas, points) {
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
function CanvasPath(canvas, svgpathdata) {
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
function fontDesc(fsize, fontfamily, bold) {
  return (bold ? "bold " : "") + fsize + "px '" + (fontfamily ? fontfamily : "Arial") + "'";
}
function GetCharProfile(fsize, fontfamily, bold) {
  var font = fontDesc(fsize, fontfamily, bold);
  var yroom = null;
  if (font in G_y_char_offsets) yroom = G_y_char_offsets[font];else {
    if (!G_memCanvas) {
      G_memCanvas = document.createElement("canvas");
      SetupHiDPICanvas(G_memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], G_pixelRatio, G_zoom);
      console.log("Pixel ratio = " + G_pixelRatio);
    }

    yroom = JudgeTextYPosOffset(G_memCanvas, font); //bold, fontfamily, fsize);

    G_y_char_offsets[font] = yroom;
  }
  return yroom;
}
function CanvasText(canvas, x, y, text, fsize, align, xwidth, notdraw, opt) {
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
  var font = fontDesc(fsize, opt ? opt.fontfamily : null, opt ? opt.bold : null);
  var yadjust = 0;
  var yroom = null;
  context.font = font; //bold + fsize + "px '" + fontfamily + "'";

  context.textAlign = ta[align[0]];

  if (opt && opt.raw) {
    // DO othing
    context.textBaseline = tb[align[1]]; //tb[align[1]];
  } else {
    yroom = GetCharProfile(fsize, opt ? opt.fontfamily : null, opt ? opt.bold : null);

    if (align[1] == "t") {
      yadjust = -yroom.top_room;
    } else if (align[1] == "m") {
      yadjust = -(yroom.top_room + yroom.height / 2.0); // This is just a huristic guess
    } else if (align[1] == "b") {
      yadjust = -(yroom.top_room + yroom.height);
    } else {// default
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
  if (xwidth != null) width = Math.min(xwidth, width); // eslint-disable-next-line no-constant-condition

  if (false) {}

  if (opt != null) {
    for (var _key in orgValues) {
      context[_key] = orgValues[_key];
    }
  }

  context.font = orgfont;
  var ret = {
    width: width
  };
  Object.assign(ret, yroom);
  return ret;
}
function CanvasTextWithBox(canvas, x, y, text, fsize) {
  var margin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  var min_width = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var ret = null;

  if (min_width != null) {
    ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt", undefined, true);

    if (ret.width < min_width) {
      ret = CanvasText(canvas, x + margin + min_width / 2, y + margin, text, fsize, "ct");
      ret.width = min_width;
    } else {
      ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt");
    }
  } else {
    ret = CanvasText(canvas, x + margin, y + margin, text, fsize, "lt");
  }

  CanvasRect(canvas, x, y, ret.width + 2 * margin, ret.height + 2 * margin);
  return {
    width: ret.width + 2 * margin,
    height: ret.height + 2 * margin
  };
}
function CanvasImage(canvas, img, x, y, w, h) {
  var align = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "lt";
  var draw = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  var act_w = img.width;
  var act_h = img.height; // only if one of w or y is not specified, scaling applies. 

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

  return {
    bounding_box: {
      x: x + x_shift,
      y: y + y_shift,
      w: act_w,
      h: act_h
    }
  };
} // SVG related

function svgLine(x0, y0, x1, y1) {
  return "M" + x0 + "," + y0 + " L" + x1 + "," + y1;
} // SVG related

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

  for (var i = 1; i < point_array.length; ++i) {
    svg += point_array[i][0] + " " + point_array[i][1] + " ";
  }

  return svg;
} // Text rendering 

var G_y_char_offsets = {};
function GetPixelRatio(canvas) {
  var ctx = canvas.getContext("2d"),
      dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  return dpr / bsr;
}
function SetupHiDPICanvas(canvas, w, h, ratio, zoom) {
  if (!ratio) ratio = GetPixelRatio(canvas);
  if (!zoom) zoom = 1.0; // This is not a good manner, though...

  G_pixelRatio = ratio;
  G_zoom = zoom; //console.log(ratio + "/" + w + "," + h);

  var ctx = canvas.getContext("2d");
  canvas.width = w * ratio * G_zoom;
  canvas.height = h * ratio * G_zoom;
  canvas.style.width = w * G_zoom + "px";
  canvas.style.height = h * G_zoom + "px";
  ctx.setTransform(ratio * G_zoom, 0, 0, ratio * G_zoom, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return {
    ratio: ratio
  };
}

function JudgeTextYPosOffset(canvas, font, code)
/*bold, fontfamily, fontsize) */
{
  var context = canvas.getContext("2d");
  if (!code) code = "D";
  var bs = 300; //fontsize * G_pixelRatio;

  context.clearRect(0, 0, bs, bs);
  context.fillStyle = "rgba(255,255,255,1)";
  context.fillRect(0, 0, bs, bs); //context.font = bold + fontsize + "px '" + fontfamily + "'";

  context.fillStyle = "rgba(0,0,0,1)";
  context.font = font;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(code, 0, 0);
  var imageData = context.getImageData(0, 0, bs, bs); // Always inside fontsize*fontsize box

  var data = imageData.data;
  var top_room = 0;
  var bottom_room = 0;
  console.log(imageData.width, imageData.height, data.length);
  var found_nonwhite = false; //console.log(imageData);

  var row;
  var col;

  for (row = 0; row < imageData.height; ++row) {
    for (col = 0; col < imageData.width; ++col) {
      var R = data[col * 4 + 0 + row * imageData.width * 4];
      var G = data[col * 4 + 1 + row * imageData.width * 4];
      var B = data[col * 4 + 2 + row * imageData.width * 4];
      var A = data[col * 4 + 3 + row * imageData.width * 4];
      var nonwhite = A > 0 && (R < 255 || G < 255 || B < 255); //console.log([row, col, R,G,B,A]);

      if (nonwhite) {
        found_nonwhite = true;
        break;
      }
    }

    if (found_nonwhite) break;else ++top_room;
  } // Judge hight of char

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
      var _A = data[col * 4 + 3 + row * imageData.width * 4]; //console.log([row, col, R,G,B,A]);

      var _nonwhite = _A > 0 && (_R < 255 || _G < 255 || _B < 255);

      if (_nonwhite) {
        found_nonwhite = true;
        break;
      }
    }

    if (found_nonwhite) break;else ++bottom_room;
  } // here the raw pixel data resolution is G_pixelRatio * G_zoom times. (Same value as setTransform in SetupHIDPICanvas) 


  return {
    top_room: top_room / G_pixelRatio / G_zoom,
    height: (imageData.height - top_room - bottom_room) / G_pixelRatio / G_zoom,
    bottom_room: bottom_room / G_pixelRatio / G_zoom,
    imgheight: imageData.height / G_pixelRatio / G_zoom
  };
}

function getFontSizeFromHeight(height, fontfamily, code, tol, opt) {
  // Determine the font size of which height is same as specified value.
  // TODO : Binary search
  var canvas_to_use = opt ? opt.canvas : null;

  if (!G_memCanvas) {
    G_memCanvas = document.createElement("canvas");
    SetupHiDPICanvas(G_memCanvas, G_mem_Canvas_size[0], G_mem_Canvas_size[1], G_pixelRatio, G_zoom);
    console.log("Pixel ratio = " + G_pixelRatio);
  }

  if (!canvas_to_use) canvas_to_use = G_memCanvas;
  var maxLoop = 100;
  var curLow = 1;
  var curHigh = 500;
  var px = (curLow + curHigh) / 2;
  var loop = 0;
  if (!tol) tol = 0.5;

  while (loop < maxLoop) {
    var ret = JudgeTextYPosOffset(canvas_to_use, px + "px '" + fontfamily + "'", code);
    console.log("px=" + px + ", target height=" + height);
    console.log(ret); //var tol = 0.4;

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
var G_imgmap = {};
function PreloadImages(imageurls) {
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
var theBravura = null;
function getBravuraInstance(fontfamily, woff_url, meta_json_url, glyphnames_json) {
  if (theBravura) return theBravura;
  theBravura = new Bravura(fontfamily, woff_url, meta_json_url, glyphnames_json);
  return theBravura;
}
var Bravura =
/*#__PURE__*/
function () {
  function Bravura(fontfamily, woff_url, meta_json_url, glyphnames_json) {
    _classCallCheck(this, Bravura);

    // fontfamily is "Bravura" or "Bravura Text" depending on the specified woff file.
    // Currenly only "Bravura Text" works.
    this.intervalToFontSizeMap = {};
    this.codeToNameMap = {};
    this.init_promise = this.init(fontfamily, woff_url, meta_json_url, glyphnames_json);
  }

  _createClass(Bravura, [{
    key: "getJSON",
    value: function getJSON(url) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();

        req.onreadystatechange = function () {
          if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.responseText);
            resolve(data);
          }
        };

        req.open("GET", url, false);
        req.send(null);
      });
    }
  }, {
    key: "ready",
    value: function ready() {
      return this.init_promise;
    }
  }, {
    key: "checkloaded",
    value: function checkloaded() {
      var c1 = document.createElement("canvas");
      var c2 = c1.cloneNode(false);
      var ctx1 = c1.getContext("2d");
      var ctx2 = c2.getContext("2d");
      ctx1.font = "normal 30px '" + this.fontfamily + "', serif";
      ctx2.font = "normal 30px serif";
      var text = String.fromCodePoint(0xE050); //"this is test text.";  // Gclef as a reference

      return new Promise(function (resolve, reject) {
        function loaded() {
          var tm1 = ctx1.measureText(text);
          var tm2 = ctx2.measureText(text);
          console.log("tm1:" + tm1.width + " tm2:" + tm2.width);
          return tm1.width != tm2.width;
        }

        var cnt = 0;

        function checker() {
          if (loaded()) {
            resolve(true);
          } else if (cnt >= 30) {
            reject("Time out");
          } else {
            setTimeout(checker, 100);
            cnt++;
          }
        }

        checker();
      });
    }
  }, {
    key: "init",
    value: function init(fontfamily, woff_url, meta_json_url, glyphnames_json) {
      var _this = this;

      this.fontfamily = fontfamily; // THis does not work in MS Edge
      //var font = new FontFace(this.fontfamily, "url("+woff_url+")");
      //var pf = font.load();

      var pf = this.checkloaded(); //new Promise(function(resolve){ resolve(true); }); // Dammy promise

      var pmeta = this.getJSON(meta_json_url);
      var pg = this.getJSON(glyphnames_json); // From https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/glyphnames.json

      return Promise.all([pf, pmeta, pg]).then(function (rets) {
        //document.fonts.add(font);
        //console.log("Font loaded");
        _this.metaData = rets[1];
        _this.glyphnames = rets[2];

        for (var key in _this.glyphnames) {
          var codeInt = parseInt(_this.glyphnames[key].codepoint.replace("U+", "0x"));
          _this.codeToNameMap[codeInt] = key;
        }
      });
    }
  }, {
    key: "put",
    value: function put(canvas, name_or_code, staff_interval_px, lx, ty) {
      var code = name_or_code;
      if (name_or_code instanceof String) code = parseInt(this.glyphnames[name].codepoint.replace("U+", "0x"));
      var fontSize = null;
      if (staff_interval_px in this.intervalToFontSizeMap) fontSize = this.intervalToFontSizeMap[staff_interval_px];else {
        var lineThickNessShift = 0.064; // Line tickness

        fontSize = getFontSizeFromHeight(staff_interval_px * 4 + lineThickNessShift * staff_interval_px, this.fontfamily, String.fromCodePoint(0xE014)); // 5 line is baseline

        this.intervalToFontSizeMap[staff_interval_px] = fontSize;
      }
      var ctx = canvas.getContext("2d");
      ctx.save();
      ctx.font = fontSize + "px '" + this.fontfamily + "'";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(String.fromCodePoint(code), lx, ty);
      ctx.restore();
    }
  }]);

  return Bravura;
}();

/***/ }),

/***/ "./src/renderer/mobile_renderer.js":
/*!*****************************************!*\
  !*** ./src/renderer/mobile_renderer.js ***!
  \*****************************************/
/*! exports provided: MobileRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRenderer", function() { return MobileRenderer; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer/renderer.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var _graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphic */ "./src/renderer/graphic.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 //import { getGlobalMacros, getMacros } from "../parser/parser";

var SR_RENDER_PARAM = {
  origin: {
    x: 0,
    y: 0
  },
  y_title_offset: 2,
  y_subtitle_offset: 16,
  y_artist_offset: 16,
  y_first_page_offset: 30,
  // With header
  y_offset: 10,
  // Without header
  x_offset: 10,
  y_footer_offset: 10,
  min_measure_width: 100,
  row_height: 28,
  // Basic height of the measure when no rs, mu and ml area is drawn
  base_body_height: 28,
  // Height in body area (not applicable for RS area) used for simile and rest rendering. Recommended to keep this value irrespective of row_height.
  row_margin: 4,
  // Margin between next y_base and lower edge of Measure Lower Area
  rs_area_height: 24,
  // Rhythm Slashes Area // 
  rm_area_height: 15,
  // Reharsal Mark Area
  mu_area_height: 15,
  // Measure Upper Area ( Repeat signs area )
  ml_row_height: 10,
  // Measure Lower Area ( Lyrics etc.. )
  below_mu_area_margin: 2,
  // Margin between MU and chord
  above_rs_area_margin: 0,
  // Margin between chord and rythm slash
  below_rs_area_margin: 10,
  // Margin below chord and rhthm slash
  above_ml_area_margin: 0,
  // Margin between (chord/rythm slash) and measure lower(lyrics etc) rea
  repeat_mark_y_margin: 2,
  // RS are upper/bootom and Repeat Marks( DalSegno, DaCapo, Fine, xX ) y margin in case RS are is shown.
  xtimes_mark_y_margin: 2,
  // Margin between body/RS are and "(x times)" mark.
  header_body_margin: 2,
  // Margin between header and body (x-direction)
  max_scaling: 1.2,
  paper_width: 96 * 210 / 25.4,
  // 96dpi * A4_width[mm] / 25.4[mm/inche], total canvas width = paper_width, internal paper width is paper_width/zoom
  paper_height: 96 * 297 / 25.4,
  // 96dpi * A4_height[mm] / 25.4[mm/inche], total canvas height = paper_height. internal paper height is paper_height/zoom
  zoom: 1.0,
  // total canvas size will be [paper_width * zoom, paper_height*zoom]. NOTE that even the canvas size is scaled with zoom, any coordinate unit/size infomation inside the renderer stays the same and no need to be conscious about zoom value.
  pixel_ratio: 2,
  // integer. null : use system default, this is not configurable in source as it is memoried in global variable.
  ncol: 1,
  // Number of columns of score inside the paper
  nrow: 1,
  // Number of rows of score inside the paper
  repeat_mark_font: {
    "font-family": "Times New Roman",
    "font-style": "italic",
    "font-weight": "bold"
  },
  reharsal_mark_font_size: 12,
  title_font_size: 14,
  subtitle_font_size: 12,
  artist_font_size: 14,
  base_font_size: 28,
  balken_width: 3,
  note_bar_length: 24 / 4 * 3.5,
  // 3.5 times of interval is the conventional length
  note_flag_interval: 5,
  optimize_type: 3,
  // 0 : Constant room for each flexible element. 1: Not defined, 2: Evenly division of measures(force), 3: Evenly division of measures as much as possible
  vertical_align: 1,
  // 1: Enable, 0: Disable
  vertical_align_intensity: 0.9,
  // Vertical align intensity 0:No align, 1:Always align
  min_room: 10,
  // Minimum room for flexile elements
  scale_if_overlap: 1,
  // 1 or 0
  on_bass_style: "right",
  // right|below
  on_bass_below_y_offset: 0,
  background_color: "white" // null will be transparent

}; // Simple renderer offsets

var MobileRenderer =
/*#__PURE__*/
function (_Renderer) {
  _inherits(MobileRenderer, _Renderer);

  function MobileRenderer(canvas, param) {
    var _this;

    var canvas_provider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, MobileRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileRenderer).call(this));
    _this.canvas = canvas;
    _this.memCanvas = null; // Canvas on memory used for screening

    _this.param = _common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](SR_RENDER_PARAM); // Default parameters
    // Overwrite

    for (var key in param) {
      _this.param[key] = _common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](param[key]);
    }

    _this.canvas_provider = canvas_provider;
    _this.track = null;
    _this.context = {
      paper: null,
      region_id: 0
    };
    _this.buravura = _graphic__WEBPACK_IMPORTED_MODULE_3__["getBravuraInstance"]("Bravura Text", "./assets/fonts/BravuraText.woff", "./assets/fonts/bravura_metadata.json", "./assets/fonts/glyphnames.json");
    return _this;
  }

  _createClass(MobileRenderer, [{
    key: "render",
    value: function render(track, async_mode, progress_cb) {
      var _this2 = this;

      this.track = track; // Always works as asynchronously
      // Preload images, which is done asynchronously

      var urls = ["assets/img/segno.svg", "assets/img/coda.svg", "assets/img/flat.svg", "assets/img/sharp.svg", "assets/img/natural.svg", "assets/img/rest1.svg", "assets/img/rest2.svg", "assets/img/rest4.svg", "assets/img/rest8.svg", "assets/img/w1note.svg", "assets/img/w2note.svg", "assets/img/bnote.svg", "assets/img/flag_f.svg", "assets/img/flag_i.svg"];
      var param = this.param;
      return _graphic__WEBPACK_IMPORTED_MODULE_3__["PreloadImages"](urls).then(function () {
        return _this2.buravura.ready();
      }).then(function () {
        return _this2.render_impl(track, param);
      });
    }
  }, {
    key: "render_footer",
    value: function render_footer(canvaslist, songname, y) {
      var _this3 = this;

      var score_width = this.param.paper_width / this.param.zoom / this.param.ncol;
      canvaslist.forEach(function (canvas, pageidx) {
        // Page number footer
        var footerstr = songname + " - " + (pageidx + 1) + " of " + canvaslist.length; //alert(footerstr);

        _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, _this3.param.origin.x + score_width / 2, y, //this.param.origin.y + score_height - this.param.y_footer_offset,
        footerstr, 12, "ct");
      });
    }
  }, {
    key: "determine_rooms",
    value: function determine_rooms(param, reharsal_x_width_info) {
      var total_width = param.paper_width / this.param.zoom - 2 * param.x_offset;

      var field_sum = function field_sum(arr, field) {
        return arr.reduce(function (acc, e) {
          var obj = {};
          obj[field] = acc[field] + e[field];
          return obj;
        })[field];
      }; // Optimize width of each measure


      var row = 0; // Minimum room for flexible elements. It is treated as part of fixed width, 
      // hence it is just systematically added when "meas_fixed_width" is reffered.
      // And finallly min_room is added for room_per_elem.

      var min_room = param.min_room;

      var _loop = function _loop() {
        var row_elements_list = reharsal_x_width_info[row][0];
        var x_width_info = reharsal_x_width_info[row][1]; // For number of measures

        var num_flexible_rooms = field_sum(x_width_info, "meas_num_flexible_rooms");
        var fixed_width = field_sum(x_width_info, "meas_fixed_width") + min_room * num_flexible_rooms;
        var num_meas = row_elements_list.length;
        var num_meas_to_consider = num_meas; // for type #2 and #3
        // In case right or left align is specified

        var reduced_meas_valid = false;

        if (row_elements_list[0].align != "expand" && row > 0) {
          // find the last measure for which expand is applied, or fallback to #0.
          var _rowdash;

          for (_rowdash = row - 1; _rowdash >= 0; --_rowdash) {
            if (reharsal_x_width_info[_rowdash][0].align == "expand") break;
          }

          if (_rowdash < 0) _rowdash = 0; // Fallback to #0 even it has right|left align

          reduced_meas_valid = reharsal_x_width_info[_rowdash][0].length > num_meas;

          if (reduced_meas_valid) {
            //let dammy_add_num = reharsal_x_width_info[row-1][0].length - num_meas;
            num_meas_to_consider = reharsal_x_width_info[_rowdash][0].length;
            /*for(let di=0; di < dammy_add_num; ++di){
                let dammy_measure = new common.Measure();
            row_elements_list.splice(0, 0, dammy_measure);
            x_width_info.splice(0, 0, {"meas_fixed_width":0, "meas_num_flexible_rooms":0});
            }*/
          }
        }

        var room_per_elem_constant = (total_width - fixed_width) / num_flexible_rooms; // Constant room for all room

        var room_per_meas_even_meas = []; // room per measure for each meas in case even division of width for each measure

        for (var _mi5 = 0; _mi5 < num_meas; ++_mi5) {
          room_per_meas_even_meas.push(total_width / num_meas_to_consider - x_width_info[_mi5].meas_fixed_width - min_room * x_width_info[_mi5].meas_num_flexible_rooms);
        }

        if (room_per_elem_constant < 0 || param.optimize_type == 0) {
          row_elements_list.forEach(function (e, mi) {
            e.renderprop.room_per_elem = room_per_elem_constant + min_room;
            x_width_info[mi].measure_width = e.renderprop.room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width += x_width_info[mi].meas_fixed_width; // min_room already cosidered in the above line

            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
          });
          row++;
        } else if (param.optimize_type == 2) {
          // Equal division
          row_elements_list.forEach(function (e, mi) {
            e.renderprop.room_per_elem = room_per_meas_even_meas[mi] / x_width_info[mi].meas_num_flexible_rooms + min_room;
            x_width_info[mi].measure_width = e.renderprop.room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width += x_width_info[mi].meas_fixed_width; // min_room already cosidered in the above line

            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
          });
          if (reduced_meas_valid && row_elements_list[0].align == "right") row_elements_list[0].renderprop.left_margin = total_width / num_meas_to_consider * (num_meas_to_consider - num_meas);
          row++;
        } else if (param.optimize_type == 3) {
          // https://docs.google.com/document/d/1oPmUvAF6-KTsQrEovYJgMZSDqlztp4pL-XVs8uee7A4/edit?usp=sharing
          // Here alpha=1 case is filtered at the first IF statement, then we only consider the case
          // where room when optimize_type = 0 is positive.
          var alpha = 0.0;

          for (var _mi6 = 0; _mi6 < num_meas; ++_mi6) {
            if (room_per_meas_even_meas[_mi6] < 0) {
              var R0 = room_per_elem_constant * x_width_info[_mi6].meas_num_flexible_rooms;
              var R2 = room_per_meas_even_meas[_mi6];
              var alpha_dash = R2 / (R2 - R0); // should be a positive value less than 1

              alpha = Math.max(alpha, alpha_dash);
            }
          }

          var _row_total_width = 0;
          row_elements_list.forEach(function (e, mi) {
            var R0 = room_per_elem_constant * x_width_info[mi].meas_num_flexible_rooms;
            var R2 = room_per_meas_even_meas[mi];
            e.renderprop.room_per_elem = (alpha * R0 + (1 - alpha) * R2) / x_width_info[mi].meas_num_flexible_rooms + min_room;
            x_width_info[mi].measure_width = e.renderprop.room_per_elem * x_width_info[mi].meas_num_flexible_rooms;
            x_width_info[mi].measure_width += x_width_info[mi].meas_fixed_width; // min_room already cosidered in the above line

            e.renderprop.measure_width = x_width_info[mi].measure_width;
            e.renderprop.meas_fixed_width = x_width_info[mi].meas_fixed_width;
            e.renderprop.body_fixed_width = x_width_info[mi].body_fixed_width;
            e.renderprop.meas_num_flexible_rooms = x_width_info[mi].meas_num_flexible_rooms;
            _row_total_width += x_width_info[mi].measure_width;
          });
          if (reduced_meas_valid && row_elements_list[0].align == "right") row_elements_list[0].renderprop.left_margin = total_width - _row_total_width;
          console.log("alpha = " + alpha);
          row++;
        } else {
          throw "Invalid optimize type";
        }
      };

      while (row < reharsal_x_width_info.length) {
        _loop();
      }

      if (param.vertical_align) {
        var _row = 0;

        while (_row < reharsal_x_width_info.length) {
          console.log("row :" + _row);
          var num_meas = reharsal_x_width_info[_row][0].length; // Group the rows with :
          //     1. the same number of measures from #row
          //     2. Having right align mark and having less than 1st row

          var same_nmeas_row_group = [];
          var rowdash = void 0;

          for (rowdash = _row; rowdash < reharsal_x_width_info.length; ++rowdash) {
            if (reharsal_x_width_info[rowdash][0].length == num_meas) {
              same_nmeas_row_group.push(reharsal_x_width_info[rowdash]);
            } else if (rowdash > 0 && reharsal_x_width_info[rowdash][0][0].align != "expand" && reharsal_x_width_info[rowdash][0].length < num_meas) {
              same_nmeas_row_group.push(reharsal_x_width_info[rowdash]);
            } else {
              break; // only group the continuous rows with same number of measures
            }
          } // Withing the group above, search for the groups for which alternation extension condition is met
          // Take maximum of each column, and check if total width wider than paper width
          // Make virtual combined row having : 
          //    Fixed width = max( fixed width of all rows in correspoding column )


          var max_measure_widths = new Array(num_meas).fill(0); // In case the row with less measures than other rows exists,
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
          }; // TODO : More clean code ...


          for (rowdash = 0; rowdash < same_nmeas_row_group.length; ++rowdash) {
            var dammy_max_measure_widths = new Array(num_meas).fill(0);
            var x_width_info = same_nmeas_row_group[rowdash][1];
            var row_elements_list = same_nmeas_row_group[rowdash][0];

            for (var mi = 0; mi < num_meas; ++mi) {
              var mi_ref = getMeasRefIndex(mi, row_elements_list, num_meas);

              if (mi_ref == null) {
                // corresponding measure does not exist : inherit current max value
                dammy_max_measure_widths[mi] = max_measure_widths[mi];
                continue;
              }

              dammy_max_measure_widths[mi] = Math.max(x_width_info[mi_ref].measure_width, max_measure_widths[mi]);
            }

            var dammy_total_max_measure_width = dammy_max_measure_widths.reduce(function (acc, e) {
              return acc + e;
            }); // This is always >= total_width except reduced measure with left/right align is under analysis.
            // Nomralize so that total width does not surpass total_width.
            // In case only reduced measure row is under analysis and dammy_total_max_measure_width is less than total_width,
            // do nothiing.  

            for (var _mi = 0; _mi < num_meas; ++_mi) {
              dammy_max_measure_widths[_mi] = dammy_max_measure_widths[_mi] / dammy_total_max_measure_width * Math.min(total_width, dammy_total_max_measure_width);
            } // If there is at least one measure which does not meet alternate threshold, then do not include rowdash


            var all_meets_thread = true;

            if (rowdash == 0) {// First row is always fixed.
            } else {
              // For the case of 2 and more rows. Judge if combined rows meets the criteria.
              for (var rowdash2 = 0; rowdash2 <= rowdash; ++rowdash2) {
                for (var _mi2 = 0; _mi2 < num_meas; ++_mi2) {
                  var _mi_ref = getMeasRefIndex(_mi2, same_nmeas_row_group[rowdash2][0], num_meas);

                  if (_mi_ref == null) continue; // Calculate alter ratio for this measure
                  // If 
                  //   1. Room per elem is bigger than min_room

                  var alter_ratio = same_nmeas_row_group[rowdash2][1][_mi_ref].measure_width / dammy_max_measure_widths[_mi2]; //if(Math.abs(1.0 - alter_ratio) > alter_thresh){

                  if (alter_ratio < 1 - param.vertical_align_intensity) {
                    // only check how much the width is narrowed. Expanding case is not checked.
                    all_meets_thread = false;
                    break;
                  }
                  /*
                  let dammy_room_per_elem = (dammy_max_measure_widths[mi] 
                      - same_nmeas_row_group[rowdash2][1][mi_ref].meas_fixed_width)/
                      same_nmeas_row_group[rowdash2][1][mi_ref].meas_num_flexible_rooms;
                   let m = same_nmeas_row_group[rowdash2][0][mi_ref];
                   m.renderprop.room_per_elem;
                  */

                }

                if (all_meets_thread == false) break;
              }
            }

            if (all_meets_thread) {
              max_measure_widths = dammy_max_measure_widths;
            } else {
              break;
            }
          } // Here rowdash means number of actually grouped rows


          var act_num_grouped_rows = rowdash;
          console.log("max_fixed_widths :");
          console.log(max_measure_widths); //let max_measure_widths = new Array(num_meas).fill(0);
          // room per froom with maximum fixed with only
          // Then, at last, calculate the rooms for each row and measure

          for (rowdash = 0; rowdash < act_num_grouped_rows; ++rowdash) {
            var _x_width_info = same_nmeas_row_group[rowdash][1];
            var _row_elements_list = same_nmeas_row_group[rowdash][0];

            for (var _mi3 = 0; _mi3 < num_meas; ++_mi3) {
              var _mi_ref2 = getMeasRefIndex(_mi3, _row_elements_list, num_meas);

              if (_mi_ref2 == null) continue;
              var m = _row_elements_list[_mi_ref2]; // No need to separtely consider min_room here. Just simply distribute rooms for each elements

              m.renderprop.room_per_elem = (max_measure_widths[_mi3] - _x_width_info[_mi_ref2].meas_fixed_width) / _x_width_info[_mi_ref2].meas_num_flexible_rooms;
              m.renderprop.measure_width = max_measure_widths[_mi3];
              m.renderprop.meas_fixed_width = _x_width_info[_mi_ref2].meas_fixed_width; // Actually this is already set

              m.renderprop.body_fixed_width = _x_width_info[_mi_ref2].body_fixed_width;
              m.renderprop.meas_num_flexible_rooms = _x_width_info[_mi_ref2].meas_num_flexible_rooms;
            }
          } // Set left margin in case it is needed.


          for (rowdash = 0; rowdash < act_num_grouped_rows; ++rowdash) {
            var _row_elements_list2 = same_nmeas_row_group[rowdash][0];
            var row_total_width = 0;

            for (var _mi4 = 0; _mi4 < _row_elements_list2.length; ++_mi4) {
              row_total_width += max_measure_widths[_mi4 + (max_measure_widths.length - _row_elements_list2.length)];
            }

            var _m = _row_elements_list2[0];

            if (_m.align == "right") {
              _m.renderprop.left_margin = total_width - row_total_width;
            }
          }

          _row += act_num_grouped_rows;
          console.log("row updated : " + _row + " / " + act_num_grouped_rows);

          if (act_num_grouped_rows <= 0) {
            throw "Something wrong with the code";
          }
        }
      }
    }
  }, {
    key: "merge_param",
    value: function merge_param(param, additional_param) {
      var takemax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
    }
  }, {
    key: "render_impl",
    value: function () {
      var _render_impl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(track, param) {
        var _this4 = this;

        var global_macros, show_header, show_footer, origin, y_title_offset, y_subtitle_offset, y_artist_offset, x_offset, width, music_context, meas_row_list, accum_block_id, meas_row, meas_row_rg_ids, meas_row_block_ids, i, rg, bi, block_measures, ml, m, meas_row_list_inv, _loop2, _i2, y_stacks, next_reharsal_group_index, yse, y_base_screening, dammy_music_context, current_accum_block_id, reharsal_x_width_info, pei, x, row_elements_list, _ml, _m2, elements, geret, yprof, x_width_info, canvas, score_height, y_base, ri, canvaslist, _pei, _row_elements_list3, ylimit, r;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global_macros = track.macros; //getGlobalMacros(track);

                if ("PARAM" in global_macros) {
                  this.merge_param(this.param, global_macros["PARAM"], false); // Merge to defaul param
                }

                show_header = global_macros["SHOW_HEADER"] == "YES";
                show_footer = global_macros["SHOW_FOOTER"] == "YES";
                origin = param.origin; //{x:0,y:0};

                y_title_offset = origin.y + param.y_title_offset;
                y_subtitle_offset = origin.y + param.y_subtitle_offset;
                y_artist_offset = origin.y + param.y_artist_offset;
                x_offset = origin.x + param.x_offset;
                width = param.paper_width / this.param.zoom / param.ncol - param.x_offset * 2; // Music context

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
                  pos_in_a_measure: 0
                };
                meas_row_list = []; // Firstly, just split with new lines

                accum_block_id = 0;
                meas_row = [];
                meas_row_rg_ids = [];
                meas_row_block_ids = [];

                for (i = 0; i < track.reharsal_groups.length; ++i) {
                  rg = track.reharsal_groups[i];

                  for (bi = 0; bi < rg.blocks.length; ++bi) {
                    block_measures = rg.blocks[bi];

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
                } // If there is inline reharsal group, then combine the last row of the 
                // last reharsal group  and first row of the reharsal group
                // tmp variable : shallow copy of meas_row_list


                meas_row_list_inv = meas_row_list.slice().reverse();

                _loop2 = function _loop2(_i2) {
                  var rg = track.reharsal_groups[_i2];

                  if (rg.inline) {
                    var dst_idx = meas_row_list_inv.findIndex(function (e) {
                      return e.meas_row_rg_ids.includes(_i2 - 1);
                    });
                    dst_idx = meas_row_list.length - 1 - dst_idx; // Convert to index for non-inversed array

                    var src_idx = meas_row_list.findIndex(function (e) {
                      return e.meas_row_rg_ids.includes(_i2);
                    });
                    var dst = meas_row_list[dst_idx];
                    var src = meas_row_list[src_idx];
                    dst.meas_row = dst.meas_row.concat(src.meas_row);
                    dst.meas_row_rg_ids = dst.meas_row_rg_ids.concat(src.meas_row_rg_ids);
                    dst.meas_row_block_ids = dst.meas_row_block_ids.concat(src.meas_row_block_ids);
                    meas_row_list.splice(src_idx, 1); // Delete the first row

                    meas_row_list_inv = meas_row_list.slice().reverse();
                  }
                };

                for (_i2 = 0; _i2 < track.reharsal_groups.length; ++_i2) {
                  _loop2(_i2);
                } // Make y-strack elements, and mark the reharsal mark position


                y_stacks = [];
                next_reharsal_group_index = 0;
                meas_row_list.forEach(function (e, i) {
                  // eslint-disable-next-line no-constant-condition
                  while (true) {
                    var meas_index = e.meas_row_rg_ids.findIndex(function (e) {
                      return e == next_reharsal_group_index;
                    });
                    if (meas_index < 0) break;
                    e.meas_row[meas_index].renderprop.rg_from_here = track.reharsal_groups[next_reharsal_group_index];
                    ++next_reharsal_group_index;
                  }

                  var prev_measures = i > 0 ? meas_row_list[i - 1].meas_row : null;
                  var prev_measure = prev_measures ? prev_measures[prev_measures.legnth - 1] : null;
                  var next_measures = i < meas_row_list.length - 1 ? meas_row_list[i + 1].meas_row : null;
                  var next_measure = next_measures ? next_measures[0] : null; // Determine params to be applied for this. 
                  // As of now, 
                  //var rg_macros = getMacros(global_macros, track.reharsal_groups[i]);

                  var row_macros = _common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](global_macros);
                  var param_for_row = _this4.param;
                  var param_for_row_alt = false;
                  e.meas_row.forEach(function (m) {
                    if (!m.macros) return;

                    for (var _i3 = 0, _Object$entries2 = Object.entries(m.macros); _i3 < _Object$entries2.length; _i3++) {
                      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                          key = _Object$entries2$_i[0],
                          value = _Object$entries2$_i[1];

                      if (key == "PARAM") {
                        if (!param_for_row_alt) {
                          param_for_row = _common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](_this4.param); // Make copy

                          _this4.merge_param(param_for_row, value, false); // Overwrite 


                          param_for_row_alt = true;
                        } else {
                          _this4.merge_param(param_for_row, value, true); // Update 

                        }
                      } else {
                        row_macros[key] = value;
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
                    //rg: track.reharsal_groups[i],
                    //rg_id : i,
                    macros: global_macros,
                    // TODO : Macros for each row...?
                    param: param_for_row //block_id: bi,
                    //row_id_in_block: row_id_in_block-1 // Already incremented then row id is minus 1

                  });
                }); // ---------------------
                // Stage 1 : Screening
                // ---------------------

                if (!this.memCanvas) {
                  // Canvas on memory for screening
                  // TODO : Canvas height 400 is enough ?
                  this.memCanvas = document.createElement("canvas");
                  _graphic__WEBPACK_IMPORTED_MODULE_3__["SetupHiDPICanvas"](this.memCanvas, this.param.paper_width / this.param.zoom, 400 / this.param.zoom, this.param.pixel_ratio, this.param.zoom);
                }

                yse = y_stacks;
                y_base_screening = origin.y;

                if (show_header) {
                  y_base_screening += param.y_first_page_offset;
                } else {
                  y_base_screening += param.y_offset;
                }

                dammy_music_context = _common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](music_context); // Maybe not required ?

                current_accum_block_id = 0;
                reharsal_x_width_info = [];
                pei = 0;

              case 31:
                if (!(pei < yse.length)) {
                  _context.next = 46;
                  break;
                }

                if (!(yse[pei].type == "titles")) {
                  _context.next = 34;
                  break;
                }

                return _context.abrupt("continue", 43);

              case 34:
                x = yse[pei].param.x_offset; //if(yse[pei].rg_id != current_rg_block[0] || yse[pei].block_id != current_rg_block[1]){

                if (!yse[pei].block_ids.includes(current_accum_block_id)) {
                  // Per block optimization
                  this.determine_rooms(yse[pei].param, reharsal_x_width_info);
                  current_accum_block_id = yse[pei].block_ids[0]; // First block ID is the reference block id

                  reharsal_x_width_info = [];
                }

                row_elements_list = yse[pei].cont; // Screening music contexts and determine grouping in body elements
                // For each measure in this row

                for (_ml = 0; _ml < row_elements_list.length; ++_ml) {
                  // measure object
                  _m2 = row_elements_list[_ml];
                  elements = this.classifyElements(_m2); // Too much call of calssify elements.
                  // Grouping body elements which share the same balken

                  geret = this.grouping_body_elemnts_enh(elements.body);
                  _m2.renderprop.body_grouping_info = geret;
                } // y-screening is done in stage 2 as well : TODO : Make it once
                // Do it in the dammy position y = 0;


                yprof = this.screening_y_areas(row_elements_list, 0, yse[pei].param, yse[pei].macros.STAFF, yse[pei].macros.REHARSAL_MARK_POSITION == "Inner"); // yprof.end.y means the row total height

                y_base_screening += yprof.end.y; // Screening x elements and determine the rendering policy for x-axis.

                x_width_info = this.screening_x_areas(x, this.memCanvas, yse[pei].macros, row_elements_list, yse[pei].pm, yse[pei].nm, yprof, yse[pei].param, dammy_music_context);
                reharsal_x_width_info.push([row_elements_list, x_width_info]);

                if (pei == yse.length - 1) {
                  // Per block optimization
                  this.determine_rooms(yse[pei].param, reharsal_x_width_info);
                }

              case 43:
                ++pei;
                _context.next = 31;
                break;

              case 46:
                y_base_screening += param.y_offset; // Here y_base_screening means the height of the total score if single page applied.
                // ----------------------
                // Stage 2 : Rendering
                // ----------------------

                canvas = this.canvas;

                if (!(canvas == null)) {
                  _context.next = 52;
                  break;
                }

                _context.next = 51;
                return this.canvas_provider();

              case 51:
                canvas = _context.sent;

              case 52:
                _graphic__WEBPACK_IMPORTED_MODULE_3__["SetupHiDPICanvas"](canvas, this.param.paper_width / this.param.zoom, this.param.paper_height > 0 ? this.param.paper_height / this.param.zoom : y_base_screening, this.param.pixel_ratio, this.param.zoom);
                score_height = (this.param.paper_height > 0 ? this.param.paper_height / this.param.zoom : y_base_screening) / param.nrow;
                if (param.background_color) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasRect"](canvas, 0, 0, this.param.paper_width / this.param.zoom, this.param.paper_height > 0 ? this.param.paper_height / this.param.zoom : y_base_screening, param.background_color);
                y_base = origin.y;

                if (show_header) {
                  // Title
                  ri = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x_offset + width / 2, y_title_offset, global_macros.TITLE, param.title_font_size, "ct", null, false, {
                    "bold": true
                  }); // Sub Title

                  if (global_macros.SUB_TITLE != "") _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x_offset + width / 2, y_subtitle_offset, global_macros.SUB_TITLE, param.subtitle_font_size, "ct", null, false, {
                    "bold": false
                  }); // Artist

                  _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x_offset + width, y_artist_offset, global_macros.ARTIST, param.artist_font_size, "rt", null, false, {
                    "bold": false
                  });
                  y_stacks.push({
                    type: "titles",
                    height: param.y_first_page_offset
                  });
                  y_base += param.y_first_page_offset;
                } else {
                  y_base += param.y_offset;
                }

                canvaslist = [canvas];
                _pei = 0;

              case 59:
                if (!(_pei < yse.length)) {
                  _context.next = 86;
                  break;
                }

                if (!(yse[_pei].type == "titles")) {
                  _context.next = 63;
                  break;
                }

                _context.next = 83;
                break;

              case 63:
                if (!(yse[_pei].type == "meas")) {
                  _context.next = 83;
                  break;
                }

                _row_elements_list3 = yse[_pei].cont;
                ylimit = this.canvas_provider != null ? score_height - yse[_pei].param.y_offset : null;
                r = this.render_measure_row_simplified(x_offset, canvas, yse[_pei].macros, _row_elements_list3, yse[_pei].pm, yse[_pei].nm, y_base, yse[_pei].param, true, yse[_pei].macros.REHARSAL_MARK_POSITION == "Inner", ylimit, music_context);

                if (r) {
                  _context.next = 82;
                  break;
                }

                if (!(y_base == origin.y + yse[_pei].param.y_offset)) {
                  _context.next = 72;
                  break;
                }

                throw "Paper height is too short to fit in single row";

              case 72:
                y_base = origin.y + yse[_pei].param.y_offset;

              case 73:
                _context.next = 75;
                return this.canvas_provider();

              case 75:
                canvas = _context.sent;
                canvaslist.push(canvas);
                _graphic__WEBPACK_IMPORTED_MODULE_3__["SetupHiDPICanvas"](canvas, yse[_pei].param.paper_width / this.param.zoom, yse[_pei].param.paper_height / this.param.zoom, this.param.pixel_ratio, this.param.zoom);
                if (param.background_color) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasRect"](canvas, 0, 0, this.param.paper_width / this.param.zoom, this.param.paper_height / this.param.zoom, param.background_color); // try again next page

                _pei = _pei - 1;
                _context.next = 83;
                break;

              case 82:
                y_base = r.y_base;

              case 83:
                ++_pei;
                _context.next = 59;
                break;

              case 86:
                if (show_footer) this.render_footer(canvaslist, global_macros.TITLE + "/" + global_macros.ARTIST, this.param.origin.y + score_height - this.param.y_footer_offset);
                return _context.abrupt("return", {
                  pages: canvaslist.length,
                  height: score_height
                });

              case 88:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render_impl(_x, _x2) {
        return _render_impl.apply(this, arguments);
      }

      return render_impl;
    }()
  }, {
    key: "screening_y_areas",
    value: function screening_y_areas(row_elements_list, y_base, param, staff, inner_reharsal_mark) {
      var ycomps = ["rm", "mu", "body", "rs", "ml", "irm", "end"];
      var yprof = {
        rm: {
          detected: false,
          height: param.rm_area_height,
          margin: [0, 0]
        },
        // Rhearsal mark if any
        mu: {
          detected: false,
          height: param.mu_area_height,
          margin: [0, param.below_mu_area_margin]
        },
        body: {
          detected: true,
          height: param.row_height,
          margin: [0, 0]
        },
        rs: {
          detected: false,
          height: param.rs_area_height,
          margin: [param.above_rs_area_margin, param.below_rs_area_margin]
        },
        ml: {
          detected: false,
          height: param.ml_row_height,
          margin: [param.above_ml_area_margin, 0]
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
      var lyric_rows = 0; //var draw_5line = false;

      if (staff == "ON") {
        yprof.rs.detected = true;
      } // Screening of y-axis areas


      var rg_mark_detected = false;

      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var m = row_elements_list[ml];
        if (m.renderprop && m.renderprop.rg_from_here && m.renderprop.rg_from_here.name != "") // Anonymous reharsal group is not rendered
          rg_mark_detected = true;

        for (var ei = 0; ei < m.elements.length; ++ei) {
          var e = m.elements[ei];

          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Coda"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Segno"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Comment"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["LoopIndicator"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["ToCoda"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["DalSegno"]) {
            yprof.mu.detected = true;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["MeasureBoundary"]) {
            yprof.ml.detected = yprof.ml.detected || e.times != null && (e.ntimes || e.times != 2);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Chord"]) {
            var bases = e.getChordStrBase(0, "flat"); //yprof.ml.detected = yprof.ml.detected || bases[1] != null;

            yprof.rs.detected |= e.note_group_list !== null;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Lyric"]) {
            yprof.ml.detected = true;
            lyric_rows = Math.max(e.lyric.split("/").length, lyric_rows);
          }
        }
      }

      if (staff == "OFF") {
        yprof.rs.detected = false;
      }

      if (rg_mark_detected) {
        if (inner_reharsal_mark) {
          yprof.mu.detected = true; // In MU area
        } else {
          yprof.rm.detected = true; // dedecated rehardsal mark region
        }
      } // Calculate yposition  for each area


      for (var i = 0; i < ycomps.length; ++i) {
        var name = ycomps[i];
        var prev = i > 0 ? ycomps[i - 1] : null; // Here y is the start of body element, not upper edge

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
    key: "screening_x_areas",
    value: function screening_x_areas(x, paper, macros, row_elements_list, prev_measure, next_measure, yprof, param, music_context) {
      var _this5 = this;

      var transpose = macros.TRANSPOSE;
      var half_type = macros.HALF_TYPE;
      var total_width = param.paper_width / param.zoom - 2 * param.x_offset;
      var dammy_rs_area_height = 24; // any value is ok
      // Determine the width of each measure

      var x_width_info = []; // for number of measures

      var _loop3 = function _loop3(ml) {
        // Reset music context
        music_context.pos_in_a_measure = 0; // reset
        // TODO : consider key infomration
        // TODO : consider tie
        // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)

        music_context.accidental_info = new Array(128).fill(0); // measure object

        var m = row_elements_list[ml];
        var meas_fixed_width = 0;
        meas_num_flexible_rooms = 0;
        elements = _this5.classifyElements(m);
        elements.header.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["MeasureBoundary"]) {
            var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
            var ne = pm ? pm.elements[pm.elements.length - 1] : null;

            var r = _this5.draw_boundary_simplified("begin", ne, e, ml == 0, //m.raw_new_line,
            paper, x, 0, dammy_rs_area_height, // any value is OK
            dammy_rs_area_height, param, false);

            meas_fixed_width += r.width;
            e.renderprop = {
              w: r.width
            };
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Time"]) {
            meas_fixed_width += 10;
            e.renderprop = {
              w: 10
            };
          }
        });
        meas_fixed_width += param.header_body_margin;
        rberet = _this5.render_body_elements(false, x, elements, param, music_context, yprof, paper, 0, 0
        /*meas_start_x*/
        , m, 1, transpose, half_type, 0, 0);
        meas_fixed_width += rberet.fixed_width;
        meas_num_flexible_rooms += rberet.num_flexible_rooms; // Draw footer

        elements.footer.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["MeasureBoundary"]) {
            var nm = ml == row_elements_list.length - 1 ? next_measure : row_elements_list[ml + 1];
            var ne = nm ? nm.elements[0] : null;

            var r = _this5.draw_boundary_simplified("end", e, ne, ml == row_elements_list.length - 1, //nm ? nm.raw_new_line : false,
            paper, x, 0, dammy_rs_area_height, dammy_rs_area_height, param, false);

            e.renderprop = {
              w: r.width
            };
            meas_fixed_width += r.width; // eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["DaCapo"]) {// eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["DalSegno"]) {// eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["ToCoda"]) {// eslint-disable-next-line no-empty
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Fine"]) {}
        });
        x_width_info.push({
          meas_fixed_width: meas_fixed_width,
          body_fixed_width: rberet.fixed_width,
          meas_num_flexible_rooms: meas_num_flexible_rooms
        });
      };

      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var meas_num_flexible_rooms;
        var elements;
        var rberet;

        _loop3(ml);
      }

      return x_width_info;
    }
  }, {
    key: "render_body_elements",
    value: function render_body_elements(draw, x, elements, param, music_context, yprof, paper, _5lines_intv, meas_start_x, m, x_global_scale, transpose, half_type, C7_width, y_body_or_rs_base, balken) {
      var _this6 = this;

      var fixed_width = 0;
      var num_flexible_rooms = 0;
      var draw_scale = 1;

      if (draw) {
        console.log("Scaling : ");
        console.log(m.renderprop.measure_width);
        console.log(m.renderprop.meas_fixed_width);
      }

      if (draw && param.scale_if_overlap && m.renderprop.room_per_elem < 0) {
        var body_width = m.renderprop.body_fixed_width + m.renderprop.room_per_elem * m.renderprop.meas_num_flexible_rooms;
        draw_scale = body_width / m.renderprop.body_fixed_width;
        console.log("draw_scale = " + draw_scale); // and then for this case room_per_elem is 0 and scale fixed elemetns while keeping
        // total width.

        paper.getContext("2d").scale(draw_scale, 1);
      }

      if (elements.body.length == 0) {
        if (draw && draw_scale < 1) {
          x += 1 * param.base_font_size * draw_scale + 0;
        } else if (draw) {
          x += 1 * param.base_font_size + m.renderprop.room_per_elem;
        } else {
          fixed_width += 1 * param.base_font_size;
          num_flexible_rooms++;
        }
      }

      var body_grouping_info = m.renderprop.body_grouping_info;
      body_grouping_info.groupedBodyElems.forEach(function (element_group, gbei) {
        // Draw Rythm Slashes, first
        if (yprof.rs.detected && body_grouping_info.all_has_length) {
          var e0 = element_group.elems[0];
          var cr = null;

          if (e0 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Chord"]) {
            cr = _this6.render_chord_simplified(draw, e0, transpose, half_type, paper, x / draw_scale, yprof.body.y, param, C7_width);

            if (draw && e0.exceptinal_comment !== null) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x / draw_scale, yprof.mu.y + yprof.mu.height, e0.exceptinal_comment.comment, param.base_font_size / 2, "lb");
            }

            if (draw && e0.lyric !== null) {
              var llist = e0.lyric.lyric.split("/");

              for (var li = 0; li < llist.length; ++li) {
                _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x / draw_scale, yprof.ml.y + li * param.ml_row_height, llist[li], param.base_font_size / 3, "lt");
              }
            }
          } else {
            // Rest or Simile
            // Rest is drawn in render_rs_area function in RS area
            cr = {
              width: 0
            };
          }

          if (draw) {
            var room_for_rs_per_elem = 0;
            var element_group_width = 0;

            if (element_group.renderprop.based_on_rs_elem) {
              // In case RS area elements has wider fixed width(in total) than that of first element
              room_for_rs_per_elem = m.renderprop.room_per_elem;
              element_group_width = element_group.renderprop.w + m.renderprop.room_per_elem * element_group.elems.length;
            } else {
              // In case the first element has wider fixed width than RS area elements
              var room_for_rs = element_group.renderprop.w + m.renderprop.room_per_elem - element_group.renderprop.rs_area_width;
              room_for_rs_per_elem = room_for_rs / element_group.elems.length;
              element_group_width = element_group.renderprop.w + m.renderprop.room_per_elem;
            }

            var g = _this6.render_rs_area(x / draw_scale, draw_scale, element_group.elems, paper, yprof.rs.y, yprof.rs.height, meas_start_x, // NOTE : meas_start_x sould be irrespective of draw_scale.
            draw, 0, 1.0, x_global_scale, music_context, m, param, draw_scale < 1 ? 0 : room_for_rs_per_elem, balken, gbei == body_grouping_info.groupedBodyElems.length - 1);

            var rs_area_width = (g.x - x / draw_scale) * draw_scale; // validation

            if (Math.abs(rs_area_width - element_group_width) > 0.0001) {
              console.log("Whould be the same : " + [rs_area_width, element_group_width]); //throw "Something wrong with RS area code drawing";
            }

            if (draw_scale < 1) {
              x += element_group.renderprop.w * draw_scale + 0;
            } else {
              x += element_group_width;
            }
          } else {
            var rs_area_bounding_box = new _common_common__WEBPACK_IMPORTED_MODULE_2__["BoundingBox"](); // Only try to esimate using non-flag-balken drawer

            element_group.elems.forEach(function (e) {
              var balken_element = _this6.generate_balken_element(e, x, yprof.rs.height, music_context);

              var r = _this6.draw_rs_area_without_flag_balken(draw, paper, param, e, balken_element, x, yprof.rs.y, yprof.rs.height);

              e.renderprop.balken_element = balken_element;
              rs_area_bounding_box.add_rect(r.bounding_box);
              x += r.bounding_box.w;
            });
            var _rs_area_width = rs_area_bounding_box.get().w;
            element_group.renderprop.w = Math.max(_rs_area_width, cr.width);
            element_group.renderprop.rs_area_width = _rs_area_width;
            element_group.renderprop.based_on_rs_elem = _rs_area_width > cr.width;
            fixed_width += element_group.renderprop.w;
            num_flexible_rooms += element_group.renderprop.based_on_rs_elem ? element_group.elems.length : 1;
          }
        } else {
          element_group.elems.forEach(function (e) {
            if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Chord"]) {
              var _cr = _this6.render_chord_simplified(draw, e, transpose, half_type, paper, x / draw_scale, yprof.body.y, param, C7_width);

              if (draw && e.exceptinal_comment !== null) {
                _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x / draw_scale, yprof.mu.y + yprof.mu.height, e.exceptinal_comment.comment, param.base_font_size / 2, "lb");
              }

              if (draw && e.lyric !== null) {
                var llist = e.lyric.lyric.split("/");

                for (var li = 0; li < llist.length; ++li) {
                  _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x / draw_scale, yprof.ml.y + li * param.ml_row_height, llist[li], param.base_font_size / 3, "lt");
                }
              }

              if (draw && draw_scale < 1) {
                x += e.renderprop.w * draw_scale + 0; // In case scaling apply no room apply.
              } else if (draw) x += e.renderprop.w + m.renderprop.room_per_elem;else {
                e.renderprop.w = _cr.width;
                fixed_width += e.renderprop.w;
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Rest"]) {
              var _cr2 = _this6.render_rest_plain(e, paper, draw, x / draw_scale, y_body_or_rs_base, C7_width, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param);

              if (draw && draw_scale < 1) {
                x += e.renderprop.w * draw_scale + 0; // In case scaling apply no room apply.
              } else if (draw) x += e.renderprop.w + m.renderprop.room_per_elem;else {
                e.renderprop.w = _cr2.bounding_box.w;
                fixed_width += e.renderprop.w;
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Simile"]) {
              var _cr3 = _this6.render_simile_mark_plain(draw, paper, x / draw_scale, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, e.numslash, false, "l");

              if (draw && draw_scale < 1) {
                x += e.renderprop.w * draw_scale + 0; // In case scaling apply no room apply.
              } else if (draw) x += e.renderprop.w + m.renderprop.room_per_elem;else {
                e.renderprop.w = _cr3.width;
                fixed_width += e.renderprop.w;
                num_flexible_rooms++;
              }
            } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Space"]) {
              if (draw && draw_scale < 1) {
                x += e.renderprop.w * draw_scale + 0; // In case scaling apply no room apply.
              } else if (draw) x += e.renderprop.w + m.renderprop.room_per_elem;else {
                var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, 0, 0, "M", param.base_font_size, "lt", 0.5 * param.base_font_size, true, null); // width parameter needs to be aligned with chord rendering

                e.renderprop.w = e.length * r.width;
                fixed_width += e.renderprop.w;
                num_flexible_rooms++;
              }
            }
          });
        }
      });

      if (draw && draw_scale < 1) {
        paper.getContext("2d").scale(1 / draw_scale, 1);
      }

      return {
        x: x,
        fixed_width: fixed_width,
        num_flexible_rooms: num_flexible_rooms
      };
    }
  }, {
    key: "grouping_body_elemnts_enh",
    value: function grouping_body_elemnts_enh(body_elements) {
      // First, guess chord duration here.
      // In current version, each chord in the measure is assumed to have the same duration.
      // TODO : Improve based on number of spaces or duration indication mark.
      var all_has_length = true;
      var chord_name_str = null;
      var sum_length = 0;
      var rest_or_long_rests_detected = false;
      body_elements.forEach(function (e) {
        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Space"]) return;
        all_has_length &= e.note_group_list !== null;
        if (all_has_length) sum_length += e.note_group_list[0].lengthIndicator.length;
        rest_or_long_rests_detected |= e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Rest"];
      });
      var tmpl = {
        elems: [],
        groupedChordsLen: 0,
        renderprop: {}
      };
      var groupedBodyElems = [];
      if (body_elements.length > 0) groupedBodyElems.push(_common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](tmpl));
      var gbei = 0; // Grouping the chord and notes among which the x-axis rooms are shared
      // grouping is just done whether same chord is sahred.
      // If this measure starts with Rest/Simle, then following Rests and chord without chord 
      // name are regarded as in the same group.
      // IF this measure starts with Chord with no name, then folowing Rests/Similre and Chords 
      // with no names are grouped in the same group.

      body_elements.forEach(function (e, ei) {
        var this_chord_str = "";

        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Chord"]) {
          this_chord_str = e.chord_name_str;
        } else {
          this_chord_str = ""; // Rests, Simile(in body) and Space are regarded as empty chord
        }

        if (chord_name_str === null) chord_name_str = this_chord_str;

        if (groupedBodyElems[gbei].elems.length == 0) {// Keep in the same group
        } else if (all_has_length && (this_chord_str == chord_name_str || this_chord_str == "" && chord_name_str != "")) {// Keep in the same group
        } else {
          // flush
          groupedBodyElems.push(_common_common__WEBPACK_IMPORTED_MODULE_2__["deepcopy"](tmpl));
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
    key: "render_measure_row_simplified",
    value: function render_measure_row_simplified(x, paper, macros, row_elements_list, prev_measure, next_measure, y_base, param, draw, inner_reharsal_mark, ylimit, music_context) {
      var _this7 = this;

      var x_global_scale = macros.X_GLOBAL_SCALE;
      var transpose = macros.TRANSPOSE;
      var half_type = macros.HALF_TYPE;
      var staff = macros.STAFF;
      /* Reference reserved width for empty measures or chord symbol without base names*/

      var C7_width = 20;

      if (staff == "ON") {} // rs_area_detected = true; // Fix me : Not supported in simplified renderer
      // interval of 5 lines


      var _5lines_intv = param.rs_area_height / (5 - 1);

      var yprof = this.screening_y_areas(row_elements_list, y_base, param, staff, inner_reharsal_mark);
      var y_next_base = yprof.end.y;
      var y_body_or_rs_base = yprof.rs.detected ? yprof.rs.y : yprof.body.y;
      var repeat_mark_y_base = yprof.rs.detected ? yprof.rs.y - param.repeat_mark_y_margin : yprof.mu.y + yprof.mu.height; // if ylimit is specified, and drawing region surpass that limit, do not render

      if (ylimit !== null && y_next_base > ylimit) {
        return null;
      }

      if (row_elements_list[0].renderprop.left_margin != null) {
        x += row_elements_list[0].renderprop.left_margin;
      } // Reharsal mark if any

      /*if(first_block_first_row && !inner_reharsal_mark){
          let r = graphic.CanvasTextWithBox(
              paper,
              param.x_offset,
              yprof.rm.y,
              reharsal_group.name,
              param.reharsal_mark_font_size,
              2, 
              graphic.GetCharProfile(param.reharsal_mark_font_size).height
          );
      }*/
      // For each measure in this row


      var _loop4 = function _loop4(ml) {
        // measure object
        var m = row_elements_list[ml];

        var elements = _this7.classifyElements(m);

        mh_offset = 0;
        meas_base_x = x; // Reset music context

        music_context.pos_in_a_measure = 0; // reset
        // TODO : consider key infomration
        // TODO : consider tie
        // C3 -> 0x3C as 0 C-2 as index 0, G8 as 127(0x7F)

        music_context.accidental_info = new Array(128).fill(0); // balken context inside a measure

        var balken = {
          groups: []
        }; // Reharsal group mark, only rendred when it has name

        if (m.renderprop && m.renderprop.rg_from_here && m.renderprop.rg_from_here.name != "") {
          var reharsal_group = m.renderprop.rg_from_here;
          var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasTextWithBox"](paper, meas_base_x, inner_reharsal_mark ? yprof.mu.y : yprof.rm.y, reharsal_group.name, param.reharsal_mark_font_size, 2, _graphic__WEBPACK_IMPORTED_MODULE_3__["GetCharProfile"](param.reharsal_mark_font_size).height);
          if (inner_reharsal_mark) mh_offset += r.width + 2;
        }

        for (ei = 0; ei < elements.header.length; ++ei) {
          var e = elements.header[ei];

          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Coda"]) {
            var _r = _this7.draw_coda_plain(paper, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, "lb", e, param.base_font_size);

            mh_offset += _r.width;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Segno"]) {
            var _r2 = _this7.draw_segno_plain(paper, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, e, param.base_font_size);

            mh_offset += _r2.width;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Comment"]) {
            // If this comment is associated with a chord with exceptional comment, not rendered here.
            if (!e.chorddep) {
              var _r3 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, meas_base_x + mh_offset, yprof.mu.y + yprof.mu.height, e.comment, param.base_font_size / 2, "lb");

              mh_offset += _r3.width;
            }
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Lyric"]) {
            if (draw) {
              // If this comment is associated with a chord with exceptional comment, not rendered here.
              if (!e.chorddep) {// Currently lyrics are only rendered for chord dependency case
              }
            }
          }
        } // Header loop


        var meas_start_x = x;
        var meas_start_x_actual_boundary = x; // Draw header

        header_rs_area_width = 0;
        header_body_area_width = 0; // Clef, Key, Begin Boundary, Time(1st one) are included in this area

        elements.header.forEach(function (e) {
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["MeasureBoundary"]) {
            var pm = ml == 0 ? prev_measure : row_elements_list[ml - 1];
            var ne = pm ? pm.elements[pm.elements.length - 1] : null;

            var _r4 = _this7.draw_boundary_simplified("begin", ne, e, ml == 0, //m.raw_new_line,
            paper, x, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param, true);

            m.renderprop.y = y_body_or_rs_base;
            m.renderprop.sx = x;
            m.renderprop.paper = paper;
            x += e.renderprop.w;
            meas_start_x_actual_boundary = _r4.actual_boundary;
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Time"]) {
            var chord_str_height = _graphic__WEBPACK_IMPORTED_MODULE_3__["GetCharProfile"](param.base_font_size).height;
            var row_height = yprof.rs.detected ? param.rs_area_height : param.row_height;
            var cont_height = yprof.rs.detected ? param.rs_area_height : chord_str_height; //var lineThickNessShift = 0.064; // Line tickness
            //let fontSize = graphic.getFontSizeFromHeight(cont_height + lineThickNessShift*cont_height/4, 
            //    "Bravura Text", String.fromCodePoint(0xE014)); // 5 line is baseline
            //console.log("fontSize="+fontSize);

            /*graphic.CanvasText(
                paper,
                x + e.renderprop.w / 2,
                y_body_or_rs_base + row_height/2  - cont_height/2,
                //e.numer,
                String.fromCodePoint(0xE014),
                fontSize,
                "lt",
                e.renderprop.w,
                false,
                {"fontfamily":"Bravura Text", "raw":true}
            );*/

            /*graphic.CanvasText(
                paper,
                x + e.renderprop.w / 2,
                y_body_or_rs_base + row_height/2 - cont_height/2 - cont_height/4*3,
                //e.numer,
                String.fromCodePoint(0xE080+parseInt(e.numer)),
                fontSize,
                "lt",
                e.renderprop.w,
                false,
                {"fontfamily":"Bravura Text", "raw":true}
            );*/

            _this7.buravura.put(paper, 0xE080 + parseInt(e.numer), cont_height / 4, x, y_body_or_rs_base + row_height / 2 - cont_height / 2 - cont_height / 4 * 3);
            /*graphic.CanvasText(
                paper,
                x + e.renderprop.w / 2,
                y_body_or_rs_base + row_height/2 - cont_height/2 - cont_height/4*1,
                //e.denom,
                String.fromCodePoint(0xE080+parseInt(e.denom)),
                fontSize,
                "rt",
                e.renderprop.w,
                false,
                {"fontfamily":"Bravura Text", "raw":true}
            );*/


            _this7.buravura.put(paper, 0xE080 + parseInt(e.denom), cont_height / 4, x, y_body_or_rs_base + row_height / 2 - cont_height / 2 - cont_height / 4 * 1);
            /*var ly = yprof.body.y + row_height / 2;
            if (draw && !yprof.rs.detected)
                graphic.CanvasLine(
                    paper,
                    x,
                    ly,
                    x + e.renderprop.w,
                    ly
                );*/


            x += e.renderprop.w;
          }
        });
        x += param.header_body_margin; // Draw body

        var rberet = _this7.render_body_elements(true, x, elements, param, music_context, yprof, paper, _5lines_intv, meas_start_x, m, x_global_scale, transpose, half_type, C7_width, y_body_or_rs_base, balken);

        x = rberet.x; // Draw footer

        footer_base = x;

        for (var _ei = 0; _ei < elements.footer.length; ++_ei) {
          var _e2 = elements.footer[_ei];

          if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["MeasureBoundary"]) {
            nm = ml == row_elements_list.length - 1 ? next_measure : row_elements_list[ml + 1];
            ne = nm ? nm.elements[0] : null;

            var _r5 = _this7.draw_boundary_simplified("end", _e2, ne, ml == row_elements_list.length - 1, //nm ? nm.raw_new_line : false,
            paper, x, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, param, true);

            m.renderprop.ex = x;
            x += _e2.renderprop.w;
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["DaCapo"]) {
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb"); //if (yprof.rs.detected) x += 15 * 4;
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["DalSegno"]) {
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb");
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["ToCoda"]) {
            if (yprof.rs.detected) {
              /*
              var text = raphaelText(
                  paper,
                  x,
                  y_body_or_rs_base,
                  "To",
                  param.base_font_size / 2,
                  "lb"
              ).attr(param.repeat_mark_font);
              x += text.getBBox().width + 5;
              rs_area_svg_groups.push(text);
              var coda = draw_coda(
                  paper,
                  x,
                  y_body_or_rs_base,
                  "lb",
                  e
              );
              x += coda.getBBox().width;
              rs_area_svg_groups.push(coda);
              */
            } else {
              var _r6 = _this7.draw_coda_plain(paper, x, yprof.mu.y + yprof.mu.height, "rb", _e2, param.base_font_size); //paper.getContext("2d").drawImage(graphic.G_imgmap["assets/img/coda.svg"], x - 15, y_body_or_rs_base - 15, 15, 15);


              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x - _r6.width, yprof.mu.y + yprof.mu.height, "To", param.base_font_size / 2, "rb");
            }
          } else if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Fine"]) {
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x, repeat_mark_y_base, _e2.toString(), param.base_font_size / 2, "rb");
            if (yprof.rs.detected) x += 15 * 4;
          } else {
            throw "Unkown instance of footer elements";
          }
        }

        meas_end_x = x; // Draw Upper and Lower Signs

        for (var _ei2 = 0; _ei2 < elements.measure_wide.length; ++_ei2) {
          var _e3 = elements.measure_wide[_ei2];

          if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["LoopIndicator"]) {
            oy = 10;
            ly = yprof.body.y - 2 - oy;
            sx = meas_start_x_actual_boundary;
            fx = meas_start_x + (meas_end_x - meas_start_x) * 0.7;
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, sx, ly, sx, ly + oy);
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, sx, ly, fx, ly);
            s = _e3.indicators.join(",");
            _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, sx + 2, ly, s, param.base_font_size / 3, "lt");
          } else if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["LongRestIndicator"]) {
            var height = yprof.rs.detected ? param.rs_area_height : param.row_height;

            var _sx = meas_start_x + m.header_width - param.header_body_margin; // More beautiful for long rest if header body margin is omitted


            var _fx = meas_end_x - m.footer_width;

            rh = height;
            r_lrmargin = 0.05;
            min_lrmargin = 5;
            max_lrmargin = 10;
            yshift = 0; // height / 6;

            vlmargin = 0.2;
            var lrmargin = Math.max(min_lrmargin, Math.min(max_lrmargin, (_sx + _fx) * r_lrmargin));
            lx = _sx + lrmargin;
            rx = _fx - lrmargin;
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, lx, y_body_or_rs_base + height / 2 + yshift, rx, y_body_or_rs_base + height / 2 + yshift, {
              width: height / 5
            });
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, lx, y_body_or_rs_base + rh * vlmargin + yshift, lx, y_body_or_rs_base + rh - rh * vlmargin + yshift, {
              width: "1"
            });
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, rx, y_body_or_rs_base + rh * vlmargin + yshift, rx, y_body_or_rs_base + rh - rh * vlmargin + yshift, {
              width: "1"
            });

            if (draw) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, (_sx + _fx) / 2, y_body_or_rs_base, _e3.longrestlen, param.base_font_size / 2, "ct", undefined, !draw);
            } //rest_or_long_rests_detected |= true;

          } else if (_e3 instanceof _common_common__WEBPACK_IMPORTED_MODULE_2__["Simile"]) {
            // Simile mark in measure wide element if there is no other body elements in this measure
            var _sx2 = meas_start_x + m.header_width - param.header_body_margin; // More beautiful for long rest if header body margin is omitted


            var _fx2 = meas_end_x - m.footer_width;

            _this7.render_simile_mark_plain(draw, paper, (_sx2 + _fx2) / 2, y_body_or_rs_base, yprof.rs.detected ? param.rs_area_height : param.row_height, yprof.rs.detected ? param.rs_area_height : param.base_body_height, _e3.numslash, false, "c");
          } else {
            throw "Unkown measure wide instance detected";
          }
        }

        m.renderprop.meas_end_x = meas_end_x;
        m.renderprop.meas_start_x = meas_start_x;
      };

      for (var ml = 0; ml < row_elements_list.length; ++ml) {
        var mh_offset;
        var meas_base_x;
        var ei;
        var header_rs_area_width;
        var header_body_area_width;
        var footer_base;
        var nm;
        var ne;
        var meas_end_x;
        var oy;
        var ly;
        var sx;
        var fx;
        var s;
        var rh;
        var r_lrmargin;
        var min_lrmargin;
        var max_lrmargin;
        var yshift;
        var vlmargin;
        var lx;
        var rx;

        _loop4(ml);
      } // measure loop
      // 0. Draw 5 lines


      if (draw && yprof.rs.detected) {
        var start_x = row_elements_list[row_elements_list.length - 1].renderprop.meas_end_x;
        var end_x = row_elements_list[0].renderprop.meas_start_x;

        for (var i = 0; i < 5; ++i) {
          var intv = _5lines_intv;
          var dy = 0;
          _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, start_x, yprof.rs.y + i * intv + dy, end_x, yprof.rs.y + i * intv + dy, {
            width: 1
          });
        }
      } // return {y_base:y_base + param.row_height + param.row_margin};


      return {
        y_base: y_next_base
      };
    }
  }, {
    key: "draw_segno_plain",
    value: function draw_segno_plain(paper, x, y, segno, B) {
      var lx = x;
      var img_width = B / 3;
      var img_height = B / 2;
      var text_size = B / 2;
      /*paper
          .getContext("2d")
          .drawImage(graphic.G_imgmap["assets/img/segno.svg"], lx, y, B / 3, B / 2);
      */

      _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/segno.svg"], lx, y, img_width, img_height, "lb", true);
      lx += img_width;

      if (segno.number !== null) {
        var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, lx, y, segno.number, text_size, "lb");
        lx += r.width;
      }

      if (segno.opt !== null) {
        var _r7 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, lx, y, "(" + segno.opt + ")", text_size, "lb");

        lx += _r7.width;
      }

      return {
        width: lx - x
      };
    }
  }, {
    key: "draw_coda_plain",
    value: function draw_coda_plain(paper, x, y, align, coda, B) {
      var width = 0;
      var ys = 0;
      var img_width = B / 2;
      var img_height = B / 2;
      var text_size = B / 2;

      if (align[1] == "b") {
        ys = -img_height;
      } else if (align[1] == "m") {
        ys = -img_height / 2;
      } // var img_y = y; // + ys;


      if (align[0] == "r") {
        if (coda.number !== null) {
          var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x, y, //img_y + img_height,
          coda.number, text_size, "rb");
          width += r.width;
        }
        /*paper
            .getContext("2d")
            .drawImage(
                graphic.G_imgmap["assets/img/coda.svg"],
                x - width - B / 2,
                img_y,
                B / 2,
                B / 2
            );*/


        _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/coda.svg"], x - width, y, img_width, img_height, "rb", true);
        width += img_width;
      } else if (align[0] == "l") {
        /*paper
            .getContext("2d")
            .drawImage(
                graphic.G_imgmap["assets/img/coda.svg"],
                x,
                img_y,
                img_width,
                img_height
            );*/
        _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/coda.svg"], x, y, img_width, img_height, "lb", true);
        width += img_width;

        if (coda.number !== null) {
          var _r8 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x + width, y, //img_y + img_height,
          coda.number, text_size, "lb");

          width += _r8.width;
        }
      } else {
        throw "NOT SUPPORTED";
      }

      return {
        width: width
      };
    }
  }, {
    key: "render_chord_as_string_plain",
    value: function render_chord_as_string_plain(chord, paper, x, y_body_base, param, draw) {
      var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](paper, x, y_body_base + param.row_height / 2, chord.chord_str, param.base_font_size * 0.6, "lm", undefined, !draw);
      return {
        width: r.width
      };
    }
  }, {
    key: "render_rest_plain",
    value: function render_rest_plain(e, paper, draw, x, y_body_or_rs_base, C7_width, row_height, base_body_height, param) {
      var _5i = base_body_height / 4;

      var yoffsets = {
        1: -_5i,
        2: -_5i / 6 * 4,
        4: -_5i * 1.5,
        8: -_5i,
        16: 0,
        32: 0,
        64: _5i
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
      var ctx = paper.getContext("2d"); // eslint-disable-next-line no-constant-condition

      if (false) { var i; }

      if (draw) {
        var img = _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/rest" + (rd <= 4 ? rd : 8) + ".svg"];
        var s = img.height / heights[rd];

        if (rd <= 4) {
          ctx.drawImage(img, x, y_body_or_rs_base + row_height / 2 + oy, img.width / s, img.height / s);
        } else {
          var nKasane = _common_common__WEBPACK_IMPORTED_MODULE_2__["myLog2"](rd) - 2;
          var rdx = 2;
          var rdy = -_5i;

          for (var k = 0; k < nKasane; ++k) {
            ctx.drawImage(img, x + k * rdx, y_body_or_rs_base + row_height / 2 + k * rdy + oy, img.width / s, img.height / s);
          }
        } // dots


        for (var di = 0; di < numdot; ++di) {
          _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](paper, x + dot_xoffsets[rd] + di * 5, y_body_or_rs_base + row_height / 2 - _5i / 2, 1);
        }
      }

      return {
        bounding_box: {
          x: x,
          y: y_body_or_rs_base,
          w: 10,
          h: row_height
        }
      }; // TODO : Impelment correctly
    }
  }, {
    key: "render_simile_mark_plain",
    value: function render_simile_mark_plain(draw, paper, x, y_body_base, row_height, base_body_height, // In RS area, row_height == base_body_height is asuumed
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
      if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](paper, x + cm, y_body_base + row_height / 2 - _5lines_intv * 0.5, cr);

      for (var r = 0; r < numslash; ++r) {
        var y = y_body_base + row_height / 2;
        x += (h + i) * r;

        if (draw) {
          var points = [[x, y + _5lines_intv * 1], [x + h, y + _5lines_intv * 1], [x + h + H, y - _5lines_intv * 1], [x + H, y - _5lines_intv * 1]];
          _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasPolygon"](paper, points, true, true);
        }
      }

      if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](paper, x + h + H - cm, y_body_base + row_height / 2 + _5lines_intv * 0.5, cr);

      if (put_boundary) {
        if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](paper, x0 + width / 2, y_body_base, x0 + width / 2, y_body_base + row_height, {
          width: 1
        });
      }

      return {
        width: width
      };
    }
  }, {
    key: "render_chord_simplified",
    value: function render_chord_simplified(draw, chord, transpose, half_type, canvas, x, y_body_base, param, C7_width) {
      if (!chord.is_valid_chord) {
        return this.render_chord_as_string_plain(chord, canvas, x, y_body_base, param, draw);
      }

      var ce = this.chord_elem_classify(chord, transpose, half_type);
      var bases = ce.bases;
      var elems = ce.mid_elem_objs;
      var y = y_body_base;
      var B = param.base_font_size; // if bases are null, elems are null, then it is just a duration information

      if (bases[0] == null && bases[1] == null && elems === undefined) {
        return {
          width: B
        };
      }

      var _3rdelem = ce._3rdelem;
      var _5thelem = ce._5thelem;
      var _6791113suselem = ce._6791113suselem;
      var _alteredelem = ce._alteredelem; // #11, #9, b9, #13, b13,

      var upper_width = 0;
      var lower_width = 0;
      var tensions_width = 0;
      var onbass_width = 0;
      var rootCharHeight = _graphic__WEBPACK_IMPORTED_MODULE_3__["GetCharProfile"](B).height; // Position parameters

      var upper_tension_y_offset = 0; // base line is middle of main chord character

      var lower_onbass_y_offset = rootCharHeight / 16; // base line is bottom of main chord character. For on bass this applies for normal onbass style. For on bass style of "below", offset 0 is applied.

      var root = bases[0];
      var onbass = bases[1];
      var chord_offset_on_bass = 0;
      if (onbass != null && param.on_bass_style == "below") chord_offset_on_bass = param.on_bass_below_y_offset;
      var coeff1 = 0.5;

      if (root) {
        _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x, y + param.row_height / 2 + chord_offset_on_bass, root[0], B, "lm", B * coeff1, !draw);
        upper_width = B * coeff1;
        lower_width = B * coeff1;

        if (root.length == 2) {
          var acc_height = rootCharHeight / 2.0 + rootCharHeight / 8.0;
          var acc_width = B * 0.25;

          if (root[1] == "b") {
            if (draw) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/flat.svg"], x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, acc_width, acc_height, "lb");
            }

            upper_width += acc_width;
          } else {
            if (draw) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/sharp.svg"], x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, acc_width, acc_height, "lb");
            }

            upper_width += acc_width;
          }
        }
      } else {} // No root but only bass
      // Half diminish is firstly rendered


      if (ce._halfdim_exists) {
        // Remove m7 and -5
        _3rdelem = _3rdelem.filter(function (e) {
          return e.type != "m";
        });
        _6791113suselem = _6791113suselem.filter(function (e) {
          return !(e.type == "dig" && e.param == "7");
        });
        _5thelem = _5thelem.filter(function (e) {
          return e.type != "b";
        });
        var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x00d8), B * 0.5, "lb", B * 0.5, !draw);
        lower_width += r.width;
      }

      _3rdelem.forEach(function (e) {
        if (e.type == "M" && _6791113suselem.length > 0) {
          var _r9 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x0394), B * 0.5, "lb", B * 0.5, !draw);

          lower_width += _r9.width;
        } else if (e.type == "m") {
          var _r10 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x2013), B * 0.5, "lb", B * 0.5, !draw);

          lower_width += _r10.width;
        } else {// Unkown type
        }
      });

      _6791113suselem.forEach(function (e) {
        if (e.type == "dig") {
          var _r11 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, e.param, B * 0.5, "lb", B * 0.5, !draw);

          lower_width += _r11.width;
        } else if (e.type == "sus" || e.type == "add") {
          var _r12 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, e.type + (e.param ? e.param : ""), B * 0.5, "lb", B * 0.8, !draw);

          lower_width += _r12.width;
        } else if (e.type == "dim") {
          var _r13 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x004f) + (e.param ? e.param : ""), B * 0.5, "lb", B * 0.5, !draw);

          lower_width += _r13.width;
        } else if (e.type == "M") {
          var _r14 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + lower_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + lower_onbass_y_offset, String.fromCharCode(0x0394) + (e.param ? e.param : ""), B * 0.5, "lb", B * 0.5, !draw);

          lower_width += _r14.width;
        }
      });

      _5thelem.forEach(function (e) {
        if (e.type == "b") {
          var _r15 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "-5", B * 0.5, "lb", B * 0.5, !draw);

          upper_width += _r15.width;
        } else if (e.type == "#") {
          var _r16 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + upper_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "+5", B * 0.5, "lb", B * 0.5, !draw);

          upper_width += _r16.width;
        }
      });

      if (_alteredelem.length > 0) {
        var tensions_pos = Math.max(upper_width, lower_width); // Assume onbass below does not exceed lower_width

        var _r17 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + tensions_pos, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, "(", B * 0.5, "lb", B * 0.5, !draw);

        tensions_width += _r17.width;
        var h = _graphic__WEBPACK_IMPORTED_MODULE_3__["GetCharProfile"](B * 0.5).height;

        _alteredelem.forEach(function (e, index) {
          if (e.type == "b") {
            if (draw) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/flat.svg"], x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, B * 0.2, h, "lb");
            }

            tensions_width += B * 0.2;
          } else if (e.type == "#") {
            if (draw) {
              _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/sharp.svg"], x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, B * 0.2, h, "lb");
            }

            tensions_width += B * 0.2;
          }

          var r = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, e.param, B * 0.5, "lb", B * 0.5, !draw);
          tensions_width += r.width;

          if (index != _alteredelem.length - 1) {
            var _r18 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, ", ", B * 0.5, "lb", B * 0.5, !draw);

            tensions_width += _r18.width;
          }
        });

        _r17 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + tensions_pos + tensions_width, y + param.row_height / 2 + chord_offset_on_bass + upper_tension_y_offset, ")", B * 0.5, "lb", B * 0.5, !draw);
        tensions_width += _r17.width;
      }

      if (onbass != null) {
        var on_bass_below_a_margin = param.on_bass_style == "below" ? 1 : 0;
        var onbass_pos = param.on_bass_style == "below" ? x : x + Math.max(upper_width, lower_width) + tensions_width;
        var on_bass_y_offset = param.on_bass_style == "below" ? 0 : lower_onbass_y_offset;

        var _r19 = _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, onbass_pos, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, "/" + onbass[0], B * 0.45, param.on_bass_style == "below" ? "lt" : "lb", B * 0.5, !draw);

        onbass_width += _r19.width;

        if (onbass.length == 2) {
          if (onbass[1] == "b") {
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/flat.svg"], onbass_pos + onbass_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, B * 0.2, _r19.height, param.on_bass_style == "below" ? "lt" : "lb", true);
            onbass_width += B * 0.2;
          } else {
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasImage"](canvas, _graphic__WEBPACK_IMPORTED_MODULE_3__["G_imgmap"]["assets/img/sharp.svg"], onbass_pos + onbass_width, y + param.row_height / 2 + rootCharHeight / 2 + chord_offset_on_bass + on_bass_below_a_margin + on_bass_y_offset, B * 0.2, _r19.height, param.on_bass_style == "below" ? "lt" : "lb", true);
            onbass_width += B * 0.2;
          }
        }
      }

      var width = 0;
      if (param.on_bass_style == "below") width = Math.max(upper_width, lower_width, onbass_width) + tensions_width;else {
        width = Math.max(upper_width, lower_width) + tensions_width + onbass_width;
      } // Quantize with 0.25*B unit : Not so beneficial ?
      // width = Math.ceil(width / (B/4.0)) * (B/4.0);

      return {
        width: width
      };
    }
    /**
     * Draw boundary
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
    key: "draw_boundary_simplified",
    value: function draw_boundary_simplified(side, e0, e1, is_row_edge, canvas, x, y_body_base, row_height, base_body_height, param, draw) {
      var draw_type = null; // "s, d, lb, le, lb, f"

      var w = 0; // width of boundary

      var actual_boundary = 0; // Actual boundary when having more than 1 pixel width. 

      if (side == "end" && !is_row_edge) {
        // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
        return {
          width: 0,
          actual_boundary: 0
        };
      }
      /*
          var thisIsLastMeasureInLine = e1 === null || is_row_edge;
           // If this is not the last measure in this line, then does not draw the boundary. Draw in the "begin" side of next measure.
          if (!thisIsLastMeasureInLine) return { width: 0, actual_boundary : 0 };
      }*/


      if (is_row_edge === null || is_row_edge == false) {
        // 1. 2 boundaries in  differnt rows in the code will be rendered as an adjacent measure, or
        // 2. The adjacent measures in the codes are measured as is
        draw_type = this.boundary_type_without_line_break(e0, e1);
      } else {
        // 1. The adjacnet measures in the codes are measured in differnt rows
        // 2. 2 boundraies in differnt rows in the code will be rendered as is (i.e. for differnt rows)
        draw_type = this.boundary_type_with_line_break(e0, e1, side);
      } //console.log([draw_type, side]);


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
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + li * barintv, y_body_base, x + li * barintv, y_body_base + row_height);
          }

          actual_boundary = x + (nline - 1) * barintv;
          break;

        case "b":
          // begin only
          w = 8;
          actual_boundary = x;
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x, y_body_base, x, y_body_base + row_height, {
            width: 2
          });
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + 3, y_body_base, x + 3, y_body_base + row_height);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + 7, y_body_base + row_height / 4 * 1.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + 7, y_body_base + row_height / 4 * 2.5, 1);
          break;

        case "e":
          // begin and end
          w = 8;
          actual_boundary = x + w;
          xshift = side == "end" ? 0 : 0;
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + xshift, y_body_base + row_height / 4 * 1.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + xshift, y_body_base + row_height / 4 * 2.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + xshift + 4, y_body_base, x + xshift + 4, y_body_base + row_height);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + xshift + 7, y_body_base, x + xshift + 7, y_body_base + row_height, {
            width: 2
          });

          if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
            var stimes = e0.ntimes == true ? "X" : "" + e0.times;
            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + xshift + w, y_body_base + row_height + param.xtimes_mark_y_margin, "(" + stimes + " times)", param.base_font_size / 2, "rt");
          }

          break;

        case "B":
          // begin only
          w = 15;
          actual_boundary = x + w / 2;
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x, y_body_base + row_height / 4 * 1.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x, y_body_base + row_height / 4 * 2.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + 4, y_body_base, x + 4, y_body_base + row_height);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + 7, y_body_base, x + 7, y_body_base + row_height, {
            width: 2
          });
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + 10, y_body_base, x + 10, y_body_base + row_height);

          if (e0.times !== null && (e0.ntimes || e0.times != 2)) {
            var _stimes = e0.ntimes == true ? "X" : "" + e0.times;

            if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasText"](canvas, x + 8, y_body_base + row_height, "(" + _stimes + " times)", param.base_font_size / 2, "rt");
          }

          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + 14, y_body_base + row_height / 4 * 1.5, 1);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasCircle"](canvas, x + 14, y_body_base + row_height / 4 * 2.5, 1);
          break;

        case "f":
          // begin and end (normally, end)
          w = 5;
          xshift = side == "end" ? 0 : 0;
          actual_boundary = x + w;
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + xshift, y_body_base, x + xshift, y_body_base + row_height);
          if (draw) _graphic__WEBPACK_IMPORTED_MODULE_3__["CanvasLine"](canvas, x + xshift + 3, y_body_base, x + xshift + 3, y_body_base + row_height, {
            width: 2
          });
          break;

        case "r":
          r = this.render_simile_mark_plain(draw, canvas, x, y_body_base, row_height, base_body_height, 2, true, "l");
          x += r.width;
          w = r.width;
          actual_boundary = x + w / 2;
          break;

        default:
          throw "Internal error";
      }

      return {
        width: w,
        actual_boundary: actual_boundary
      };
    }
  }]);

  return MobileRenderer;
}(_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"]);

/***/ }),

/***/ "./src/renderer/renderer.js":
/*!**********************************!*\
  !*** ./src/renderer/renderer.js ***!
  \**********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var _graphic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphic */ "./src/renderer/graphic.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Renderer =
/*#__PURE__*/
function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render() {
      console.log("Run renderer");
    }
  }, {
    key: "get_boundary_sign",
    value: function get_boundary_sign(e) {
      if (e === null) return "n";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryMark"]) {
        if (e.nline == 1) return "s";else if (e.nline == 2) return "d";
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBeginMark"]) {
        return "b";
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopEndMark"]) {
        return "e";
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopBothMark"]) {
        return "B";
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryFinMark"]) {
        return "f";
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["MeasureBoundaryDblSimile"]) {
        return "r";
      }
      throw "Invalid boundary object";
    }
  }, {
    key: "boundary_type_without_line_break",
    value: function boundary_type_without_line_break(b0, b1) {
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
  }, {
    key: "boundary_type_with_line_break",
    value: function boundary_type_with_line_break(b0, b1, side) {
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
      } else {
        return key[side == "begin" ? 1 : 0];
      } //throw "Invalid boundary pair : " + key;

    }
  }, {
    key: "classifyElements",
    value: function classifyElements(measure) {
      var m = measure;
      var header_elements = new Array();
      var body_elements = new Array();
      var footer_elements = new Array();
      var measure_wide_elements = new Array(); // For simile marks

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
          if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"]) {
            body_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) {
            body_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["LoopIndicator"]) {
            measure_wide_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["LongRestIndicator"]) {
            measure_wide_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Simile"]) {
            // Simile is body elements when at least one another body element(including another simile) exsits, otherwise measure wide elements.
            // Judge after screeining.
            simile_body_idx.push(body_elements.length);
            simile_measure_wide_idx.push(measure_wide_elements.length);
            simile_objs.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Time"]) {
            // Time mark is treated as header element irrespective of its positionat the second element is treated as header part
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["DaCapo"]) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["DalSegno"]) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Segno"]) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Coda"]) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["ToCoda"]) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Fine"]) {
            footer_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Comment"]) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Lyric"]) {
            header_elements.push(e);
          } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Space"]) {
            body_elements.push(e);
          } else {
            throw "Unkown component found";
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
  }, {
    key: "chord_elem_classify",
    value: function chord_elem_classify(chord, transpose, half_type) {
      var bases = chord.getChordStrBase(transpose, half_type);
      var elems = chord.mid_elem_objs; // if bases are null, elems are null, then it is just a duration information

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
            _minus5exists = false;

        for (var i = 0; i < elems.length; ++i) {
          var e = elems[i];

          switch (e.type) {
            case "M":
              if (e.param !== undefined) _6791113suselem.push(e);else _3rdelem.push(e);
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
              _7exists |= e.param == "7";
              break;

            case "b":
            case "#":
              if (e.param == "5") _5thelem.push(e);else _alteredelem.push(e);
              _minus5exists |= e.type == "b" && e.param == "5";
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
        _6_and_9_exists: _6exists && _9exists,
        _halfdim_exists: _7exists && _minus5exists
      };
    }
  }, {
    key: "render_rs_area",
    value: function render_rs_area(x, draw_scale, // note this is used for remember the draw_scale applied for tie rendering. other x axis coordinates given by already scaled.
    elems, paper, rs_y_base, row_height, meas_start_x, draw, chord_space, body_scaling, x_global_scale, music_context, meas, param, room_for_rs_per_element, balken, is_last_body_elem_group_in_a_measure) {
      // chords is list of chords for each chord object has .renderprop.x property
      // All elements shall have length indicators
      // var balken_width = "3px";
      //let balken = {
      //    groups: []
      //};
      var group = null; //paper.set();
      // elements in a measure

      for (var ei = 0; ei < elems.length; ++ei) {
        var e = elems[ei]; // no duration information

        if (e.note_group_list === null) {
          throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
        } //var x = e.renderprop.x;
        // var barlen = 25;
        //var flagintv = 5;


        var balken_element = e.renderprop.balken_element; // Flush current groups

        if ((balken_element.chord_length >= _common_common__WEBPACK_IMPORTED_MODULE_1__["WHOLE_NOTE_LENGTH"] / 4 || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) && balken.groups.length > 0) {
          var dbret = this.draw_rs_area_balkens( //draw, 
          //x,
          draw_scale, paper, group, balken, rs_y_base, row_height, meas_start_x, body_scaling, x_global_scale, music_context, meas, param);
          balken.groups = [];
          x = dbret.x;
        }

        music_context.pos_in_a_measure += balken_element.chord_length;
        balken.groups.push({
          balken_element: balken_element,
          e: e,
          org_x: x,
          org_room_for_rs_per_element: room_for_rs_per_element
        });

        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"] || balken_element.chord_length >= _common_common__WEBPACK_IMPORTED_MODULE_1__["WHOLE_NOTE_LENGTH"] / 4 || music_context.pos_in_a_measure % (_common_common__WEBPACK_IMPORTED_MODULE_1__["WHOLE_NOTE_LENGTH"] / 4) == 0 || ei == elems.length - 1 && is_last_body_elem_group_in_a_measure) {
          var _dbret = this.draw_rs_area_balkens( //draw, 
          //x,
          draw_scale, paper, group, balken, rs_y_base, row_height, meas_start_x, body_scaling, x_global_scale, music_context, meas, param);

          x = _dbret.x;
          balken.groups = [];
        }
      }

      return {
        x: x
      };
    }
  }, {
    key: "generate_balken_element",
    value: function generate_balken_element(e, x, row_height, music_context) {
      // no duration information
      if (e.note_group_list === null) {
        throw "SOMETHING WRONG WITH LENGTH INDICATOR SCREENING";
      }

      var _5lines_intv = row_height / 4;

      var chord_length = 10000000;
      var pos_on_5lines = []; // For notes only. bottom line is 0, second bottom line is 2, ... top line is 8

      var has_tie = false;
      var sharp_flats = []; // Currently only one note_group at a time is assumed

      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) {
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
              if (music_context.accidental_info[pos_idx] == note_profiles[nri].note.accidental) sharp_flats.push(null); // no need of accidental. null is no mark. 0 is natural.
              else sharp_flats.push(note_profiles[nri].note.accidental); // 0 is natural. null is no mark.

              music_context.accidental_info[pos_idx] = note_profiles[nri].note.accidental;
            }
          }
        }
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Space"]) {
        chord_length = 0; // Does not affect any music context
      } else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Simile"]) {
        chord_length = 10000000; // TODO: Think about the treatment of Simile in RS region
      }

      var type = null;
      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) type = "rest";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Space"]) type = "space";else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Simile"]) type = "simile";else if (e.note_group_list[0].note_profiles === null) type = "slash";else type = "notes";
      var lengthIndicator = null;
      if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"]) lengthIndicator = e.note_group_list[0].lengthIndicator;else if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) lengthIndicator = e.note_group_list[0].lengthIndicator;
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
    key: "draw_rs_area_without_flag_balken",
    value: function draw_rs_area_without_flag_balken(draw, paper, param, e, balken_element, x, rs_y_base, row_height) {
      var bounding_box = new _common_common__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"]();

      var _5lines_intv = row_height / 4;

      var deltax_acc = 10;
      var ys = balken_element.notes_coord.y; // Stage 1 (draw=false), no y position information available then null, in that case put dammy value

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
          ret = this.render_slash(paper, bo_group, x, ys[0], d, numdot, _5lines_intv, draw);
        } else {
          ret = this.render_slash(paper, bo_group, x, ys[0], d, numdot, _5lines_intv, draw);
        }

        bounding_box.add_rect(ret.bounding_box);
        balken_element.renderprop.note_x_center = x;

        if (draw) {
          balken_element.notes_coord.x.push([x, x, x + ret.bounding_box.w]);
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
          var r = null; // eslint-disable-next-line no-empty

          if (d == "0") {} else if (d == "1") {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_2__["G_imgmap"]["assets/img/w1note.svg"], note_x_center, y, null, _5lines_intv, "lm", draw);
          } else if (d == "2") {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_2__["G_imgmap"]["assets/img/w2note.svg"], note_x_center, y, null, _5lines_intv, "lm", draw);
          } else {
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_2__["G_imgmap"]["assets/img/bnote.svg"], note_x_center, y, null, _5lines_intv, "lm", draw);
          }

          if (!r) {
            throw "SOMETHING WRONG WITH PARSING";
          }

          bounding_box.add_rect(r.bounding_box);

          if (draw) {
            balken_element.notes_coord.x.push([x, note_x_center, note_x_center + r.bounding_box.w]);
          } // draw sharp, flat and natrual
          // http://finale-hossy.sakura.ne.jp/finale/2011/11/post-18.html


          if (sharp_flats[ci] !== null) {
            var svgname = {
              11: "flat.svg",
              1: "sharp.svg",
              0: "natural.svg"
            };
            var svg_dy = {
              11: -0.5,
              1: 0,
              0: 0
            };
            var url = "assets/img/" + svgname[sharp_flats[ci]];
            var dy = svg_dy[sharp_flats[ci]];
            r = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_2__["G_imgmap"][url], x, y + _5lines_intv * dy, null, _5lines_intv * 2.5, "lm", draw);
            bounding_box.add_rect(r.bounding_box);
          } // dots


          for (var i = 0; i < numdot; ++i) {
            var _dy = pos_on_5lines[ci] % 2 == 0 ? -_5lines_intv / 2 : 0;

            r = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasCircle"](paper, note_x_center + 12 + i * 5, y + _dy, 1, draw);
            bounding_box.add_rect(r.bounding_box);
          } // Draw additional horizontal lines


          for (var p5i = pos_on_5lines[ci]; p5i <= -2; ++p5i) {
            if (p5i % 2 != 0) continue;
            var a5y = _5lines_intv / 2 * (8 - p5i); // rs_y_base corresponds to pos#3

            _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, note_x_center - 3, rs_y_base + a5y, note_x_center + 12, rs_y_base + a5y, {
              width: 1
            }, draw);
          }

          for (var _p5i = pos_on_5lines[ci]; _p5i >= 10; --_p5i) {
            if (_p5i % 2 != 0) continue;

            var _a5y = _5lines_intv / 2 * (8 - _p5i); // rs_y_base corresponds to pos#3


            _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, note_x_center - 3, rs_y_base + _a5y, note_x_center + 12, rs_y_base + _a5y, {
              width: 1
            }, draw);
          }
        }
      } else if (balken_element.type == "rest") {
        var _r = this.render_rest_plain(e, paper, draw, x, rs_y_base, 0, row_height, row_height, param);

        bounding_box.add_rect(_r.bounding_box);

        if (draw) {
          balken_element.notes_coord.x.push([x, x, x + _r.bounding_box.w]);
        }
      } else if (balken_element.type == "space") {
        // Do not use expand here in case only one space is grouped in balken group
        bounding_box.add(x, rs_y_base, 0.5 * param.base_font_size, 0);
      } else if (balken_element.type == "simile") {
        alert("Impleetaion not ready for siile in RS area");
      }

      return {
        bounding_box: bounding_box.get()
      };
    }
  }, {
    key: "draw_rs_area_balkens",
    value: function draw_rs_area_balkens( //draw, 
    //x,
    draw_scale, paper, group, balken, rs_y_base, row_height, meas_start_x, body_scaling, x_global_scale, music_context, meas, param) {
      // Evaluate the flag direction(up or down) by the center of the y-axis position of all the notes/slashes
      // Not called with draw=false
      var draw = true;

      var _5lines_intv = row_height / 4; // 0. make notes_coord for y axis


      for (var _gbi = 0; _gbi < balken.groups.length; ++_gbi) {
        //let ys = balken.groups[gbi].balken_element.notes_coord[1]; // This is relative value to rs_y_base
        var e = balken.groups[_gbi].e;
        var group_y = [];

        if (e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Space"] || e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Simile"]) {
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

                group_y.push(ypos); //pos_on_5lines.push(pos_on_5line);
              }
            }
          }
        }

        balken.groups[_gbi].balken_element.notes_coord.y = group_y;
      } // 1. determine the flag direction here


      var center_y = 0.0;
      var min_y = 10000000;
      var max_y = 0;
      var gbi_at_min_y = null;
      var gbi_at_max_y = null;
      var cnt_y = 0;

      for (var _gbi2 = 0; _gbi2 < balken.groups.length; ++_gbi2) {
        var _e = balken.groups[_gbi2].e;

        if (_e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"] || _e instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Rest"]) {
          var ys = balken.groups[_gbi2].balken_element.notes_coord.y;

          for (var ci = 0; ci < ys.length; ++ci) {
            center_y += ys[ci];

            if (min_y > ys[ci]) {
              min_y = ys[ci];
              gbi_at_min_y = _gbi2;
            }

            if (max_y < ys[ci]) {
              max_y = ys[ci];
              gbi_at_max_y = _gbi2;
            }

            cnt_y += 1;
          }
        } else {// Does not affecct flag direction
        }
      }

      center_y = Math.floor(center_y / cnt_y);
      var upper_flag = center_y > rs_y_base + _5lines_intv * 2;
      var x = balken.groups[0].org_x; // 2. Draw notes and slashes without bars, flags and balkens

      for (var _gbi3 = 0; _gbi3 < balken.groups.length; ++_gbi3) {
        //var x = balken.groups[gbi].notes_coord[0];
        var _e2 = balken.groups[_gbi3].e;
        var balken_element = balken.groups[_gbi3].balken_element;
        var _ys = balken_element.notes_coord.y;
        var d = balken_element.note_value;
        var wo_flags = this.draw_rs_area_without_flag_balken(draw, paper, param, _e2, balken_element, x, rs_y_base, row_height);
        var xs = balken_element.notes_coord.x;

        if (_e2 instanceof _common_common__WEBPACK_IMPORTED_MODULE_1__["Chord"]) {
          if (music_context.tie_info.rs_prev_has_tie) {
            // Draw tie line
            var prev_coord = music_context.tie_info.rs_prev_coord;
            var psm = music_context.tie_info.rs_prev_meas; // Check the consistency.

            if (prev_coord.y.length != _ys.length) {
              throw "INVALID TIE NOTATION";
            }

            var _dy2 = 0;
            var sdx = 0;
            var edx = 0;
            var round = 0;

            if (balken.groups[_gbi3].balken_element.type == "slash") {
              // slash only has down flag
              _dy2 = -3;
              sdx = 3;
              edx = 0;
              round = 6;
            } else {
              // notes
              if (upper_flag) {
                _dy2 = 3;
                sdx = 3;
                edx = -3;
                round = -6;
              } else {
                _dy2 = -3;
                sdx = 3;
                edx = -3;
                round = 6;
              }
            }

            for (var _ci = 0; _ci < _ys.length; ++_ci) {
              var y = _ys[_ci];
              var prev_draw_scale = music_context.tie_info.rs_prev_draw_scale;

              if (y != prev_coord.y[_ci]) {
                // Crossing measure row. Previous RS mark could be on another page.
                // Make sure to create curve on the paper on which previous RS is drawn.
                var brace_points = [[prev_coord.x[_ci][2] * prev_draw_scale + sdx, prev_coord.y[_ci] + _dy2], [prev_coord.x[_ci][2] * prev_draw_scale + sdx, prev_coord.y[_ci] - round + _dy2], [psm.renderprop.meas_end_x + 20, prev_coord.y[_ci] - round + _dy2], [psm.renderprop.meas_end_x + 20, prev_coord.y[_ci] + _dy2]];
                var clip_rect = [prev_coord.x[_ci][2] * prev_draw_scale + sdx, prev_coord.y[_ci] - 50, psm.renderprop.meas_end_x - (prev_coord.x[_ci][2] * prev_draw_scale + sdx) + 5, 100];
                console.group("Tie");
                console.log(brace_points);
                console.log(clip_rect);
                console.groupEnd(); // In case the previous paper is in the same paper, "draw_scale" is currently applied,
                // then temporaryly deactivate scaling.
                // In case of differnt paper, such paper shall already be reverted back to scaling=1, 
                // no need to do anything.

                if (paper == music_context.tie_info.rs_prev_tie_paper) music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(1.0 / draw_scale, 1.0);
                _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasbBzierCurve"](music_context.tie_info.rs_prev_tie_paper, brace_points, false, false, {
                  "clip-rect": clip_rect
                });
                if (paper == music_context.tie_info.rs_prev_tie_paper) music_context.tie_info.rs_prev_tie_paper.getContext("2d").scale(draw_scale, 1.0);
                brace_points = [[meas_start_x - 20, y + _dy2], [meas_start_x - 20, y - round + _dy2], [xs[_ci][0] * draw_scale + edx, y - round + _dy2], [xs[_ci][0] * draw_scale + edx, y + _dy2]];
                clip_rect = [meas_start_x - 5, y - 50, x * draw_scale - (meas_start_x - 5), 100];
                paper.getContext("2d").scale(1.0 / draw_scale, 1.0);
                _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasbBzierCurve"](paper, brace_points, false, false, {
                  "clip-rect": clip_rect
                });
                paper.getContext("2d").scale(draw_scale, 1.0);
              } else {
                var _brace_points = [[prev_coord.x[_ci][2] * prev_draw_scale + sdx, prev_coord.y[_ci] + _dy2], [prev_coord.x[_ci][2] * prev_draw_scale + sdx, prev_coord.y[_ci] - round + _dy2], [xs[_ci][0] * draw_scale + edx, y - round + _dy2], [xs[_ci][0] * draw_scale + edx, y + _dy2]];
                paper.getContext("2d").scale(1.0 / draw_scale, 1.0);
                _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasbBzierCurve"](paper, _brace_points, false, false);
                paper.getContext("2d").scale(draw_scale, 1.0);
              }
            }
          }

          music_context.tie_info.rs_prev_has_tie = balken.groups[_gbi3].balken_element.has_tie;
          music_context.tie_info.rs_prev_tie_paper = paper;
          music_context.tie_info.rs_prev_coord = balken_element.notes_coord;
          music_context.tie_info.rs_prev_draw_scale = draw_scale;
          music_context.tie_info.rs_prev_meas = meas;
        }

        _e2.renderprop.x = x;
        balken_element.renderprop.x = x; // Here is the only update of x

        x += wo_flags.bounding_box.w + balken.groups[_gbi3].org_room_for_rs_per_element; // TODO : FIXME to cater for actual width of components
      } // 3. Determine the flag intercept and slope
      // From here other than slash and notes are not reuiqred.


      if (gbi_at_max_y === null && gbi_at_min_y === null) {
        // In case no chord or rest, no y information defined.
        return {
          x: x
        };
      }

      var x_at_min_y = balken.groups[gbi_at_min_y].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var x_at_max_y = balken.groups[gbi_at_max_y].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var ps_y = balken.groups[0].balken_element.notes_coord.y;
      var ps_bar_x = balken.groups[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var pe_y = balken.groups[balken.groups.length - 1].balken_element.notes_coord.y;
      var pe_bar_x = balken.groups[balken.groups.length - 1].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
      var slope = 0;

      if (balken.groups.length >= 2) {
        var delta_y = upper_flag ? Math.min.apply(null, pe_y) - Math.min.apply(null, ps_y) : Math.max.apply(null, pe_y) - Math.max.apply(null, ps_y);
        slope = delta_y / (pe_bar_x - ps_bar_x);
      } else {
        slope = 1.0; // any value is OK
      }

      var intercept = (upper_flag ? min_y - param.note_bar_length : max_y + param.note_bar_length) - slope * (upper_flag ? x_at_min_y : x_at_max_y); // 4. Draw bars, flags

      for (var gbi = 0; gbi < balken.groups.length; ++gbi) {
        var _ys2 = balken.groups[gbi].balken_element.notes_coord.y;
        var _xs = balken.groups[gbi].balken_element.notes_coord.x;

        if (balken.groups[gbi].balken_element.type == "slash") {
          var bar_x = upper_flag ? _xs[0][2] : _xs[0][1]; // eslint-disable-next-line no-empty

          if (d == "0" || d == "1") {} else {
            _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, bar_x, _ys2[0] + 3, bar_x, slope * bar_x + intercept, {
              width: 1
            });
          } //bar_flag_group.push(o);

        } else if (balken.groups[gbi].balken_element.type == "notes") {
          // eslint-disable-next-line no-empty
          if (d == "0" || d == "1") {} else {
            var _bar_x = upper_flag ? _xs[0][2] : _xs[0][1];

            var y0 = upper_flag ? Math.max.apply(null, _ys2) : Math.min.apply(null, _ys2); // Draw the basic vertical line. For the note with standalone flag(s), some additional length will be added when to draw flags.

            _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, _bar_x, y0, _bar_x, slope * _bar_x + intercept, {
              width: 1
            });
          } // eslint-disable-next-line no-empty

        } else if (balken.groups[gbi].balken_element.type == "rest") {}
      } //group.push(bar_flag_group);
      // 5. Draw balkens


      if (balken.groups.length >= 2) {
        // Draw flag for balken
        // Common balken
        if (balken.groups[0].balken_element.note_value >= 8) {
          _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, ps_bar_x, slope * ps_bar_x + intercept, pe_bar_x, slope * pe_bar_x + intercept, {
            width: param.balken_width
          });
        } // Balken for each note_value level


        var gg = this.to_same_value_group(balken.groups, function (o) {
          return o.balken_element.note_value;
        });

        for (var g = 0; g < gg.length; ++g) {
          var same_sds = gg[g];
          var sd = same_sds[0].balken_element.note_value;
          var numflag = _common_common__WEBPACK_IMPORTED_MODULE_1__["myLog2"](parseInt(sd)) - 2;

          if (same_sds.length == 1) {
            var pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1]; // Determine which direction to draw flag. Determined from which neighboring
            // rhythm is more natural to coupling with.
            // Currently, simple strategy is adopted for now.

            var dir = 1;
            if (g == gg.length - 1) dir = -1;
            var neighbor_x = gg[g + dir][gg[g + dir].length - 1].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
            var blen = Math.abs(neighbor_x - pssx) * 0.3;

            for (var fi = 1; fi < numflag; ++fi) {
              // fi=0 is alread drawn by common balken
              //o = paper.path(svgLine(pss[0], rs_y_base+barlen-fi*flagintv, pss[0] + dir * blen, rs_y_base+barlen-fi*flagintv)).attr({'stroke-width':balken_width});
              _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, pssx, slope * pssx + intercept + (upper_flag ? +1 : -1) * fi * param.note_flag_interval, pssx + dir * blen, slope * (pssx + dir * blen) + intercept + (upper_flag ? +1 : -1) * fi * param.note_flag_interval, {
                width: param.balken_width
              });
            }
          } else if (same_sds.length >= 2) {
            var _pssx = same_sds[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
            var psex = same_sds[same_sds.length - 1].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];

            for (var _fi = 1; _fi < numflag; ++_fi // fi=0 is alread drawn by common balken
            ) {
              _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasLine"](paper, _pssx, slope * _pssx + intercept + (upper_flag ? +1 : -1) * _fi * param.note_flag_interval, psex, slope * psex + intercept + (upper_flag ? +1 : -1) * _fi * param.note_flag_interval, {
                width: param.balken_width
              });
            }

            if (same_sds[0].balken_element.lengthIndicator.renpu) {
              var ro = 12;
              var center_x = (_pssx + psex) / 2.0;
              var text = _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasText"](paper, center_x, slope * center_x + intercept + (upper_flag ? -ro : ro), same_sds[0].balken_element.lengthIndicator.renpu + "", 12, "cm");

              if (same_sds[0].balken_element.note_value < 8) {
                var rno = 10;
                var rnh = 4;
                var points1 = [[_pssx, slope * _pssx + intercept + (upper_flag ? -rnh : rnh)], [_pssx, slope * _pssx + intercept + (upper_flag ? -rno : rno)], [center_x - 7, slope * (center_x - 7) + intercept + (upper_flag ? -rno : rno)]];
                var points2 = [[center_x + 7, slope * (center_x + 7) + intercept + (upper_flag ? -rno : rno)], [psex, slope * psex + intercept + (upper_flag ? -rno : rno)], [psex, slope * psex + intercept + (upper_flag ? -rnh : rnh)]];
                _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasPolygon"](paper, points1, false, false);
                _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasPolygon"](paper, points2, false, false);
              }
            }
          }
        }
      } else if (balken.groups.length == 1 && (balken.groups[0].balken_element.type == "slash" || balken.groups[0].balken_element.type == "notes")) {
        // Normal drawing of flags
        var _bar_x2 = balken.groups[0].balken_element.notes_coord.x[0][upper_flag ? 2 : 1];
        var _d = balken.groups[0].balken_element.note_value;

        var _numflag = _common_common__WEBPACK_IMPORTED_MODULE_1__["myLog2"](parseInt(_d)) - 2;

        for (var _fi2 = 0; _fi2 < _numflag; ++_fi2) {
          var url = "assets/img/" + (upper_flag ? "flag_f.svg" : "flag_i.svg");
          _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasImage"](paper, _graphic__WEBPACK_IMPORTED_MODULE_2__["G_imgmap"][url], _bar_x2, slope * _bar_x2 + intercept + (upper_flag ? 1 + _fi2 * 6 : -1 - _fi2 * 6), null, null, "l" + (upper_flag ? "t" : "b")); // Additional vertical line
          // eslint-disable-next-line no-constant-condition

          if (false) {}
        }
      }

      return {
        x: x
      };
    }
  }, {
    key: "render_slash",
    value: function render_slash(paper, group, x, y, d, numdot, _5lines_intv) {
      var draw = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var rsgw = 8;
      var rsgh = _5lines_intv * 2;
      var rsh = 4;

      if (draw) {
        var points = [[x, y + rsgh / 2 - rsh], [x + rsgw, y - rsgh / 2], [x + rsgw, y - rsgh / 2 + rsh], [x, y + rsgh / 2]]; //var obj = null;

        if (d == "1" || d == "2") {
          _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasPolygon"](paper, points, true, false);
        } else {
          // '0' and other
          _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasPolygon"](paper, points, true, true);
        } //group.push(obj);


        for (var i = 0; i < numdot; ++i) {
          _graphic__WEBPACK_IMPORTED_MODULE_2__["CanvasCircle"](paper, x + rsgw + 5 + i * 5, y - _5lines_intv / 2, 1);
        }
      }

      return {
        bar_reduction: rsgh / 2 - rsh,
        bounding_box: {
          x: x,
          y: y,
          w: rsgw + (numdot > 0 ? 5 + numdot * 5 : 0),
          h: rsgh
        }
      };
    }
    /*
     * Group objs to the ones which has same values with 'field' ( Neighbor ). Skip the null or undefined value.
     */

  }, {
    key: "to_same_value_group",
    value: function to_same_value_group(objs, comp) {
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

/******/ });
});
//# sourceMappingURL=fumen2.js.map