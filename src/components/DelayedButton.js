import React, { Component } from 'react';


export default class DelayedButton extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    event.persist();
    var time = this.props.delay;
    console.log(time);
    setTimeout(() => { this.props.onDelayedClick(event) }, time);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
