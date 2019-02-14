// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  render(){
    return(
      <button onClick={this.handleClick}>Click</button>
    )
  }
  handleClick = (event)=>{
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
}
