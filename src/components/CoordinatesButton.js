import React from 'react';

class CoordinatesButton extends React.Component {
  findMouse = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.findMouse}>Coords</button>
    )
  }
}

export default CoordinatesButton;
