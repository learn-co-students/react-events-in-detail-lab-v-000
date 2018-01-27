// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component{
  handleButtonClick= (event) => {
    let array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>coordinates</button>
    );
  }
}

export default CoordinatesButton;
