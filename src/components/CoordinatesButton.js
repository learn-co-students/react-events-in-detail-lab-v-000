// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  createCoordinates = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.createCoordinates}>RECEIVE COORDINATES</button>
    )
  }
}

export default CoordinatesButton;
