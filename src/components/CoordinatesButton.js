// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    let posArray = [event.clientX,event.clientY]
    this.props.onReceiveCoordinates(posArray);
  }

  render() {
    return (
      <button onClick={this.createArray}> CoordinatesButton </button>
    )
  }//end render



}//end export
