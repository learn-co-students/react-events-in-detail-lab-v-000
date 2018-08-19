// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    // Function for returning setTimeout
    returnTimeout = (event) => {
        // Note : Need to persist the event
        event.persist()
        
        // Note : setTimeout's first arg is a function
        setTimeout(() => {this.props.onDelayedClick(event)}, 
            this.props.delay)
    }

  render() {
    return (
      <div className="delayedbutton">
        <button onClick={this.returnTimeout}>Delayed Button</button>
      </div>
    );
  }
}
