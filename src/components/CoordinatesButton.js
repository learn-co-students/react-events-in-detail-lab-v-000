

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    cb = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.cb}>Coordinates</button>
            </div>
        )
    }
}