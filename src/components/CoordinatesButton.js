import React from 'react';


export default class CoordinatesButton extends React.Component {
    coordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    render() {
        return (
            <button onClick={this.coordinates}>Coordinates</button>
        )
    }
}

