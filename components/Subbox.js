import React, { Component } from "react";
import TurnBox from "./subbox/Turnbox.js";
import TextBox from "./subbox/Textbox.js";
import LogBox from "./subbox/Logbox.js";

export default class SubBox extends Component {

    render() {
        return <div id="sub_box">
            <TurnBox />
            <TextBox />
            <LogBox />
        </div>
    }
}