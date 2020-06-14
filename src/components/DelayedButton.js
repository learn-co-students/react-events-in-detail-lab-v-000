import React, { Component } from 'react'

export default class DelayedButton extends Component {
  delayResponse = (e) => {
    e.persist();
    setTimeout( () => {
      this.props.onDelayedClick(e)
    }, 
      this.props.delay);
  }

  render(){
    return (
      <button onClick={this.delayResponse} >
        Delayed Response of {this.props.delay} ms
      </button>
    )
  }
}
