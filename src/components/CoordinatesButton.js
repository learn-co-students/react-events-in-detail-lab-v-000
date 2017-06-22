import React from 'react';

class CoordinatesButton extends React.Component { 

	clicked = (event) => {
    var coords = [event.pageX, event.pageY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.clicked}>Click me for coordinates!</button>
    );
   }
}
 
export default CoordinatesButton;