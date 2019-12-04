import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  updateCoord = (ev) => {
    const coords = [ev.clientX, ev.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.updateCoord} />
    )
  }
}
