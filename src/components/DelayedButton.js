import React from 'react';

export default class DelayedButton extends React.Component{

  handleClick = (event) => {
    const delay = this.props.delay
    event.persist()
    setTimeout(() => {
     this.props.onDelayedClick(event)
   }, delay)
  }

  render(){
    return (<button onClick={this.handleClick}>Delayed</button>)
  }

}
