// Code CoordinatesButton Component Here
import React, { Component } from 'react';



export default class CoordinatesButton  extends Component {


handleClick = (event) => {
       const coordArr = [event.clientX, event.clientY]
       return (
           this.props.onReceiveCoordinates(coordArr)
       )
   }

   render() {
       return (
           <button onClick={this.handleClick}>button</button>
       )
   }
 }
