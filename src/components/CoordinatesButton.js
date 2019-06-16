import React from 'react'

export default class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.getCoordinates}>X&amp;Y</button>
      </div>
    )
  }

}
