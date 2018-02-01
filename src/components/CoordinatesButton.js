// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const x = event.clientX
    const y = event.clientY

    const arr = [x, y]

    this.props.onReceiveCoordinates(arr);
  }

  render() {
    return (
      <button onClick={this.handleClick} />
    )
  }
}
