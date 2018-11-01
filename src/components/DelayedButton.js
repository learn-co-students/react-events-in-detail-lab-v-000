import React from 'react'
// import CoordinatesButton from './CoordinatesButton';
class DelayedButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      delay: this.props.delay
    }
  }

  delayed = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {

    return (
      <button onClick={this.delayed}>
      </button>
    )

  }
}

export default DelayedButton
