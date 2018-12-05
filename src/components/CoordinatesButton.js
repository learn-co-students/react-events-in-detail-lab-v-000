import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  ev = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let coor = [x, y];
    this.props.onReceiveCoordinates(coor);
  }

  render() {
    return(
      <button
    onClick={this.ev}>
    </button>
    )
  }
}
