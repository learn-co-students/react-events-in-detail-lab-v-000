import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this);
  }

  onReceiveCoordinates(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.onReceiveCoordinates}></button>
    )
  }
}