import React from 'react';

class CoordinatesButton extends React.Component {

	onMouseClick = event => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}

	render() {
	    return (
	    	<div>
		    	<button onClick={this.onMouseClick}>
		    	Click me</button>
	    	</div>
	    )
	}

}

export default CoordinatesButton;
