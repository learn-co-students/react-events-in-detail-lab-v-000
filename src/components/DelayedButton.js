// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  persistEvent = (event) => {
    event.persist();
    const fn = this.props.onDelayedClick(event)
    setTimeout(function() {fn}, this.props.delay);
  }


  render() {
    return (
      <button onClick={this.persistEvent}>Delayed Button</button>
    )
  }
}

export default DelayedButton
