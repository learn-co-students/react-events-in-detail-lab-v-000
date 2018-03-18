
import React from 'react';
import PropTypes from 'prop-types';

class Coordinates extends React.Component {

  getLocation = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY]);
  }

  render() {
    return (
      <button onClick={this.getLocation}>Click me!</button>
    );
  }
}

export default Coordinates;
