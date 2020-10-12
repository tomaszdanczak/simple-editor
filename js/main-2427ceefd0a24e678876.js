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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tools_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/reference */ \"./src/tools/reference.js\");\n/* harmony import */ var _tools_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/handlers */ \"./src/tools/handlers.js\");\n\n\n\n\n// handle font style buttons\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnSizeDown\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"fontSizeDown\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnSizeUp\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"fontSizeUp\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnBold\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"fontStyleBold\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnUnderline\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"fontStyleUnderline\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnItalic\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"fontStyleItalic\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"selectFontButton\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"selectFont\"]);\n\n// handle storage buttons\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnLoad\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"loadData\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnSave\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"saveData\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnClear\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"clearMemory\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"btnReload\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"reloadServer\"]);\n\n// handle switchers\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"switchThemeBlue\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitcherBlue\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"switchThemeOlive\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitcherOlive\"]);\n_tools_reference__WEBPACK_IMPORTED_MODULE_1__[\"switchThemeYellow\"].addEventListener(\"click\", _tools_handlers__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitcherYellow\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ "./src/tools/alert-box.js":
/*!********************************!*\
  !*** ./src/tools/alert-box.js ***!
  \********************************/
/*! exports provided: showSuccessAlert, showErrorAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSuccessAlert\", function() { return showSuccessAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showErrorAlert\", function() { return showErrorAlert; });\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference */ \"./src/tools/reference.js\");\n\n\nfunction showSuccessAlert() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].classList.add(\"alert-box--success\");\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].textContent = \"Success - message was saved correctly\";\n  setTimeout(() => {\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].classList.remove(\"alert-box--success\");\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].textContent = \"\";\n  }, 3000);\n}\n\nfunction showErrorAlert() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].classList.add(\"alert-box--error\");\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].textContent =\n    \"Error - the message wasn't saved. Fill up the input field and try again.\";\n  setTimeout(() => {\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].classList.remove(\"alert-box--error\");\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"boxAlert\"].textContent = \"\";\n  }, 3000);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/tools/alert-box.js?");

/***/ }),

/***/ "./src/tools/data.js":
/*!***************************!*\
  !*** ./src/tools/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet size = 16;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (size);\n\n\n//# sourceURL=webpack:///./src/tools/data.js?");

/***/ }),

/***/ "./src/tools/handlers.js":
/*!*******************************!*\
  !*** ./src/tools/handlers.js ***!
  \*******************************/
/*! exports provided: fontSizeDown, fontSizeUp, fontStyleBold, fontStyleUnderline, fontStyleItalic, selectFont, loadData, saveData, clearMemory, reloadServer, themeSwitcherBlue, themeSwitcherOlive, themeSwitcherYellow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSizeDown\", function() { return fontSizeDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSizeUp\", function() { return fontSizeUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontStyleBold\", function() { return fontStyleBold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontStyleUnderline\", function() { return fontStyleUnderline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontStyleItalic\", function() { return fontStyleItalic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectFont\", function() { return selectFont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMemory\", function() { return clearMemory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reloadServer\", function() { return reloadServer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeSwitcherBlue\", function() { return themeSwitcherBlue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeSwitcherOlive\", function() { return themeSwitcherOlive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeSwitcherYellow\", function() { return themeSwitcherYellow; });\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference */ \"./src/tools/reference.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/tools/data.js\");\n/* harmony import */ var _alert_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-box */ \"./src/tools/alert-box.js\");\n\n\n\n\nfunction fontSizeDown() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].style.fontSize = `${_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"] - 1}px`;\n  _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]--;\n}\n\nfunction fontSizeUp() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].style.fontSize = `${_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"] + 1}px`;\n  _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]++;\n}\n\nfunction fontStyleBold() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].classList.toggle(\"bold\");\n}\n\nfunction fontStyleUnderline() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].classList.toggle(\"underline\");\n}\n\nfunction fontStyleItalic() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].classList.toggle(\"italic\");\n}\n\nfunction selectFont() {\n  const selector = document.getElementById(\"select\");\n  const value = selector[selector.selectedIndex].value;\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].style.fontFamily = value;\n}\n\nfunction loadData(e) {\n  e.preventDefault();\n  if (localStorage.getItem(\"message\")) {\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].value = localStorage.getItem(\"message\");\n  }\n}\n\nfunction saveData(e) {\n  e.preventDefault();\n  if (_reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].value.trim() !== \"\") {\n    _alert_box__WEBPACK_IMPORTED_MODULE_2__[\"showSuccessAlert\"]();\n\n    localStorage.setItem(\"message\", _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].value);\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"textEditor\"].value = \"\";\n  } else {\n    _alert_box__WEBPACK_IMPORTED_MODULE_2__[\"showErrorAlert\"]();\n  }\n}\n\nfunction clearMemory() {\n  localStorage.removeItem(\"message\");\n}\n\nfunction reloadServer() {\n  location.reload(true);\n}\n\nfunction themeSwitcherBlue() {\n  if (!_reference__WEBPACK_IMPORTED_MODULE_0__[\"bodyElement\"].classList.contains(\"theme-blue\")) {\n    document.body.classList.toggle(\"theme-blue\");\n    document.body.classList.remove(\"theme-yellow\");\n    document.body.classList.remove(\"theme-olive\");\n  }\n}\n\nfunction themeSwitcherOlive() {\n  if (!_reference__WEBPACK_IMPORTED_MODULE_0__[\"bodyElement\"].classList.contains(\"theme-olive\")) {\n    document.body.classList.toggle(\"theme-olive\");\n    document.body.classList.remove(\"theme-yellow\");\n    document.body.classList.remove(\"theme-blue\");\n  }\n}\n\nfunction themeSwitcherYellow() {\n  if (!_reference__WEBPACK_IMPORTED_MODULE_0__[\"bodyElement\"].classList.contains(\"theme-yellow\")) {\n    document.body.classList.toggle(\"theme-yellow\");\n    document.body.classList.remove(\"theme-olive\");\n    document.body.classList.remove(\"theme-blue\");\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/tools/handlers.js?");

