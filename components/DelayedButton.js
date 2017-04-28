import React from 'react'
import PropTypes from 'prop-types';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    ev.persist()
    setTimeout(() => this.props.onDelayedClick(ev), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

DelayedButton.propTypes = {
  onDelayedClick: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired
}

export default DelayedButton
