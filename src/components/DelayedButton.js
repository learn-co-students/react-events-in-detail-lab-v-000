// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }

    onDelayedClick = (event) => {

    }

    render () {
        return (
            <button onClick={event => this.onDelayedClick(setTimeout(this.props.delay), event)}>Delayed Click</button>
        )
    }
}