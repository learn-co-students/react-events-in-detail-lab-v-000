// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  render() {
    let handleClick = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])

    return (
      <button onClick={handleClick}>
        Click me to see your mouse coordinates in the console!
      </button>
    );
  }
}