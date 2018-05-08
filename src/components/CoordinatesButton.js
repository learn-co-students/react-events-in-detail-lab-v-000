// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;
