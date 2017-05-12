const React = require('React');

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    this.delayClick = this.delayClick.bind(this);
  }

  delayClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    
  }

  render() {
    return (
      <button onClick={this.delayClick}>Click to Delay></button>
    );
  }
}
