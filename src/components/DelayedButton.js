import React from 'react';

class DelayedButton extends React.Component {

  constructor() {
  	super(); 
  }
  
  buttonClicked = (event) => {
    event.persist(); 
    setTimeout(() => {
    	this.props.onDelayedClick(event)}, 
    	this.props.delay); 
  }

  render() {
    return(
    <button onClick={this.buttonClicked}>
    	Click me! 
    </button>
    )
  } 
}

export default DelayedButton;// Code DelayedButton Component Here