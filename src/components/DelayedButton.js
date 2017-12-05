import React from 'react';

export default class DelayedButton extends React.Component {

  receiveDelay = (event) => {
    event.persist()
    setTimeout(()  => {
      this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <view>
        <button onClick={this.receiveDelay}
        >Get A Delay
        </button>
      </view>
    )
  }
}
