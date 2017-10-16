// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    const coordinatesArray = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Get Coordinates</button>
    )
  }
}

export default CoordinatesButton;
