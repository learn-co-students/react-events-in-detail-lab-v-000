import React from 'react'
import ReactDOM from 'react-dom'

export default class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    let array = [];
    let x = e.clientX;
    let y = e.clientY;
    array.push(x),
    array.push(y)
    this.props.onReceiveCoordinates(array)
  }
  onReceiveCoordinates = (array) => {
    return array
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    )
  }
}
