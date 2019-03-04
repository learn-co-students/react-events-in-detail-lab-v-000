// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

  calling = (event) => {
    const cordx = event.clientX
    const cordy = event.clientY
    const array = [cordx,cordy]
    const temp = this.props.onReceiveCoordinates(array)
  }

  render() {
      return (
        <div id="coord">
        <button onClick={this.calling}>coord button</button>
        </div>
      )
    }

  }
