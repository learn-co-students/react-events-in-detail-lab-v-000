import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)// call the `onDelayedClick` function after 1500ms
  }

  render() {
    return (
      <button onClick={this.handleClick} >'Delayed'</button>
    )
  }
}
