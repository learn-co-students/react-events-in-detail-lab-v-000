import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    //setTimeout is a js built in method that takes argument of function and number of seconds as to when perform that
    event.persist(); //need to have access to event below
    setTimeout(() => { //function form not working-only form that will work here
      this.props.onDelayedClick(event);
    }, this.props.delay); //2nd argument is just a number
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      >
      </button>
    )
  }

}
