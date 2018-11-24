import React from 'react';

export default class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        const coords = [event.clientX, event.clientY]
        
        this.props.onReceiveCoordinates(coords)
    }
    
    render() {
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}
