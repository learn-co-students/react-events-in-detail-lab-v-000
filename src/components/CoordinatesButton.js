import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return(
      <button type="button" id="coord_button" onClick={this.handleClick}>Retrieve Coordinates</button>
    )
  }
}
