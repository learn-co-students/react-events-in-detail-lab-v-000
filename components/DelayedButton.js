import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super()

    this.click = this.click.bind(this)
  }

  click(e) {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={ this.click }></button>
    )
  }
}