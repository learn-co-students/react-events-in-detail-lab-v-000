// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}
