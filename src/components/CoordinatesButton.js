 import React, { Component } from 'react';


 export default class CoordinatesButton extends Component {

     constructor(){
         super()

     }

     handleOnClick = (event) => {
         const coors = [event.clientX, event.clientY]
         this.props.onReceiveCoordinates(coors)

     }

     render(){
         return (
             <button onClick={this.handleOnClick} className='CoordinatesButton'>Coordinates</button>
         )
     }
 }
