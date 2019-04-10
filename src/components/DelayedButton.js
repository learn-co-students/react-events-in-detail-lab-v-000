// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    const delayedClick = () => { this.props.onDelayedClick(event)}
    setTimeout(delayedClick, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }

}
