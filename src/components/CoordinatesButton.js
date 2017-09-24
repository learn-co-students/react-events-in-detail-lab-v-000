import React from 'react';

class CoordinateButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Coordinate</button>
      <p> location is {this.x}, {this.y}</p>
      </div>
    )
  }
}

export default CoordinateButton
