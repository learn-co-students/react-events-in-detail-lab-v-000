import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.findCoordinates = this.findCoordinates.bind(this);
  }

  findCoordinates (event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.findCoordinates} />
    );
  }
}
