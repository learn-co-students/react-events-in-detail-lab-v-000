// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component{

  handleButtonClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)

  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>delayed</button>
    );
  }
}

export default DelayedButton;
