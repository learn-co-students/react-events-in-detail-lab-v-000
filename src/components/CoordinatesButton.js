// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    let coordinate = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coordinate);
  }

  render(){
    return (
      <button onClick={this.handleClick} />
    )
  }
}