// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {


  // handleMouseMove = (event) => {
  //   const x = event.clientX
  //   const y = event.clientY
  //   this.setState({
  //     onReceiveCoordinates: [x,y]
  //   })
  // }



  render() {
    return (
      <button onClick={this.handleMouseMove}>Coordinates Button</button>
    )
  }

}
