// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

   mouseCoordinates = (event) => {
      let coordinates = [event.clientX, event.clientY]
      return coordinates
    }

    onReceivedCoordinates = (coordinates) => {
     console.log(coordinates);
   }

  render() {
    return (
      <button onClick={this.mouseCoordinates} > Click Me!</button>
    )
  }

}
