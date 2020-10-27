import React, { Component } from "react";
import Entry from "../components/Entry.js";
import { connect } from "react-redux";

class Index extends Component {

    render() {
        return <div className="wrapper">
            <Entry />
        </div >
    }
}

Index = connect((state) => state)(Index);
export default Index; 