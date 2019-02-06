// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clicked = (e) => {
    let x = e.clientX
    let y = e.clientY
    this.props.onReceiveCoordinates([x, y])
    return [x, y]
  }

  render() {
    return (
      <button onClick={this.clicked}>Click Me!</button>
    )
  }
}
