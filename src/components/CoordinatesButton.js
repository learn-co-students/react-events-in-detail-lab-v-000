// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    const coordinateArray = [event.clientX, event.clientY]

    this.props.onReceiveCoordinates(coordinateArray);
  }

  render() {
    return (
      <button onClick={this.handleClick} ></button>
    )
  }
}
