import React, { Component} from 'react'
export default class CoordinatesButton extends Component {

	v = (event) => {
		let x = event.clientX;
		let y = event.clientY;
		let coords = [x, y];
		this.props.onReceiveCoordinates(coords);
	}

	render() {
		return (
			<button
			onClick={this.v}>
			</button>
		)
	}
}