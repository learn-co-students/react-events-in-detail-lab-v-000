import React from 'react';

export default class CoordinatesButton extends React.Component{

  takeCoords = (event) => {
    const coords = [event.clientX, event.clientY]
    console.log(coords)
    this.props.onReceiveCoordinates(coords)
  }

  render(){
    return (<button onClick={this.takeCoords}>Me</button>)
  }

}
