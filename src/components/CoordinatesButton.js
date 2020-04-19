// Code CoordinatesButton Component Here
import React, { Component} from 'react';

class CoordinatesButton extends Component {

    
    render() {

        const onReceiveCoordinates = this.props.onReceiveCoordinates

        function passMouseCoordinates(e) {
            return onReceiveCoordinates([e.clientX, e.clientY]);
        }

        return <button onClick={passMouseCoordinates}>Hello World!(CoordinatesButton)</button>
    }
}

export default CoordinatesButton