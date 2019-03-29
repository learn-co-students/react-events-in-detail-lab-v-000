import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    logCoords = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.logCoords}>X and Y!</button>
        )
    }
}