// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  receiveCoordinates = (event)=>{
    debugger
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  };

  render() {
    return (
      <button onClick = {this.receiveCoordinates}>
        Coordinates Button
        </button>
      )
    }
  }

export default CoordinatesButton;
