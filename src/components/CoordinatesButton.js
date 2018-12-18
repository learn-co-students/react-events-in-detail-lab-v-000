import React, {Component} from 'react';

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component {

    getCoordinates= (e) => {
        var array = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(array);
    }


    render() {
        return (
            <button onClick={this.getCoordinates}>Get Coordinates!</button>
        );
    }
}
