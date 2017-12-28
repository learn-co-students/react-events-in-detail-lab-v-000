// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
  render(){
    let myTimer = (event) => {
      event.persist()
      setTimeout(() => {
        this.props.onDelayedClick(event);
      }, this.props.delay)
    }
    return(
      <button onClick={myTimer}>
        Delayed
      </button>
    )
  }
}

export default DelayedButton