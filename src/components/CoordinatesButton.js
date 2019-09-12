// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

coors = (event) => {
  let coorsArray = [event.clientX, event.clientY]
  this.props.onReceiveCoordinates(coorsArray)
}
  render(){
    return (
      <button onClick={this.coors}/>
    )
  }
}
