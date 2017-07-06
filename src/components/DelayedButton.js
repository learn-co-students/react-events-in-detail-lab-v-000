import React from 'react';

export default class DelayedButton extends React.Component{




  delayClick = (event) => {
    event.persist()
    window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return <button onClick={this.delayClick}> Delayed button </button >
  }
}
