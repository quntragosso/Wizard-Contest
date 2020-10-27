import React, { Component } from "react";
import { connect } from "react-redux";
import EnemyHands from "./cards/EnemyHands.js";

class EnemyHand extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
    }

    render() {
        let list = [];
        for (let i = 0; i < this.props.enemyStatus.enemyHandNum; i++) {
            list.push(<EnemyHands key={i} />);
        }
        return <div id="enemy_hand" className="mains">
            {list}
        </div>
    }

    componentDidMount() {

    }
}

EnemyHand = connect((state) => state)(EnemyHand);
export default EnemyHand;