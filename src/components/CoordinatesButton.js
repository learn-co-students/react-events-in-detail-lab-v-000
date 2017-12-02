// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {

   coordinatesClick = (e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY]);
   }

   render() {
      return (
         <button onClick={this.coordinatesClick}>Click Me!</button>
      )
   }

}

export default CoordinatesButton;