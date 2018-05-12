import React from 'react'

class CoordinatesButton extends React.Component{
  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render (){
    return(
      <div className="coordinatesButton">
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
