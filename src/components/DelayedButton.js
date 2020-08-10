import React, { Component } from 'react'


export default class DelayedButton extends Component {

    delayClick = (event) => {
      event.persist();
      setTimeout(() => {
        this.props.onDelayedClick(event)}, this.props.delay
      )
    }


    render() {
        return (
            <div>
              <button onClick={this.delayClick}>Delayed Button</button>
            </div>
        )
    }
}
//   Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.

// Use the syntax for an anonymous function:
//setTimeout(() => { alert('Howdy!'); }, 2000);
