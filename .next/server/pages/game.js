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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OzVs");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3gD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {
  children: `
* {
    margin: 0;
    padding: 0;
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#box_box {
    width: 100%;
    height: 100vh;
    display: flex;
    font-size: 14px;
}

#link_box {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
    color: #000
}

a:hover {
    background-color: #ccc
}

#main_box {
    width: 80%;
    height: 100%;
    order: 2;
    display: flex;
    justify-content: start;
    align-items: center;
}

#left_area {
    width: 70%;
    height: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#your_hand {
    width: 100%;
    height: 100px;
    order: 5;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

#your_field {
    width: 100%;
    height: 20%;
    order: 4;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#enemy_hand {
    width: 100%;
    height: 100px;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

#enemy_field {
    width: 100%;
    height: 20%;
    order: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#market {
    width: 100%;
    height: 40%;
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#market_top {
    width: 100%;
    height: 100px;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#market_bottom {
    width: 100%;
    height: 100px;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mains {
    box-sizing: border-box;
}

#right_area {
    width: 30%;
    height: 100%;
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#your_info {
    width: 95%;
    height: 40%;
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box
}

#enemy_info {
    width: 95%;
    height: 40%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box
}

#turnend_box, #leave_box {
    width: 95%;
    height: 10%;
    order: 2;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.decks {
    width: 100px;
    height: 120px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
}

#info {
    width: 100%;
    height: 35%;
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}


#your_victory_point {
    background-color: magenta;
}

#your_mana {
    background-color: cyan
}

#your_gold {
    background-color: yellow
}

#enemy_victory_point {
    background-color: magenta
}

#enemy_mana {
    background-color: cyan
}

#enemy_gold {
    background-color: yellow
}

.info_text {
    width: 95%;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
}

.cards {
    width: 60px;
    height: 80px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
}

.cards:hover {
    background-color: #ccc;
}

#sub_box {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

#turn_box {
    width: 100%;
    height: 8%;
    order: 1;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
}

#cardtext_box {
    width: 100%;
    height: 40%;
    order: 2;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: 3px;
    white-space: pre-wrap;
}

#log_box {
    width: 100%;
    height: 50%;
    order: 3;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    white-space: pre-wrap;
    overflow: scroll;
}

#turnend_box:hover {
    background-color: #ccc;
}

.big_text {
    font-size: 16px;
    font-weight: bold;
}

.btn {
    cursor: pointer;
}

.btn: hover {
    background-color: #ccc;
}

.untouchable {
    cursor: not-allowed;
    pointer-events: none;
}

#imput_button:hover {
    background-color: #ccc;
}

`
}));

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "BXF7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ db; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ initStore; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./stores/userstatus/reducer.js
const userStatus = {
  userID: "",
  userName: "",
  winNum: "",
  loseNum: ""
};

function userStatusReducer(state = {}, action) {
  switch (action.type) {
    case "USERSET":
      return {
        userID: action.id,
        userName: action.name,
        winNum: action.win,
        loseNum: action.lose
      };

    case "GAMEDESTROY":
      return {
        userID: state.userID,
        userName: state.userName,
        winNum: action.win,
        loseNum: action.lose
      };

    default:
      return state;
  }
}

/* harmony default export */ var reducer = (userStatusReducer);
// CONCATENATED MODULE: ./stores/gameStatus/reducer.js
const gameStatus = {
  yourName: "",
  you: "",
  enemyName: "",
  enemy: "",
  gameID: "",
  nowTurnPlayer: ""
};

function gameStatusReducer(state = {}, action) {
  // console.log(action);
  switch (action.type) {
    case "USERSET":
      return {
        yourName: action.name,
        you: state.you,
        enemyName: state.enemyName,
        enemy: state.enemy,
        gameID: state.gameId,
        nowTurnPlayer: state.nowTurnPlayer
      };

    case "YOUAREHOST":
      return {
        yourName: state.yourName,
        you: "host",
        enemyName: state.enemyName,
        enemy: "guest",
        gameID: action.gameId,
        nowTurnPlayer: action.nowTurnPlayer
      };

    case "YOUAREGUEST":
      return {
        yourName: state.yourName,
        you: "guest",
        enemyName: state.enemyName,
        enemy: "host",
        gameID: action.gameId,
        nowTurnPlayer: action.nowTurnPlayer
      };

    case "HOSTUPDATE":
      return {
        yourName: state.yourName,
        you: state.you,
        enemyName: action.hostname,
        enemy: state.enemy,
        gameID: state.gameID,
        nowTurnPlayer: state.nowTurnPlayer
      };

    case "GUESTUPDATE":
      return {
        yourName: state.yourName,
        you: state.you,
        enemyName: action.guestname,
        enemy: state.enemy,
        gameID: state.gameID,
        nowTurnPlayer: state.nowTurnPlayer
      };

    case "TURNPASSED":
      return {
        yourName: state.yourName,
        you: state.you,
        enemyName: state.enemyName,
        enemy: state.enemy,
        gameID: state.gameID,
        nowTurnPlayer: state.enemy
      };

    case "TURNRECEIVED":
      return {
        yourName: state.yourName,
        you: state.you,
        enemyName: state.enemyName,
        enemy: state.enemy,
        gameID: state.gameID,
        nowTurnPlayer: state.you
      };

    case "GAMEDESTROY":
      return {
        yourName: state.yourName,
        you: "",
        enemyName: "",
        enemy: "",
        gameID: "",
        nowTurnPlayer: ""
      };

    default:
      return state;
  }
}

/* harmony default export */ var gameStatus_reducer = (gameStatusReducer);
// CONCATENATED MODULE: ./stores/otherinfo/reducer.js
const otherInfo = {
  text: "",
  turnPlayerText: "",
  turnendText: "",
  logs: []
};

