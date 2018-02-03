import React from 'react';


class CoordinatesButton extends React.Component {
 	
  
  		getCoordinates = (event) => {
    		
    		this.props.onReceiveCoordinates([event.screenX, event.screenY])
  		}
  	
 
  	render() {
    	return (
      		<button onClick={this.getCoordinates } >Get coordinates.</button>
    	);
  	}
}

export default CoordinatesButton

