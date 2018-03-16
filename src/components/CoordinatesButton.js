import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  onReceiveCoordinates(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return <button onClick={this.onReceiveCoordinates.bind(this)}>
      <h1>Mouse coordinates: {x} {y} </h1>
    </button>;
  }
}