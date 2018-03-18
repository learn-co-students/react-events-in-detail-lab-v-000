import React from 'react';
import PropTypes from 'prop-types';

class DelayedButton extends React.Component {

  delayEvent = (event) => {
    event.persist();

    setTimeout(() => {
      this.props.onDelayedClick(event);
    },
    this.props.delay);
  }


  render() {
    return (
      <button onClick={this.delayEvent}>Delay</button>
    );
  }
}


export default DelayedButton;
