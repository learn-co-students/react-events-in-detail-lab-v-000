// Code CoordinatesButton Component Here
// import React { Component } from 'react';
import React from 'react';



export default class  CoordinatesButton extends React.Component {



  onReceiveCoordinates = (event) => {
    // let array1 = [event.clientX, event.clientY]
    // this.props.onReceiveCoordinates
    console.log(event)
  }


  render() {
    return(
      <button onClick={ () => {this.onReceiveCoordinatesCallback} > hi </button>
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
