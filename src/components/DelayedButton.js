// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  //handle click & pass event as argument
  handleClick = (event) => {
    event.persist()    //persist the event so it can be accessed later in the click handler
    setTimeout(() => {            //setTimeout to this.props.delay after event is passed to this.props.onDelayedClick
      this.props.onDelayedClick(event)  
    }, this.props.delay
   )     
  }

  //render button & pass to handleClick onClick
  render() {
    return (
      <button onClick={this.handleClick}>Delay</button>
        
    )
  }
}

export default DelayedButton 


  
  

  
  

