// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  getCoordinates = (event) => {
    var coordinatesArray = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>click me!</button>
    )
  }
}

export default CoordinatesButton
