// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    getCoords = (e) => {
        const coords = []

        coords.push(e.clientX)
        coords.push(e.clientY)
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.getCoords}>Coordinates</button>
        )
    }
}