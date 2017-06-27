import React from 'react';

class CoordinatesButton extends React.Component {

  setCoords = (event) => {
    var coordarray = [event.screenX,event.screenY]
    this.props.onReceiveCoordinates(coordarray);
  }

  render() {
    return (
      <button onClick={this.setCoords}>Click me</button>
    );
  }
}

export default CoordinatesButton;
