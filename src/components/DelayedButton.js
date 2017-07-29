import React, { Component } from 'react';

export default class DelayedButton extends Component {
  constructor(props) {
    super(props)
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    debugger;
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
    debugger;
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}
