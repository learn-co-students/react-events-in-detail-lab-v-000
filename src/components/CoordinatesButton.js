import React from 'react';

class CoordinatesButton extends React.Component {

  buttonClicked = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this.buttonClicked}>Click</button>
    );
  }
}

export default CoordinatesButton;
