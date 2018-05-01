import React from 'react';

export default class CoordinatesButton extends React.Component {
  clickHandler = (event) => {
    const coordinates = [event.clientX, event.clientY];
    return this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} />
      </div>
    )
  }
}
