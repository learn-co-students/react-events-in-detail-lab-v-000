

import React, { Component } from 'react'

export default class DelayedButtton extends Component {


    handleDelay = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)    
    }


    render() {
        return (
            <div>
                <button onClick={this.handleDelay}>Delayed</button>
            </div>
        )
    }
}
