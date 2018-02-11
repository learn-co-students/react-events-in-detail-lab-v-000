import React from 'react';

// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number). (These props are only passed in the test suite, you will have errors in the browser)
// When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick() in a setTimeout() block. The setTimeout() will be set to this.props.delay.

export default class DelayedButton extends React.Component {
 
  onDelayedClick = () => {
  }

  setTimeout = (event) => {
  	event.persist()
  	this.props.onDelayedClick(event)
  }
 
  render() {
    return (
      <button onClick={this.setTimeout}>DelayedButton</button>
    );
  }
}
