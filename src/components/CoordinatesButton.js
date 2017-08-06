import React from 'react';

class CoordinatesButton extends React.Component {

	constructor() {
		super(); 
	}
  buttonClicked = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]); 
  }


  render() {
    return(
    <button onClick={this.buttonClicked} >
    	Click me! 
    </button>
    )
  } 
}

export default CoordinatesButton;