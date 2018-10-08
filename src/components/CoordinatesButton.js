// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray = (e) => {
    const coordinates = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return <button onClick={this.createArray}>Coordinates</button>
  }
}
