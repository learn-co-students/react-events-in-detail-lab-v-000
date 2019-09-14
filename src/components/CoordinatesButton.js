// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render () {
    return (
      <button onClick={this.handleClick}>X and Y</button>
    );
  }
}

export default CoordinatesButton;
