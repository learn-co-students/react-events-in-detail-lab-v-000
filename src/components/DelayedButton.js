// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
    onClick = (event) => {
        event.persist()
        // setTimeout(this.props.onDelayedClick, this.props.delay)
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
     render() {
        return (
          <button onClick={this.onClick}>Click Me!</button>
        );
    }
}