import React from 'react';

class DelayedButton extends React.Component {

  clicked = (event) => {
    event.persist();

    setTimeout(() => {
      this.props.onDelayedClick(event);
      },
      this.props.delay
    );
  }

  render() {
    return (
      <button onClick={this.clicked}></button>
    );
  }
}

export default DelayedButton;
