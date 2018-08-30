// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  delay = (e) => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }
  ;

  render() {
    return (
      <button onClick={this.delay}>DELAY</button>
    )
  }
}
