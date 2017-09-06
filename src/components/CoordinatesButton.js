// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component{

	eventHandler = (event) => {
    	this.props.onReceiveCoordinates([event.clientX , event.clientY]); // prints 'click'
  }

  render(){
  	return(
  		<button onClick={this.eventHandler}>Click me!</button>
 )}
}