import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  handleClick = (event) => {
    const newCoordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(newCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
  
}