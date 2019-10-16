// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
  buttonHandler = (event) => {
    console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
  }
  
  render() {
    return (
      <div>
        <button
          onClick={this.buttonHandler}
        >Button</button>
      </div>
    )
  }
}

export default CoordinatesButton
