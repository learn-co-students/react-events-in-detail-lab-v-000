// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  getCoordinates = (event) => {
    const coordinates = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render() {
    return (
      <div className="coordinates-button">
        <button onClick={this.getCoordinates}></button>
      </div>
    )
  }
}

export default CoordinatesButton;
