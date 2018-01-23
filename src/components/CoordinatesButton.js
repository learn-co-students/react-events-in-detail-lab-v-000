// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
 
    handleClick = (event) => {
      let coords = [event.screenX, event.screenY]
      this.props.onReceiveCoordinates(coords)
    }
   
    render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
  }