function otherInfoReducer(state = {}, action, gameStatus = {}) {
  switch (action.type) {
    case "TEXTUPDATE":
      return {
        text: action.text,
        turnPlayerText: state.turnPlayerText,
        turnendText: state.turnendText,
        logs: state.logs
      };

    case "FIRSTPLAYERSET":
      return {
        text: state.text,
        turnPlayerText: action.name + "のターン",
        turnendText: action.text,
        logs: state.logs
      };

    case "TURNPASSED":
      return {
        text: state.text,
        turnPlayerText: gameStatus.enemyName + "のターン",
        turnendText: "",
        logs: state.logs
      };

    case "TURNRECEIVED":
      return {
        text: state.text,
        turnPlayerText: gameStatus.yourName + "のターン",
        turnendText: "ターンを終了する",
        logs: state.logs
      };

    case "LOGUPDATE":
      return {
        text: state.text,
        turnPlayerText: state.turnPlayerText,
        turnendText: state.turnendText,
        logs: [...state.logs, action.pushLog]
      };

    case "YOUWIN":
      return {
        text: state.text,
        turnPlayerText: state.turnPlayerText,
        turnendText: "あなたの勝ち！",
        logs: [...state.logs, "あなたの勝ち！"]
      };

    case "YOULOSE":
      return {
        text: state.text,
        turnPlayerText: state.turnPlayerText,
        turnendText: "対戦相手の勝ち…",
        logs: [...state.logs, "対戦相手の勝ち…"]
      };

    case "GAMEDESTROY":
      return {
        text: "",
        turnPlayerText: "",
        turnendText: "",
        logs: []
      };

    default:
      return state;
  }
}

/* harmony default export */ var otherinfo_reducer = (otherInfoReducer);
// CONCATENATED MODULE: ./stores/market/reducer.js
const market = {
  marketTopArr: [{
    id: 1,
    name: "銅貨"
  }, {
    id: 2,
    name: "銀貨"
  }, {
    id: 3,
    name: "金貨"
  }],
  marketBottomArr: [{
    id: 4,
    name: "小さな魔石"
  }, {
    id: 5,
    name: "魔石"
  }, {
    id: 6,
    name: "大魔石"
  }]
};

function marketReducer(state = {}, action) {
  switch (action.type) {
    case "MARKETCREATE":
      return {
        marketTopArr: action.marketTop,
        marketBottomArr: action.marketBottom
      };

    case "GAMEDESTROY":
      return {
        marketTopArr: [{
          id: 1,
          name: "銅貨"
        }, {
          id: 2,
          name: "銀貨"
        }, {
          id: 3,
          name: "金貨"
        }],
        marketBottomArr: [{
          id: 4,
          name: "小さな魔石"
        }, {
          id: 5,
          name: "魔石"
        }, {
          id: 6,
          name: "大魔石"
        }]
      };

    default:
      return state;
  }
}

/* harmony default export */ var market_reducer = (marketReducer);
// CONCATENATED MODULE: ./stores/yourstatus/reducer.js
const reducer_market = {
  yourHand: [],
  yourArchi: [],
  yourDeckNum: 0,
  yourTrashNum: 0,
  yourVicPnt: 0,
  yourMana: 0,
  yourGold: 0
};

function yourStatusReducer(state = {}, action) {
  switch (action.type) {
    case "YOURINFOUPDATE":
      return {
        yourHand: state.yourHand,
        yourArchi: state.yourArchi,
        yourDeckNum: action.yourDeckNum,
        yourTrashNum: action.yourTrashNum,
        yourVicPnt: action.yourVicPnt,
        yourMana: action.yourMana,
        yourGold: action.yourGold
      };

    case "YOURHANDUPDATE":
      return {
        yourHand: action.newHand,
        yourArchi: state.yourArchi,
        yourDeckNum: state.yourDeckNum,
        yourTrashNum: state.yourTrashNum,
        yourVicPnt: state.yourVicPnt,
        yourMana: state.yourMana,
        yourGold: state.yourGold
      };

    case "YOURARCHIUPDATE":
      return {
        yourHand: state.yourHand,
        yourArchi: action.newArchi,
        yourDeckNum: state.yourDeckNum,
        yourTrashNum: state.yourTrashNum,
        yourVicPnt: state.yourVicPnt,
        yourMana: state.yourMana,
        yourGold: state.yourGold
      };

    case "GAMEDESTROY":
      return {
        yourHand: [],
        yourArchi: [],
        yourDeckNum: 0,
        yourTrashNum: 0,
        yourVicPnt: 0,
        yourMana: 0,
        yourGold: 0
      };

    default:
      return state;
  }
}

/* harmony default export */ var yourstatus_reducer = (yourStatusReducer);
// CONCATENATED MODULE: ./stores/enemystatus/reducer.js
const enemystatus_reducer_market = {
  enemyHandNum: 0,
  enemyArchi: [],
  enemyDeckNum: 0,
  enemyTrashNum: 0,
  enemyVicPnt: 0,
  enemyMana: 0,
  enemyGold: 0
};

function enemyStatusReducer(state = {}, action) {
  switch (action.type) {
    case "ENEMYINFOUPDATE":
      return {
        enemyHandNum: state.enemyHandNum,
        enemyArchi: state.enemyArchi,
        enemyDeckNum: action.enemyDeckNum,
        enemyTrashNum: action.enemyTrashNum,
        enemyVicPnt: action.enemyVicPnt,
        enemyMana: action.enemyMana,
        enemyGold: action.enemyGold
      };

    case "ENEMYHANDUPDATE":
      return {
        enemyHandNum: action.newHand,
        enemyArchi: state.enemyArchi,
        enemyDeckNum: state.enemyDeckNum,
        enemyTrashNum: state.enemyTrashNum,
        enemyVicPnt: state.enemyVicPnt,
        enemyMana: state.enemyMana,
        enemyGold: state.enemyGold
      };

    case "ENEMYARCHIUPDATE":
      return {
        enemyHandNum: state.enemyHandNum,
        enemyArchi: action.newArchi,
        enemyDeckNum: state.enemyDeckNum,
        enemyTrashNum: state.enemyTrashNum,
        enemyVicPnt: state.enemyVicPnt,
        enemyMana: state.enemyMana,
        enemyGold: state.enemyGold
      };

    case "GAMEDESTROY":
      return {
        enemyHandNum: 0,
        enemyArchi: [],
        enemyDeckNum: 0,
        enemyTrashNum: 0,
        enemyVicPnt: 0,
        enemyMana: 0,
        enemyGold: 0
      };

    default:
      return state;
  }
}

/* harmony default export */ var enemystatus_reducer = (enemyStatusReducer);
// CONCATENATED MODULE: ./stores/turnswitch/reducer.js
const turnSwitch = {
  buySwitch: false,
  actionSwitch: "donot",
  enemyTurn: false
};

