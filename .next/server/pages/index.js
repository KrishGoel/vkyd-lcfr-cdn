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
    className: "jsx-4230653325" + " " + "container",
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
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "VKYD CDN"), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "title",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    name: "description",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel Skywalker Developer Freelancer Website Web Development Programming Engineering Imagineer New Delhi Coding UX UI Sanskriti School KrishSkywalker",
    name: "keywords",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "utf-8",
    name: "charset",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "text/html; charset=utf-8",
    "http-equiv": "Content-Type",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "width=device-width,initial-scale=1,user-scalable=no",
    name: "viewport",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "English",
    name: "language",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "author",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#8a7df2",
    name: "theme-color",
    meta: "meta",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#8a7df2",
    name: "msapplication-TileColor",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://github.com/KrishSkywalker",
    rel: "me",
    type: "text/html",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "mailto:krishgoel3@gmail.com",
    rel: "me",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("base", {
    href: "/",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "website",
    property: "og:type",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://krishgoel.com",
    property: "og:url",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    property: "og:title",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    property: "og:description",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    src: "https://krishgoel.vercel.app/images/meta.png",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "en_US",
    property: "og:locale",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "summary",
    name: "twitter:card",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "http://www.krishgoel.com",
    name: "twitter:url",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "twitter:title",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop \u2018smarter\u2019 energy sources with the lines I type.",
    name: "twitter:description",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://krishgoel.vercel.app/images/twitter_meta.png",
    name: "twitter:image",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "shortcut icon",
    type: "image/png",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "icon",
    type: "image/png",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "icon",
    sizes: "180x180",
    type: "image/png",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "icon",
    sizes: "152x152",
    type: "image/png",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/safari-pinned-tab.svg",
    rel: "mask-icon",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-57x57.png",
    rel: "apple-touch-icon",
    sizes: "57x57",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-72x72.png",
    rel: "apple-touch-icon",
    sizes: "72x72",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-76x76.png",
    rel: "apple-touch-icon",
    sizes: "76x76",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-114x114.png",
    rel: "apple-touch-icon",
    sizes: "114x114",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-120x120.png",
    rel: "apple-touch-icon",
    sizes: "120x120",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-144x144.png",
    rel: "apple-touch-icon",
    sizes: "144x144",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "apple-touch-icon",
    sizes: "152x152",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("h1", {
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "VKYD"), __jsx("h2", {
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Pseduo-CDN", __jsx("br", {
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }), "Check us out at \xA0", __jsx("a", {
    href: "https://vkyd.in",
    className: "jsx-4230653325",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "vkyd.in")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4230653325",
    __self: undefined
  }, "@font-face{font-family:Plateia;src:url(fonts/Plateia-Bold.ttf);}@font-face{font-family:Poppins;src:url(fonts/Poppins-Regular.ttf);}.container.jsx-4230653325{text-align:center;margin-top:100px;}h1.jsx-4230653325{font-size:calc(1.355rem + 6vw);font-family:Plateia;}h2.jsx-4230653325{font-size:1.2rem;font-family:Poppins;}a.jsx-4230653325{-webkit-text-decoration:none;text-decoration:none;color:#e8026a;-webkit-transition:0.2s;transition:0.2s;}a.jsx-4230653325:hover{padding-bottom:5px;border-bottom:2px solid #e8026a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWS1lEXFxuZXh0LmpzLWNkblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHdUMsQUFLRSxBQUlBLEFBS1csQUFJZCxBQUlJLEFBS0YsaUJBUkMsQ0FqQnpCLENBMEJxQyxDQXRCQSxBQUlHLFdBS2YsSUFieEIsRUFrQkEsYUFHa0IsQ0FQbEIsQUFhQSxDQXRCQSxHQUlBLFNBY0Qsd0NBQUMiLCJmaWxlIjoiRDpcXFZLWURcXG5leHQuanMtY2RuXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlZLWUQgQ0ROPC90aXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgU2t5d2Fsa2VyIERldmVsb3BlciBGcmVlbGFuY2VyIFdlYnNpdGUgV2ViIERldmVsb3BtZW50IFByb2dyYW1taW5nIEVuZ2luZWVyaW5nIEltYWdpbmVlciBOZXcgRGVsaGkgQ29kaW5nIFVYIFVJIFNhbnNrcml0aSBTY2hvb2wgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwia2V5d29yZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInV0Zi04XCIgbmFtZT1cImNoYXJzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiRW5nbGlzaFwiIG5hbWU9XCJsYW5ndWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJhdXRob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiM4YTdkZjJcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiIzhhN2RmMlwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0tyaXNoU2t5d2Fsa2VyXCIgcmVsPVwibWVcIiB0eXBlPVwidGV4dC9odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJtYWlsdG86a3Jpc2hnb2VsM0BnbWFpbC5jb21cIiByZWw9XCJtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL2tyaXNoZ29lbC5jb21cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkhpLCBJJ20gS3Jpc2ghIEEgdGVjaG5vcGhpbGUgYW5kIGFuIGVuZ2luZWVyaW5nIHN0dWRlbnQgZnJvbSBOZXcgRGVsaGkuIEkgYXNwaXJlIHRvIGRldmVsb3Ag4oCYc21hcnRlcuKAmSBlbmVyZ3kgc291cmNlcyB3aXRoIHRoZSBsaW5lcyBJIHR5cGUuXCIgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgc3JjPVwiaHR0cHM6Ly9rcmlzaGdvZWwudmVyY2VsLmFwcC9pbWFnZXMvbWV0YS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImVuX1VTXCIgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogVHdpdHRlciB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInN1bW1hcnlcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwOi8vd3d3LmtyaXNoZ29lbC5jb21cIiBuYW1lPVwidHdpdHRlcjp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgwrcgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cHM6Ly9rcmlzaGdvZWwudmVyY2VsLmFwcC9pbWFnZXMvdHdpdHRlcl9tZXRhLnBuZ1wiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIHJlbD1cIm1hc2staWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aDE+VktZRDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIFBzZWR1by1DRE5cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmt5ZC5pblwiPnZreWQuaW48L2E+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9QbGF0ZWlhLUJvbGQudHRmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMS4zNTVyZW0gKyA2dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQbGF0ZWlhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\VKYD\\\\next.js-cdn\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixTQUNJO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlZLWUQgQ0ROPC90aXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgU2t5d2Fsa2VyIERldmVsb3BlciBGcmVlbGFuY2VyIFdlYnNpdGUgV2ViIERldmVsb3BtZW50IFByb2dyYW1taW5nIEVuZ2luZWVyaW5nIEltYWdpbmVlciBOZXcgRGVsaGkgQ29kaW5nIFVYIFVJIFNhbnNrcml0aSBTY2hvb2wgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwia2V5d29yZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInV0Zi04XCIgbmFtZT1cImNoYXJzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiRW5nbGlzaFwiIG5hbWU9XCJsYW5ndWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJhdXRob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiM4YTdkZjJcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiIzhhN2RmMlwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0tyaXNoU2t5d2Fsa2VyXCIgcmVsPVwibWVcIiB0eXBlPVwidGV4dC9odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJtYWlsdG86a3Jpc2hnb2VsM0BnbWFpbC5jb21cIiByZWw9XCJtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL2tyaXNoZ29lbC5jb21cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkhpLCBJJ20gS3Jpc2ghIEEgdGVjaG5vcGhpbGUgYW5kIGFuIGVuZ2luZWVyaW5nIHN0dWRlbnQgZnJvbSBOZXcgRGVsaGkuIEkgYXNwaXJlIHRvIGRldmVsb3Ag4oCYc21hcnRlcuKAmSBlbmVyZ3kgc291cmNlcyB3aXRoIHRoZSBsaW5lcyBJIHR5cGUuXCIgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgc3JjPVwiaHR0cHM6Ly9rcmlzaGdvZWwudmVyY2VsLmFwcC9pbWFnZXMvbWV0YS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImVuX1VTXCIgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogVHdpdHRlciB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInN1bW1hcnlcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwOi8vd3d3LmtyaXNoZ29lbC5jb21cIiBuYW1lPVwidHdpdHRlcjp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgwrcgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIiBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cHM6Ly9rcmlzaGdvZWwudmVyY2VsLmFwcC9pbWFnZXMvdHdpdHRlcl9tZXRhLnBuZ1wiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIHJlbD1cIm1hc2staWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aDE+VktZRDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIFBzZWR1by1DRE5cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmt5ZC5pblwiPnZreWQuaW48L2E+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9QbGF0ZWlhLUJvbGQudHRmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMS4zNTVyZW0gKyA2dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQbGF0ZWlhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9