import React from 'react';

class DelayedButton extends React.Component {

  onDelayedClick = (event) => {
    debugger
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, 
      this.props.delay)
  }

  render() {
    return (
      <button type="button" name="button" onClick={this.onDelayedClick}></button>
    )
  }
}

export default DelayedButton;
