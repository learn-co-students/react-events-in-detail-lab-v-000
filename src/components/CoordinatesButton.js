import React from 'react';

class CoordinatesButton extends React.Component {
  clicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clicked}>Coords</button>
    );
  }
}

export default CoordinatesButton