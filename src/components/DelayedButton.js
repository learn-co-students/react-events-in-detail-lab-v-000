// Code DelayedButton Component Here
import React from 'react';

  class DelayedButton extends React.Component {


    handleClick = event => {
      setTimeout(() => {
        // to avoid event passed to cb being pooled use event.persist()
        event.persist();
        this.props.onDelayedClick(event);
      }, this.props.delay);
    };


    render() {
      return (
        <div>
        <button onClick={this.handleClick}>Delayed Click </button>
        </div>
      )
    }
  }

  export default DelayedButton;
