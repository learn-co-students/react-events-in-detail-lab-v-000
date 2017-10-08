// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

 

  
  onDelayedClick = (event) => {
    event.persist();
    const delay = 50;
    // let prt = () => {
    //   console.log(event.type);
    // }
    //setTimeout(prt, delay);
    setTimeout(() => {
      console.log(event.currentTarget);
    }, delay)
  }



  render() {
    return (
      <div>
      <button onClick={this.onDelayedClick} >Delayed button
      </button>

      </div>


    )
  }
}

export default DelayedButton



// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number). 
//(These props are only passed in the test suite, you will have errors in the browser)
// When the button is clicked, we want to persist the event so we can pass it to the 
//this.props.onDelayedClick() in a setTimeout() block. The setTimeout() will be set to this.props.delay.
