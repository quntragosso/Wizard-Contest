import React, { Component } from "react";
import { connect } from "react-redux";

class EnemyInfo extends Component {

    numStyle = {
        fontSize: "20px"
    }

    boxesStyle = {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    decksStyle = {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    infoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50px"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="enemy_info" className="mains">
            <div style={this.decksStyle}>
                <div id="enemy_deck" className="decks">×<span style={this.numStyle}>{this.props.enemyStatus.enemyDeckNum}</span></div>
                <div id="enemy_trash" className="decks">×<span style={this.numStyle}>{this.props.enemyStatus.enemyTrashNum}</span></div>
            </div>
            <div style={this.boxesStyle}>
                <div style={this.infoStyle} id="enemy_victory_point" className="info_text">{this.props.enemyStatus.enemyVicPnt}</div>
                <div style={this.infoStyle} id="enemy_mana" className="info_text">{this.props.enemyStatus.enemyMana}</div>
                <div style={this.infoStyle} id="enemy_gold" className="info_text">{this.props.enemyStatus.enemyGold}</div>
            </div>

        </div>
    }
}

EnemyInfo = connect((state) => state)(EnemyInfo);
export default EnemyInfo;