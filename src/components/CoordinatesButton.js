import React, from 'react';

class CoordinatesButton extends React.Comnponent{
    array = (event) => {
        const coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates)
    }

    render (){
        return(
            <button onClick={this.array}>See Coordinates</button>
        )
    }
}

export default CoordinatesButton;