// Code CoordinatesButton Component Here
import React, { Component} from 'react';

export default class CoordinatesButton extends Component {

    clickFunction = (event) => {
        this.props.onReceiveCoordinates([event.pageX, event.pageY])
    }
    render(){
        return (
            <button onClick={this.clickFunction}>Click Me</button>
        )
    }
}