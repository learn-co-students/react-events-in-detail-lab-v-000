// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends React.Component {
    coords = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
      }
    
    
      render() {
        return <button onClick={this.coords}>Click Me!</button>;
      }
    
    
    }
   
