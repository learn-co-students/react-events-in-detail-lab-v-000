// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

  //handle click & pass event as argument
  handleClick = (event) => {
    event.persist()     //persist the event so it can be accessed later in the click handler
    setTimeout(() => {         
      this.props.onDelayedClick(event)   
    }, this.props.delay)       //setTimeout to this.props.delay after event is passed to this.props.onDelayedClick 
   }                   
   

  //render button & pass to handleClick onClick
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Delay</button>
      </div>
    )
  }

}

export default DelayedButton

  
  

  
  

