// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {
    loc = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    render() {
            return ( <button onClick={this.loc}>Coordinates</button> );
    }
}

export default CoordinatesButton
