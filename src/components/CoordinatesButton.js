import React from 'react';

export default class CoordinatesButton extends React.Component {
 
  onReceiveCoordinates = ([x, y]) => {
    console.log(x, y);
  }
  
  createArray = (event) => {
  	this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render() {
    return (
      <button onClick={this.createArray}>CoordinatesButton</button>
    );
  }
}
