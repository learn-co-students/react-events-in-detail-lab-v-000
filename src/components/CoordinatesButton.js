// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  eventOnClick = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return(
      <button onClick={this.eventOnClick}></button>
    )
  }
}
