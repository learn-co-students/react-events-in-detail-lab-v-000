import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickCallback = (e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return <button onClick={this.clickCallback}>Click Me!</button>
  }
}