// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handler = (e) => {
        window.setTimeout(this.props.onDelayedClick, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.handler}>DelayedButton</button>
        )
    }
}
