import React from 'react';

class DelayedButton extends React.Component {

  delayedEvent = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.delayedEvent}>Delay</button>
    )
  }
}

export default DelayedButton;
