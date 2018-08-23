import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  createCoordinates = (event) => {
    let coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }
  render() {
    return (
      <button onClick={this.createCoordinates}></button>
    )
  }
}
