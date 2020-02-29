// Code DelayedButton Component Here
import React from 'react'
class DelayedButton extends React.Component {

  delayedChange = (event) => {
    const persist = event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }


  render () {
    return (
      <button onClick={(this.delayedChange)}>delay</button>
    )
  }
}

export default DelayedButton;
