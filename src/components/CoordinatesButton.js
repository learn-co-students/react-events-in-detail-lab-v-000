// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CoordinatesButton extends React.Component {
  coordinates = (e) => {
    var Xpos = e.clientX
    var Ypos = e.clientY
    this.props.onReceiveCoordinates([Xpos, Ypos]) 

  }
  render () {
    return (
      <button onClick={this.coordinates}></button>
    )
  }
}
