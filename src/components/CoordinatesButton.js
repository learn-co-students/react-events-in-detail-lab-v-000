// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

	coordinate = (event) => {
		this.props.onReceiveCoordinates([event.clientX,event.clientY])
	}


	render() {
		return(
			<button onClick={this.coordinate}>Find Cooordinates</button>
			)
	}

}

export default CoordinatesButton