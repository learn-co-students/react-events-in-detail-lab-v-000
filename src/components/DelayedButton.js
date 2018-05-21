// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (e) => {
    e.persist()
    // setTimeout(() => {
    //   this.props.onDelayedClick(e);
    // }, this.props.delay)
    
    setTimeout(this.props.onDelayedClick, this.props.delay, e)
  }
    
  render() {
    return (<button onClick={this.handleClick} delay={this.props.delay}>Delay!</button>);
  }
}

export default DelayedButton;
