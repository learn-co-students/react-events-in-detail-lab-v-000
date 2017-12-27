// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  
  coorButtonClick = function (event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }.bind(this);
  
  render(){
    return <button onClick={this.coorButtonClick}>CoordinatesButton</button>
  }
}

export default CoordinatesButton
