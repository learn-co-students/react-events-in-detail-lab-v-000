// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';


export default class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {
    let cords = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(cords)
  }

  render() {
    return(
      <div>
        <button onClick={this.getCoordinates}></button>
        </div>
    );
  }
}

