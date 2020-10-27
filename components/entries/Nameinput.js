import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class NameInput extends Component {

    buttonStyle = {
        textAlign: "center",
        cursor: "pointer"
    }

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            password: ""
        }
        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.entry = this.entry.bind(this);
    }

    nameChange(e) {
        const re = /^([a-zA-Z0-9]{1,8})$/
        if (e.target.value === "" || re.test(e.target.value))
            this.setState({
                name: e.target.value,
                password: this.state.password
            });
    }

    passwordChange(e) {
        const re = /^([a-zA-Z0-9]{4,8})$/
        if (e.target.value === "" || re.test(e.target.value)) {
            this.setState({
                name: this.state.name,
                password: e.target.value
            });
        }
    }

    entry() {
        const URL = './php/user/user_login.php';
        const localURL = 'http://localhost/wizard-contest3/php/user/user_login.php';
        axios
            .post(URL, require('querystring').stringify({ username: this.state.name, password: this.state.password }))
            .then((results) => {
                this.props.dispatch({ type: "USERSET", name: results.data[0].name, id: results.data[0].id, win: results.data[0].win, lose: results.data[0].lose });
            })
            .catch((error) => {
            });
        this.setState({
            name: "",
            password: ""
        })
    }

    render() {
        return <div>
            <p>※半角英数字8桁まで</p>
            username:<input type="text" size="10" value={this.state.value} onChange={this.nameChange} /><br />
            password:<input type="text" size="10" value={this.state.value} onChange={this.passwordChange} />
            <div id="imput_button" onClick={this.entry} style={this.buttonStyle}>この名前で対戦する</div>
        </div>
    }

}
NameInput = connect((state) => state)(NameInput);
export default NameInput;