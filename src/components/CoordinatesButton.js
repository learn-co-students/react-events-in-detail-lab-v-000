import React from 'react';

class CoordinateButton extends React.Component {
  createCoordinates = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return(
      <div>
        <button onClick={this.createCoordinates}>Coordinate Button</button>
      </div>
    )
  }
}

export default CoordinateButton
//this.props.onRecieveCoordinates should be in here, right?
