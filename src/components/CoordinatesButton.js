import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  buttonClick = e => {
    const arr = [];
    arr.push(e.pageX);
    arr.push(e.pageY);
    this.props.onReceiveCoordinates(arr);
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Button</button>
      </div>
    );
  }
}
