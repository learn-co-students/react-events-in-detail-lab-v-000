// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  // onReceiveCoordinates = () => {
  //   console.log()
  // }

  cordinateCreate = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  render() {
    return (
      <button onClick={this.cordinateCreate}>Click me!</button>
    )
  }
}
