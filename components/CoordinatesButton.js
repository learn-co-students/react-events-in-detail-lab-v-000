import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Coordinates!</button>
      </div>
      )
  }

}