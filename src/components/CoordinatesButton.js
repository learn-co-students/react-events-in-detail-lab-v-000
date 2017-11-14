// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

    buttonClicked = (event) => {
        const coordinatesArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render(){
        return (
            <button onClick={this.buttonClicked}>Clicky click</button>
        )
    }
}

export default CoordinatesButton