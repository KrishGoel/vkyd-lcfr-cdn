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
    className: "jsx-1824475112" + " " + "container",
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
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title), __jsx("meta", {
    content: title,
    name: "title",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "description",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: keywords,
    name: "keywords",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "Krish Goel \xB7 KrishSkywalker",
    name: "author",
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "mailto:vkydclothing@gmail.com",
    rel: "me",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "utf-8",
    name: "charset",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "text/html; charset=utf-8",
    "http-equiv": "Content-Type",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "width=device-width,initial-scale=1,user-scalable=no",
    name: "viewport",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "English",
    name: "language",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("base", {
    href: "/",
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#e8026a",
    name: "msapplication-TileColor",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "website",
    property: "og:type",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd.in",
    property: "og:url",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    property: "og:title",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    property: "og:description",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    src: "https://vkyd-next-js-cdn.vercel.app/images/meta.png",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "en_US",
    property: "og:locale",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "summary",
    name: "twitter:card",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "http://www.vkyd.in",
    name: "twitter:url",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: title,
    name: "twitter:title",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: description,
    name: "twitter:description",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://vkyd-next-js-cdn.vercel.app/images/twitter_meta.png",
    name: "twitter:image",
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/safari-pinned-tab.svg",
    rel: "mask-icon",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "/icons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
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
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1824475112" + " " + "sub-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/logo.svg",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("h2", {
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "VKYD's wick3d CDN"), __jsx("h3", {
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Check us out at \xA0", __jsx("a", {
    href: "https://vkyd.in",
    className: "jsx-1824475112",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "vkyd.in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1824475112",
    __self: undefined
  }, "@font-face{font-family:Poppins;src:url(fonts/Poppins-Regular.ttf);}.jsx-1824475112::selection{background-color:#000000;color:#dddddd;}.container.jsx-1824475112{width:100%;height:120vh;text-align:center;text-align:-webkit-center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#333333;}.sub-container.jsx-1824475112{text-align:-webkit-center;width:60%;max-width:500px;background-color:#333333;border-radius:20px;padding:40px 40px;color:#aaaaaa;box-shadow:12px 12px 16px 0 #00000088, -8px -8px 12px 0 #4242424f;}img.jsx-1824475112{width:100%;}h2.jsx-1824475112{font-family:Poppins;font-size:calc(1.1rem + 0.3vw);}@media (min-width:1200px){h2.jsx-1824475112 a.jsx-1824475112{font-size:1.5rem;}}h3.jsx-1824475112{font-size:1.2rem;font-family:Poppins;margin:0px;padding:0;}a.jsx-1824475112{-webkit-text-decoration:none;text-decoration:none;color:#e8026a;-webkit-transition:0.2s;transition:0.2s;}a.jsx-1824475112:hover{padding-bottom:5px;border-bottom:2px solid #e8026a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWS1lEXFxuZXh0LmpzLWNkblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFd0IsQUFHOEMsQUFLZCxBQWVlLEFBWU4sQUFNekIsQUFHeUIsQUFLQyxBQUlKLEFBTUksQUFLRixXQXZETixBQWdDakIsTUFTSSxBQUlvQixFQVdZLENBN0JHLEFBU0osSUFuQ2IsQ0FMdkIsQ0FtQmUsVUFDTSxDQThCTCxFQWxEZixHQU04QixNQThDL0IsRUFHbUIsQ0FkbEIsQUFvQkEsQ0F4QzZCLEdBVzdCLEdBb0JBLE1BS0QsSUFsRGtCLFNBZU0sbUJBQ0QsUUFrQ3RCLFVBakNrQixjQUV3QixjQWxCZixvREFtQjNCLCtDQWxCdUIsNkZBQ0Qsa0JBQ1YsUUFDQyxTQUN1Qix5R0FFUCx5QkFDN0IiLCJmaWxlIjoiRDpcXFZLWURcXG5leHQuanMtY2RuXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiTENGUjogVktZRCdzIHdpY2szZCBDRE5cIjtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gXCJIaSwgSSdtIEtyaXNoISBBIHRlY2hub3BoaWxlIGFuZCBhbiBlbmdpbmVlcmluZyBzdHVkZW50IGZyb20gTmV3IERlbGhpLiBJIGFzcGlyZSB0byBkZXZlbG9wIOKAmHNtYXJ0ZXLigJkgZW5lcmd5IHNvdXJjZXMgd2l0aCB0aGUgbGluZXMgSSB0eXBlLlwiO1xyXG4gICAgY29uc3Qga2V5d29yZHMgPSBcIktyaXNoIEdvZWwgU2t5d2Fsa2VyIERldmVsb3BlciBGcmVlbGFuY2VyIFdlYnNpdGUgV2ViIERldmVsb3BtZW50IFByb2dyYW1taW5nIEVuZ2luZWVyaW5nIEltYWdpbmVlciBOZXcgRGVsaGkgQ29kaW5nIFVYIFVJIFNhbnNrcml0aSBTY2hvb2wgS3Jpc2hTa3l3YWxrZXJcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBOYW1pbmcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtrZXl3b3Jkc30gbmFtZT1cImtleXdvcmRzXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRhY3QgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJLcmlzaCBHb2VsIMK3IEtyaXNoU2t5d2Fsa2VyXCIgbmFtZT1cImF1dGhvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZLWURcIiByZWw9XCJtZVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIm1haWx0bzp2a3lkY2xvdGhpbmdAZ21haWwuY29tXCIgcmVsPVwibWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQnJvd3NlciBjb25maWcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ1dGYtOFwiIG5hbWU9XCJjaGFyc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm9cIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkVuZ2xpc2hcIiBuYW1lPVwibGFuZ3VhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiMwMDAwMDBcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiI2U4MDI2YVwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQuaW5cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gcHJvcGVydHk9XCJvZzp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgc3JjPVwiaHR0cHM6Ly92a3lkLW5leHQtanMtY2RuLnZlcmNlbC5hcHAvaW1hZ2VzL21ldGEucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJlbl9VU1wiIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFR3aXR0ZXIgdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cDovL3d3dy52a3lkLmluXCIgbmFtZT1cInR3aXR0ZXI6dXJsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy90d2l0dGVyX21ldGEucG5nXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJY29ucyAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9mYXZpY29uLnBuZ1wiIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE4MHgxODBcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE1MngxNTJcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgcmVsPVwibWFzay1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxoMj5WS1lEJ3Mgd2ljazNkIENETjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZreWQuaW5cIj52a3lkLmluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDE2cHggMCAjMDAwMDAwODgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLThweCAtOHB4IDEycHggMCAjNDI0MjQyNGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMXJlbSArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4MDI2YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=D:\\\\VKYD\\\\next.js-cdn\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxLQUFLLEdBQUcseUJBQWQ7QUFDQSxRQUFNQyxXQUFXLEdBQUcsNklBQXBCO0FBQ0EsUUFBTUMsUUFB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LGVBRkosQ0FISixDQXhESjtBQUFBO0FBQUE7QUFBQSwyM1dBREo7QUF3SUgsQ0E3SUQ7O0FBK0llRixvRUFBZixFOzs7Ozs7Ozs7OztBQ2pKQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiTENGUjogVktZRCdzIHdpY2szZCBDRE5cIjtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gXCJIaSwgSSdtIEtyaXNoISBBIHRlY2hub3BoaWxlIGFuZCBhbiBlbmdpbmVlcmluZyBzdHVkZW50IGZyb20gTmV3IERlbGhpLiBJIGFzcGlyZSB0byBkZXZlbG9wIOKAmHNtYXJ0ZXLigJkgZW5lcmd5IHNvdXJjZXMgd2l0aCB0aGUgbGluZXMgSSB0eXBlLlwiO1xyXG4gICAgY29uc3Qga2V5d29yZHMgPSBcIktyaXNoIEdvZWwgU2t5d2Fsa2VyIERldmVsb3BlciBGcmVlbGFuY2VyIFdlYnNpdGUgV2ViIERldmVsb3BtZW50IFByb2dyYW1taW5nIEVuZ2luZWVyaW5nIEltYWdpbmVlciBOZXcgRGVsaGkgQ29kaW5nIFVYIFVJIFNhbnNrcml0aSBTY2hvb2wgS3Jpc2hTa3l3YWxrZXJcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBOYW1pbmcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtrZXl3b3Jkc30gbmFtZT1cImtleXdvcmRzXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRhY3QgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJLcmlzaCBHb2VsIMK3IEtyaXNoU2t5d2Fsa2VyXCIgbmFtZT1cImF1dGhvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZLWURcIiByZWw9XCJtZVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIm1haWx0bzp2a3lkY2xvdGhpbmdAZ21haWwuY29tXCIgcmVsPVwibWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQnJvd3NlciBjb25maWcgbWV0YSAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ1dGYtOFwiIG5hbWU9XCJjaGFyc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm9cIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIkVuZ2xpc2hcIiBuYW1lPVwibGFuZ3VhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiMwMDAwMDBcIiBuYW1lPVwidGhlbWUtY29sb3JcIiBtZXRhPVwibWV0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiI2U4MDI2YVwiIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3ZreWQuaW5cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXt0aXRsZX0gcHJvcGVydHk9XCJvZzp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgc3JjPVwiaHR0cHM6Ly92a3lkLW5leHQtanMtY2RuLnZlcmNlbC5hcHAvaW1hZ2VzL21ldGEucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJlbl9VU1wiIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFR3aXR0ZXIgdGFncyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaHR0cDovL3d3dy52a3lkLmluXCIgbmFtZT1cInR3aXR0ZXI6dXJsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PXtkZXNjcmlwdGlvbn0gbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vdmt5ZC1uZXh0LWpzLWNkbi52ZXJjZWwuYXBwL2ltYWdlcy90d2l0dGVyX21ldGEucG5nXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJY29ucyAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9mYXZpY29uLnBuZ1wiIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE4MHgxODBcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImljb25cIiBzaXplcz1cIjE1MngxNTJcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgcmVsPVwibWFzay1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL2ljb25zL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZ1wiIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9pY29ucy9hcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxoMj5WS1lEJ3Mgd2ljazNkIENETjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgdXMgb3V0IGF0ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZreWQuaW5cIj52a3lkLmluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDE2cHggMCAjMDAwMDAwODgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLThweCAtOHB4IDEycHggMCAjNDI0MjQyNGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuMXJlbSArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlODAyNmE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4MDI2YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=