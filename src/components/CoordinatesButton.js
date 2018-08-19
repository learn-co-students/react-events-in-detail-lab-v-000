// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    // Function for returning coordinates
    returnCoor = (event) => {
        // console.log('prop data = ', this.props.onReceiveCoordinates)
        // console.log('event = ', event.clientX, event.clientY)
        const coorArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coorArray)
    }
    
  render() {
    return (
      <div className="coordinatesbutton">
        <button onClick={this.returnCoor}>CoordinatesButton</button>
      </div>
    );
  }
}
