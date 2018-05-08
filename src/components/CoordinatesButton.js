// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenY, event.screenX]);
  };

  render() {
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
export default CoordinatesButton
