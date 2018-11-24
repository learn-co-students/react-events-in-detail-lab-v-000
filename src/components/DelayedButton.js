import React from 'react';

export default class DelayedButton extends React.Component {
    
    handleClick = (event) => {
        event.persist()
        const savedEvent = event
        setTimeout(this.props.onDelayedClick, this.props.delay, savedEvent)
    }

    render() {
        return(
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}
