import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.coordinates = this.coordinates.bind(this);
  };

  coordinates(event){
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render(){
    return(
      <button onClick={this.coordinates}>Click me</button>
    );
  }
}
