import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  getCoordinates = (event) => {
    const y = event.clientY
    const x = event.clientX
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <div>
      <button onClick={this.getCoordinates}>Get Coordinates</button>
      </div>    )
  }

}
