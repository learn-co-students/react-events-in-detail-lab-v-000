import React, { Component } from 'react';

class CoordinatesButton extends Component {
  parse = event => {
    const coor = [event.pageX, event.pageY]
    // console.log(coor)
    this.props.onReceiveCoordinates(coor)
  }

  render() {
    return (
      <button onClick={this.parse} >This is the first button</button>
    );
  }
}

export default CoordinatesButton;