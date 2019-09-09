import React from 'react';

class DelayedButton extends React.Component {
  delayedClickSetup = (event) => {
    event.persist();

    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.delayedClickSetup}></button>
    )
  }
}

export default DelayedButton;
