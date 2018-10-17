// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  getCoordinates = (event) => {
    let coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>Coordinates</button>
    )
  }
}
