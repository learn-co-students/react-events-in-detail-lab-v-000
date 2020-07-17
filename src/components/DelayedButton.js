// Code DelayedButton Component Here

import React from 'react';


export default class  DelayedButton extends React.Component {


// why can't you use 'this' in setTimeout? it gives the error that 'this' is a reserved
// word.
  onDelayedClickCallback = (event) => {
    event.persist()
    // {callBackClick, delay} = this.props
    const callBackClick = this.props.onDelayedClick
    const delay = this.props.delay
    // we do this to avoid calling callBackClick but rather pass it in as a function
    setTimeout(() => callBackClick(event), delay)
  };

  render() {
    return(
      <button onClick={this.onDelayedClickCallback}></button>
    )
  }

}
