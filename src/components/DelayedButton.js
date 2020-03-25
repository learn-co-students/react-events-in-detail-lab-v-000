// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }


    render() {
        return(
            <button onClick={this.handleClick}>Delayed</button>
        )
    }
}


// 1. In the components/DelayedButton.js file, create a DelayedButton React component

// 2. This component takes two props: onDelayedClick (a function), and delay (a number).

// 3. Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). 
// The setTimeout() should be set to this.props.delay.

//4.  If successful, the event will be logged to the console once the timeout has finished.

//5.  Hint: If you having trouble with this feature, remember event pooling in React. 
// By the time the setTimeout fires, the event object will have already been returned to the pool.
//  So how can we fix that?