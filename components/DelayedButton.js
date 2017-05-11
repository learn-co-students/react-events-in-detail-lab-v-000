const React = require('react');

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleTheClick = this.handleTheClick.bind(this);
  }
  handleTheClick(event) {
    event.persist();
    setTimeout((e) => this.props.onDelayedClick(event), this.props.delay)
  }
  render() {
    return (
      <button onClick={this.handleTheClick}></button>
    )
  }
}
