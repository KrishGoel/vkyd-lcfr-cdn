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
var _jsxFileName = "D:\\VKYD\\lcfr-cdn\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Index = () => {
  const title = "LCFR: VKYD's wick3d CDN";
  const description = "LCFR (/ˈluːsɪfə(r)/) is VKYD's wick3d CDN built using Next.JS deployed on Vercel";
  const keywords = "LCFR Lucifer VKYD Streetwear Akshaj Sharma Krish Goel Amartya Chakraborty Delhi Shopping";
  return __jsx("div", {
    className: "jsx-3627698504" + " " + "container",
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
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title), __jsx("meta", {
    content: title,
    name: "title",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "description",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: keywords,
    name: "keywords",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "author",
    className: "jsx-3627698504",
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
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "mailto:vkydclothing@gmail.com",
    rel: "me",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "utf-8",
    name: "charset",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "text/html; charset=utf-8",
    "http-equiv": "Content-Type",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "width=device-width,initial-scale=1,user-scalable=no",
    name: "viewport",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "English",
    name: "language",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("base", {
    href: "/",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#1D2022",
    name: "theme-color",
    meta: "meta",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#1D2022",
    name: "msapplication-TileColor",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "website",
    property: "og:type",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://lcfr.vkyd.in",
    property: "og:url",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    property: "og:title",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    property: "og:description",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    src: "https://lcfr.vkyd.in/icons/seo/lcfr/meta.png",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "en_US",
    property: "og:locale",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "summary",
    name: "twitter:card",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "http://www.vkyd.in",
    name: "twitter:url",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    name: "twitter:title",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "twitter:description",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://lcfr.vkyd.in/icons/seo/lcfr/twitter_meta.png",
    name: "twitter:image",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/favicon.png",
    rel: "shortcut icon",
    type: "image/png",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/favicon.png",
    rel: "icon",
    type: "image/png",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-180x180.png",
    rel: "icon",
    sizes: "180x180",
    type: "image/png",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-152x152.png",
    rel: "icon",
    sizes: "152x152",
    type: "image/png",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/safari-pinned-tab.svg",
    rel: "mask-icon",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon.png",
    rel: "apple-touch-icon",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-57x57.png",
    rel: "apple-touch-icon",
    sizes: "57x57",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-72x72.png",
    rel: "apple-touch-icon",
    sizes: "72x72",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-76x76.png",
    rel: "apple-touch-icon",
    sizes: "76x76",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-114x114.png",
    rel: "apple-touch-icon",
    sizes: "114x114",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-120x120.png",
    rel: "apple-touch-icon",
    sizes: "120x120",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-144x144.png",
    rel: "apple-touch-icon",
    sizes: "144x144",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-152x152.png",
    rel: "apple-touch-icon",
    sizes: "152x152",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/seo/lcfr/apple-touch-icon-180x180.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3627698504" + " " + "sub-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/logos/lcfr-logo.svg",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("h2", {
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "VKYD's wick3d CDN"), __jsx("h3", {
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Check us out at \xA0", __jsx("a", {
    href: "https://vkyd.in",
    className: "jsx-3627698504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "vkyd.in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3627698504",
    __self: undefined
  }, "@font-face{font-family:Poppins;src:url(fonts/Poppins-Regular.ttf);}.jsx-3627698504::selection{background-color:#ffffff;color:#e8026a;}.container.jsx-3627698504{width:100%;height:120vh;text-align:center;text-align:-webkit-center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#1D2022;}.sub-container.jsx-3627698504{text-align:-webkit-center;width:60%;max-width:500px;background:linear-gradient(266.6deg,#1F2224 46.48%,#1A1D1F 61.97%);border-radius:20px;padding:40px 40px;color:#aaaaaa;box-shadow:14px 14px 50px 10px #0C0D0E,inset 14px 14px 10px rgba(46,51,54,0.2);}img.jsx-3627698504{width:100%;}h2.jsx-3627698504{font-family:Poppins;font-size:calc(1.1rem + 0.3vw);}@media (min-width:1200px){h2.jsx-3627698504 a.jsx-3627698504{font-size:1.5rem;}}h3.jsx-3627698504{font-size:1.2rem;font-family:Poppins;margin:0px;padding:0;}a.jsx-3627698504{-webkit-text-decoration:none;text-decoration:none;color:#e8026a;-webkit-transition:0.2s;transition:0.2s;}a.jsx-3627698504:hover{padding-bottom:5px;border-bottom:2px solid #e8026a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWS1lEXFxsY2ZyLWNkblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFd0IsQUFHOEMsQUFLZCxBQWNlLEFBV04sQUFNekIsQUFHeUIsQUFLQyxBQUlKLEFBTUksQUFLRixXQXJETixBQThCakIsTUFTSSxBQUlvQixFQVdZLENBN0JHLEFBU0osSUFqQ2IsQ0FMdkIsQ0FrQmUsVUFDTSxDQTZCTCxFQWhEZixHQU04QixNQTRDL0IsRUFHbUIsQ0FkbEIsQUFvQkEsQ0F2Q3lFLEdBVXpFLEdBb0JBLE1BS0QsSUFoRGtCLG9DQWdEakIsZUFsQ3VCLG1CQUNELElBZEssY0FlVCxjQUNxRSx1RUFmaEUsUUFnQnZCLHFGQWZzQixrQkFDVixRQUNDLFNBQ3VCLHlHQUNQLHlCQUM3QiIsImZpbGUiOiJEOlxcVktZRFxcbGNmci1jZG5cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gXCJMQ0ZSOiBWS1lEJ3Mgd2ljazNkIENETlwiO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBcIkxDRlIgKC/LiGx1y5BzyapmyZkocikvKSBpcyBWS1lEJ3Mgd2ljazNkIENETiBidWlsdCB1c2luZyBOZXh0LkpTIGRlcGxveWVkIG9uIFZlcmNlbFwiO1xyXG4gICAgY29uc3Qga2V5d29yZHMgPSBcIkxDRlIgTHVjaWZlciBWS1lEIFN0cmVldHdlYXIgQWtzaGFqIFNoYXJtYSBLcmlzaCBHb2VsIEFtYXJ0eWEgQ2hha3JhYm9ydHkgRGVsaGkgU2hvcHBpbmdcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBOYW1pbmcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtrZXl3b3Jkc30gbmFtZT1cImtleXdvcmRzXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRhY3QgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJLcmlzaCBHb2VsIMK3IEtyaXNoU2t5d2Fsa2VyXCIgbmFtZT1cImF1dGhvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZLWURcIiByZWw9XCJtZVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIm1haWx0bzp2a3lkY2xvdGhpbmdAZ21haWwuY29tXCIgcmVsPVwibWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQnJvd3NlciBjb25maWcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ1dGYtOFwiIG5hbWU9XCJjaGFyc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm9cIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkVuZ2xpc2hcIiBuYW1lPVwibGFuZ3VhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiMxRDIwMjJcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiIzFEMjAyMlwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL2xjZnIudmt5ZC5pblwiIHByb3BlcnR5PVwib2c6dXJsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBzcmM9XCJodHRwczovL2xjZnIudmt5ZC5pbi9pY29ucy9zZW8vbGNmci9tZXRhLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiZW5fVVNcIiBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwic3VtbWFyeVwiIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHA6Ly93d3cudmt5ZC5pblwiIG5hbWU9XCJ0d2l0dGVyOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL2xjZnIudmt5ZC5pbi9pY29ucy9zZW8vbGNmci90d2l0dGVyX21ldGEucG5nXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJY29ucyAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9mYXZpY29uLnBuZ1wiIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE4MHgxODBcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE1MngxNTJcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgcmVsPVwibWFzay1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nb3MvbGNmci1sb2dvLnN2Z1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGgyPlZLWUQncyB3aWNrM2QgQ0ROPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICBDaGVjayB1cyBvdXQgYXQgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmt5ZC5pblwiPnZreWQuaW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjAyMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdWItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ni42ZGVnLCAjMUYyMjI0IDQ2LjQ4JSwgIzFBMUQxRiA2MS45NyUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDBweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDE0cHggMTRweCA1MHB4IDEwcHggIzBDMEQwRSwgaW5zZXQgMTRweCAxNHB4IDEwcHggcmdiYSg0NiwgNTEsIDU0LCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjFyZW0gKyAwLjN2dyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDIgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTgwMjZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\VKYD\\\\lcfr-cdn\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxLQUFLLEdBQUcseUJBQWQ7QUFDQSxRQUFNQyxXQUFXLEdBQUcsa0ZBQXBCO0FBQ0EsUUFBTUMsUUFB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QSxlQUZKLENBSEosQ0F4REo7QUFBQTtBQUFBO0FBQUEsMjZXQURKO0FBc0lILENBM0lEOztBQTZJZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMvSUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBcIkxDRlI6IFZLWUQncyB3aWNrM2QgQ0ROXCI7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFwiTENGUiAoL8uIbHXLkHPJqmbJmShyKS8pIGlzIFZLWUQncyB3aWNrM2QgQ0ROIGJ1aWx0IHVzaW5nIE5leHQuSlMgZGVwbG95ZWQgb24gVmVyY2VsXCI7XHJcbiAgICBjb25zdCBrZXl3b3JkcyA9IFwiTENGUiBMdWNpZmVyIFZLWUQgU3RyZWV0d2VhciBBa3NoYWogU2hhcm1hIEtyaXNoIEdvZWwgQW1hcnR5YSBDaGFrcmFib3J0eSBEZWxoaSBTaG9wcGluZ1wiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE5hbWluZyBtZXRhICovfVxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17dGl0bGV9IG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e2tleXdvcmRzfSBuYW1lPVwia2V5d29yZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGFjdCBtZXRhICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIktyaXNoIEdvZWwgwrcgS3Jpc2hTa3l3YWxrZXJcIiBuYW1lPVwiYXV0aG9yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVktZRFwiIHJlbD1cIm1lXCIgdHlwZT1cInRleHQvaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwibWFpbHRvOnZreWRjbG90aGluZ0BnbWFpbC5jb21cIiByZWw9XCJtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBCcm93c2VyIGNvbmZpZyBtZXRhICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInV0Zi04XCIgbmFtZT1cImNoYXJzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiRW5nbGlzaFwiIG5hbWU9XCJsYW5ndWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiIzFEMjAyMlwiIG5hbWU9XCJ0aGVtZS1jb2xvclwiIG1ldGE9XCJtZXRhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCIjMUQyMDIyXCIgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT3BlbiBHcmFwaCB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndlYnNpdGVcIiBwcm9wZXJ0eT1cIm9nOnR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vbGNmci52a3lkLmluXCIgcHJvcGVydHk9XCJvZzp1cmxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17dGl0bGV9IHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIHNyYz1cImh0dHBzOi8vbGNmci52a3lkLmluL2ljb25zL3Nlby9sY2ZyL21ldGEucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJlbl9VU1wiIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFR3aXR0ZXIgdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cDovL3d3dy52a3lkLmluXCIgbmFtZT1cInR3aXR0ZXI6dXJsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vbGNmci52a3lkLmluL2ljb25zL3Nlby9sY2ZyL3R3aXR0ZXJfbWV0YS5wbmdcIiBuYW1lPVwidHdpdHRlcjppbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEljb25zICovfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2Zhdmljb24ucG5nXCIgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nXCIgcmVsPVwiaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nXCIgcmVsPVwiaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiByZWw9XCJtYXNrLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjU3eDU3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Mng3MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2FwcGxlLXRvdWNoLWljb24tNzZ4NzYucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzZ4NzZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2FwcGxlLXRvdWNoLWljb24tMTIweDEyMC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2VvL2xjZnIvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9zZW8vbGNmci9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL3Nlby9sY2ZyL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvcy9sY2ZyLWxvZ28uc3ZnXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8aDI+VktZRCdzIHdpY2szZCBDRE48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrIHVzIG91dCBhdCAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92a3lkLmluXCI+dmt5ZC5pbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlODAyNmFcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyMDIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN1Yi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjY2LjZkZWcsICMxRjIyMjQgNDYuNDglLCAjMUExRDFGIDYxLjk3JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTRweCAxNHB4IDUwcHggMTBweCAjMEMwRDBFLCBpbnNldCAxNHB4IDE0cHggMTBweCByZ2JhKDQ2LCA1MSwgNTQsIDAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMXJlbSArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4MDI2YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=