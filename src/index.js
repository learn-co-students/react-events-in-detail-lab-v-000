import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={coords => console.log(coords) } />
    <DelayedButton onDelayedClick={delay => console.log(delay)} delay={5000}/>
  </div>,
  document.getElementById('global')
);
