import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = (event) => {
    event.persist()
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}


// Access onReceiveCoordinates through this.props.onReceiveCoordinates
// Fields include:
  //clientX: 5,
  //clientY: 5,
  //screenX: 5,
  //screenY: 5,
  //pageX: 5,
  //pageY: 5,