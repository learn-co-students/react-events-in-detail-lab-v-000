// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

	handleClick = (event) => {
		let coordArray = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(coordArray);
	}

	render() {
		return (
			<button onClick={this.handleClick} />
			)
	}


}