// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

  //make click handler & pass event as argument   & pass coord to props.onReceiveCoordinates
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }  
  

  //render button & pass to clickHandler onClick
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click for Coordinates</button>
      </div>
    )
  }
}

export default CoordinatesButton