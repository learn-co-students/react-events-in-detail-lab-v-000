import React from 'react'

class DelayedButton extends React.Component {

  clickEvent = (evt) => {
    evt.persist()
    setTimeout( () => {
      this.props.onDelayedClick(evt)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.clickEvent}>Button</button>
    )
  }

}

export default DelayedButton
