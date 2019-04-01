// Code CoordinatesButton Component Here
import React from 'react';

// create a CoordinatesButton React component
export default class CoordinatesButton extends React.Component {

  currentCoordinates = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)//function passed down from index.js
  }
//renders a button; on click, creates an array with 2 elements. event data uses client X & Y to find coordinates of click
  render(){
    return (
      <button onClick={this.currentCoordinates}>Click me!</button>
    )
  }
}
