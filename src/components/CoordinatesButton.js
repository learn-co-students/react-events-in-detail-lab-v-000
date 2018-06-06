import React from 'react';

export default class CoordinatesButton extends React.Component {

	// when you click the button, pass in the event data as arguments into the onReceiveCoordinates() function which lives in the components props
	
	handleClick = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}

	render() {
		return (
			<button onClick={this.handleClick}>Mouse Coordinates</button>
		);
	}
}