// Code CoordinatesButton Component Here
import React, {Component} from 'react'; 

class CoordinatesButton extends Component{
	constructor(props){
		super(props)
		this.state = {
		onReceiveCoordinates: this.props.onReceiveCoordinates 
		}
	}
	logMouseCoord(e){
	  let mouseX = e.clientX 
	  let mouseY = e.clientY
	  this.state.onReceiveCoordinates([mouseX, mouseY]); 
	}
	render(){
		return (<button onClick={this.logMouseCoord.bind(this)} >Log Mouse Coordinates</button> );
	}
}


export default CoordinatesButton; 

