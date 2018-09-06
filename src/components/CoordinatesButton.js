import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  
  
  handleClick = (event) => {
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    let coords = [xCoord, yCoord];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}