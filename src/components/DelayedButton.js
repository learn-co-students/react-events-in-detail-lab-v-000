// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component {



  cl = (e) => {

    //debugger

    //let event = e.type
    e.persist()

    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.cl}></button>
    )

  }


}

export default DelayedButton
