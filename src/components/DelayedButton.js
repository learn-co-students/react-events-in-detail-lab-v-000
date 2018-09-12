// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  handleClick = (event) => {

    let delay = this.props.delay
    setTimeout(() => {
      event.persist()
      this.props.onDelayedClick(event)
    }, delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
