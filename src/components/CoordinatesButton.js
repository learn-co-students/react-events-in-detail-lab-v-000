import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();
  }

  clicked = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render() {
    return (
      <button onClick={this.clicked}>Click me!</button>
    );
  }
}

export default CoordinatesButton;
