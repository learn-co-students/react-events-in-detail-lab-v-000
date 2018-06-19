import React from 'react';

export default class CoordinatesButton extends React.Component {
  onClick = (e) => this.props.onReceiveCoordinates( [e.pageX, e.pageY] );
  render() {
    return (
      <button onClick={this.onClick}>Coordinates</button>
    );
  }
}
