// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    const newArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(newArray)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }

}
