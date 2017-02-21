const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.onMouseClick = this.onMouseClick.bind(this)
  }

  onMouseClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this.onMouseClick}></button>
    );
  }
};

module.exports = CoordinatesButton;