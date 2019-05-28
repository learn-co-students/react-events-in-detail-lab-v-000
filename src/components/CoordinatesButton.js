// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

	handleClick = (event) => {
		const coordinates = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(coordinates)
	}

	render() {
		return(
			<button onClick={this.handleClick}>Get Coordinates</button>
		)
	}
}
