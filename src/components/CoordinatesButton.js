// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

	handleClick = (e) => {
		this.props.onReceiveCoordinates([e.clientX, e.clientY])
	}


	render() {
		return (
			<button className='coordinatesButton' onClick={this.handleClick}>Coordinates Button</button>
			)
	}


}

export default CoordinatesButton;