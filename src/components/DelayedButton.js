import React from 'react';

class DelayedButton extends React.Component {

  buttonClicked = (e) => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.buttonClicked}>Click</button>
    );
  }
}

export default DelayedButton;
