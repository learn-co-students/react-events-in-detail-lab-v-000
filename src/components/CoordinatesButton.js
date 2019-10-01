// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      onReceiveCoordinates: props.onReceiveCoordinates
    }
  }

  // arrayCreator = (e) => (console.log(e.clientY))
  arrayCreator = (event) => {
    const arrayCoordinates = [event.clientX, event.clientY];
    //console.log(arrayCoordinates)
    this.setState({ onReceiveCoordinates: this.props.onReceiveCoordinates(arrayCoordinates)  })
  }





  render(){
    return (
      <button onClick={this.arrayCreator}> Click Me!</button>
    );
  }

}

export default CoordinatesButton;
