import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  coords = (event) => {
    const coords = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={ this.coords } />
    );
  }
}

export default CoordinatesButton;
