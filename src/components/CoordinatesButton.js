// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  cordinateCreate = (e) => {
    // this.props.onReceiveCoordinates([e.clientX, e.clientY])
    debugger;
    console.log("I'm hit!");
  }


  render() {
    return (
      <button onClick={this.cordinateCreate}> CORDINATES</button>
    )
  }
}
