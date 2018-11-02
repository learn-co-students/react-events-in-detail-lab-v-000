import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  coordinatesArray =(event)=>{
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(<button onClick ={this.coordinatesArray} /> )
  }

}
