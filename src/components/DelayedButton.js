// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleDelayClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    },
      this.props.delay)
  }

  render() {
    return (
      <div>
       <button onClick={this.handleDelayClick}>Delay</button>
      </div>
    )
  }
}

export default DelayedButton;
