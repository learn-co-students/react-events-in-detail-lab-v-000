// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  delayer = (event) => {
    event.persist();

    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);

  }

  render () {
    console.log(this.props);
    return (
      <button onClick={this.delayer}>No, click me!</button>
    );
  }
}

export default DelayedButton;
