import React from 'react';

class CoordinatesButton extends React.Component {
  handleCoordinate = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleCoordinate}>Coords</button>
    );
  }
}

export default CoordinatesButton
