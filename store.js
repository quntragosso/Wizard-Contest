import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import userStatusReducer from "./stores/userstatus/reducer.js";
import gameStatusReducer from "./stores/gameStatus/reducer.js";
import otherInfoReducer from './stores/otherinfo/reducer.js';
import marketReducer from './stores/market/reducer.js';
import yourStatusReducer from "./stores/yourstatus/reducer.js";
import enemyStatusReducer from "./stores/enemystatus/reducer.js";
import turnSwichRedecer from "./stores/turnswitch/reducer.js";
import firebase from "firebase/app";
import "firebase/firestore"; // Firestore用に改変追加
import { firebaseConfig } from './config.js';

var fireapp;
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error.message);
}
export default fireapp;
const fireStore = firebase.firestore();
const db = fireStore.collection("games");
export { db };

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
        marketTopArr: [{ id: 1, name: "銅貨" }, { id: 2, name: "銀貨" }, { id: 3, name: "金貨" }],
        marketBottomArr: [{ id: 4, name: "小さな魔石" }, { id: 5, name: "魔石" }, { id: 6, name: "大魔石" }]
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
        logs: [],
    }
}

function reducer(state = {}, action) {
    return {
        userStatus: userStatusReducer(state.userStatus, action),
        gameStatus: gameStatusReducer(state.gameStatus, action),
        yourStatus: yourStatusReducer(state.yourStatus, action),
        enemyStatus: enemyStatusReducer(state.enemyStatus, action),
        market: marketReducer(state.market, action),
        turnSwitch: turnSwichRedecer(state.turnSwitch, action),
        otherInfo: otherInfoReducer(state.otherInfo, action, state.gameStatus)
    }
}

export function initStore(state = initialState) {
    return createStore(reducer, state, applyMiddleware(thunkMiddleware))
}