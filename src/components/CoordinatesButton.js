// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinate Button</button>
        )
    }
}

export default DelayedButton
