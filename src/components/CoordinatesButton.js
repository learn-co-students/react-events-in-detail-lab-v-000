// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

	handleClick = (event) => {
		const ary = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(ary)
	}	

	render(){
		return (
			<button onClick={this.handleClick} >Coordinate Button</button>
			)
	}
}