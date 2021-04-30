import React from 'react';

class CoordinatesButton extends React.Component {

  createArray = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.createArray}>
        Click me!
      </button>
    )
  }
}

export default CoordinatesButton
