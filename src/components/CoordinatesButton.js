// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createArray = (event) => {
        let x = event.clientX
        let y = event.clientY
        let z = [x, y]
        this.props.onReceiveCoordinates(z)
      }
     
      render() {
        return (
            <button onClick={this.createArray}>
            Coordinates
          </button>
        );
      }
  
}