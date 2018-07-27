// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    const clients = []
    clients.push(event.clientX)
    clients.push(event.clientY)
    this.props.onReceiveCoordinates(clients);
  }

  render(){
    return(
      <button onClick={this.handleClick}>Click me</button>
    )
  }
}
