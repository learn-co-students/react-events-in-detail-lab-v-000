import React, { Component } from 'react';

export default class CordinatesButton extends Component {
  createArray = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(<button onClick={this.createArray}/>)
  }
}