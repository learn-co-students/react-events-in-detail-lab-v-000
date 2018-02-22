// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (eventClick) => {
    eventClick.persist();
    setTimeout(() => {
      this.props.onDelayedClick(eventClick)
    }, this.props.delay);
  }


  render() {
    return(
      <button onClick={this.handleClick}>DelayedButton</button>
    )
  }
}

export default DelayedButton;
