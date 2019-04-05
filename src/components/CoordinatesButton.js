import React from 'react';

class CoordinatesButton extends React.Component {

  handleOnClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>Get Coordinates</button>
    )
  }
}

export default CoordinatesButton
