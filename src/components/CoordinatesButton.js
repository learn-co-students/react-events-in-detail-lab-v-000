// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    var array = []
    array.push(event.pageX)
    array.push(event.pageY)
    this.props.onReceiveCoordinates(array)
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.props.onReceiveCoordinates}</button>
    )
  }
}

export default CoordinatesButton;
