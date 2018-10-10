// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
    constructor (props) {
        super(props);
        this.state = {
            onReceiveCoordinates: props.onReceiveCoordinates
        };
    }

    handleClick = (e) => {
        (this.props.onReceiveCoordinates)([e.clientX, e.clientY]);
    }  

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>Coordinates</button>
            </div>
        )
    }
  
}