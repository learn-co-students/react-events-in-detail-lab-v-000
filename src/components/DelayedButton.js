import React, { Component } from 'react';

class DelayedButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={event => this.parse(event)}
        ></button>
      </div>
    );
  }

  parse(event) {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }
}

export default DelayedButton;