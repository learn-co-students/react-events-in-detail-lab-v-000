import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = (e) => {
        e.persist()
        this.props.onDelayedClick(e)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Delayed</button>
        )
    }
}