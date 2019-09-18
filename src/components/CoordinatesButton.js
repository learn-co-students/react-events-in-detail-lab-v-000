// Code CoordinatesButton Component Here
import React, { Component } from 'react';
//import DelayedButton from './DelayedButton';

const mouseCoordinates = [];


export default class CoordinatesButton extends Component {

handleClick = (event) => {
	mouseCoordinates.push(event.clientX, event.clientY);  
	}

render(props) {
    return (
    	<div>
    	<button onClick={this.handleClick.bind()}>
    	</button>
    	<div>{this.props.onReceiveCoordinates(mouseCoordinates)}</div>
    	</div>
    	)
    }
}