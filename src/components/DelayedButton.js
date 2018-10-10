// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (e) => {
        const event = e;
        setTimeout(this.props.onDelayedClick.bind(null,event),this.props.delay)
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>
                    Delayed
                </button>
            </div>
        )
    }
  
}