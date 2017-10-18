import React from 'react'

export default class DelayedButton extends React.Component{
  
  delayHandler = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return <button onClick={this.delayHandler}>Also click me</button>
  }
}
