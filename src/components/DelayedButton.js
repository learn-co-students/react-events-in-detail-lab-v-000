// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

// What they are asking for in this lab makes no sense to me whatsoever and
// is totally out of context.
// class DelayedButton extends React.Component {
//   render() {
//     return(
//       <button onClick={this.props.onDelayedClick} {this.props.delay}/>
//     )
//   }
//
// }

export default DelayedButton
