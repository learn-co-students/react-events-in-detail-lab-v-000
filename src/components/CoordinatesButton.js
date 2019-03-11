import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
 
  render() {
    return (
      <div>
        <button className="button btn-primary btn" onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;