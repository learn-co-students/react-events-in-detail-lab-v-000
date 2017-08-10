// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getCoordinates(event){
    var x = event.clientX
    var y = event.clientY
    this.props.onReceiveCoordinates([x, y])
  }
  render() {
    return (
      <button onClick={this.getCoordinates}>Click Here!</button>
    )
  }
}

export default CoordinatesButton
