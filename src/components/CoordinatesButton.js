import React, { Component } from 'react';

class CoordinatesButton extends Component {
  
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    ary = new Array(event.clientX, event.clientY)
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}></button>
    );
  }
}
 
export default CoordinatesButton;