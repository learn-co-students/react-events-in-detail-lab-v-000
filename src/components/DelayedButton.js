// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleDelay = (event) => {
    event.persist();
    this.props.onDelayedClick(event, this.props.delay);
  }

  render() {
    return(
      <button onClick={this.handleDelay}></button>
    )
  }
}

export default DelayedButton;
