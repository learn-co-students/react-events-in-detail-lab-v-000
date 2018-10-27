// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }
  getCoordinates = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.getCoordinates}></button>
    )
  }
}
