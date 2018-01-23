import React from 'react';

export default class CoordinateButton extends React.Component {

  coordinates = (event) =>{
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.coordinates}>Get Coordinates</button>
    )
  }
}
