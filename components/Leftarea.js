import React, { Component } from "react";
import { connect } from "react-redux";
import YourHand from "./leftarea/Yourhand.js";
import YourField from "./leftarea/Yourfield.js";
import EnemyHand from "./leftarea/Enemyhand.js";
import EnemyField from "./leftarea/Enemyfield.js";
import Market from "./leftarea/Market.js";

class LeftArea extends Component {

    render() {
        return <div id="left_area">
            <YourHand />
            <YourField />
            <EnemyHand />
            <EnemyField />
            <Market />
        </div>
    }
}

LeftArea = connect((state) => state)(LeftArea);
export default LeftArea;