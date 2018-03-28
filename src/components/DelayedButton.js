import React from 'react';

export default class DelayedButton extends React.Component {

  myDelayFunc = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  };

  render() {
    return (
      <div>
        <button onClick={this.myDelayFunc}>My Button</button>
      </div>
    )
  }
}
