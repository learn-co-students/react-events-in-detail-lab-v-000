// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  myCoordinates = (event) => {
    return this.props([event.clientX, event.clientY]);
  }


  render() {
    return (
      <div>

      <button onClick={this.myCoordinates}>Coordinates button
      </button>
      </div> 
    )    
  }
}
  export default CoordinatesButton;

  // clientX: 5,
  // clientY: 5,
  // screenX: 5,
  // screenY: 5,
  // pageX: 5,
  // pageY: 5,



