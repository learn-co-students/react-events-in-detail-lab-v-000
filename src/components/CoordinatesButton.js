import React from 'react';

export default class CoordinatesButton extends React.Component {
    mouseCoordinates = (event) => {
       this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render() {
      return <button onClick = {this.mouseCoordinates}> Coordinates</button>;
    }
  }