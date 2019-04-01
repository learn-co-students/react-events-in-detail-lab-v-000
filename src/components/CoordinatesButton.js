// Code CoordinatesButton Component Here
import React, {Component} from 'react';


export default class CoordinatesButton extends Component{

  cordinatesXY = (e) => {
    return this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return(
      <button onClick={this.cordinatesXY}>X and Y</button>
    )
  }
}
