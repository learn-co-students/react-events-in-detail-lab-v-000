// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  mouseCoordinates = (event) => {
    return [event.clientX, event.clientY]
  }

  render() {
    return (
      <button onClick={(event) => this.props.onReceiveCoordinates(this.mouseCoordinates(event))}></button>
    )
  }
}