import React from 'react'

// This component takes in one prop: onReceiveCoordinates. This prop is a function 
// passed down from index.js. This function is currently just logging whatever is passed into it.
// Render a button. On click of the button, create an array with two elements: the X and Y 
// coordinates of the mouse. Find these using the event data.
// Pass this event data in as the argument for the onReceiveCoordinates prop.
// If successful, the current x,y position of the mouse should be logged.

export default class CoordinatesButton extends React.Component {
	handleClick = (event) => {
	  this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}

	render() {
	  return (
	    <button onClick={this.handleClick}>Coordinates</button>
	  )
	}
}
