// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    
    collectMouseData = (event) =>{
        const mouseData = []
        mouseData.push(event.clientX)  
        mouseData .push(event.clientY)
        this.props.onReceiveCoordinates(mouseData)
    }
    
    render(){
        return(
            <button
            onClick  = {this.collectMouseData}>
            Log Mouse Coordinates</button>
        )
    }
}
