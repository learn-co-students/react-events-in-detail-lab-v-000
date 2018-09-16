// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  //set prop of delay- a number- using a setTimeout set to this.props.delay
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay</button>
    );
  }
}
