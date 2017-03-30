const React = require('react');

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.delay = this.delay.bind(this);
  }

  delay(event) {
    event.persist();
    this.props.onDelayedClick(event);
  }

  render() {

    return (
      <button onClick={this.delay}>Delayed</button>
    );
  }
}

DelayedButton.propTypes = {
  delay: React.PropTypes.number,
  onDelayedClick: React.PropTypes.func
};

module.exports = DelayedButton;
