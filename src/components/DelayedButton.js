// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  constructor(props) {
    super(props)
    this.state = {delay: this.props.delay}
  }

  delay = (e) => {
    setTimeout(() => {
      e.persist()
      return this.props.onDelayedClick(e)
    }, this.state.delay)
  }

  render() {
    return (
      <button onClick={this.delay}>Hello</button>
    )
  }
}
