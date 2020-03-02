import React from 'react';

class CoordinatesButton extends React.Component {
	receiveCoordinates = (e) => {this.props.onReceiveCoordinates([e.clientX, e.clientY])}
	
	render() {
		return (
			<button onClick={this.receiveCoordinates}></button>
		)
	}
}

export default CoordinatesButton;