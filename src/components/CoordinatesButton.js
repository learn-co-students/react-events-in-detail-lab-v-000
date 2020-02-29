import React from 'react'

class CoordinatesButton extends React.Component {

  coordinate = (event) => {
    let array = []

    array.push(event.screenX)
    array.push(event.screenY)

    this.props.onReceiveCoordinates(array)
  }

  render () {
    return (
      <button onClick={this.coordinate}>Get Coordinates</button>
    )
  }
}

export default CoordinatesButton
