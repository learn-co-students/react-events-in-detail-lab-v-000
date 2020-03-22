import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = event => {
    const { clientX, clientY } = event;
    this.props.onReceiveCoordinates([clientX, clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Button</button>;
  }
}
