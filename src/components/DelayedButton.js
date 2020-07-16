// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  render() {
    let handleClick = (event) => {
      event.persist();
      // const delayedEvent = event; (That won't work - it gets null attributes.)
      
      setTimeout( () => {
        // this.props.onDelayedClick(delayedEvent); (Again, this won't work.)
        this.props.onDelayedClick(event);
      }, this.props.delay);
    }

    return (
      <button onClick={handleClick}>Click me!</button>
    );
  }
}