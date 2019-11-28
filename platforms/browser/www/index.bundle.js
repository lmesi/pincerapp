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
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/App.js":
/*!***********************!*\
  !*** ./www/js/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//App :: Oldalak elérési mappája
var root = "pages/";

//App :: Oldalak tulajdonságai (props)
var PAGES = {
  home: {
    title: 'Ajánlások',
    slug: 'home',
    path: root + 'home.html'
  },

  favourites: {
    title: 'Kedvencek',
    slug: 'favourites',
    path: root + 'favourites.html'
  },

  blank: {
    title: 'Üres oldal',
    slug: 'blank',
    path: root + 'blank.html'
  },

  food: {
    title: 'Étel',
    slug: 'food',
    path: root + 'food.html'
  },

  login: {
    title: 'Bejelentkezés',
    slug: 'login',
    path: root + 'login.html'
  },

  register: {
    title: 'Regisztráció',
    slug: 'register',
    path: root + 'register.html'
  },

  tutorial: {
    title: 'Ismertető',
    slug: 'tutorial',
    path: root + 'tutorial.html'
  },

  userpage: {
    title: 'Profilom',
    slug: 'userpage',
    path: root + 'userpage.html'
  }
};

var isRegistered = false;
var isLoggedIn = false;

function getFood(param1) {
  var param2 = "A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.";
  var param3 = "https://images.tienda.com/is/image/LaTienda/mixed-seafood-paella?&wid=1087";
  Navigator.pushPage(PAGES.food.path, { data: { title: param1, details: param2, img: param3 } });
}

//App :: Konstruktor
var app = {
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    this.receivedEvent('deviceready');

    document.querySelector("#openCameraButton").addEventListener('click', toggleScannerView);
    document.querySelector("#closeCameraButton").addEventListener('click', toggleScannerView);
  
    document.querySelector("#openFavourites").addEventListener('click', function () { 
      Navigator.bringPageTop(PAGES.favourites.path);
    });
  
    document.querySelector("#profileButton").addEventListener('click', function () { 
      Navigator.bringPageTop(PAGES.login.path);
    });
  },

  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    console.log('Received Event: ' + id);
  }
};

app.initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlMQUF5TDtBQUN6TDtBQUNBLHVDQUF1QyxRQUFRLDhDQUE4QyxFQUFFO0FBQy9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUY7QUFDQTtBQUNBLEtBQUs7O0FBRUwsb0Y7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUIiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3cvanMvQXBwLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vQXBwIDo6IE9sZGFsYWsgZWzDqXLDqXNpIG1hcHDDoWphXG52YXIgcm9vdCA9IFwicGFnZXMvXCI7XG5cbi8vQXBwIDo6IE9sZGFsYWsgdHVsYWpkb25zw6FnYWkgKHByb3BzKVxudmFyIFBBR0VTID0ge1xuICBob21lOiB7XG4gICAgdGl0bGU6ICdBasOhbmzDoXNvaycsXG4gICAgc2x1ZzogJ2hvbWUnLFxuICAgIHBhdGg6IHJvb3QgKyAnaG9tZS5odG1sJ1xuICB9LFxuXG4gIGZhdm91cml0ZXM6IHtcbiAgICB0aXRsZTogJ0tlZHZlbmNlaycsXG4gICAgc2x1ZzogJ2Zhdm91cml0ZXMnLFxuICAgIHBhdGg6IHJvb3QgKyAnZmF2b3VyaXRlcy5odG1sJ1xuICB9LFxuXG4gIGJsYW5rOiB7XG4gICAgdGl0bGU6ICfDnHJlcyBvbGRhbCcsXG4gICAgc2x1ZzogJ2JsYW5rJyxcbiAgICBwYXRoOiByb290ICsgJ2JsYW5rLmh0bWwnXG4gIH0sXG5cbiAgZm9vZDoge1xuICAgIHRpdGxlOiAnw4l0ZWwnLFxuICAgIHNsdWc6ICdmb29kJyxcbiAgICBwYXRoOiByb290ICsgJ2Zvb2QuaHRtbCdcbiAgfSxcblxuICBsb2dpbjoge1xuICAgIHRpdGxlOiAnQmVqZWxlbnRrZXrDqXMnLFxuICAgIHNsdWc6ICdsb2dpbicsXG4gICAgcGF0aDogcm9vdCArICdsb2dpbi5odG1sJ1xuICB9LFxuXG4gIHJlZ2lzdGVyOiB7XG4gICAgdGl0bGU6ICdSZWdpc3p0csOhY2nDsycsXG4gICAgc2x1ZzogJ3JlZ2lzdGVyJyxcbiAgICBwYXRoOiByb290ICsgJ3JlZ2lzdGVyLmh0bWwnXG4gIH0sXG5cbiAgdHV0b3JpYWw6IHtcbiAgICB0aXRsZTogJ0lzbWVydGV0xZEnLFxuICAgIHNsdWc6ICd0dXRvcmlhbCcsXG4gICAgcGF0aDogcm9vdCArICd0dXRvcmlhbC5odG1sJ1xuICB9LFxuXG4gIHVzZXJwYWdlOiB7XG4gICAgdGl0bGU6ICdQcm9maWxvbScsXG4gICAgc2x1ZzogJ3VzZXJwYWdlJyxcbiAgICBwYXRoOiByb290ICsgJ3VzZXJwYWdlLmh0bWwnXG4gIH1cbn07XG5cbnZhciBpc1JlZ2lzdGVyZWQgPSBmYWxzZTtcbnZhciBpc0xvZ2dlZEluID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldEZvb2QocGFyYW0xKSB7XG4gIHZhciBwYXJhbTIgPSBcIkEgTG9yZW0gSXBzdW0gZWd5IGVneXN6ZXLDuyBzesO2dmVncsOpc3psZXRlLCBzesO2dmVndXTDoW56YXRhIGEgYmV0w7tzemVkw7Ugw6lzIG55b21kYWlwYXJuYWsuIEEgTG9yZW0gSXBzdW0gYXogMTUwMC1hcyDDqXZlayDDs3RhIHN0YW5kYXJkIHN6w7Z2ZWdyw6lzemxldGvDqW50IHN6b2xnw6FsdCBheiBpcGFyYmFuOyBtaWtvciBlZ3kgaXNtZXJldGxlbiBueW9tZMOhc3ogw7Zzc3plw6FsbMOtdG90dGEgYSBiZXTDu2vDqXN6bGV0w6l0IMOpcyBlZ3kgcMOpbGRhLWvDtm55dmV0IHZhZ3kgc3rDtnZlZ2V0IG55b21vdHQgcGFww61ycmEsIGV6dCBoYXN6bsOhbHRhLiBOZW0gY3NhayA1IMOpdnN6w6F6YWRvdCDDqWx0IHTDumwsIGRlIGF6IGVsZWt0cm9uaWt1cyBiZXTDu2vDqXN6bGV0ZWtuw6lsIGlzIHbDoWx0b3phdGxhbnVsIG1lZ21hcmFkdC4gQXogMTk2MC1hcyDDqXZla2JlbiBuw6lwc3plcsO7c8OtdGV0dMOpayBhIExvcmVtIElwc3VtIHLDqXN6bGV0ZWtldCBtYWd1a2JhZm9nbGFsw7MgTGV0cmFzZXQgbGFwb2trYWwsIMOpcyBsZWd1dMOzYmIgc29mdHdhcmVra2VsIG1pbnQgcMOpbGTDoXVsIGF6IEFsZHVzIFBhZ2VtYWtlci5cIjtcbiAgdmFyIHBhcmFtMyA9IFwiaHR0cHM6Ly9pbWFnZXMudGllbmRhLmNvbS9pcy9pbWFnZS9MYVRpZW5kYS9taXhlZC1zZWFmb29kLXBhZWxsYT8md2lkPTEwODdcIjtcbiAgTmF2aWdhdG9yLnB1c2hQYWdlKFBBR0VTLmZvb2QucGF0aCwgeyBkYXRhOiB7IHRpdGxlOiBwYXJhbTEsIGRldGFpbHM6IHBhcmFtMiwgaW1nOiBwYXJhbTMgfSB9KTtcbn1cblxuLy9BcHAgOjogS29uc3RydWt0b3JcbnZhciBhcHAgPSB7XG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH0sXG5cbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3BlbkNhbWVyYUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNjYW5uZXJWaWV3KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQ2FtZXJhQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2Nhbm5lclZpZXcpO1xuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5GYXZvdXJpdGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBcbiAgICAgIE5hdmlnYXRvci5icmluZ1BhZ2VUb3AoUEFHRVMuZmF2b3VyaXRlcy5wYXRoKTtcbiAgICB9KTtcbiAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBcbiAgICAgIE5hdmlnYXRvci5icmluZ1BhZ2VUb3AoUEFHRVMubG9naW4ucGF0aCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVjZWl2ZWRFdmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIEV2ZW50OiAnICsgaWQpO1xuICB9XG59O1xuXG5hcHAuaW5pdGlhbGl6ZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=