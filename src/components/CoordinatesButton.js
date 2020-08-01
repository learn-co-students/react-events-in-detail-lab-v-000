import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  coordinates = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const array = [x,y]
      this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <button onClick={this.coordinates}>Coordinates
      </button>
    )
  }
}