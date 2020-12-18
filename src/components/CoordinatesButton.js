// Code CoordinatesButton Component Here
import React from "react"
export default class CoordinatesButton extends React.Component {
     handleClick = (event) => {
        const variable = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(variable)
    }

    render(){
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}