// Code DelayedButton Component Here
import React, { Component } from 'react';
// import { onReceiveCoordinates } from './src/index';


export default class DelayedButton  extends Component {
  clickHandler = (event) => {
          event.persist();
          setTimeout( () => {
             return this.props.onDelayedClick(event)
          }, this.props.delay)
      }

      render () {
          return <button onClick={this.clickHandler}>button2</button>
      }
}
 // onClick={this.coordinates}
