// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const mouseCoordinates = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {

    return (
      <button onClick={this.handleClick}>
      'Click Coordinates Button'
      </button>
    )
  }
}

export default CoordinatesButton;
