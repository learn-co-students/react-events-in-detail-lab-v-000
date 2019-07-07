import React from 'react';

class CoordinatesButton extends React.Component {
  coords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return (
      <button onClick={this.coords}>Click me!</button>
    )
  }
}

export default CoordinatesButton;
