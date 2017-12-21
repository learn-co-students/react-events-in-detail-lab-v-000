// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    return(this.props.onReceiveCoordinates([event["clientX"],event["clientY"]]))
  }

  render () {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;
