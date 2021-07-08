// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handler = (e) => {
        e.persist();
        const delay = this.props.delay;
        const oDC = this.props.onDelayedClick;
        window.setTimeout(oDC(e), delay);
    }
    render() {
        return (
            <button onClick={this.handler}>DelayedButton</button>
        )
    }
}
