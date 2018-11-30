// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

  click = (event) => (
    setTimeout(this.props.onDelayedClick(event.persist()), this.props.delay)
  )

  render() {
    return (
      <button onClick={this.click}>Button</button>
    )
  }
}
