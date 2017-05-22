import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.clickEvent = this.clickEvent.bind(this);
  };

  clickEvent(event) {
    var array = [event.pageX, event.pageY];
    this.props.onReceiveCoordinates(array);
  }

  render() {
    return (
      <button onClick={this.clickEvent}>Coordinates Button</button>
    )
  };
};

export default CoordinatesButton;
