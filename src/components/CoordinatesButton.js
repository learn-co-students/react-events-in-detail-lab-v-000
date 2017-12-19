import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CoordinatesButton extends Component {
  handleClick = e => {
    const { onReceiveCoordinates } = this.props;
    return onReceiveCoordinates([e.clientX, e.clientY]);
  };
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }
}

CoordinatesButton.propTypes = {
  onReceiveCoordinates: PropTypes.func.isRequired,
};

export default CoordinatesButton;
