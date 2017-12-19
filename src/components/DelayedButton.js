import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DelayedButton extends Component {
  handleClick = e => {
    const { onDelayedClick, delay } = this.props;
    e.persist();
    setTimeout(() => {
      onDelayedClick(e);
    }, delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

DelayedButton.propTypes = {
  onDelayedClick: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

export default DelayedButton;
