// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleCoordinates = (event) => {
        const coords = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coords);
    }
    render() {
        return <div><button onClick={this.handleCoordinates}/></div>
    }
}