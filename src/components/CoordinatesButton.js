import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  // getCoords = this.props.onReceiveCoordinates();
  getCoords = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    this.props.onReceiveCoordinates([x, y]);
    return [x, y];
  }

  render() {
    return(
      <div>
        <button onClick={ this.getCoords }>Button!</button>
      </div>
    );
  }
}