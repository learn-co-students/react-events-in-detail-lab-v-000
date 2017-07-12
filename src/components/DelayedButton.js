// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
    this.delayButton = this.delayButton.bind(this)
  }
  
  delayButton(e){
    e.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
   return (
    <button onClick={this.delayButton}>click me</button>
   )
  }
  }
  



export default DelayedButton