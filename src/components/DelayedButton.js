import React, { Component } from 'react';

export default class DelayedButton extends Component {

    click = (e) => {
        e.persist();
        let callback = () => this.props.onDelayedClick(e)
        setTimeout(callback, this.props.delay)
    }

  render() {
    return (
      <button onClick={this.click}>Delay
      </button>
    )
  }
}