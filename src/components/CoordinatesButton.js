import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = e => {
    const event = e;
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Coordinated, Son!</button>
      </div>
    );
  }
}

export default CoordinatesButton;
