// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }
  // If you want to access the event properties in an asynchronous way,
  // you should call event.persist() on the event, which will remove the
  // synthetic event from the pool and allow references to the event to be
  // retained by user code.
  
  // Display an alert box after 3 seconds (3000 milliseconds):
    // setTimeout(function(){ alert("Hello"); }, 3000);
  render() {
    return (
      <button onClick={this.handleClick}>
      'Click Delayed Button'
      </button>
    )
  }
}

export default DelayedButton;
