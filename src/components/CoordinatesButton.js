// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (clickEvent) => {
    this.props.onReceiveCoordinates([clickEvent.pageX, clickEvent.pageY]);
  }

  render() {

    return (
      <button onClick={this.handleClick}>CoordinatesButton</button>
    )
  }
}

export default CoordinatesButton;
