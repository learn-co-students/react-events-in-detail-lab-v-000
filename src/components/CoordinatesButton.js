import React from 'react'

// import DelayedButton from './DelayedButton';
class CoordinatesButton extends React.Component {

clicked = (event) => {
    var x = event.clientX
    var y = event.clientY
    return this.props.onReceiveCoordinates([x, y])
}

  render() {

    return (
      <button onClick={this.clicked}>
      </button>
    )

  }
}

export default CoordinatesButton
