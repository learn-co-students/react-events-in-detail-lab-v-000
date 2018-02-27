import React from 'react';

export default class CoordinatesButton extends React.Component {

  coordinates = (event) => {
    const coordinatesArray = [event.clientX, event.clientY]
     this.props.onReceiveCoordinates(coordinatesArray)
   };

   render(){
     return(
       <button onClick={this.coordinates}/>
     )
   }
}
