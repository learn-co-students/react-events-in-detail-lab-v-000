// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  clickListener = (e) => {
    let coordinates =[e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.clickListener}>Coordinates</button>
    )
  }

}
