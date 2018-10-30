import React, { Component } from 'react';

export default class DelayedButton extends Component {

  delayButton(callback, delay, e) {
    e.persist()
    window.setTimeout(callback, delay, e)
  }

  render() {
    return(
      <button onClick={(e) => this.delayButton(
        this.props.onDelayedClick,
        this.props.delay, e)}>
        Delay Button
      </button>
    )
  }
}
