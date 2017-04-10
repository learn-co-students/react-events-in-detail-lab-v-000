const React = require('react');

class DelayedButton extends React.Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return(
      <button onClick={this.buttonClick}>Click Me!</button>
    );
  }
};

module.exports = DelayedButton;