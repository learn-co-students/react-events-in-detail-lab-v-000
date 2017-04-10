const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let arr = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(arr)
  }

  render () {
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    );
  }
}

module.exports = CoordinatesButton;
