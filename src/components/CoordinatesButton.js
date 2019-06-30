// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  getCoordinates = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y]);
  }

  render() {
    return <button onClick={this.getCoordinates}>Get Coordinates</button>
  }
}