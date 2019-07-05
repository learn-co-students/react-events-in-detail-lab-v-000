import React from 'react';

class CoordinatesButton extends React.Component {
  mouseClickCoordinates = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
  render() {
    return (
      <button onClick={this.mouseClickCoordinates}>
        Coordinates Button
      </button>
    )
  }
}

export default CoordinatesButton;
