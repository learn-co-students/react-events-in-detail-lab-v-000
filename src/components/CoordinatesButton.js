import React from 'react'

export default class CoordinatesButton extends React.Component {
	handleClick = (event) => {
		const arr = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(arr)
	}

	render () {
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		)
	}
}
