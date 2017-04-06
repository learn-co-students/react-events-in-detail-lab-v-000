import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render() {
    return(
      <button onClick={this.onClick}>Coords Button</button>
    )
  }
}
