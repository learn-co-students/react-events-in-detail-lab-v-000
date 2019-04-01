// Code DelayedButton Component Here
import React from 'react';

// In the components/DelayedButton.js file, create a DelayedButton React component
//
// This component takes two props: onDelayedClick (a function), and delay (a number).
//
// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
//
// If successful, the event will be logged to the console once the timeout has finished.


class DelayedButton extends React.Component {

onTimeout = event => {
  event.persist()
  setTimeout(() => {
    debugger
    this.props.onDelayedClick(event)},
    this.props.delay)
}

 render() {
   return (
     <button onClick={this.onTimeout}>Hi!</button>
    )
  }
}

export default DelayedButton;
