import React, { Component } from "react";

class DelayedButton extends Component {
  handleClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Delayed, Son!</button>
      </div>
    );
  }
}

export default DelayedButton;
