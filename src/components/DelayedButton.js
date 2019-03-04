// Code DelayedButton Component Here
import React, { Component } from 'react';


export default class DelayedButton extends Component {

  delaying = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
      return (
        <div id="delay">
        <button onClick={this.delaying}>delay button</button>
        </div>
      )
    }

  }
