import React, { Component } from 'react';

export default class DelayedButton extends Component {

  someDelay = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  } 

  render() {
    return(
      <div>
        <button onClick={ this.someDelay }>Delay!</button>
      </div>
    );
  }
}