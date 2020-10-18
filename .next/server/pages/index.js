module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VKYD\\next.js-cdn\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Index = () => {
  return __jsx("div", {
    className: "jsx-2963171148" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "LCFR: VKYD'wick3d CDN"), __jsx("meta", {
    content: "LCFR: VKYD'wick3d CDN",
    name: "title",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    name: "description",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel Skywalker Developer Freelancer Website Web Development Programming Engineering Imagineer New Delhi Coding UX UI Sanskriti School KrishSkywalker",
    name: "keywords",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "author",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://github.com/VKYD",
    rel: "me",
    type: "text/html",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "mailto:vkydclothing@gmail.com",
    rel: "me",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "utf-8",
    name: "charset",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "text/html; charset=utf-8",
    "http-equiv": "Content-Type",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "width=device-width,initial-scale=1,user-scalable=no",
    name: "viewport",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "English",
    name: "language",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("base", {
    href: "/",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#000000",
    name: "theme-color",
    meta: "meta",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#e8026a",
    name: "msapplication-TileColor",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "website",
    property: "og:type",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd.in",
    property: "og:url",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "LCFR: VKYD'wick3d CDN",
    property: "og:title",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    property: "og:description",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    src: "https://vkyd-next-js-cdn.vercel.app/images/meta.png",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "en_US",
    property: "og:locale",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "summary",
    name: "twitter:card",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "http://www.vkyd.in",
    name: "twitter:url",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "LCFR: VKYD'wick3d CDN",
    name: "twitter:title",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    name: "twitter:description",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd-next-js-cdn.vercel.app/images/twitter_meta.png",
    name: "twitter:image",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "shortcut icon",
    type: "image/png",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "icon",
    type: "image/png",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "icon",
    sizes: "180x180",
    type: "image/png",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "icon",
    sizes: "152x152",
    type: "image/png",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/safari-pinned-tab.svg",
    rel: "mask-icon",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-57x57.png",
    rel: "apple-touch-icon",
    sizes: "57x57",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-72x72.png",
    rel: "apple-touch-icon",
    sizes: "72x72",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-76x76.png",
    rel: "apple-touch-icon",
    sizes: "76x76",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-114x114.png",
    rel: "apple-touch-icon",
    sizes: "114x114",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-120x120.png",
    rel: "apple-touch-icon",
    sizes: "120x120",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-144x144.png",
    rel: "apple-touch-icon",
    sizes: "144x144",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "apple-touch-icon",
    sizes: "152x152",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-2963171148" + " " + "sub-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "LCFR"), __jsx("h2", {
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "VKYD's wick3d CDN"), __jsx("h3", {
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Check us out at \xA0", __jsx("a", {
    href: "https://vkyd.in",
    className: "jsx-2963171148",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "vkyd.in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2963171148",
    __self: undefined
  }, "@font-face{font-family:Plateia;src:url(fonts/Plateia-Bold.ttf);}@font-face{font-family:Poppins;src:url(fonts/Poppins-Regular.ttf);}.jsx-2963171148::selection{background-color:#000000;color:#dddddd;}.container.jsx-2963171148{width:100%;height:120vh;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#333333;}.sub-container.jsx-2963171148{width:60%;max-width:500px;background-color:#333333;border-radius:20px;padding:0px 40px;color:#aaaaaa;box-shadow:12px 12px 16px 0 #00000088, -8px -8px 12px 0 #44444455;}h1.jsx-2963171148{font-size:calc(1.355rem + 6vw);font-family:Plateia;margin:0;padding:0;}h2.jsx-2963171148{font-family:Poppins;font-size:calc(1.1rem + 0.3vw);}@media (min-width:1200px){h2.jsx-2963171148 a.jsx-2963171148{font-size:1.5rem;}}h3.jsx-2963171148{font-size:1.2rem;font-family:Poppins;margin:35px 0px 50px 0px;padding:0;}a.jsx-2963171148{-webkit-text-decoration:none;text-decoration:none;color:#e8026a;-webkit-transition:0.2s;transition:0.2s;}a.jsx-2963171148:hover{padding-bottom:5px;border-bottom:2px solid #e8026a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWS1lEXFxuZXh0LmpzLWNkblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFd0IsQUFHOEMsQUFLZCxBQWNELEFBV1UsQUFJQSxBQUtXLEFBTVgsQUFLQyxBQUlKLEFBTUksQUFLRixVQTdDSCxDQWRILE1BNkNiLEFBSW9CLEVBV1ksQ0FuQ0EsQUFJRyxBQVdKLElBdkNiLENBTHZCLENBbUI4QixLQW1CTCxNQWdCSyxFQXREN0IsR0FNaUIsUUFxREMsQ0F2Q0ssQUFtQlYsQUFNYixBQW9CQSxDQW5DQSxHQUlBLEtBT0QsRUFlQSxFQUtBLE1BeENzQixBQW9CckIsRUFlQSxlQWxDa0IsY0FFd0IsR0FxQzFDLFlBdEQyQixtREFrQjNCLGdEQWpCdUIsNkZBQ0Qsa0JBQ1YsUUFDQyxTQUN1Qix5R0FFUCx5QkFDN0IiLCJmaWxlIjoiRDpcXFZLWURcXG5leHQuanMtY2RuXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBOYW1pbmcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MQ0ZSOiBWS1lEJ3dpY2szZCBDRE48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkxDRlI6IFZLWUQnd2ljazNkIENETlwiIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgU2t5d2Fsa2VyIERldmVsb3BlciBGcmVlbGFuY2VyIFdlYnNpdGUgV2ViIERldmVsb3BtZW50IFByb2dyYW1taW5nIEVuZ2luZWVyaW5nIEltYWdpbmVlciBOZXcgRGVsaGkgQ29kaW5nIFVYIFVJIFNhbnNrcml0aSBTY2hvb2wgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwia2V5d29yZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGFjdCBtZXRhICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgwrcgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwiYXV0aG9yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVktZRFwiIHJlbD1cIm1lXCIgdHlwZT1cInRleHQvaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwibWFpbHRvOnZreWRjbG90aGluZ0BnbWFpbC5jb21cIiByZWw9XCJtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBCcm93c2VyIGNvbmZpZyBtZXRhICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInV0Zi04XCIgbmFtZT1cImNoYXJzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiRW5nbGlzaFwiIG5hbWU9XCJsYW5ndWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiIzAwMDAwMFwiIG5hbWU9XCJ0aGVtZS1jb2xvclwiIG1ldGE9XCJtZXRhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCIjZTgwMjZhXCIgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT3BlbiBHcmFwaCB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndlYnNpdGVcIiBwcm9wZXJ0eT1cIm9nOnR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vdmt5ZC5pblwiIHByb3BlcnR5PVwib2c6dXJsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJMQ0ZSOiBWS1lEJ3dpY2szZCBDRE5cIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJIaSwgSSdtIEtyaXNoISBBIHRlY2hub3BoaWxlIGFuZCBhbiBlbmdpbmVlcmluZyBzdHVkZW50IGZyb20gTmV3IERlbGhpLiBJIGFzcGlyZSB0byBkZXZlbG9wIOKAmHNtYXJ0ZXLigJkgZW5lcmd5IHNvdXJjZXMgd2l0aCB0aGUgbGluZXMgSSB0eXBlLlwiIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIHNyYz1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy9tZXRhLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiZW5fVVNcIiBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwic3VtbWFyeVwiIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHA6Ly93d3cudmt5ZC5pblwiIG5hbWU9XCJ0d2l0dGVyOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiTENGUjogVktZRCd3aWNrM2QgQ0ROXCIgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkhpLCBJJ20gS3Jpc2ghIEEgdGVjaG5vcGhpbGUgYW5kIGFuIGVuZ2luZWVyaW5nIHN0dWRlbnQgZnJvbSBOZXcgRGVsaGkuIEkgYXNwaXJlIHRvIGRldmVsb3Ag4oCYc21hcnRlcuKAmSBlbmVyZ3kgc291cmNlcyB3aXRoIHRoZSBsaW5lcyBJIHR5cGUuXCIgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy90d2l0dGVyX21ldGEucG5nXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJY29ucyAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9mYXZpY29uLnBuZ1wiIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE4MHgxODBcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE1MngxNTJcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgcmVsPVwibWFzay1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxDRlI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZLWUQncyB3aWNrM2QgQ0ROPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICBDaGVjayB1cyBvdXQgYXQgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmt5ZC5pblwiPnZreWQuaW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdWItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAxNnB4IDAgIzAwMDAwMDg4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04cHggLThweCAxMnB4IDAgIzQ0NDQ0NDU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQbGF0ZWlhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL1BsYXRlaWEtQm9sZC50dGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjM1NXJlbSArIDZ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBsYXRlaWE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMXJlbSArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzVweCAwcHggNTBweCAwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U4MDI2YTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\VKYD\\\\next.js-cdn\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixTQUNJO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTmFtaW5nIG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TENGUjogVktZRCd3aWNrM2QgQ0ROPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJMQ0ZSOiBWS1lEJ3dpY2szZCBDRE5cIiBuYW1lPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkhpLCBJJ20gS3Jpc2ghIEEgdGVjaG5vcGhpbGUgYW5kIGFuIGVuZ2luZWVyaW5nIHN0dWRlbnQgZnJvbSBOZXcgRGVsaGkuIEkgYXNwaXJlIHRvIGRldmVsb3Ag4oCYc21hcnRlcuKAmSBlbmVyZ3kgc291cmNlcyB3aXRoIHRoZSBsaW5lcyBJIHR5cGUuXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJLcmlzaCBHb2VsIFNreXdhbGtlciBEZXZlbG9wZXIgRnJlZWxhbmNlciBXZWJzaXRlIFdlYiBEZXZlbG9wbWVudCBQcm9ncmFtbWluZyBFbmdpbmVlcmluZyBJbWFnaW5lZXIgTmV3IERlbGhpIENvZGluZyBVWCBVSSBTYW5za3JpdGkgU2Nob29sIEtyaXNoU2t5d2Fsa2VyXCIgbmFtZT1cImtleXdvcmRzXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRhY3QgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJLcmlzaCBHb2VsIMK3IEtyaXNoU2t5d2Fsa2VyXCIgbmFtZT1cImF1dGhvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZLWURcIiByZWw9XCJtZVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIm1haWx0bzp2a3lkY2xvdGhpbmdAZ21haWwuY29tXCIgcmVsPVwibWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQnJvd3NlciBjb25maWcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ1dGYtOFwiIG5hbWU9XCJjaGFyc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm9cIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkVuZ2xpc2hcIiBuYW1lPVwibGFuZ3VhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiMwMDAwMDBcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiI2U4MDI2YVwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQuaW5cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiTENGUjogVktZRCd3aWNrM2QgQ0ROXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBzcmM9XCJodHRwczovL3ZreWQtbmV4dC1qcy1jZG4udmVyY2VsLmFwcC9pbWFnZXMvbWV0YS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImVuX1VTXCIgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogVHdpdHRlciB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInN1bW1hcnlcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwOi8vd3d3LnZreWQuaW5cIiBuYW1lPVwidHdpdHRlcjp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkxDRlI6IFZLWUQnd2ljazNkIENETlwiIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJIaSwgSSdtIEtyaXNoISBBIHRlY2hub3BoaWxlIGFuZCBhbiBlbmdpbmVlcmluZyBzdHVkZW50IGZyb20gTmV3IERlbGhpLiBJIGFzcGlyZSB0byBkZXZlbG9wIOKAmHNtYXJ0ZXLigJkgZW5lcmd5IHNvdXJjZXMgd2l0aCB0aGUgbGluZXMgSSB0eXBlLlwiIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQtbmV4dC1qcy1jZG4udmVyY2VsLmFwcC9pbWFnZXMvdHdpdHRlcl9tZXRhLnBuZ1wiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIHJlbD1cIm1hc2staWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5MQ0ZSPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5WS1lEJ3Mgd2ljazNkIENETjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZreWQuaW5cIj52a3lkLmluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMTZweCAwICMwMDAwMDA4OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTJweCAwICM0NDQ0NDQ1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9QbGF0ZWlhLUJvbGQudHRmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMS4zNTVyZW0gKyA2dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQbGF0ZWlhO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjFyZW0gKyAwLjN2dyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDIgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDM1cHggMHB4IDUwcHggMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4MDI2YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=