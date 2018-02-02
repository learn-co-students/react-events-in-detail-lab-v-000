import React from 'react';

class CoordinatesButton extends React.Component{
  handleClick = (e) => {
    const coordinates = [e.pageX, e.pageY]
    {this.props.onReceiveCoordinates(coordinates)}
  }

  render(){
    return(
      <button onClick={this.handleClick} />
    )
  }
}

export default CoordinatesButton
