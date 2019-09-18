// Code CoordinatesButton Component Here
import React, { Component } from 'react';
//import DelayedButton from './DelayedButton';

const mouseCoordinates = [];

//this.props.onReceivesCoordinates  receives prop 

export default class CoordinatesButton extends Component {

handleClick = (event) => {
	mouseCoordinates.push(event.clientX, event.clientY);  
	this.props.onReceiveCoordinates(mouseCoordinates)
	console.log('hello')
    console.log(mouseCoordinates)
	}

render(event, mouseCoordinates) {
    return (
    	<div>
    	<button onClick={this.handleClick}>
    	</button>
    	<div>
    	</div>
    	</div>
    	)
    }

}
