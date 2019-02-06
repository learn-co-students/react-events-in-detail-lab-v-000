import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClickEvent = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClickEvent}>Coordinates</button>;
  }
}
