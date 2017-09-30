// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';
// import React, { Component } from 'react';

class DelayedButton extends React.Component {


  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    },  this.props.delay)
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    );
  }

}

DelayedButton.propTypes = {
  onDelayedClick: PropTypes.func,
  delay: PropTypes.number
}

export default DelayedButton;
