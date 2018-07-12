import React from 'react'
import ReactDOM from 'react-dom'

export default class DelayedButton extends React.Component {

  handleClick = (e) => {
    let test = e;
    e.persist();

    setTimeout(() => (this.props.onDelayedClick(e)), this.props.delay)
  }

  onDelayedClick = (e) => {
    e
  }


  render() {
    return (
    <button onClick={this.handleClick}>LOL</button>
    )
  }
}