/***/ }),

/***/ "./src/tools/reference.js":
/*!********************************!*\
  !*** ./src/tools/reference.js ***!
  \********************************/
/*! exports provided: btnSizeDown, btnSizeUp, selectFontButton, btnBold, btnUnderline, btnItalic, btnLoad, btnSave, btnClear, btnReload, switchThemeBlue, switchThemeOlive, switchThemeYellow, textEditor, boxAlert, bodyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnSizeDown\", function() { return btnSizeDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnSizeUp\", function() { return btnSizeUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectFontButton\", function() { return selectFontButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnBold\", function() { return btnBold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnUnderline\", function() { return btnUnderline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnItalic\", function() { return btnItalic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnLoad\", function() { return btnLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnSave\", function() { return btnSave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnClear\", function() { return btnClear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnReload\", function() { return btnReload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchThemeBlue\", function() { return switchThemeBlue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchThemeOlive\", function() { return switchThemeOlive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchThemeYellow\", function() { return switchThemeYellow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textEditor\", function() { return textEditor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boxAlert\", function() { return boxAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyElement\", function() { return bodyElement; });\n// DOM manipulated elements\nconst textEditor = document.querySelector(\".editor__textarea--js\");\nconst boxAlert = document.querySelector(\".alert-box--js\");\n\n//  references to font style buttons\nconst btnSizeDown = document.querySelector(\".js-btn-font-style--size-down\");\nconst btnSizeUp = document.querySelector(\".js-btn-font-style--size-up\");\nconst selectFontButton = document.querySelector(\".js-btn-select\");\nconst btnBold = document.querySelector(\".js-btn-font-style--bold\");\nconst btnUnderline = document.querySelector(\".js-btn-font-style--underline\");\nconst btnItalic = document.querySelector(\".js-btn-font-style--italic\");\n\n// references to storage buttons\nconst btnLoad = document.querySelector(\".js-btn-editor--load\");\nconst btnSave = document.querySelector(\".js-btn-editor--save\");\nconst btnClear = document.querySelector(\".js-btn-cleaning--remove\");\nconst btnReload = document.querySelector(\".js-btn-cleaning--reload\");\n\n// references to switchers\nconst switchThemeBlue = document.querySelector(\".switchers__input--blue-js\");\nconst switchThemeOlive = document.querySelector(\".switchers__input--olive-js\");\nconst switchThemeYellow = document.querySelector(\n  \".switchers__input--yellow-js\"\n);\n// body\nconst bodyElement = document.querySelector(\"body\");\n\n\n\n\n//# sourceURL=webpack:///./src/tools/reference.js?");

/***/ })

/******/ });