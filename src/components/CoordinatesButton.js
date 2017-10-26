import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        const xPosition = event.clientX;
        const yPosition = event.clientY;
        
        this.props.onReceiveCoordinates([xPosition, yPosition]);
    }

    render() {
        return (
            <button onClick={this.handleClick}> 
                Click me!
            </button>
        )
    }
}

export default CoordinatesButton;