function turnSwitchReducer(state = {}, action) {
  switch (action.type) {
    case "BUYPLAYED":
      return {
        buySwitch: true,
        actionSwitch: state.actionSwitch,
        enemyTurn: state.enemyTurn
      };

    case "ACTIONPLAYED":
      return {
        buySwitch: state.buySwitch,
        actionSwitch: "played",
        enemyTurn: state.enemyTurn
      };

    case "TURNPASSED":
      return {
        buySwitch: state.buySwitch,
        actionSwitch: state.actionSwitch,
        enemyTurn: true
      };

    case "TURNRECEIVED":
      return {
        buySwitch: false,
        actionSwitch: "donot",
        enemyTurn: false
      };

    case "GAMEDESTROY":
      return {
        buySwitch: false,
        actionSwitch: "donot",
        enemyTurn: false
      };

    default:
      return state;
  }
}

/* harmony default export */ var turnswitch_reducer = (turnSwitchReducer);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// CONCATENATED MODULE: ./config.js
const firebaseConfig = {
  apiKey: "AIzaSyC1MpjVH28vInLo_n7rTagnFTnxYwoOPNg",
  authDomain: "wizard-contest.firebaseapp.com",
  databaseURL: "https://wizard-contest.firebaseio.com",
  projectId: "wizard-contest",
  storageBucket: "wizard-contest.appspot.com",
  messagingSenderId: "645721779795",
  appId: "1:645721779795:web:1c815635c5f6b8ede720a6"
};
// CONCATENATED MODULE: ./store.js










 // Firestore用に改変追加


var fireapp;

try {
  app_default.a.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}

/* harmony default export */ var store = (fireapp);
const fireStore = app_default.a.firestore();
const db = fireStore.collection("games");

const initialState = {
  userStatus: {
    userID: "",
    userName: "",
    winNum: "",
    loseNum: ""
  },
  gameStatus: {
    yourName: "",
    you: "",
    enemyName: "unset",
    enemy: "",
    gameID: "",
    nowTurnPlayer: ""
  },
  yourStatus: {
    yourHand: [],
    yourArchi: [],
    yourDeckNum: "",
    yourTrashNum: "",
    yourVicPnt: "",
    yourMana: "",
    yourGold: ""
  },
  enemyStatus: {
    enemyHandNum: "",
    enemyArchi: [],
    enemyDeckNum: "",
    enemyTrashNum: "",
    enemyVicPnt: "",
    enemyMana: "",
    enemyGold: ""
  },
  market: {
    marketTopArr: [{
      id: 1,
      name: "銅貨"
    }, {
      id: 2,
      name: "銀貨"
    }, {
      id: 3,
      name: "金貨"
    }],
    marketBottomArr: [{
      id: 4,
      name: "小さな魔石"
    }, {
      id: 5,
      name: "魔石"
    }, {
      id: 6,
      name: "大魔石"
    }]
  },
  turnSwitch: {
    buySwitch: false,
    actionSwitch: "donot",
    enemyTurn: false
  },
  otherInfo: {
    text: "",
    turnPlayerText: "",
    turnendText: "",
    logs: []
  }
};

function store_reducer(state = {}, action) {
  return {
    userStatus: reducer(state.userStatus, action),
    gameStatus: gameStatus_reducer(state.gameStatus, action),
    yourStatus: yourstatus_reducer(state.yourStatus, action),
    enemyStatus: enemystatus_reducer(state.enemyStatus, action),
    market: market_reducer(state.market, action),
    turnSwitch: turnswitch_reducer(state.turnSwitch, action),
    otherInfo: otherinfo_reducer(state.otherInfo, action, state.gameStatus)
  };
}

function initStore(state = initialState) {
  return Object(external_redux_["createStore"])(store_reducer, state, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OzVs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./store.js + 8 modules
var store = __webpack_require__("BXF7");

// CONCATENATED MODULE: ./components/functions.js

 // reduxへの接続は分からないので、actionの値を生成するにとどまることに注意。
// host側のfirestoreへのセットアップ。

function setFirestore(serverID, hostName, nowTurnPlayer) {
  let setData = {
    serverID: serverID,
    hostname: hostName,
    guestname: "unset",
    finalLog: "",
    nowturnplayer: nowTurnPlayer,
    guestSetUpFinished: false
  };
  store["a" /* db */].doc(serverID).set(setData);
} // ゲスト側のfirestoreへのアップデート。

function guestNameSet(serverID, guestName) {
  store["a" /* db */].doc(serverID).update({
    guestname: guestName
  });
} // ゲスト側のset up完了報告。

function guestSetUpReport(serverID) {
  store["a" /* db */].doc(serverID).update({
    guestSetUpFinished: true
  });
} // ホストのみ。

function gameCreate(gameId, hostName, enemyName) {
  const URL = './php/setup/game_create.php';
  const localURL = 'http://localhost/wizard-contest3/php/setup/game_create.php';
  external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
    gameId: gameId,
    hostName: hostName,
    guestName: enemyName
  })).then(results => {}).catch(error => {});
} // 共通。

function deckCreate(gameId, whose) {
  const URL = './php/setup/deck_create.php';
  const localURL = 'http://localhost/wizard-contest3/php/setup/deck_create.php';
  external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
    gameId: gameId,
    whoseDeck: whose
  })).then(results => {}).catch(error => {});
}
// EXTERNAL MODULE: ./Static/Reset.js
var Reset = __webpack_require__("zlyb");

