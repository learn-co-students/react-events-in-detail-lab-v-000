import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  render(){
    return (
      <div className="CoordinatesButton">
        <button onClick={ (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY]) }></button>
      </div>
    )
  }

}
