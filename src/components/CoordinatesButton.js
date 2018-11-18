// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    //console.log(event.type); // prints 'click'
    var coordinates = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }

}
