// Code CoordinatesButton Component Here
import React from 'react'
class CoordinatesButton extends React.Component {
  buttonClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }
  render() {

    return (
      <button onClick={this.buttonClick} />
    )
  }

}

export default CoordinatesButton
