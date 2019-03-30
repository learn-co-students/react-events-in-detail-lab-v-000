// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      //Render a button
      <button onClick={this.handleClick}>C:oc</button>
    )
  }
}

export default CoordinatesButton
