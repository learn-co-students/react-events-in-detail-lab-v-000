import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let arr = [];
    arr.push(event.pageX);
    arr.push(event.pageY);
    this.props.onReceiveCoordinates(arr);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    )
  }
}

export default CoordinatesButton;