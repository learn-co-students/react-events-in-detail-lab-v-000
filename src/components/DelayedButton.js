import React, { Component } from 'react';

export default class DelayedButton extends Component {
  handleClick = e => {
    e.persist();
    this.props.onDelayedClick(e);
  };

  render() {
    return (
      <div>
        <button onClick={e => this.handleClick(e)} />
      </div>
    );
  }
}
