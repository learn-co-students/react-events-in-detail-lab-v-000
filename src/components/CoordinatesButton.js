// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
       e = e || window.event;
      let coordinates =  [e.clientX, e.clientY] 
      return coordinates
    }
    
    render() {
        return (
          <button onClick={() => this.props.onReceiveCoordinates(this.handleClick())}>Mouse Coordinates</button>  
        )
    }
}