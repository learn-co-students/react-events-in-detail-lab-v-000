// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  clickEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  };

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Location</button>
      </div>
    );
  }
}

export default CoordinatesButton;
