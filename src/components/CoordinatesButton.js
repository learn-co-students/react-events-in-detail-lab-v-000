import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickHandler = (event) =>{
    let coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render(){
    return(
     <div>
       <button onClick={this.clickHandler}></button>
     </div>
    )
  }
  
}
