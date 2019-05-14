import React, { Component } from 'react';

export default class DelayedButton extends React.Component {
 delayedButtonClick = (event) => {
   let timer = this.props.delay;
        let afterDelay = () => {
            event.persist();
            this.props.onDelayedClick(event)
        };
        setTimeout(afterDelay, timer);
    }

  render() {
    return (
      <div className="delayed-button">
      <button onClick = {this.delayedButtonClick}>delay</button>
      </div>
    )
  }

}
