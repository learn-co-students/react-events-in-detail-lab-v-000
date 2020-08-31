import React, { Component } from 'react';
export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)

  }
  createArray = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  
  render() {
    return (
      <button onClick={this.createArray}>Coordinates</button>
    )
  }

}
