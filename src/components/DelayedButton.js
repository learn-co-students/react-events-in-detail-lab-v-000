import React, { Component } from 'react';

class DelayedButton extends Component {

  constructor(props) {
    super(props)
  }

  onclick = (event) => {
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  }

  render() {
    return (
      <button onClick={ this.onclick } />
    )
  }
}

export default DelayedButton;
