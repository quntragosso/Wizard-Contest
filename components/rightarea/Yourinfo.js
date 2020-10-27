import React, { Component } from "react";
import { connect } from "react-redux";

class YourInfo extends Component {
    numStyle = {
        fontSize: "20px"
    }

    boxesStyle = {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    decksStyle = {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    infoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50px"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="your_info" className="mains">
            <div style={this.boxesStyle}>
                <div style={this.infoStyle} id="your_victory_point" className="info_text">{this.props.yourStatus.yourVicPnt}</div>
                <div style={this.infoStyle} id="your_mana" className="info_text">{this.props.yourStatus.yourMana}</div>
                <div style={this.infoStyle} id="your_gold" className="info_text">{this.props.yourStatus.yourGold}</div>
            </div>
            <div style={this.decksStyle}>
                <div id="your_deck" className="decks">×<span style={this.numStyle}>{this.props.yourStatus.yourDeckNum}</span></div>
                <div id="your_trash" className="decks">×<span style={this.numStyle}>{this.props.yourStatus.yourTrashNum}</span></div>
            </div>
        </div>
    }
}

YourInfo = connect((state) => state)(YourInfo);
export default YourInfo;
