// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  constructor(){
    super();
    this.handleClick = this.ergg.bind(this)
  }

  ergg(event){
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  // handleClick = (event) => {
  //     return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  // }

  render(){
    return(
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}
