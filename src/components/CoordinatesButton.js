import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    //console.log(event.screenX)
  }

  render() {
    return(
      <button onClick={this.handleClick}>See Coordinates!</button>
    );
  }
}
