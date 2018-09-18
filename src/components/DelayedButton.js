// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  // This component takes two props: onDelayedClick (a function), and delay (a number).
  // Create a button that, when clicked, will pass the click event to the onDelayedClick prop
  // within a setTimeout(). The setTimeout() should be set to this.props.delay.
  // If successful, the event will be logged to the console once the timeout has finished.

  handleClick = (event) => {
    event.persist() // deal with pooling
    //takes args of a fn and an amount of time
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <div>
        <button
          onClick = {this.handleClick} >
        </button>
      </div>
    )
  }
}
