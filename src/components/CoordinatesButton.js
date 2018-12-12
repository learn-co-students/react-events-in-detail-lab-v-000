import React, { Component } from 'react';


export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    var x = event.clientX
    var y = event.clientY
    let array = [x, y];
    this.props.onReceiveCoordinates(array);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
