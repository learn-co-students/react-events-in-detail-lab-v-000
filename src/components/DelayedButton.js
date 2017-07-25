import React from 'react';

class DelayedButton extends React.Component {

  clicked = (e) => {
    e.persist();

    setTimeout(
      () => {this.props.onDelayedClick(e)},
      this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clicked}></button>
    )
  }
}

export default DelayedButton;
