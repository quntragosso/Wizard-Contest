import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { db } from "../../store.js";

class TurnBox extends Component {

    constructor(props) {
        super(props);
        this.nextTurn = this.nextTurn.bind(this);
    }

    nextTurn() {
        if (this.props.gameStatus.nowTurnPlayer == this.props.gameStatus.you) {
            if (this.props.yourStatus.yourVicPnt >= 10) {
                db.doc(this.props.gameStatus.gameID).update({
                    finalLog: this.props.gameStatus.you + "win!"
                });
            } else {
                const URL = './php/action/turnend_reset.php';
                const localURL = 'http://localhost/wizard-contest3/php/action/turnend_reset.php';
                axios
                    .post(URL, require('querystring').stringify({ gameId: this.props.gameStatus.gameID, whom: this.props.gameStatus.you }))
                    .then(() => {
                        const newLog = this.props.gameStatus.enemyName + "のターン";
                        db.doc(this.props.gameStatus.gameID).update({
                            finalLog: newLog,
                            nowturnplayer: this.props.gameStatus.enemy
                        });
                        this.props.dispatch({ type: "TURNPASSED" });
                    })
                    .catch((error) => {
                    });
            }
        }
    }

    render() {
        return <div id="turnend_box" onClick={this.nextTurn}>{this.props.otherInfo.turnendText}</div>
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
        };
        this.props.dispatch({ type: "FIRSTPLAYERSET", name: firstPlayer, text: firstText })
    }
}

TurnBox = connect((state) => state)(TurnBox);
export default TurnBox;