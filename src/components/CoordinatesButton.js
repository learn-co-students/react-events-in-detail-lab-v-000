// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    constructor(props){
        super(props)
    }

    handleCoords = (event) => {
        let x = event.clientX
        let y = event.clientY
        let coords = [x, y]
        return this.props.onReceiveCoordinates(coords)
    }
        

        
    render(){
        return(
            <button onClick={this.handleCoords}>CoordsButton</button>
        )
    }
}