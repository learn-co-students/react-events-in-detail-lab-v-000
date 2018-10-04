import React, { component } from 'react'

export default class DelayedButton extends React.Component {
    
    
    clickHander = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    

    render() {
        return (
            <button onClick={this.clickHander}>
            DelayedButton
            </button>
        )
    }
}