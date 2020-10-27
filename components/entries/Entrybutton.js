import React, { Component } from "react";
import Link from 'next/link';
import { connect } from "react-redux";

class EntryButton extends Component {

    style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    render() {
        return <div style={this.style}>
            <p>player name : {this.props.userStatus.userName}</p><br />
            <p>勝利数：{this.props.userStatus.winNum} 敗北数：{this.props.userStatus.loseNum}</p>
            <Link href="/game">
                入室する
            </Link>
        </div>
    }
}
EntryButton = connect((state) => state)(EntryButton);
export default EntryButton;