import React from 'react';

export default class CoordinatesButton extends React.Component {
    getCoordinates = (e) => {
        const x = e.screenX;
        const y = e.screenY;
        this.props.onReceiveCoordinates([x, y]);
    }
    render() {
        return (<button onClick={this.getCoordinates}>Get Coordinates!</button>)
    }
}