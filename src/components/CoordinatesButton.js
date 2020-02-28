// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
	// constructor(props){
	// 	super()

	// 	this.onRecievedCoordinates = props.onRecievedCoordinates
	// }

	getCoordinates = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		return <button onClick={this.getCoordinates} ></button>
	}
}

export default CoordinatesButton