// EXTERNAL MODULE: ./Static/Style.js
var Style = __webpack_require__("3gD8");

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__("R18i");
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// CONCATENATED MODULE: ./components/leftarea/cards/Hands.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Hands_Hands extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "Hand", external_react_pose_default.a.div(this.animate));

    _defineProperty(this, "animate", {
      visible: {
        opacity: 1,
        x: 0
      },
      hidden: {
        opacity: 0,
        x: '100%',
        transition: {
          ease: 'easeOut',
          duration: 1500
        }
      }
    });

    _defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });

    this.id = props.id;
    this.name = props.name;
    this.doMouseEnter = this.doMouseEnter.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
    this.state = {
      isVisible: false
    };
  }

  onContextMenu(e) {
    e.preventDefault();

    if (this.props.gameStatus.nowTurnPlayer == this.props.gameStatus.you) {
      this.setState({
        isVisible: !this.state.isVisible
      });
      const URL = './php/action/card_play.php';
      const localURL = 'http://localhost/wizard-contest3/php/action/card_play.php';
      external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
        gameId: this.props.gameStatus.gameID,
        whom: this.props.gameStatus.you,
        cardName: this.props.name,
        cardId: this.props.id,
        actionPlayed: this.props.turnSwitch.actionSwitch
      })).then(results => {
        if (results.data != "play cancel") {
          store["a" /* db */].doc(this.props.gameStatus.gameID).update({
            finalLog: this.props.id
          });

          if (results.data == "play action") {
            this.props.dispatch({
              type: "ACTIONPLAYED"
            });
          }
        }
      }).catch(error => {});
    }
  }

  async doMouseEnter() {
    const URL = './php/action/textget.php';
    const localURL = 'http://localhost/wizard-contest3/php/action/textget.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      cardName: this.props.name
    })).then(results => {
      const txtdata = results.data;
      let thisTxt;

      if (txtdata[6] != null) {
        thisTxt = txtdata[6];
      } else {
        thisTxt = "";
      }

      const newText = `${txtdata[0]}\nタイプ：${txtdata[1]}\n購入費用：${txtdata[2]}\n消費マナ：${txtdata[3]}\n獲得費用：${txtdata[4]}\n獲得マナ：${txtdata[5]}\n${thisTxt}`;
      return this.props.dispatch({
        type: "TEXTUPDATE",
        text: newText
      });
    }).catch(error => {});
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hand, {
      className: "cards",
      pose: this.state.isVisible ? this.state.visible : this.state.hidden,
      onMouseEnter: this.doMouseEnter,
      onContextMenu: this.onContextMenu,
      style: this.cardStyle,
      id: this.id,
      name: this.name
    });
  }

}

Hands_Hands = Object(external_react_redux_["connect"])(state => state)(Hands_Hands);
/* harmony default export */ var cards_Hands = (Hands_Hands);
// CONCATENATED MODULE: ./components/leftarea/Yourhand.js





class Yourhand_YourHand extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "your_hand",
      className: "mains",
      children: this.props.yourStatus.yourHand.map(hands => /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_Hands, {
        id: hands.id,
        name: hands.name
      }, hands.id))
    });
  }

}

Yourhand_YourHand = Object(external_react_redux_["connect"])(state => state)(Yourhand_YourHand);
/* harmony default export */ var Yourhand = (Yourhand_YourHand);
// CONCATENATED MODULE: ./components/leftarea/cards/Archies.js


function Archies_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Archies_Archies extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Archies_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });

    this.id = props.id;
    this.name = props.name;
    this.doMouseEnter = this.doMouseEnter.bind(this);
  }

  doMouseEnter() {
    const URL = './php/action/textget.php';
    const localURL = 'http://localhost/wizard-contest3/php/action/textget.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      cardName: this.props.name
    })).then(results => {
      const txtdata = results.data;
      let thisTxt;

      if (txtdata[6] != null) {
        thisTxt = txtdata[6];
      } else {
        thisTxt = "";
      }

      const newText = `${txtdata[0]}\nタイプ：${txtdata[1]}\n購入費用：${txtdata[2]}\n消費マナ：${txtdata[3]}\n獲得費用：${txtdata[4]}\n獲得マナ：${txtdata[5]}\n${thisTxt}`;
      return this.props.dispatch({
        type: "TEXTUPDATE",
        text: newText
      });
    }).catch(error => {});
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "cards",
      onMouseEnter: this.doMouseEnter,
      style: this.cardStyle,
      id: this.id,
      children: this.name
    });
  }

}

Archies_Archies = Object(external_react_redux_["connect"])(state => state)(Archies_Archies);
/* harmony default export */ var cards_Archies = (Archies_Archies);
// CONCATENATED MODULE: ./components/leftarea/Yourfield.js


function Yourfield_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Yourfield_YourField extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Yourfield_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "your_field",
      className: "mains",
      children: this.props.yourStatus.yourArchi.map(archies => /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_Archies, {
        id: archies.id,
        name: archies.name
      }, archies.id))
    });
  }

}

Yourfield_YourField = Object(external_react_redux_["connect"])(state => state)(Yourfield_YourField);
/* harmony default export */ var Yourfield = (Yourfield_YourField);
// CONCATENATED MODULE: ./components/leftarea/cards/EnemyHands.js


function EnemyHands_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class EnemyHands_EnemyHands extends external_react_["Component"] {
  constructor(props) {
    super(props);

    EnemyHands_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "cards",
      style: this.cardStyle
    });
  }

}

EnemyHands_EnemyHands = Object(external_react_redux_["connect"])(state => state)(EnemyHands_EnemyHands);
/* harmony default export */ var cards_EnemyHands = (EnemyHands_EnemyHands);
// CONCATENATED MODULE: ./components/leftarea/Enemyhand.js


function Enemyhand_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Enemyhand_EnemyHand extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Enemyhand_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });
  }

  render() {
    let list = [];

    for (let i = 0; i < this.props.enemyStatus.enemyHandNum; i++) {
      list.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_EnemyHands, {}, i));
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "enemy_hand",
      className: "mains",
      children: list
    });
  }

  componentDidMount() {}

}

Enemyhand_EnemyHand = Object(external_react_redux_["connect"])(state => state)(Enemyhand_EnemyHand);
/* harmony default export */ var Enemyhand = (Enemyhand_EnemyHand);
// CONCATENATED MODULE: ./components/leftarea/Enemyfield.js


function Enemyfield_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Enemyfield_EnemyField extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Enemyfield_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "enemy_field",
      className: "mains",
      children: this.props.enemyStatus.enemyArchi.map(archies => /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_Archies, {
        id: archies.id,
        name: archies.name
      }, archies.id))
    });
  }

}

Enemyfield_EnemyField = Object(external_react_redux_["connect"])(state => state)(Enemyfield_EnemyField);
/* harmony default export */ var Enemyfield = (Enemyfield_EnemyField);
// CONCATENATED MODULE: ./components/leftarea/cards/Goods.js


