import React from 'react';

export default class CoordinatesButton extends React.Component {
 constructor() {
   super();

   this.getCoordinates = this.getCoordinates.bind(this);

 }

 getCoordinates(e){
   var x = e.clientX
   var y = e.clientY
   this.props.onReceiveCoordinates([x, y])
 }


 render() {
  return (
   <button onClick={this.getCoordinates}> Click Me!</button>
  )
 }
}
