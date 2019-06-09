// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

coordinatesHandler = (event) => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button
      onClick={this.coordinatesHandler}>
      Coordinates!!!
      </button>
      )
  }

}
