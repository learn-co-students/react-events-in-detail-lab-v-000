// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {

  mouseValues = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  

  render() {
    return <button onClick={this.mouseValues}>Coordenadas</button>
  }
}

export default CoordinatesButton;
