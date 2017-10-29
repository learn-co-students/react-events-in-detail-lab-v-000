import React from 'react'

export default class CoordinatesButton extends React.Component {
  action = (event) => {
    const xPosition = event.clientX
    const yPosition = event.clientY
    this.props.onReceiveCoordinates([xPosition, yPosition])
  }
  render() {
    return (
      <button onClick={this.action}>Click me</button>
    )
  }
}
