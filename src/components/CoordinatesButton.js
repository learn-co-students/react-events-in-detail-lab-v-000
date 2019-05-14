import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
 onTheButtonClick = (event) => {
   let mousePlace = [event.clientX, event.clientY];
     this.props.onReceiveCoordinates(mousePlace);
   };
  render() {
    return (
      <div className= "coordinates-button"  >
      <button  onClick= {this.onTheButtonClick}>enter</button>
      </div>
    )
  }

}
