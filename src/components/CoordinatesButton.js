  // This component takes in one prop: onReceiveCoordinates. This prop is a function.  
// When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
// The onReceiveCoordinates callback prop is then called with these coordinates.


import React, { Component } from 'react';

class CoordinatesButton extends Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  
  render(){
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
};

export default CoordinatesButton;