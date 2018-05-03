import React from 'react';

class CoordinatesButton extends React.Component {
handleClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY]);
}
  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    );
  }
}

export default CoordinatesButton
