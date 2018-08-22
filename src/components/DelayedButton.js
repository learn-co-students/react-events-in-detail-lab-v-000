// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
  onClickEvent = e => {
    const target = e;
    e.persist();
    setTimeout(() => this.props.onDelayedClick(target), this.props.delay);
  };

  render() {
    return <button onClick={this.onClickEvent}>Click Me For Timeout!</button>;
  }
}

export default DelayedButton;
