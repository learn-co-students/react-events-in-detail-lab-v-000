const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this);
  }

  onReceiveCoordinates(event){
    const xTarget = event.pageX;
    const yTarget = event.pageY;

    console.log([xTarget, yTarget])
  }

  render(){
    return (
       <button onClick={this.onReceiveCoordinates}>Get The Mouse Coords! </button>
    );
  }

}






module.exports = CoordinatesButton;
