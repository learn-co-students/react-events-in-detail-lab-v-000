import React from 'react';

class DelayedButton extends React.Component {

  clickAction = (event) => {
    const delayFunction = this.props.onDelayedClick;
    event.persist();
    setTimeout(function() {
      delayFunction(event);
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.clickAction}>
        Click me!
      </button>
    )
  }
}

export default DelayedButton;
