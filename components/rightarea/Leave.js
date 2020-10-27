import React, { Component } from "react";
import Link from 'next/link';

class Leave extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div id="leave_box">
            <Link href="/">
                退室する
            </Link>
        </div>
    }

}

export default Leave;