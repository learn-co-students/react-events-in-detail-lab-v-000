// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  getPersist = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }
  render() {
    return (
      <div className="delayed-button">
        <button onClick={this.getPersist}>Delayed</button>
      </div>
    )
  }
}

export default DelayedButton;
