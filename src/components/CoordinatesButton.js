import React from 'react';

class CoordinatesButton extends React.Component {
  // onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) }

  handleCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.handleCoordinates}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;
