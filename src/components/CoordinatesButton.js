import React from 'react';

export default class CoordinateButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  render() {
    return (
      <button onClick={this.handleClick} >Coordinates Button</button>
    );
  }
}
