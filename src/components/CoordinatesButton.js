import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    this.props.onReceiveCoordinates(new Array(event.clientX, event.clientY)) //note: array literal notation is preferred
  }

  render() {
    return (
      <button onClick={this.createArray}>Get Coordinates</button>
    )
  }

}
