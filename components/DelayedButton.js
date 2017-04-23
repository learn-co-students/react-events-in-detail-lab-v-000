import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
    this.persistEvent = this.persistEvent.bind(this)
  }
  persistEvent(event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  
  render() {
    return <button onClick={this.persistEvent}>CLICK ME!</button>
  }
}