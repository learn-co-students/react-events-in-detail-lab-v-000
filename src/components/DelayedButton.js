import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    this.whenClicked = this.whenClicked.bind(this);
  }

  whenClicked(event) {
    event.persist();
    setTimeout( () => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }


  render() {
    return(
      <button onClick={this.whenClicked}>Delayed</button>
    );
  }
}
