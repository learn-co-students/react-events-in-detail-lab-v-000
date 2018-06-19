import React from 'react';

export default class DelayedButton extends React.Component {
  onClick = (e) => {
    e.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, e);
  }
  render() {
    return (
      <button onClick={this.onClick}></button>
    );
  }
}
