// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
//We're not ASSIGNING above, but callin ga function from the parent
  render() {
    return (
      <button type="button" onClick={this.createArray}>Coordinates Button</button>
    )
  }
}