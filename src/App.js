import React, { Component } from 'react';
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

class App extends Component {

  onReceiveCoordinates = (array) => {
    console.log(array)
  }

  onDelayedClick = (event) => {
    // console.log(event.type)
    console.log('SOS')
  }

  render() {
    return (
      <div>
        <CoordinatesButton onReceiveCoordinates={this.onReceiveCoordinates} />
        <DelayedButton onDelayedClick={this.onDelayedClick} delay={5000} />
      </div>
    )
  }
}

export default App;
