// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {


  delayEventHandler = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick , this.props.delay)
    event.persist()
  }

  render(){
    return (
      <button onClick={this.delayEventHandler}>
        Delayed Button
      </button>
    );
  }
}

export default DelayedButton;
