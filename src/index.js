import React from 'react';
import ReactDOM from 'react-dom';

import DelayedButton from './components/DelayedButton';
import CoordinatesButton from './components/CoordinatesButton';

ReactDOM.render(
  <div>
    <DelayedButton />
    <CoordinatesButton />
  </div>,
  document.getElementById('root')
);
