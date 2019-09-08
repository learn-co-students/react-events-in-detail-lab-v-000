import React from 'react';


class DelayedButton extends React.Component{
  handleClick = (event) => {
    event.persist();

    setTimeout(() => {
      this.props.onDelayedClick(event)
 }, this.props.delay);



  }

  render(){
    return(
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}



export default DelayedButton;



// Code DelayedButton Component Here


// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number). (These props are only passed in the test suite, you will have errors in the browser)
// When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick() in a setTimeout() block. The setTimeout() will be set to this.props.delay.
