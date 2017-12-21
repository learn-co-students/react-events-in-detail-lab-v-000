// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();

    console.log(this.props.onDelayedClick(event))

    //setTimeout( function () {
    //  this.props.onDelayedClick(event.type);
    //},this.props.delay)

  }

  render () {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default DelayedButton;
