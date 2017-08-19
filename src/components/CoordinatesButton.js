import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render () {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}

// For reference: https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6 
