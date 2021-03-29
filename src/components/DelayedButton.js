// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
    
    clickHandler = (event) => {
        event.persist();
        setTimeout( () => {
           return this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render () {
        return <button onClick={this.clickHandler}>button2</button>
    }
}