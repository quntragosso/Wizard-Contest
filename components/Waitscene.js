import React, { Component } from "react";
import { connect } from "react-redux";

class WaitScene extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let waitMessage;
        if (this.props.gameStatus.enemyName != "unset") {
            waitMessage = "対戦相手を探しています。";
        } else {
            waitMessage = "対戦相手を待っています。"
        }
        return <div>
            {waitMessage}
        </div>
    }

}
WaitScene = connect((state) => state)(WaitScene);
export default WaitScene;