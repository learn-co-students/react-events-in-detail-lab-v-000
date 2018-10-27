// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render() {
    return (
      <button onClick={this.getCoordinates}></button>
    )
  }
}
