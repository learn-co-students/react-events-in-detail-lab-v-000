import React, { Component} from 'react';

export default class DelayedButton extends Component {

    handleDelay = (e) => {
        e.persist()
        setTimeout(() => {
          this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render(){
        return (
            <button onClick={this.handleDelay}>Click Me</button>
        )
    }
}