// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    let thing = [e.screenX, e.screenY]
    this.props.onReceiveCoordinates(thing)
  }

  render() {
    return (
      <button name="button" onClick={this.handleClick}>button</button>
    )
  }
}