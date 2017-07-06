import React from 'react'

export default class CoordinatesButton extends React.Component {
  coordinates = (event) => {this.props.onReceiveCoordinates([event.clientY, event.clientX])}

  render() {
    return <button onClick={this.coordinates}> Click Me! </button>
  }
}
