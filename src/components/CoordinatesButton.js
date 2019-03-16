import React, { Component } from 'react';

export default class CoordinateButton extends Component {
  logCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return(
      <button onClick={this.logCoordinates}></button>
    )
  }
}