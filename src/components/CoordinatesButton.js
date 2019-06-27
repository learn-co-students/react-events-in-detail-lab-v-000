// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArrayWithXandY = (event) => {
    // implement meeeee! See the readme for instructions
    const prop = this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div><button onClick={this.createArrayWithXandY}/></div>
    )
  }
}
