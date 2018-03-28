import React from 'react';

export default class CoordinatesButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.props.onReceiveCoordinates([e.screenX, e.screenY]) }>My button</button>
      </div>
    )
  }
}
