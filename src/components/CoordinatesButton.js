import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    return this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)} />
    )
  }

}
