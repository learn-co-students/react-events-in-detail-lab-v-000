// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  click = (event) =>{
    
    this.props.onReceiveCoordinates([event.clientX, event.clientY])

  }
  render() {
    // const {x, y} = this.state
    return(
      <button onClick={this.click}>
       </button>
      );
    }
  }


export default CoordinatesButton