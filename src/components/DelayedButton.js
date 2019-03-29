import React, { Component } from 'react';

export default class DelayedButton extends Component {
    delayClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayClick}>Delay!</button>
        )
    }
}