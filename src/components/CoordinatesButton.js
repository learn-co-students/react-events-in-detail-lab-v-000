// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    var coordinates = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    )
  }
}

export default CoordinatesButton;
