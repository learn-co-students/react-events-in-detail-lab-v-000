import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
    this.delayClick = this.delayClick.bind(this);
  }

  delayClick(e) {
    e.persist();

    setTimeout(() => {this.props.onDelayedClick(e) }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.delayClick}>Tickle me too!</button>
    );
  }

}
