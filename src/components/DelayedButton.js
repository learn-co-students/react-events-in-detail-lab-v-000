// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton  extends Component {

  eHandler = (e) => {
    e.persist();
    setTimeout(() => {this.props.onDelayedClick(e);}, this.props.delay);
  }

  render() {
    return <button onClick={this.eHandler}>Delayed!</button>;
  }



}