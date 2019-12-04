import React, { Component } from 'react';

export default class DelayedButton extends Component {
  handleClick = (ev) => {
    ev.persist()
    let callback = () => this.props.onDelayedClick(ev)
    setTimeout(callback, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick} />
    )
  }
}
