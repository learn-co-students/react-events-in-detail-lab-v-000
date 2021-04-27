// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       coordinates: this.props.onReceiveCoordinates
    //     }
    //   }

    // in order to use a 'callback prop', on line 16 you cannot use 'this.coordinates' 

      handleClick = (event) => {
          this.props.onReceiveCoordinates([event.clientX, event.clientY])
      }

    render() {
        return (
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}
