// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

  buttonClick = function (event) {
    event.persist();

    setTimeout(function () {
      this.props.onDelayedClick(event);
    }.bind(this), this.props.delay)
  }.bind(this);

  render(){
    return <button onClick={this.buttonClick}>DelayedButton</button>
  }
}

export default DelayedButton
