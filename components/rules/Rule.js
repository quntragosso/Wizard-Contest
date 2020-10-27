import React, { Component } from "react";

class Rule extends Component {

    style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    render() {
        return <div style={this.style}>
            <p>あなたは魔法使いとなって『行動』したり『魔法』を使ったり</p><br />
            <p></p>
            <Link href="/game">
                入室する
            </Link>
        </div>
    }
}
Rule = connect((state) => state)(Rule);
export default Rule;