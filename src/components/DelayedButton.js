import React from 'react';

class DelayedButton extends React.Component{
  timedClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }
  //setTimeout--whatever onDelayedClick does, it needs access to event
  //this.props.delay is the number of seconds before this function fires
  render() {
    return(
      <button onClick={this.timedClick}>Delayed Button</button>
    )
  }
}

export default DelayedButton
