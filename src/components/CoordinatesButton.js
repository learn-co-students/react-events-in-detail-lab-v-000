import React from "react"

class CoordinatesButton extends React.Component {
  clickMe = (event) => {
    event.persist()
    const coordinates = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return(
      <button onClick={this.clickMe}>Coordinate</button>
    )
  }
}

export default CoordinatesButton
