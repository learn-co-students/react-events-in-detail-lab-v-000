import React, { Component } from 'react';

export default class DelayedButton extends Component {

  clickDelayedCoordinates = (e) => (
    setTimeout(() => {
      this.props.onDelayedClick(e)
      e.persist()
    }, this.props.delay)
  )

  render() {
    return (
      <div>
        <button onClick={this.clickDelayedCoordinates}>delayed</button>
      </div>
    )
  }

}
