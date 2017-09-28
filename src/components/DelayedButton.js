// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
  delayEvent = (event) => {
    event.persist()
    this.props.onDelayedClick(event)
  }

  render() {
    return(
      <div>
        <button onClick={this.delayEvent}/>
      </div>
    )
  }
}

export default DelayedButton
