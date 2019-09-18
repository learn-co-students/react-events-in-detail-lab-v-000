// Code DelayedButton Component Here
import React, { Component } from 'react';
//import CoordinatesButton from './CoordinatesButton';

//This component takes two props: onDelayedClick (a function), and delay (a number).

export default class DelayedButton extends Component {


handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

	render() {
    return (
    	<button onClick={this.handleClick}></button>
		)
    }
}