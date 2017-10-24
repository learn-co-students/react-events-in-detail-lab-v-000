// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{


  // getCoordinates= (event) =>{
  //   this.props.onReceiveCoordinates([event.clientX, event.clientY])
  // }

  handleClick = (event) => {
  event.persist();
  setTimeout(() => {
    this.props.onDelayedClick(event);
  }, this.props.delay);
}


  render(){
    return(
      <button type="button" onClick={this.handleClick}>Delayed Button!</button>
    )
  }
}
