const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const xTarget = event.pageX;
    const yTarget = event.pageY;

    this.props.onReceiveCoordinates([xTarget, yTarget])
  }

  render(){
    return (
       <button onClick={this.handleClick}>Get The Mouse Coords!</button>
    );
  }

}

module.exports = CoordinatesButton;
