// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {

  render() {
    return(
      <button onClick={(event) => setTimeout(() => this.props.onDelayedClick(event), this.props.delay) }></button>
    )
  }
}