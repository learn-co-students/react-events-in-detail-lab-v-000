import React from 'react'

export default class CoordinatesButton extends React.Component {
  
  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.pageX, e.pageY])
  }
  
  
  render () {
    return (
      <button onClick={this.handleClick}>Click me</button>
      )
  }
}