import React, { Component } from "react";
import { connect } from "react-redux";
import Hands from "./cards/Hands.js";

class YourHand extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="your_hand" className="mains">
            {this.props.yourStatus.yourHand.map((hands) => <Hands id={hands.id} name={hands.name} key={hands.id} />)}
        </div>
    }
}

YourHand = connect((state) => state)(YourHand);
export default YourHand;