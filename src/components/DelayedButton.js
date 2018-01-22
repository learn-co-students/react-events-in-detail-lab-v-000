import React from 'react';

class DelayedButton extends React.Component {
   
    delayEvent = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayEvent}>Delay Button</button>
        );
    }
}

export default DelayedButton;