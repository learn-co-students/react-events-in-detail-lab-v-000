// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
    render(){
        let getCoordinates = (event) => {
            let coordinates = []

            coordinates.push(event.clientX)
            coordinates.push(event.clientY)

            this.props.onReceiveCoordinates(coordinates)
        }
        return(
            <button onClick={getCoordinates}>
                Mouse Geolocation Services
            </button>
        )
    }
}

export default  CoordinatesButton;