import React from 'react';

class DelayedButton extends React.Component {

  delayClickEvent = (event) => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayClickEvent}>
      Delay Button
      </button>
    )
  }
}

export default DelayedButton;
