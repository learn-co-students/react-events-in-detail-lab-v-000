import React from 'react'

export default class CooordinatesButton extends React.Component {

  handleClick = (e) => {
    let mouseCoord = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(mouseCoord)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}