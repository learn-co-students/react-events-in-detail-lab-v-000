// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {

  
  delayedEvent = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  
  render() {
    return <button onClick={this.delayedEvent}>Event Delay</button>
  }
}

export default DelayedButton;
