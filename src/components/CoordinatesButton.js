import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickCoordinates = (e) => (
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  )

  render() {
    return (
      <div>
        <button onClick={this.clickCoordinates}>coordinates</button>
      </div>
    )
  }

}
