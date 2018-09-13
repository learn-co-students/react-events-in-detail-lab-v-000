// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (event) => {
    debugger
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render(){
    return (
      <button onClick={this.handleClick}>a</button>
    );
  }

}

export default CoordinatesButton;
