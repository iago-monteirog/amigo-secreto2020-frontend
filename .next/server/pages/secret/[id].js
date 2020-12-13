module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/secret/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/secret/[id].js":
/*!******************************!*\
  !*** ./pages/secret/[id].js ***!
  \******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/Headers/AdminSecretHeader */ "./src/components/Headers/AdminSecretHeader.js");
/* harmony import */ var _src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Headers/SecretHeader */ "./src/components/Headers/SecretHeader.js");
/* harmony import */ var _src_components_Participants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Participants */ "./src/components/Participants.js");


var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\pages\\secret\\[id].js";




function Secret({
  participants,
  hasDrew,
  isAdmin
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }, this), !isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Participants__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showButton: isAdmin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(ctx) {
  return {
    props: {
      participants: [],
      hasDrew: false,
      isAdmin: false
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Secret);

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "ulw1rw-0"
})(["border:none;cursor:pointer;padding:15px 30px;font-size:14px;display:block;border-radius:50px;margin:10px 0;background-color:", ";&:focus{border:none;outline:none;background-color:", ";}"], ({
  theme
}) => theme.colors.secondary, ({
  theme
}) => theme.colors.secondaryDark);
function Button(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Containers/ImageContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/Containers/ImageContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Containers\\ImageContainer.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainer__Background",
  componentId: "eexa1t-0"
})(["background-image:url('/background.png');background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/AdminSecretHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/Headers/AdminSecretHeader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminSecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./src/components/Input.js");

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Headers\\AdminSecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__Container",
  componentId: "sc-19hpv20-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__DivForm",
  componentId: "sc-19hpv20-1"
})(["color:", ";padding:20px;max-width:400px;"], ({
  theme
}) => theme.colors.light);
function AdminSecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Compartilha essa sala com seus amigos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: link,
        disable: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/SecretHeader.js":
/*!************************************************!*\
  !*** ./src/components/Headers/SecretHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminSecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Headers\\SecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__Container",
  componentId: "s7k8zr-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__DivForm",
  componentId: "s7k8zr-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function AdminSecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA foi convidado para participar para participar deste amigo secreto!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        buttonText: "Participar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1b8t6yt-0"
})(["padding:20px;color:", ";background-color:", ";border:0;border-radius:10px;width:88%;&:focus{border:none;outline:none;}&::placeholder{color:", ";}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primary);
function InputComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Logo.js";

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Logo__H1",
  componentId: "sc-5mao5h-0"
})(["font-size:64px;color:", ";"], ({
  theme
}) => theme.colors.light);
function Logo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
    children: '{amigo} Secreto 2020'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./src/components/NameEmailForm.js":
/*!*****************************************!*\
  !*** ./src/components/NameEmailForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\NameEmailForm.js";



const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "sc-1je79ie-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}>input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      placeholder: "Seu nome",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

NameEmailForm.defaultProps = {
  buttonText: "Criar"
};
/* harmony default export */ __webpack_exports__["default"] = (NameEmailForm);

/***/ }),

