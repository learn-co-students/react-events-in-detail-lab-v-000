import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.onReceiveCoordinates);
    this.state = { onClickCallback: props.onReceiveCoordinates }
  }

  buttonClick = (e) => {
    const mouseLoc = [e.pageX, e.pageY];
    this.state.onClickCallback(mouseLoc);
    console.log(mouseLoc);
  }

  render() {
    return ( <button onClick={this.buttonClick}>cButton</button> );
  }
}

export default CoordinatesButton;
