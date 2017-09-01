import React from 'react';

export default class CoordinatesButton extends React.Component {

    findCoordinates = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
           <button onClick={this.findCoordinates}></button> 
        )
    }
}