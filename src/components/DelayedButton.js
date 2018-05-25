// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
  handle = (event) => {
    event.persist()
    setTimeout(() =>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  render(){
    return(
      <button onClick={this.handle}>Delay</button>
    )
  }
}

export default DelayedButton
