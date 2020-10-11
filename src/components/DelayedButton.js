import React, { Component } from 'react';
class DelayedButton extends Component {

  constructor(props) {
    super(props)
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}></button>
    );
  }
}
 
export default DelayedButton;