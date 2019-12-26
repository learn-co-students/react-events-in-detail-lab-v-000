// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    getCoordinates = (event) => {
        let coordinates = [
            event.clientX,
            event.clientY
        ]
        this.props.onReceiveCoordinates(coordinates)
    }
    
    render(props){
        return(
            <button onClick={this.getCoordinates}>Click me!</button>
        )
    }
}