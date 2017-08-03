import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.findClickCoords = this.findClickCoords.bind(this);
  }

  findClickCoords(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return(
      <button onClick={this.findClickCoords}>Coordinates</button>
    );
  }
}
