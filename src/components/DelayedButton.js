// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (e) => {
      e.persist()
      return setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}