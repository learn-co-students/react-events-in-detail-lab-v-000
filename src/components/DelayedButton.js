// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {
  startDelay = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render(){
    return(
      <button onClick={this.startDelay}>Delayed Button</button>
    )
  }
}

export default DelayedButton;
