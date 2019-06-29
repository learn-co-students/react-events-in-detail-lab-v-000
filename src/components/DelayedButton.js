// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {


  pressIt = (event) => {
    const x = this.props.onDelayedClick(event)
    const y = this.props.delay
    window.setTimeout(x, y)
  }


  render() {
    return(
    <button onClick={this.pressIt} />
    )
  }
}

export default DelayedButton
