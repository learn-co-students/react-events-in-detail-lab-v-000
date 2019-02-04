// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handler = (e) => {
        e.persist();
        const delay = this.props.delay;
        this.props.onDelayedClick(e);
        window.setTimeout(()=>"What's up?", delay);
    }
    render() {
        return (
            <button onClick={this.handler}>DelayedButton</button>
        )
    }
}
