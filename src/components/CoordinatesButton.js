import React, { Component } from 'react';
// import  from './';



export default class CoordinatesButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  argumentPass = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }



  render() {
    return (
      <div className="">
        <button onClick={this.argumentPass}></button>
      </div>
    )
  }
}
