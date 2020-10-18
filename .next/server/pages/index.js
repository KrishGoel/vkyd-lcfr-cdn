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
  const title = "LCFR: VKYD's wick3d CDN";
  const description = "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop ‘smarter’ energy sources with the lines I type.";
  const keywords = "Krish Goel Skywalker Developer Freelancer Website Web Development Programming Engineering Imagineer New Delhi Coding UX UI Sanskriti School KrishSkywalker";
  return __jsx("div", {
    className: "jsx-2803218458" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title), __jsx("meta", {
    content: title,
    name: "title",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "description",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: keywords,
    name: "keywords",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "author",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://github.com/VKYD",
    rel: "me",
    type: "text/html",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "mailto:vkydclothing@gmail.com",
    rel: "me",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "utf-8",
    name: "charset",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "text/html; charset=utf-8",
    "http-equiv": "Content-Type",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "width=device-width,initial-scale=1,user-scalable=no",
    name: "viewport",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "English",
    name: "language",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("base", {
    href: "/",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#000000",
    name: "theme-color",
    meta: "meta",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#e8026a",
    name: "msapplication-TileColor",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "website",
    property: "og:type",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd.in",
    property: "og:url",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    property: "og:title",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    property: "og:description",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    src: "https://vkyd-next-js-cdn.vercel.app/images/meta.png",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "en_US",
    property: "og:locale",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "summary",
    name: "twitter:card",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "http://www.vkyd.in",
    name: "twitter:url",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    name: "twitter:title",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "twitter:description",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd-next-js-cdn.vercel.app/images/twitter_meta.png",
    name: "twitter:image",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "shortcut icon",
    type: "image/png",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/favicon.png",
    rel: "icon",
    type: "image/png",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "icon",
    sizes: "180x180",
    type: "image/png",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "icon",
    sizes: "152x152",
    type: "image/png",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/safari-pinned-tab.svg",
    rel: "mask-icon",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-57x57.png",
    rel: "apple-touch-icon",
    sizes: "57x57",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-72x72.png",
    rel: "apple-touch-icon",
    sizes: "72x72",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-76x76.png",
    rel: "apple-touch-icon",
    sizes: "76x76",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-114x114.png",
    rel: "apple-touch-icon",
    sizes: "114x114",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-120x120.png",
    rel: "apple-touch-icon",
    sizes: "120x120",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-144x144.png",
    rel: "apple-touch-icon",
    sizes: "144x144",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-152x152.png",
    rel: "apple-touch-icon",
    sizes: "152x152",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon-180x180.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-2803218458" + " " + "sub-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "LCFR"), __jsx("h2", {
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "VKYD's wick3d CDN"), __jsx("h3", {
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Check us out at \xA0", __jsx("a", {
    href: "https://vkyd.in",
    className: "jsx-2803218458",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "vkyd.in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2803218458",
    __self: undefined
  }, "@font-face{font-family:Plateia;src:url(fonts/StretchPro.ttf);}@font-face{font-family:Poppins;src:url(fonts/Poppins-Regular.ttf);}.jsx-2803218458::selection{background-color:#000000;color:#dddddd;}.container.jsx-2803218458{width:100%;height:120vh;text-align:center;text-align:-webkit-center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#333333;}.sub-container.jsx-2803218458{text-align:-webkit-center;width:60%;max-width:500px;background-color:#333333;border-radius:20px;padding:0px 40px;color:#aaaaaa;box-shadow:12px 12px 16px 0 #00000088, -8px -8px 12px 0 #44444455;}h1.jsx-2803218458{font-size:calc(1.355rem + 6vw);font-family:Plateia;margin:0;padding:0;}h2.jsx-2803218458{font-family:Poppins;font-size:calc(1.1rem + 0.3vw);}@media (min-width:1200px){h2.jsx-2803218458 a.jsx-2803218458{font-size:1.5rem;}}h3.jsx-2803218458{font-size:1.2rem;font-family:Poppins;margin:35px 0px 50px 0px;padding:0;}a.jsx-2803218458{-webkit-text-decoration:none;text-decoration:none;color:#e8026a;-webkit-transition:0.2s;transition:0.2s;}a.jsx-2803218458:hover{padding-bottom:5px;border-bottom:2px solid #e8026a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWS1lEXFxuZXh0LmpzLWNkblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFd0IsQUFHOEMsQUFLZCxBQWVlLEFBWU4sQUFJQSxBQUtXLEFBTVgsQUFLQyxBQUlKLEFBTUksQUFLRixXQTdETixNQStDYixBQUlvQixFQVdZLENBbkNGLEFBSUssQUFXSixJQXpDYixDQUx2QixDQW1CZSxLQXFCVSxLQXBCSixDQW9DUyxFQXhEN0IsR0FNOEIsUUEwQjlCLEFBNkJrQixDQXBCTCxBQU1iLEFBb0JBLENBOUM2QixHQWU3QixLQU9ELEVBZUEsRUFLQSxJQXhEa0IsRUFvQ2pCLEVBZUEsS0FwQ3VCLG1CQUNGLFFBd0NyQixTQXZDa0IsY0FFd0IsZUFsQmYsbURBbUIzQixnREFsQnVCLDZGQUNELGtCQUNWLFFBQ0MsU0FDdUIseUdBRVAseUJBQzdCIiwiZmlsZSI6IkQ6XFxWS1lEXFxuZXh0LmpzLWNkblxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBcIkxDRlI6IFZLWUQncyB3aWNrM2QgQ0ROXCI7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIjtcclxuICAgIGNvbnN0IGtleXdvcmRzID0gXCJLcmlzaCBHb2VsIFNreXdhbGtlciBEZXZlbG9wZXIgRnJlZWxhbmNlciBXZWJzaXRlIFdlYiBEZXZlbG9wbWVudCBQcm9ncmFtbWluZyBFbmdpbmVlcmluZyBJbWFnaW5lZXIgTmV3IERlbGhpIENvZGluZyBVWCBVSSBTYW5za3JpdGkgU2Nob29sIEtyaXNoU2t5d2Fsa2VyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTmFtaW5nIG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gbmFtZT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17a2V5d29yZHN9IG5hbWU9XCJrZXl3b3Jkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBDb250YWN0IG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJhdXRob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WS1lEXCIgcmVsPVwibWVcIiB0eXBlPVwidGV4dC9odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJtYWlsdG86dmt5ZGNsb3RoaW5nQGdtYWlsLmNvbVwiIHJlbD1cIm1lXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEJyb3dzZXIgY29uZmlnIG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwidXRmLThcIiBuYW1lPVwiY2hhcnNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJFbmdsaXNoXCIgbmFtZT1cImxhbmd1YWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiYXNlIGhyZWY9XCIvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCIjMDAwMDAwXCIgbmFtZT1cInRoZW1lLWNvbG9yXCIgbWV0YT1cIm1ldGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiNlODAyNmFcIiBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPcGVuIEdyYXBoIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2Vic2l0ZVwiIHByb3BlcnR5PVwib2c6dHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cHM6Ly92a3lkLmluXCIgcHJvcGVydHk9XCJvZzp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17dGl0bGV9IHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIHNyYz1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy9tZXRhLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiZW5fVVNcIiBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwic3VtbWFyeVwiIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHA6Ly93d3cudmt5ZC5pblwiIG5hbWU9XCJ0d2l0dGVyOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQtbmV4dC1qcy1jZG4udmVyY2VsLmFwcC9pbWFnZXMvdHdpdHRlcl9tZXRhLnBuZ1wiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIHJlbD1cIm1hc2staWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5MQ0ZSPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5WS1lEJ3Mgd2ljazNkIENETjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZreWQuaW5cIj52a3lkLmluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMTZweCAwICMwMDAwMDA4OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTJweCAwICM0NDQ0NDQ1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9TdHJldGNoUHJvLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMzU1cmVtICsgNnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMS4xcmVtICsgMC4zdncpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGgyIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDBweCA1MHB4IDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\VKYD\\\\next.js-cdn\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxLQUFLLEdBQUcseUJBQWQ7QUFDQSxRQUFNQyxXQUFXLEdBQUcsNklBQXBCO0FBQ0EsUUFBTUMsUUFB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QTtBQUFBO0FBQUEsZzVYQURKO0FBOElILENBbkpEOztBQXFKZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2SkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBcIkxDRlI6IFZLWUQncyB3aWNrM2QgQ0ROXCI7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFwiSGksIEknbSBLcmlzaCEgQSB0ZWNobm9waGlsZSBhbmQgYW4gZW5naW5lZXJpbmcgc3R1ZGVudCBmcm9tIE5ldyBEZWxoaS4gSSBhc3BpcmUgdG8gZGV2ZWxvcCDigJhzbWFydGVy4oCZIGVuZXJneSBzb3VyY2VzIHdpdGggdGhlIGxpbmVzIEkgdHlwZS5cIjtcclxuICAgIGNvbnN0IGtleXdvcmRzID0gXCJLcmlzaCBHb2VsIFNreXdhbGtlciBEZXZlbG9wZXIgRnJlZWxhbmNlciBXZWJzaXRlIFdlYiBEZXZlbG9wbWVudCBQcm9ncmFtbWluZyBFbmdpbmVlcmluZyBJbWFnaW5lZXIgTmV3IERlbGhpIENvZGluZyBVWCBVSSBTYW5za3JpdGkgU2Nob29sIEtyaXNoU2t5d2Fsa2VyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTmFtaW5nIG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gbmFtZT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17a2V5d29yZHN9IG5hbWU9XCJrZXl3b3Jkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBDb250YWN0IG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiS3Jpc2ggR29lbCDCtyBLcmlzaFNreXdhbGtlclwiIG5hbWU9XCJhdXRob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WS1lEXCIgcmVsPVwibWVcIiB0eXBlPVwidGV4dC9odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJtYWlsdG86dmt5ZGNsb3RoaW5nQGdtYWlsLmNvbVwiIHJlbD1cIm1lXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEJyb3dzZXIgY29uZmlnIG1ldGEgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwidXRmLThcIiBuYW1lPVwiY2hhcnNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJFbmdsaXNoXCIgbmFtZT1cImxhbmd1YWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiYXNlIGhyZWY9XCIvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCIjMDAwMDAwXCIgbmFtZT1cInRoZW1lLWNvbG9yXCIgbWV0YT1cIm1ldGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiNlODAyNmFcIiBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPcGVuIEdyYXBoIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2Vic2l0ZVwiIHByb3BlcnR5PVwib2c6dHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cHM6Ly92a3lkLmluXCIgcHJvcGVydHk9XCJvZzp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17dGl0bGV9IHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIHNyYz1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy9tZXRhLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiZW5fVVNcIiBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwic3VtbWFyeVwiIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHA6Ly93d3cudmt5ZC5pblwiIG5hbWU9XCJ0d2l0dGVyOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQtbmV4dC1qcy1jZG4udmVyY2VsLmFwcC9pbWFnZXMvdHdpdHRlcl9tZXRhLnBuZ1wiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIHJlbD1cIm1hc2staWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5MQ0ZSPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5WS1lEJ3Mgd2ljazNkIENETjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZreWQuaW5cIj52a3lkLmluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMTZweCAwICMwMDAwMDA4OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTJweCAwICM0NDQ0NDQ1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9TdHJldGNoUHJvLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChmb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMzU1cmVtICsgNnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUGxhdGVpYTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMS4xcmVtICsgMC4zdncpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGgyIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDBweCA1MHB4IDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9