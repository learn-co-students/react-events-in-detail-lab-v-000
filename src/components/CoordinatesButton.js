// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    oRC = this.props.onReceiveCoordinates;

    getXY = (event) => {
        const theArray = [event.clientX, event.clientY];
        console.log("Inside getXY: ", theArray);
        return theArray; 
    }

    
    render() {
        
        return (
            <button onClick={(e)=>{this.oRC(this.getXY(e))}}>Button</button>
            )
    }
}
