import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  findCoordinate = (e) => (
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  );

  render() {
    return(
      <button onClick={this.findCoordinate}>Button</button>
    )
  }
}
