import React, { Component } from "react";
import { connect } from "react-redux";
import Goods from "./cards/Goods.js";

class Market extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div id="market" className="mains">
            <div id="market_top">
                {this.props.market.marketTopArr.map((goods) => <Goods name={goods.name} id={goods.id} key={goods.id} />)}
            </div>
            <div id="market_bottom">
                {this.props.market.marketBottomArr.map((goods) => <Goods name={goods.name} id={goods.id} key={goods.id} />)}
            </div>
        </div>
    }

}

Market = connect((state) => state)(Market);
export default Market;
