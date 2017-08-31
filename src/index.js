import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={function(coordinates) {
      console.log(`X: ${coordinates[0]} Y: ${coordinates[1]}`)
    }}/>
    <DelayedButton onDelayedClick={function(delay) {

    }} delay={1000}/>
  </div>,
  document.getElementById('root')
);