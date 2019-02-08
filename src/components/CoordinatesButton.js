// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {

      let x = event.clientX;
      let y = event.clientY;
      let array = [x,y];
  //    return X && Y;
  this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>Click me!</button>
    );
  }
}


export default CoordinatesButton;
