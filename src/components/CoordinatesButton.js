import React from 'react'

class CoordinatesButton extends React.Component {
   
    getCoordinates = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.getCoordinates}>Coordinates Button</button>
        );
    }
}

export default CoordinatesButton;