import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    this.props.onReceiveCoordinates([x, y])
  }
  render() {
    return (
      <button onClick={this.handleClick}>Button</button>
    )
  }
}
