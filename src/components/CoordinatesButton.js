import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
	logCoordinates = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return (
			<button onClick={this.logCoordinates}>Coordinates</button>
		)
	}
}
