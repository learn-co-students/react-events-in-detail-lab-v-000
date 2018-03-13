// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  receiveCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {

    return (
      <button onClick={this.receiveCoordinates}>Click!</button>
    )
  }
}

export default CoordinatesButton;
