// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  handleClick = (event) => { //pass in event argument
    event.persist() //event needs to be persisted to avoid event pooling
    setTimeout (() => { //setTimeout function, so this can access props
      this.props.onDelayedClick(event), this.props.delay
    })
  }
  render(){
    return(
      <button onClick = {this.handleClick}> Delay! </button>
    )
  }
}

DelayedButton.propTypes = {
  delay : PropTypes.number,
  onDelayedClick : PropTypes.func
}
