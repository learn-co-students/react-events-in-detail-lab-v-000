
// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay
    )
  }
//setTimeout is a javascript function that takes in a function and a time for delay - 2 arguments. You need the fat arrow funciton so it doesn't get immediately called!

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Delay Button</button>
    )
  }
}
