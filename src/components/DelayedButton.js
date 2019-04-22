// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {

  coordinate = event => {
    // If you want to access the event properties in an
    // asynchronous way, you should call event.persist() on
    // the event, which will remove the synthetic event from
    // the pool and allow references to the event to be retained
    // by user code.
    event.persist();
    setTimeout(() => {
        this.props.onDelayedClick(event)
      },
      this.props.delay);
  };

  render() {
    return(
      <button onClick={this.coordinate}>Delayed Execution</button>
    )
  }

}


export default DelayedButton
