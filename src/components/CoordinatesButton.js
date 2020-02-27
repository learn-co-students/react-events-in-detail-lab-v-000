// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    getCoordinates = (e) => {
        const x = e.screenX;
        const y = e.screenY;
        this.props.onReceiveCoordinates([x, y]);
    }

    render() {
        return (
            <button onClick={this.getCoordinates}>Get Coordinates!</button>
        );
    }
}

export default CoordinatesButton;