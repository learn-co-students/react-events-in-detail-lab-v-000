// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    const inputs = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(inputs);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}
