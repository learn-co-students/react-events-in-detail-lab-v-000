// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  clickEvent = (event) => {
    event.persist()
    setTimeout( () => {
      this.props.onDelayedClick(event);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Delay</button>
      </div>
    );
  }
}

export default DelayedButton;
