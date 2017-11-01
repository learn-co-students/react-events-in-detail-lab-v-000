// Code CoordinatesButton Component Here
import React from 'react';

export default class Coordinates extends React.Component{
   clickEvent = (event)=>{
     this.props.onReceiveCoordinates([event.clientX, event.clientY])
   }

render() {
    return (
    <button onClick={this.clickEvent}>Coordinates!</button>
  );
  }

}