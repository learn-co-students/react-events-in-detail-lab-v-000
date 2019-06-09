import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleEvent = (event) =>  {
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates);
  }
  
  render() {
    return (
       <button onClick={this.handleEvent}></button>
    )
  }
}
