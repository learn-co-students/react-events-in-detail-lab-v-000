// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {
    const coordinates = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>Get Coordinates</button>
    )
  }
}