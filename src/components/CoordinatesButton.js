// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    trackMouse = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return (
            <div>
                <button onClick={this.trackMouse}>Coordinates</button>
            </div>
        )
    }
}