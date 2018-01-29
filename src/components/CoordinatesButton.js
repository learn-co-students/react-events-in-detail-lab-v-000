import React from 'react';

class CoordinatesButton extends React.Component {
  onReceiveCoordinatesCallback = (event) => {
    const coordinates = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button onClick={this.onReceiveCoordinatesCallback}></button>
    );
  }
 }

 export default CoordinatesButton;
