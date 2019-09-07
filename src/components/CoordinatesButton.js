import React from 'react'

class CoordinatesButton extends React.Component {

  clickEvent = (evt) => {
    this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
  }

  render() {
    return (
      <button onClick={this.clickEvent}>Button</button>
    )
  }
}

export default CoordinatesButton
