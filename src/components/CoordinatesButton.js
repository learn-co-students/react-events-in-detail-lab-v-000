// Code CoordinatesButton Component Here
import React from 'react';
import PropTypes from 'prop-types';
// import React, { Component } from 'react';

class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);

  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    );
  }

}

CoordinatesButton.propTypes = {
  onReceiveCoordinates: PropTypes.func
}

export default CoordinatesButton;
