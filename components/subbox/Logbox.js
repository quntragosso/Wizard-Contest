import React, { Component } from "react";
import { connect } from "react-redux";

class LogBox extends Component {

    render() {
        return <div id="log_box">
            {this.props.otherInfo.logs.map((log, index) => <p key={index}>{log}</p>)}
        </div>
    }
}

LogBox = connect((state) => state)(LogBox);
export default LogBox;