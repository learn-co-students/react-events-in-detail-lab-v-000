// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  //make click handler & pass event as argument
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]) //pass coord to props.onReceiveCoordinates
  }

  //render button & pass to clickHandler onClick
  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton