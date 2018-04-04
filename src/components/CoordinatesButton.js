import React from 'react';

class CoordinatesButton extends React.Component {
  clickCoord = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clickCoord}>Coord</button>
    );
  }
}

export default CoordinatesButton
