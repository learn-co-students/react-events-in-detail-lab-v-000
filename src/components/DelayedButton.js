import React from 'react';
// Code DelayedButton Component Here

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
      }, this.props.delay
    )
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
