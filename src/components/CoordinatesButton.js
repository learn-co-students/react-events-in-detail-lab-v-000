// Code DelayedButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  createCoordinates = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const coordinates = [x, y];
    this.props.onReceiveCoordinates(coordinates);
  }
  render() {
    return (
      <div>
        <button onClick={this.createCoordinates} />
      </div>
    )
  }
}
