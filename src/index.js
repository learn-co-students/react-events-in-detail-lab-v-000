import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
// <DelayedButton />
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton />
  </div>,
  document.getElementById('global')
);
