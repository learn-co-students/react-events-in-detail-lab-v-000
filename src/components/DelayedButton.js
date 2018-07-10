import React, {Component} from 'react';

class DelayedButton extends Component {
  
  defaultProps = {
    onDelayedClick: event => {
      return event
    },
    delay: 10
  }

  myCallback = event => {
    const newEvent = event.persist()
    setTimeout(() => this.props.onDelayedClick(newEvent), this.props.delay);
  }

  render () {
    return (
      <button onClick={this.myCallback}></button>
    )
  }
}

export default DelayedButton;