// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    handleButtonClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return (
            <button onClick={this.handleButtonClick}>Coordinates</button>
        )
    }
}

export default CoordinatesButton