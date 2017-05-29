import React from 'react';

export default class DelayedButton extends React.Component {
    constructor() {
        super();

        this.delayedClick = this.delayedClick.bind(this);
    }

    delayedClick(event) {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render() {
        return(
            <div>
                <button onClick={this.delayedClick}>Delayed Reaction</button>
            </div>
        );
    }
}