function Goods_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Goods_Goods extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Goods_defineProperty(this, "cardStyle", {
      paddingTop: "15px",
      alignItems: "flex-start"
    });

    this.id = props.id;
    this.name = props.name;
    this.doMouseEnter = this.doMouseEnter.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
  }

  onContextMenu(e) {
    e.preventDefault();

    if (this.props.gameStatus.nowTurnPlayer == this.props.gameStatus.you && this.props.turnSwitch.buySwitch == false) {
      const URL = './php/action/card_buy.php';
      const localURL = 'http://localhost/wizard-contest3/php/action/card_buy.php';
      external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
        gameId: this.props.gameStatus.gameID,
        whom: this.props.gameStatus.you,
        cardName: this.props.name,
        cardName: this.props.name
      })).then(results => {
        if (results.data != "buy cancel") {
          store["a" /* db */].doc(this.props.gameStatus.gameID).update({
            finalLog: this.props.name + "を購入。"
          });
          this.props.dispatch({
            type: "BUYPLAYED"
          });
        }
      }).catch(error => {});
    }
  }

  async doMouseEnter() {
    const URL = './php/action/textget.php';
    const localURL = 'http://localhost/wizard-contest3/php/action/textget.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      cardName: this.props.name
    })).then(results => {
      const txtdata = results.data;
      let thisTxt;

      if (txtdata[6] != null) {
        thisTxt = txtdata[6];
      } else {
        thisTxt = "";
      }

      const newText = `${txtdata[0]}\nタイプ：${txtdata[1]}\n購入費用：${txtdata[2]}\n消費マナ：${txtdata[3]}\n獲得費用：${txtdata[4]}\n獲得マナ：${txtdata[5]}\n${thisTxt}`;
      return this.props.dispatch({
        type: "TEXTUPDATE",
        text: newText
      });
    }).catch(error => {});
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "cards",
      onMouseEnter: this.doMouseEnter,
      onContextMenu: this.onContextMenu,
      style: this.cardStyle,
      children: this.name
    });
  }

}

Goods_Goods = Object(external_react_redux_["connect"])(state => state)(Goods_Goods);
/* harmony default export */ var cards_Goods = (Goods_Goods);
// CONCATENATED MODULE: ./components/leftarea/Market.js






class Market_Market extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "market",
      className: "mains",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "market_top",
        children: this.props.market.marketTopArr.map(goods => /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_Goods, {
          name: goods.name,
          id: goods.id
        }, goods.id))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "market_bottom",
        children: this.props.market.marketBottomArr.map(goods => /*#__PURE__*/Object(jsx_runtime_["jsx"])(cards_Goods, {
          name: goods.name,
          id: goods.id
        }, goods.id))
      })]
    });
  }

}

Market_Market = Object(external_react_redux_["connect"])(state => state)(Market_Market);
/* harmony default export */ var leftarea_Market = (Market_Market);
// CONCATENATED MODULE: ./components/Leftarea.js










class Leftarea_LeftArea extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "left_area",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Yourhand, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Yourfield, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Enemyhand, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Enemyfield, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(leftarea_Market, {})]
    });
  }

}

Leftarea_LeftArea = Object(external_react_redux_["connect"])(state => state)(Leftarea_LeftArea);
/* harmony default export */ var Leftarea = (Leftarea_LeftArea);
// CONCATENATED MODULE: ./components/rightarea/Yourinfo.js



function Yourinfo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Yourinfo_YourInfo extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Yourinfo_defineProperty(this, "numStyle", {
      fontSize: "20px"
    });

    Yourinfo_defineProperty(this, "boxesStyle", {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    });

    Yourinfo_defineProperty(this, "decksStyle", {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    });

    Yourinfo_defineProperty(this, "infoStyle", {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50px"
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "your_info",
      className: "mains",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: this.boxesStyle,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "your_victory_point",
          className: "info_text",
          children: this.props.yourStatus.yourVicPnt
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "your_mana",
          className: "info_text",
          children: this.props.yourStatus.yourMana
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "your_gold",
          className: "info_text",
          children: this.props.yourStatus.yourGold
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: this.decksStyle,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "your_deck",
          className: "decks",
          children: ["\xD7", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: this.numStyle,
            children: this.props.yourStatus.yourDeckNum
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "your_trash",
          className: "decks",
          children: ["\xD7", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: this.numStyle,
            children: this.props.yourStatus.yourTrashNum
          })]
        })]
      })]
    });
  }

}

Yourinfo_YourInfo = Object(external_react_redux_["connect"])(state => state)(Yourinfo_YourInfo);
/* harmony default export */ var Yourinfo = (Yourinfo_YourInfo);
// CONCATENATED MODULE: ./components/rightarea/Enemyinfo.js



function Enemyinfo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Enemyinfo_EnemyInfo extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Enemyinfo_defineProperty(this, "numStyle", {
      fontSize: "20px"
    });

    Enemyinfo_defineProperty(this, "boxesStyle", {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    });

    Enemyinfo_defineProperty(this, "decksStyle", {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    });

    Enemyinfo_defineProperty(this, "infoStyle", {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50px"
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "enemy_info",
      className: "mains",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: this.decksStyle,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "enemy_deck",
          className: "decks",
          children: ["\xD7", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: this.numStyle,
            children: this.props.enemyStatus.enemyDeckNum
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "enemy_trash",
          className: "decks",
          children: ["\xD7", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: this.numStyle,
            children: this.props.enemyStatus.enemyTrashNum
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: this.boxesStyle,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "enemy_victory_point",
          className: "info_text",
          children: this.props.enemyStatus.enemyVicPnt
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "enemy_mana",
          className: "info_text",
          children: this.props.enemyStatus.enemyMana
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: this.infoStyle,
          id: "enemy_gold",
          className: "info_text",
          children: this.props.enemyStatus.enemyGold
        })]
      })]
    });
  }

}

Enemyinfo_EnemyInfo = Object(external_react_redux_["connect"])(state => state)(Enemyinfo_EnemyInfo);
/* harmony default export */ var Enemyinfo = (Enemyinfo_EnemyInfo);
// CONCATENATED MODULE: ./components/rightarea/Turnendbox.js






