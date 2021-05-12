import React from 'react'
// Code CoordinatesButton Component Here
export default class CoordinatesButton extends React.Component{

    render(){
        return (
            <button onClick={(event)=>this.props.onReceiveCoordinates([event.clientX, event.clientY])}/>
        )
    }
}
