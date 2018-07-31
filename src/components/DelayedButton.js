// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  onClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay)
    }
  render() {
    return(
      <button onClick={this.onClick}>NO CLICK ME!</button>
    )
  }
}

export default DelayedButton;