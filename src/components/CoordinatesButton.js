// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    const x = e.clientX 
    const y = e.clientY 
    
    this.props.onReceiveCoordinates([x, y])
  }
  
  
  render() {
    return (<button onClick={this.handleClick}>Get coordinates!</button>);
  }
}

export default CoordinatesButton;