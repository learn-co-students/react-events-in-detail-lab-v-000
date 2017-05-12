const React = require('React');

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }
  
  clicked(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render() {
    return (
      <button onClick={this.clicked}>Click me</button>
    );
  }
}
