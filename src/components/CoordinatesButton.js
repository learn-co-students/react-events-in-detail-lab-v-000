// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
//takes in prop: onReceiveCoordinates -- a function 

  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return(
        <button
            onClick= {this.clickHandler}>
            Coordinates
        </button>
      )
  }
}

export default CoordinatesButton