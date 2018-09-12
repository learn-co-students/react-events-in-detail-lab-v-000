import React from 'react'

export default class DelayedButton extends React.Component {

  handleClickEvent = (e) => {
    e.persist();
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickEvent}></button>
      </div>
    )
  }
}