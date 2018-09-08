// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    let coordiantes = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordiantes)
  }
  render(){
    return(
      <div id="coord">

        <button onClick={this.handleClick}></button>
      </div>

    )
  }
}
