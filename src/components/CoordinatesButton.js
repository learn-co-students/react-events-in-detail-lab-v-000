// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  findCoordinates = e => {
    const location = [e.screenX, e.screenY];
    return this.props.onReceiveCoordinates(location);
  };
  render() {
    return <button onClick={this.findCoordinates}>Click Me!</button>;
  }
}

export default CoordinatesButton;
