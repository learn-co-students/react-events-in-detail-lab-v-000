// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist()

    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
    return (
      <button onClick={this.handleClick} />
    )
  }
}
