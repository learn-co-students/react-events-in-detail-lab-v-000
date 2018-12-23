// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleOnClick = (e) => {
    const coordinates = [];
    coordinates.push(e.clientX, e.clientY);
    
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Coordinates</button>
      </div>
    )
  }
}

export default CoordinatesButton;
