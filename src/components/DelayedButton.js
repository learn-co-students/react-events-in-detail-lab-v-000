// Code DelayedButton Component Here

import React, { Component } from 'react' 

export default class DelayedButton extends Component {

    lateButton = (event) => {
        event.persist();
        const late = this.props.onDelayedClick(event)
        window.setTimeout(this.props.delay, late)
    }

    render () {
        return (
            <button onClick={this.lateButton}/>
        )
    }
}