import React from 'react';

export default class CoordinatesButton extends React.Component {
	constructor() {
        super();
        this.getClick = this.getClick.bind(this);
    }

    getClick(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.getClick}>Click me!</button>
        )
    }
}