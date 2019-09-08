import React from 'react';

class CoordinatesButton extends React.Component{
  getCoordinates = (event) => {
    var x = event.pageX;
    var y = event.pageY;
    var array = [x,y]
    this.props.onReceiveCoordinates(array)
  }



  render(){
    return(

      <button onClick={this.getCoordinates}>Click This</button>
    )
  }
}

export default CoordinatesButton;
