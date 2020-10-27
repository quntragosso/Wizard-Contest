import React, { Component } from "react";
import { connect } from "react-redux";
import Archies from "./cards/Archies.js";

class YourField extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="your_field" className="mains">
            {this.props.yourStatus.yourArchi.map((archies) => <Archies id={archies.id} name={archies.name} key={archies.id} />)}
        </div>
    }
}

YourField = connect((state) => state)(YourField);
export default YourField;