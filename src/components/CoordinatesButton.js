import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

	getCoordinates = (event) => {
		let x = event["clientX"]
    	let y = event["clientY"]
    	let array = [x,y]
    	this.props.onReceiveCoordinates(array)
	}

	render() {
		return (
			<button onClick={this.getCoordinates} />
		)
	}


}