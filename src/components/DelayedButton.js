import React from 'react'

class DelayedButton extends React.Component {

  delay = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render () {
    return (
      <button onClick={this.delay}>Do delay stuff</button>
    )
  }
}

export default DelayedButton
