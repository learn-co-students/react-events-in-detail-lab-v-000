import React from 'react';

class CoordinatesButton extends React.Component {
  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clickHandler}>Coords</button>
    );
  }
}

export default CoordinatesButton
