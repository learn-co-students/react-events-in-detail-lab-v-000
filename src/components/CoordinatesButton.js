import React from 'react'

export default class CoordinatesButton extends React.Component {

	getCoords = (e) => {
		this.props.onReceiveCoordinates([e.clientX, e.clientY])
	}

	render () {
		return (
			<button onClick={this.getCoords}>
				Click Me
			</button>
		)
	}
}