import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  handleClick = (e) => {
    const mouseCoordinates = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(mouseCoordinates);
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        Where am I?
      </button>
    )
  }
}
