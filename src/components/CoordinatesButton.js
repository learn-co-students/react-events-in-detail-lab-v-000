import React from 'react';

class CoordinatesButton extends React.Component {
  findCoordinates = (event) =>{
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.findCoordinates}>Click to find coordinates</button>
    );
  }
}

export default CoordinatesButton;
