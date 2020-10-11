import React, { Component } from 'react';
class DelayedButton extends Component {

  // constructor(props) {
  //   super(props)
  // }

  handleClick = (event) => {    
    setTimeout( {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}></button>
    );
  }
}
 
export default DelayedButton;