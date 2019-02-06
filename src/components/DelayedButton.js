import React, { Component } from 'react'

class DelayedButton extends React.Component {
  handleClick = event => {
    // accessing event asynchronously with `persist`
    // removing the synthetic event from the pool
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Delay Button
      </button>
    )
  }
}

export default DelayedButton
