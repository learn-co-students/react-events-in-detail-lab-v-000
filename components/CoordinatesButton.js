import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super()

    this.click = this.click.bind(this)
  }

  click(e) {
    // console.log(e)
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return(
      <button onClick={ this.click }></button>
    )
  }
}