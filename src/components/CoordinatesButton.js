import React from 'react';

export default class CoordinatesButton extends React.Component {
    handleEvent = (event) => {
        this.props.onReceiveCoordinates([event.pageX, event.pageY])
    }
    

    render() {
        return(
            <button onClick={this.handleEvent}>Receive Coordinates</button>
        )
    }

}

// onReceiveCoordinates = (event) => {
//     const mouseLocation = [event.pageX, event.pageY]
//     return mouseLocation
// }