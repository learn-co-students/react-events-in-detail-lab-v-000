import React from 'react';
import PropTypes from 'prop-types';

export default class CoordinatesButton extends React.Component {
  makeArray = (event) => {this.props.onReceiveCoordinates(Array(event.clientX, event.clientY))}
  render() {
    return (
      <button onClick={this.makeArray}></button>
    )
  }
}

CoordinatesButton.propTypes = {
  onReceiveCoordinates: PropTypes.func
}
