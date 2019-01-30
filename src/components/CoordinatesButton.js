// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
    
    }
    handleClick = (event) => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}