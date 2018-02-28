import React from 'react';

export default class CoordinatesButton extends React.Component {
  click = (e) => {
    this.props.onReceiveCoordinates([e.pageX, e.pageY])
  }

  render() {
    return (
      <button onClick={this.click}>Clickable</button>
    )
  }
}




// 1. In the `components/CoordinatesButton.js` file, create a `CoordinatesButton` React component.
// 2. This component takes in one prop: `onReceiveCoordinates`. This prop is a _function_. (This props is only passed in the test suite, you will have errors in the browser)
// 3. When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
// 4. The `onReceiveCoordinates` callback prop is then called with these coordinates.
