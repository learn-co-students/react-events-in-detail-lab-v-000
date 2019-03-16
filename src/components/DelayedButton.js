// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  handleClick = evt => {
    evt.persist();
    setTimeout(() => {
      this.props.onDelayedClick(evt);
    }, this.props.delay);
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        delay
      </button>
    )
  }
}

export default DelayedButton;
