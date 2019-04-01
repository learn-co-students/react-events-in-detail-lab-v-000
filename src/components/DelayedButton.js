// Code DelayedButton Component Here
import React from 'react';


// create a DelayedButton React component
export default class DelayedButton extends React.Component{


// component takes 2 props. onDelayedClick and a delay
  clickEvent = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay)
  }



  //create a button onclick
  render(){
    return (
      <button onClick={this.clickEvent}>Delayed Click!</button>
    )
  }
}
