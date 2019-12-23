import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
	coordinatesArray = (e) => {
		let callback = [e.clientX, e.clientY]
		this.props.onReceiveCoordinates(callback)
		
	}

	render() {
		return (
			<button onClick={this.coordinatesArray}></button>
		)
	}
}
