// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {


  handleClick = (evt) => {
    const coordinates = [evt.clientX, evt.clientY];
	
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button className="coordinates-button" onClick={this.handleClick}>
        Coordinates Button
      </button>
    )
  }
}

export default CoordinatesButton;
