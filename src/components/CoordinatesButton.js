import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  createCoordinates = (e) => { this.props.onReceiveCoordinates([e.clientX, e.clientY]) }
  
  render() {
    return (
      <button onClick={this.createCoordinates}>
        Click me!
      </button>
    )
  }
}