class Turnendbox_TurnBox extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.nextTurn = this.nextTurn.bind(this);
  }

  nextTurn() {
    if (this.props.gameStatus.nowTurnPlayer == this.props.gameStatus.you) {
      if (this.props.yourStatus.yourVicPnt >= 10) {
        store["a" /* db */].doc(this.props.gameStatus.gameID).update({
          finalLog: this.props.gameStatus.you + "win!"
        });
      } else {
        const URL = './php/action/turnend_reset.php';
        const localURL = 'http://localhost/wizard-contest3/php/action/turnend_reset.php';
        external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
          gameId: this.props.gameStatus.gameID,
          whom: this.props.gameStatus.you
        })).then(() => {
          const newLog = this.props.gameStatus.enemyName + "のターン";
          store["a" /* db */].doc(this.props.gameStatus.gameID).update({
            finalLog: newLog,
            nowturnplayer: this.props.gameStatus.enemy
          });
          this.props.dispatch({
            type: "TURNPASSED"
          });
        }).catch(error => {});
      }
    }
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "turnend_box",
      onClick: this.nextTurn,
      children: this.props.otherInfo.turnendText
    });
  }

  componentDidMount() {
    let firstPlayer;
    let firstText;

    if (this.props.gameStatus.nowTurnPlayer == "host" && this.props.gameStatus.you == "host") {
      firstPlayer = this.props.gameStatus.yourName;
      firstText = "ターンを終了する";
    } else if (this.props.gameStatus.nowTurnPlayer == "host" && this.props.gameStatus.you == "guest") {
      firstPlayer = this.props.gameStatus.enemyName;
      firstText = "";
    } else if (this.props.gameStatus.nowTurnPlayer == "guest" && this.props.gameStatus.you == "host") {
      firstPlayer = this.props.gameStatus.enemyName;
      firstText = "";
    } else if (this.props.gameStatus.nowTurnPlayer == "guest" && this.props.gameStatus.you == "guest") {
      firstPlayer = this.props.gameStatus.yourName;
      firstText = "ターンを終了する";
    }

    ;
    this.props.dispatch({
      type: "FIRSTPLAYERSET",
      name: firstPlayer,
      text: firstText
    });
  }

}

Turnendbox_TurnBox = Object(external_react_redux_["connect"])(state => state)(Turnendbox_TurnBox);
/* harmony default export */ var Turnendbox = (Turnendbox_TurnBox);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/rightarea/Leave.js




class Leave_Leave extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "leave_box",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: "\u9000\u5BA4\u3059\u308B"
      })
    });
  }

}

/* harmony default export */ var rightarea_Leave = (Leave_Leave);
// CONCATENATED MODULE: ./components/Rightarea.js









class Rightarea_RightArea extends external_react_["Component"] {
  render() {
    let content;

    if (this.props.otherInfo.turnendText == "あなたの勝ち！" || this.props.otherInfo.turnendText == "対戦相手の勝ち…") {
      content = /*#__PURE__*/Object(jsx_runtime_["jsx"])(rightarea_Leave, {});
    } else {
      content = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Turnendbox, {});
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "right_area",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Yourinfo, {}), content, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Enemyinfo, {})]
    });
  }

}

Rightarea_RightArea = Object(external_react_redux_["connect"])(state => state)(Rightarea_RightArea);
/* harmony default export */ var Rightarea = (Rightarea_RightArea);
// CONCATENATED MODULE: ./components/subbox/Turnbox.js




class Turnbox_TurnBox extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "turn_box",
      children: this.props.otherInfo.turnPlayerText
    });
  }

}

Turnbox_TurnBox = Object(external_react_redux_["connect"])(state => state)(Turnbox_TurnBox);
/* harmony default export */ var Turnbox = (Turnbox_TurnBox);
// CONCATENATED MODULE: ./components/subbox/Textbox.js




class Textbox_TextBox extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "cardtext_box",
      children: this.props.otherInfo.text
    });
  }

}

Textbox_TextBox = Object(external_react_redux_["connect"])(state => state)(Textbox_TextBox);
/* harmony default export */ var Textbox = (Textbox_TextBox);
// CONCATENATED MODULE: ./components/subbox/Logbox.js




class Logbox_LogBox extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "log_box",
      children: this.props.otherInfo.logs.map((log, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: log
      }, index))
    });
  }

}

Logbox_LogBox = Object(external_react_redux_["connect"])(state => state)(Logbox_LogBox);
/* harmony default export */ var Logbox = (Logbox_LogBox);
// CONCATENATED MODULE: ./components/Subbox.js






class Subbox_SubBox extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "sub_box",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Turnbox, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Textbox, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Logbox, {})]
    });
  }

}
// CONCATENATED MODULE: ./components/Gamescene.js











class Gamescene_GameScene extends external_react_["Component"] {
  handUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/hand_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/hand_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseHand: whoseUpdate
    })).then(results => {
      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURHANDUPDATE",
          newHand: results.data
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYHANDUPDATE",
          newHand: results.data.length
        });
      }
    }).catch(error => {});
  }

  archiUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/archi_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/archi_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseArchi: whoseUpdate
    })).then(results => {
      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURARCHIUPDATE",
          newArchi: results.data
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYARCHIUPDATE",
          newArchi: results.data
        });
      }
    }).catch(error => {});
  }

  infoUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/info_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/info_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseInfo: whoseUpdate
    })).then(results => {
      const result = results.data;

      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURINFOUPDATE",
          yourDeckNum: result.deck,
          yourTrashNum: result.trash,
          yourVicPnt: result.point,
          yourMana: result.mana,
          yourGold: result.gold
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYINFOUPDATE",
          enemyDeckNum: result.deck,
          enemyTrashNum: result.trash,
          enemyVicPnt: result.point,
          enemyMana: result.mana,
          enemyGold: result.gold
        });
      }
    }).catch(error => {});
  }

  allUpdate(gameId, whoseUpdate, youOrEnemy) {
    this.handUpdate(gameId, whoseUpdate, youOrEnemy);
    this.archiUpdate(gameId, whoseUpdate, youOrEnemy);
    this.infoUpdate(gameId, whoseUpdate, youOrEnemy);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "box_box",
      children: [Reset["a" /* default */], Style["a" /* default */], /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "main_box",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Leftarea, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rightarea, {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Subbox_SubBox, {})]
    });
  }

  async componentDidMount() {
    await this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
    await this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
  }

}

Gamescene_GameScene = Object(external_react_redux_["connect"])(state => state)(Gamescene_GameScene);
/* harmony default export */ var Gamescene = (Gamescene_GameScene);
// CONCATENATED MODULE: ./components/Waitscene.js




