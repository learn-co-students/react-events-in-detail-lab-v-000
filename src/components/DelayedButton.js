import React from 'react';

class DelayedButton extends React.Component {

  persistable = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.persistable}>Click me</button>
    );
  }
}

export default DelayedButton;
