import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super()
    this.handleDelay = this.handleDelay.bind(this)
  }

  handleDelay(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render () {
    return (
      <button onClick={this.handleDelay}>Delay</button>
    )
  }
}
