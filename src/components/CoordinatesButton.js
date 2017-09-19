// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(){
    super()

    this.receiveCoordinates = this.receiveCoordinates.bind(this)
  }
  receiveCoordinates = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.receiveCoordinates}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;