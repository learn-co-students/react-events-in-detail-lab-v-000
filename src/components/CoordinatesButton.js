import React from 'react';

export default class CoordinatesButton extends React.Component {

    receiveCoordinates = (event) => {
      const coordinates = [event.clientX, event.clientY]
      this.props.onReceiveCoordinates(coordinates)
    }

    onReceiveCoordinates
  render() {
    return (
      <view>
        <button onClick={this.receiveCoordinates}
        >Get Coordinates
        </button>
      </view>
    )
  }
}
