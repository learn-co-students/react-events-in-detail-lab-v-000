// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let newArray = [event.clientX, event.clientY]
        console.log(this)
        this.props.onReceiveCoordinates(newArray)
    }

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }

}

export default CoordinatesButton