import React, {Component} from 'react';

export default class CoordinatesButton extends Component { 

    createArray = (event) => {
        const mouseCoordinates= [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render () {

        return (
                <div>
                    <button onClick={this.createArray}>XY Values</button>
                </div>)
    }





}
