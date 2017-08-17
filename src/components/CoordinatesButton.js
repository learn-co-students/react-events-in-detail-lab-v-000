// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component {

	
	findLocation = (event) => {
		this.props.onReceiveCoordinates([event.screenX, event.screenY])
	}

	render() {
		return (
			<button onClick={this.findLocation}>Click</button>
		)
	}
}