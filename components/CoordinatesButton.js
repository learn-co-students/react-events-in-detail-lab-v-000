const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    const xTarget = event.pageX;
    const yTarget = event.pageY;
    console.log(xTarget)
    this.props.onReceiveCoordinates([xTarget, yTarget])
  }

  render(){
    return (
       <button onClick={this.onClick}>Get The Mouse Coords!</button>
    );
  }

}

module.exports = CoordinatesButton;
