import React from 'react';

class CoordinatesButton extends React.Component {
  
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this)  
  }

    handleClick = (event) => {
      var coordinates = [];
      coordinates.push(event.screenX);
      coordinates.push(event.screenY);
      this.props.onReceiveCoordinates(coordinates)
    }

  render() {
    return (
      <button onClick={this.handleClick}/>
    )
  }

}

export default CoordinatesButton