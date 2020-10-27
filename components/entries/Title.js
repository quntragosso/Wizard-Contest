import React, { Component } from "react";

class Title extends Component {

    style = {
        position: "fixed",
        top: "20px",
        left: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    render() {
        return <div style={this.style}>
            Wizard Contest
        </div>
    }
}
export default Title;