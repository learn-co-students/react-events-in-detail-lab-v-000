import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
  }

  clicked = (event) => {
    event.persist();

    setTimeout(
      () => this.props.onDelayedClick(event), this.props.delay
    );
  }

  render() {
    return (
      <button onClick={this.clicked}>Click me!</button>
    );
  }
}

export default DelayedButton;
