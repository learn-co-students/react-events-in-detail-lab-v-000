import React from 'react';

export default class CoordinatesButton extends React.Component {

  trigger = (e) => {
    const x = e.screenX;
    const y = e.screenY;
    const coords = [x,y]
    this.props.onReceiveCoordinates(coords);
  }


  render() {
    return (
      <button onClick={this.trigger}>herman melville</button>
    )
  }

}
