import React from 'react';

export default class CoordinatesButton extends React.Component {
  clickListener = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render () {
    return (
      <button onClick={this.clickListener}>Click Me!</button>
    )
  }
}
