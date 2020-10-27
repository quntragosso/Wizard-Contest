import axios from "axios";
import { db } from "../store.js";

// reduxへの接続は分からないので、actionの値を生成するにとどまることに注意。

// host側のfirestoreへのセットアップ。
export function setFirestore(serverID, hostName, nowTurnPlayer) {
    let setData = {
        serverID: serverID,
        hostname: hostName,
        guestname: "unset",
        finalLog: "",
        nowturnplayer: nowTurnPlayer,
        guestSetUpFinished: false
    };
    db.doc(serverID).set(setData);
}

// ゲスト側のfirestoreへのアップデート。
export function guestNameSet(serverID, guestName) {
    db.doc(serverID).update({
        guestname: guestName,
    });
}

// ゲスト側のset up完了報告。
export function guestSetUpReport(serverID) {
    db.doc(serverID).update({
        guestSetUpFinished: true
    });
}

// ホストのみ。
export function gameCreate(gameId, hostName, enemyName) {
    const URL = './php/setup/game_create.php';
    const localURL = 'http://localhost/wizard-contest3/php/setup/game_create.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, hostName: hostName, guestName: enemyName }))
        .then((results) => {
        })
        .catch((error) => {
        })
}

// 共通。
export function deckCreate(gameId, whose) {
    const URL = './php/setup/deck_create.php';
    const localURL = 'http://localhost/wizard-contest3/php/setup/deck_create.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseDeck: whose }))
        .then((results) => {
        })
        .catch((error) => {
        })
}