import React, { Component } from "react";
import YourInfo from "./rightarea/Yourinfo.js";
import EnemyInfo from "./rightarea/Enemyinfo.js";
import TurnEndBox from "./rightarea/Turnendbox.js";
import Leave from "./rightarea/Leave.js";
import { connect } from "react-redux";

class RightArea extends Component {

    render() {
        let content;
        if (this.props.otherInfo.turnendText == "あなたの勝ち！" || this.props.otherInfo.turnendText == "対戦相手の勝ち…") {
            content = <Leave />
        } else {
            content = <TurnEndBox />
        }

        return <div id="right_area">
            <YourInfo />
            {content}
            <EnemyInfo />
        </div>
    }
}
RightArea = connect((state) => state)(RightArea);
export default RightArea;