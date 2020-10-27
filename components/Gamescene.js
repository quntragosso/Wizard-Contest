import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Reset from "../Static/Reset";
import Style from "../Static/Style";
import LeftArea from "../components/Leftarea.js";
import RightArea from "../components/Rightarea.js";
import SubBox from "../components/Subbox.js";

class GameScene extends Component {

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
        return <div id="box_box">
            {Reset}
            {Style}
            <div id="main_box">
                <LeftArea />
                <RightArea />
            </div>
            <SubBox />
        </div>
    }

    async componentDidMount() {
        await this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.you, "you");
        await this.allUpdate(this.props.gameStatus.gameID, this.props.gameStatus.enemy, "enemy");
    }

}
GameScene = connect((state) => state)(GameScene);
export default GameScene;