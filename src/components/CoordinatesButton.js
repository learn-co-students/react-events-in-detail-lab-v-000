import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

 handleClick = (event) => {
  var x = event.clientX
  var y = event.clientY
  this.props.onReceiveCoordinates([x, y]);
}

 render() {
  return (
    <div>
    <button onClick={this.handleClick}>Get Coordinates Button</button>
    </div>
  )
}

 }
