import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { setFirestore } from "../components/functions.js";
import { guestNameSet } from "../components/functions.js";
import { guestSetUpReport } from "../components/functions.js";
import { gameCreate } from "../components/functions.js";
import { deckCreate } from "../components/functions.js";
import GameScene from "../components/Gamescene.js";
import WaitScene from "../components/Waitscene.js";
import { db } from "../store.js";

// 戻り値がpromiseインスタンスのものがひもとけず戻り値を要求するfunctionの外部置きは断念。 

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guestSetUpFinished: false
        }
        this.entry = this.entry.bind(this);
    }

    // Game Componentではゲーム時のコンポーネント描画を行うが、
    // それら最初のレンダリング前に、自身のinfoや対戦相手との共通infoを取得してから行うものとする。

    // Game Componentレンダリング前にfirebaseからホスト・ゲスト情報を取得したり、必要情報のstate変更等行う。全体の初期管理。
    // 全てのsetup完了後に、firestoreの継続監視がスタートする。
    async entry() {
        let areYouGuest = false;
        let serverID;
        let getNowTurnPlayer;
        await db.get().then(querySnapshot => {
            const datas = querySnapshot.docs.map(doc => doc.data());
            datas.forEach(function (data) {
                if (data.guestname == "unset") {
                    areYouGuest = true;
                    serverID = data.serverID;
                    getNowTurnPlayer = data.nowturnplayer;
                }
            })
        });
        // 自分ホスト用関数
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
            await this.props.dispatch({ type: "YOUAREHOST", gameId: stringID, nowTurnPlayer: firstPlayer });

            let guestWasUpdated = false;
            db.doc(this.props.gameStatus.gameID).onSnapshot(async doc => {
                if (guestWasUpdated == false) {
                    if (doc.data().guestname != "unset") {
                        guestWasUpdated = true;
                        gameCreate(this.props.gameStatus.gameID, this.props.gameStatus.yourName, doc.data().guestname);
                        await deckCreate(this.props.gameStatus.gameID, this.props.gameStatus.you);
                        this.marketCreate(this.props.gameStatus.gameID, this.props.gameStatus.you, this.props.market.marketTopArr, this.props.market.marketBottomArr);
                        this.props.dispatch({ type: "GUESTUPDATE", guestname: doc.data().guestname });
                        this.draw(this.props.gameStatus.gameID, this.props.gameStatus.you, 4);
                    }
                } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == false) {
                    this.setState((state) => ({
                        guestSetUpFinished: true
                    }))
                } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == true) {
                    if (isNaN(doc.data().finalLog) == false) {
                        const URL = './php/id_to_name.php';
                        const localURL = 'http://localhost/wizard-contest3/php/id_to_name.php';
                        axios
                            .post(URL, require('querystring').stringify({ id: doc.data().finalLog }))
                            .then((results) => {
                                this.props.dispatch({ type: "LOGUPDATE", pushLog: results.data + "をプレイ。" });
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                            })
                            .catch((error) => {
                            })
                    } else if (doc.data().finalLog == "hostwin!") {
                        const URL = './php/user/win.php';
                        const localURL = 'http://localhost/wizard-contest3/php/user/win.php';
                        axios
                            .post(URL, require('querystring').stringify({ userId: this.props.userStatus.userID, username: this.props.userStatus.userName }))
                            .then((results) => {
                                this.props.dispatch({ type: "YOUWIN" })
                            })
                            .catch((error) => {
                            })
                    } else if (doc.data().finalLog == "guestwin!") {
                        const URL = './php/user/lose.php';
                        const localURL = 'http://localhost/wizard-contest3/php/user/lose.php';
                        axios
                            .post(URL, require('querystring').stringify({ userId: this.props.userStatus.userID, username: this.props.userStatus.userName }))
                            .then((results) => {
                                this.props.dispatch({ type: "YOULOSE" })
                            })
                            .catch((error) => {
                            })
                    } else {
                        this.props.dispatch({ type: "LOGUPDATE", pushLog: doc.data().finalLog });
                        this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                        this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                    };
                    if (doc.data().nowturnplayer != this.props.gameStatus.nowTurnPlayer && doc.data().nowturnplayer == this.props.gameStatus.you) {
                        // architectの起動
                        const URL = './php/action/turnstart_activate.php';
                        const localURL = 'http://localhost/wizard-contest3/php/action/turnstart_activate.php';
                        axios
                            .post(URL, require('querystring').stringify({ gameId: this.props.gameStatus.gameID, whose: this.props.gameStatus.you }))
                            .then((results) => {
                                this.props.dispatch({ type: "TURNRECEIVED" });
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                            })
                            .catch((error) => {
                            })
                    }
                }
            });
        } else {
            // 自分ゲスト用関数
            guestNameSet(serverID, this.props.gameStatus.yourName);
            this.props.dispatch({ type: "YOUAREGUEST", gameId: serverID, nowTurnPlayer: getNowTurnPlayer });

            let hostWasUpdated = false;
            db.doc(this.props.gameStatus.gameID).onSnapshot(async doc => {
                if (hostWasUpdated == false) {
                    if (doc.data().hostname != "unset") {
                        hostWasUpdated = true;
                        deckCreate(this.props.gameStatus.gameID, this.props.gameStatus.you);
                        await this.marketCreate(this.props.gameStatus.gameID, this.props.gameStatus.you, this.props.market.marketTopArr, this.props.market.marketBottomArr);
                        this.props.dispatch({ type: "HOSTUPDATE", hostname: doc.data().hostname });
                        this.draw(this.props.gameStatus.gameID, this.props.gameStatus.you, 4);
                    }
                } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == false) {
                    this.setState((state) => ({
                        guestSetUpFinished: true
                    }))
                } else if (doc.data().guestSetUpFinished == true && this.state.guestSetUpFinished == true) {
                    if (isNaN(doc.data().finalLog) == false) {
                        const URL = './php/id_to_name.php';
                        const localURL = 'http://localhost/wizard-contest3/php/id_to_name.php';
                        axios
                            .post(URL, require('querystring').stringify({ id: doc.data().finalLog }))
                            .then((results) => {
                                this.props.dispatch({ type: "LOGUPDATE", pushLog: results.data + "をプレイ。" });
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                            })
                            .catch((error) => {
                            })
                    } else if (doc.data().finalLog == "hostwin!") {
                        const URL = './php/user/lose.php';
                        const localURL = 'http://localhost/wizard-contest3/php/user/lose.php';
                        axios
                            .post(URL, require('querystring').stringify({ userId: this.props.userStatus.userID, username: this.props.userStatus.userName }))
                            .then((results) => {
                                this.props.dispatch({ type: "YOULOSE" })
                            })
                            .catch((error) => {
                            })
                    } else if (doc.data().finalLog == "guestwin!") {
                        const URL = './php/user/win.php';
                        const localURL = 'http://localhost/wizard-contest3/php/user/win.php';
                        axios
                            .post(URL, require('querystring').stringify({ userId: this.props.userStatus.userID, username: this.props.userStatus.userName }))
                            .then((results) => {
                                this.props.dispatch({ type: "YOUWIN" })
                            })
                            .catch((error) => {
                            })
                    } else {
                        this.props.dispatch({ type: "LOGUPDATE", pushLog: doc.data().finalLog });
                        this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                        this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                    }
                    if (doc.data().nowturnplayer != this.props.gameStatus.nowTurnPlayer && doc.data().nowturnplayer == this.props.gameStatus.you) {
                        // architectの起動
                        const URL = './php/action/turnstart_activate.php';
                        const localURL = 'http://localhost/wizard-contest3/php/action/turnstart_activate.php';
                        axios
                            .post(URL, require('querystring').stringify({ gameId: this.props.gameStatus.gameID, whose: this.props.gameStatus.you }))
                            .then((results) => {
                                this.props.dispatch({ type: "TURNRECEIVED" });
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
                                this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
                            })
                            .catch((error) => {
                            })
                    }
                }

            });
        };
    }

    // marketの生成と取得。ゲストは取得のみ。
    marketCreate(gameId, isHost, originTopArr, originBottomArr) {
        if (originTopArr.length == 3) {
            const URL = './php/setup/market_create.php';
            const localURL = 'http://localhost/wizard-contest3/php/setup/market_create.php';
            axios
                .post(URL, require('querystring').stringify({ gameId: gameId, isHost: isHost }))
                .then((results) => {
                    let newTopArr = originTopArr;
                    let newBottomArr = originBottomArr;
                    for (let i = 0; i < 5; i++) {
                        newTopArr.push({ id: results.data[i].id, name: results.data[i].name });
                    };
                    for (let i = 0; i < 5; i++) {
                        newBottomArr.push({ id: results.data[i + 5].id, name: results.data[i + 5].name });
                    };
                    const action = { type: "MARKETCREATE", marketTop: newTopArr, marketBottom: newBottomArr };
                    return this.props.dispatch(action);
                })
                .catch((error) => {
                })
        }
    }

    draw(gameId, whoseDraw, times) {
        const URL = './php/effect/draw.php';
        const localURL = 'http://localhost/wizard-contest3/php/effect/draw.php';
        axios
            .post(URL, require('querystring').stringify({ gameId: gameId, whom: whoseDraw, times: times }))
            .then(() => {
                if (whoseDraw == "guest") {
                    guestSetUpReport(gameId);
                }
            })
            .catch((error) => {
            })
    }

    handUpdate(gameId, whoseUpdate, youOrEnemy) {
        const URL = './php/update/hand_update.php';
        const localURL = 'http://localhost/wizard-contest3/php/update/hand_update.php';
        axios
            .post(URL, require('querystring').stringify({ gameId: gameId, whoseHand: whoseUpdate }))
            .then((results) => {
                if (youOrEnemy == "you") {
                    return this.props.dispatch({ type: "YOURHANDUPDATE", newHand: results.data });
                } else if (youOrEnemy == "enemy") {
                    return this.props.dispatch({ type: "ENEMYHANDUPDATE", newHand: results.data.length });
                }
            })
            .catch((error) => {
            })
    }

    archiUpdate(gameId, whoseUpdate, youOrEnemy) {
        const URL = './php/update/archi_update.php';
        const localURL = 'http://localhost/wizard-contest3/php/update/archi_update.php';
        axios
            .post(URL, require('querystring').stringify({ gameId: gameId, whoseArchi: whoseUpdate }))
            .then((results) => {
                if (youOrEnemy == "you") {
                    return this.props.dispatch({ type: "YOURARCHIUPDATE", newArchi: results.data });
                } else if (youOrEnemy == "enemy") {
                    return this.props.dispatch({ type: "ENEMYARCHIUPDATE", newArchi: results.data });
                }
            })
            .catch((error) => {
            })
    }

    infoUpdate(gameId, whoseUpdate, youOrEnemy) {
        const URL = './php/update/info_update.php';
        const localURL = 'http://localhost/wizard-contest3/php/update/info_update.php';
        axios
            .post(URL, require('querystring').stringify({ gameId: gameId, whoseInfo: whoseUpdate }))
            .then((results) => {
                const result = results.data
                if (youOrEnemy == "you") {
                    return this.props.dispatch({ type: "YOURINFOUPDATE", yourDeckNum: result.deck, yourTrashNum: result.trash, yourVicPnt: result.point, yourMana: result.mana, yourGold: result.gold });
                } else if (youOrEnemy == "enemy") {
                    return this.props.dispatch({ type: "ENEMYINFOUPDATE", enemyDeckNum: result.deck, enemyTrashNum: result.trash, enemyVicPnt: result.point, enemyMana: result.mana, enemyGold: result.gold });
                }
            })
            .catch((error) => {
            })
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
            content = <GameScene />;
        } else {
            content = <WaitScene />;
        }

        return <div>
            {content}
        </div>
    }

    async componentDidMount() {
        await this.entry();
    }

}

Game = connect((state) => state)(Game);
export default Game;