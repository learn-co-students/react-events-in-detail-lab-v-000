// Code CoordinatesButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY]) //calls the prop function listed below, and is passing coordinates to it
  }
  render() {
    return(
    <button onClick={this.handleClick}> Click! </button>
  )}
}

CoordinatesButton.propTypes = {
  onReceiveCoordinates : PropTypes.func
}
