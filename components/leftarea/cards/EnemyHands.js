import React, { Component } from "react";
import { connect } from "react-redux";

class EnemyHands extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="cards" style={this.cardStyle}></div>
    }
}

EnemyHands = connect((state) => state)(EnemyHands);
export default EnemyHands;