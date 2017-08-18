import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  };

  render() {

    return (
      <div>
        <button onClick={this.handleClick} />
        <p>Mouse location is { this.x }, { this.y }</p>
      </div>
    )
  }
}
