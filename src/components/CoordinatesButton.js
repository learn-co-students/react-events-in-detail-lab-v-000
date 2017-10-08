// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  onReceiveCoordinates = (event) => {
    console.log([event.clientX, event.clientY]);
  }



  render() {
    return (
      <div>
      <button onClick={this.onReceiveCoordinates}>Coordinates button
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



