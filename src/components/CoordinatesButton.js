import React from 'react';

class CoordinatesButton extends React.Component {

  onReceiveCoordinates = (event) => {
    const arr = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button type="button" name="button" onClick={this.onReceiveCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
