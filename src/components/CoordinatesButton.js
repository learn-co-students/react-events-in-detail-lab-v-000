// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    let coordinates = [x, y]
    this.props.onReceiveCoordinates(coordinates)
  }
  render() {
    return (<button onClick={this.handleClick} />)
  }
}
