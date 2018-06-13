// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}
