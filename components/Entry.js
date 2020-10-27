import React, { Component } from "react";
import Reset from "../Static/Reset";
import Style from "../Static/Style";
import { connect } from "react-redux";
import Title from "./entries/Title.js";
import EntryButton from "./entries/Entrybutton.js";
import NameInput from "./entries/Nameinput.js";
import axios from "axios";

class Entry extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content;
        if (this.props.gameStatus.yourName == "") {
            content = <NameInput />
        } else {
            content = <EntryButton />
        }
        return <div id="link_box">
            {Reset}
            {Style}
            <Title />
            {content}
        </div>
    }

    componentDidMount() {
        if (this.props.gameStatus.gameID != "") {
            const URL = './php/user/winlose_get.php';
            const localURL = 'http://localhost/wizard-contest3/php/user/winlose_get.php';
            axios
                .post(URL, require('querystring').stringify({ userId: this.props.userStatus.userID, username: this.props.userStatus.userName }))
                .then((results) => {
                    this.props.dispatch({ type: "GAMEDESTROY", win: results.data[0].win, lose: results.data[0].lose });
                })
                .catch((error) => {
                })
        }
    }

}
Entry = connect((state) => state)(Entry);
export default Entry;