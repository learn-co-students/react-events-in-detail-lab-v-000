import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    let ary = []
    ary.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(ary)
  }

  render() {
    return <button onClick={this.handleClick}></button>
  }

}
