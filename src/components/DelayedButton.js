// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  click = (event) => {
    event.persist()
    setTimeout(()=> {
      this.props.onDelayedClick(event)
    },this.props.delay)
  }

  render () {
    return (
      <button onClick={this.click}></button>
    )
  }
}
