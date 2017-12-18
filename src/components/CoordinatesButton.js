import React from 'react';

export default class CoordinatesButton extends React.Component {

  handler = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this.handler}>Coords</button>
    );
  }

}
