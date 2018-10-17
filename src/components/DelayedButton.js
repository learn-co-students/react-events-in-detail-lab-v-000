// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

  handleClick = (event) => {
    const cb = this.props.onDelayedClick
    event.persist()
    setTimeout(function() {
      cb(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}
