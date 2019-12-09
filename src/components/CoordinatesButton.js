// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

  cl = (e) => {
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }



  render() {
    return (
      <button onClick={this.cl}></button>

    )

  }


}

export default CoordinatesButton
