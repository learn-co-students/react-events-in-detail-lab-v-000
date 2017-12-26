// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component {
  ping = (event) => {
    var xPosition = event.clientX
    var yPosition = event.clientY
    this.props.onReceiveCoordinates([xPosition, yPosition])
  }

  render(){
    return (
      <button onClick={this.ping}>Locate</button>
    )
  }
}
