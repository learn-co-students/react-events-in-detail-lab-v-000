// Code CoordinatesButton Component Here
import React, { Component } from 'react'
export default class CoordinatesButton extends Component {

  handleClick = (event) => {
     const cordinateArray = [event.clientX, event.clientY ]
       this.props.onReceiveCoordinates(cordinateArray)
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>this is a Coordinates Button</button>
      </div>
    )
  }
}
