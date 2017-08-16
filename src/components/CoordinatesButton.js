import React from 'react';

class CoordinatesButton extends React.Component { 
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
      }
   
      render() {
        return <button onClick={this.handleClick}>Click for coordinates!</button>
      }
      
     
  }
   
  export default CoordinatesButton;
  