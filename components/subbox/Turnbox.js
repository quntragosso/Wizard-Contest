import React, { Component } from "react";
import { connect } from "react-redux";

class TurnBox extends Component {

    render() {
        return <div id="turn_box">
            {this.props.otherInfo.turnPlayerText}
        </div>
    }
}

TurnBox = connect((state) => state)(TurnBox);
export default TurnBox;