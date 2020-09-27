
import React, { Component } from 'react';


export default class DelayedButton extends Component {

  handleClickDelay = event => {
    event.persist();
    setTimeout(() => {
        this.props.onDelayedClick(event);}, this.props.delay)
      }


  render() {
    return (
      <button onClick={this.handleClickDelay} > Delayed</button>
    )
  }

}
