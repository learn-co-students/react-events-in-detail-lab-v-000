// Code CoordinatesButton Component Here
import React from 'react'
class CoordinatesButton extends React.Component {

  handleChange = (event) => {
    const target = event
    let coordinatesArray = []

    coordinatesArray.push(target.clientX)
    coordinatesArray.push(target.clientY)

    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render () {
    return (
      <button onClick={(this.handleChange)}>coordinates</button>
    )
  }
}

export default CoordinatesButton;