class Waitscene_WaitScene extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let waitMessage;

    if (this.props.gameStatus.enemyName != "unset") {
      waitMessage = "対戦相手を探しています。";
    } else {
      waitMessage = "対戦相手を待っています。";
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: waitMessage
    });
  }

}

Waitscene_WaitScene = Object(external_react_redux_["connect"])(state => state)(Waitscene_WaitScene);
/* harmony default export */ var Waitscene = (Waitscene_WaitScene);
// CONCATENATED MODULE: ./pages/game.js











 // 戻り値がpromiseインスタンスのものがひもとけず戻り値を要求するfunctionの外部置きは断念。 

class game_Game extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      guestSetUpFinished: false
    };
    this.entry = this.entry.bind(this);
  } // Game Componentではゲーム時のコンポーネント描画を行うが、
  // それら最初のレンダリング前に、自身のinfoや対戦相手との共通infoを取得してから行うものとする。
  // Game Componentレンダリング前にfirebaseからホスト・ゲスト情報を取得したり、必要情報のstate変更等行う。全体の初期管理。
  // 全てのsetup完了後に、firestoreの継続監視がスタートする。


  async entry() {
    let areYouGuest = false;
    let serverID;
    let getNowTurnPlayer;
    await store["a" /* db */].get().then(querySnapshot => {
      const datas = querySnapshot.docs.map(doc => doc.data());
      datas.forEach(function (data) {
        if (data.guestname == "unset") {
          areYouGuest = true;
          serverID = data.serverID;
          getNowTurnPlayer = data.nowturnplayer;
        }
      });
    }); // 自分ホスト用関数

    if (areYouGuest == false) {
      serverID = Math.floor(Math.random() * 1000000);
      const firstOrSecond = Math.floor(Math.random() * 2);
      let firstPlayer;

      if (firstOrSecond == 0) {
        firstPlayer = "host";
      } else {
        firstPlayer = "guest";
      }

      const stringID = String(serverID);
      await setFirestore(stringID, this.props.gameStatus.yourName, firstPlayer);
      await this.props.dispatch({
        type: "YOUAREHOST",
        gameId: stringID,
        nowTurnPlayer: firstPlayer
      });
      let guestWasUpdated = false;
      store["a" /* db */].doc(this.props.gameStatus.gameID).onSnapshot(async doc => {
        if (guestWasUpdated == false) {
          if (doc.data().guestname != "unset") {
            guestWasUpdated = true;
            gameCreate(this.props.gameStatus.gameID, this.props.gameStatus.yourName, doc.data().guestname);
            await deckCreate(this.props.gameStatus.gameID, this.props.gameStatus.you);
            this.marketCreate(this.props.gameStatus.gameID, this.props.gameStatus.you, this.props.market.marketTopArr, this.props.market.marketBottomArr);
            this.props.dispatch({
              type: "GUESTUPDATE",
              guestname: doc.data().guestname
            });
            this.draw(this.props.gameStatus.gameID, this.props.gameStatus.you, 4);
          }
        } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == false) {
          this.setState(state => ({
            guestSetUpFinished: true
          }));
        } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == true) {
          if (isNaN(doc.data().finalLog) == false) {
            const URL = './php/id_to_name.php';
            const localURL = 'http://localhost/wizard-contest3/php/id_to_name.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              id: doc.data().finalLog
            })).then(results => {
              this.props.dispatch({
                type: "LOGUPDATE",
                pushLog: results.data + "をプレイ。"
              });
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
            }).catch(error => {});
          } else if (doc.data().finalLog == "hostwin!") {
            const URL = './php/user/win.php';
            const localURL = 'http://localhost/wizard-contest3/php/user/win.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              userId: this.props.userStatus.userID,
              username: this.props.userStatus.userName
            })).then(results => {
              this.props.dispatch({
                type: "YOUWIN"
              });
            }).catch(error => {});
          } else if (doc.data().finalLog == "guestwin!") {
            const URL = './php/user/lose.php';
            const localURL = 'http://localhost/wizard-contest3/php/user/lose.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              userId: this.props.userStatus.userID,
              username: this.props.userStatus.userName
            })).then(results => {
              this.props.dispatch({
                type: "YOULOSE"
              });
            }).catch(error => {});
          } else {
            this.props.dispatch({
              type: "LOGUPDATE",
              pushLog: doc.data().finalLog
            });
            this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
            this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
          }

          ;

          if (doc.data().nowturnplayer != this.props.gameStatus.nowTurnPlayer && doc.data().nowturnplayer == this.props.gameStatus.you) {
            // architectの起動
            const URL = './php/action/turnstart_activate.php';
            const localURL = 'http://localhost/wizard-contest3/php/action/turnstart_activate.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              gameId: this.props.gameStatus.gameID,
              whose: this.props.gameStatus.you
            })).then(results => {
              this.props.dispatch({
                type: "TURNRECEIVED"
              });
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
            }).catch(error => {});
          }
        }
      });
    } else {
      // 自分ゲスト用関数
      guestNameSet(serverID, this.props.gameStatus.yourName);
      this.props.dispatch({
        type: "YOUAREGUEST",
        gameId: serverID,
        nowTurnPlayer: getNowTurnPlayer
      });
      let hostWasUpdated = false;
      store["a" /* db */].doc(this.props.gameStatus.gameID).onSnapshot(async doc => {
        if (hostWasUpdated == false) {
          if (doc.data().hostname != "unset") {
            hostWasUpdated = true;
            deckCreate(this.props.gameStatus.gameID, this.props.gameStatus.you);
            await this.marketCreate(this.props.gameStatus.gameID, this.props.gameStatus.you, this.props.market.marketTopArr, this.props.market.marketBottomArr);
            this.props.dispatch({
              type: "HOSTUPDATE",
              hostname: doc.data().hostname
            });
            this.draw(this.props.gameStatus.gameID, this.props.gameStatus.you, 4);
          }
        } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == false) {
          this.setState(state => ({
            guestSetUpFinished: true
          }));
        } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == true) {
          if (isNaN(doc.data().finalLog) == false) {
            const URL = './php/id_to_name.php';
            const localURL = 'http://localhost/wizard-contest3/php/id_to_name.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              id: doc.data().finalLog
            })).then(results => {
              this.props.dispatch({
                type: "LOGUPDATE",
                pushLog: results.data + "をプレイ。"
              });
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
            }).catch(error => {});
          } else if (doc.data().finalLog == "hostwin!") {
            const URL = './php/user/lose.php';
            const localURL = 'http://localhost/wizard-contest3/php/user/lose.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              userId: this.props.userStatus.userID,
              username: this.props.userStatus.userName
            })).then(results => {
              this.props.dispatch({
                type: "YOULOSE"
              });
            }).catch(error => {});
          } else if (doc.data().finalLog == "guestwin!") {
            const URL = './php/user/win.php';
            const localURL = 'http://localhost/wizard-contest3/php/user/win.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              userId: this.props.userStatus.userID,
              username: this.props.userStatus.userName
            })).then(results => {
              this.props.dispatch({
                type: "YOUWIN"
              });
            }).catch(error => {});
          } else {
            this.props.dispatch({
              type: "LOGUPDATE",
              pushLog: doc.data().finalLog
            });
            this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
            this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
          }

          if (doc.data().nowturnplayer != this.props.gameStatus.nowTurnPlayer && doc.data().nowturnplayer == this.props.gameStatus.you) {
            // architectの起動
            const URL = './php/action/turnstart_activate.php';
            const localURL = 'http://localhost/wizard-contest3/php/action/turnstart_activate.php';
            external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
              gameId: this.props.gameStatus.gameID,
              whose: this.props.gameStatus.you
            })).then(results => {
              this.props.dispatch({
                type: "TURNRECEIVED"
              });
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
              this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
            }).catch(error => {});
          }
        }
      });
    }

    ;
  } // marketの生成と取得。ゲストは取得のみ。


  marketCreate(gameId, isHost, originTopArr, originBottomArr) {
    if (originTopArr.length == 3) {
      const URL = './php/setup/market_create.php';
      const localURL = 'http://localhost/wizard-contest3/php/setup/market_create.php';
      external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
        gameId: gameId,
        isHost: isHost
      })).then(results => {
        let newTopArr = originTopArr;
        let newBottomArr = originBottomArr;

        for (let i = 0; i < 5; i++) {
          newTopArr.push({
            id: results.data[i].id,
            name: results.data[i].name
          });
        }

        ;

        for (let i = 0; i < 5; i++) {
          newBottomArr.push({
            id: results.data[i + 5].id,
            name: results.data[i + 5].name
          });
        }

        ;
        const action = {
          type: "MARKETCREATE",
          marketTop: newTopArr,
          marketBottom: newBottomArr
        };
        return this.props.dispatch(action);
      }).catch(error => {});
    }
  }

  draw(gameId, whoseDraw, times) {
    const URL = './php/effect/draw.php';
    const localURL = 'http://localhost/wizard-contest3/php/effect/draw.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whom: whoseDraw,
      times: times
    })).then(() => {
      if (whoseDraw == "guest") {
        guestSetUpReport(gameId);
      }
    }).catch(error => {});
  }

  handUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/hand_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/hand_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseHand: whoseUpdate
    })).then(results => {
      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURHANDUPDATE",
          newHand: results.data
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYHANDUPDATE",
          newHand: results.data.length
        });
      }
    }).catch(error => {});
  }

  archiUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/archi_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/archi_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseArchi: whoseUpdate
    })).then(results => {
      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURARCHIUPDATE",
          newArchi: results.data
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYARCHIUPDATE",
          newArchi: results.data
        });
      }
    }).catch(error => {});
  }

  infoUpdate(gameId, whoseUpdate, youOrEnemy) {
    const URL = './php/update/info_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/info_update.php';
    external_axios_default.a.post(URL, __webpack_require__("8xkj").stringify({
      gameId: gameId,
      whoseInfo: whoseUpdate
    })).then(results => {
      const result = results.data;

      if (youOrEnemy == "you") {
        return this.props.dispatch({
          type: "YOURINFOUPDATE",
          yourDeckNum: result.deck,
          yourTrashNum: result.trash,
          yourVicPnt: result.point,
          yourMana: result.mana,
          yourGold: result.gold
        });
      } else if (youOrEnemy == "enemy") {
        return this.props.dispatch({
          type: "ENEMYINFOUPDATE",
          enemyDeckNum: result.deck,
          enemyTrashNum: result.trash,
          enemyVicPnt: result.point,
          enemyMana: result.mana,
          enemyGold: result.gold
        });
      }
    }).catch(error => {});
  }

  allUpdate(gameId, whoseUpdate, youOrEnemy) {
    this.handUpdate(gameId, whoseUpdate, youOrEnemy);
    this.archiUpdate(gameId, whoseUpdate, youOrEnemy);
    this.infoUpdate(gameId, whoseUpdate, youOrEnemy);
  }

  render() {
    // 必要情報が出揃った場合に表示のコンポーネントを切り替える。
    let content;

    if (this.state.guestSetUpFinished == true || this.props.market.marketTopArr.length == 8 || this.props.market.marketBottomArr.length == 8) {
      content = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Gamescene, {});
    } else {
      content = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Waitscene, {});
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: content
    });
  }

  async componentDidMount() {
    await this.entry();
  }

}

