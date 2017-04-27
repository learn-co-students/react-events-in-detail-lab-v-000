import React from 'react'

export default class CoordinatesButton extends React.Component{
	constructor(){
		super();
		this.handleEvent = this.handleEvent.bind(this);
	}
	handleEvent(event){
		this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}
	render(){
		return(
			<button onClick={this.handleEvent}>Coordinates</button>
		)
	}
}