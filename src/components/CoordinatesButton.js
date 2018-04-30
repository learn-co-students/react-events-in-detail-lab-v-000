import React from 'react';

class CoordinatesButton extends React.Component {
  clickButton = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.clickButton}>Click Me!</button>
    )
  }
}

export default CoordinatesButton;