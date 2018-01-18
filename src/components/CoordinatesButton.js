import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    const { x, y } = this.state;
    return(
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <h3>Mouse Coordinates: { x } { y }</h3>
      </div>
    )
  }
}

export default CoordinatesButton;
