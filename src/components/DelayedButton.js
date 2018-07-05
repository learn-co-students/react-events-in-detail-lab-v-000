import React from 'react'

class DelayedButton extends React.Component {
  whenClicked = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }
  render(){
    return(
      <button onClick={this.whenClicked}>Delay</button>
    )
  }
}

export default DelayedButton
