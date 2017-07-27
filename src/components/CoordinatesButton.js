import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return(
            <div>
            <button onClick={this.handleClick}>Coordinates</button>
            </div>
        )
    }
}