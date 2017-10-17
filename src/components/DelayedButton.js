import React from 'react';

class DelayedButton extends React.Component {



  handleClick = (event) => {
    event.persist();
    this.props.onDelayedClick(event);
    //setTimeout(function(), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Focus on me!</button>
    );
  }
}

export default DelayedButton;
