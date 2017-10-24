// Code CoordinatesButton Component Here
import React from 'react'


export default class CoordinatesButton extends React.Component{


  getCoordinates= (event) =>{
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
          <button type="button" onClick={this.getCoordinates}>Click Me!</button>
    )
  }
}
