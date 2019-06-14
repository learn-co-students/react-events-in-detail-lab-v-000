// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        const array = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(array);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}