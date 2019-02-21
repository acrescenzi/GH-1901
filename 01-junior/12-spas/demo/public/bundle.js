/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let {choices} = __webpack_require__(/*! ./quiz */ \"./quiz.js\")\n\nlet header = document.getElementById('header')\n\nlet quiz = document.getElementById('quiz')\nlet btn = document.getElementById('getBoys')\n\n\nbtn.addEventListener('click', async (e) => {\n\twindow.fetch('/backstreet')\n\t.then(res => {\n\t\tconsole.log(\"our res\", res)\n\t\treturn res.json()\n\t})\n\t.then(boys => {\n\t\tconsole.log(\"OUR BAND\", boys)\n\t\tboys['backstreetBoys'].forEach(member => {\n\t\t\tlet node = document.createElement('li').innerHTML = `** ${member} </br>`\n\t\t\tquiz.append(node)\n\t\t})\n\t})\n\t.catch(err => console.log(err))\n})\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./quiz.js":
/*!*****************!*\
  !*** ./quiz.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let choices = ['Donatello', 'Raphael', 'Leonardo', 'Michaelangelo'];\n\nmodule.exports  = { choices }\n\n//# sourceURL=webpack:///./quiz.js?");

/***/ })

/******/ });