/***/ "./src/components/Participants.js":
/*!****************************************!*\
  !*** ./src/components/Participants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\iagom\\OneDrive\\\xC1rea de Trabalho\\amigo-secreto2020-frontend\\src\\components\\Participants.js";

const H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Participants__H4",
  componentId: "hjgtbr-0"
})([""]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__Container",
  componentId: "hjgtbr-1"
})([""]);
const ParticipantDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__ParticipantDelete",
  componentId: "hjgtbr-2"
})([""]);

const Participant = ({}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDelete, {
    children: "Deletar"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined), "Nome (email@gmail.com)"]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 5
}, undefined);

function Participants({}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H4, {
      children: "Participantes:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VjcmV0Ly5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL0FkbWluU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmFtZUVtYWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNpcGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTZWNyZXQiLCJwYXJ0aWNpcGFudHMiLCJoYXNEcmV3IiwiaXNBZG1pbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJzZWNvbmRhcnlEYXJrIiwiQnV0dG9uIiwiQmFja2dyb3VuZCIsImRpdiIsIkltYWdlQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJDb250YWluZXIiLCJsaWdodCIsIkRpdkZvcm0iLCJBZG1pblNlY3JldEhlYWRlciIsImxpbmsiLCJJbnB1dCIsImlucHV0IiwicHJpbWFyeSIsInByaW1hcnlMaWdodCIsIklucHV0Q29tcG9uZW50IiwiSDEiLCJoMSIsIkxvZ28iLCJGb3JtIiwiZm9ybSIsIk5hbWVFbWFpbEZvcm0iLCJidXR0b25UZXh0IiwiZGVmYXVsdFByb3BzIiwiSDQiLCJoNCIsIlBhcnRpY2lwYW50RGVsZXRlIiwiUGFydGljaXBhbnQiLCJQYXJ0aWNpcGFudHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCO0FBQUVDLGNBQUY7QUFBZ0JDLFNBQWhCO0FBQXlCQztBQUF6QixDQUFqQixFQUFxRDtBQUNqRCxzQkFDSTtBQUFBLGVBRVFBLE9BQU8saUJBQUkscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZuQixFQUtRLENBQUNBLE9BQUQsaUJBQVkscUVBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxw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cUVBQUMsU0FBRDtBQUFBLDZCQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBUUgsQzs7Ozs7Ozs7Ozs7QUNoQ0Qsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2VjcmV0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NlY3JldC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IEFkbWluU2VjcmV0SGVhZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvQWRtaW5TZWNyZXRIZWFkZXInXHJcbmltcG9ydCBTZWNyZXRIZWFkZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9TZWNyZXRIZWFkZXInXHJcbmltcG9ydCBQYXJ0aWNpcGFudHMgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFydGljaXBhbnRzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNlY3JldCAoeyBwYXJ0aWNpcGFudHMsIGhhc0RyZXcsIGlzQWRtaW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0FkbWluICYmIDxBZG1pblNlY3JldEhlYWRlciAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFpc0FkbWluICYmIDxTZWNyZXRIZWFkZXIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UGFydGljaXBhbnRzXHJcbiAgICAgICAgICAgICAgICBzaG93QnV0dG9uPXtpc0FkbWlufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzIChjdHgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcclxuICAgICAgICAgICAgaGFzRHJldzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQWRtaW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNyZXQiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuXHJcbiAgICAmOiBmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5RGFya307XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIHsuLi5wcm9wc30gLz5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDb250YWluZXIgKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIDxCYWNrZ3JvdW5kPnsgY2hpbGRyZW4gfTwvQmFja2dyb3VuZD5cclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG5gXHJcblxyXG5jb25zdCBEaXZGb3JtID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5TZWNyZXRIZWFkZXIgKCkge1xyXG4gICAgY29uc3QgbGluayA9IFwiaHR0cHM6Ly9saW5rLmNvbS9zYWxhXCJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxEaXZGb3JtPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29tcGFydGlsaGEgZXNzYSBzYWxhIGNvbSBzZXVzIGFtaWdvcyE8L3A+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2xpbmt9IGRpc2FibGUgLz5cclxuICAgICAgICAgICAgPC9EaXZGb3JtPlxyXG4gICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbydcclxuaW1wb3J0IE5hbWVFbWFpbEZvcm0gZnJvbSAnLi4vTmFtZUVtYWlsRm9ybSdcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XHJcbmBcclxuXHJcbmNvbnN0IERpdkZvcm0gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5TZWNyZXRIZWFkZXIgKCkge1xyXG4gICAgY29uc3QgbGluayA9IFwiaHR0cHM6Ly9saW5rLmNvbS9zYWxhXCJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgIDxwPlZvY8OqIGZvaSBjb252aWRhZG8gcGFyYSBwYXJ0aWNpcGFyIHBhcmEgcGFydGljaXBhciBkZXN0ZSBhbWlnbyBzZWNyZXRvITwvcD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxEaXZGb3JtPlxyXG4gICAgICAgICAgICAgICAgPE5hbWVFbWFpbEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlBhcnRpY2lwYXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9EaXZGb3JtPlxyXG4gICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUxpZ2h0fTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogODglO1xyXG5cclxuICAgICY6IGZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dENvbXBvbmVudCAocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8SW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XHJcblxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKCkge1xyXG4gICAgcmV0dXJuIDxIMT57J3thbWlnb30gU2VjcmV0byAyMDIwJ308L0gxPlxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgPmlucHV0LCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gTmFtZUVtYWlsRm9ybSAoeyBidXR0b25UZXh0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IG5vbWVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24+eyBidXR0b25UZXh0IH08L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbk5hbWVFbWFpbEZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYnV0dG9uVGV4dDogXCJDcmlhclwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVFbWFpbEZvcm0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSDQgPSBzdHlsZWQuaDRgXHJcblxyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50RGVsZXRlID0gc3R5bGVkLmRpdiBgXHJcblxyXG5gXHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudCA9ICh7fSkgPT4gKFxyXG4gICAgPFBhcnRpY2lwYW50PlxyXG4gICAgICAgIDxQYXJ0aWNpcGFudERlbGV0ZT5cclxuICAgICAgICAgICAgRGVsZXRhclxyXG4gICAgICAgIDwvUGFydGljaXBhbnREZWxldGU+XHJcbiAgICAgICAgTm9tZSAoZW1haWxAZ21haWwuY29tKVxyXG4gICAgPC9QYXJ0aWNpcGFudD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydGljaXBhbnRzICh7fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SDQ+UGFydGljaXBhbnRlczo8L0g0PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRpY2lwYW50Lz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=