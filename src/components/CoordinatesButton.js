// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  coords = (event) => {
    var mouseCoords = [];
    mouseCoords.push(event.clientX);
    mouseCoords.push(event.clientY);
    this.props.onReceiveCoordinates(mouseCoords);
  }
  onReceiveCoordinates = (coords) => {

  }
  render () {
    return (
      <button onClick={this.coords}>Click Me!</button>
    );
  }
}

export default CoordinatesButton;
