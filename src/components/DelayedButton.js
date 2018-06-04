// Code CoordinatesButton Component Here
import React from 'react'
class DelayedButton extends React.Component {
  buttonClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}
      , this.props.delay
    )
  }
  render() {

    return (
      <button onClick={this.buttonClick} />
    )
  }

}

export default DelayedButton
