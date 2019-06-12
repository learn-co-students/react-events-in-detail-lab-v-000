import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    clickHandler = (event) => {
        const coordinates = [event.pageX, event.pageY];
        return (
            this.props.onReceiveCoordinates(coordinates)
        )
    }

    render() {

        return (
           <button onClick={this.clickHandler}></button> 
        )
    }
}