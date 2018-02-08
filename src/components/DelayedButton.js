import React from 'react';

class DelayedButton extends React.Component {
  delayButton = (event) => {
      event.persist()
      setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.delayButton}>Delayed button </button>
    );
  }
}

export default DelayedButton;
