// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  // handleClick = (e) => [e.clientX, e.clientY]
  handleClick = (e) => {
    const mouseCoord = [e.clientX, e.clientY];
    // console.log(mouseCoord)
    // console.log(onReceiveCoordinates)
    this.props.onReceiveCoordinates(mouseCoord);
  }


  render() {
    return(
      <button
        onClick={this.handleClick}>
        Click Me
      </button>
      )
  }
}
