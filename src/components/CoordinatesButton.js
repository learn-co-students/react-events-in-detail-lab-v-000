// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  render() {
    return (
      <button onClick={ (event) => {
          let position = [event.clientX, event.clientY];
          this.props.onReceiveCoordinates(position);
        } 
      }></button>
    )
  }
}

export default CoordinatesButton;