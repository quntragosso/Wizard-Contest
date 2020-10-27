import React, { Component } from "react";
import { connect } from "react-redux";

class TextBox extends Component {

    render() {
        return <div id="cardtext_box">
            {this.props.otherInfo.text}
        </div>
    }
}

TextBox = connect((state) => state)(TextBox);
export default TextBox;