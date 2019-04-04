// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        const mouseCoordinates = [
            event.clientX,
            event.clientY
        ]
        
        this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>            
        )
    }
}