game_Game = Object(external_react_redux_["connect"])(state => state)(game_Game);
/* harmony default export */ var game = __webpack_exports__["default"] = (game_Game);

/***/ }),

/***/ "R18i":
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "zlyb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/
/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {
  children: `
html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
        b, i,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section, summary,
        time, mark, audio, video {
            margin:0;
padding: 0;
border: 0;
outline: 0;
vertical - align: baseline;
background: transparent;
}

article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
}

ul, li {
    list - style: none;
}

blockquote, q {
    quotes: none;
}

blockquote: before, blockquote: after,
    q: before, q: after {
    
    content: none;
}

a {
    margin: 0;
    padding: 0;
    font - size: 100 %;
    vertical - align: baseline;
    background: transparent;
    text - decoration: none;
}

ins {
    background - color:#ff9;
    color:#000;
    text - decoration: none;
}

mark {
    background - color:#ff9;
    color:#000;
    font - style: italic;
    font - weight: bold;
}

del {
    text - decoration: line - through;
}

abbr[title], dfn[title] {
    border - bottom: 1px dotted;
    cursor: help;
}

table {
    border - collapse: collapse;
    border - spacing: 0;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border - top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
}

input, select {
    vertical - align: middle;
}
`
})); // blockquoteのとこ content: '';

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });