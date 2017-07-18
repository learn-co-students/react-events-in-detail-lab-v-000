import React from 'react'

export default class CoordinatesButton extends React.Component {

  findCoord= (event) => {
    var xy = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(xy);
}

  render() {
    return (
      <button onClick={this.findCoord}>Tickle me!</button>
    );
  }

}
