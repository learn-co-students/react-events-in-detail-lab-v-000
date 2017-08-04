// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.onClick}>Delayed</button>
    );
  }
}