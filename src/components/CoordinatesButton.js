// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {

	handleClick = (event) => {
		const array = [];
		array.push(event.clientX, event.clientY)
		this.props.onReceiveCoordinates(array);
		// could have explicitly put the array into the parameters
	}

	render () {
		return(
		<button onClick={this.handleClick}>Coordinate!</button>
		)
	}
}


export default CoordinatesButton;

