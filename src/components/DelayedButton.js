import React from 'react';

export default class DelayedButton extends React.Component {
	constructor() {
        super();
        this.getClick = this.getClick.bind(this);
    }
    
    getClick(event) {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event); }, this.props.delay);  
    }

    render() {
        return (
            <button onClick={this.getClick}>Delayed</button>
        )
    }
}