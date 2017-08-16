import React from 'react';

class DelayedButton extends React.Component { 
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
            let timeOut
            event.persist()
            timeOut = window.setTimeout(this.props.onDelayedClick(event), this.props.delay);
        }
   
      render() {
        return <button onClick={this.handleClick}>Delayed Button</button>
      }
      
  }
   
  export default DelayedButton;


