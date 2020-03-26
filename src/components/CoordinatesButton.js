// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component{
  clickMe = (event) => {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])

  }

  render(){
    return(
      <div>
        <button onClick={this.clickMe}> </button>
        <onReceiveCoordinates/>
      </div>
    )
  }

}
