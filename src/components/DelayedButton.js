// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (e) => {
        // const event = e;  // Try 1
        // setTimeout(this.props.onDelayedClick.bind(null,event),this.props.delay);

        // e.persist;   // Try 2
        // setTimeout(this.props.onDelayedClick.bind(null,e),this.props.delay);

        // const event = e;  // Try 3
        // setTimeout(this.props.onDelayedClick,this.props.delay,event); 
        
        e.persist;   // Try 4
        setTimeout(this.props.onDelayedClick(e),this.props.delay);       
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>
                    Delayed
                </button>
            </div>
        )
    }
  
}