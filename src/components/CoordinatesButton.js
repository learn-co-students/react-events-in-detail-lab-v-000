// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  createArray = (event) => {
    const coor = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coor);
  }

  render(){
    return(
      <button onClick={this.createArray}>See Coordinates</button>
    )
  }
}

export default CoordinatesButton;
