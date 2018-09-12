// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x, y])
    console.log([x, y])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
