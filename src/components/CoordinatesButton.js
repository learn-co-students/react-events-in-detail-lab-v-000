// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  coordinates = (event) => {
    let x;
    let y;
    x = event.screenX
    y = event.screenY
    this.props.onReceiveCoordinates([x,y])
  }
  render() {
    const why = this.coordinates
    return (
      <button onClick={this.coordinates}></button>
    )
  }


}

export default CoordinatesButton
