// // Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  myClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.myClick}>myCoords</button>
    );
  }
}

export default CoordinatesButton



