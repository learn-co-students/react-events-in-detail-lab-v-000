// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  mouseCoordinates = (e) => {
    const theArray = [e.screenX, e.screenY]
    this.props.onReceiveCoordinates(theArray);
  }

  render(){
    return(
      <button onClick={this.mouseCoordinates}></button>
    )
  }
}
