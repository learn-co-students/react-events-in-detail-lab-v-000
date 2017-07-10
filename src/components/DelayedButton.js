// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {

  click = (e) => {
    e.persist();
    window.setTimeout(this.props.onDelayedClick(e), this.props.delay);
  }

  render() {
    return <button onClick={this.click}>button 2</button>
  }
}
