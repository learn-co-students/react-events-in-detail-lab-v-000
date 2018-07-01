import React from 'react';

export default class CoordinatesButton extends React.Component {
  getCoords = (e) => {
    let coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }
  render() {
    return(
      <button onClick={this.getCoords}>Click</button>
    )
  }
}