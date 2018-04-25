import React from 'react';

class CoordinatesButton extends React.Component {
  findCoordinates = function(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }
  render() {
    return(
      <button onClick={this.findCoordinates.bind(this)} />
    )
  }
}

export default CoordinatesButton;
