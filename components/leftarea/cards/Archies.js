import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Archies extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.doMouseEnter = this.doMouseEnter.bind(this);
    }

    doMouseEnter() {
        const URL = './php/action/textget.php';
        const localURL = 'http://localhost/wizard-contest3/php/action/textget.php';
        axios
            .post(URL, require('querystring').stringify({ cardName: this.props.name }))
            .then((results) => {
                const txtdata = results.data;
                let thisTxt;
                if (txtdata[6] != null) {
                    thisTxt = txtdata[6];
                } else {
                    thisTxt = "";
                }
                const newText = `${txtdata[0]}\nタイプ：${txtdata[1]}\n購入費用：${txtdata[2]}\n消費マナ：${txtdata[3]}\n獲得費用：${txtdata[4]}\n獲得マナ：${txtdata[5]}\n${thisTxt}`;
                return this.props.dispatch({ type: "TEXTUPDATE", text: newText });
            })
            .catch((error) => {
            });
    }

    render() {
        return <div className="cards" onMouseEnter={this.doMouseEnter} style={this.cardStyle} id={this.id}>{this.name}</div>
    }
}

Archies = connect((state) => state)(Archies);
export default Archies;