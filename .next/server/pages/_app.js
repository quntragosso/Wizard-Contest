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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./store.js + 8 modules
var store = __webpack_require__("BXF7");

// CONCATENATED MODULE: ./lib/redux-store.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const _NRS_ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if (isServer) {
    return Object(store["b" /* initStore */])(initialState);
  }

  if (!window[_NRS_]) {
    window[_NRS_] = Object(store["b" /* initStore */])(initialState);
  }

  return window[_NRS_];
}

/* harmony default export */ var redux_store = (App => {
  return class AppWithRedux extends external_react_["Component"] {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(App, _objectSpread(_objectSpread({}, this.props), {}, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class _app_App extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(app["Container"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
        store: reduxStore,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
      })
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (redux_store(_app_App));

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });