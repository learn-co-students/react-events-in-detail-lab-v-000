import React, {Component} from 'react';

class CoordinatesButton extends Component {
  defaultProps = {
    onReceiveCoordinates: coordinates => { 
      console.log(`Mouse-X: ${coordinates[0]}\nMouse-Y: ${coordinates[1]}`);
    }
  }

  createCoordinatesArray = (event) => {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
    return coordinates
  }

  render () {
    return (
      <button onClick={this.createCoordinatesArray}>Get Coordinates</button>
    )
  }
}

export default CoordinatesButton;