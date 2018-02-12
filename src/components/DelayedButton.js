// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
  }

  setTimeout = (event) => {
    event.persist();
    this.props.onDelayedClick(event);
  }

  // handleClick = (event) => {
  //   event.persist();
  //   setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay)
  // }

  render() {
    return (
      // <button onClick={this.handleClick}>Delay It</button>
      <button onClick={this.setTimeout} delay={this.props.delay}>Delay It</button>
    );
  }
}

export default DelayedButton;
