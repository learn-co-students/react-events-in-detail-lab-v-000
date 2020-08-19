// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    // constructor(props){
    //     super()
    //     this.props.onReceiveCoordinates
    // }

    handleClick = (event) => {
        const coords = [event.clientX, event.clientY]
        // const yCoord = event.clientY
        console.log(coords)
        this.props.onReceiveCoordinates(coords)
    }
    render(){
        
        return(
            // console.log(this.props.onReceiveCoordinates.mouseCoordinates)
            <button onClick={this.handleClick}>Coordinates
            </button>
            
        )
    }
}