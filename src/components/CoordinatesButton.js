// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
  handle = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
  render(){
    return(
      <button onClick={this.handle}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
