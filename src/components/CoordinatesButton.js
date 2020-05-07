import React from 'react'

class CoordinatesButton extends React.Component {

  render() {
    return <button onClick={this.mouseCoordinates}> </button>
  }

  mouseCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}

export default CoordinatesButton