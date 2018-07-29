import React from 'react';

class DelayedButton extends React.Component {
  delayed = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayed}>Delay!</button>
    )
  }
}

export default DelayedButton;
