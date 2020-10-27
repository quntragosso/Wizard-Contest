import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { db } from "../../../store.js";

class Goods extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
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
            axios
                .post(URL, require('querystring').stringify({ gameId: this.props.gameStatus.gameID, whom: this.props.gameStatus.you, cardName: this.props.name, cardName: this.props.name }))
                .then((results) => {
                    if (results.data != "buy cancel") {
                        db.doc(this.props.gameStatus.gameID).update({
                            finalLog: this.props.name + "を購入。"
                        });
                        this.props.dispatch({ type: "BUYPLAYED" });
                    }
                })
                .catch((error) => {
                });
        }
    }

    async doMouseEnter() {
        const URL = './php/action/textget.php';
        const localURL = 'http://localhost/wizard-contest3/php/action/textget.php';
        axios
            .post(URL, require('querystring').stringify({ cardName: this.props.name }))
            .then((results) => {
                const txtdata = results.data;
                let thisTxt;
                if (txtdata[6] != null) {
                    thisTxt = txtdata[6];
                } else {
                    thisTxt = "";
                }
                const newText = `${txtdata[0]}\nタイプ：${txtdata[1]}\n購入費用：${txtdata[2]}\n消費マナ：${txtdata[3]}\n獲得費用：${txtdata[4]}\n獲得マナ：${txtdata[5]}\n${thisTxt}`;
                return this.props.dispatch({ type: "TEXTUPDATE", text: newText });
            })
            .catch((error) => {
            });
    }

    render() {
        return <div className="cards" onMouseEnter={this.doMouseEnter} onContextMenu={this.onContextMenu} style={this.cardStyle}>{this.name}</div>
    }
}

Goods = connect((state) => state)(Goods);
export default Goods;