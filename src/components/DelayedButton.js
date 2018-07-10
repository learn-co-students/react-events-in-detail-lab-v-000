import React, {Component} from 'react';

class DelayedButton extends Component {
  
  defaultProps = {
    onDelayedClick: event => {
      event.persist()
    },
    delay: 10
  }

  render () {
    return (
      <button onClick={setTimeout(this.props.onDelayedClick, this.props.delay)}></button>
    )
  }
}

export default DelayedButton;