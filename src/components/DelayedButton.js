import React from 'react';

export default class DelayedButton extends React.Component {
  delayed = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }
  render() {
    return (
      <div>
        <button onClick={this.delayed}>Delayed</button>
      </div>
    )
  }
}