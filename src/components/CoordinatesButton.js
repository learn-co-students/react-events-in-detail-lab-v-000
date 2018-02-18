import React from 'react';

export default class CoordinatesButton extends React.Component {

    coordinates = (e) => {
      const coordinatesArray = [e.clientX, e.clientY]
      this.props.onReceiveCoordinates(coordinatesArray);
    }

    render() {
      return (
        <button onClick={this.coordinates}></button>
      )
    }
}
