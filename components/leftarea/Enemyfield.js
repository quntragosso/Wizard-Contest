import React, { Component } from "react";
import { connect } from "react-redux";
import Archies from "./cards/Archies.js";

class EnemyField extends Component {

    cardStyle = {
        paddingTop: "15px",
        alignItems: "flex-start"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="enemy_field" className="mains">
            {this.props.enemyStatus.enemyArchi.map((archies) => <Archies id={archies.id} name={archies.name} key={archies.id} />)}
        </div>
    }
}

EnemyField = connect((state) => state)(EnemyField);
export default EnemyField;