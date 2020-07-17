// Code CoordinatesButton Component Here
// import React { Component } from 'react';
import React from 'react';



export default class  CoordinatesButton extends React.Component {



  onReceiveCoordinatesCallback = (event) => {
    // let array1 = [event.clientX, event.clientY]
    let array1 = []
    array1.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(array1)
    // console.log(event)
  }


  render() {
    return(
      // <button onClick={ () => {this.props.onReceiveCoordinates} } > hi </button>
      <button onClick={ this.onReceiveCoordinatesCallback } > hi </button>
    )
  }

}


 //
 // export default class Clicker extends React.Component {
 //
 //   handleClick = (event) => {
 //     console.log(event.type); // prints 'click'
 //   }
 //
 //   render() {
 //     return (
 //       <button onClick={this.handleClick}>Click me!</button>
 //     );
 //   }
 // }

 // src/Matrix.js

  
//  constructor() {
//    super()
//    this.state = {
//      selectedColor: '#FFF'
//    }
//  }
//
//
// setSelectedColor = (newColor) => {
//    this.setState({
//      selectedColor: newColor
//    })
//  }

 //
 // export default class Clicker extends React.Component {
 //
 //   handleClick = (event) => {
 //     console.log(event.type); // prints 'click'
 //   }
 //
 //   render() {
 //     return (
 //       <button onClick={this.handleClick}>Click me!</button>
 //     );
 //   }
 // }
