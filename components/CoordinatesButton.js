import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    this.getCoords = this.getCoords.bind(this)
  }
  getCoords(event) {
    var xPos = event.clientX
    var yPos = event.clientY
    var coords = [xPos, yPos]
    this.props.onReceiveCoordinates(coords)
  }
  render() {
    return <button onClick={this.getCoords}>CLICK ME!</button>
  }
}